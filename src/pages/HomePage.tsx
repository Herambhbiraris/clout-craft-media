import React from 'react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { ServicesBento } from '../components/ServicesBento';
import { useRouter } from '../context/RouterContext';
import { 
  ArrowRight, Flame, Calculator, Sparkles, TrendingUp, 
  ShieldCheck, CheckCircle2, Zap
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';

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

      {/* 3. The Growth Engine: Services Bento Grid */}
      <ServicesBento onSelectService={() => {
        navigate('/services');
      }} />

      {/* 4. Featured Case Study Spotlight (The Proof) */}
      <section className="py-20 sm:py-24 bg-lavender-light/40 border-y border-purple-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="brutal-tag bg-white text-purple-deep border border-purple-200/80 mb-3 shadow-sm">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>FEATURED RESULT SPOTLIGHT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
                Proof Over Promises.
              </h2>
              <p className="text-ink-muted text-base sm:text-lg font-medium mt-2 max-w-xl">
                Real revenue velocity, retention curves, and ROAS generated for actual clients.
              </p>
            </div>

            <button
              onClick={() => navigate('/case-studies')}
              className="mt-4 md:mt-0 brutal-btn-secondary text-xs sm:text-sm py-3 px-6 shadow-sm flex items-center gap-2 self-start md:self-auto font-mono font-bold hover:border-violet-bright transition-all"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-violet-bright" />
            </button>
          </div>

          {/* Featured Case Study Hero Banner */}
          <div className="brutal-card p-6 sm:p-10 lg:p-12 bg-white border border-purple-100/90 shadow-agency relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-black tracking-wider text-violet-bright bg-lavender-light px-3.5 py-1.5 rounded-full border border-purple-200/70">
                    {featuredCase.badge}
                  </span>
                  <span className="font-mono text-xs font-bold text-ink-muted bg-white border border-purple-100 px-3 py-1.5 rounded-full">
                    {featuredCase.category}
                  </span>
                  <span className="font-bold text-sm text-ink pl-1">
                    Client: {featuredCase.client}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black font-display text-ink leading-tight">
                  {featuredCase.title}
                </h3>

                <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                  {featuredCase.solution}
                </p>

                {/* 4 Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                  {featuredCase.metrics.map((m, idx) => (
                    <div key={idx} className="bg-lavender-light/70 border border-purple-100/80 p-3.5 rounded-2xl transition-all hover:bg-white hover:shadow-sm">
                      <span className="text-[10px] font-mono text-ink-muted font-bold uppercase block truncate">{m.label}</span>
                      <span className="text-xl sm:text-2xl font-black font-display text-purple-dark mt-1 block">{m.value}</span>
                      <span className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3" />
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA Spotlight Box */}
              <div 
                className="lg:col-span-5 bg-purple-dark text-white p-7 sm:p-9 rounded-2xl border border-purple-800/40 shadow-agency-dark flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle internal glow */}
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-violet-bright/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-purple-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      VERIFIED ROAS MULTIPLIER
                    </span>
                    <span className="text-xs font-mono text-purple-300">
                      90-Day Sprint
                    </span>
                  </div>

                  <div className="text-5xl font-black font-display text-emerald-400 my-2 tracking-tight">
                    {featuredCase.growthMultiplier}
                  </div>

                  <p className="text-xs font-mono text-purple-200 uppercase tracking-wider mb-4">
                    ROAS expansion across Meta &amp; Reels
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                    <p className="text-xs sm:text-sm italic text-purple-100 font-medium leading-relaxed">
                      "{featuredCase.testimonial?.quote}"
                    </p>
                    <span className="text-[11px] font-mono font-bold text-violet-300 block mt-2">
                      &mdash; {featuredCase.testimonial?.author}, {featuredCase.testimonial?.role}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAudit(`Featured Case Study: ${featuredCase.client}`)}
                  className="relative z-10 brutal-btn-primary w-full py-4 text-xs sm:text-sm justify-center bg-violet-bright hover:bg-violet-dark text-white font-bold rounded-full shadow-glow-violet gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Request Similar Sprint for Your Brand</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. Interactive ROI Calculator Teaser */}
      <section className="py-20 sm:py-24 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="brutal-card p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-lavender-light via-white to-lavender-light border border-purple-200/90 shadow-agency flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="max-w-2xl space-y-4">
            <div className="brutal-tag bg-white text-purple-deep border border-purple-200/80 shadow-sm">
              <Calculator className="w-3.5 h-3.5 text-violet-bright" />
              <span>INTERACTIVE TRAJECTORY SIMULATOR</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-ink leading-tight tracking-tight">
              Curious What Your Brand's 90-Day Numbers Could Look Like?
            </h3>
            <p className="text-sm sm:text-base text-ink-muted font-medium leading-relaxed">
              Use our interactive financial and attention simulator. Test custom ad budgets, audience baselines, and growth crafts to project expected views, leads, and blended ROAS.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => navigate('/calculator')}
              className="brutal-btn-primary py-4 px-8 text-sm sm:text-base justify-center shadow-agency gap-2 bg-purple-dark hover:bg-ink text-white rounded-full font-bold transition-all"
            >
              <Calculator className="w-4 h-4 text-amber-300" />
              <span>Launch Interactive Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Why CloutCraft (Founder-Led Advantage Teaser) */}
      <section className="py-20 sm:py-24 bg-lavender-light/30 border-t border-purple-100">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="brutal-tag bg-white text-purple-deep border border-purple-200/80 mb-3 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-bright" />
                <span>THE ANTI-AGENCY DIFFERENCE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
                Built to Fix the Broken Agency Model
              </h2>
              <p className="text-ink-muted text-base sm:text-lg font-medium mt-2 max-w-xl">
                We replaced bureaucratic layers with obsessive execution, founder-level strategy, and mathematical retention.
              </p>
            </div>

            <button
              onClick={() => navigate('/about')}
              className="mt-4 md:mt-0 brutal-btn-secondary text-xs sm:text-sm py-3 px-6 shadow-sm flex items-center gap-2 self-start md:self-auto font-mono font-bold hover:border-violet-bright transition-all"
            >
              <span>Read The Founder Manifesto</span>
              <ArrowRight className="w-4 h-4 text-violet-bright" />
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
              <div 
                key={idx} 
                className="brutal-card p-7 bg-white border border-purple-100 rounded-agency shadow-agency hover:shadow-agency-hover transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-black bg-purple-dark text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
                      {card.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold bg-lavender-light text-violet-bright px-3 py-1 rounded-full border border-purple-200/60">
                      {card.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-ink mb-2 group-hover:text-violet-bright transition-colors">{card.title}</h4>
                  <p className="text-xs sm:text-sm text-ink-muted font-medium leading-relaxed">{card.desc}</p>
                </div>
                <div className="pt-4 border-t border-purple-100/70 mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-violet-bright">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Guaranteed Principle</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. The 4-Step Velocity Timeline */}
      <section className="py-20 sm:py-24 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="brutal-tag bg-lavender-light text-violet-bright border border-purple-200/70 mb-3">
            <Zap className="w-3.5 h-3.5 text-violet-bright" />
            <span>SPEED OF EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
            From First Call to Full Scale in 30 Days
          </h2>
          <p className="text-ink-muted text-base font-medium mt-3">
            No 4-week onboarding questionnaires. Our battle-tested sprint deploys live creative in days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { phase: '01', title: 'Deep Audit', time: 'Days 1-3', desc: 'Hook tear-downs, competitor analysis, and audience objection mapping.' },
            { phase: '02', title: 'Growth Blueprint', time: 'Days 4-6', desc: '30-day content calendar, script matrix, and full-funnel ad structure.' },
            { phase: '03', title: 'Creative Production', time: 'Days 7-21', desc: 'High-tempo video production, ad ignition, and creator seeding.' },
            { phase: '04', title: 'Scale & Compound', time: 'Day 22+', desc: 'Aggressive ad scaling on winning hooks and continuous CAC optimization.' }
          ].map((step, idx) => (
            <div 
              key={idx} 
              className="brutal-card p-6 bg-white border border-purple-100 rounded-2xl shadow-agency hover:shadow-agency-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-black bg-purple-dark text-white px-3 py-1 rounded-full">
                    PHASE {step.phase}
                  </span>
                  <span className="text-xs font-mono font-bold text-violet-bright bg-lavender-light px-2.5 py-0.5 rounded-full border border-purple-200/60">
                    {step.time}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-ink mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-ink-muted font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
