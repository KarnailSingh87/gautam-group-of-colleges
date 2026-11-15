import React from 'react';
import { 
  Award, 
  Cpu, 
  Briefcase, 
  Globe2, 
  Leaf, 
  Lightbulb, 
  Users2, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

export default function StatsBento({ preset, onOpenApply }) {
  return (
    <section id="bento" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Collegiate Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Engineered for Groundbreaking Discovery & Career Preeminence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We reject the conventional classroom model. Our interdisciplinary bento ecosystem fuses world-class research, high-tech venture capital, and personalized faculty mentorship.
          </p>
        </div>

        {/* Bento Grid Layout (Dribbble / 21st.dev signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Faculty Mentorship (Spans 2 cols, 2 rows or prominent block) */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
                94% Terminal Degree Faculty
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Mentored by Pioneers, Nobel Laureates & Industry Fellows
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Learn directly from active researchers whose discoveries define modern robotics, genomic medicine, and macroeconomic policy. 100% of classes are taught by professors, not teaching assistants.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Prof" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Prof" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Prof" />
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-slate-900">
                  +380
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Meet Faculty Directory <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Bento Card 2: Innovation Incubator & Venture Lab */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">$15M+</div>
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-1">Student Venture Fund</div>
              <h4 className="text-lg font-bold text-slate-900 mt-3">
                Founders Garage & Patent Incubator
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                48 student-led spinouts funded in the past 3 years with direct seed capital, legal counsel, and investor demo days.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>View Incubator Portfolio</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
            </div>
          </div>

          {/* Bento Card 3: Guaranteed Co-op & Career Pipelines */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-700">100%</div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">Co-op Placement Guarantee</div>
              <h4 className="text-lg font-bold text-slate-900 mt-3">
                Fortune 500 & Clinic Rotations
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every undergraduate completes two paid full-time industry co-ops with partners like Microsoft, Pfizer, Goldman Sachs, and NASA.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Explore 600+ Corporate Partners</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          </div>

          {/* Bento Card 4: Global Campuses & Immersion (Spans 2 cols) */}
          <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/70 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <Globe2 className="w-3.5 h-3.5" />
                Global Immersion
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Study in Oxford, Tokyo, Berlin & Singapore
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Tuition transfers seamlessly without extra cost. 74% of our undergraduates spend at least one semester abroad with full course credit.
              </p>
            </div>
            <div className="flex-shrink-0 text-center bg-white rounded-2xl p-4 shadow-sm border border-blue-100 min-w-[130px]">
              <div className="text-3xl font-black text-blue-600">42+</div>
              <div className="text-xs font-semibold text-slate-600">Global Hubs</div>
            </div>
          </div>

          {/* Bento Card 5: Campus Sustainability & Zero Carbon */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Leaf className="w-3.5 h-3.5" />
                Green Campus Leadership
              </div>
              <h3 className="text-2xl font-bold">
                100% Renewable Campus Power & Carbon-Neutral by 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
                Ranked in the top 1% for environmental sustainability. Our 130-acre campus functions as an active microgrid and urban permaculture sanctuary.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => onOpenApply('request-info', 'Sustainability Report')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
              >
                View Impact Report
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
