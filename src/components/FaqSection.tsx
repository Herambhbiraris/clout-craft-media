import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-bg border-t-2 border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="brutal-tag bg-panel-1 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand" />
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-ink tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-ink/80 text-base font-medium mt-2">
            Everything you need to know about our sprints, founder involvement, and deliverables.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="brutal-card bg-paper overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-brand bg-panel-1 px-2.5 py-1 rounded border border-line shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-ink">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-lg border-2 border-line flex items-center justify-center shrink-0 bg-panel-1 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-panel-dark text-paper' : 'text-ink'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-line/20">
                    <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 text-center bg-panel-1/80 border-2 border-line p-6 rounded-xl shadow-brutal-sm">
          <p className="font-bold text-sm text-ink mb-2">
            Have a unique question about your specific category or channel?
          </p>
          <a
            href="https://wa.me/917276998119?text=Hi%20Herambh!%20I%20have%20a%20quick%20question%20about%20CloutCraft%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-panel-dark underline hover:text-brand"
          >
            Chat directly with the founder on WhatsApp (+91 72769 98119) &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
