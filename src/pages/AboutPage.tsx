import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Zap, Target, ArrowRight, Award, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface AboutPageProps {
  onOpenAudit: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAudit }) => {
  const { navigate } = useRouter();

  const principles = [
    {
      num: '01',
      title: 'Craft Before Fluff',
      desc: 'Most agencies write 50-page PowerPoint strategy decks that nobody reads. We lead with scroll-stopping 3-second hooks, dynamic pacing, and performance ads that convert on Day 1.'
    },
    {
      num: '02',
      title: 'Direct Founder Oversight',
      desc: 'When you sign with CloutCraft, you work directly with the founder and senior leads. No rotating junior account reps or telephone games between strategy and editing.'
    },
    {
      num: '03',
      title: 'The 5-to-7 Client Cap',
      desc: 'We purposefully cap our active partner brand roster at 5-7 clients per quarter. We refuse to dilute our attention to chase mass-market agency bloat.'
    },
    {
      num: '04',
      title: '100% Client Asset Ownership',
      desc: 'You own every project file, raw footage, Figma brand asset, and ad account data forever. We never hold your creative or campaigns hostage.'
    }
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="brutal-tag bg-panel-1 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-brand" />
            <span>THE FOUNDER MANIFESTO</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            The Anti-Agency Growth Studio.
          </h1>

          <p className="text-lg text-ink font-medium max-w-2xl mx-auto leading-relaxed">
            We built CloutCraft Media because we were tired of seeing ambitious founders pay hefty agency retainers only to get ignored by junior coordinators.
          </p>
        </div>

        {/* The Origin Story Bento */}
        <div className="brutal-card p-6 sm:p-10 bg-white mb-16 border-2 border-line shadow-brutal-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-wider block">
                WHY WE EXIST
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-display text-ink leading-tight">
                Attention is the new currency. But attention without conversion is useless.
              </h2>
              
              <div className="space-y-3 text-sm sm:text-base text-ink leading-relaxed font-medium">
                <p>
                  In today's algorithmic landscape, consumers scroll past thousands of posts every single day. If your video hook doesn't arrest attention in the first 2.4 seconds, you don't exist.
                </p>
                <p>
                  Yet traditional advertising agencies are still operating like it’s 2012 — holding two-week alignment meetings, charging astronomical overhead fees, and treating short-form viral video like an afterthought.
                </p>
                <p>
                  CloutCraft Media was established in <strong>Nashik, India</strong> as a direct antidote: a high-velocity, founder-led growth engine combining cut-throat viral video pacing with disciplined full-funnel performance marketing.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-ink">
                <MapPin className="w-4 h-4 text-brand" />
                <span>Headquartered in Nashik, Maharashtra &bull; Partnering with Brands Globally</span>
              </div>
            </div>

            {/* Founder Spotlight Card */}
            <div 
              className="lg:col-span-5 bg-panel-dark text-white p-6 sm:p-8 rounded-2xl border-2 border-line shadow-brutal flex flex-col justify-between"
              style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold text-purple-200 bg-white/10 px-2.5 py-1 rounded">
                    FOUNDER-LED ETHOS
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-mint animate-ping" />
                </div>

                <div className="w-16 h-16 rounded-2xl bg-panel-1 text-panel-dark flex items-center justify-center font-display font-black text-2xl mb-4 border-2 border-line shadow-brutal-white">
                  CC
                </div>

                <h3 className="text-2xl font-black font-display text-white mb-1">
                  founders name
                </h3>
                <p className="font-mono text-xs text-purple-200 mb-4 font-bold">
                  Founder &amp; Chief Growth Strategist
                </p>

                <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-6 italic font-medium">
                  "When a founder entrusts us with their brand, they aren't buying billable hours — they are buying speed, market positioning, and revenue. My promise is simple: you work directly with the person who actually cares about the outcome."
                </p>
              </div>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-purple-200 font-bold">
                <span>Direct 1-on-1 Weekly Syncs</span>
                <span className="text-accent-mint font-black">✓ Guaranteed</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Guiding Studio Principles */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase font-bold text-brand block mb-1">
              OUR PLAYBOOK
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-ink">
              The 4 Unbreakable Studio Rules
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="brutal-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm font-black bg-panel-1 text-ink w-8 h-8 rounded-lg border border-line flex items-center justify-center mb-3">
                    {p.num}
                  </span>
                  <h4 className="font-display font-bold text-lg text-ink mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 border-t-2 border-line mt-4 flex items-center gap-1 text-xs font-mono text-brand font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Non-Negotiable</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Stack */}
        <div className="brutal-card p-6 sm:p-8 bg-panel-1 border-line flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase font-bold text-brand block">
              READY TO SCALE WITH US?
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-display text-ink mt-0.5">
              Let's Audit Your Brand's Current Hook Architecture
            </h4>
            <p className="text-xs sm:text-sm text-ink font-medium mt-1 max-w-xl">
              100% free 48-hour tear-down. We dissect your retention drop-off, competitor angles, and ad CAC with zero sales fluff.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="brutal-btn-primary shrink-0 py-3.5 px-6 shadow-brutal text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Book Founder Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
