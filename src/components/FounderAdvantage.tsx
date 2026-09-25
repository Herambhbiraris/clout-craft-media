import React from 'react';
import { ShieldCheck, Zap, TrendingUp, Users, Check, X, Sparkles } from 'lucide-react';
import { COMPARISON_DATA } from '../data/mockData';

export const FounderAdvantage: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Founder-Led Direct Attention',
      desc: 'You work directly with the growth strategists engineering your account — not a rotating carousel of junior account reps.',
      tag: 'ZERO ACCOUNT HAND-OFFS'
    },
    {
      num: '02',
      title: 'Creative-First Viral Architecture',
      desc: 'Strategy without craft falls flat. We lead with 3-second contrarian hooks, dynamic pacing, and scroll-stopping visuals.',
      tag: 'RETENTION OBSESSED'
    },
    {
      num: '03',
      title: 'Relentless Data Feedback Loops',
      desc: 'We monitor daily CAC, retention drop-off, and ROAS. We optimize weekly instead of waiting for passive quarterly reports.',
      tag: 'REAL-TIME PIVOTS'
    },
    {
      num: '04',
      title: 'Fast, Agile & Flexible',
      desc: 'No bureaucracy or 10-layer approval chains. Our lean studio means new creative sprints and campaign changes ship in days.',
      tag: '48H SPRINT VELOCITY'
    },
  ];

  return (
    <section id="why" className="py-20 bg-bg border-t-2 border-line">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="brutal-tag bg-panel-1 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand" />
            <span>THE CLOUTCRAFT DIFFERENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
            Why High-Growth Brands Partner With Us
          </h2>
          <p className="text-ink/80 text-base sm:text-lg font-medium mt-2">
            The traditional agency model is broken: senior executives pitch you, and inexperienced interns run your money. Here is how we rebuilt it from scratch.
          </p>
        </div>

        {/* 4 Ticket Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="ticket-card brutal-card p-6 bg-paper flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-black bg-panel-dark text-paper w-8 h-8 rounded-full border border-line flex items-center justify-center">
                    {pillar.num}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold bg-panel-1 text-ink px-2 py-0.5 rounded border border-line">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-line/20 mt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-brand">
                <Check className="w-3.5 h-3.5" />
                <span>Guaranteed Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Comparison Matrix */}
        <div className="brutal-card bg-paper p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-line/20 mb-6">
            <div>
              <span className="font-mono text-xs uppercase font-bold text-brand block">
                HEAD-TO-HEAD MATRIX
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-ink">
                CloutCraft vs. The Alternatives
              </h3>
            </div>
            <span className="text-xs font-mono bg-panel-1 px-3 py-1 rounded-full border border-line font-bold text-ink self-start sm:self-auto">
              Transparent Agency Truth
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-line">
                  <th className="py-3 px-3 font-mono uppercase text-ink font-bold">Growth Dimension</th>
                  <th className="py-3 px-3 font-mono uppercase text-panel-dark font-black bg-panel-1/60 rounded-t-lg">
                    ⚡ CloutCraft Media
                  </th>
                  <th className="py-3 px-3 font-mono uppercase text-ink font-bold">Traditional Agencies</th>
                  <th className="py-3 px-3 font-mono uppercase text-ink font-bold">Ad-Hoc Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/20">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-bg/50 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-ink font-display">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-3 font-bold text-panel-dark bg-panel-1/40">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-accent-emerald shrink-0" />
                        <span>{row.cloutcraft}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-ink font-medium">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-accent-coral shrink-0" />
                        <span>{row.agencies}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-ink font-medium">
                      <span className="italic">{row.freelancers}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
