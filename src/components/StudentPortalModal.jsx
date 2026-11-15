import React from 'react';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  GraduationCap, 
  CreditCard, 
  Award, 
  CheckCircle,
  Database,
  Lock
} from 'lucide-react';
import { STUDENT_PORTAL_LINKS } from '../data/blueprintData';

export default function StudentPortalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200/80 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Official Student Portals & E-Governance</h3>
              <p className="text-xs text-slate-300">Mandatory Government of India & University Access Points</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Quick Notice Banner */}
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-950">
              <span className="font-bold">National Higher Education Mandate (NEP 2020):</span> All currently enrolled students in Gautam Group of Colleges must link their <strong>Academic Bank of Credits (ABC) / APAAR ID</strong> with their college roll number for exam hall tickets and DigiLocker certificate issuance.
            </div>
          </div>

          {/* Statutory Links List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Statutory E-Governance & Academic Services
            </h4>
            
            {STUDENT_PORTAL_LINKS.map((portal, idx) => (
              <a
                key={idx}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {portal.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {portal.desc}
                  </p>
                  <div className="text-[11px] text-indigo-600 font-mono flex items-center gap-1">
                    <span>{portal.url}</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 transition-all shrink-0">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Internal Campus ERP Access */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-indigo-600" />
                Internal GGC Campus Management Portal (ERP)
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                Active Session
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Access your college biometric attendance records, internal sessional marks, digital fee receipts, and library OPAC book status using your University Roll Number.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={() => {
                  alert("Connecting to GGC Student Information System (SIS)... Please have your Enrollment No. & DOB ready.");
                }}
                className="py-2.5 px-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-100 text-center transition"
              >
                Student ERP Login
              </button>
              <button
                onClick={() => {
                  alert("Connecting to GGC Faculty & Staff Attendance Portal...");
                }}
                className="py-2.5 px-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-100 text-center transition"
              >
                Faculty / Staff Login
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between text-xs text-slate-500">
          <span>Gautam Group of Colleges • Official E-Governance Gateway</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
