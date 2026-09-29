import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, Box } from 'lucide-react';
import heroStageImg from '../assets/hero_3d_stage_clean.png';

/**
 * HeroStudioRightStage
 * Renders on the RIGHT side of the Hero section:
 * - Ultra-clean 3D Cinema Production Camera on rock pedestal
 * - Translucent violet film strip trailing from the lens
 * - Floating purple crystals and volumetric lighting
 * - Hand-drawn doodle ("IDEAS • CONTENT • ADS • REVENUE")
 * - 4 Floating Glass Stat Badges (3.2M+ Views, 72% ROAS, 50+ Brands, 48H Strategy)
 * - Ambient radial glow with gentle hovering animation
 */
export const HeroStudioRightStage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[660px] flex items-center justify-center select-none overflow-visible">
      {/* Studio Radial Violet Glow Accent behind the camera */}
      <div 
        className="absolute inset-0 -top-6 bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-purple-400/25 blur-3xl rounded-full -z-10 pointer-events-none scale-110" 
      />

      {/* 3D Floating Stage Composition */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Main 3D Camera Object */}
        <div className="relative w-full flex items-center justify-center animate-float">
          <img
            src={heroStageImg}
            alt="CloutCraft 3D Cinema Camera Production Stage"
            className="w-full h-auto object-contain select-none transition-transform duration-700 ease-out hover:scale-[1.02] filter drop-shadow-[0_20px_45px_rgba(22,13,46,0.18)]"
            draggable={false}
          />

          {/* FLOATING CARD 1: Top-Left (3.2M+ Views Generated) */}
          <div className="absolute top-6 left-0 sm:-left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-purple-200/80 shadow-[0_8px_24px_-4px_rgba(108,53,255,0.18)] flex items-center gap-3 z-20 animate-float">
            <div className="w-8 h-8 rounded-xl bg-[#EDE5FF] flex items-center justify-center text-[#6C35FF] shrink-0">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-black text-base sm:text-lg text-[#160D2E] block leading-tight">3.2M+</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Views Generated</span>
            </div>
          </div>

          {/* FLOATING CARD 2: Top-Right (72% Avg ROAS Increase) */}
          <div className="absolute top-10 right-0 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-purple-200/80 shadow-[0_8px_24px_-4px_rgba(108,53,255,0.18)] flex items-center gap-3 z-20 animate-float" style={{ animationDelay: '1.2s' }}>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-black text-base sm:text-lg text-[#160D2E] block leading-tight">72%</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Avg ROAS Increase</span>
            </div>
          </div>

          {/* FLOATING CARD 3: Bottom-Left (50+ Brands Scaled) */}
          <div className="absolute bottom-10 left-2 sm:-left-2 bg-[#160D2E] text-white px-4 py-2.5 rounded-2xl border border-purple-800/60 shadow-[0_12px_30px_rgba(22,13,46,0.4)] flex items-center gap-3 z-20 animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-purple-200 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-black text-base sm:text-lg text-white block leading-tight">50+</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Brands Scaled</span>
            </div>
          </div>

          {/* FLOATING CARD 4: Bottom-Right (48H Strategy Delivery) */}
          <div className="absolute bottom-8 right-2 sm:right-0 bg-[#160D2E] text-white px-4 py-2.5 rounded-2xl border border-purple-800/60 shadow-[0_12px_30px_rgba(22,13,46,0.4)] flex items-center gap-3 z-20 animate-float" style={{ animationDelay: '1.8s' }}>
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <Box className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-black text-base sm:text-lg text-white block leading-tight">48H</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Strategy Delivery</span>
            </div>
          </div>

          {/* Hand-Drawn Doodle Arrow: IDEAS -> CONTENT -> ADS -> REVENUE */}
          <div className="absolute -left-10 sm:-left-14 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center pointer-events-none z-20 select-none">
            <span className="text-[10px] font-mono font-black text-[#6C35FF] tracking-wider uppercase rotate-[-10deg] bg-white px-2.5 py-0.5 rounded-full border border-purple-200/80 shadow-sm whitespace-nowrap mb-1">
              IDEAS &bull; ADS &bull; REVENUE
            </span>
            <svg className="w-14 h-10 text-[#6C35FF] rotate-[-15deg]" viewBox="0 0 70 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 10 15 Q 35 5 55 35" />
              <path d="M 45 35 L 55 35 L 53 23" />
            </svg>
          </div>

        </div>

        {/* Soft Pedestal Ambient Shadow */}
        <div className="w-[60%] h-6 bg-purple-950/15 rounded-[100%] blur-xl -mt-4 pointer-events-none" />
      </div>
    </div>
  );
};

/**
 * Floating 3D Play Token Badge
 */
export const FloatingPlayToken: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className="animate-float" style={{ animationDelay: '0.8s', animationDuration: '3.6s' }}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(91,47,184,0.4)]">
            <defs>
              <linearGradient id="tokenTop" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#9D76F7" />
                <stop offset="60%" stopColor="#5B2FB8" />
                <stop offset="100%" stopColor="#241447" />
              </linearGradient>
              <linearGradient id="goldPlay" x1="25" y1="25" x2="55" y2="55" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="45" r="32" fill="#140A28" />
            <circle cx="40" cy="42" r="32" fill="#3B1C7A" />
            <circle cx="40" cy="38" r="32" fill="url(#tokenTop)" stroke="#CCAFF5" strokeWidth="2.5" />
            <circle cx="40" cy="38" r="26" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
            <polygon points="34,26 56,38 34,50" fill="url(#goldPlay)" stroke="#140A28" strokeWidth="2" strokeLinejoin="round" />
            <polygon points="35,28 48,36 35,38" fill="#FFFFFF" opacity="0.6" />
          </svg>
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded border border-emerald-400 shadow-sm">
            VIRAL
          </div>
        </div>
      </div>
    </div>
  );
};

export const FloatingSparkle: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 28 }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className="animate-float" style={{ animationDelay: '1.2s' }}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#F59E0B" />
        </svg>
      </div>
    </div>
  );
};

export const FloatingCube: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className="animate-float" style={{ animationDelay: '0.4s' }}>
        <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 backdrop-blur-md flex items-center justify-center text-purple-700 shadow-md">
          <div className="w-5 h-5 rounded-md bg-purple-500/50" />
        </div>
      </div>
    </div>
  );
};

export const FloatingGrowthPill: React.FC<{ className?: string; label?: string }> = ({ className = '', label = '+340%' }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className="animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-purple-200 shadow-sm text-xs font-mono font-bold text-purple-800">
          {label}
        </div>
      </div>
    </div>
  );
};
