import React, { useState } from 'react';
import { 
  MessageSquare, Film, Target, Compass, Star, Sparkles, 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, ChevronRight 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import retentionImg from '../assets/retention_3d_clapper.jpg';
import funnelImg from '../assets/performance_3d_funnel.jpg';
import vaultImg from '../assets/monetization_3d_vault.jpg';

interface ServicesPageProps {
  onOpenAudit: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenAudit }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('social-media');

  const detailedPlaybooks: Record<string, {
    thesis: string;
    techStack: string[];
    timeline: string;
    whoFor: string;
  }> = {
    'social-media': {
      thesis: 'Most agencies treat social like a broadcast megaphone. We treat it like an organic viral testing laboratory where winning ideas get turned into paid assets.',
      techStack: ['Notion Content OS', 'CapCut Pro', 'Figma', 'Sprout Social', 'Meta Business Suite'],
      timeline: 'Continuous Monthly Growth Retainer',
      whoFor: 'Brands with an existing product wanting daily, algorithm-aligned presence.'
    },
    'video-editing': {
      thesis: 'In 2026, content that doesn’t hook in 3 seconds is dead. We edit with mathematical retention curves: pacing shifts every 2.4s, dynamic captions, and sound engineering.',
      techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Descript', 'Soundstripe'],
      timeline: '24 to 48 Hour Turnaround per Asset',
      whoFor: 'Creators, Founders, and E-commerce brands needing scroll-stopping Reels/Shorts.'
    },
    'performance-marketing': {
      thesis: 'Scaling ad spend without creative testing is burning money. We test 20+ hooks weekly to find 2-3 runaway winners that generate profitable blended ROAS.',
      techStack: ['Meta Ads Manager', 'Google Ads & PMax', 'Triple Whale', 'Shopify Analytics', 'GA4'],
      timeline: 'Weekly Sprint Cycles & Real-Time Dashboards',
      whoFor: 'D2C stores and SaaS founders spending ₹50K to ₹10L+ monthly looking to scale.'
    },
    'brand-strategy': {
      thesis: 'If your brand can be copied in 5 minutes, you have no pricing power. We position you as a category of one with sharp contrarian messaging.',
      techStack: ['Figma Brand OS', 'Positioning Frameworks', 'Type Design', 'Color Psychology'],
      timeline: '2 to 3 Week Deep Strategic Sprint',
      whoFor: 'Founders launching a new venture or established brands hitting a growth plateau.'
    },
    'talent-management': {
      thesis: 'Creators should create, not negotiate contracts. We handle inbound sponsorship deals, set rate cards, pitch brands, and expand long-term digital equity.',
      techStack: ['Dedicated Talent Desk', 'Brand Deal CRM', 'Contract Legal Templates'],
      timeline: 'Long-Term Strategic Representation',
      whoFor: 'Established creators with 50K+ engaged followers looking to monetize systematically.'
    },
    'influencer-marketing': {
      thesis: 'Stop paying spammers for vanity story views. We recruit niche, high-trust creators who actually move product, paired with whitelisted paid ad usage rights.',
      techStack: ['Creator Discovery Engine', 'Seeding Logistics', 'UGC Rights Contracts'],
      timeline: '30-Day Campaign Sprints',
      whoFor: 'Consumer brands wanting authentic word-of-mouth and high-converting UGC assets.'
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];
  const activePlaybook = detailedPlaybooks[activeService.id];

  const getActiveIllustration = (id: string) => {
    switch (id) {
      case 'video-production':
      case 'social-media':
        return { img: retentionImg, label: '3D RETENTION ENGINE' };
      case 'paid-ads':
      case 'cro':
        return { img: funnelImg, label: '3D ROAS CONVERSION FUNNEL' };
      case 'brand-strategy':
      case 'influencer-marketing':
      default:
        return { img: vaultImg, label: '3D MONETIZATION VAULT' };
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="brutal-tag bg-panel-1 mb-4">
            <Layers className="w-3.5 h-3.5 text-brand" />
            <span>GROWTH DISCIPLINES &bull; FOUNDER-LED</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Six Crafts. <span className="bg-panel-dark text-paper px-3 py-1 rounded-xl border-2 border-line inline-block shadow-brutal -rotate-1">One Growth Engine.</span>
          </h1>

          <p className="text-lg text-ink font-semibold max-w-2xl mx-auto leading-relaxed">
            We don’t offer 50 bloated services. We specialize strictly in the six growth disciplines that directly control attention, brand perception, and scalable revenue.
          </p>
        </div>

        {/* Quick Service Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`p-3 rounded-xl border-2 border-line font-mono text-xs font-bold transition-all text-left flex flex-col justify-between ${
                selectedServiceId === service.id
                  ? 'bg-panel-dark text-paper shadow-brutal-sm -translate-y-1'
                  : 'bg-paper text-ink hover:bg-panel-1'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold ${selectedServiceId === service.id ? 'text-purple-200' : 'text-ink/80'}`}>{service.number}</span>
                {selectedServiceId === service.id && (
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
                )}
              </div>
              <span className="truncate block font-sans font-bold text-xs">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Deep Dive Bento Panel for Active Service */}
        <div className="brutal-card p-6 sm:p-10 bg-paper border-2 border-line shadow-brutal-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Strategy & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-black bg-panel-dark text-paper px-3 py-1 rounded-md border border-line">
                  CRAFT {activeService.number}
                </span>
                <span className="font-mono text-xs font-bold bg-panel-1 px-3 py-1 rounded-md border border-line">
                  {activeService.tag}
                </span>
                <span className="font-mono text-xs font-bold text-accent-emerald bg-emerald-100 px-3 py-1 rounded-md border border-emerald-300">
                  {activeService.metrics}
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black font-display text-ink mb-1">
                  {activeService.title}
                </h2>
                <p className="font-mono text-sm font-bold text-brand">
                  {activeService.tagline}
                </p>
              </div>

              {/* The Playbook Thesis */}
              <div className="bg-bg/90 border-2 border-line p-5 rounded-xl shadow-inner">
                <span className="text-[10px] font-mono uppercase font-bold text-panel-dark block mb-1">
                  THE CLOUTCRAFT STRATEGIC THESIS:
                </span>
                <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
                  {activePlaybook?.thesis}
                </p>
              </div>

              {/* Actionable Deliverables */}
              <div>
                <h3 className="font-mono text-xs uppercase font-bold text-ink mb-3 tracking-wider">
                  WHAT YOU RECEIVE IN THIS SPRINT:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="bg-paper border-2 border-line p-3 rounded-lg flex items-start gap-2 shadow-brutal-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                      <span className="text-xs font-semibold text-ink leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Spec Sheet & Scoping */}
            <div className="lg:col-span-5 bg-panel-1/70 border-2 border-line p-6 rounded-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b-2 border-line/20">
                <span className="font-mono text-xs font-bold uppercase text-ink">
                  SPRINT SPECIFICATIONS
                </span>
                <span className="text-xs font-mono bg-paper px-2 py-0.5 rounded border border-line font-bold">
                  FOUNDER SUPERVISED
                </span>
              </div>

              {/* 3D Craft Blueprint Object */}
              <div className="relative rounded-xl overflow-hidden border-2 border-line bg-panel-dark shadow-brutal-sm group">
                <img 
                  src={getActiveIllustration(activeService.id).img} 
                  alt={activeService.title} 
                  className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-panel-dark/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/20 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-accent-mint font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {getActiveIllustration(activeService.id).label}
                  </span>
                  <span className="text-purple-200 font-bold">PROPRIETARY ENGINE</span>
                </div>
              </div>

              {/* Who it's for */}
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-ink block mb-1">
                  IDEAL FOR:
                </span>
                <p className="text-xs font-bold text-ink bg-paper p-3 rounded-lg border border-line">
                  {activePlaybook?.whoFor}
                </p>
              </div>

              {/* Cadence & Turnaround */}
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-ink block mb-1">
                  VELOCITY & TURNAROUND:
                </span>
                <p className="text-xs font-mono font-bold text-panel-dark bg-paper p-3 rounded-lg border border-line">
                  ⚡ {activePlaybook?.timeline}
                </p>
              </div>

              {/* Production Stack */}
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-ink block mb-1.5">
                  TOOLING & TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activePlaybook?.techStack.map((tool, idx) => (
                    <span key={idx} className="text-[10px] font-mono font-bold bg-paper text-ink px-2 py-1 rounded border border-line shadow-brutal-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Scope Button */}
              <div className="pt-3">
                <button
                  onClick={() => onOpenAudit(`Service Deep Dive: ${activeService.title}`)}
                  className="brutal-btn-primary w-full py-3.5 text-sm justify-center shadow-brutal gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Scope This Craft for Your Brand</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] font-mono text-ink font-bold text-center mt-2">
                  ✓ Free 48-Hour Strategic Tear-down Included
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* All 6 Crafts Grid Overview */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase font-bold text-brand block mb-1">
              THE FULL MENU
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-ink">
              Compare All 6 Growth Disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((s) => (
              <div
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className="brutal-card p-6 bg-paper cursor-pointer hover:bg-panel-1/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-ink bg-bg px-2 py-0.5 rounded border border-line">
                      {s.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-brand">{s.tag}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink mb-1">{s.title}</h4>
                  <p className="text-xs text-ink font-medium leading-relaxed mb-4">{s.description}</p>
                </div>
                <div className="pt-3 border-t-2 border-line flex items-center justify-between text-xs font-mono font-bold text-panel-dark">
                  <span>{s.metrics}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
