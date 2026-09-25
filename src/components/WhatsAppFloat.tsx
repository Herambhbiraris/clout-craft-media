import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hi CloutCraft Team! I'm on your website and would like to learn more about scaling my brand."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="relative mb-2.5 bg-paper text-ink px-3.5 py-2 rounded-xl border-2 border-line shadow-brutal text-xs font-mono font-bold flex items-center gap-2 animate-bounce-subtle">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-ping" />
          <span>Chat directly with the founder</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-ink hover:text-brand font-bold ml-1 transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/917276998119?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-2xl bg-[#25D366] border-2 border-line flex items-center justify-center shadow-brutal hover:translate-x-0.5 hover:translate-y-0.5 transition-transform group"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};
