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
  Compass,
  MapPin,
  Building,
  GraduationCap
} from 'lucide-react';

export default function HeroSection({ 
  preset, 
  onOpenTour, 
  onScrollToPrograms, 
  onOpenApply 
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pattern-grid opacity-15 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Pre-header */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>🏛️ Gautam Group of Colleges • 25 Glorious Years (1999–2025)</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Near Bus Stand, Hamirpur (H.P.)</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HPTU • HPU • AMRU • AICTE • PCI • INC Approved</span>
          </div>
        </div>

        {/* Hero Grid: Content (Left) & Bento Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
              Himachal’s Premier Hub for{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-indigo-200 to-cyan-200">
                Pharmacy, Healthcare
              </span>{' '}
              & Professional Excellence.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Empowering 25,000+ scholars since 1999. Featuring top-ranked constituent colleges in <strong>B.Pharmacy, B.Sc. Nursing, MBA, BCA, M.Sc Sciences, and Hotel Management</strong> with state-of-the-art laboratories and confirmed industrial placements.
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToPrograms}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore 2025-26 Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenTour}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 backdrop-blur-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Take Campus Tour</span>
              </button>
            </div>

            {/* Micro Social Proof / Hamirpur Key Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Prime Central Location (Near Bus Stand)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>HP State Post-Matric Scholarship Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Girls & Boys Hostels</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dribbble/21st.dev Layered Bento Showcase */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Card: Real Campus View of Gautam College of Nursing, Hamirpur */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group">
                <img 
                  src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/12841/2018/12/27/Campus%20View%20of%20Gautam%20College%20of%20Nursing,%20Hamirpur_Campus%20View.jpg" 
                  alt="Campus View of Gautam College of Nursing, Hamirpur" 
                  className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Top Institution Official Crest Tag */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-700 shadow-xl">
                  <img 
                    src="/ggc-logo.webp"
                    alt="GGC Logo" 
                    className="w-7 h-7 rounded-full object-contain bg-white p-0.5 shadow-sm"
                  />
                  <span className="text-[11px] font-bold text-amber-300">Gautam Group (Est. 1999)</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-block px-2.5 py-1 rounded bg-indigo-600/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider mb-2">
                    Actual Campus View • Gautam College of Nursing
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">25 Years of Shaping Healthcare & Technology Leaders</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Near Bus Stand, Hamirpur • INC, HPNRC & AMRU Approved Campus</p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Left): 100% Clinical & Industry Training */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-white">100%</div>
                    <div className="text-[11px] text-slate-400 leading-tight">Clinical & Pharma Training Record</div>
                  </div>
                </div>
              </div>

              {/* Floating Placement Highlight Card (Bottom Right): Sun Pharma / Fortis */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
                    alt="Alumni" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-indigo-400 shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <span>Pooja Dhiman (Nursing)</span>
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold">Fortis Healthcare Mohali</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Annual Package: ₹6.8 LPA</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Global Statistics Strip for Gautam Group */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-amber-400">
              25+ Years
            </div>
            <div className="text-xs text-slate-200 font-bold mt-1">Academic Heritage</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Established in 1999 at Hamirpur</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-indigo-400">
              6 Colleges
            </div>
            <div className="text-xs text-slate-200 font-bold mt-1">Constituent Institutions</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Pharmacy, Nursing, Mgmt, Sciences</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-emerald-400">
              25,000+
            </div>
            <div className="text-xs text-slate-200 font-bold mt-1">Successful Alumni</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Serving across India & Abroad</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-3xl font-extrabold text-cyan-400">
              100+
            </div>
            <div className="text-xs text-slate-200 font-bold mt-1">Campus Recruiters</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Pharma, Hospitals, Banks & IT</div>
          </div>

        </div>

      </div>
    </section>
  );
}
