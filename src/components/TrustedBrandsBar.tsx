import React from 'react';
import { ArrowRight, Hexagon, Shield, Eye, Box } from 'lucide-react';

export const TrustedBrandsBar: React.FC = () => {
  return (
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 my-6 sm:my-8">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(124,58,237,0.08)] py-3.5 px-4 sm:px-6 flex items-center justify-between overflow-x-auto gap-4 sm:gap-6 text-slate-800 select-none scrollbar-none">
        
        {/* Left Label */}
        <div className="font-mono text-[11px] sm:text-xs font-black tracking-wider text-[#1A0933] uppercase shrink-0 flex items-center gap-2">
          <span>TRUSTED BY AMBITIOUS BRANDS &amp; CREATORS</span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Brand 1: Brainova */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-md bg-purple-100/80 flex items-center justify-center text-purple-700">
            <Box className="w-3.5 h-3.5" />
          </div>
          <span className="font-display font-black text-sm tracking-tight text-slate-900">
            Brainova
          </span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Brand 2: SENEA */}
        <div className="flex items-center gap-1 shrink-0 font-display">
          <span className="font-black text-base text-slate-950 tracking-tighter">S</span>
          <span className="font-bold text-sm tracking-widest text-slate-800">ENEA</span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Brand 3: B-Orbit */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
            <Eye className="w-3.5 h-3.5 text-purple-800" />
          </div>
          <span className="font-display font-extrabold text-sm tracking-tight text-slate-900">
            B-Orbit
          </span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Brand 4: The Gym Co. */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
            <Shield className="w-3 h-3 text-purple-300" />
          </div>
          <span className="font-display font-bold text-sm text-slate-900">
            The Gym Co.
          </span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Brand 5: KBTCOE E-CELL */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-md bg-purple-950 text-white flex items-center justify-center">
            <Hexagon className="w-3.5 h-3.5 text-purple-300" />
          </div>
          <span className="font-display font-black text-xs sm:text-sm tracking-tight text-slate-900">
            KBTCOE E-CELL
          </span>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 shrink-0 hidden sm:block" />

        {/* Right More Link */}
        <a 
          href="#/case-studies"
          className="font-mono text-[11px] sm:text-xs font-bold text-slate-500 hover:text-purple-700 tracking-wider flex items-center gap-1.5 shrink-0 transition-colors uppercase"
        >
          <span>AND MANY MORE</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
        </a>

      </div>
    </div>
  );
};
