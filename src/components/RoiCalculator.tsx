import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle, Sparkles, TrendingUp, DollarSign, Eye, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditWithData: (calculatorSummary: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditWithData }) => {
  const [budget, setBudget] = useState<number>(75000); // in INR
  const [audienceSize, setAudienceSize] = useState<number>(15000);
  const [strategyFocus, setStrategyFocus] = useState<string>('omnichannel');

  // Exact Multiplier logic preserved
  const calculateProjections = () => {
    let roasMultiplier = 4.2;
    let reachFactor = 22; // views per rupee spent
    let leadsMultiplier = 0.0035;

    if (strategyFocus === 'paid-ads') {
      roasMultiplier = 4.8;
      reachFactor = 16;
      leadsMultiplier = 0.005;
    } else if (strategyFocus === 'viral-reels') {
      roasMultiplier = 3.8;
      reachFactor = 38;
      leadsMultiplier = 0.0028;
    } else if (strategyFocus === 'founder-brand') {
      roasMultiplier = 5.4;
      reachFactor = 18;
      leadsMultiplier = 0.006;
    }

    const projectedViews = Math.round(budget * reachFactor + audienceSize * 4.5);
    const projectedRevenue = Math.round(budget * roasMultiplier);
    const projectedLeads = Math.max(12, Math.round(projectedViews * leadsMultiplier / 10));

    return {
      roas: roasMultiplier.toFixed(1) + 'x',
      views: projectedViews.toLocaleString('en-IN'),
      revenue: '₹' + projectedRevenue.toLocaleString('en-IN'),
      leads: projectedLeads.toLocaleString('en-IN') + '+'
    };
  };

  const projections = calculateProjections();

  const handleWhatsAppBlueprint = () => {
    const message = encodeURIComponent(
      `Hi CloutCraft Team! I just ran your ROI Growth Calculator:\n` +
      `• Monthly Ad/Growth Budget: ₹${budget.toLocaleString('en-IN')}\n` +
      `• Current Audience: ${audienceSize.toLocaleString('en-IN')}\n` +
      `• Strategic Focus: ${strategyFocus.toUpperCase()}\n` +
      `• Projected Potential: ${projections.revenue} Revenue (${projections.roas} ROAS) & ${projections.views} Views.\n\n` +
      `I'd like to discuss a customized 48h growth sprint for my brand!`
    );
    window.open(`https://wa.me/917276998119?text=${message}`, '_blank');
  };

  const handleAuditBlueprint = () => {
    const summary = `Budget: ₹${budget.toLocaleString('en-IN')} | Focus: ${strategyFocus} | Target ROAS: ${projections.roas}`;
    onOpenAuditWithData(summary);
  };

  return (
    <section id="calculator" className="py-20 sm:py-24 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="brutal-tag bg-lavender-light text-brand border border-purple-200 mb-3">
          <Calculator className="w-3.5 h-3.5 text-violet-bright" />
          <span>FINANCIAL &amp; ATTENTION MODELLING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
          Estimate Your Brand's Growth Potential
        </h2>
        <p className="text-ink-muted text-base sm:text-lg font-medium mt-2 leading-relaxed">
          Simulate projected organic video reach, qualified pipeline leads, and blended return on ad spend with CloutCraft's growth engine.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Controls Column (Span 7): Clean Input Cards */}
        <div className="lg:col-span-7 brutal-card p-6 sm:p-10 bg-white border border-purple-100 shadow-agency flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                INPUT PARAMETERS
              </span>
              <span className="font-mono text-xs text-white font-bold bg-purple-dark px-3 py-1 rounded-full border border-purple-500/30">
                LIVE 90-DAY SIMULATION
              </span>
            </div>

            {/* Strategy Focus Selector */}
            <div className="mb-8">
              <label className="block font-mono text-xs uppercase font-bold text-ink mb-3">
                1. Select Strategic Growth Focus
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'omnichannel', label: 'Full Funnel', desc: 'Video + Paid Ads' },
                  { id: 'paid-ads', label: 'Paid Scale', desc: 'Meta & Google Ads' },
                  { id: 'viral-reels', label: 'Viral Video', desc: 'Reels & Shorts' },
                  { id: 'founder-brand', label: 'Founder IP', desc: 'Executive Brand' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStrategyFocus(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      strategyFocus === item.id
                        ? 'bg-purple-dark text-white border-purple-500/50 shadow-md -translate-y-0.5'
                        : 'bg-lavender-light/50 text-ink border-purple-100 hover:bg-lavender-light'
                    }`}
                  >
                    <span className="font-display font-bold text-xs block leading-tight">{item.label}</span>
                    <span className={`text-[10px] font-mono mt-0.5 block ${strategyFocus === item.id ? 'text-purple-200' : 'text-ink-muted'}`}>
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-xs uppercase font-bold text-ink">
                  2. Monthly Growth / Ad Budget:
                </label>
                <span className="font-display font-black text-xl text-violet-bright">
                  ₹{budget.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="500000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6C35FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink-muted mt-1.5 font-bold">
                <span>₹25K (Testing)</span>
                <span>₹2.5L (Scaling)</span>
                <span>₹5L+ (Aggressive)</span>
              </div>
            </div>

            {/* Existing Audience Size Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-xs uppercase font-bold text-ink">
                  3. Current Follower / Subscriber Baseline:
                </label>
                <span className="font-display font-black text-xl text-ink">
                  {audienceSize.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="250000"
                step="2500"
                value={audienceSize}
                onChange={(e) => setAudienceSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#6C35FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-ink-muted mt-1.5 font-bold">
                <span>0 (Starting Fresh)</span>
                <span>50K (Growing)</span>
                <span>250K+ (Established)</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] font-mono text-ink-muted leading-relaxed border-t border-purple-100 pt-4">
            *Projections calculated using blended empirical metrics from our active partner brand portfolio. Actual results vary based on offer pricing, TAM, and creative iteration tempo.
          </p>
        </div>

        {/* Projection Output Column (Span 5): Dark Obsidian Luxury Card */}
        <div 
          className="lg:col-span-5 brutal-card p-6 sm:p-10 bg-purple-dark text-white border border-purple-500/30 shadow-agency-dark flex flex-col justify-between relative overflow-hidden"
          style={{ backgroundColor: '#160D2E' }}
        >
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet-bright/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold">
                PROJECTED 90-DAY OUTCOME
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 font-mono text-xs px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/40">
                HIGH CONFIDENCE
              </span>
            </div>

            {/* Primary Projected Revenue Display */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mb-6">
              <span className="text-xs font-mono uppercase text-purple-200 block mb-1">
                Estimated Incremental Revenue
              </span>
              <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                {projections.revenue}
              </div>
              <span className="text-xs font-mono text-emerald-400 font-bold block mt-1">
                Target Blended ROAS: {projections.roas}
              </span>
            </div>

            {/* Sub-Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] font-mono uppercase text-purple-200 block mb-1">
                  Expected Video Views
                </span>
                <span className="text-2xl font-black font-display text-white block">
                  {projections.views}
                </span>
                <span className="text-[10px] font-mono text-purple-300">Organic + Paid Reach</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] font-mono uppercase text-purple-200 block mb-1">
                  Qualified Leads/Sales
                </span>
                <span className="text-2xl font-black font-display text-white block">
                  {projections.leads}
                </span>
                <span className="text-[10px] font-mono text-purple-300">High-Intent Inbound</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-white/15">
            <button
              onClick={handleAuditBlueprint}
              className="w-full py-4 rounded-full bg-white text-ink font-bold text-sm flex items-center justify-center gap-2 hover:bg-lavender-light shadow-md transition-all group"
            >
              <Sparkles className="w-4 h-4 text-violet-bright group-hover:rotate-12 transition-transform" />
              <span>Claim Free 48h Audit With This Model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsAppBlueprint}
              className="w-full py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Share Model Directly on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
