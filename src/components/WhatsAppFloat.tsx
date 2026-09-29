import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hi CloutCraft Team! I'm on your website and would like to learn more about scaling my brand."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Tooltip prompt horizontally to the left */}
      {showTooltip && (
        <div className="bg-white text-slate-800 px-4 py-2 rounded-full border border-slate-200/90 shadow-lg text-xs font-semibold flex items-center gap-2 select-none animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat directly with the founder</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1 transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/917276998119?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 p-3 sm:p-3.5 rounded-full bg-[#25D366] border border-emerald-400/40 flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-105 transition-all group shrink-0"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white group-hover:scale-110 transition-transform" />
      </a>

    </div>
  );
};
