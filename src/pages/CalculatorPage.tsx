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
      conversionRate *= 0.6; // Higher ticket, lower volume
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
    <div className="py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="brutal-tag bg-panel-1 mb-4">
            <Calculator className="w-3.5 h-3.5 text-brand" />
            <span>FINANCIAL &amp; ATTENTION MODELLING SUITE</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Model Your <span className="bg-panel-dark text-white px-3 py-1 rounded-xl border-2 border-line inline-block shadow-brutal rotate-1">90-Day Trajectory.</span>
          </h1>

          <p className="text-lg text-ink font-medium max-w-2xl mx-auto leading-relaxed">
            Eliminate guesswork. Test different ad budgets, audience sizes, and growth disciplines to project realistic impressions, qualified leads, and blended return on ad spend.
          </p>
        </div>

        {/* The Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-white">
            <div className="flex items-center justify-between pb-4 border-b-2 border-line/20 mb-6">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                STRATEGIC INPUT PARAMETERS
              </span>
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 rounded border-2 border-line font-bold ${currency === 'INR' ? 'bg-panel-dark text-white' : 'bg-bg text-ink'}`}
                >
                  INR (₹)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded border-2 border-line font-bold ${currency === 'USD' ? 'bg-panel-dark text-white' : 'bg-bg text-ink'}`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Industry Selector */}
            <div className="mb-6">
              <label className="block font-mono text-xs uppercase font-bold text-ink mb-2">
                1. Select Industry / Business Type
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
                    className={`p-2.5 rounded-lg border-2 border-line text-xs font-bold font-mono transition-all text-center ${
                      industry === item.id
                        ? 'bg-panel-dark text-white shadow-brutal-sm -translate-y-0.5'
                        : 'bg-bg text-ink hover:bg-panel-1'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Strategy Focus Selector */}
            <div className="mb-6">
              <label className="block font-mono text-xs uppercase font-bold text-ink mb-2">
                2. Choose Strategic Focus
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'omnichannel', label: 'Full Omnichannel Engine', sub: 'Organic Viral + Paid Ads' },
                  { id: 'paid-ads', label: 'Performance Ads Scale', sub: 'ROAS & Rapid Customer Acq' },
                  { id: 'viral-reels', label: 'Viral Video Production', sub: 'Shorts, Reels, TikTok' },
                  { id: 'founder-brand', label: 'Founder Authority Engine', sub: 'B2B Inbound & Sponsorships' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStrategyFocus(item.id)}
                    className={`text-left p-3 rounded-lg border-2 border-line text-xs font-bold transition-all ${
                      strategyFocus === item.id
                        ? 'bg-panel-dark text-white shadow-brutal-sm -translate-y-0.5'
                        : 'bg-bg text-ink hover:bg-panel-1'
                    }`}
                  >
                    <div className="font-bold text-sm leading-tight">{item.label}</div>
                    <div className={`text-[10px] font-mono mt-0.5 ${strategyFocus === item.id ? 'text-purple-200' : 'text-ink/80'}`}>{item.sub}</div>
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
                <span className="font-mono text-base font-black text-brand bg-panel-1 px-3 py-1 rounded-lg border border-line">
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
                className="w-full h-3 bg-panel-1 rounded-lg appearance-none cursor-pointer accent-panel-dark border border-line"
              />
              <div className="flex justify-between text-xs font-mono text-ink font-bold mt-1">
                <span>Starter Sprint</span>
                <span>Growth Phase</span>
                <span>Full Scale Engine</span>
              </div>
            </div>

            {/* Current Audience Base */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="font-mono text-xs uppercase font-bold text-ink">
                  4. Current Follower / Monthly Visitor Baseline
                </label>
                <span className="font-mono text-base font-black text-ink bg-bg px-3 py-1 rounded-lg border border-line">
                  {audienceSize.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="2500"
                value={audienceSize}
                onChange={(e) => setAudienceSize(Number(e.target.value))}
                className="w-full h-3 bg-panel-1 rounded-lg appearance-none cursor-pointer accent-panel-dark border border-line"
              />
            </div>
          </div>

          {/* Outputs: Right 5 cols */}
          <div 
            className="lg:col-span-5 brutal-card brutal-card-dark p-6 sm:p-8 bg-panel-dark text-white flex flex-col justify-between"
            style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                <span className="font-mono text-xs font-bold text-purple-200 uppercase tracking-widest">
                  SIMULATION RESULTS
                </span>
                <span className="bg-accent-mint text-ink font-mono text-xs px-2.5 py-0.5 rounded-full font-black">
                  PROJECTED
                </span>
              </div>

              {/* ROAS Highlight */}
              <div className="bg-white/10 border border-white/20 p-5 rounded-xl mb-4">
                <span className="text-[11px] font-mono uppercase text-purple-200 block font-black">
                  Expected Blended ROAS Multiplier
                </span>
                <div className="text-4xl sm:text-5xl font-black font-display text-accent-mint mt-1">
                  {projections.roas}
                </div>
                <span className="text-xs text-white/95 mt-1 block font-semibold">
                  Across combined creative &amp; paid ad funnels
                </span>
              </div>

              {/* Sub-Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-purple-200 font-bold block">
                    90-Day Views
                  </span>
                  <span className="text-xl sm:text-2xl font-black font-display text-white mt-1 block">
                    {projections.views}
                  </span>
                </div>

                <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl">
                  <span className="text-[11px] font-mono uppercase text-purple-200 font-bold block">
                    Inbound Leads / Sales
                  </span>
                  <span className="text-xl sm:text-2xl font-black font-display text-white mt-1 block">
                    {projections.leads}
                  </span>
                </div>
              </div>

              {/* Projected Revenue */}
              <div className="bg-emerald-950/60 border-2 border-accent-mint p-4 rounded-xl mb-6">
                <span className="text-[11px] font-mono uppercase text-accent-mint block font-black">
                  Projected Incremental Gross Pipeline
                </span>
                <div className="text-2xl sm:text-3xl font-black font-display text-white mt-0.5">
                  {projections.revenue}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-white/20">
              <button
                onClick={handleWhatsAppExport}
                className="brutal-btn-primary w-full text-xs sm:text-sm py-3 justify-center bg-accent-mint hover:bg-emerald-400 text-ink font-black border-line shadow-brutal-white gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-ink" />
                <span>Export Blueprint to WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenAudit(`Calculator Model: Budget ${budget}, ROAS ${projections.roas}`)}
                className="brutal-btn-secondary w-full text-xs sm:text-sm py-3 justify-center gap-2 font-bold"
              >
                <Sparkles className="w-4 h-4 text-brand" />
                <span>Claim Free 48h Validation Call</span>
              </button>
            </div>
          </div>

        </div>

        {/* 90-Day Roadmap Walkthrough */}
        <div className="brutal-card p-6 sm:p-8 bg-white">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase font-bold text-brand block mb-1">
              CHRONOLOGICAL BLUEPRINT
            </span>
            <h3 className="text-2xl font-black font-display text-ink">
              What Your 90-Day Execution Trajectory Looks Like
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg border-2 border-line p-5 rounded-xl">
              <span className="font-mono text-xs font-black text-white bg-panel-dark px-2.5 py-0.5 rounded border border-line block w-fit mb-2">
                DAYS 1 - 30: CALIBRATION
              </span>
              <h4 className="font-bold text-base font-display text-ink mb-1">Hook Sprint &amp; Baseline CAC</h4>
              <p className="text-xs text-ink font-medium leading-relaxed">
                We test 20+ hook variations to discover your audience's emotional trigger points. Baseline CAC is established, and unprofitable ad creative is killed fast.
              </p>
            </div>

            <div className="bg-panel-1 border-2 border-line p-5 rounded-xl">
              <span className="font-mono text-xs font-black text-white bg-panel-dark px-2.5 py-0.5 rounded border border-line block w-fit mb-2">
                DAYS 31 - 60: VELOCITY
              </span>
              <h4 className="font-bold text-base font-display text-ink mb-1">Scaling Winning Assets</h4>
              <p className="text-xs text-ink font-medium leading-relaxed">
                We double ad spend on the top 20% winning video assets, launch retargeting sequences, and begin creator seeding partnerships for earned trust.
              </p>
            </div>

            <div className="bg-panel-2 border-2 border-line p-5 rounded-xl">
              <span className="font-mono text-xs font-black text-white bg-panel-dark px-2.5 py-0.5 rounded border border-line block w-fit mb-2">
                DAYS 61 - 90: DOMINANCE
              </span>
              <h4 className="font-bold text-base font-display text-ink mb-1">Predictable Compounding</h4>
              <p className="text-xs text-ink font-medium leading-relaxed">
                Blended ROAS hits target multipliers (4.4x - 5.6x). Organic reach sustains brand gravity while paid ads scale customer lifetime value predictably.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
