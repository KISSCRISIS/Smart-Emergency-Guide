import fitz, os, re, json, hashlib
from PIL import Image
from io import BytesIO

pdf='/mnt/data/Copy of Emergency-Medicine-FULL(1).pdf'
project='/mnt/data/seg_v4_work/smart-emergency-guide-complete-v2'
outdir=os.path.join(project,'public','visual-assets')
os.makedirs(outdir, exist_ok=True)

doc=fitz.open(pdf)

chapter_map={
 'Cardiovascular System':'cardiovascular', 'Orthopedics/Rheumatology':'orthopedics-rheumatology',
 'Gastrointestinal/Nutritional':'gastrointestinal', 'Pulmonology':'pulmonology', 'Neurology':'neurology',
 'ENOT/Ophthalmology':'ent-ophthalmology','Urology/Renal':'urology-renal','Dermatology':'dermatology',
 'Endocrinology':'endocrinology','Obstetrics/Gynecology':'obgyn','Psychiatry/Behavioral Medicine':'psychiatry',
 'Hematology':'hematology'
}

def clean_line(s):
    return re.sub(r'\s+', ' ', s.replace('\ufb01','fi').replace('\ufb02','fl').strip())

def parse_title(lines):
    skip={'Notes','Diagnostic Studies','Management','Pathophysiology','Presentation','Physical Exam','Patient','Comments'}
    meaningful=[]
    for l in lines:
        if not l or '© 2019' in l or l.isdigit() or l in chapter_map or l == 'CHAPTER 1':
            continue
        if l.strip() in skip:
            continue
        meaningful.append(l)
    # prefer subtopic headings: A. / B. / C.
    for l in meaningful[:20]:
        if re.match(r'^[A-Z]\.[\s\w\-/()’‘]+', l) and len(l)>5:
            return re.sub(r'^[A-Z]\.\s*','',l)
    # then roman headings
    for l in meaningful[:12]:
        if re.match(r'^[IVX]+\.', l) and len(l)>5:
            return re.sub(r'^[IVX]+\.\s*','',l)
    # else first non-generic line
    for l in meaningful[:15]:
        if len(l)>4 and not l.startswith('•'):
            return l
    return 'Emergency Medicine Visual'

def slug(s):
    s=s.lower().replace('≥','gte').replace('≤','lte')
    s=re.sub(r'[^a-z0-9]+','-',s).strip('-')
    return s[:70] or 'visual'

def classify(text, title, page_no, aspect=1.0):
    t=(text+' '+title).lower()
    tags=[]
    visualType='Clinical visual'
    sections=['Topics']
    category='Topics'
    def has(*ks): return any(k.lower() in t for k in ks)
    if has('ecg','qrs','p waves','p wave','st elevation','stemi','nstemi','heart block','wolff','wpw','fibrillation','flutter','tachycardia','bradycardia','bundle branch','torsades','ventricular','supraventricular','delta wave'):
        visualType='ECG strip / rhythm visual'; category='ECG'; sections=['ECG Atlas','Topics']
    if has('ultrasound','sonogram','echocardiography','transabdominal ultrasound','pocus','effusion with tamponade','pericardial effusion','aorta'):
        if 'POCUS Atlas' not in sections: sections.insert(0,'POCUS Atlas')
        if category=='Topics': category='POCUS / Imaging'
        visualType='Ultrasound / bedside imaging visual'
    if has('treatment','management','initial therapy','algorithm','criteria','score','classification','staging','risk-stratify','bundle','rule') or aspect > 2.1:
        if category=='Topics': category='Algorithm / Table'
        if 'Algorithms' not in sections: sections.append('Algorithms')
        if visualType=='Clinical visual': visualType='Algorithm / table / high-yield summary'
    if has('shock','sepsis','respiratory failure','ventilation','vasopressor','cardiac arrest','tamponade','hypotension','dka','hyperkalemia','hyponatremia','hypernatremia','acidosis','critical'):
        if 'Critical Care' not in sections: sections.append('Critical Care')
    if has('toxic','toxicity','overdose','poison','antidote','organophosphate','salicylate','acetaminophen','digoxin','cyanide','carbon monoxide','opioid','tca'):
        sections=['Toxicology & Antidotes','Topics'] if sections==['Topics'] else list(dict.fromkeys(['Toxicology & Antidotes']+sections))
        category='Toxicology / Antidote'
    if has('x-ray','radiograph','ct','mri','computed tomography','imaging'):
        visualType='Diagnostic imaging visual'; category='Imaging'
    if has('fracture','dislocation','laceration','burn','trauma'):
        if 'Visual Signs' not in sections: sections.append('Visual Signs')
        if category=='Topics': category='Trauma / Clinical signs'
    if has('rash','lesion','skin','scabies','cellulitis','abscess','urticaria'):
        if 'Visual Signs' not in sections: sections.append('Visual Signs')
        category='Clinical signs'
    # section tags from title words
    for word in re.findall(r'[A-Za-z][A-Za-z\-]{3,}', title):
        if len(tags)<8: tags.append(word.lower())
    # core keywords
    for k in ['ecg','shock','sepsis','airway','toxicology','antidote','stemi','asthma','copd','stroke','trauma','ultrasound','fracture','arrhythmia','hypertension','heart failure','tamponade']:
        if k in t and k not in tags: tags.append(k)
    return category, visualType, list(dict.fromkeys(sections)), tags[:12]

def arabic_for(asset):
    topic=asset['topic']
    vt=asset['visualType']
    if 'ECG' in vt:
        return f"هذه الصورة تساعدك تربط شكل التخطيط بحالة {topic}. لا تحفظ الرسم فقط؛ اسأل: ما الخطر؟ وما الخطوة العاجلة؟"
    if 'Algorithm' in vt or 'table' in vt:
        return f"استخدم هذا الجدول أو الخوارزمية كخريطة سريعة لموضوع {topic}: ابدأ بالأخطر، ثم طبّق الخطوة التي تغيّر قرار الطوارئ."
    if 'Ultrasound' in vt:
        return f"هذه الصورة توضّح ما يجب أن تبحث عنه بالسونار في {topic}. الفكرة أن ترى العلامة التي تغيّر القرار بسرعة."
    return f"هذه الصورة مرتبطة بموضوع {topic} وتساعد على فهم العلامة أو النمط بدل حفظ النص فقط."

assets=[]
seen_hash=set()
for page_index in range(10, doc.page_count):  # skip front matter and TOC
    page=doc[page_index]
    lines=[clean_line(l) for l in page.get_text().split('\n') if clean_line(l)]
    if not lines: continue
    text=' '.join(lines)
    if re.search(r'(published by|table of contents|let’s get started|core values|copy editor)', text, re.I):
        continue
    chapter=lines[0] if lines else 'Emergency Medicine'
    title=parse_title(lines)
    for img_idx,img in enumerate(page.get_images(full=True)):
        xref=img[0]
        rects=page.get_image_rects(xref)
        if not rects: continue
        rect=rects[0]
        if rect.y0 > 735 or rect.width < 90 or rect.height < 50 or rect.width*rect.height < 9000:
            continue
        try:
            pix=fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha >= 4:
                pix=fitz.Pixmap(fitz.csRGB, pix)
            data=pix.tobytes('png')
        except Exception:
            continue
        h=hashlib.sha1(data).hexdigest()
        if h in seen_hash: continue
        seen_hash.add(h)
        im=Image.open(BytesIO(data)).convert('RGB')
        # skip tiny logos/headers/ornaments
        if im.width < 160 or im.height < 70 or (im.width/im.height>8):
            continue
        # cap size for web
        maxw=1100
        if im.width>maxw:
            newh=int(im.height*maxw/im.width)
            im=im.resize((maxw,newh), Image.LANCZOS)
        category, vtype, sections, tags = classify(text, title, page_index+1, im.width/max(1,im.height))
        sec_slug=slug(sections[0])
        asset_id=f"pdf-{slug(title)}-p{page_index+1}-{img_idx+1}"
        dirp=os.path.join(outdir, sec_slug)
        os.makedirs(dirp, exist_ok=True)
        rel=f"/visual-assets/{sec_slug}/{asset_id}.jpg"
        im.save(os.path.join(project,'public',rel.lstrip('/')), 'JPEG', quality=88, optimize=True)
        desc='Clinically relevant visual extracted from the official PDF source and mapped by topic keywords. It should be reviewed before final publication.'
        asset={
            'id':asset_id,
            'title':title,
            'topic':title,
            'chapter':chapter,
            'category':category,
            'sectionTargets':sections,
            'visualType':vtype,
            'src':rel,
            'source':'Uploaded Emergency Medicine visual PDF',
            'sourcePage':page_index+1,
            'page':page_index+1,
            'tags':tags,
            'approved':False,
            'hidden':False,
            'needsReview':True,
            'description':desc,
            'englishFocus':f"Use this visual to study {title}: identify the pattern, connect it to the emergency diagnosis, then decide the safest next ED action.",
            'arabicSupport':arabic_for({'topic':title,'visualType':vtype})
        }
        assets.append(asset)

# prefer ECG/Critical first? Keep all sorted by page
with open(os.path.join(project,'src','data','visualAssets.json'),'w',encoding='utf-8') as f:
    json.dump(assets,f,ensure_ascii=False,indent=2)
print('assets', len(assets))
from collections import Counter
print('categories', Counter(a['category'] for a in assets).most_common())
print('sections', Counter(s for a in assets for s in a['sectionTargets']).most_common())
