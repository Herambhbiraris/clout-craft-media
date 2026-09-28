import React, { useState } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Play, Flame, Zap, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { HeroStudioRightStage } from './Floating3DObjects';

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
        
        {/* Two-Column Split Hero: Left Text & Right 3D Studio Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 relative">
          
          {/* LEFT COLUMN: All Written Text, Badges, CTAs, and Guarantees */}
          <div className="lg:col-span-7 text-left relative z-10">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-start gap-3 mb-6">
              <div className="brutal-tag bg-purple-50 text-purple-950 border border-purple-200/80">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold">ACCEPTING 2 NEW CLIENTS FOR Q2</span>
              </div>

              <div className="brutal-tag bg-white text-slate-700 border border-slate-200 hidden sm:inline-flex">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                <span>FOUNDER-LED &bull; ZERO ACCOUNT HAND-OFFS</span>
              </div>
            </div>

            {/* Main Hero Header */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-slate-900 leading-[1.08] mb-6 relative">
              <span className="block text-slate-900 drop-shadow-sm">
                Crafting Clout.
              </span>
              <span className="inline-block mt-2 relative">
                {/* Subtle volumetric light wash */}
                <span className="absolute -inset-2 bg-gradient-to-r from-purple-600/25 via-indigo-500/20 to-purple-600/25 rounded-2xl blur-xl -z-10 pointer-events-none" />
                <span className="relative z-10 bg-slate-950 text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-2xl border border-purple-500/35 shadow-xl shadow-purple-950/20 inline-block font-black">
                  Building Brands.
                </span>
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl leading-relaxed mb-8">
              We help ambitious startups, creators, and challenger brands turn fleeting attention into compounding revenue through viral video, high-ROAS paid ads, and narrative positioning.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-5">
              <button
                onClick={onOpenAudit}
                className="brutal-btn-primary text-base py-4 px-8 group justify-center"
              >
                <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Claim Free 48h Growth Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#/case-studies"
                className="brutal-btn-secondary text-base py-4 px-8 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-brand fill-brand" />
                <span>Explore Case Studies</span>
              </a>
            </div>

            {/* Guarantees */}
            <p className="text-xs font-mono text-slate-500 font-bold flex items-center justify-start gap-2 flex-wrap">
              <span className="text-emerald-600 font-black">✓</span> 100% Free Strategy Session
              <span className="text-slate-300 font-black">&bull;</span>
              <span className="text-emerald-600 font-black">✓</span> No Long Lock-in Contracts
              <span className="text-slate-300 font-black">&bull;</span>
              <span className="text-emerald-600 font-black">✓</span> 48-Hour Turnaround
            </p>
          </div>

          {/* RIGHT COLUMN: 3D Cinema Production Camera & Floating 3D Objects */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroStudioRightStage />
          </div>

        </div>

        {/* Hero Interactive Bento Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feature Card: Interactive Hook Architecture Lab */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold text-slate-700 ml-2">
                    CLOUTCRAFT_HOOK_ENGINE.v2
                  </span>
                </div>
                <span className="font-mono text-xs bg-purple-50 px-3 py-1 rounded-full border border-purple-200/80 font-bold text-purple-900">
                  LIVE FRAMEWORK
                </span>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Select Viral Architecture:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {hookDemos.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedHook(idx)}
                      className={`text-left p-3 rounded-xl border text-xs font-bold transition-all ${
                        selectedHook === idx
                          ? 'bg-slate-950 text-white border-purple-500/40 shadow-md -translate-y-0.5'
                          : 'bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-purple-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        {idx === 0 && <Flame className="w-3.5 h-3.5 text-rose-500" />}
                        {idx === 1 && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
                        {idx === 2 && <Zap className="w-3.5 h-3.5 text-amber-500" />}
                        <span className="truncate">{demo.type}</span>
                      </div>
                      <div className={`text-[10px] font-mono font-medium ${selectedHook === idx ? 'text-purple-300' : 'text-slate-500'}`}>
                        {demo.format}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hook Script Preview Window */}
              <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-black text-brand uppercase tracking-wider">
                    {hookDemos[selectedHook].tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-600 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                    Hook Duration: 0:03s
                  </span>
                </div>
                <p className="text-base sm:text-lg font-display font-bold text-slate-900 italic leading-snug">
                  {hookDemos[selectedHook].hookText}
                </p>
              </div>
            </div>

            {/* Performance Output of Hook */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="bg-purple-50/70 border border-purple-100 rounded-xl p-3.5">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-600 block">
                  Measured Retention Impact
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-brand">
                  {hookDemos[selectedHook].stat}
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-600 block">
                  Verified Outcome
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  {hookDemos[selectedHook].reach}
                </span>
              </div>
            </div>
          </div>

          {/* Right Bento Column: Verified Growth Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 3D Viral Engine Visual & Top Stat Block */}
            <div className="brutal-card p-6 bg-slate-950 text-white border border-purple-500/30 shadow-xl shadow-purple-950/20 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  VIRAL GROWTH ENGINE
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/40">
                  VERIFIED
                </span>
              </div>

              {/* Performance Velocity Indicator */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Creative Production Velocity</span>
                  <span className="text-emerald-400 font-bold">+1,320% MoM</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full rounded-full w-[88%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>3s View-Through Rate</span>
                  <span className="font-bold text-white">72% Avg</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between mb-1">
                <div className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                  28.4M+
                </div>
                <span className="font-mono text-xs text-purple-300 font-bold">AGGREGATE REACH</span>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Organic video impressions and performance ad reach generated across our client partner ecosystem.
              </p>
            </div>

            {/* Middle Split Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="brutal-card p-5 bg-white border border-slate-200/90 shadow-sm">
                <span className="font-mono text-[11px] uppercase font-bold text-slate-500 block mb-1">
                  AVERAGE ROAS
                </span>
                <div className="text-3xl font-black font-display text-slate-900">
                  4.7x
                </div>
                <span className="text-xs font-mono text-brand font-bold mt-1 block">
                  On paid acquisition
                </span>
              </div>

              <div className="brutal-card p-5 bg-white border border-slate-200/90 shadow-sm">
                <span className="font-mono text-[11px] uppercase font-bold text-slate-500 block mb-1">
                  FOUNDER RETENTION
                </span>
                <div className="text-3xl font-black font-display text-slate-900">
                  98%
                </div>
                <span className="text-xs font-mono text-emerald-600 font-bold mt-1 block">
                  Month-over-month
                </span>
              </div>
            </div>

            {/* Bottom Founder Promise */}
            <div className="brutal-card p-4 bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 leading-tight">
                  Direct Founder-to-Founder Collaboration
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
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
