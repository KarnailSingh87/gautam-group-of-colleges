import React, { useState } from 'react';
import { Mail, Phone, Search, Filter, GraduationCap, Award, BookOpen, ShieldCheck, UserCheck } from 'lucide-react';
import { FACULTY_MEMBERS, INSTITUTION_INFO } from '../data/blueprintData';
import { getCdnUrl } from '../utils/cloudinary';

export default function FacultyPage() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = [
    'All',
    'Department of Physics',
    'Department of Botany',
    'Department of Chemistry',
    'Department of Zoology',
    'Department of Nursing (Gautam College of Nursing)',
    'Governing Council & Administration',
    'Collegiate Studies & Other Departments'
  ];

  const filteredFaculty = FACULTY_MEMBERS.filter((member) => {
    const matchesDept = 
      selectedDept === 'All' || 
      member.dept.toLowerCase().includes(selectedDept.toLowerCase()) ||
      (selectedDept === 'Collegiate Studies & Other Departments' && !['physics', 'botany', 'chemistry', 'zoology', 'nursing', 'governing'].some(d => member.dept.toLowerCase().includes(d)));
    
    const matchesQuery = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.phone && member.phone.includes(searchQuery));

    return matchesDept && matchesQuery;
  });

  return (
    <div className="py-12 bg-slate-50 text-slate-900 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#1b327b] via-[#15234d] to-[#0f172a] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/50">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              Gautam Group of Colleges • Faculty & Staff Directory
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight font-['Roboto_Condensed',sans-serif]">
              Faculty & Academic Leadership
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Official faculty roster as published by the college administration across Physics, Botany, Chemistry, Zoology, Nursing, Management, and Humanities faculties.
            </p>
          </div>
        </div>

        {/* Leadership Highlight Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border-2 border-[#ea580c]/30 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <img 
                src={getCdnUrl('/dignitaries/dr_rajneesh_gautam.png')} 
                alt="Dr. Rajneesh Gautam"
                className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-[#ea580c]/30 shadow-xs shrink-0" 
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">
                  Head of Institution
                </span>
                <h3 className="text-lg font-black text-slate-900">Dr. Rajneesh Gautam</h3>
                <div className="text-xs font-bold text-slate-700">Principal cum Secretary</div>
                <div className="text-xs text-slate-500">Ph.D., M.Sc. • Gautam Group of Colleges</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <a href="tel:+919418010420" className="flex items-center gap-1.5 hover:text-[#ea580c] font-medium">
                <Phone className="w-3.5 h-3.5 text-[#ea580c]" /> +91-9418010420
              </a>
              <a href="mailto:ggchmr@gmail.com" className="flex items-center gap-1.5 hover:text-[#ea580c] font-medium">
                <Mail className="w-3.5 h-3.5 text-[#ea580c]" /> ggchmr@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-blue-900/20 shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1b327b] flex items-center justify-center font-black text-xl shrink-0">
                PS
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Faculty of Nursing
                </span>
                <h3 className="text-lg font-black text-slate-900">Mrs. Poonam Sharma</h3>
                <div className="text-xs font-bold text-slate-700">Principal / Associate Professor</div>
                <div className="text-xs text-slate-500">M.Sc Maternal Health Nursing • Gautam College of Nursing</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <a href="tel:+919816687100" className="flex items-center gap-1.5 hover:text-blue-900 font-medium">
                <Phone className="w-3.5 h-3.5 text-blue-900" /> +91-9816687100
              </a>
              <span className="text-[11px] text-slate-500 italic">
                * Listed in college records
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name, subject, or qualification..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent"
              />
            </div>

            {/* Department Quick Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <Filter className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
              >
                {departments.map((d, i) => (
                  <option key={i} value={d}>{d}</option>
                ))}
              </select>
            </div>

          </div>

          <div className="text-xs text-slate-500">
            Showing <strong>{filteredFaculty.length}</strong> academic faculty members based on your selection.
          </div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFaculty.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#ea580c] group-hover:text-white transition-colors">
                    {member.name.replace('Dr. ', '').replace('Mrs. ', '').replace('Mr. ', '')[0] || 'G'}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#ea580c] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs text-slate-600 font-semibold">{member.designation}</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div>
                    <strong className="text-slate-800">Department:</strong>{' '}
                    <span className="text-[#1b327b] font-medium">{member.dept}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Qualification:</strong>{' '}
                    <span className="font-mono text-slate-700">{member.qualification}</span>
                  </div>
                  {member.experience && (
                    <div>
                      <strong className="text-slate-800">Specialization:</strong> {member.experience}
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Footer on Card */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                {member.phone ? (
                  <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-700 hover:text-[#ea580c] flex items-center gap-1 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
                    <span>{member.phone}</span>
                  </a>
                ) : (
                  <span className="text-slate-400">Via College Office</span>
                )}

                <a href={`mailto:${member.email || 'ggchmr@gmail.com'}`} className="text-slate-500 hover:text-blue-900">
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Data Notice Callout */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Institutional Verification Notice:</strong> Faculty details and departmental designations are sourced from the college's published archives and third-party education disclosures. Final official rosters and teaching loads are updated annually by the Gautam College Principal's Office.
          </div>
        </div>

      </div>
    </div>
  );
}
