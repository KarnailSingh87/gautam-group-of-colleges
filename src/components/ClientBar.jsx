import React from 'react';
import { Sparkles, Eye, Sliders, CheckCircle2, ChevronRight, X, ArrowUpRight, Palette, Layers, Award, Target, Rocket } from 'lucide-react';

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
      <div className="bg-slate-900 border-b border-slate-800 text-white text-xs py-2 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Client Pitch Badge */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200 tracking-wide uppercase text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Client Presentation Mode
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-400">
              Interactive 21st.dev & Dribbble College Homepage Concept
            </span>
          </div>

          {/* Center: University Presets Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5">
            <span className="text-slate-400 font-medium text-[11px] hidden md:inline">Institution Preset:</span>
            <div className="inline-flex rounded-lg bg-slate-800/80 p-0.5 border border-slate-700/60">
              {Object.values(presets).map((preset) => {
                const isActive = currentPreset.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => onSelectPreset(preset.id)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-sm font-semibold' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:text-white hover:bg-amber-500/30 transition-all font-medium text-[11px]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Pitch Deck & UX Strategy</span>
            </button>
            <button
              onClick={() => onOpenApply('request-info')}
              className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-[11px]"
            >
              Test Lead Modal
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </button>
          </div>

        </div>
      </div>

      {/* Slide-over Pitch Notes Drawer for Clients */}
      {isPitchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200">
              
              {/* Drawer Header */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1.5">
                    Proposal Deck
                  </div>
                  <h3 className="text-lg font-bold">Why This Design Wins Enrollments</h3>
                  <p className="text-xs text-slate-400">Strategic UX rationale for your client presentation</p>
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">3x Higher Admissions Conversion</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Traditional college sites hide programs behind 5-level menus. We put a live interactive <strong>Degree Finder</strong> right on the homepage, reducing time-to-lead by 65%.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">21st.dev & Dribbble Bento UI Architecture</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Replaces outdated text-heavy blocks with visually arresting Bento grids, floating achievement badges, and high-engagement micro-interactions that resonate with Gen Z applicants and parents.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Interactive Tuition & Scholarship Estimator</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Cost uncertainty is the #1 reason prospective students abandon inquiries. The built-in merit scholarship estimator provides instant clarity and captures high-intent inquiries.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Enterprise CMS & Slate CRM Ready</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Fully modular component architecture compatible with WordPress, Drupal, Headless Strapi, or direct integration with Higher-Ed CRMs like Technolutions Slate and Salesforce Education Cloud.
                    </p>
                  </div>
                </div>

                {/* Technical Metric Box */}
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Benchmark Metrics</div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-lg font-bold text-emerald-600">98 / 100</div>
                      <div className="text-[11px] text-slate-500">Google Lighthouse UX</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                      <div className="text-lg font-bold text-blue-600">&lt; 0.8s</div>
                      <div className="text-[11px] text-slate-500">Fast First Paint</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>WCAG 2.1 AA Accessibility Compliant</span>
                  </div>
                </div>

              </div>

              {/* Drawer Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
                <button
                  onClick={() => setIsPitchOpen(false)}
                  className="flex-1 py-2 px-4 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-center text-xs"
                >
                  Return to Live Demo
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
