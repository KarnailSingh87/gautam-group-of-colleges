import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Download, 
  CheckCircle2, 
  GraduationCap, 
  UserCheck, 
  FileText, 
  Building2, 
  Ticket, 
  Clock, 
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Printer
} from 'lucide-react';
import { QUESTION_PAPERS, AFFILIATED_COLLEGES } from '../data/mockData';

export default function HimtuServicesModal({ isOpen, onClose, modalType, initialData }) {
  const [rollNumber, setRollNumber] = useState('2024-HPTU-1082');
  const [resultFound, setResultFound] = useState(false);
  const [trackingId, setTrackingId] = useState('HPTU-APP-88492');
  const [trackingFound, setTrackingFound] = useState(false);
  const [pyqSearch, setPyqSearch] = useState('');

  if (!isOpen) return null;

  const handleLookupResult = (e) => {
    e.preventDefault();
    setResultFound(true);
  };

  const handleLookupTracking = (e) => {
    e.preventDefault();
    setTrackingFound(true);
  };

  const filteredPYQs = QUESTION_PAPERS.filter(q => 
    q.subject.toLowerCase().includes(pyqSearch.toLowerCase()) ||
    q.code.toLowerCase().includes(pyqSearch.toLowerCase()) ||
    q.branch.toLowerCase().includes(pyqSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-900">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                HPTU Digital E-Governance Portal
              </div>
              <h3 className="text-lg font-bold">
                {modalType === 'otr' && 'One-Time Registration (OTR) Portal'}
                {modalType === 'results' && 'End-Semester Examination Result Portal'}
                {modalType === 'counseling' && 'HPCET 2025 Counseling & Seat Allotment'}
                {modalType === 'pyq' && 'Question Papers & Syllabi Archive (NEP 2020)'}
                {modalType === 'status' && 'University Application Status Tracker'}
                {modalType === 'colleges' && 'Affiliated & Constituent Colleges Directory'}
                {modalType === 'notice-detail' && 'Official University Circular'}
                {!['otr', 'results', 'counseling', 'pyq', 'status', 'colleges', 'notice-detail'].includes(modalType) && 'University Digital Services'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">

          {/* 1. OTR (One Time Registration) */}
          {modalType === 'otr' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed">
                <strong>Important:</strong> As per HPTU notification, One-Time Registration (OTR) is mandatory for all students appearing in university examinations, counseling, or degree verification.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">New Student Registration</h4>
                  <p className="text-xs text-slate-500">Generate your 12-digit Permanent University Registration Number (PURN).</p>
                  <button onClick={() => alert('Demo: OTR Registration Form loaded')} className="w-full py-2 px-3 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700">
                    New Candidate OTR
                  </button>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Registered Student Login</h4>
                  <p className="text-xs text-slate-500">Access your student dashboard, examination admit cards, and grade cards.</p>
                  <button onClick={() => alert('Demo: OTR Login Portal')} className="w-full py-2 px-3 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800">
                    Sign in to Portal
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. Results Portal */}
          {modalType === 'results' && (
            <div className="space-y-6">
              <form onSubmit={handleLookupResult} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">University Roll Number / Reg. No</label>
                    <input
                      type="text"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                      placeholder="e.g. 2024-HPTU-1082"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Semester</label>
                    <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-blue-500">
                      <option>Semester 4 (June 2025)</option>
                      <option>Semester 3 (Dec 2024)</option>
                      <option>Semester 2 (June 2024)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Fetch Provisional Marks Card</span>
                </button>
              </form>

              {resultFound && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <div className="text-xs text-slate-500">Candidate Name:</div>
                      <div className="text-sm font-bold text-slate-900">Abhishek Sharma</div>
                      <div className="text-[11px] text-slate-500">Roll No: {rollNumber} • B.Tech CSE (NEP 2020)</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                      PASSED (SGPA: 8.84)
                    </span>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">CS-401 Machine Learning</span>
                      <span className="font-bold text-slate-800">Grade: A+ (92/100)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">CS-402 Cloud Computing</span>
                      <span className="font-bold text-slate-800">Grade: A (86/100)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">CS-403 Cyber Security</span>
                      <span className="font-bold text-slate-800">Grade: A+ (94/100)</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button onClick={() => alert('Printing Provisional Marks Card...')} className="flex-1 py-2 px-3 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-1.5">
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Marks Card</span>
                    </button>
                    <button onClick={() => alert('Application for Scrutiny / Re-checking form opened.')} className="flex-1 py-2 px-3 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100">
                      Apply Re-evaluation
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. Question Papers (PYQs) */}
          {modalType === 'pyq' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={pyqSearch}
                  onChange={(e) => setPyqSearch(e.target.value)}
                  placeholder="Search subject e.g. Machine Learning, Data Structures, Pharmacy..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {filteredPYQs.map((q, idx) => (
                  <div key={idx} className="p-3.5 hover:bg-slate-50 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{q.subject}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Code: {q.code} • {q.branch} • {q.semester}
                      </div>
                      <div className="text-[10px] text-blue-600 mt-0.5 font-medium">Session: {q.year}</div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading Question Paper: ${q.subject} (${q.code})`)}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-bold transition-colors flex items-center gap-1 text-[11px]"
                    >
                      <Download className="w-3 h-3" />
                      <span>PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Application Status Tracker */}
          {modalType === 'status' && (
            <div className="space-y-5">
              <form onSubmit={handleLookupTracking} className="flex gap-2">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Application / Grievance ID"
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Track
                </button>
              </form>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Service: <strong>Migration & Degree Certificate</strong></span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">In Progress</span>
                </div>

                {/* Progress Steps */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">Application Submitted & Fee Verified (10 Nov 2026)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">Academic Records Verified by Deputy Registrar</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-blue-700">
                    <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                    <span>Printed & Out for Speed Post Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Affiliated Colleges Directory */}
          {modalType === 'colleges' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500">
                Directory of 42+ constituent and affiliated technical institutions across Himachal Pradesh:
              </div>
              <div className="space-y-3">
                {AFFILIATED_COLLEGES.map((col) => (
                  <div key={col.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{col.name}</h4>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold whitespace-nowrap">
                        {col.rating}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 flex items-center gap-1">
                      <span>📍 {col.location}</span>
                      <span>•</span>
                      <span className="text-slate-500">{col.type}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      <strong>Offered Tracks:</strong> {col.programs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. HPCET Counseling & Seat Allotment */}
          {modalType === 'counseling' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900 space-y-2">
                <div className="font-bold text-sm">Himachal Pradesh Common Entrance Test (HPCET 2025)</div>
                <p>Centralized Counseling for B.Tech, B.Pharmacy, MBA, and MCA across Government & Private Technical Institutions.</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Round-1 Seat Allotment Result:</span>
                  <span className="font-bold text-emerald-600">Published (Download Letter)</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Round-2 Option Entry & Choice Filling:</span>
                  <span className="font-bold text-blue-600">Active until Dec 20, 2026</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Vacant Seats Matrix for Spot Round:</span>
                  <span className="font-bold text-slate-700">Display on Dec 24, 2026</span>
                </div>
              </div>

              <button
                onClick={() => alert('Redirecting to Centralized Counseling Allotment Engine...')}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs"
              >
                Enter Counseling Seat Choice Filling
              </button>
            </div>
          )}

          {/* 7. Notice Detail */}
          {modalType === 'notice-detail' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
                  Official Notification
                </span>
                <h4 className="font-bold text-sm text-slate-900">{initialData || 'Notification regarding Examination Session'}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Controller of Examinations, Himachal Pradesh Technical University, has issued this notification for the compliance of all constituent and affiliated institutions.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  Signed: Controller of Examinations, HPTU Hamirpur.
                </div>
              </div>

              <button
                onClick={() => alert('Downloading official PDF circular...')}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Gazette Copy (PDF)</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
