import React from 'react';
import { Award, Compass, Heart, ShieldCheck, Target, Users, BookOpen, Download, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/blueprintData';
import { getCdnUrl } from '../utils/cloudinary';

export default function AboutPage({ onOpenApply, onOpenTour }) {
  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              Institutional Profile • Part 2 Blueprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              25 Years of Educational Preeminence in Himachal Pradesh
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Established in 1999 under the aegis of <strong>{INSTITUTION_INFO.trustName}</strong>, Gautam Group of Colleges has grown from a single professional institute into Himachal Pradesh's premier multi-disciplinary campus.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenApply('prospectus')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Institutional Brochure (PDF)</span>
              </button>
              <button
                onClick={onOpenTour}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700"
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Explore Campus Infrastructure</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vision, Mission & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To be recognized as a center of academic excellence and value-based professional education that transforms students from the rural and semi-urban regions of Himachal Pradesh into globally competent healthcare, technology, and managerial leaders.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>• Provide affordable, high-quality technical, pharmaceutical, nursing, and basic science education.</li>
              <li>• Foster hands-on clinical and industrial training through state-of-the-art laboratories and hospital tie-ups.</li>
              <li>• Inculcate moral ethics, discipline, and commitment to public health and nation-building.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Core Values</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="p-2 bg-slate-50 rounded-lg font-bold text-slate-800">Academic Rigor</span>
              <span className="p-2 bg-slate-50 rounded-lg font-bold text-slate-800">Clinical Ethics</span>
              <span className="p-2 bg-slate-50 rounded-lg font-bold text-slate-800">Student Welfare</span>
              <span className="p-2 bg-slate-50 rounded-lg font-bold text-slate-800">Innovation & R&D</span>
            </div>
          </div>
        </div>

        {/* Chairman & Principal Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Principal cum Secretary */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-orange-50 text-[#ea580c] text-xs font-bold uppercase">
                Principal & Secretary's Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Roboto_Condensed',sans-serif]">
                "Empowering Himachal with Quality Higher Education Since 1999"
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "When Gautam Group of Colleges was founded in 1999, our goal was clear: talented youth from Hamirpur and across Himachal Pradesh should not need to migrate to distant cities for world-class pharmacy, nursing, science, or management education. Over the past 25 years, our alumni serving in premier hospitals, research labs, and multinational firms stand as proof of that commitment."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <img 
                src={getCdnUrl('/dignitaries/dr_rajneesh_gautam.png')} 
                alt="Dr. Rajneesh Gautam"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#1b327b]/30 shadow"
              />
              <div>
                <div className="font-bold text-slate-900 text-sm">Dr. Rajneesh Gautam</div>
                <div className="text-xs text-[#ea580c] font-bold">Principal cum Secretary, Gautam Group of Colleges</div>
                <div className="text-[11px] text-slate-400">Ph.D., M.Sc. • Hamirpur (H.P.)</div>
              </div>
            </div>
          </div>

          {/* Principal Nursing */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase">
                Nursing Faculty Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Roboto_Condensed',sans-serif]">
                "Clinical Excellence, Compassion & Professional Dedication"
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "At Gautam College of Nursing (Est. 2014), our curriculum combines rigorous theoretical grounding under INC and AMRU with extensive bedside clinical rotations at Dr. Radhakrishnan Government Medical College Hamirpur. We take immense pride in nurturing ethical, highly competent healthcare professionals."
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ea580c] text-white font-bold flex items-center justify-center text-sm shadow">
                PS
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Mrs. Poonam Sharma</div>
                <div className="text-xs text-blue-900 font-bold">Principal / Associate Professor, Gautam College of Nursing</div>
                <div className="text-[11px] text-slate-400">M.Sc Maternal Health Nursing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Body & Administrative Council */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Governing Body & Board of Management</h3>
              <p className="text-xs text-slate-500">Constituted in accordance with AICTE, PCI, INC & University Statutes</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              Annual Session 2024–2025
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Dr. Rajeev Gautam</div>
              <div className="text-indigo-600 font-semibold">President & Chairman</div>
              <div className="text-slate-500 text-[11px]">Gautam Educational Trust</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Prof. (Dr.) S.K. Sharma</div>
              <div className="text-indigo-600 font-semibold">Member Secretary & Dean</div>
              <div className="text-slate-500 text-[11px]">Academic Administrator</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Nominee, HPTU Hamirpur</div>
              <div className="text-indigo-600 font-semibold">University Representative</div>
              <div className="text-slate-500 text-[11px]">Ex-Officio Member</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900">Nominee, HP State Govt.</div>
              <div className="text-indigo-600 font-semibold">Directorate of Higher Education</div>
              <div className="text-slate-500 text-[11px]">Shimla Observer</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
