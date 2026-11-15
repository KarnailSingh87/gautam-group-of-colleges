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
  ArrowUpRight,
  ShieldCheck,
  Building2,
  HeartPulse
} from 'lucide-react';

export default function StatsBento({ preset, onOpenApply }) {
  return (
    <section id="bento" className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Gautam Group Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Students & Parents Across Himachal Choose GGC Hamirpur
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            For over 25 years, Gautam Group has pioneered professional education in Himachal Pradesh, fusing rigorous university curriculum with real-world clinical and industrial training.
          </p>
        </div>

        {/* Bento Grid Layout (Dribbble / 21st.dev signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bento Card 1: Healthcare & Pharma Preeminence */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
                PCI (Pharmacy) & INC (Nursing) Approved
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Benchmark Laboratories & Hospital Clinical Shadowing
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Direct bedside clinical rotations at Dr. Radhakrishnan Govt Medical College Hamirpur and top super-specialty hospitals for nursing students, alongside state-of-the-art machine rooms and formulation labs for pharmacy scholars.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs text-indigo-300 font-semibold">
                Affiliated to HPTU, HPU & AMRU
              </div>
              <button
                onClick={() => onOpenApply('apply', 'Healthcare & Pharma')}
                className="text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                Apply for 2025 Admissions <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bento Card 2: 100% Placement Drives */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-emerald-700">100+</div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mt-1">Recruitment Partners</div>
              <h4 className="text-lg font-bold text-slate-900 mt-3">
                Top Pharma & Hospital Tie-Ups
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Regular campus placement drives with Sun Pharma, Cipla, Macleods, Fortis Healthcare, Apollo, Wipro, and Infosys.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>View Placement Records</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
            </div>
          </div>

          {/* Bento Card 3: Prime Hamirpur Location */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold text-amber-700">Prime</div>
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-1">Bus Stand Proximity</div>
              <h4 className="text-lg font-bold text-slate-900 mt-3">
                Seamless Transport Connectivity
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Located right near Hamirpur Central Bus Stand. Daily day-scholar commute connectivity for Bilaspur, Kangra, Mandi & Una districts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Hostels & Transport Info</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
            </div>
          </div>

          {/* Bento Card 4: HP Government Scholarship Assistance (Spans 2 cols) */}
          <div className="md:col-span-2 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200/70 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                State Scholarship Cell
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                100% Assistance for HP State & Central Scholarships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Dedicated scholarship desk guiding SC, ST, OBC, IRDP, and Medhavi Chhatravriti eligible students for tuition fee reimbursements under National Scholarship Portal (NSP) & HP e-Kalyan.
              </p>
            </div>
            <div className="flex-shrink-0 text-center bg-white rounded-2xl p-4 shadow-sm border border-indigo-100 min-w-[130px]">
              <div className="text-3xl font-black text-indigo-600">NSP</div>
              <div className="text-xs font-semibold text-slate-600">e-Kalyan Verified</div>
            </div>
          </div>

          {/* Bento Card 5: Separate Boys & Girls Hostels */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Safe & Secure Student Living
              </div>
              <h3 className="text-2xl font-bold">
                Dedicated Boys & Girls Hostels with 24/7 Security & CCTV
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
                Hygienic vegetarian & non-vegetarian mess, Wi-Fi connectivity, power backup, and resident wardens providing a safe home away from home.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => onOpenApply('hostel-inquiry')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
              >
                Hostel Details & Fees
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
