import React from 'react';
import { Sparkles, Eye, Sliders, CheckCircle2, ChevronRight, X, ArrowUpRight, Palette, Layers, Award, Target, Rocket, Phone } from 'lucide-react';

export default function ClientBar({ 
  currentPreset, 
  onSelectPreset, 
  presets, 
  isPitchOpen, 
  setIsPitchOpen,
  onOpenApply
}) {
  return (
    <>
      {/* Top Client Showcase Control Strip */}
      <div className="bg-slate-950 border-b border-slate-800 text-white text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Client Pitch Badge */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-amber-300 tracking-wide uppercase text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Client Presentation: Gautam Group of Colleges, Hamirpur (H.P.)
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-400">
              Silver Jubilee Edition (1999–2025)
            </span>
          </div>

          {/* Center: University Presets Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5">
            <span className="text-slate-400 font-medium text-[11px] hidden md:inline">Mode View:</span>
            <div className="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800">
              {Object.values(presets).map((preset) => {
                const isActive = currentPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => onSelectPreset(preset.id)}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                      isActive 
                        ? 'bg-indigo-600 text-white shadow-sm font-semibold' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {preset.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Pitch Notes Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPitchOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-500/30 transition-all font-bold text-[11px]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>GGC Proposal & Conversion Deck</span>
            </button>
            <a
              href="tel:+919418010420"
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold"
            >
              <Phone className="w-3 h-3" />
              <span>Helpline: +91-9418010420</span>
            </a>
          </div>

        </div>
      </div>

      {/* Slide-over Pitch Notes Drawer for Clients */}
      {isPitchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200">
              
              {/* Drawer Header */}
              <div className="p-6 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1.5">
                    Proposal Strategy
                  </div>
                  <h3 className="text-lg font-bold">Client Deck: Gautam Group of Colleges</h3>
                  <p className="text-xs text-slate-400">Why this redesigned portal outperforms legacy competitor sites</p>
                </div>
                <button 
                  onClick={() => setIsPitchOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-600">
                
                {/* Point 1 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Unified Hub for All 6 Constituent Colleges</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Replaces disconnected web pages with a cohesive brand identity for <strong>Gautam College of Pharmacy, Gautam College of Nursing, GIMT, Gautam Degree College, Hotel Management, and Polytechnic</strong>.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direct Admission & WhatsApp Enrollment Lead Engine</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Prospective students and parents can instantly submit inquiries for B.Pharm, B.Sc Nursing, MBA, and BCA directly into the college admission desk with automatic district routing (Hamirpur, Bilaspur, Kangra, Mandi, Una).
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">HP State Scholarship (NSP & e-Kalyan) Transparency</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Fee anxiety is removed with the interactive scholarship estimator that clarifies full reimbursement for eligible SC/ST/OBC/IRDP students under Himachal Pradesh government rules.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Seamless Student Services & Result Integration</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Built-in links for HPTU, HPU, and AMRU examination date sheets, question papers archive, and student bus-pass renewal near Hamirpur Bus Stand.
                    </p>
                  </div>
                </div>

                {/* Institutional Credentials Box */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Approvals & Accreditations</div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold text-indigo-700">
                      PCI, New Delhi
                      <div className="text-[10px] text-slate-500 font-normal">Pharmacy Council of India</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold text-blue-700">
                      INC & HPNRC
                      <div className="text-[10px] text-slate-500 font-normal">Indian Nursing Council</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold text-emerald-700">
                      AICTE Approved
                      <div className="text-[10px] text-slate-500 font-normal">Management & Polytechnic</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold text-amber-700">
                      HPTU, HPU & AMRU
                      <div className="text-[10px] text-slate-500 font-normal">Affiliating Universities</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
                <button
                  onClick={() => setIsPitchOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 text-white font-bold hover:bg-slate-800 transition-colors text-center text-xs"
                >
                  Return to Live Website
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
