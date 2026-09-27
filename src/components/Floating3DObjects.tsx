import React from 'react';

/**
 * HeroStudioRightStage
 * Renders on the RIGHT side of the Hero section:
 * - Floating 3D Cinema Production Camera facing LEFT
 * - Emitting a wide, cinematic volumetric spotlight beam shooting from right to left directly illuminating "Crafting Clout. Building Brands."
 * - Floating 3D Cinema Film Reel
 * - Floating 3D Glass / Neon Play Token
 * - Floating 3D Gold ROAS Coin
 * - Floating 3D Viral Star / Spark
 * - Real-time production HUD status pills
 */
export const HeroStudioRightStage: React.FC = () => {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center select-none overflow-visible">
      
      {/* Volumetric Spotlight Beam shooting from the camera lens (on the right) across to the LEFT */}
      <div className="absolute top-[42%] right-[130px] sm:right-[170px] md:right-[210px] w-[500px] sm:w-[750px] md:w-[920px] lg:w-[1100px] h-[260px] sm:h-[340px] md:h-[420px] pointer-events-none -translate-y-1/2 z-0 origin-right">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 400" fill="none">
          <defs>
            {/* Broad Volumetric Light Shaft (pointing Left) */}
            <linearGradient id="volBeamLeft" x1="1000" y1="200" x2="0" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="10%" stopColor="#FEF08A" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#FDE047" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#C4B5FD" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#5B2FB8" stopOpacity="0" />
            </linearGradient>

            {/* Core Intense Center Laser Ray */}
            <linearGradient id="coreRayLeft" x1="1000" y1="200" x2="150" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="20%" stopColor="#FEF08A" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#E9D5FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#5B2FB8" stopOpacity="0" />
            </linearGradient>

            {/* Stage Illumination Puddle where light hits the left side */}
            <radialGradient id="stageGlowLeft" cx="15%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#5B2FB8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Main Volumetric Cone Spreading Leftward onto the headline */}
          <polygon points="1000,200 0,60 0,340" fill="url(#volBeamLeft)" style={{ filter: 'blur(14px)' }} />

          {/* Concentrated Center Beam */}
          <polygon points="1000,200 150,130 150,270" fill="url(#coreRayLeft)" style={{ filter: 'blur(7px)' }} />

          {/* Left Puddle Glow */}
          <ellipse cx="120" cy="200" rx="160" ry="120" fill="url(#stageGlowLeft)" style={{ filter: 'blur(20px)' }} />

          {/* Floating Atmospheric Sparkles in the light beam */}
          <circle cx="850" cy="190" r="2.5" fill="#FFFFFF" className="animate-ping" opacity="0.9" />
          <circle cx="700" cy="165" r="2" fill="#FEF08A" className="animate-pulse" opacity="0.85" />
          <circle cx="550" cy="225" r="3" fill="#FFFFFF" className="animate-pulse" opacity="0.9" />
          <circle cx="400" cy="180" r="2" fill="#FDE047" className="animate-ping" opacity="0.75" />
          <circle cx="280" cy="220" r="3.5" fill="#E9D5FF" className="animate-pulse" opacity="0.8" />
          <circle cx="160" cy="175" r="2.5" fill="#FEF08A" className="animate-ping" opacity="0.85" />
        </svg>
      </div>

      {/* Floating 3D Film Reel (Top-Right of Stage) */}
      <div className="absolute top-4 right-6 sm:top-6 sm:right-12 z-20 pointer-events-none">
        <div className="animate-float" style={{ animationDuration: '4.8s', animationDelay: '0.5s' }}>
          <div className="w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-[0_8px_16px_rgba(20,10,40,0.35)]">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              <defs>
                <linearGradient id="reelGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4A239E" />
                  <stop offset="50%" stopColor="#241447" />
                  <stop offset="100%" stopColor="#140A28" />
                </linearGradient>
                <linearGradient id="filmGlow" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#9D76F7" />
                  <stop offset="100%" stopColor="#5B2FB8" />
                </linearGradient>
              </defs>

              {/* 3D Extrusion Shadow */}
              <circle cx="50" cy="54" r="42" fill="#140A28" />
              
              {/* Outer Flange */}
              <circle cx="50" cy="50" r="42" fill="url(#reelGrad)" stroke="#CCAFF5" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="38" stroke="#5B2FB8" strokeWidth="1.5" strokeDasharray="5 3" />

              {/* 5 Circular Cutouts in Reel */}
              <circle cx="50" cy="22" r="9" fill="#F5EEFD" stroke="#140A28" strokeWidth="2" />
              <circle cx="76" cy="41" r="9" fill="#F5EEFD" stroke="#140A28" strokeWidth="2" />
              <circle cx="66" cy="73" r="9" fill="#F5EEFD" stroke="#140A28" strokeWidth="2" />
              <circle cx="34" cy="73" r="9" fill="#F5EEFD" stroke="#140A28" strokeWidth="2" />
              <circle cx="24" cy="41" r="9" fill="#F5EEFD" stroke="#140A28" strokeWidth="2" />

              {/* Center Spindle Hub */}
              <circle cx="50" cy="50" r="14" fill="#FEF08A" stroke="#140A28" strokeWidth="2" />
              <circle cx="50" cy="50" r="5" fill="#140A28" />

              {/* Film Strip Trailing Off */}
              <path d="M80 65 C95 75, 95 95, 75 98 C65 100, 60 92, 70 88" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating 3D Gold ROAS Coin (Bottom-Left of 3D Stage) */}
      <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 z-20 pointer-events-none">
        <div className="animate-float" style={{ animationDuration: '4.2s', animationDelay: '1.2s' }}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_8px_16px_rgba(217,119,6,0.4)]">
            <svg viewBox="0 0 70 70" fill="none" className="w-full h-full transform rotate-6">
              <defs>
                <linearGradient id="goldCoinGrad" x1="5" y1="5" x2="65" y2="65" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FEF08A" />
                  <stop offset="45%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>
              </defs>
              {/* 3D Coin Extrusion */}
              <circle cx="35" cy="40" r="28" fill="#140A28" />
              <circle cx="35" cy="37" r="28" fill="#78350F" />
              <circle cx="35" cy="34" r="28" fill="url(#goldCoinGrad)" stroke="#140A28" strokeWidth="2.5" />
              <circle cx="35" cy="34" r="22" stroke="#FEF08A" strokeWidth="1" strokeDasharray="3 2" />
              <text x="35" y="40" fill="#78350F" fontSize="13" fontFamily="Montserrat, sans-serif" fontWeight="900" textAnchor="middle">4.7x</text>
            </svg>
            <div className="absolute -bottom-1 -right-1 bg-panel-dark text-amber-300 font-mono text-[9px] font-black px-1.5 py-0.5 rounded border border-amber-300/40 shadow-brutal-sm">
              ROAS
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Viral Star (Top-Left of 3D Stage) */}
      <div className="absolute top-8 left-12 sm:top-10 sm:left-20 z-20 pointer-events-none">
        <div className="animate-float" style={{ animationDuration: '3.6s', animationDelay: '0.8s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 filter drop-shadow-[0_6px_12px_rgba(251,191,36,0.5)]">
            <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
              <path d="M25 2 L31 16 L46 19 L35 30 L38 45 L25 37 L12 45 L15 30 L4 19 L19 16 Z" transform="translate(0, 3)" fill="#140A28" />
              <path d="M25 2 L31 16 L46 19 L35 30 L38 45 L25 37 L12 45 L15 30 L4 19 L19 16 Z" fill="#FDE047" stroke="#140A28" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="25" cy="22" r="3" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating 3D Play Button Token (Bottom-Right of 3D Stage) */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-16 z-20 pointer-events-none">
        <div className="animate-float" style={{ animationDuration: '4.5s', animationDelay: '1.8s' }}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 filter drop-shadow-[0_8px_16px_rgba(91,47,184,0.4)]">
            <svg viewBox="0 0 70 70" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="playTokenGrad" x1="10" y1="10" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#9D76F7" />
                  <stop offset="70%" stopColor="#5B2FB8" />
                  <stop offset="100%" stopColor="#241447" />
                </linearGradient>
              </defs>
              <circle cx="35" cy="40" r="26" fill="#140A28" />
              <circle cx="35" cy="35" r="26" fill="url(#playTokenGrad)" stroke="#EBE0FB" strokeWidth="2" />
              <polygon points="30,24 46,35 30,46" fill="#10B981" stroke="#140A28" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <div className="absolute -bottom-1 -left-1 bg-accent-emerald text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded border border-line shadow-brutal-sm">
              VIRAL
            </div>
          </div>
        </div>
      </div>

      {/* Centerpiece: The Floating 3D Cinema Production Camera (Facing LEFT) */}
      <div className="relative z-10 animate-float" style={{ animationDuration: '4s' }}>
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 filter drop-shadow-[0_16px_32px_rgba(20,10,40,0.45)]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full transform hover:scale-105 transition-transform duration-300">
            <defs>
              {/* Metallic Body Gradients */}
              <linearGradient id="bodyDark" x1="50" y1="50" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B1C7A" />
                <stop offset="50%" stopColor="#241447" />
                <stop offset="100%" stopColor="#140A28" />
              </linearGradient>

              <linearGradient id="bodyTop" x1="60" y1="40" x2="150" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6C42C7" />
                <stop offset="100%" stopColor="#2E175B" />
              </linearGradient>

              <linearGradient id="lensLeftGrad" x1="20" y1="80" x2="70" y2="130" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#140A28" />
                <stop offset="60%" stopColor="#432382" />
                <stop offset="100%" stopColor="#1E1035" />
              </linearGradient>

              <linearGradient id="lensGlassLeft" x1="25" y1="80" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="30%" stopColor="#F59E0B" />
                <stop offset="70%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#67E8F9" />
              </linearGradient>

              <radialGradient id="spotEmissionLeft" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.95" />
                <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#5B2FB8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Studio Heavy Mounting Rig / Tripod Base */}
            <path d="M120 150 L105 185 M150 150 L168 185 M135 150 L135 190" stroke="#140A28" strokeWidth="5.5" strokeLinecap="round" />
            <circle cx="135" cy="150" r="7" fill="#DDCBFA" stroke="#140A28" strokeWidth="3" />

            {/* V-Mount Dual Battery Plate on the rear (Right side) */}
            <rect x="145" y="105" width="28" height="36" rx="5" fill="#140A28" stroke="#3B1C7A" strokeWidth="2" />
            <line x1="150" y1="114" x2="168" y2="114" stroke="#5B2FB8" strokeWidth="2.5" />
            <line x1="150" y1="122" x2="168" y2="122" stroke="#5B2FB8" strokeWidth="2.5" />
            <line x1="150" y1="130" x2="162" y2="130" stroke="#5B2FB8" strokeWidth="2.5" />

            {/* Main Cinema Camera Body */}
            <rect x="75" y="70" width="76" height="82" rx="12" fill="url(#bodyDark)" stroke="#140A28" strokeWidth="3.5" />

            {/* Top Handle with Isometric grip */}
            <path d="M85 70 L85 48 Q85 40 93 40 L135 40 Q143 40 143 48 L143 70" fill="none" stroke="#6C42C7" strokeWidth="7" strokeLinecap="round" />
            <path d="M85 70 L85 48 Q85 40 93 40 L135 40 Q143 40 143 48 L143 70" fill="none" stroke="#140A28" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="97" y="37" width="34" height="6" rx="3" fill="#FDE047" stroke="#140A28" strokeWidth="1.5" />

            {/* Studio Shotgun Mic mounted on Top */}
            <rect x="80" y="26" width="40" height="9" rx="4.5" fill="#140A28" stroke="#CCAFF5" strokeWidth="1.5" />
            <rect x="83" y="28" width="14" height="5" rx="2" fill="#4B5563" />

            {/* Viewfinder Monitor Screen on Operator Side (Facing slightly right) */}
            <g transform="translate(130, 75) rotate(8)">
              <rect x="0" y="0" width="28" height="38" rx="5" fill="#140A28" stroke="#6C42C7" strokeWidth="2" />
              <rect x="4" y="4" width="20" height="30" rx="3" fill="#0F0721" />
              {/* Audio/Video Waveform on Monitor */}
              <polyline points="7,24 10,16 13,22 17,12 21,20" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="18" cy="10" r="2.5" fill="#FEF08A" />
            </g>

            {/* Camera Side Control Knobs & OLED status */}
            <circle cx="115" cy="94" r="8" fill="#140A28" stroke="#CCAFF5" strokeWidth="2" />
            <circle cx="115" cy="94" r="4" fill="#5B2FB8" />
            <rect x="90" y="112" width="26" height="14" rx="4" fill="#140A28" stroke="#DDCBFA" strokeWidth="1.5" />
            <text x="93" y="122" fill="#10B981" fontSize="7.5" fontFamily="monospace" fontWeight="bold">8K RAW</text>

            {/* Blinking Red REC Tally Light */}
            <circle cx="85" cy="82" r="4.5" fill="#E11D48">
              <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="85" cy="82" r="8" stroke="#E11D48" strokeWidth="1.5" opacity="0.6">
              <animate attributeName="r" values="4.5;10;4.5" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite" />
            </circle>

            {/* Cinema Lens Barrel Facing LEFT */}
            <rect x="52" y="82" width="24" height="54" rx="5" fill="url(#lensLeftGrad)" stroke="#140A28" strokeWidth="3" />
            {/* Focus Ring Ribs */}
            <line x1="58" y1="85" x2="58" y2="133" stroke="#CCAFF5" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="64" y1="85" x2="64" y2="133" stroke="#CCAFF5" strokeWidth="1.5" strokeDasharray="3 2" />

            {/* Matte Box Hood (Expands to the LEFT) */}
            <path d="M52 75 L20 62 L20 156 L52 143 Z" fill="url(#bodyDark)" stroke="#140A28" strokeWidth="3.5" />
            <path d="M50 80 L23 68 L23 150 L50 138 Z" fill="#2E175B" opacity="0.75" />

            {/* Large Front Glass Lens Element (Angled Leftward) */}
            <ellipse cx="36" cy="109" rx="10" ry="32" fill="url(#lensGlassLeft)" stroke="#FDE047" strokeWidth="2.5" />
            <ellipse cx="33" cy="109" rx="5" ry="20" fill="#FFFFFF" opacity="0.8" />

            {/* Intense Spotlight Core Output at the Lens */}
            <circle cx="28" cy="109" r="16" fill="url(#spotEmissionLeft)" />
            <circle cx="28" cy="109" r="7" fill="#FFFFFF" />

            {/* Optical Flare 4-Point Star */}
            <g transform="translate(28, 109)">
              <path d="M0 -18 Q0 0 18 0 Q0 0 0 18 Q0 0 -18 0 Q0 0 0 -18 Z" fill="#FFFFFF" opacity="0.95" />
              <path d="M-10 -10 L10 10 M-10 10 L10 -10" stroke="#FDE047" strokeWidth="2" opacity="0.85" />
            </g>
          </svg>
        </div>

        {/* Live Status Pill under the Camera */}
        <div className="absolute -bottom-2 right-4 sm:right-8 bg-panel-dark text-white px-3 py-1 rounded-full border border-white/20 text-xs font-mono font-bold flex items-center gap-2 shadow-brutal-sm">
          <span className="w-2 h-2 rounded-full bg-accent-coral animate-ping" />
          <span>REC // FOCUS: 3s HOOK</span>
        </div>
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
