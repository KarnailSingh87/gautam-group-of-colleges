import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock,
  Mail,
  User,
  Phone,
  BookOpen,
  MapPin
} from 'lucide-react';

export default function ApplyModal({ isOpen, onClose, mode, contextData, preset }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    parentName: '',
    district: 'Hamirpur',
    course: contextData || 'Bachelor of Pharmacy (B.Pharm)',
    category: 'HP Domicile (General)',
    quota: 'Direct Management Merit Quota'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const getModalTitle = () => {
    if (mode === 'apply') return 'Direct Admission & Registration (2025-26)';
    if (mode === 'request-info') return 'Request Official Prospectus & Fee Chart';
    if (mode === 'fee-inquiry') return 'Fee Structure & Scholarship Inquiry';
    if (mode === 'bus-pass') return 'Student Concessional Bus Pass Application';
    return 'Gautam Group Admission Desk';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-slate-950 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-white p-0.5 shadow-sm flex items-center justify-center">
              <img src="/ggc-logo.webp" alt="GGC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                Gautam Group of Colleges, Hamirpur (H.P.)
              </div>
              <div className="text-[10px] text-slate-400">Est. 1999 • Near Bus Stand</div>
            </div>
          </div>

          <h3 className="text-xl font-bold">{getModalTitle()}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {contextData ? `Inquiry regarding: ${contextData}` : 'Admissions open for B.Pharm, B.Sc Nursing, MBA, BCA, M.Sc & BHM.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                <span className="font-bold text-slate-800">Candidate Details</span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct Verified Portal
                </span>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sahil Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Home District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@gmail.com"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Home District</label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                  >
                    <option>Hamirpur</option>
                    <option>Bilaspur</option>
                    <option>Kangra</option>
                    <option>Mandi</option>
                    <option>Una</option>
                    <option>Shimla</option>
                    <option>Solan</option>
                    <option>Chamba</option>
                    <option>Kullu</option>
                    <option>Other State (All India)</option>
                  </select>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest *</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium"
                >
                  <option>B.Pharmacy (4 Years - PCI / HPTU)</option>
                  <option>D.Pharmacy (2 Years - PCI Approved)</option>
                  <option>B.Sc. Nursing (4 Years - INC / AMRU)</option>
                  <option>General Nursing & Midwifery - GNM (3 Years)</option>
                  <option>Master of Business Admin - MBA (2 Years - AICTE/HPTU)</option>
                  <option>Bachelor of Computer Applications - BCA (3 Years)</option>
                  <option>Post Graduate Diploma in Computer Apps - PGDCA</option>
                  <option>M.Sc. Chemistry / Physics / Botany / Zoology</option>
                  <option>Bachelor of Hotel Management - BHM (4 Years)</option>
                  <option>Polytechnic Diploma (Civil, Mechanical, Computer)</option>
                </select>
              </div>

              {/* Quota & Category */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Admission Route</label>
                  <select
                    value={formData.quota}
                    onChange={(e) => setFormData({ ...formData, quota: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                  >
                    <option>Direct Merit / Management Quota</option>
                    <option>HPCET 2025 Counseling</option>
                    <option>AMRU Nursing Entrance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Scholarship Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
                  >
                    <option>HP Domicile (General)</option>
                    <option>HP SC / ST (NSP/e-Kalyan)</option>
                    <option>HP OBC / IRDP / BPL</option>
                    <option>Other State Student</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Registration & Connect with Counselor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1 mt-2">
                <MapPin className="w-3 h-3 text-red-500" />
                <span>Admission Office: Near Bus Stand, Hamirpur (H.P.) | 01972-221493</span>
              </div>

            </form>
          ) : (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">Application Registered Successfully!</h4>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || 'Candidate'}</strong>! Your inquiry for <strong>Gautam Group of Colleges, Hamirpur</strong> has been received by our central admission cell.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Registration Ref:</span>
                  <span className="font-mono font-bold text-slate-900">#GGC-2025-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Program Track:</span>
                  <span className="font-semibold text-slate-900">{formData.course}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Campus Location:</span>
                  <span className="font-semibold text-slate-900">Near Bus Stand, Hamirpur (H.P.)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Admission Hotline:</span>
                  <span className="font-bold text-emerald-600">+91-9418010420</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Return to Gautam Group Homepage
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
