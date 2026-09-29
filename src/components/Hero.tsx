import React, { useState } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Play, Flame, Zap, Check, ShieldCheck, Users } from 'lucide-react';
import { TrustedBrandsBar } from './TrustedBrandsBar';
import crownCleanImg from '../assets/crown_clean.png';

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
    <section id="top" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center pt-6 sm:pt-10 pb-16 overflow-hidden">
      {/* Background ambient glow: Centered radiant violet halo behind headline */}
      <div 
        className="absolute top-8 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-purple-500/15 via-indigo-400/10 to-purple-300/15 blur-[120px] rounded-full -z-10 pointer-events-none" 
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Centered Hero Header */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center relative z-10 pt-2 sm:pt-6 pb-4">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            {/* Badge 1: Accepting 2 New Clients */}
            <div className="bg-white/95 border border-[#2B1B48]/30 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2 text-xs font-mono font-bold text-[#1F1635]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACCEPTING 2 NEW CLIENTS FOR Q2</span>
            </div>

            {/* Badge 2: Founder Led */}
            <div className="bg-white/95 border border-[#2B1B48]/30 px-4 py-1.5 rounded-full shadow-sm hidden sm:inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1F1635]">
              <Zap className="w-3.5 h-3.5 text-purple-600 fill-purple-600" />
              <span>FOUNDER-LED &bull; ZERO ACCOUNT HAND-OFFS</span>
            </div>
          </div>

          {/* Main Hero Header */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight leading-[1.08] mb-6 relative">
            <span className="block text-[#0F0721]">
              Crafting Clout.
            </span>
            <span className="block mt-1 sm:mt-2 text-[#7C3AED]">
              Building{' '}
              <span className="relative inline-block">
                Brands.
                {/* Hand-drawn crown doodle angled on top */}
                <img 
                  src={crownCleanImg} 
                  alt="Crown Doodle" 
                  className="absolute -top-7 sm:-top-11 -right-4 sm:-right-7 w-9 sm:w-14 h-auto pointer-events-none select-none drop-shadow-sm rotate-12"
                  draggable={false}
                />
                {/* Hand-drawn sketchy double underline */}
                <svg className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-5 text-[#7C3AED] pointer-events-none overflow-visible" viewBox="0 0 240 14" fill="none">
                  <path d="M 4 5 C 60 3, 160 4, 235 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M 45 11 C 90 9.5, 170 9, 215 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-9 text-center">
            We help ambitious startups, creators, and challenger brands turn fleeting attention into compounding revenue through viral video, high-ROAS paid ads, and narrative positioning.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto">
            {/* Claim Audit CTA */}
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto bg-[#15072B] hover:bg-[#220B44] text-white px-8 py-4 rounded-full border border-purple-500/40 shadow-[0_6px_22px_rgba(124,58,237,0.32)] flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base transition-all group hover:shadow-[0_8px_28px_rgba(124,58,237,0.48)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Claim Free 48h Growth Audit</span>
              <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Explore Case Studies CTA */}
            <a
              href="#/case-studies"
              className="w-full sm:w-auto bg-white hover:bg-purple-50/60 text-[#1E0B3C] border border-[#DDD5F3] px-8 py-4 rounded-full shadow-sm flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base transition-all hover:border-purple-300 hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 text-[#7C3AED] fill-[#7C3AED]" />
              <span>Explore Case Studies</span>
            </a>
          </div>

          {/* 3 Guarantees with soft purple checkmark badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap pt-1 text-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ECE5FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                100% Free Strategy Session
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ECE5FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                No Long Lock-in Contracts
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ECE5FA] text-[#7C3AED] flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                48-Hour Turnaround
              </span>
            </div>
          </div>
        </div>

        {/* TRUSTED BRANDS SOCIAL PROOF BAR: Exactly below Hero Split */}
        <TrustedBrandsBar />

        {/* Hero Interactive Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Feature Card: Interactive Hook Architecture Lab */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-[0_4px_25px_-4px_rgba(124,58,237,0.06)] flex flex-col justify-between">
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

              <div className="mb-5">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                  SELECT VIRAL ARCHITECTURE:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {hookDemos.map((demo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedHook(idx)}
                      className={`text-left p-3.5 rounded-xl border text-xs font-bold transition-all ${
                        selectedHook === idx
                          ? 'bg-[#180C2E] text-white border-purple-500/50 shadow-md -translate-y-0.5'
                          : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-purple-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        {idx === 0 && <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />}
                        {idx === 1 && <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />}
                        {idx === 2 && <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />}
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
              <div className="bg-slate-50/80 border border-slate-200/80 p-5 rounded-xl mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-black text-[#7C3AED] uppercase tracking-wider">
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
                <span className="text-xl sm:text-2xl font-black font-display text-[#7C3AED]">
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
            <div className="rounded-2xl p-6 bg-[#130826] text-white border border-purple-500/30 shadow-xl shadow-purple-950/20 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  VIRAL GROWTH ENGINE // 3D CORE
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/40">
                  VERIFIED
                </span>
              </div>

              {/* Performance Velocity Indicator */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Creative Production Velocity</span>
                  <span className="text-emerald-400 font-bold">+1,320% MoM</span>
                </div>
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 via-indigo-400 to-emerald-400 h-full rounded-full w-[88%]" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>3s View-Through Rate</span>
                  <span className="font-bold text-white">72% Avg</span>
                </div>
              </div>

              {/* Reach Metric and mini equalizer chart */}
              <div className="flex items-end justify-between mb-2">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                    28.4M+
                  </div>
                  <span className="font-mono text-xs text-purple-300 font-bold block mt-0.5">
                    TOTAL VIEWS GENERATED
                  </span>
                </div>

                {/* Mini animated equalizer / bar chart */}
                <div className="flex items-end gap-1 h-10 pb-1">
                  <div className="w-1.5 bg-purple-500/60 rounded-t h-3 animate-pulse" />
                  <div className="w-1.5 bg-purple-500/80 rounded-t h-5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1.5 bg-purple-400 rounded-t h-7 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <div className="w-1.5 bg-purple-300 rounded-t h-4 animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1.5 bg-emerald-400 rounded-t h-9 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1.5 bg-purple-200 rounded-t h-8 animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Organic video impressions and performance ad reach generated across our client partner ecosystem.
              </p>
            </div>

            {/* Middle Split Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-sm">
                <span className="font-mono text-[11px] uppercase font-bold text-slate-500 block mb-1">
                  AVERAGE ROAS
                </span>
                <div className="text-3xl font-black font-display text-slate-900">
                  4.7x
                </div>
                <span className="text-xs font-mono text-[#7C3AED] font-bold mt-1 block">
                  On paid acquisition
                </span>
              </div>

              <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-sm">
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
            <div className="rounded-2xl p-4 bg-white border border-slate-200/90 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#130826] border border-purple-500/30 flex items-center justify-center shrink-0 shadow-sm">
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
