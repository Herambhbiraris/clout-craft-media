import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Instagram, Copy, Check, Sparkles, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { leadStorage } from '../utils/leadStorage';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    brandHandle: '',
    stage: 'D2C / E-commerce Brand',
    growthGoal: 'Viral Video & Retention Architecture',
    budgetRange: '₹50,000 - ₹1,50,000 / month',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('collab@cloutcraftmedia.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        brandHandle: formData.brandHandle || 'Brand',
        stage: formData.stage,
        growthGoal: formData.growthGoal,
        budgetRange: formData.budgetRange,
        notes: formData.message,
        source: 'Contact Page Direct Form',
      });

      // 2. Triple-Dispatch Channel 2: Post to Formspree Email
      const payload = {
        ...formData,
        source: 'Contact Page Direct Form',
        submittedAt: new Date().toISOString()
      };

      await fetch('https://formspree.io/f/mykreglq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
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

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Herambh / CloutCraft Team!\n\n` +
      `I'd like to book our Free 48-Hour Growth Audit:\n` +
      `• Name: ${formData.name || 'Founder'}\n` +
      `• Brand: ${formData.brandHandle || 'Brand / Handle'}\n` +
      `• Category: ${formData.stage}\n` +
      `• Focus: ${formData.growthGoal}\n` +
      `• Budget: ${formData.budgetRange}\n\n` +
      `Let's schedule our 48h teardown session!`
    );
    window.open(`https://wa.me/917276998119?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="brutal-tag bg-panel-1 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-brand" />
            <span>DIRECT FOUNDER COMMUNICATION</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black font-display text-ink tracking-tight mb-4">
            Start Your <span className="bg-panel-dark text-paper px-3 py-1 rounded-xl border-2 border-line inline-block shadow-brutal rotate-1">Growth Conversation.</span>
          </h1>

          <p className="text-lg text-ink font-semibold max-w-2xl mx-auto leading-relaxed">
            Tell us about your brand, current customer acquisition bottlenecks, and targets. You will receive a bespoke 48-hour tear-down and video hook architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Info Cards & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Banner */}
            <div className="brutal-card p-6 sm:p-7 bg-[#25D366]/10 border-2 border-line">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 border border-line shadow-brutal-sm">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink font-display">Prefer Fast Messaging?</h3>
                  <span className="text-xs font-mono text-emerald-800 font-bold">Sub-2-hour founder reply</span>
                </div>
              </div>
              <p className="text-xs text-ink font-semibold leading-relaxed mb-4">
                Message Herambh directly on WhatsApp to discuss your current CAC, video hooks, or ask any quick questions.
              </p>
              <a
                href="https://wa.me/917276998119"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-primary w-full py-3 text-xs sm:text-sm justify-center bg-[#25D366] hover:bg-emerald-600 text-ink font-bold border-line shadow-brutal gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-ink" />
                <span>Chat on WhatsApp (+91 72769 98119)</span>
              </a>
            </div>

            {/* Direct Contact Points */}
            <div className="brutal-card p-6 bg-paper space-y-4">
              <h3 className="font-mono text-xs uppercase font-bold text-brand tracking-wider">
                DIRECT CONTACT CHANNELS
              </h3>

              {/* Email Pill */}
              <div className="flex items-center justify-between bg-bg border-2 border-line rounded-lg px-3.5 py-2.5 shadow-brutal-sm">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-brand shrink-0" />
                  <a href="mailto:collab@cloutcraftmedia.com" className="text-xs font-mono font-bold text-ink hover:text-brand truncate">
                    collab@cloutcraftmedia.com
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-7 h-7 rounded bg-panel-dark text-paper flex items-center justify-center hover:bg-brand transition-colors shrink-0 ml-2"
                  title="Copy email address"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="flex items-center justify-between bg-bg border-2 border-line rounded-lg px-3.5 py-2.5 shadow-brutal-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand shrink-0" />
                  <a href="tel:+917276998119" className="text-xs font-mono font-bold text-ink hover:text-brand">
                    +91 72769 98119
                  </a>
                </div>
                <span className="text-[10px] font-mono font-bold text-accent-emerald bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  Direct Line
                </span>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between bg-bg border-2 border-line rounded-lg px-3.5 py-2.5 shadow-brutal-sm">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-ink shrink-0" />
                  <a 
                    href="https://www.instagram.com/clout.craft.media/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono font-bold text-ink hover:text-brand"
                  >
                    @clout.craft.media
                  </a>
                </div>
                <span className="text-[11px] font-mono font-bold text-ink">
                  Follow Studio
                </span>
              </div>

              {/* Location */}
              <div className="pt-2 border-t-2 border-line flex items-start gap-2 text-xs font-semibold text-ink">
                <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <span>Studio Desk: Nashik, Maharashtra, India &bull; Serving brands across India, US, and UAE.</span>
              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="brutal-card p-4 bg-panel-1 flex items-center gap-3">
              <Clock className="w-5 h-5 text-panel-dark shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-ink block">Fast Founder Guarantee</span>
                <span className="text-ink font-medium">All audit requests reviewed and answered within 2 hours.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Full Intake Form */}
          <div className="lg:col-span-7 brutal-card p-6 sm:p-8 bg-paper">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b-2 border-line/20 pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-panel-dark uppercase tracking-wider block">
                    FREE 48-HOUR GROWTH AUDIT INTAKE
                  </span>
                  <h3 className="text-xl font-bold font-display text-ink mt-0.5">
                    Send Us Your Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink placeholder:text-ink/50 text-sm focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@brand.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink placeholder:text-ink/50 text-sm focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink placeholder:text-ink/50 text-sm focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      Brand Website / Instagram Handle *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brandHandle}
                      onChange={(e) => setFormData({ ...formData, brandHandle: e.target.value })}
                      placeholder="e.g. @yourbrand or brand.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink placeholder:text-ink/50 text-sm focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      Business Category
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink text-sm focus:outline-none focus:bg-white"
                    >
                      <option>D2C / E-commerce Brand</option>
                      <option>Startup / Tech SaaS</option>
                      <option>Creator / Personal Brand</option>
                      <option>B2B / Agency / High-Ticket</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                      Monthly Ad / Growth Budget
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink text-sm focus:outline-none focus:bg-white"
                    >
                      <option>Under ₹50,000 / month</option>
                      <option>₹50,000 - ₹1,50,000 / month</option>
                      <option>₹1,50,000 - ₹3,50,000 / month</option>
                      <option>₹3,50,000+ / month (Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-ink mb-1">
                    What are you looking to grow or fix?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a bit about your current customer acquisition cost, video hooks, or Q2 goals..."
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-line bg-bg font-sans font-medium text-ink placeholder:text-ink/50 text-sm focus:outline-none focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brutal-btn-primary w-full py-4 text-sm sm:text-base justify-center shadow-brutal gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Blueprint...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Request Free 48-Hour Growth Tear-down</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent-emerald/20 border-2 border-accent-emerald flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-accent-emerald" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-ink mb-2">
                  Growth Audit Request Received!
                </h3>
                
                <p className="text-sm text-ink font-semibold max-w-md mx-auto mb-6">
                  Thank you, <span className="font-black text-ink">{formData.name}</span>. The CloutCraft team is preparing your custom 48-hour growth tear-down and video hook architecture for <span className="font-black">{formData.brandHandle}</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="brutal-btn-primary py-3 px-6 text-sm justify-center bg-accent-emerald hover:bg-emerald-600 text-ink font-bold border-line shadow-brutal gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-ink" />
                    <span>Fast-Track on WhatsApp (+91 72769 98119)</span>
                  </button>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="brutal-btn-secondary py-3 px-6 text-sm justify-center"
                  >
                    <span>Submit Another</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
