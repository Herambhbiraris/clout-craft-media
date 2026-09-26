import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { useRouter } from '../context/RouterContext';
import { 
  ArrowRight, Layers, Flame, Calculator, Sparkles, TrendingUp, 
  ShieldCheck, CheckCircle2, Film, Target, Star, ChevronRight, Zap, Users
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import retentionImg from '../assets/retention_3d_clapper.jpg';
import funnelImg from '../assets/performance_3d_funnel.jpg';
import vaultImg from '../assets/monetization_3d_vault.jpg';

interface HomePageProps {
  onOpenAudit: (context?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAudit }) => {
  const { navigate } = useRouter();

  // Featured Case Study for the Home Spotlight
  const featuredCase = CASE_STUDIES[0]; // ZenGlow Organics

  return (
    <div>
      {/* 1. Kinetic Hero with Interactive Hook Lab */}
      <Hero onOpenAudit={() => onOpenAudit('Hero Free 48h Audit')} />

      {/* 2. Real-Time Platform Marquee & Credibility Bar */}
      <StatsBar />

      {/* 3. The Growth Engine: 3-Craft Teaser Section */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="brutal-tag bg-panel-1 mb-3">
              <Layers className="w-3.5 h-3.5 text-brand" />
              <span>THE GROWTH ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
              Six Crafts. One Engine.
            </h2>
            <p className="text-ink text-base sm:text-lg font-medium mt-2 max-w-xl">
              We eliminate agency silos by unifying viral creative production directly with aggressive paid performance marketing.
            </p>
          </div>

          <button
            onClick={() => navigate('/services')}
            className="mt-4 md:mt-0 brutal-btn-secondary text-xs sm:text-sm py-2.5 px-5 shadow-brutal flex items-center gap-2 self-start md:self-auto font-mono font-bold"
          >
            <span>View All 6 Crafts &amp; Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Spotlight Craft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Spotlight 1: Viral Video */}
          <div 
            onClick={() => navigate('/services')}
            className="brutal-card p-6 bg-white cursor-pointer hover:bg-panel-1/30 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold bg-panel-1 text-ink px-2.5 py-1 rounded border border-line">
                  01 // RETENTION
                </span>
                <div className="w-8 h-8 rounded-lg bg-panel-dark text-white flex items-center justify-center border border-line shadow-brutal-sm">
                  <Film className="w-4 h-4" />
                </div>
              </div>

              {/* 3D Clapper Illustration */}
              <div className="relative rounded-xl overflow-hidden border-2 border-line mb-4 bg-panel-dark/10 group-hover:shadow-brutal-sm transition-all">
                <img 
                  src={retentionImg} 
                  alt="Viral Video Retention Engine" 
                  className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-panel-dark/85 backdrop-blur-sm text-accent-mint text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                  0:03 HOOK
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-ink mb-1 group-hover:text-brand transition-colors">
                Viral Video &amp; Shorts Engine
              </h3>
              <p className="text-xs font-mono font-bold text-brand mb-3">
                Scroll-Stopping 3s Hook Architecture
              </p>
              <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed mb-4">
                Pacing shifts every 2.4s, dynamic captions, and sound design engineered for Instagram Reels and YouTube Shorts retention curves.
              </p>
            </div>
            <div className="pt-3 border-t border-line/20 flex items-center justify-between text-xs font-mono font-bold text-brand">
              <span>72% Avg 3s View Rate</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Spotlight 2: Performance Marketing */}
          <div 
            onClick={() => navigate('/services')}
            className="brutal-card p-6 bg-panel-1 cursor-pointer hover:bg-panel-2/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold bg-white text-ink px-2.5 py-1 rounded border border-line">
                  02 // PAID SCALE
                </span>
                <div className="w-8 h-8 rounded-lg bg-panel-dark text-white flex items-center justify-center border border-line shadow-brutal-sm">
                  <Target className="w-4 h-4" />
                </div>
              </div>

              {/* 3D Funnel Illustration */}
              <div className="relative rounded-xl overflow-hidden border-2 border-line mb-4 bg-panel-dark/10 group-hover:shadow-brutal-sm transition-all">
                <img 
                  src={funnelImg} 
                  alt="Performance Ads ROAS Funnel" 
                  className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-panel-dark/85 backdrop-blur-sm text-amber-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                  4.4x MULTIPLIER
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-ink mb-1 group-hover:text-brand transition-colors">
                Performance Marketing (Paid Ads)
              </h3>
              <p className="text-xs font-mono font-bold text-brand mb-3">
                Full-Funnel Meta &amp; Google Ads
              </p>
              <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed mb-4">
                We test 20+ hook variations weekly to find high-converting winners, ruthlessly cutting CAC and scaling blended revenue.
              </p>
            </div>
            <div className="pt-3 border-t border-line/20 flex items-center justify-between text-xs font-mono font-bold text-brand">
              <span>4.7x Avg Blended ROAS</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Spotlight 3: Creator Talent Management */}
          <div 
            onClick={() => navigate('/services')}
            className="brutal-card brutal-card-dark p-6 bg-panel-dark text-white cursor-pointer hover:bg-panel-dark/95 transition-all flex flex-col justify-between group"
            style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold bg-white/10 text-white px-2.5 py-1 rounded border border-white/30">
                  03 // MONETIZATION
                </span>
                <div className="w-8 h-8 rounded-lg bg-white text-panel-dark flex items-center justify-center border border-white shadow-brutal-white">
                  <Star className="w-4 h-4 text-panel-dark" />
                </div>
              </div>

              {/* 3D Vault Illustration */}
              <div className="relative rounded-xl overflow-hidden border-2 border-white/20 mb-4 bg-black/40 group-hover:border-accent-mint/60 transition-all">
                <img 
                  src={vaultImg} 
                  alt="Creator Monetization Vault" 
                  className="w-full h-40 sm:h-44 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-panel-dark/85 backdrop-blur-sm text-purple-200 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                  DEALS VAULT
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-purple-200 transition-colors">
                Talent Management for Creators
              </h3>
              <p className="text-xs font-mono font-bold text-purple-200 mb-3">
                End-to-End Brand Deal Representation
              </p>
              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed mb-4">
                We negotiate 5-to-6 figure sponsorship deals, protect brand integrity, and structure long-term commercial digital products.
              </p>
            </div>
            <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono font-black text-accent-mint">
              <span>2.4x Deal Value Expansion</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </section>

      {/* 4. Featured Case Study Spotlight (The Proof) */}
      <section className="py-20 bg-bg border-y-2 border-line">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="brutal-tag bg-panel-dark text-white mb-3">
                <Flame className="w-3.5 h-3.5 text-accent-coral" />
                <span>FEATURED RESULT SPOTLIGHT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
                Proof Over Promises.
              </h2>
            </div>

            <button
              onClick={() => navigate('/case-studies')}
              className="mt-4 md:mt-0 brutal-btn-secondary text-xs sm:text-sm py-2.5 px-5 shadow-brutal flex items-center gap-2 self-start md:self-auto font-mono font-bold"
            >
              <span>Explore All Case Studies in The Viral Vault</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Case Study Hero Banner */}
          <div className="brutal-card p-6 sm:p-10 bg-white border-2 border-line shadow-brutal-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-panel-1 text-ink px-3 py-1 rounded border border-line">
                    {featuredCase.badge}
                  </span>
                  <span className="font-bold text-sm text-ink">
                    {featuredCase.client}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-ink leading-tight">
                  {featuredCase.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink leading-relaxed font-medium">
                  {featuredCase.solution}
                </p>

                {/* 4 Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {featuredCase.metrics.map((m, idx) => (
                    <div key={idx} className="bg-bg border-2 border-line p-2.5 rounded-lg">
                      <span className="text-[10px] font-mono text-ink font-bold uppercase block truncate">{m.label}</span>
                      <span className="text-xl font-black font-display text-panel-dark mt-0.5 block">{m.value}</span>
                      <span className="text-[10px] font-mono font-black text-accent-emerald">{m.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA Spotlight Box */}
              <div 
                className="lg:col-span-5 bg-panel-dark text-white p-6 sm:p-8 rounded-2xl border-2 border-line shadow-brutal flex flex-col justify-between"
                style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
              >
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-purple-200 bg-white/10 px-2.5 py-1 rounded">
                    VERIFIED ROAS MULTIPLIER
                  </span>
                  <div className="text-4xl font-black font-display text-accent-mint my-3">
                    {featuredCase.growthMultiplier}
                  </div>
                  <p className="text-xs sm:text-sm italic text-white font-medium leading-relaxed mb-6">
                    "{featuredCase.testimonial?.quote}"
                  </p>
                </div>

                <button
                  onClick={() => onOpenAudit(`Featured Case Study: ${featuredCase.client}`)}
                  className="brutal-btn-primary w-full py-3.5 text-xs sm:text-sm justify-center bg-white text-ink shadow-brutal-white font-bold gap-2 hover:bg-panel-1"
                >
                  <Sparkles className="w-4 h-4 text-brand" />
                  <span>Request Similar Sprint for Your Brand</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive ROI Calculator Teaser */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="brutal-card p-8 sm:p-12 bg-panel-1 border-2 border-line shadow-brutal-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="brutal-tag bg-white text-ink">
              <Calculator className="w-3.5 h-3.5 text-brand" />
              <span>GROWTH MODELLING SUITE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-ink leading-tight">
              Curious What Your Brand's 90-Day Numbers Could Look Like?
            </h3>
            <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
              Use our interactive financial and attention simulator. Test custom ad budgets, audience baselines, and growth crafts to project expected views, leads, and blended ROAS.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => navigate('/calculator')}
              className="brutal-btn-primary py-4 px-8 text-sm sm:text-base justify-center shadow-brutal gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Launch Interactive Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Why CloutCraft (Founder-Led Advantage Teaser) */}
      <section className="py-20 bg-bg border-t-2 border-line">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="brutal-tag bg-panel-1 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                <span>THE ANTI-AGENCY DIFFERENCE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
                Built to Fix the Broken Agency Model
              </h2>
            </div>

            <button
              onClick={() => navigate('/about')}
              className="mt-4 md:mt-0 brutal-btn-secondary text-xs sm:text-sm py-2.5 px-5 shadow-brutal flex items-center gap-2 self-start md:self-auto font-mono font-bold"
            >
              <span>Read The Founder Manifesto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Founder-Led Oversight',
                desc: 'Direct strategy with the founder. No rotating junior coordinators or telephone games.',
                tag: 'ZERO ACCOUNT HAND-OFFS'
              },
              {
                num: '02',
                title: 'Creative-First Viral Engine',
                desc: 'Scroll-stopping 3-second hooks and dynamic visual pacing that actually capture attention.',
                tag: 'RETENTION OBSESSED'
              },
              {
                num: '03',
                title: 'Real-Time Data Loops',
                desc: 'Daily monitoring of CAC and retention drop-off. Rapid weekly creative iterations.',
                tag: 'RAPID PIVOTS'
              },
              {
                num: '04',
                title: '5-to-7 Client Cap',
                desc: 'Strictly limited active roster per quarter to guarantee obsession over your growth.',
                tag: 'EXTREME FOCUS'
              }
            ].map((card, idx) => (
              <div key={idx} className="brutal-card p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-sm font-black bg-panel-dark text-white w-8 h-8 rounded-lg flex items-center justify-center">
                      {card.num}
                    </span>
                    <span className="font-mono text-[9px] font-bold bg-panel-1 text-ink px-2 py-0.5 rounded border border-line">
                      {card.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-ink mb-2">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-3 border-t border-line/20 mt-4 flex items-center gap-1 text-xs font-mono font-bold text-brand">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Principle</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. The 4-Step Velocity Timeline */}
      <section className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="brutal-tag bg-panel-1 mb-3">
            <Zap className="w-3.5 h-3.5 text-brand" />
            <span>SPEED OF EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
            From First Call to Full Scale in 30 Days
          </h2>
          <p className="text-ink text-base font-medium mt-2">
            No 4-week onboarding questionnaires. Our battle-tested sprint deploys live creative in days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: '01', title: 'Deep Audit', time: 'Days 1-3', desc: 'Hook tear-downs, competitor analysis, and audience objection mapping.' },
            { phase: '02', title: 'Growth Blueprint', time: 'Days 4-6', desc: '30-day content calendar, script matrix, and full-funnel ad structure.' },
            { phase: '03', title: 'Creative Production', time: 'Days 7-21', desc: 'High-tempo video production, ad ignition, and creator seeding.' },
            { phase: '04', title: 'Scale & Compound', time: 'Day 22+', desc: 'Aggressive ad scaling on winning hooks and continuous CAC optimization.' }
          ].map((step, idx) => (
            <div key={idx} className="brutal-card p-5 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-black bg-panel-dark text-white px-2.5 py-0.5 rounded border border-line">
                    PHASE {step.phase}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-brand">{step.time}</span>
                </div>
                <h4 className="font-display font-bold text-base text-ink mb-1">{step.title}</h4>
                <p className="text-xs text-ink font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Conversion Gateway Banner */}
      {/* <section className="py-16 bg-panel-dark text-white border-t-2 border-line">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="brutal-tag bg-white text-ink mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>48-HOUR SPRINT COMMENCEMENT</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white mb-4 leading-tight">
            Ready to Build Your Brand's Next Chapter?
          </h2>
          <p className="text-purple-100 text-base sm:text-lg max-w-xl mx-auto mb-8 font-medium">
            Get your comprehensive, custom 48-hour growth tear-down and video hook architecture — 100% free with zero sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAudit('Home Gateway 48h Audit')}
              className="brutal-btn-primary w-full sm:w-auto py-4 px-8 text-base bg-white text-ink shadow-brutal-white hover:bg-panel-1 font-bold"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span>Claim Free 48-Hour Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="brutal-btn-secondary w-full sm:w-auto py-4 px-8 text-base bg-transparent text-white border-white shadow-brutal-white hover:bg-white/10 font-bold"
            >
              <span>Contact Studio Desk</span>
            </button>
          </div>
        </div>
      </section> */}

    </div>
  );
};
