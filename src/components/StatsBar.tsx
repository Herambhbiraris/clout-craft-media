import React from 'react';
import { Award, Zap, BarChart3, Clock, Rocket, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const marqueeItems = [
    'META ADS VERIFIED SCALING',
    'HIGH-RETENTION REELS ARCHITECTURE',
    'TIKTOK VIRAL FORMULAS',
    'YOUTUBE SHORTS ENGINE',
    'EXECUTIVE FOUNDER POSITIONING',
    'UGC CREATOR NETWORK SEEDING',
    'GOOGLE PERFORMANCE MAX',
    'FULL-FUNNEL ROAS OPTIMIZATION'
  ];

  return (
    <div className="border-y border-purple-800/50 bg-purple-dark text-white overflow-hidden py-5 select-none shadow-agency-dark">
      
      {/* Infinite Marquee Strip */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee whitespace-nowrap flex items-center gap-8">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs sm:text-sm font-mono font-bold tracking-widest text-purple-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-sm" />
              <span>{item}</span>
              <span className="text-violet-bright font-serif text-lg">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Pillars Strip Below */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mt-5 pt-4 border-t border-purple-800/40 grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-purple-400/20 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="font-display font-black text-lg text-white block leading-tight">48 Hours</span>
            <span className="font-mono text-xs text-purple-200 font-semibold block">Blueprint Turnaround</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-purple-400/20 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="font-display font-black text-lg text-white block leading-tight">4.7x Avg</span>
            <span className="font-mono text-xs text-purple-200 font-semibold block">Paid Ad ROAS</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-purple-400/20 flex items-center justify-center shrink-0">
            <Rocket className="w-5 h-5 text-violet-300" />
          </div>
          <div>
            <span className="font-display font-black text-lg text-white block leading-tight">28.4M+</span>
            <span className="font-mono text-xs text-purple-200 font-semibold block">Organic Video Views</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-purple-400/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <span className="font-display font-black text-lg text-white block leading-tight">Founder-Led</span>
            <span className="font-mono text-xs text-purple-200 font-semibold block">Zero Account Hand-offs</span>
          </div>
        </div>

      </div>

    </div>
  );
};
