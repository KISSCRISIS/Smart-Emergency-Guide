import { notFound } from 'next/navigation';
import { drugList } from '@/lib/database';
import { drugHandbookGroups, getDrugsForGroup } from '@/lib/drugHandbookGroups';
import { DrugGroupClient } from './DrugGroupClient';

export function generateStaticParams() {
  return drugHandbookGroups.map((group) => ({ groupSlug: group.slug }));
}

export function generateMetadata({ params }: { params: { groupSlug: string } }) {
  const group = drugHandbookGroups.find((item) => item.slug === params.groupSlug);
  return { title: group ? `${group.title} | Drug Handbook` : 'Drug Handbook Group' };
}

export default function DrugHandbookGroupPage({ params }: { params: { groupSlug: string } }) {
  const group = drugHandbookGroups.find((item) => item.slug === params.groupSlug);
  if (!group) notFound();

  const drugs = getDrugsForGroup(drugList as any[], group.slug);
  return <DrugGroupClient group={group} drugs={drugs} />;
}
