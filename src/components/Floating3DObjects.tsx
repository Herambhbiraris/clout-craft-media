import React from 'react';
import camera3DImg from '../assets/camera_3d.png';

/**
 * HeroStudioRightStage
 * Renders on the RIGHT side of the Hero section:
 * - Floating photorealistic 3D Cinema Production Camera facing LEFT
 * - Cinematic volumetric spotlight beam shooting directly from the camera lens to illuminate "Crafting Clout. Building Brands."
 * - Realistic floating floor shadow and optical lens flare
 * - Clean minimal recording HUD status
 */
export const HeroStudioRightStage: React.FC = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] flex items-center justify-center select-none overflow-visible">
      
      {/* 3D Floating Camera Assembly */}
      <div className="relative z-10 animate-float flex flex-col items-center">
        
        {/* Volumetric Studio Lighting Beam shooting directly from the camera lens to the LEFT */}
        <div 
          className="absolute top-[52%] right-[86%] sm:right-[88%] md:right-[90%] -translate-y-1/2 w-[550px] sm:w-[750px] md:w-[920px] lg:w-[1150px] h-[280px] sm:h-[350px] md:h-[420px] pointer-events-none z-0"
        >
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 400" preserveAspectRatio="none" fill="none">
            <defs>
              <filter id="beamWideBlur3D" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="20" />
              </filter>
              <filter id="coreRayBlur3D" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
              <filter id="stageGlowBlur3D" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="28" />
              </filter>
              <filter id="flareGlow3D" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" />
              </filter>

              {/* Cinematic Studio Light Haze (Refined White-to-Violet) */}
              <linearGradient id="volBeam3D" x1="1000" y1="200" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="12%" stopColor="#F5EEFD" stopOpacity="0.65" />
                <stop offset="35%" stopColor="#DDD6FE" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#C4B5FD" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>

              {/* Core Focused Light Ray */}
              <linearGradient id="coreRay3D" x1="1000" y1="200" x2="120" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="20%" stopColor="#FAF5FF" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#DDD6FE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </linearGradient>

              {/* Soft Text Wash Radial Glow */}
              <radialGradient id="stageGlow3D" cx="12%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
              </radialGradient>

              {/* Lens Optical Emission Point */}
              <radialGradient id="lensEmission" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="30%" stopColor="#F5EEFD" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#A78BFA" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Soft Volumetric Light Shaft */}
            <polygon points="1000,196 1000,204 0,40 0,360" fill="url(#volBeam3D)" filter="url(#beamWideBlur3D)" />

            {/* Core Focused Ray */}
            <polygon points="1000,198 1000,202 120,140 120,260" fill="url(#coreRay3D)" filter="url(#coreRayBlur3D)" />

            {/* Stage Soft Wash Glow */}
            <ellipse cx="120" cy="200" rx="160" ry="120" fill="url(#stageGlow3D)" filter="url(#stageGlowBlur3D)" />

            {/* Anamorphic Horizontal Blue/Violet Lens Flare Streak */}
            <line x1="860" y1="200" x2="1080" y2="200" stroke="#C4B5FD" strokeWidth="2.5" opacity="0.85" filter="url(#flareGlow3D)" />
            <line x1="930" y1="200" x2="1040" y2="200" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.95" />

            {/* Lens Aperture Glow Ring */}
            <circle cx="1000" cy="200" r="22" fill="url(#lensEmission)" filter="url(#flareGlow3D)" />
            <circle cx="1000" cy="200" r="7" fill="#FFFFFF" />

            {/* Subtle atmospheric cinema motes */}
            <circle cx="850" cy="194" r="2" fill="#FFFFFF" className="animate-pulse" opacity="0.8" />
            <circle cx="680" cy="172" r="1.5" fill="#DDD6FE" className="animate-pulse" opacity="0.75" />
            <circle cx="520" cy="220" r="2.5" fill="#FFFFFF" className="animate-ping" opacity="0.7" />
            <circle cx="360" cy="185" r="1.8" fill="#E9D5FF" className="animate-pulse" opacity="0.65" />
            <circle cx="210" cy="210" r="2.5" fill="#DDD6FE" className="animate-pulse" opacity="0.7" />
          </svg>
        </div>

        {/* Photorealistic 3D Cinema Camera */}
        <div className="relative group cursor-pointer">
          {/* Studio Ambient Backlight Glow behind camera */}
          <div className="absolute inset-0 bg-brand/15 rounded-full blur-3xl -z-10 transform scale-95 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

          {/* 3D Camera Render */}
          <img
            src={camera3DImg}
            alt="CloutCraft 3D Cinema Production Camera"
            className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] max-w-none h-auto object-contain select-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(15,7,33,0.32)] drop-shadow-[0_4px_16px_rgba(109,40,217,0.2)]"
            draggable={false}
          />

          {/* Live Recording Tally Indicator Badge */}
          <div className="absolute -bottom-3 right-6 sm:right-10 bg-slate-950/90 backdrop-blur-md text-white px-3.5 py-1 rounded-full border border-slate-700/60 text-[11px] font-mono font-bold flex items-center gap-2 shadow-lg pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="tracking-wider text-slate-200">REC // 8K RAW &bull; HOOK LAB</span>
          </div>
        </div>

        {/* Realistic Floor Pedestal Shadow */}
        <div className="w-[60%] sm:w-[68%] h-5 sm:h-6 bg-slate-900/25 rounded-[100%] blur-md mt-4 pointer-events-none" />

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
          <div className="absolute -bottom-2 -right-2 bg-accent-emerald text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded border border-line shadow-brutal-sm">
            VIRAL
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Floating 3D Star / Spark Badge
 */
export const FloatingViralSpark: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <div className="animate-float" style={{ animationDelay: '1.4s', animationDuration: '4s' }}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
          <svg viewBox="0 0 60 60" fill="none" className="w-full h-full filter drop-shadow-[0_6px_12px_rgba(217,119,6,0.35)]">
            <defs>
              <linearGradient id="starGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            <path d="M30 4 L37 21 L55 24 L42 37 L45 55 L30 46 L15 55 L18 37 L5 24 L23 21 Z" transform="translate(0, 4)" fill="#140A28" />
            <path d="M30 4 L37 21 L55 24 L42 37 L45 55 L30 46 L15 55 L18 37 L5 24 L23 21 Z" fill="url(#starGrad)" stroke="#140A28" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="30" cy="28" r="4" fill="#FFFFFF" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};
