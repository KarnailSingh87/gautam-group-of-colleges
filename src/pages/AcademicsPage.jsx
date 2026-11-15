import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Download, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  Building, 
  Layers, 
  AlertCircle 
} from 'lucide-react';
import { COURSES_DETAIL, SEAT_MATRIX_FEES, TOTAL_GROUP_SEATS, FEE_DISCLAIMER, INSTITUTION_INFO } from '../data/blueprintData';
import { QUESTION_PAPERS } from '../data/mockData';

export default function AcademicsPage({ onOpenApply, onOpenExamPortal }) {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [activeTab, setActiveTab] = useState('seats-fees'); // 'seats-fees', 'courses', 'polytechnic', 'syllabus', 'calendar'

  return (
    <div className="py-10 bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#02263c] via-[#0b2545] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-white/20">
              Academics, Seat Matrix & Regulatory Affiliations
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Academic Curricula, Seat Matrix & Indicative Fees
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Explore our transparent seat distribution (1,165 total group seats), entrance examinations, semester curricula, and statutory affiliations across HPU, HPTU, AMRU, PCI, and AICTE.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-amber-300">
              <span>✓ 1,165 Total Group Seats</span>
              <span>✓ HPU Affiliation Letter 20/09/2000</span>
              <span>✓ MoU with NSCBM Govt College Hamirpur</span>
              <span>✓ AMRU & HPCET Recognized</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2">
          {[
            { id: 'seats-fees', label: 'Seat Matrix & Indicative Fees (1,165 Seats)' },
            { id: 'courses', label: 'Degree Programs Detailed Guide' },
            { id: 'polytechnic', label: 'Gautam Polytechnic (8 AICTE Branches)' },
            { id: 'syllabus', label: 'Syllabus & University Scheme' },
            { id: 'calendar', label: 'Academic Calendar & Datesheet' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1e3a8a] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. SEAT MATRIX & INDICATIVE FEES */}
        {activeTab === 'seats-fees' && (
          <div className="space-y-6">
            
            {/* Regulatory Transparency Notice Banner */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Public Data & Fee Transparency Notice:</strong>
                <p className="mt-0.5 leading-relaxed text-amber-800">
                  {FEE_DISCLAIMER}
                </p>
                <div className="mt-2 font-bold flex flex-wrap gap-3 text-slate-800">
                  <span>General Enquiries: 01972-221493</span>
                  <span>•</span>
                  <span>Polytechnic Office: 01972-223557</span>
                  <span>•</span>
                  <span>Helpline: +91-9418075475</span>
                  <span>•</span>
                  <span>Email: ggchmr@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Seat Matrix Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Approved Course Seat Matrix & Indicative Fees</h3>
                  <p className="text-xs text-slate-500">Across Gautam Degree College, GIMT, Gautam Nursing, Pharmacy & Polytechnic</p>
                </div>
                <span className="px-3 py-1 bg-[#1e3a8a] text-white text-xs font-bold rounded-lg shrink-0">
                  1,165 Total Group Intake
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100/75 text-slate-700 uppercase font-bold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">College</th>
                      <th className="py-3 px-4">Course</th>
                      <th className="py-3 px-4">Duration</th>
                      <th className="py-3 px-4">Approved Seats</th>
                      <th className="py-3 px-4">Indicative Fee</th>
                      <th className="py-3 px-4">Admission Route</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {SEAT_MATRIX_FEES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition">
                        <td className="py-3.5 px-4 font-semibold text-slate-900">{row.college}</td>
                        <td className="py-3.5 px-4 font-bold text-[#1e3a8a]">{row.course}</td>
                        <td className="py-3.5 px-4 text-slate-600">{row.duration}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {row.seats} Seats
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-bold text-slate-900">{row.feeIndicative}</span>
                          <span className="block text-[10px] text-slate-500">{row.feeNote}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 max-w-[200px]">
                          {row.admissionRoute}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => onOpenApply('apply', row.course)}
                            className="px-3 py-1.5 rounded-lg bg-[#ea580c] hover:bg-orange-600 text-white font-bold text-xs transition"
                          >
                            Apply
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Statutory Governance & MoU Footnote */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div>
                  <strong>Official HPU Affiliation:</strong> {INSTITUTION_INFO.hpuAffiliationLetter}
                </div>
                <div>
                  <strong>Research Collaboration:</strong> {INSTITUTION_INFO.mouCollaboration}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 2. COURSES DETAIL */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES_DETAIL.map((course, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1e3a8a] text-[10px] font-bold">
                        {course.affiliation}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold">
                        {course.intake}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{course.name}</h3>
                    <div className="text-xs text-[#ea580c] font-bold">{course.college}</div>

                    <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs text-slate-700">
                      <div><strong>Duration:</strong> {course.duration}</div>
                      <div><strong>Eligibility:</strong> {course.eligibility}</div>
                      <div><strong>Tuition:</strong> <span className="font-bold text-slate-900">{course.annualTuition}</span></div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2">
                      <strong>Career Trajectory:</strong> {course.scope}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenApply('apply', course.name)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white text-xs font-bold transition-colors"
                    >
                      Apply for Seat
                    </button>
                    <button
                      onClick={() => setActiveTab('syllabus')}
                      className="py-2 px-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50"
                    >
                      Syllabus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. GAUTAM POLYTECHNIC (8 AICTE BRANCHES) */}
        {activeTab === 'polytechnic' && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Gautam Polytechnic – AICTE Approved Technical Diplomas</h3>
                <p className="text-xs text-slate-500 mt-0.5">Affiliated to H.P. Takniki Shiksha Board, Dharamshala</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#1e3a8a]">
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>Direct Helplines: 01972-223557 | 01972-221493 | +91-9418075475</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              {[
                { name: 'Civil Engineering', desc: 'Surveying total stations, building drafting, soil mechanics, structural analysis.' },
                { name: 'Computer Engineering', desc: 'C/C++, Python, software development, database administration, web systems.' },
                { name: 'Electrical Engineering', desc: 'Power generation, high-voltage transformers, switchgear and control systems.' },
                { name: 'Electronics & Communication', desc: 'Embedded systems, digital signal processing, wireless networks, IoT hardware.' },
                { name: 'Mechanical Engineering', desc: 'CNC machining, CAD/CAM drafting, thermodynamics, lathe workshops.' },
                { name: 'Information Technology (IT)', desc: 'Network security, server management, cloud computing, full-stack tools.' },
                { name: 'Hotel Management', desc: 'Hospitality administration, front-office desk, culinary lab, event catering.' },
                { name: 'Architecture Engineering', desc: 'Architectural drafting, structural modeling, building materials, AutoCAD.' }
              ].map((branch, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 hover:shadow-xs transition">
                  <div className="font-bold text-slate-900 text-sm text-[#1e3a8a]">{branch.name}</div>
                  <p className="text-slate-600 leading-relaxed">{branch.desc}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    3 Years Full-Time
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <strong className="text-blue-900">Eligibility for Polytechnic Diplomas:</strong>
                <span className="text-slate-700 ml-1">10th Standard with minimum 35% marks + HP PAT Entrance or Direct Merit.</span>
              </div>
              <button
                onClick={() => onOpenApply('apply', 'Gautam Polytechnic Diploma')}
                className="px-4 py-2 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-blue-900 transition shrink-0"
              >
                Apply for Polytechnic
              </button>
            </div>
          </div>
        )}

        {/* 4. SYLLABUS REPOSITORY */}
        {activeTab === 'syllabus' && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Official Semester Syllabi (NEP 2020 & CBCS Scheme)</h3>
                <p className="text-xs text-slate-500">Download syllabus PDFs or redirect to affiliating university portals</p>
              </div>
              <div className="flex gap-2 text-xs">
                <a
                  href="https://www.hpuniv.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-slate-200 font-bold text-slate-700 flex items-center gap-1 hover:bg-slate-50"
                >
                  <span>HPU Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.himtu.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-slate-200 font-bold text-slate-700 flex items-center gap-1 hover:bg-slate-50"
                >
                  <span>HPTU Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {COURSES_DETAIL.map((c, i) => (
                <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{c.name}</h4>
                    <div className="text-slate-500 text-[11px] mt-0.5">{c.college} • {c.affiliation}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Downloading official Syllabus PDF: ${c.name}`)}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-bold transition-colors flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. ACADEMIC CALENDAR */}
        {activeTab === 'calendar' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Academic Calendar Session 2026–27</h3>
              <p className="text-slate-500">Scheduled in accordance with HPTU, HPU and AMRU notifications</p>
              
              <div className="space-y-3 divide-y divide-slate-100">
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Commencement of Odd Semester Classes</span>
                  <span className="font-bold text-slate-900">August 2026</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">First Mid-Semester House Examinations</span>
                  <span className="font-bold text-slate-900">October 2026</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">HPTU & HPU Odd Semester Final Examinations</span>
                  <span className="font-bold text-slate-900">December 2026 – January 2027</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Commencement of Even Semester Classes</span>
                  <span className="font-bold text-slate-900">February 2027</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Key Admission Schedules</h3>
              <p className="text-slate-500">Entrance registrations and merit counseling deadlines</p>
              
              <div className="space-y-3 divide-y divide-slate-100">
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">AMRU B.Sc Nursing Entrance Exam</span>
                  <span className="font-bold text-rose-700">June – July (amruhp.ac.in)</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">HPCET MBA & B.Pharm Counseling</span>
                  <span className="font-bold text-[#1e3a8a]">July – August (himtu.ac.in)</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Direct Degree Merit Admissions (BCA/B.Sc)</span>
                  <span className="font-bold text-emerald-700">Rolling till August 31</span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Polytechnic HP PAT Counseling</span>
                  <span className="font-bold text-purple-700">July (hptechboard.com)</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
