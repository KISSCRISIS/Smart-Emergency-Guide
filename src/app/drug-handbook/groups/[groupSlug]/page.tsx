import { notFound } from 'next/navigation';
import { drugList } from '@/lib/database';
import { drugHandbookGroups, getDrugsForGroup } from '@/lib/drugHandbookGroups';
import { DrugGroupClient } from './DrugGroupClient';

export function generateStaticParams() {
  return drugHandbookGroups.map((group) => ({ groupSlug: group.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) {
  const { groupSlug } = await params;
  const group = drugHandbookGroups.find((item) => item.slug === groupSlug);
  return { title: group ? `${group.title} | Drug Handbook` : 'Drug Handbook Group' };
}

export default async function DrugHandbookGroupPage({
  params,
}: {
  params: Promise<{ groupSlug: string }>;
}) {
  const { groupSlug } = await params;
  const group = drugHandbookGroups.find((item) => item.slug === groupSlug);
  if (!group) notFound();

  const drugs = getDrugsForGroup(drugList as any[], group.slug);
  return <DrugGroupClient group={group} drugs={drugs} />;
}
