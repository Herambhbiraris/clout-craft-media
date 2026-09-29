import React, { useState } from 'react';
import { Sparkles, Phone, Mail, Instagram, Copy, Check, ArrowUpRight, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import logoImg from '../assets/logo.png';
import vortexImg from '../assets/cosmic_vortex.png';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const [copied, setCopied] = useState(false);
  const { navigate } = useRouter();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('collab@cloutcraftmedia.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-purple-100 bg-[#0E071D] text-white">
      
      {/* 12. Final High-Impact Conversion CTA Banner */}
      <div className="relative bg-[#160D2E] text-white py-20 sm:py-28 overflow-hidden border-b border-purple-500/20">
        
        {/* Cosmic vortex & volumetric purple light behind CTA */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] pointer-events-none select-none flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* 3D Tilted Disk Plane: Inclined at 68deg like a real celestial galaxy accretion disk */}
          <div 
            className="w-full aspect-square flex items-center justify-center"
            style={{ 
              transform: 'rotateX(68deg) rotateY(-5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Circular face-on galaxy spinning continuously within the tilted 3D plane */}
            <img 
              src={vortexImg} 
              alt="Cosmic Vortex Galaxy Disk" 
              className="w-full h-full object-contain animate-spin opacity-55 mix-blend-screen filter drop-shadow-[0_0_90px_rgba(168,85,247,0.6)]" 
              style={{ animationDuration: '45s' }}
            />
          </div>
        </div>

        {/* Ambient violet aura */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-bright/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="inline-flex items-center gap-2 bg-white/10 text-purple-200 border border-purple-400/30 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>LET'S TALK SCALE &bull; Q2 PARTNER SPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white mb-6 leading-[1.1]">
            Ready to Build Your Brand's <br className="hidden sm:inline" />
            <span className="text-violet-bright">Next High-ROAS Chapter?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            Tell us about your current bottlenecks and growth goals. We will build your customized 48-hour growth tear-down and video hook architecture — 100% free with zero sales fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white text-ink hover:bg-lavender-light text-base font-bold flex items-center justify-center gap-2.5 shadow-lg shadow-purple-950/40 transition-all hover:scale-105 group"
            >
              <Sparkles className="w-4 h-4 text-violet-bright group-hover:rotate-12 transition-transform" />
              <span>Claim Free 48-Hour Growth Audit</span>
              <ArrowRight className="w-4 h-4 text-ink group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+917276998119"
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-base font-bold flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 72769 98119</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-purple-300 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Strict 5-to-7 Client Cap &bull; Accepting 2 Partner Brands for Q2/Q3</span>
          </div>

        </div>
      </div>

      {/* 13. Minimalist Premium Dark Footer */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#120826] px-4 py-2 rounded-2xl border border-purple-500/40 shadow-sm flex items-center">
                <img 
                  src={logoImg} 
                  alt="CloutCraft Media" 
                  className="h-6 w-auto object-contain" 
                />
              </div>
              <span className="font-display font-black text-base tracking-wide text-white">
                CLOUTCRAFT MEDIA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-medium leading-relaxed">
              Founder-led growth studio for startups, creators, and ambitious challenger brands. Turning fleeting attention into compounding, predictable revenue.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-violet-bright" />
              <span>Headquartered in Nashik, Maharashtra &bull; Serving Global Brands</span>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase font-black text-purple-300 tracking-wider mb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">
                  Services &amp; Crafts
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/case-studies')} className="hover:text-white transition-colors">
                  Case Studies &bull; The Vault
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/calculator')} className="hover:text-white transition-colors">
                  Interactive ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-white transition-colors">
                  About &bull; Founder Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
                  Contact Studio Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Desk */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase font-black text-purple-300 tracking-wider mb-2">
              FOUNDER CONTACT DESK
            </h4>
            <p className="text-xs text-slate-400 font-medium">
              Direct founder access with sub-2-hour response times during standard business hours.
            </p>

            <div className="space-y-2 pt-1">
              <a 
                href="https://wa.me/917276998119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+91 72769 98119 (WhatsApp Direct)</span>
              </a>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>collab@cloutcraftmedia.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors ml-1"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenAudit}
                className="text-xs font-mono font-bold text-violet-bright hover:text-purple-200 flex items-center gap-1 transition-colors"
              >
                <span>Request Free 48-Hour Growth Audit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} CloutCraft Media. All rights reserved. Founder-led growth studio.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-purple-400/80 font-bold">100% Client Asset Ownership Guaranteed</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
