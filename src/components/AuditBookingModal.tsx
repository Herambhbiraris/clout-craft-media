import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { leadStorage } from '../utils/leadStorage';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({
  isOpen,
  onClose,
  initialContext = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    stage: 'D2C / E-commerce Brand',
    growthGoal: 'Viral Video & Retention Architecture',
    budgetRange: '₹50,000 - ₹1,50,000 / month',
    name: '',
    email: '',
    whatsapp: '',
    brandHandle: '',
    notes: initialContext ? `Context: ${initialContext}` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Triple-Dispatch Channel 1: Save directly to Admin CRM
      leadStorage.saveLead({
        name: formData.name || 'Founder',
        email: formData.email,
        whatsapp: formData.whatsapp,
        brandHandle: formData.brandHandle || 'Unspecified Brand',
        stage: formData.stage,
        growthGoal: formData.growthGoal,
        budgetRange: formData.budgetRange,
        notes: formData.notes,
        source: initialContext ? `Audit Modal (${initialContext})` : '48h Growth Audit Modal',
      });

      // 2. Triple-Dispatch Channel 2: Post to Formspree Email
      const payload = {
        ...formData,
        source: 'CloutCraft Redesign 2026 Audit Modal',
        submittedAt: new Date().toISOString()
      };

      await fetch('https://formspree.io/f/mykreglq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // 3. Triple-Dispatch Channel 3: Instant WhatsApp ready on confirmation
      setIsSuccess(true);
      triggerConfetti();
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Herambh / CloutCraft Team!\n\n` +
      `I'd like to book my Free 48-Hour Growth Audit:\n` +
      `• Name: ${formData.name || 'Founder'}\n` +
      `• Brand / Handle: ${formData.brandHandle || 'Not provided yet'}\n` +
      `• Category: ${formData.stage}\n` +
      `• Primary Focus: ${formData.growthGoal}\n` +
      `• Monthly Budget: ${formData.budgetRange}\n` +
      (formData.notes ? `• Notes: ${formData.notes}\n` : '') +
      `\nLooking forward to the 48h blueprint!`
    );
    window.open(`https://wa.me/917276998119?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/75 backdrop-blur-md animate-fade-in">
      
      <div className="relative w-full max-w-xl brutal-card bg-white p-7 sm:p-9 max-h-[90vh] overflow-y-auto border border-purple-100 shadow-agency-dark rounded-3xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-purple-100 bg-lavender-light/60 text-ink flex items-center justify-center hover:bg-purple-100 transition-colors shadow-sm"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pr-6">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-mono text-[10px] font-black bg-purple-dark text-white px-3 py-1 rounded-full">
                  STEP {step} OF 4
                </span>
                <span className="text-xs font-mono font-bold text-violet-bright">
                  48-Hour Growth Audit
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-ink leading-tight tracking-tight">
                {step === 1 && "What type of brand are you scaling?"}
                {step === 2 && "What is your primary growth bottleneck?"}
                {step === 3 && "What is your monthly marketing budget?"}
                {step === 4 && "Where should we send your custom blueprint?"}
              </h3>
            </div>

            {/* Step 1: Stage Selection */}
            {step === 1 && (
              <div className="space-y-2.5 mb-8">
                {[
                  { title: 'D2C / E-commerce Brand', desc: 'Physical products, Shopify store, consumer goods looking to scale ROAS.' },
                  { title: 'Startup / Tech SaaS', desc: 'Early-to-growth stage software needing demo volume & category authority.' },
                  { title: 'Creator / Personal Brand', desc: 'Influencers, thought leaders, & founders building audience & monetization.' },
                  { title: 'B2B / Agency / High-Ticket', desc: 'Services requiring premium positioning and qualified outbound deal flow.' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, stage: item.title });
                      handleNext();
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      formData.stage === item.title
                        ? 'bg-purple-dark text-white border-purple-800/80 shadow-agency -translate-y-0.5'
                        : 'bg-lavender-light/30 border-purple-100 text-ink hover:bg-lavender-light/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold font-display text-base">{item.title}</div>
                      <div className={`text-xs mt-0.5 font-medium ${formData.stage === item.title ? 'text-purple-200' : 'text-ink-muted'}`}>{item.desc}</div>
                    </div>
                    <Check className={`w-5 h-5 shrink-0 ${formData.stage === item.title ? 'opacity-100 text-emerald-400' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Bottleneck Selection */}
            {step === 2 && (
              <div className="space-y-2.5 mb-8">
                {[
                  { title: 'Viral Video & Retention Architecture', desc: 'Fix flat drop-offs, produce scroll-stopping Reels/Shorts/TikToks.' },
                  { title: 'Performance Ads & ROAS Scaling', desc: 'Scale Meta/Google spend without customer acquisition cost spikes.' },
                  { title: 'Brand Identity & Narrative Moat', desc: 'Overhaul positioning, copywriting, and visual assets.' },
                  { title: 'Creator Talent & Brand Sponsorships', desc: 'Secure 5-to-6 figure sponsorships and manage creator partnerships.' },
                  { title: 'Full-Funnel Omnichannel Sprint', desc: 'Unified organic viral engine + paid performance media.' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, growthGoal: item.title });
                      handleNext();
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                      formData.growthGoal === item.title
                        ? 'bg-purple-dark text-white border-purple-800/80 shadow-agency -translate-y-0.5'
                        : 'bg-lavender-light/30 border-purple-100 text-ink hover:bg-lavender-light/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold font-display text-sm">{item.title}</div>
                      <div className={`text-xs mt-0.5 font-medium ${formData.growthGoal === item.title ? 'text-purple-200' : 'text-ink-muted'}`}>{item.desc}</div>
                    </div>
                    <Check className={`w-5 h-5 shrink-0 ${formData.growthGoal === item.title ? 'opacity-100 text-emerald-400' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Budget Range */}
            {step === 3 && (
              <div className="space-y-2.5 mb-8">
                {[
                  { title: 'Under ₹50,000 / month', sub: 'Starter Creative Sprint' },
                  { title: '₹50,000 - ₹1,50,000 / month', sub: 'Growth Channel Ignition' },
                  { title: '₹1,50,000 - ₹3,50,000 / month', sub: 'Scale Engine (Ads + Video)' },
                  { title: '₹3,50,000+ / month (Enterprise)', sub: 'Full Omnichannel Retainer' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, budgetRange: item.title });
                      handleNext();
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      formData.budgetRange === item.title
                        ? 'bg-purple-dark text-white border-purple-800/80 shadow-agency -translate-y-0.5'
                        : 'bg-lavender-light/30 border-purple-100 text-ink hover:bg-lavender-light/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold font-display text-base">{item.title}</div>
                      <div className={`text-xs font-mono mt-0.5 font-bold ${formData.budgetRange === item.title ? 'text-purple-200' : 'text-violet-bright'}`}>{item.sub}</div>
                    </div>
                    <Check className={`w-5 h-5 shrink-0 ${formData.budgetRange === item.title ? 'opacity-100 text-emerald-400' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Step 4: Contact Form */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-3.5 mb-6">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-ink mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200/80 bg-lavender-light/30 font-sans text-sm font-medium text-ink focus:outline-none focus:bg-white focus:border-violet-bright transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@brand.com"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 bg-lavender-light/30 font-sans text-sm font-medium text-ink focus:outline-none focus:bg-white focus:border-violet-bright transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1.5">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200/80 bg-lavender-light/30 font-sans text-sm font-medium text-ink focus:outline-none focus:bg-white focus:border-violet-bright transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-ink mb-1.5">
                    Brand Website or Instagram Handle (@) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brandHandle}
                    onChange={(e) => setFormData({ ...formData, brandHandle: e.target.value })}
                    placeholder="e.g. @yourbrand or yourbrand.com"
                    className="w-full px-4 py-3 rounded-xl border border-purple-200/80 bg-lavender-light/30 font-sans text-sm font-medium text-ink focus:outline-none focus:bg-white focus:border-violet-bright transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-ink mb-1.5">
                    Key Challenges / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us a little bit about what you're trying to hit in the next 90 days..."
                    className="w-full px-4 py-3 rounded-xl border border-purple-200/80 bg-lavender-light/30 font-sans text-sm font-medium text-ink focus:outline-none focus:bg-white focus:border-violet-bright transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brutal-btn-primary w-full py-4 text-base justify-center shadow-glow-violet mt-2 font-bold bg-violet-bright hover:bg-violet-dark text-white rounded-full transition-all"
                >
                  {isSubmitting ? (
                    <span>Submitting Blueprint...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Request Free 48-Hour Growth Audit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Modal Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-purple-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs font-mono font-bold text-ink-muted flex items-center gap-1 hover:text-violet-bright transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <span className="text-xs font-mono font-semibold text-ink-muted">
                  🔒 No credit card required &bull; 100% confidential
                </span>
              )}

              {step < 4 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="text-xs font-mono font-bold bg-lavender-light text-violet-bright px-3.5 py-1.5 rounded-full border border-purple-200/60 flex items-center gap-1 hover:bg-purple-100 transition-colors"
                >
                  <span>Skip to Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-accent-mint/20 border-2 border-accent-mint flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-accent-mint" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-ink mb-2">
              Growth Audit Initiated!
            </h3>
            
            <p className="text-sm text-ink max-w-md mx-auto mb-6 font-medium">
              Thank you, <span className="font-bold text-ink">{formData.name}</span>. The CloutCraft team is preparing your custom 48-hour growth tear-down and video hook architecture for <span className="font-bold">{formData.brandHandle}</span>.
            </p>

            <div className="bg-panel-1 border-2 border-line p-4 rounded-xl max-w-md mx-auto mb-6 text-left">
              <span className="font-mono text-xs uppercase font-black text-brand block mb-1">
                SUMMARY OF SCOPE:
              </span>
              <div className="text-xs space-y-1 text-ink font-mono font-bold">
                <div>• Category: {formData.stage}</div>
                <div>• Growth Focus: {formData.growthGoal}</div>
                <div>• Budget: {formData.budgetRange}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDirectWhatsApp}
                className="brutal-btn-primary py-3 px-6 text-sm justify-center bg-accent-mint hover:bg-emerald-400 text-ink font-bold border-line shadow-brutal gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-ink" />
                <span>Fast-Track on WhatsApp (+91 72769 98119)</span>
              </button>

              <button
                onClick={onClose}
                className="brutal-btn-secondary py-3 px-6 text-sm justify-center"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
