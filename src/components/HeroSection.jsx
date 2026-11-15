import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Award, 
  Globe2, 
  BookOpen,
  Compass
} from 'lucide-react';

export default function HeroSection({ 
  preset, 
  onOpenTour, 
  onScrollToPrograms, 
  onOpenApply 
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pattern-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Pre-header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>{preset.badgeText}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Accredited by NECHE & ABET</span>
          </div>
        </div>

        {/* Hero Grid: Content (Left) & Bento Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Where Bold Ambition Meets{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-amber-200">
                Discovery
              </span>{' '}
              and Lifelong Purpose.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Join a globally recognized community of visionary scholars, breakthrough researchers, and world changers. Offering 140+ accredited programs across sciences, business, humanities, and high-impact technology.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToPrograms}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore 140+ Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenTour}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-semibold text-base border border-slate-700/80 hover:border-slate-600 backdrop-blur-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Take 360° Virtual Tour</span>
              </button>
            </div>

            {/* Micro Social Proof / Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>$42M in Merit Aid Awarded</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Application Fee for Fall 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Test-Optional Policy</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dribbble/21st.dev Style Layered Bento Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary High-Impact Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80" 
                  alt="Collegiate Campus & Students" 
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded bg-blue-600/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider mb-2">
                    Historic Great Hall & Quad
                  </div>
                  <h3 className="text-lg font-bold">130+ Acres of Iconic Campus & Living Labs</h3>
                  <p className="text-xs text-slate-300 mt-1">Vibrant academic community in the heart of innovation</p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left / -translate-x) */}
              <div className="absolute -top-5 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-xl animate-float-slow max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">96.4%</div>
                    <div className="text-[11px] text-slate-400 leading-tight">Career Placement within 6 Months</div>
                  </div>
                </div>
              </div>

              {/* Floating Student Spotlight Card (Bottom Right / +translate-x) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                    alt="Sophia Chen" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-blue-400 shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>Sophia Chen '25</span>
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] text-blue-300">Rhodes Scholar Finalist</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">B.S. Computer Science & AI</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Global Statistics Strip (21st.dev Metric Bar) */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              12:1
            </div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Student-Faculty Ratio</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Average class size: 16 students</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              $48M+
            </div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Annual Research Grants</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Undergrad research fellowships</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
              140+
            </div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Undergrad & Grad Majors</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Interdisciplinary double degrees</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 backdrop-blur-sm">
            <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
              85+
            </div>
            <div className="text-xs text-slate-300 font-semibold mt-1">Countries Represented</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Global student body & study abroad</div>
          </div>

        </div>

      </div>
    </section>
  );
}
