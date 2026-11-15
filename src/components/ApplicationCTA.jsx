import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Download, Calendar, MessageCircle, FileCheck, Phone } from 'lucide-react';

export default function ApplicationCTA({ onOpenApply }) {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Direct Admission & Counseling Window Open (Session 2025-26)
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Begin Your Journey with Gautam Group of Colleges, Hamirpur
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Apply online for verified seats in <strong>B.Pharmacy, D.Pharmacy, B.Sc. Nursing, GNM, MBA, BCA, and M.Sc. Sciences</strong>. Benefit from our 25-year institutional heritage, campus hostels, and confirmed placements.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              <button
                onClick={() => onOpenApply('apply')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Apply Online (2025-26)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919418010420"
                className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Helpline: +91-9418010420</span>
              </a>
            </div>

            {/* Micro Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>HPCET / AMRU & Direct Merit Seats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>HP State Scholarship Scheme (e-Kalyan/NSP)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-indigo-400" />
                <span>Campus Location: Near Bus Stand, Hamirpur</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
