import { VisualGallery } from '@/components/VisualGallery';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { visualAssets } from '@/lib/database';

export default function VisualAtlasPage() {
  return <>
    <SectionFeatureHero
      title="Visual Atlas"
      subtitle="A cleaned, filtered, topic-aware emergency medicine visual atlas. The goal is not to show raw PDF pages, but clinically useful ECGs, tables, algorithms, diagrams, and image patterns."
      arabic="هذا القسم يعرض الصور الطبية المفيدة فقط بعد فلترة الغلاف والمقدمة والصفحات العشوائية، مع ربط كل صورة بموضوع واضح."
      tone="blue"
    />
    <VisualGallery visuals={visualAssets as any[]} title="Cleaned Topic-Mapped Visual Gallery" />
  </>;
}
