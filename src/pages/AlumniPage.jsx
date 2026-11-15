import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Building2, 
  Briefcase, 
  Mail, 
  Phone, 
  Send,
  Star
} from 'lucide-react';
import { ALUMNI_TESTIMONIALS } from '../data/mockData';

export default function AlumniPage({ onOpenApply }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Pharmacy',
    passingYear: '2023',
    currentCompany: '',
    designation: '',
    location: ''
  });
  const [registered, setRegistered] = useState(false);
  const [memberId, setMemberId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `GGC-ALUMNI-${Math.floor(10000 + Math.random() * 90000)}`;
    setMemberId(id);
    setRegistered(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Gautam Alumni Association (GAA)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              25,000+ Alumni Across The Globe
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connecting doctors, nursing officers, pharmaceutical scientists, corporate managers, and entrepreneurs graduated from Gautam Group of Colleges since 1999.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center shrink-0">
            <div className="text-3xl font-black text-amber-300">25,000+</div>
            <div className="text-xs font-bold text-white mt-0.5">Alumni Network</div>
            <div className="text-[11px] text-slate-300">In 18+ Countries</div>
          </div>
        </div>

        {/* Notable Alumni Cards */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">Distinguished Alumni Spotlights</h2>
            <p className="text-xs text-slate-600">Graduates making lasting contributions in top healthcare & corporate institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALUMNI_TESTIMONIALS.map((alumni) => (
              <div
                key={alumni.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-sm"
                    />
                    <div>
                      <h3 className="font-bold text-sm text-slate-900">{alumni.name}</h3>
                      <div className="text-xs text-indigo-600 font-semibold">{alumni.degree}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{alumni.role || alumni.currentRole}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    “{alumni.quote}”
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{alumni.company}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-extrabold text-[10px]">
                    Verified Alum
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Registration Form */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="max-w-xl mb-6">
            <h2 className="text-xl font-bold text-slate-900">Join the Official Alumni Association</h2>
            <p className="text-xs text-slate-600 mt-1">
              Register to receive the alumni directory, invitations to annual campus reunions, mentorship opportunities, and the Silver Jubilee Alumni Privileges Card.
            </p>
          </div>

          {registered ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center max-w-lg mx-auto space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-950">Alumni Registration Successful!</h3>
              <div className="text-xs text-emerald-800">
                Welcome back to the Gautam collegiate fraternity, <strong>{formData.name}</strong>.
              </div>
              <div className="p-3 rounded-xl bg-white border border-emerald-200 font-mono text-sm font-bold text-indigo-700">
                Membership Card ID: {memberId}
              </div>
              <p className="text-[11px] text-slate-500">
                A verification confirmation has been sent to your registered email <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => setRegistered(false)}
                className="mt-2 text-xs font-bold text-indigo-600 hover:underline"
              >
                Register another alumnus
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Pooja Dhiman"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alumni@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Program Studied *</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option>B.Pharmacy (PCI / HPTU)</option>
                    <option>D.Pharmacy</option>
                    <option>B.Sc. Nursing (INC / AMRU)</option>
                    <option>GNM Diploma</option>
                    <option>MBA (AICTE / HPTU)</option>
                    <option>BCA / PGDCA (HPU)</option>
                    <option>M.Sc Sciences</option>
                    <option>Hotel Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Passing Year *</label>
                  <input
                    type="number"
                    min="1999"
                    max="2025"
                    required
                    value={formData.passingYear}
                    onChange={(e) => setFormData({ ...formData, passingYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current Organization</label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                    placeholder="e.g. Fortis / Sun Pharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Clinical Nursing Officer"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Country</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Chandigarh / New Delhi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Alumni Registration</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
