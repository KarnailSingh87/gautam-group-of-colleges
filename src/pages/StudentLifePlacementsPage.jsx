import React, { useState } from 'react';
import { Briefcase, Award, Users, BookOpen, TrendingUp, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { ALUMNI_TESTIMONIALS } from '../data/mockData';

export default function StudentLifePlacementsPage({ onOpenApply }) {
  const [activeTab, setActiveTab] = useState('placements'); // 'placements', 'studentlife', 'research'

  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              Placements, Student Life & IQAC • Parts 10, 11 & 12 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Campus Placements, NSS/NCC & Research Innovation
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our proven career track records across pharma, healthcare and IT sectors, vibrant campus societies, and IQAC quality assurance cell.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2">
          {[
            { id: 'placements', label: 'Part 11: Placement & Corporate Training Cell' },
            { id: 'studentlife', label: 'Part 10: Student Life, NSS/NCC & Alumni' },
            { id: 'research', label: 'Part 12: Research, Seminars & IQAC' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Part 11: Placements & Recruiters */}
        {activeTab === 'placements' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#1e3a8a]">100%</div>
                <div className="text-xs text-slate-500 font-bold mt-1">Clinical Bedside Training</div>
                <div className="text-[10px] text-slate-400">Dr. Radhakrishnan GMC</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-emerald-700">Active</div>
                <div className="text-xs text-slate-500 font-bold mt-1">Pharma & Hospital Drives</div>
                <div className="text-[10px] text-slate-400">Regional & National Units</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-amber-700">10,000+</div>
                <div className="text-xs text-slate-500 font-bold mt-1">Alumni Network</div>
                <div className="text-[10px] text-slate-400">Established 1999</div>
              </div>
              <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-rose-700">MoU</div>
                <div className="text-xs text-slate-500 font-bold mt-1">Academic Research Linkage</div>
                <div className="text-[10px] text-slate-400">NSCBM Govt College</div>
              </div>
            </div>

            {/* Placement Officer & Recruiters */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Training, Internship & Placement Cell</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Central Desk: +91-9736391060 | Landline: 01972-221493 | ggchmr@gmail.com</p>
                </div>
                <button
                  onClick={() => onOpenApply('apply', 'Placement Registration')}
                  className="px-4 py-2 rounded-xl bg-[#1e3a8a] text-white font-bold text-xs hover:bg-blue-900 transition"
                >
                  Student Placement Registration
                </button>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">Prominent Healthcare, Pharmaceutical & Corporate Partners</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 text-center text-xs font-bold text-slate-700">
                  {['Sun Pharma', 'Cipla Ltd', 'Macleods Pharma', 'Fortis Healthcare', 'Apollo Hospitals', 'Max Healthcare', 'Regional Health Centers', 'HDFC Bank', 'Himachal State Co-op', 'Regional Pharma Baddi', 'Dr. Radhakrishnan GMC', 'Civil Hospital Hamirpur'].map((rec, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-400 transition-colors">
                      {rec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Placement Policy Notice */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>Placement Integrity & Verification Policy:</strong> The Training and Placement Cell facilitates campus interviews, clinical internships, and pre-placement training. In adherence to transparency guidelines, only authenticated on-record recruitment drives are published. Candidates are encouraged to verify current batch placement drives directly through the cell at <strong>+91-9736391060</strong> or the Principal's Secretariat.
              </div>
            </div>

            {/* Alumni Spotlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALUMNI_TESTIMONIALS.map((alumni) => (
                <div key={alumni.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <p className="text-xs text-slate-600 italic leading-relaxed">"{alumni.quote}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img src={alumni.image} alt={alumni.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{alumni.name}</div>
                      <div className="text-[11px] text-indigo-600 font-semibold">{alumni.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Part 10: Student Life, NSS/NCC */}
        {activeTab === 'studentlife' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">NSS</div>
                <h4 className="font-bold text-slate-900 text-sm">National Service Scheme (NSS)</h4>
                <p className="text-slate-600 leading-relaxed">Active 100-volunteer unit organizing village health checkup camps, environmental cleanliness drives in Hamirpur, and blood donation drives.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">NCC</div>
                <h4 className="font-bold text-slate-900 text-sm">National Cadet Corps (NCC)</h4>
                <p className="text-slate-600 leading-relaxed">Cadet training for military discipline, republic day parades, disaster response volunteering, and direct defense services entry guidance.</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">Fest</div>
                <h4 className="font-bold text-slate-900 text-sm">Cultural & Sports Societies</h4>
                <p className="text-slate-600 leading-relaxed">Annual Youth Festival, inter-collegiate cricket tournament, debate society, coding club, and dramatic theatre troupe.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Gautam Alumni Association (GAA)</h3>
              <p className="text-xs text-slate-600">Graduates of Gautam College of Pharmacy, Nursing, GIMT, and Degree College are invited to register in the official alumni chapter for networking and mentorship.</p>
              <button
                onClick={() => alert('Opening Official Alumni Registration Form...')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Register as Gautam Alumnus
              </button>
            </div>
          </div>
        )}

        {/* 3. Part 12: Research & IQAC */}
        {activeTab === 'research' && (
          <div className="space-y-6 text-xs">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                Internal Quality Assurance Cell (IQAC)
              </div>
              <h3 className="text-lg font-bold text-slate-900">Academic Quality & Institutional Research Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                The IQAC of Gautam Group ensures continuous enhancement of academic curricula, faculty development programs (FDPs), ethical animal and clinical trial protocols, and preparation for NAAC accreditation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>IQAC Chairperson:</strong> Prof. (Dr.) S.K. Sharma
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>Coordinator:</strong> Dr. Vivek Dhiman
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <strong>External Expert:</strong> Prof. from HPTU Hamirpur
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
