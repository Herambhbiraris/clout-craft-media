import React, { useState } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Play, Flame, Zap, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [selectedHook, setSelectedHook] = useState<number>(0);

  const hookDemos = [
    {
      type: 'Contrarian Hook',
      hookText: '"Stop running Meta ads until your organic 3-second retention looks like this..."',
      stat: '+340% View Through',
      reach: '2.8M Views',
      format: 'IG Reels & YouTube Shorts',
      tag: 'VIRAL RETENTION'
    },
    {
      type: 'Direct Proof Hook',
      hookText: '"We spent ₹1.5L testing 20 creator hooks — here are the only 3 that printed 4.7x ROAS."',
      stat: '4.7x Blended ROAS',
      reach: '₹34.8L Ad Revenue',
      format: 'Meta Performance Ads',
      tag: 'REVENUE ENGINE'
    },
    {
      type: 'Founder Narrative',
      hookText: '"Most founders build in secret. Here is the exact content sprint that booked us 140 enterprise demos."',
      stat: '142 Demos Booked',
      reach: '$1.2M Pipeline',
      format: 'LinkedIn + Video Podcast',
      tag: 'B2B INBOUND'
    }
  ];

  return (
    <section id="top" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-8 pb-16 lg:py-16 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-panel-2/30 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="brutal-tag bg-panel-1 border-line text-ink">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-ping" />
            <span className="font-bold">ACCEPTING 2 NEW CLIENTS FOR Q2</span>
          </div>

          <div className="brutal-tag bg-white text-ink hidden sm:inline-flex">
            <ShieldCheck className="w-3.5 h-3.5 text-brand" />
            <span>FOUNDER-LED &bull; ZERO ACCOUNT HAND-OFFS</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-ink leading-[1.08] mb-6">
            Crafting Clout.{' '}
            <span className="relative inline-block mt-1">
              <span className="relative z-10 bg-panel-dark text-white px-4 py-1.5 rounded-xl border-2 border-line shadow-brutal inline-block rotate-[-1deg]">
                Building Brands.
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            We help ambitious startups, creators, and challenger brands turn fleeting attention into compounding revenue through viral video, high-ROAS paid ads, and narrative positioning.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="brutal-btn-primary text-base py-4 px-8 w-full sm:w-auto shadow-brutal group"
            >
              <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Claim Free 48h Growth Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#/case-studies"
              className="brutal-btn-secondary text-base py-4 px-8 w-full sm:w-auto shadow-brutal flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-brand fill-brand" />
              <span>Explore Case Studies</span>
            </a>
          </div>

          <p className="text-xs font-mono text-ink font-bold mt-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-accent-emerald">✓</span> 100% Free Strategy Session
            <span className="text-ink/70 font-black">&bull;</span>
            <span className="text-accent-emerald">✓</span> No Long Lock-in Contracts
            <span className="text-ink/70 font-black">&bull;</span>
            <span className="text-accent-emerald">✓</span> 48-Hour Turnaround
          </p>
        </div>

        {/* Hero Interactive Bento Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feature Card: Interactive Hook Architecture Lab */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-line/20 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-coral border border-line" />
                  <div className="w-3 h-3 rounded-full bg-accent-amber border border-line" />
                  <div className="w-3 h-3 rounded-full bg-accent-emerald border border-line" />
                  <span className="font-mono text-xs font-bold text-ink ml-2">
                    CLOUTCRAFT_HOOK_ENGINE.v2
                  </span>
                </div>
                <span className="font-mono text-xs bg-panel-1 px-3 py-1 rounded-full border border-line font-black text-ink">
                  LIVE FRAMEWORK
                </span>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-ink font-bold mb-2">
                  Select Viral Architecture:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {hookDemos.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedHook(idx)}
                      className={`text-left p-2.5 rounded-lg border-2 border-line text-xs font-bold transition-all ${
                        selectedHook === idx
                          ? 'bg-panel-dark text-white shadow-brutal-sm -translate-y-0.5'
                          : 'bg-bg text-ink hover:bg-panel-1'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        {idx === 0 && <Flame className="w-3.5 h-3.5 text-accent-coral" />}
                        {idx === 1 && <TrendingUp className="w-3.5 h-3.5 text-accent-emerald" />}
                        {idx === 2 && <Zap className="w-3.5 h-3.5 text-accent-amber" />}
                        <span className="truncate">{demo.type}</span>
                      </div>
                      <div className={`text-[10px] font-mono font-medium ${selectedHook === idx ? 'text-purple-200' : 'text-ink/80'}`}>
                        {demo.format}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hook Script Preview Window */}
              <div className="bg-bg border-2 border-line p-5 rounded-xl mb-5 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-black text-brand uppercase tracking-wider">
                    {hookDemos[selectedHook].tag}
                  </span>
                  <span className="text-[11px] font-mono text-ink font-bold bg-white px-2 py-0.5 rounded border border-line">
                    Hook Duration: 0:03s
                  </span>
                </div>
                <p className="text-base sm:text-lg font-display font-bold text-ink italic leading-snug">
                  {hookDemos[selectedHook].hookText}
                </p>
              </div>
            </div>

            {/* Performance Output of Hook */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-line/20">
              <div className="bg-panel-1 border-2 border-line rounded-lg p-3">
                <span className="text-[11px] font-mono uppercase font-bold text-ink block">
                  Measured Retention Impact
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-brand">
                  {hookDemos[selectedHook].stat}
                </span>
              </div>
              <div className="bg-panel-2 border-2 border-line rounded-lg p-3">
                <span className="text-[11px] font-mono uppercase font-bold text-ink block">
                  Verified Outcome
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-ink">
                  {hookDemos[selectedHook].reach}
                </span>
              </div>
            </div>
          </div>

          {/* Right Bento Column: Verified Growth Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Stat Block */}
            <div className="brutal-card brutal-card-dark p-6 bg-panel-dark text-white" style={{ backgroundColor: '#241447', color: '#FFFFFF' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-200 font-bold">
                  AGGREGATE IMPACT
                </span>
                <span className="bg-accent-emerald text-white font-mono text-xs px-2.5 py-0.5 rounded-full font-black border border-emerald-400">
                  VERIFIED
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-2">
                28.4M+
              </div>
              <p className="text-sm text-purple-100 font-medium leading-relaxed">
                Organic video impressions and paid reach generated across our client partner ecosystem.
              </p>
            </div>

            {/* Middle Split Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="brutal-card p-5 bg-panel-1">
                <span className="font-mono text-[11px] uppercase font-bold text-ink block mb-1">
                  AVERAGE ROAS
                </span>
                <div className="text-3xl font-black font-display text-ink">
                  4.7x
                </div>
                <span className="text-xs font-mono text-ink font-bold mt-1 block">
                  On paid acquisition
                </span>
              </div>

              <div className="brutal-card p-5 bg-panel-2">
                <span className="font-mono text-[11px] uppercase font-bold text-ink block mb-1">
                  FOUNDER RETENTION
                </span>
                <div className="text-3xl font-black font-display text-ink">
                  98%
                </div>
                <span className="text-xs font-mono text-ink font-bold mt-1 block">
                  Month-over-month
                </span>
              </div>
            </div>

            {/* Bottom Founder Promise */}
            <div className="brutal-card p-4 bg-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-panel-dark border-2 border-line flex items-center justify-center shrink-0 shadow-brutal-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink leading-tight">
                  Direct Founder-to-Founder Collaboration
                </h4>
                <p className="text-xs text-ink/90 font-medium mt-0.5">
                  No junior account managers. You work directly with the growth architects behind the numbers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
