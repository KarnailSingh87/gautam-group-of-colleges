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
  BookOpen
} from 'lucide-react';

export default function ApplyModal({ isOpen, onClose, mode, contextData, preset }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    level: 'Undergraduate',
    program: contextData || 'Artificial Intelligence & Machine Systems',
    term: 'Fall 2025 (Priority)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const getModalTitle = () => {
    if (mode === 'apply') return 'Start Your Application (Fall 2025)';
    if (mode === 'request-info') return 'Request 2025 Academic Viewbook';
    if (mode === 'advising') return 'Book 1-on-1 Academic Advisory';
    if (mode === 'tuition-lock') return 'Lock In Your Scholarship Estimate';
    if (mode === 'event-rsvp') return 'Reserve Guest Pass for Open Day';
    return 'University Admissions Inquiry';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-500/30">
            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
            {preset.name} Admissions
          </div>

          <h3 className="text-xl font-bold">{getModalTitle()}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {contextData ? `Regarding: ${contextData}` : 'Priority enrollment window is now active with rolling admissions.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                <span className="font-semibold text-slate-800">Applicant Information</span>
                <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" /> SSL 256-Bit Encrypted
                </span>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g. Alex"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g. Mercer"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex.mercer@gmail.com"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 012-3456"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Degree Level & Term */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Degree Level</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  >
                    <option>Undergraduate (Freshman)</option>
                    <option>Undergraduate (Transfer)</option>
                    <option>Master's / MBA</option>
                    <option>Doctoral / Ph.D.</option>
                    <option>Executive Certificate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Enrollment Term</label>
                  <select
                    value={formData.term}
                    onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                  >
                    <option>Fall 2025 (Regular Decision)</option>
                    <option>Spring 2026</option>
                    <option>Fall 2026 (Early Action)</option>
                  </select>
                </div>
              </div>

              {/* Intended Major */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Intended Academic Major</label>
                <input
                  type="text"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  placeholder="e.g. Artificial Intelligence, Pre-Med, Economics"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry & Unlock Portal Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Your information is strictly protected and will never be shared.</span>
              </div>

            </form>
          ) : (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.firstName || 'Student'}</strong>! An admissions counselor from the <strong>{preset.name}</strong> office has received your file.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant ID:</span>
                  <span className="font-mono font-bold text-slate-800">#ADM-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Program Track:</span>
                  <span className="font-semibold text-slate-800">{formData.program}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Term:</span>
                  <span className="font-semibold text-slate-800">{formData.term}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Merit Aid Status:</span>
                  <span className="font-bold text-emerald-600">Priority Consideration Assigned</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
