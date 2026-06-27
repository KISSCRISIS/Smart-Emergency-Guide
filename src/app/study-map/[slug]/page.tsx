import { notFound } from 'next/navigation';
import { getStudyPath, studyPaths } from '@/data/studyPaths';
import { StudyPathClient } from '@/components/StudyPathClient';

export function generateStaticParams() {
  return studyPaths.map((path) => ({ slug: path.id }));
}

export default function StudyPathDetailPage({ params }: { params: { slug: string } }) {
  const path = getStudyPath(params.slug);
  if (!path) return notFound();
  return <StudyPathClient path={path} />;
}
