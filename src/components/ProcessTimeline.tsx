import React, { useState } from 'react';
import { Route, CheckCircle2, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

interface ProcessTimelineProps {
  onOpenAudit: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenAudit }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="brutal-tag bg-panel-1 mb-3">
          <Route className="w-3.5 h-3.5 text-brand" />
          <span>THE VELOCITY ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
          From First Call to Full Scale
        </h2>
        <p className="text-ink text-base sm:text-lg font-medium mt-2">
          A predictable, battle-tested 4-step framework designed to eliminate guesswork and ignite compounding growth in under 30 days.
        </p>
      </div>

      {/* Process Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`brutal-card p-6 cursor-pointer transition-all flex flex-col justify-between ${
              activeStep === idx 
                ? 'bg-panel-dark text-white shadow-brutal-lg -translate-y-1' 
                : 'bg-white text-ink hover:bg-panel-1'
            }`}
          >
            <div>
              {/* Step Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-xl font-black w-10 h-10 rounded-xl border-2 flex items-center justify-center ${
                  activeStep === idx
                    ? 'border-white bg-white text-panel-dark shadow-brutal-white'
                    : 'border-line bg-panel-dark text-white shadow-brutal-sm'
                }`}>
                  {step.number}
                </span>

                <div className={`flex items-center gap-1 font-mono text-xs uppercase font-bold px-2 py-0.5 rounded border ${
                  activeStep === idx
                    ? 'border-white/30 bg-white/10 text-white'
                    : 'border-line bg-bg text-ink'
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.duration}</span>
                </div>
              </div>

              <span className={`text-[10px] font-mono uppercase tracking-widest font-black block mb-1 ${
                activeStep === idx ? 'text-purple-200' : 'text-brand'
              }`}>
                PHASE {step.number}
              </span>

              <h3 className={`text-xl font-black font-display mb-2 ${
                activeStep === idx ? 'text-white' : 'text-ink'
              }`}>
                {step.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 font-medium ${
                activeStep === idx ? 'text-white/95' : 'text-ink'
              }`}>
                {step.description}
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-3 border-t border-line/20 space-y-2">
              {step.checklist.map((item, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                    activeStep === idx ? 'text-accent-mint' : 'text-brand'
                  }`} />
                  <span className={`text-xs font-semibold truncate ${
                    activeStep === idx ? 'text-white' : 'text-ink'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Action CTA Banner */}
      <div className="brutal-card p-6 sm:p-8 bg-panel-1 border-line flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase font-black text-brand block">
            READY TO COMMENCE PHASE 01?
          </span>
          <h4 className="text-xl sm:text-2xl font-black font-display text-ink mt-0.5">
            Get Your Free 48-Hour Growth Tear-Down &amp; Blueprint
          </h4>
          <p className="text-xs sm:text-sm text-ink font-medium mt-1 max-w-xl">
            We will dissect your current hook retention, ad spend efficiency, and competitor positioning — 100% free with zero sales pressure.
          </p>
        </div>

        <button
          onClick={onOpenAudit}
          className="brutal-btn-primary shrink-0 py-3.5 px-6 shadow-brutal text-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Claim Your 48h Audit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
