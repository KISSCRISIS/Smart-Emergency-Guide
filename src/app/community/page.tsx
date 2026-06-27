import { InternalPage, GlassCard } from '@/components/InternalPage';
import { MessageCircle, MessagesSquare, Megaphone, Lightbulb, Users } from 'lucide-react';

const cards = [
  { icon: MessagesSquare, title: 'Case Discussions', desc: 'Post clinical cases and get feedback from other learners. Practice your reasoning in a safe, moderated environment.' },
  { icon: Lightbulb, title: 'Exam Tips', desc: 'Share board exam strategies, high-yield resources, and oral exam preparation techniques that worked for you.' },
  { icon: Megaphone, title: 'Ask Peers', desc: 'Stuck on a concept? Ask the community. Senior residents and specialists can share their clinical approach.' },
  { icon: MessageCircle, title: 'Share Learning Notes', desc: 'Share your own study notes, mnemonics, summaries, and visual aids with other emergency medicine learners.' },
];

export default function CommunityPage() {
  return (
    <InternalPage
      title="Community"
      subtitle="Connect with emergency medicine learners and practitioners."
      introText="A community discussion space for emergency medicine learners. Share cases, ask questions, discuss exam strategies, and learn together. هذا القسم للمناقشة المجتمعية بين طلاب ومتدربي طب الطوارئ."
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Users size={16} /> Community coming soon — discussion features are not live yet. Cards below show planned topics only.
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <GlassCard key={card.title} className="flex flex-col">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-base font-black text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{card.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </InternalPage>
  );
}
