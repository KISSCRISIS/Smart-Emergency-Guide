import { notFound } from 'next/navigation';
import { getStudyPath, studyPaths } from '@/data/studyPaths';
import { StudyPathClient } from '@/components/StudyPathClient';

export function generateStaticParams() {
  return studyPaths.map((path) => ({ slug: path.id }));
}

export default async function StudyPathDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const path = getStudyPath(slug);
  if (!path) return notFound();
  return <StudyPathClient path={path} />;
}
