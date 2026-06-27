import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { BoardReviewRoutes } from '@/components/BoardReviewRoutes';

export default function BoardReviewPage(){
  return <>
    <SectionFeatureHero title="Jordanian Board & Exam Review" subtitle="Three structured exam routes: Part 1 core knowledge, Part 2 clinical scenarios, and Internship/JMC-style safe practice. Each route includes a bilingual introduction, exam-style focus, and a 100-MCQ bank." arabic="هذا القسم لا يعطي أسئلة عشوائية؛ هو يدرّبك على طريقة تفكير كل مسار امتحاني: معرفة، سيناريو، أو قرار عملي آمن." tone="slate"/>
    <BoardReviewRoutes />
  </>;
}
