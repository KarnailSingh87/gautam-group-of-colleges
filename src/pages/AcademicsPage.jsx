import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Download, ExternalLink, FileText, GraduationCap, Search, CheckCircle2 } from 'lucide-react';
import { COURSES_DETAIL } from '../data/blueprintData';
import { QUESTION_PAPERS } from '../data/mockData';

export default function AcademicsPage({ onOpenApply, onOpenExamPortal }) {
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [activeTab, setActiveTab] = useState('courses'); // 'courses', 'syllabus', 'calendar', 'pyqs'

  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              Academics & Curricula • Part 4 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Academic Departments, Syllabi & Examination Cell
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our comprehensive course matrix, intake capacity, semester syllabi, academic calendars, and previous year examination archives.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2">
          {[
            { id: 'courses', label: 'Degree Programs & Intake Matrix' },
            { id: 'syllabus', label: 'Syllabus & Curricula Repository' },
            { id: 'calendar', label: 'Academic Calendar & Datesheet' },
            { id: 'pyqs', label: 'Previous Year Question Papers (PYQs)' }
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

        {/* 1. Courses & Intake Matrix */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COURSES_DETAIL.map((course, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                        {course.affiliation}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold">
                        {course.intake}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{course.name}</h3>
                    <div className="text-xs text-indigo-600 font-medium">{course.college}</div>

                    <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700">
                      <div><strong>Duration:</strong> {course.duration}</div>
                      <div><strong>Eligibility:</strong> {course.eligibility}</div>
                      <div><strong>Annual Tuition:</strong> <span className="font-bold text-slate-900">{course.annualTuition}</span></div>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      <strong>Career Trajectory:</strong> {course.scope}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenApply('apply', course.name)}
                      className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
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

        {/* 2. Syllabus Repository */}
        {activeTab === 'syllabus' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Official Semester Syllabi (NEP 2020 & CBCS Scheme)</h3>
                <p className="text-xs text-slate-500">Download syllabus PDFs or redirect to affiliating university portals</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.hpuniv.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 hover:bg-slate-50"
                >
                  <span>HPU Syllabus Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.himtu.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1 hover:bg-slate-50"
                >
                  <span>HPTU Syllabus Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {COURSES_DETAIL.map((c, i) => (
                <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{c.name}</h4>
                    <div className="text-slate-500 text-[11px] mt-0.5">{c.college} • {c.affiliation}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Downloading official Syllabus PDF: ${c.name}`)}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold transition-colors flex items-center gap-1"
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

        {/* 3. Academic Calendar & Exam Dates */}
        {activeTab === 'calendar' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Academic Calendar Session 2024–25</h3>
              <p className="text-xs text-slate-500">Scheduled in accordance with HPTU, HPU and AMRU notifications</p>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
                  <span className="font-semibold text-slate-700">Commencement of Odd Semester Classes:</span>
                  <span className="font-bold text-indigo-700">1st August 2024</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
                  <span className="font-semibold text-slate-700">Mid-Term House Examinations:</span>
                  <span className="font-bold text-indigo-700">15th - 22nd October 2024</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
                  <span className="font-semibold text-slate-700">End Semester University Practical Exams:</span>
                  <span className="font-bold text-indigo-700">1st - 10th December 2024</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between">
                  <span className="font-semibold text-slate-700">End Semester Theory Examinations:</span>
                  <span className="font-bold text-indigo-700">15th December onwards</span>
                </div>
              </div>

              <button
                onClick={() => alert('Downloading Complete Academic Calendar 2024-25 (PDF)...')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Academic Calendar (PDF)</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">University Result & Marks Verification</h3>
              <p className="text-xs text-slate-500">Official links to check undergraduate and postgraduate result gazettes</p>

              <div className="space-y-3 text-xs">
                <a
                  href="https://www.hpuniv.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 flex items-center justify-between transition-colors block"
                >
                  <div>
                    <div className="font-bold text-slate-900">HPU Shimla Examination Results</div>
                    <div className="text-slate-500 text-[11px]">B.Sc, B.Com, B.A, BCA, M.Sc Chemistry/Physics</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-indigo-600" />
                </a>

                <a
                  href="https://www.himtu.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 flex items-center justify-between transition-colors block"
                >
                  <div>
                    <div className="font-bold text-slate-900">HPTU Hamirpur Result Portal</div>
                    <div className="text-slate-500 text-[11px]">B.Pharmacy, MBA & M.Tech semester marks</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-indigo-600" />
                </a>

                <a
                  href="https://amruhp.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-500 flex items-center justify-between transition-colors block"
                >
                  <div>
                    <div className="font-bold text-slate-900">AMRU Nerchowk Result Portal</div>
                    <div className="text-slate-500 text-[11px]">B.Sc. Nursing & Post Basic B.Sc. gazette</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-indigo-600" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 4. Question Papers (PYQs) */}
        {activeTab === 'pyqs' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Previous Years Question Papers (PYQs) & Model Sets</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {QUESTION_PAPERS.map((q, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{q.subject}</div>
                    <div className="text-[11px] text-slate-500">{q.code} • {q.branch} • {q.semester}</div>
                    <div className="text-[10px] text-indigo-600 font-semibold">{q.year}</div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading question paper: ${q.subject}`)}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
