import React, { useState } from 'react';
import { Flame, TrendingUp, ArrowUpRight, Quote, Sparkles, Filter, CheckCircle2, Play, Users } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

interface CaseStudiesPageProps {
  onOpenAudit: (context: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'D2C Brand Scale', 'Creator Personal Brand', 'Startup Launch', 'Reels & Shorts'];

  const expandedStudies: CaseStudy[] = [
    ...CASE_STUDIES,
    {
      id: 'nutrifuel-d2c',
      client: 'NutriFuel Plant Protein',
      category: 'D2C Brand Scale',
      badge: 'HEALTH & NUTRITION',
      title: 'Slashing Customer Acquisition Cost by 48% While Scaling to 22,000 Monthly Orders',
      problem: 'Stuck on generic product photos with high ₹850 CAC and low second-purchase retention.',
      solution: 'Replaced traditional studio ads with raw "Dietitian Reacts" short-form UGC videos, paired with a post-purchase WhatsApp recipe sequence.',
      metrics: [
        { label: 'CAC Drop', value: '-48%', change: 'From ₹850 to ₹442' },
        { label: 'Monthly Orders', value: '22,400', change: '+310% Growth' },
        { label: 'Blended ROAS', value: '4.9x', change: 'Across Meta & Google' },
        { label: 'Repeat Orders', value: '38%', change: 'High LTV' }
      ],
      testimonial: {
        quote: "CloutCraft's UGC script framework completely unlocked our acquisition bottleneck. We went from breaking even to our highest profit quarter in company history.",
        author: 'Siddharth V.',
        role: 'Head of Growth, NutriFuel'
      },
      tags: ['Health D2C', 'UGC Sprints', 'CAC Reduction', 'Retention Marketing'],
      growthMultiplier: '-48% CAC',
      colorScheme: 'from-emerald-100 to-emerald-200'
    },
    {
      id: 'techunbox-creator',
      client: 'TechPulse India',
      category: 'Creator Personal Brand',
      badge: 'CONSUMER TECH',
      title: 'Scaling from 45K to 1.1M Subscribers & Signing 12 Exclusive Annual Tech Sponsors',
      problem: 'High production quality but YouTube Shorts algorithms kept skipping videos due to slow 5-second intros.',
      solution: 'Overhauled first 3 seconds with visual hook interruptions, redesigned thumbnail graphics, and negotiated exclusive 6-figure consumer tech brand retainers.',
      metrics: [
        { label: 'Subscribers Scaled', value: '1.1M+', change: '+2,344% Growth' },
        { label: 'Annual Sponsorships', value: '₹42L+', change: '12 Brands' },
        { label: 'Shorts Total Reach', value: '46.8M', change: 'Viral Pacing' },
        { label: 'Average RPM', value: '+65%', change: 'Commercial Intent' }
      ],
      testimonial: {
        quote: "The talent management side is gold. Herambh and the team protect my brand integrity while maximizing deal sizes. Best decision I made.",
        author: 'Arjun N.',
        role: 'Tech Creator & Reviewer'
      },
      tags: ['YouTube Shorts', 'Talent Desk', 'Consumer Tech', 'Sponsorship Engine'],
      growthMultiplier: '1.1M Subs',
      colorScheme: 'from-panel-dark to-purple-900'
    }
  ];

  const filteredStudies = selectedCategory === 'All'
    ? expandedStudies
    : expandedStudies.filter(s => s.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="brutal-tag bg-panel-dark text-white mb-4">
            <Flame className="w-3.5 h-3.5 text-accent-coral" />
            <span>THE VIRAL VAULT // CASE STUDIES ARCHIVE</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Real Proof. <span className="bg-panel-1 px-3 py-1 rounded-xl border-2 border-line inline-block shadow-brutal rotate-1">Verified Returns.</span>
          </h1>

          <p className="text-lg text-ink font-medium max-w-2xl mx-auto leading-relaxed">
            Explore how our founder-led creative sprints and performance engines generate millions of views and compounding cashflow for partner brands.
          </p>
        </div>

        {/* Aggregate Credibility Ribbon */}
        <div className="brutal-card p-6 bg-white border-2 border-line shadow-brutal mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-2 divide-line/20">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink block mb-1">Total Video Views</span>
              <span className="text-2xl sm:text-3xl font-black font-display text-panel-dark">28.4M+</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink block mb-1">Average Paid ROAS</span>
              <span className="text-2xl sm:text-3xl font-black font-display text-accent-emerald">4.7x</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink block mb-1">B2B Demos Booked</span>
              <span className="text-2xl sm:text-3xl font-black font-display text-brand">140+</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink block mb-1">Client Retention</span>
              <span className="text-2xl sm:text-3xl font-black font-display text-ink">98%</span>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-bold border-2 border-line transition-all ${
                selectedCategory === cat
                  ? 'bg-panel-dark text-white shadow-brutal-sm -translate-y-0.5'
                  : 'bg-white text-ink hover:bg-panel-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="brutal-card p-6 sm:p-8 bg-white flex flex-col justify-between border-2 border-line shadow-brutal"
            >
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold bg-panel-1 text-ink px-2.5 py-1 rounded border border-line">
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

                <h3 className="text-xl sm:text-2xl font-bold font-display text-ink leading-snug mb-5">
                  {study.title}
                </h3>

                {/* Problem vs Blueprint */}
                <div className="space-y-3 mb-6 bg-bg border-2 border-line p-4 rounded-xl">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-black text-accent-coral block">
                      THE INITIAL BOTTLENECK:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-medium mt-0.5 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-line/20">
                    <span className="text-[10px] font-mono uppercase font-black text-brand block">
                      THE CLOUTCRAFT STRATEGY:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-bold mt-0.5 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Quantitative Metric Grid */}
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
                onClick={() => onOpenAudit(`Case Study: ${study.client} (${study.growthMultiplier})`)}
                className="brutal-btn-primary w-full text-xs sm:text-sm py-3 justify-center gap-2 group"
              >
                <span>Request Similar Growth Sprint</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
