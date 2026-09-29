import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import clapperIcon from '../assets/icon_content_production.png';
import megaphoneIcon from '../assets/icon_paid_media.png';
import chartIcon from '../assets/icon_brand_strategy.png';
import lightbulbIcon from '../assets/icon_creative_strategy.png';
import playCubeImg from '../assets/3d_play_cube.png';
import phoneMockupImg from '../assets/3d_phone_mockup.png';

interface ServicesBentoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-24 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <div className="brutal-tag bg-lavender-light text-brand border border-purple-200/80 mb-3">
            <Layers className="w-3.5 h-3.5 text-violet-bright" />
            <span>SIX CRAFTS &bull; ONE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black font-display text-ink tracking-tight">
            Designed for Impact. <br />
            <span className="text-violet-bright">Engineered for Revenue.</span>
          </h2>
          <p className="text-ink-muted text-base sm:text-lg font-medium mt-3 max-w-xl leading-relaxed">
            We eliminate agency silos by unifying viral creative production directly with aggressive paid performance marketing and founder positioning.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="text-xs font-mono text-ink bg-white border border-purple-100 px-4 py-2.5 rounded-full shadow-sm font-bold inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Crafts Include Direct Founder Oversight</span>
          </div>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* HERO FEATURE CARD (Span 7): 01 Creative Video Production & Viral Engine */}
        <div 
          onClick={() => onSelectService('Viral Video Production & Editing')}
          className="lg:col-span-7 brutal-card p-6 sm:p-10 bg-white border border-purple-100/90 shadow-agency hover:shadow-agency-hover cursor-pointer group flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle decorative purple glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-black tracking-wider text-violet-bright bg-lavender-light px-3 py-1 rounded-full border border-purple-200/60">
                01 // VIRAL HOOKS
              </span>
              <img 
                src={clapperIcon} 
                alt="Viral Video Production" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-8">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-ink mb-2 group-hover:text-violet-bright transition-colors">
                  Viral Video Production &amp; Editing
                </h3>
                <p className="text-xs sm:text-sm font-mono font-bold text-violet-bright mb-4">
                  Scroll-Stopping 3s Hook Architecture
                </p>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium mb-6">
                  Cut-throat 3-second hooks, dynamic kinetic typography, high-energy sound design, and pacing shifts every 2.4s engineered around Instagram Reels, TikTok, and YouTube Shorts retention curves.
                </p>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['3s Hook Matrix', 'Multi-Format (9:16 / 1:1)', 'Sound Design & SFX', 'Retention Drop-Off Polish'].map((deliv, idx) => (
                    <span key={idx} className="text-[11px] font-mono font-bold bg-lavender-light text-ink px-2.5 py-1 rounded-full border border-purple-100">
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3D Visual in card: Phone mockup */}
              <div className="sm:col-span-4 flex justify-center items-center">
                <div className="relative group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={phoneMockupImg} 
                    alt="Reels on Phone" 
                    className="w-32 sm:w-36 h-auto object-contain drop-shadow-xl" 
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white font-mono text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
                    72% 3s RETENTION
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-violet-bright">
            <span>Verified 72% View-Through Rate</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Explore Playbook</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* FEATURE CARD 2 (Span 5): 02 Performance Marketing (Paid Ads) */}
        <div 
          onClick={() => onSelectService('Performance Marketing (Paid Ads)')}
          className="lg:col-span-5 brutal-card p-6 sm:p-8 bg-lavender-light/60 border border-purple-100/90 shadow-agency hover:shadow-agency-hover cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-black tracking-wider text-violet-bright bg-white px-3 py-1 rounded-full border border-purple-200/60">
                02 // PAID SCALE
              </span>
              <img 
                src={megaphoneIcon} 
                alt="Paid Media" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
            </div>

            <h3 className="text-2xl font-black font-display text-ink mb-1 group-hover:text-violet-bright transition-colors">
              Performance Marketing (Paid Ads)
            </h3>
            <p className="text-xs font-mono font-bold text-violet-bright mb-3">
              Predictable Revenue, Relentless ROAS
            </p>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-medium mb-6">
              Full-funnel Meta &amp; Google ad campaigns engineered for measurable CAC reduction and cashflow multiplication. We test 20+ hook variations weekly.
            </p>

            <div className="bg-white p-4 rounded-xl border border-purple-100/80 mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-ink-muted">Weekly Creative Testing Matrix</span>
                <span className="text-emerald-600 font-bold">20+ Hooks/Wk</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-violet-bright to-emerald-500 h-full rounded-full w-[85%]" />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs font-mono font-bold text-violet-bright">
            <span>4.6x Average ROAS</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* CARD 3 (Span 4): 03 Brand Strategy & Category Creation */}
        <div 
          onClick={() => onSelectService('Brand Strategy & Positioning')}
          className="lg:col-span-4 brutal-card p-6 sm:p-7 bg-white border border-purple-100/90 shadow-agency hover:shadow-agency-hover cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-black tracking-wider text-violet-bright bg-lavender-light px-3 py-1 rounded-full border border-purple-200/60">
                03 // POSITIONING
              </span>
              <img 
                src={chartIcon} 
                alt="Brand Strategy" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </div>

            <h3 className="text-xl font-black font-display text-ink mb-1 group-hover:text-violet-bright transition-colors">
              Brand Strategy &amp; Positioning
            </h3>
            <p className="text-xs font-mono font-bold text-violet-bright mb-3">
              Make Your Brand Impossible to Ignore
            </p>
            <p className="text-xs text-ink-muted leading-relaxed font-medium mb-4">
              Distinctive brand positioning, narrative frameworks, voice bibles, and visual identity systems that give you unfair pricing power.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-violet-bright">
            <span>Top 5% Category Moat</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* CARD 4 (Span 4): 04 Talent Management for Creators (Obsidian Card) */}
        <div 
          onClick={() => onSelectService('Talent Management for Creators')}
          className="lg:col-span-4 brutal-card p-6 sm:p-7 bg-purple-dark text-white border border-purple-500/30 shadow-agency-dark hover:shadow-glow-violet cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: '#160D2E' }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-black tracking-wider text-purple-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                04 // MONETIZATION
              </span>
              <img 
                src={playCubeImg} 
                alt="Talent Desk" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
              />
            </div>

            <h3 className="text-xl font-black font-display text-white mb-1 group-hover:text-purple-300 transition-colors">
              Talent Management for Creators
            </h3>
            <p className="text-xs font-mono font-bold text-purple-300 mb-3">
              Turn Influence Into Long-Term Empire
            </p>
            <p className="text-xs text-slate-300 leading-relaxed font-medium mb-4">
              Hands-on executive representation. We negotiate 5-to-6 figure brand sponsorships, build digital products, and manage operational chaos.
            </p>
          </div>

          <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono font-black text-emerald-400">
            <span>2.4x Deal Value Expansion</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* CARD 5 (Span 4): 05 Influencer Marketing & Creative Strategy */}
        <div 
          onClick={() => onSelectService('Influencer Marketing Campaigns')}
          className="lg:col-span-4 brutal-card p-6 sm:p-7 bg-white border border-purple-100/90 shadow-agency hover:shadow-agency-hover cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-black tracking-wider text-violet-bright bg-lavender-light px-3 py-1 rounded-full border border-purple-200/60">
                05 // SEEDING
              </span>
              <img 
                src={lightbulbIcon} 
                alt="Influencer Marketing" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </div>

            <h3 className="text-xl font-black font-display text-ink mb-1 group-hover:text-violet-bright transition-colors">
              Influencer Marketing &amp; UGC Seeding
            </h3>
            <p className="text-xs font-mono font-bold text-violet-bright mb-3">
              Borrow Trust at Exponential Scale
            </p>
            <p className="text-xs text-ink-muted leading-relaxed font-medium mb-4">
              Data-vetted creator collaborations that put your brand in front of captive audiences. Strictly creators with verified buyer engagement.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-violet-bright">
            <span>3.9x Earned Media Value (EMV)</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </div>

    </section>
  );
};
