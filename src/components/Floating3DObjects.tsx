import React from 'react';
import heroStageImg from '../assets/hero_stage_feathered.png';

/**
 * HeroStudioRightStage
 * Renders on the RIGHT side of the Hero section:
 * - 3D Cinema Production Camera on rock pedestal
 * - Translucent violet film strip trailing into the lens
 * - Floating purple crystals and gems
 * - Hand-drawn doodles ("IDEAS CONTENT ADS GROWTH REVENUE" and "MORE THAN* JUST CONTENT")
 * - 4 Floating Glass Stat Badges (3.2M+ Views, 72% ROAS, 50+ Brands, 48H Strategy)
 * - Ambient radial glow with gentle hovering animation
 */
export const HeroStudioRightStage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[640px] flex items-center justify-center select-none overflow-visible">
      {/* Studio Radial Violet Glow Accent behind the camera */}
      <div 
        className="absolute inset-0 -top-6 bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-purple-400/25 blur-3xl rounded-full -z-10 pointer-events-none scale-105" 
      />

      {/* 3D Floating Stage Composition */}
      <div className="relative z-10 animate-float flex flex-col items-center w-full">
        <div className="relative group cursor-pointer w-full flex items-center justify-center">
          <img
            src={heroStageImg}
            alt="CloutCraft 3D Cinema Camera Production Stage"
            className="w-full h-auto object-contain select-none transition-transform duration-700 ease-out group-hover:scale-[1.02] filter drop-shadow-[0_20px_35px_rgba(15,7,33,0.18)]"
            draggable={false}
          />
        </div>

        {/* Soft Pedestal Shadow */}
        <div className="w-[70%] h-5 bg-slate-900/15 rounded-[100%] blur-lg -mt-3 pointer-events-none" />
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
