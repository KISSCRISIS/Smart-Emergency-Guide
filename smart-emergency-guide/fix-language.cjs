const fs = require("fs");
const path = require("path");

const roots = ["app", "components"];

const replacements = {
  "دليل الطوارئ الذكي": "Smart Emergency Guide",
  "محتوى الدليل": "Guide Content",
  "اختر القسم الذي تريد مراجعته الآن": "Choose a section to review",
  "العودة للصفحة الرئيسية": "Back to Home",
  "مراجعة بورد الطوارئ": "Emergency Board Review",
  "أطلس تخطيط القلب": "ECG Atlas",
  "أطلس الفيديو السريع": "Quick POCUS Atlas",
  "دليل الأدوية والتسريبات": "Drugs & Infusions",
  "جداول السموم": "Toxicology Tables",
  "البطاقات التعليمية والكويزات": "Flashcards & Quizzes",
  "مراجعة أساسية": "Core Review",
  "دروس ومقاطع": "Lessons & Videos",
  "جداول مراجعة": "Review Tables",
  "عودة": "Back",
  "الرئيسية": "Home",
  "تسجيل الدخول": "Login",
  "إنشاء حساب": "Register",
  "لوحة الطالب": "Student Dashboard",
  "الاختبارات": "Quizzes",
  "الإشعارات": "Notifications",
  "الملف الشخصي": "Profile",
  "الإعدادات": "Settings",
  "إنعاش القلب والرئتين": "ACLS & CPR",
  "الصدمة وأنواعها": "Shock Types",
  "ألم الصدر": "Chest Pain",
  "الإصابات والحوادث": "Trauma",
  "حالات الأطفال الحرجة": "Pediatric Emergencies",
  "الأخطاء الشائعة في الامتحان": "Common Exam Traps",
  "بطاقات": "Flashcards",
  "أسئلة": "Questions",
  "اختبار سريع قبل الامتحان": "Quick Pre-Exam Test",
  "دقيقة": "min",
  "قيد التطوير": "Coming Soon"
};

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(full)) files.push(full);
  }
  return files;
}

let changed = 0;

for (const root of roots) {
  for (const file of walk(root)) {
    let text = fs.readFileSync(file, "utf8");
    let next = text;

    for (const [from, to] of Object.entries(replacements)) {
      next = next.split(from).join(to);
    }

    if (next !== text) {
      fs.writeFileSync(file, next, "utf8");
      console.log("Language fixed:", file);
      changed++;
    }
  }
}

console.log("Changed files:", changed);
