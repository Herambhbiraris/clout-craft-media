import React, { useState } from 'react';
import { Flame, ArrowRight, Quote, Sparkles, Filter, CheckCircle2, Play, Users, TrendingUp, Target } from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import phoneMockupImg from '../assets/3d_phone_mockup.png';
import playCubeImg from '../assets/3d_play_cube.png';
import funnelImg from '../assets/performance_3d_funnel.jpg';
import studioImg from '../assets/founder_3d_studio.jpg';
import clapperImg from '../assets/retention_3d_clapper.jpg';
import vaultImg from '../assets/monetization_3d_vault.jpg';

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

  const featured = expandedStudies[0]; // ZenGlow Organics

  const filteredStudies = selectedCategory === 'All'
    ? expandedStudies
    : expandedStudies.filter(s => s.category === selectedCategory);

  const getCaseImage = (id: string) => {
    switch (id) {
      case 'zenglow-d2c': return funnelImg;
      case 'akash-fininsights': return studioImg;
      case 'promptos-launch': return vaultImg;
      case 'kultwear-streetwear': return clapperImg;
      case 'nutrifuel-d2c': return funnelImg;
      case 'techunbox-creator': return studioImg;
      default: return funnelImg;
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="brutal-tag bg-lavender-light text-brand border border-purple-200 mb-4">
            <Flame className="w-3.5 h-3.5 text-violet-bright" />
            <span>THE VIRAL VAULT // VERIFIED EVIDENCE</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Proof Over Promises. <br />
            <span className="text-violet-bright">Real Revenue Multipliers.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Explore how our founder-led creative sprints and performance engines generate millions of views and compounding cashflow for partner brands.
          </p>
        </div>

        {/* Aggregate Stats Ribbon */}
        <div className="brutal-card p-6 bg-white border border-purple-100 shadow-agency mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-purple-100">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink-muted block mb-1">Total Video Views</span>
              <span className="text-2xl sm:text-4xl font-black font-display text-ink">28.4M+</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink-muted block mb-1">Average Paid ROAS</span>
              <span className="text-2xl sm:text-4xl font-black font-display text-emerald-600">4.7x</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink-muted block mb-1">Pipeline Generated</span>
              <span className="text-2xl sm:text-4xl font-black font-display text-violet-bright">₹5.2 Cr+</span>
            </div>
            <div>
              <span className="font-mono text-xs uppercase font-bold text-ink-muted block mb-1">Founder Retention</span>
              <span className="text-2xl sm:text-4xl font-black font-display text-ink">98% MoM</span>
            </div>
          </div>
        </div>

        {/* FEATURED CASE STUDY: Hero Spotlight */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold text-violet-bright uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>SPOTLIGHT CASE STUDY</span>
          </div>

          <div className="brutal-card p-6 sm:p-10 bg-white border border-purple-100 shadow-agency-hover rounded-agency-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Client / Problem / What We Did / Result */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-lavender-light text-violet-bright px-3 py-1 rounded-full border border-purple-200">
                    {featured.badge}
                  </span>
                  <span className="font-bold text-sm text-ink font-display">
                    {featured.client}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black font-display text-ink leading-tight">
                  {featured.title}
                </h2>

                {/* Structured Breakdown: Problem -> What We Did */}
                <div className="space-y-3 pt-2">
                  <div className="bg-lavender-light/50 p-4 rounded-xl border border-purple-100">
                    <span className="text-[11px] font-mono uppercase font-bold text-rose-600 block mb-1">
                      THE CHALLENGE &amp; BOTTLENECK:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                      {featured.problem}
                    </p>
                  </div>

                  <div className="bg-lavender-light/50 p-4 rounded-xl border border-purple-100">
                    <span className="text-[11px] font-mono uppercase font-bold text-violet-bright block mb-1">
                      WHAT WE ARCHITECTED:
                    </span>
                    <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                      {featured.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Results Grid */}
                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-ink-muted block mb-2">
                    VERIFIED OUTCOMES:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {featured.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white border border-purple-100 p-3 rounded-xl shadow-sm">
                        <span className="text-[10px] font-mono text-ink-muted font-bold uppercase block truncate">{m.label}</span>
                        <span className="text-xl font-black font-display text-ink mt-0.5 block">{m.value}</span>
                        <span className="text-[10px] font-mono font-bold text-emerald-600">{m.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Presentation & Testimonial */}
              <div className="lg:col-span-5 bg-purple-dark text-white p-6 sm:p-8 rounded-2xl border border-purple-500/30 shadow-agency-dark flex flex-col justify-between" style={{ backgroundColor: '#160D2E' }}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-purple-200 bg-white/10 px-3 py-1 rounded-full">
                      VERIFIED RESULT
                    </span>
                    <span className="text-emerald-400 font-mono text-xs font-bold">
                      {featured.growthMultiplier}
                    </span>
                  </div>

                  <div className="relative mb-6 rounded-xl overflow-hidden border border-white/10 max-h-48">
                    <img 
                      src={funnelImg} 
                      alt={featured.client}
                      className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <Quote className="w-8 h-8 text-purple-400 mb-2 opacity-60" />
                  <p className="text-xs sm:text-sm italic text-slate-200 leading-relaxed font-medium mb-4">
                    "{featured.testimonial?.quote}"
                  </p>
                  <p className="text-xs font-bold text-white">
                    {featured.testimonial?.author} &bull; <span className="text-purple-300 font-normal">{featured.testimonial?.role}</span>
                  </p>
                </div>

                <button
                  onClick={() => onOpenAudit(`Case Study: ${featured.client}`)}
                  className="mt-6 w-full py-3.5 rounded-full bg-white text-ink text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-lavender-light shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4 text-violet-bright" />
                  <span>Request Similar Sprint for Your Brand</span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <Filter className="w-4 h-4 text-ink-muted mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono font-bold px-4 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-dark text-white shadow-sm'
                  : 'bg-white text-ink-muted hover:text-ink border border-purple-100 hover:bg-lavender-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Secondary Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredStudies.slice(1).map((study) => (
            <div
              key={study.id}
              className="brutal-card p-6 sm:p-8 bg-white border border-purple-100/90 shadow-agency hover:shadow-agency-hover flex flex-col justify-between group"
            >
              <div>
                {/* Image banner */}
                <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-6 relative border border-purple-100">
                  <img 
                    src={getCaseImage(study.id)} 
                    alt={study.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-purple-dark/90 backdrop-blur-md text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                    {study.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-ink font-mono text-xs font-black px-3 py-1 rounded-full shadow-sm">
                    {study.growthMultiplier}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-ink-muted font-display">{study.client}</span>
                  <span className="font-mono text-xs text-violet-bright font-bold">{study.category}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-ink mb-3 group-hover:text-violet-bright transition-colors">
                  {study.title}
                </h3>

                {/* Problem -> What We Did */}
                <div className="space-y-2 mb-5">
                  <p className="text-xs text-ink-muted leading-relaxed">
                    <strong className="text-ink font-bold">Bottleneck:</strong> {study.problem}
                  </p>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    <strong className="text-violet-bright font-bold">Execution:</strong> {study.solution}
                  </p>
                </div>

                {/* 4 Mini Result Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-lavender-light/60 border border-purple-100/80 p-2.5 rounded-lg text-center">
                      <span className="text-[9px] font-mono text-ink-muted uppercase block truncate font-bold">{m.label}</span>
                      <span className="text-base font-black font-display text-ink block">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-ink-muted bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenAudit(`Case Study: ${study.client}`)}
                  className="font-mono text-xs font-bold text-violet-bright flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Similar Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
