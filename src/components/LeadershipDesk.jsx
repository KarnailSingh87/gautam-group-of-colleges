import React from 'react';
import { Quote, Award, ShieldCheck, CheckCircle2, ArrowRight, Building, BookOpen, GraduationCap } from 'lucide-react';

export default function LeadershipDesk({ onOpenApply }) {
  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Leadership Desk • Silver Jubilee Year</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Guiding 25 Years of Academic & Clinical Distinction
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-bold text-slate-200">Gautam Educational Trust</span>
            <span>•</span>
            <span>Hamirpur (H.P.)</span>
          </div>
        </div>

        {/* Leadership Dual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Chairman / Principal Quote Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-2xl relative">
              <Quote className="w-12 h-12 text-amber-400/30 absolute top-6 right-6 pointer-events-none" />
              
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <span>Message from the Executive Directorate</span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 font-serif leading-relaxed italic">
                “When Gautam Group of Colleges was founded in 1999, our solemn commitment was to ensure that the youth of Himachal Pradesh need not migrate outside the state for high-standard professional education in Pharmacy, Nursing, Management, and Pure Sciences. Today, with over 25,000 alumni serving in premier healthcare institutions, pharmaceutical giants, and corporate enterprises across the globe, we take immense pride in our contribution to nation-building.”
              </blockquote>

              <div className="mt-6 pt-6 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-base text-white">Prof. (Dr.) S. K. Sharma</div>
                  <div className="text-xs text-slate-400 font-medium">Director & Principal • Gautam Group of Colleges</div>
                  <div className="text-[11px] text-amber-300/80 mt-0.5">Ph.D, M.Pharm • Former Member, University Academic Council</div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>College Code: HMR-04</span>
                </div>
              </div>
            </div>

            {/* Key Governance Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800 text-center">
                <div className="text-2xl font-black text-amber-400">1999</div>
                <div className="text-xs font-bold text-slate-200 mt-1">Foundation Year</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Established in Hamirpur</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800 text-center">
                <div className="text-2xl font-black text-indigo-400">3,200+</div>
                <div className="text-xs font-bold text-slate-200 mt-1">Active Scholars</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Across 6 Colleges</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-800 text-center">
                <div className="text-2xl font-black text-emerald-400">100%</div>
                <div className="text-xs font-bold text-slate-200 mt-1">Govt. Hospital Tie-up</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Dr. Radhakrishnan GMC</div>
              </div>
            </div>
          </div>

          {/* Institutional Integrity & Accreditations (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/80 to-slate-900 rounded-3xl p-6 sm:p-8 border border-indigo-900/50 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Statutory Approvals & Affiliations</h3>
                <p className="text-xs text-slate-400">Permanently Recognized Regulatory Framework</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Pharmacy Council of India (PCI):</strong> Approved for 4-Year B.Pharm & 2-Year D.Pharm programs under HPTU.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">Indian Nursing Council (INC) & AMRU:</strong> Recognized 4-Year B.Sc. Nursing & 3-Year GNM with direct clinical training.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">AICTE & HPU Shimla:</strong> Accredited Master of Business Administration (MBA), BCA, and Post-Graduate Sciences.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-white">HP State Scholarship Coverage:</strong> Direct disbursement under HP e-Pass & National Scholarship Portal (NSP).
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenApply('apply')}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition flex items-center justify-center gap-2"
              >
                <span>Request 2025 Prospectus & Admission Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
