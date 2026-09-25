import React, { useState } from 'react';
import { Sparkles, Phone, Mail, Instagram, Copy, Check, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

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
    <footer className="border-t-2 border-line bg-white">
      
      {/* Pre-Footer Action Banner */}
      <div className="bg-panel-dark text-white py-16 sm:py-20 border-b-2 border-line">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="brutal-tag bg-white text-ink mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>LET'S TALK SCALE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4 leading-tight">
            Ready to Build Your Brand's Next Chapter?
          </h2>

          <p className="text-purple-100 text-base sm:text-lg max-w-xl mx-auto mb-8 font-medium">
            Tell us about your current numbers and revenue bottlenecks — we will build your customized 48-hour growth tear-down and video hook architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="brutal-btn-primary w-full sm:w-auto py-4 px-8 text-base bg-white text-ink shadow-brutal-white hover:bg-panel-1 font-bold"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span>Claim Free 48-Hour Growth Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+917276998119"
              className="brutal-btn-secondary w-full sm:w-auto py-4 px-8 text-base bg-transparent text-white border-white shadow-brutal-white hover:bg-white/10 font-bold"
            >
              <Phone className="w-4 h-4 text-accent-mint" />
              <span>Call +91 72769 98119</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-purple-200 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-mint animate-ping" />
            <span>Accepting 2 Partner Brands for Q2/Q3 2026</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-panel-dark px-3 py-1.5 rounded-lg border-2 border-line shadow-brutal-sm">
                <img 
                  src="/logo.png" 
                  alt="CloutCraft Media" 
                  className="h-6 w-auto object-contain filter brightness-110" 
                />
              </div>
              <span className="font-display font-black text-base text-ink">
                CLOUTCRAFT MEDIA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink max-w-sm font-medium leading-relaxed">
              Founder-led growth studio for startups, creators, and ambitious brands. Turning fleeting attention into predictable, compounding cashflow.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink">
              <MapPin className="w-3.5 h-3.5 text-brand" />
              <span>Nashik, Maharashtra, India &bull; Serving Global Brands</span>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-xs uppercase font-black text-brand tracking-wider mb-3">
              EXPLORE PAGES
            </h4>
            <ul className="space-y-2 text-xs font-bold text-ink">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-brand transition-colors text-left">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-brand transition-colors text-left">
                  Six Growth Crafts &amp; Deliverables
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/case-studies')} className="hover:text-brand transition-colors text-left flex items-center gap-1.5">
                  <span>The Viral Vault (Case Studies)</span>
                  <span className="bg-brand text-white text-[9px] font-mono px-1 rounded font-bold">28M+</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/calculator')} className="hover:text-brand transition-colors text-left">
                  Interactive ROI &amp; Growth Suite
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-brand transition-colors text-left">
                  About CloutCraft &amp; Founder
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-brand transition-colors text-left">
                  Contact &amp; Book Strategy Call
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase font-black text-brand tracking-wider mb-3">
              REACH US DIRECTLY
            </h4>

            {/* Email Pill with Copy */}
            <div className="flex items-center justify-between bg-bg border-2 border-line rounded-lg px-3.5 py-2.5 shadow-brutal-sm">
              <a 
                href="mailto:collab@cloutcraftmedia.com"
                className="text-xs font-mono font-bold text-ink hover:text-brand truncate"
              >
                collab@cloutcraftmedia.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-7 h-7 rounded bg-panel-dark text-white flex items-center justify-center hover:bg-brand transition-colors shrink-0 ml-2"
                title="Copy email to clipboard"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Pill */}
            <div className="flex items-center justify-between bg-bg border-2 border-line rounded-lg px-3.5 py-2.5 shadow-brutal-sm">
              <a 
                href="tel:+917276998119"
                className="text-xs font-mono font-bold text-ink hover:text-brand"
              >
                +91 72769 98119
              </a>
              <Phone className="w-4 h-4 text-brand shrink-0" />
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.instagram.com/clout.craft.media/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border-2 border-line bg-white flex items-center justify-center hover:bg-panel-1 transition-transform hover:-translate-y-0.5 shadow-brutal-sm"
                aria-label="Instagram @clout.craft.media"
              >
                <Instagram className="w-4 h-4 text-ink" />
              </a>

              <a
                href="https://wa.me/917276998119"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border-2 border-line bg-[#25D366] text-white flex items-center justify-center transition-transform hover:-translate-y-0.5 shadow-brutal-sm"
                aria-label="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t-2 border-line/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink font-semibold">
          <div>
            &copy; {new Date().getFullYear()} CloutCraft Media. All rights reserved.
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <button onClick={() => navigate('/services')} className="hover:text-brand">Services</button>
            <span>&bull;</span>
            <button onClick={() => navigate('/case-studies')} className="hover:text-brand">Viral Vault</button>
            <span>&bull;</span>
            <button onClick={() => navigate('/calculator')} className="hover:text-brand">ROI Suite</button>
            <span>&bull;</span>
            <button onClick={() => navigate('/about')} className="hover:text-brand">About</button>
            <span>&bull;</span>
            <button onClick={() => navigate('/contact')} className="hover:text-brand">Contact</button>
            <span>&bull;</span>
            <button 
              onClick={() => navigate('/admin')} 
              className="text-brand hover:underline font-bold flex items-center gap-1"
              title="Founder Admin Portal"
            >
              <span>🔒 Admin Desk</span>
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
