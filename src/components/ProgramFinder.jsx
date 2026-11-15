import React, { useState, useMemo } from 'react';
import { 
  Search, 
  GraduationCap, 
  Clock, 
  BookMarked, 
  CheckCircle, 
  DollarSign, 
  ArrowRight, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
  Filter,
  TrendingUp,
  Award
} from 'lucide-react';
import { PROGRAMS } from '../data/mockData';

export default function ProgramFinder({ onOpenApply }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');

  const levels = ['All', 'Undergraduate', 'Graduate', 'Professional Paramedical', 'Postgraduate (Sciences)'];
  const departments = [
    'All',
    'Pharmacy',
    'Nursing',
    'Management',
    'Sciences',
    'Hotel'
  ];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((p) => {
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLevel = selectedLevel === 'All' || p.level.toLowerCase().includes(selectedLevel.toLowerCase());
      const matchesDept = selectedDept === 'All' || p.department.toLowerCase().includes(selectedDept.toLowerCase());

      return matchesSearch && matchesLevel && matchesDept;
    });
  }, [searchQuery, selectedLevel, selectedDept]);

  return (
    <section id="programs" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Admissions Session 2025-26
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Accredited Degrees & Professional Diplomas
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Browse Pharmacy, Nursing, Management, IT, Life Sciences, and Hospitality programs approved by AICTE, PCI, INC & affiliated to HPTU, HPU & AMRU.
          </p>
        </div>

        {/* Search & Filter Control Bar (Modern 21st.dev Style) */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-md border border-slate-200/90 mb-10">
          
          {/* Main Search Input */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course by name (e.g. B.Pharmacy, B.Sc Nursing, MBA, BCA, M.Sc Chemistry, Hotel Management)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-slate-800 placeholder-slate-400 shadow-inner bg-slate-50/50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-100"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-slate-100">
            
            {/* Degree Level Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Stream / Level:
              </span>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedLevel === lvl
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">Discipline:</span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedDept === dept
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dept === 'All' ? 'All Disciplines' : dept}
                </button>
              ))}
            </div>

          </div>

          {/* Results count feedback */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Showing <strong>{filteredPrograms.length}</strong> matching programs at Gautam Group of Colleges</span>
            {(searchQuery || selectedLevel !== 'All' || selectedDept !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('All');
                  setSelectedDept('All');
                }}
                className="text-indigo-600 hover:underline font-bold"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Tag */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
                  
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Department */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[11px] font-semibold text-indigo-200 uppercase tracking-wider">
                      {prog.department}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold">
                      {prog.level}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {prog.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prog.desc}
                  </p>

                  {/* Salary & Outcome Badge */}
                  <div className="mt-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      Placement Outlook
                    </span>
                    <span className="text-xs font-extrabold text-emerald-700">
                      {prog.salary}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenApply('request-info', prog.title)}
                  className="text-xs font-bold text-slate-700 hover:text-indigo-600 transition-colors flex items-center gap-1"
                >
                  <span>Syllabus & Eligibility</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenApply('apply', prog.title)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all"
                >
                  Apply Online
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Catalog Action Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div>
            <h4 className="text-xl font-bold">Have questions about seats, eligibility or HPCET/AMRU cut-offs?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with our senior admission counselors at Gautam Group Campus, Near Bus Stand, Hamirpur.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+919418010420"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 transition-colors shadow text-center"
            >
              Call: +91-9418010420
            </a>
            <button
              onClick={() => onOpenApply('catalog')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors"
            >
              Download 2025 Prospectus
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
