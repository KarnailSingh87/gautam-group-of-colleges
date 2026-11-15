import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Download, Calendar, MessageCircle, FileCheck } from 'lucide-react';

export default function ApplicationCTA({ preset, onOpenApply }) {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Fall 2025 Regular Admissions Now Open
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Ready to Shape the Future with {preset.shortName}?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Complete your online application in 15 minutes. Take advantage of our zero application fee window, test-optional evaluation, and automatic merit scholarship consideration.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <button
                onClick={() => onOpenApply('apply')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Start Free Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenApply('request-info')}
                className="px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Download 2025 Viewbook</span>
              </button>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Common App & Direct Portal Accepted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Rolling Decisions in 3 Weeks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-blue-400" />
                <span>Admissions Hotline: (617) 555-0199</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
