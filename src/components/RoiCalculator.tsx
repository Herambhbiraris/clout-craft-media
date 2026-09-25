import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle, Sparkles, TrendingUp, DollarSign, Eye, Users } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAuditWithData: (calculatorSummary: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAuditWithData }) => {
  const [budget, setBudget] = useState<number>(75000); // in INR
  const [audienceSize, setAudienceSize] = useState<number>(15000);
  const [strategyFocus, setStrategyFocus] = useState<string>('omnichannel');

  // Multiplier logic
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
    <section id="calculator" className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="brutal-tag bg-panel-1 mb-3">
          <Calculator className="w-3.5 h-3.5 text-brand" />
          <span>INTERACTIVE GROWTH MODELLING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
          Estimate Your Growth Potential
        </h2>
        <p className="text-ink text-base sm:text-lg font-medium mt-2">
          Adjust your current numbers to simulate expected organic attention, lead volume, and blended revenue expansion with CloutCraft.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-white">
          <div className="flex items-center justify-between pb-4 border-b-2 border-line/20 mb-6">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
              INPUT PARAMETERS
            </span>
            <span className="font-mono text-xs text-white font-bold bg-panel-dark px-3 py-1 rounded-md">
              LIVE SIMULATION
            </span>
          </div>

          {/* Strategy Focus Selector */}
          <div className="mb-6">
            <label className="block font-mono text-xs uppercase font-bold text-ink mb-2">
              1. Choose Strategic Growth Focus
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'omnichannel', label: 'Full Omnichannel', sub: 'Organic + Paid Ads' },
                { id: 'paid-ads', label: 'Performance Ads', sub: 'ROAS & Direct Sales' },
                { id: 'viral-reels', label: 'Viral Video Engine', sub: 'Reels, TikTok, Shorts' },
                { id: 'founder-brand', label: 'Founder Personal Brand', sub: 'B2B Authority & Demos' },
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

          {/* Budget Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="font-mono text-xs uppercase font-bold text-ink">
                2. Monthly Marketing / Ad Budget
              </label>
              <span className="font-mono text-base font-black text-brand bg-panel-1 px-3 py-1 rounded-lg border border-line">
                ₹{budget.toLocaleString('en-IN')} / mo
              </span>
            </div>
            <input
              type="range"
              min="25000"
              max="500000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-panel-1 rounded-lg appearance-none cursor-pointer accent-panel-dark border border-line"
            />
            <div className="flex justify-between text-xs font-mono text-ink font-bold mt-1">
              <span>₹25K (Starter Sprint)</span>
              <span>₹2.5L</span>
              <span>₹5L+ (Scale Engine)</span>
            </div>
          </div>

          {/* Audience Size Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="font-mono text-xs uppercase font-bold text-ink">
                3. Current Follower / Monthly Visitor Base
              </label>
              <span className="font-mono text-base font-black text-ink bg-bg px-3 py-1 rounded-lg border border-line">
                {audienceSize.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="250000"
              step="2000"
              value={audienceSize}
              onChange={(e) => setAudienceSize(Number(e.target.value))}
              className="w-full h-3 bg-panel-1 rounded-lg appearance-none cursor-pointer accent-panel-dark border border-line"
            />
            <div className="flex justify-between text-xs font-mono text-ink font-bold mt-1">
              <span>1K (New Brand)</span>
              <span>50K</span>
              <span>250K+ (Established)</span>
            </div>
          </div>

          <p className="text-xs font-mono text-ink font-semibold italic bg-bg p-2.5 rounded-lg border border-line/30">
            * Models are based on conservative 90-day averages across CloutCraft active accounts.
          </p>
        </div>

        {/* Projection Output Column */}
        <div 
          className="lg:col-span-5 brutal-card brutal-card-dark p-6 sm:p-8 bg-panel-dark text-white flex flex-col justify-between"
          style={{ backgroundColor: '#241447', color: '#FFFFFF' }}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
              <span className="font-mono text-xs font-bold text-purple-200 uppercase tracking-widest">
                PROJECTED 90-DAY OUTCOMES
              </span>
              <span className="bg-accent-mint text-ink font-mono text-xs px-2.5 py-0.5 rounded-full font-black">
                ESTIMATED
              </span>
            </div>

            {/* Target ROAS Output */}
            <div className="bg-white/10 border border-white/20 p-5 rounded-xl mb-4">
              <span className="text-[11px] font-mono uppercase text-purple-200 block font-black">
                Projected Blended ROAS Multiplier
              </span>
              <div className="text-4xl sm:text-5xl font-black font-display text-accent-mint mt-1">
                {projections.roas}
              </div>
              <span className="text-xs text-white/95 mt-1 block font-semibold">
                Estimated return on gross media spend
              </span>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl">
                <span className="text-[11px] font-mono uppercase text-purple-200 font-bold block">
                  Projected Views
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-white mt-1 block">
                  {projections.views}
                </span>
              </div>

              <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl">
                <span className="text-[11px] font-mono uppercase text-purple-200 font-bold block">
                  Estimated Inbound Leads
                </span>
                <span className="text-xl sm:text-2xl font-black font-display text-white mt-1 block">
                  {projections.leads}
                </span>
              </div>
            </div>

            {/* Projected Gross Revenue */}
            <div className="bg-emerald-950/60 border-2 border-accent-mint p-4 rounded-xl mb-6">
              <span className="text-[11px] font-mono uppercase text-accent-mint block font-black">
                Projected Incremental Pipeline / Sales
              </span>
              <div className="text-2xl sm:text-3xl font-black font-display text-white mt-0.5">
                {projections.revenue}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-white/20">
            <button
              onClick={handleWhatsAppBlueprint}
              className="brutal-btn-primary w-full text-xs sm:text-sm py-3 justify-center bg-accent-mint hover:bg-emerald-400 text-ink font-black border-line shadow-brutal-white gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-ink" />
              <span>Send Blueprint to WhatsApp</span>
            </button>

            <button
              onClick={handleAuditBlueprint}
              className="brutal-btn-secondary w-full text-xs sm:text-sm py-3 justify-center gap-2 font-bold"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span>Lock In Custom Strategy Call</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
