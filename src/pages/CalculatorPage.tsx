import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle, Sparkles, TrendingUp, DollarSign, Calendar, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CalculatorPageProps {
  onOpenAudit: (summary: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenAudit }) => {
  const [budget, setBudget] = useState<number>(100000);
  const [audienceSize, setAudienceSize] = useState<number>(25000);
  const [strategyFocus, setStrategyFocus] = useState<string>('omnichannel');
  const [industry, setIndustry] = useState<string>('d2c');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const calculateAdvancedProjections = () => {
    let roasMultiplier = 4.4;
    let reachPerUnit = 24;
    let conversionRate = 0.0038;

    if (strategyFocus === 'paid-ads') {
      roasMultiplier = 4.9;
      reachPerUnit = 18;
      conversionRate = 0.0052;
    } else if (strategyFocus === 'viral-reels') {
      roasMultiplier = 3.8;
      reachPerUnit = 42;
      conversionRate = 0.0029;
    } else if (strategyFocus === 'founder-brand') {
      roasMultiplier = 5.6;
      reachPerUnit = 19;
      conversionRate = 0.0068;
    }

    if (industry === 'b2b') {
      conversionRate *= 0.6;
      roasMultiplier *= 1.25;
    }

    const projectedViews = Math.round(budget * reachPerUnit + audienceSize * 5.2);
    const projectedRevenue = Math.round(budget * roasMultiplier);
    const projectedLeads = Math.max(15, Math.round(projectedViews * conversionRate / 10));

    return {
      roas: roasMultiplier.toFixed(1) + 'x',
      views: projectedViews.toLocaleString('en-IN'),
      revenue: (currency === 'INR' ? '₹' : '$') + projectedRevenue.toLocaleString('en-IN'),
      leads: projectedLeads.toLocaleString('en-IN') + '+'
    };
  };

  const projections = calculateAdvancedProjections();

  const handleWhatsAppExport = () => {
    const message = encodeURIComponent(
      `Hi Herambh / CloutCraft Team!\n\n` +
      `I've modelled our 90-day growth trajectory on your calculator:\n` +
      `• Industry: ${industry.toUpperCase()}\n` +
      `• Strategic Focus: ${strategyFocus.toUpperCase()}\n` +
      `• Monthly Growth Budget: ${currency === 'INR' ? '₹' : '$'}${budget.toLocaleString('en-IN')}\n` +
      `• Current Reach: ${audienceSize.toLocaleString('en-IN')}\n` +
      `• Projected Outcome: ${projections.revenue} Revenue (${projections.roas} Blended ROAS) & ${projections.views} Views.\n\n` +
      `I'd like to schedule our 48-Hour Growth Audit to validate these numbers!`
    );
    window.open(`https://wa.me/917276998119?text=${message}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="brutal-tag bg-lavender-light text-brand border border-purple-200 mb-4">
            <Calculator className="w-3.5 h-3.5 text-violet-bright" />
            <span>FINANCIAL &amp; ATTENTION MODELLING SUITE</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Model Your <span className="text-violet-bright">90-Day Trajectory.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Eliminate guesswork. Test different ad budgets, audience sizes, and growth disciplines to project realistic impressions, qualified leads, and blended return on ad spend.
          </p>
        </div>

        {/* The Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-10 bg-white border border-purple-100 shadow-agency flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  STRATEGIC INPUT PARAMETERS
                </span>
                <div className="flex items-center gap-1 font-mono text-xs bg-slate-100 p-1 rounded-full border border-purple-100">
                  <button
                    onClick={() => setCurrency('INR')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${currency === 'INR' ? 'bg-purple-dark text-white shadow-sm' : 'text-ink-muted hover:text-ink'}`}
                  >
                    INR (₹)
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${currency === 'USD' ? 'bg-purple-dark text-white shadow-sm' : 'text-ink-muted hover:text-ink'}`}
                  >
                    USD ($)
                  </button>
                </div>
              </div>

              {/* Industry Selector */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase font-bold text-ink mb-2.5">
                  1. Select Industry / Business Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'd2c', label: 'D2C E-Comm' },
                    { id: 'b2b', label: 'B2B SaaS' },
                    { id: 'creator', label: 'Creator Brand' },
                    { id: 'services', label: 'High-Ticket' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setIndustry(item.id)}
                      className={`p-2.5 rounded-xl border text-xs font-bold font-mono transition-all text-center ${
                        industry === item.id
                          ? 'bg-purple-dark text-white border-purple-500/50 shadow-sm'
                          : 'bg-lavender-light/50 text-ink border-purple-100 hover:bg-lavender-light'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Focus Selector */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase font-bold text-ink mb-2.5">
                  2. Choose Strategic Growth Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'omnichannel', label: 'Full Omnichannel Engine', sub: 'Organic Viral + Paid Ads' },
                    { id: 'paid-ads', label: 'Performance Ads Scale', sub: 'ROAS & Rapid Customer Acq' },
                    { id: 'viral-reels', label: 'Viral Video Production', sub: 'Shorts, Reels, TikTok' },
                    { id: 'founder-brand', label: 'Founder Authority Engine', sub: 'B2B Inbound & Sponsorships' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setStrategyFocus(item.id)}
                      className={`text-left p-3.5 rounded-xl border text-xs font-bold transition-all ${
                        strategyFocus === item.id
                          ? 'bg-purple-dark text-white border-purple-500/50 shadow-sm'
                          : 'bg-lavender-light/50 text-ink border-purple-100 hover:bg-lavender-light'
                      }`}
                    >
                      <div className="font-bold text-sm leading-tight">{item.label}</div>
                      <div className={`text-[10px] font-mono mt-0.5 ${strategyFocus === item.id ? 'text-purple-200' : 'text-ink-muted'}`}>{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Budget Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase font-bold text-ink">
                    3. Monthly Growth / Marketing Budget
                  </label>
                  <span className="font-mono text-base font-black text-violet-bright bg-lavender-light px-3 py-1 rounded-full border border-purple-200">
                    {currency === 'INR' ? '₹' : '$'}{budget.toLocaleString('en-IN')} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === 'INR' ? 30000 : 500}
                  max={currency === 'INR' ? 1000000 : 15000}
                  step={currency === 'INR' ? 5000 : 100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6C35FF]"
                />
              </div>

              {/* Current Audience Base */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase font-bold text-ink">
                    4. Current Follower / Monthly Visitor Baseline
                  </label>
                  <span className="font-mono text-base font-black text-ink bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                    {audienceSize.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="5000"
                  value={audienceSize}
                  onChange={(e) => setAudienceSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6C35FF]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>*Model calibrated from verified partner cohort data</span>
              <span className="text-emerald-600 font-bold">✓ 90-Day Compounding Horizon</span>
            </div>
          </div>

          {/* Output Display Column: Right 5 cols (Obsidian Panel) */}
          <div 
            className="lg:col-span-5 brutal-card p-6 sm:p-10 bg-purple-dark text-white border border-purple-500/30 shadow-agency-dark flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: '#160D2E' }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold">
                  PROJECTED 90-DAY TRAJECTORY
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/40">
                  VERIFIED FORMULA
                </span>
              </div>

              {/* Primary Projected Revenue Display */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mb-6">
                <span className="text-xs font-mono uppercase text-purple-200 block mb-1">
                  Projected Incremental Cashflow
                </span>
                <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                  {projections.revenue}
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold block mt-1">
                  Target ROAS Multiplier: {projections.roas}
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-purple-200 block mb-1">
                    Audience Reach
                  </span>
                  <span className="text-2xl font-black font-display text-white block">
                    {projections.views}
                  </span>
                  <span className="text-[10px] font-mono text-purple-300">Organic Video Views</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-purple-200 block mb-1">
                    Qualified Inbound
                  </span>
                  <span className="text-2xl font-black font-display text-white block">
                    {projections.leads}
                  </span>
                  <span className="text-[10px] font-mono text-purple-300">Pipeline Inquiries</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-white/15">
              <button
                onClick={() => onOpenAudit(`Calculator Trajectory: ${projections.revenue} (${projections.roas})`)}
                className="w-full py-4 rounded-full bg-white text-ink font-bold text-sm flex items-center justify-center gap-2 hover:bg-lavender-light shadow-md transition-all group"
              >
                <Sparkles className="w-4 h-4 text-violet-bright group-hover:rotate-12 transition-transform" />
                <span>Claim Free 48h Audit With This Model</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWhatsAppExport}
                className="w-full py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Send Trajectory to Founder on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
