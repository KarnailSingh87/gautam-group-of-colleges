import React from 'react';
import { Sparkles, MessageCircle, PhoneCall } from 'lucide-react';

export default function StickyApplyButton({ onOpenApply }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919418010420?text=Hello%20Gautam%20College%20Hamirpur,%20I%20am%20interested%20in%20admissions%20information."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Admissions Counselor"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
        title="WhatsApp Admission Counselor (+91-9418010420)"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Floating Apply Now Button */}
      <button
        onClick={() => onOpenApply('apply')}
        className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white font-extrabold text-xs sm:text-sm shadow-2xl border border-amber-400/40 hover:border-amber-400 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
        </span>
        <span className="tracking-wide text-white">Apply Now 2025–26</span>
        <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
}
