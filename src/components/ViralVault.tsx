import React, { useState } from 'react';
import { Sparkles, TrendingUp, ArrowUpRight, Quote, Flame, Award, CheckCircle } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

interface ViralVaultProps {
  onOpenAuditWithContext: (context: string) => void;
}

export const ViralVault: React.FC<ViralVaultProps> = ({ onOpenAuditWithContext }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'D2C Brand Scale', 'Creator Personal Brand', 'Startup Launch', 'Reels & Shorts'];

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.category === activeCategory);

  return (
    <section id="vault" className="py-20 bg-bg border-t-2 border-line">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="brutal-tag bg-panel-dark text-white mb-3">
              <Flame className="w-3.5 h-3.5 text-accent-coral" />
              <span>THE VIRAL VAULT // CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
              Verified Growth Case Studies
            </h2>
            <p className="text-ink text-base sm:text-lg font-medium mt-2 max-w-2xl">
              We let the retention charts and revenue dashboards speak. Here is how we engineer attention and capture market share for partner brands.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-ink font-bold bg-white px-3 py-1.5 rounded-lg border-2 border-line shadow-brutal-sm">
            📊 Data verified via Meta Ads Manager &amp; GA4
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-bold border-2 border-line transition-all ${
                activeCategory === cat
                  ? 'bg-panel-dark text-white shadow-brutal-sm -translate-y-0.5'
                  : 'bg-white text-ink hover:bg-panel-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="brutal-card p-6 sm:p-8 bg-white flex flex-col justify-between"
            >
              <div>
                {/* Header: Client & Multiplier Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-panel-1 text-ink px-2.5 py-1 rounded-md border border-line">
                      {study.badge}
                    </span>
                    <span className="font-bold text-sm font-display text-ink">
                      {study.client}
                    </span>
                  </div>

                  <div className="bg-accent-emerald text-white font-mono text-xs font-black px-3 py-1 rounded-full border-2 border-line shadow-brutal-sm flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{study.growthMultiplier}</span>
                  </div>
                </div>

                {/* Case Study Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink leading-snug mb-5">
                  {study.title}
                </h3>

                {/* Problem vs Solution Split */}
                <div className="space-y-3 mb-6 bg-bg border-2 border-line p-4 rounded-xl">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-black text-accent-coral block">
                      THE BOTTLENECK:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-medium mt-0.5 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-line/20">
                    <span className="text-[10px] font-mono uppercase font-black text-brand block">
                      THE CLOUTCRAFT BLUEPRINT:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-bold mt-0.5 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Metric Numbers Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-white border-2 border-line rounded-lg p-2.5 shadow-brutal-sm">
                      <span className="text-[10px] font-mono text-ink font-bold uppercase block truncate">
                        {metric.label}
                      </span>
                      <div className="text-lg sm:text-xl font-black font-display text-panel-dark mt-0.5">
                        {metric.value}
                      </div>
                      {metric.change && (
                        <span className="text-[10px] font-mono font-black text-accent-emerald block">
                          {metric.change}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                {study.testimonial && (
                  <div className="bg-panel-1 border border-line p-4 rounded-xl mb-6 relative">
                    <Quote className="w-5 h-5 text-brand absolute top-2 right-2 opacity-40" />
                    <p className="text-xs sm:text-sm italic text-ink font-semibold mb-2 leading-relaxed">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-panel-dark" />
                      <span className="text-xs font-bold text-ink">{study.testimonial.author}</span>
                      <span className="text-xs text-ink font-mono font-bold">&bull; {study.testimonial.role}</span>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono font-bold bg-bg text-ink px-2.5 py-0.5 rounded border border-line">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenAuditWithContext(`Case Study: ${study.client} (${study.growthMultiplier})`)}
                className="brutal-btn-primary w-full text-xs sm:text-sm py-3 justify-center gap-2 group"
              >
                <span>Request a Similar Growth Sprint</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
