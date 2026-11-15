import React from 'react';
import { Mail, Award, BookOpen, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/blueprintData';

export default function FacultyPage() {
  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              Faculty & Staff Directory • Part 6 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Distinguished Academic Faculty & Leadership
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our tenured faculty members combine doctoral research preeminence, hospital clinical leadership, and industrial formulation expertise.
            </p>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                    {member.name.split(' ')[1]?.[0] || 'G'}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">{member.name}</h3>
                    <div className="text-xs text-indigo-600 font-semibold">{member.designation}</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <div><strong>Department:</strong> <span className="text-slate-800 font-medium">{member.dept}</span></div>
                  <div><strong>Qualification:</strong> <span className="text-slate-800 font-medium">{member.qualification}</span></div>
                  <div><strong>Experience:</strong> {member.experience}</div>
                  <div><strong>Publications:</strong> {member.pubs}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline flex items-center gap-1 font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Teaching Staff Directory */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Administrative & Technical Support Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl space-y-1 border border-slate-100">
              <div className="font-bold text-slate-900">Sh. Kuldeep Sharma</div>
              <div className="text-slate-500">Superintendent (Administration & HPTU Cell)</div>
              <div className="text-indigo-600 text-[11px]">admin@ggchmr.com</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl space-y-1 border border-slate-100">
              <div className="font-bold text-slate-900">Smt. Meenakshi Dhiman</div>
              <div className="text-slate-500">Senior Librarian (Central Library & Book Bank)</div>
              <div className="text-indigo-600 text-[11px]">library@ggchmr.com</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl space-y-1 border border-slate-100">
              <div className="font-bold text-slate-900">Sh. Satish Kumar</div>
              <div className="text-slate-500">Chief Accounts Officer & Scholarship Registrar</div>
              <div className="text-indigo-600 text-[11px]">accounts@ggchmr.com</div>
            </div>
          </div>
        </div>

        {/* Careers & Join Us */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Careers at Gautam Group of Colleges</h2>
            <p className="text-xs text-slate-600">Inviting applications for Assistant Professors in Pharmacy (Pharmaceutics / Pharmacology) and Nursing (Medical-Surgical).</p>
          </div>
          <a
            href="mailto:ggchmr@gmail.com?subject=Faculty%20Application%20GGC"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs whitespace-nowrap shadow"
          >
            Email Resume to Principal
          </a>
        </div>

      </div>
    </div>
  );
}
