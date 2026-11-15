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
  Printer,
  CreditCard,
  Lock,
  Phone,
  FileCheck
} from 'lucide-react';
import { QUESTION_PAPERS, AFFILIATED_COLLEGES } from '../data/mockData';
import { getCdnUrl } from '../utils/cloudinary';

export default function HimtuServicesModal({ isOpen, onClose, modalType, initialData }) {
  const [otrView, setOtrView] = useState('menu'); // 'menu', 'register', 'login', 'slip'
  const [otrRegData, setOtrRegData] = useState({ name: '', fatherName: '', mobile: '', course: 'B.Pharmacy (4 Years)' });
  const [generatedPURN, setGeneratedPURN] = useState('');

  const [rollNumber, setRollNumber] = useState('2024-HPTU-1082');
  const [resultFound, setResultFound] = useState(false);
  const [reEvalApplied, setReEvalApplied] = useState(false);

  const [trackingId, setTrackingId] = useState('HPTU-APP-88492');
  const [trackingFound, setTrackingFound] = useState(false);
  const [pyqSearch, setPyqSearch] = useState('');

  // Fee payment state
  const [feeStudent, setFeeStudent] = useState({ roll: '', name: '', sem: 'Semester 2', amount: '₹38,500' });
  const [feePaidSuccess, setFeePaidSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLookupResult = (e) => {
    e.preventDefault();
    setResultFound(true);
  };

  const handleLookupTracking = (e) => {
    e.preventDefault();
    setTrackingFound(true);
  };

  const handleOtrSubmit = (e) => {
    e.preventDefault();
    const purn = `PURN-2025-HMR-${Math.floor(10000 + Math.random() * 90000)}`;
    setGeneratedPURN(purn);
    setOtrView('slip');
  };

  const handleFeePaymentSubmit = (e) => {
    e.preventDefault();
    setFeePaidSuccess(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPaper = (paper) => {
    const element = document.createElement('a');
    const file = new Blob([
      `GAUTAM GROUP OF COLLEGES, HAMIRPUR (H.P.)\n` +
      `Examination Question Paper Repository\n` +
      `Subject: ${paper.subject}\n` +
      `Course Code: ${paper.code}\n` +
      `Semester: ${paper.semester} | Branch: ${paper.branch}\n` +
      `Session: ${paper.year}\n` +
      `===================================================\n` +
      `Instructions: Answer any FIVE full questions.\n` +
      `Q1. Define key principles and formulate practical methodologies.\n` +
      `Q2. Describe application paradigms under NEP 2020 curriculum guidelines.\n`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${paper.code}_Question_Paper.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
        <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow">
              <img src={getCdnUrl('/gautam_group_colleges_logo.png')} alt="GGC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                Gautam Group of Colleges, Hamirpur
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                {modalType === 'otr' && 'One-Time Registration (OTR) Portal'}
                {modalType === 'results' && 'End-Semester Examination Result Portal'}
                {modalType === 'counseling' && 'HPCET & AMRU Counseling Portal'}
                {modalType === 'pyq' && 'Question Papers & Syllabi Archive'}
                {modalType === 'status' && 'Application Status Tracker'}
                {modalType === 'colleges' && 'Constituent & Affiliated Institutes'}
                {modalType === 'notice-detail' && 'Official Circular / Gazette Notice'}
                {modalType === 'fee-pay' && 'Online Student Fee Payment Portal'}
                {modalType === 'scholarship' && 'HP State Post-Matric Scholarship Desk'}
                {modalType === 'placements' && 'Training & Campus Placement Cell'}
                {!['otr', 'results', 'counseling', 'pyq', 'status', 'colleges', 'notice-detail', 'fee-pay', 'scholarship', 'placements'].includes(modalType) && 'Student Digital Services'}
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
              {otrView === 'menu' && (
                <>
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 leading-relaxed">
                    <strong>Mandatory University Notice:</strong> One-Time Registration (OTR) is required for all students of Gautam College of Pharmacy, Nursing, GIMT, and Degree College for examination enrollment, internal assessment verification, and scholarship disbursal.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 transition-all space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">New Student Registration</h4>
                      <p className="text-xs text-slate-500">Generate your Permanent University Registration Number (PURN).</p>
                      <button 
                        onClick={() => setOtrView('register')} 
                        className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
                      >
                        Register New Candidate
                      </button>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-500 transition-all space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Registered Student Login</h4>
                      <p className="text-xs text-slate-500">Access your academic attendance, internal marks, and exam admit cards.</p>
                      <button 
                        onClick={() => setOtrView('login')} 
                        className="w-full py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                      >
                        Sign In to ERP Portal
                      </button>
                    </div>
                  </div>
                </>
              )}

              {otrView === 'register' && (
                <form onSubmit={handleOtrSubmit} className="space-y-4">
                  <div className="text-xs font-bold text-slate-700 border-b pb-2 flex justify-between items-center">
                    <span>New Candidate Enrollment Form</span>
                    <button type="button" onClick={() => setOtrView('menu')} className="text-indigo-600 hover:underline">
                      Back
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={otrRegData.name} 
                        onChange={(e) => setOtrRegData({ ...otrRegData, name: e.target.value })} 
                        placeholder="e.g. Rohit Kumar" 
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Father's Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={otrRegData.fatherName} 
                        onChange={(e) => setOtrRegData({ ...otrRegData, fatherName: e.target.value })} 
                        placeholder="e.g. Sh. Ramesh Kumar" 
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile (Aadhaar Linked) *</label>
                      <input 
                        type="tel" 
                        required 
                        value={otrRegData.mobile} 
                        onChange={(e) => setOtrRegData({ ...otrRegData, mobile: e.target.value })} 
                        placeholder="+91 98XXX XXXXX" 
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Enrolled Course</label>
                      <select 
                        value={otrRegData.course} 
                        onChange={(e) => setOtrRegData({ ...otrRegData, course: e.target.value })} 
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                      >
                        <option>B.Pharmacy (Gautam College of Pharmacy)</option>
                        <option>B.Sc. Nursing (Gautam College of Nursing)</option>
                        <option>MBA (Gautam Inst of Management)</option>
                        <option>BCA / PGDCA (Information Tech)</option>
                        <option>M.Sc. Chemistry / Physics / Botany</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 shadow"
                  >
                    Generate Permanent Registration Number (PURN)
                  </button>
                </form>
              )}

              {otrView === 'login' && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-slate-700 border-b pb-2 flex justify-between items-center">
                    <span>Student ERP Login</span>
                    <button type="button" onClick={() => setOtrView('menu')} className="text-indigo-600 hover:underline">
                      Back
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">PURN / University Roll No</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2024-HPTU-1082" 
                      defaultValue="2024-HPTU-1082" 
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Password / Date of Birth</label>
                    <input 
                      type="password" 
                      placeholder="DD/MM/YYYY" 
                      defaultValue="15082003" 
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" 
                    />
                  </div>

                  <button 
                    onClick={() => {
                      setRollNumber('2024-HPTU-1082');
                      setResultFound(true);
                      setOtrView('menu');
                    }} 
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
                  >
                    Authenticate & Open Student Dashboard
                  </button>
                </div>
              )}

              {otrView === 'slip' && (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Permanent University Registration Slip Issued</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-slate-800 bg-white p-3 rounded-xl border border-emerald-100">
                    <div><strong>Assigned PURN:</strong> <span className="font-mono text-indigo-700 font-bold">{generatedPURN}</span></div>
                    <div><strong>Candidate:</strong> {otrRegData.name || 'Rohit Kumar'}</div>
                    <div><strong>Father's Name:</strong> {otrRegData.fatherName || 'Sh. Ramesh Kumar'}</div>
                    <div><strong>Course:</strong> {otrRegData.course}</div>
                    <div><strong>Institution:</strong> Gautam Group of Colleges, Hamirpur (H.P.)</div>
                  </div>
                  <button 
                    onClick={handlePrint}
                    className="w-full py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Registration Slip</span>
                  </button>
                </div>
              )}
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
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Semester Session</label>
                    <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-indigo-500">
                      <option>Semester 4 (June 2025)</option>
                      <option>Semester 3 (Dec 2024)</option>
                      <option>Semester 2 (June 2024)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Fetch Official Provisional Marks Card</span>
                </button>
              </form>

              {resultFound && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div>
                      <div className="text-xs text-slate-500">Candidate Name:</div>
                      <div className="text-sm font-bold text-slate-900">Rohit Sharma</div>
                      <div className="text-[11px] text-slate-500">Roll No: {rollNumber} • Gautam College of Pharmacy (HPTU)</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                      PASSED (SGPA: 8.84)
                    </span>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">BP-401T Pharmaceutical Chemistry</span>
                      <span className="font-bold text-slate-800">Grade: A+ (91/100)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">BP-402T Pharmacology - I</span>
                      <span className="font-bold text-slate-800">Grade: A (86/100)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">BP-403T Pharmacognosy & Phytochemistry</span>
                      <span className="font-bold text-slate-800">Grade: A+ (94/100)</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button 
                      onClick={handlePrint}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Marks Card</span>
                    </button>
                    <button 
                      onClick={() => setReEvalApplied(true)} 
                      className="flex-1 py-2 px-3 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100"
                    >
                      {reEvalApplied ? 'Scrutiny Request Submitted' : 'Apply Re-evaluation / Scrutiny'}
                    </button>
                  </div>

                  {reEvalApplied && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                      ✓ Re-evaluation request registered with HPTU Controller of Examinations. Fee receipt generated.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 3. Online Fee Payment Portal */}
          {modalType === 'fee-pay' && (
            <div className="space-y-4">
              {!feePaidSuccess ? (
                <form onSubmit={handleFeePaymentSubmit} className="space-y-3">
                  <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950">
                    <strong>GGC Secure Gateway:</strong> Pay semester tuition fees, hostel dues, or examination fees online. Instant digital receipt issued.
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Student University Roll No / PURN *</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue="2024-HPTU-1082" 
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Student Name</label>
                      <input 
                        type="text" 
                        required 
                        defaultValue="Rohit Sharma" 
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Semester</label>
                      <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white">
                        <option>Even Semester (Spring 2025)</option>
                        <option>Odd Semester (Fall 2025)</option>
                        <option>Hostel Fee Installment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Amount Payable (INR)</label>
                    <input 
                      type="text" 
                      readOnly 
                      value="₹38,500 (Semester Tuition & Lab Charges)" 
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-100 font-bold text-slate-800" 
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Payment (UPI / NetBanking / Debit Card)</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Fee Payment Successful!</h4>
                  <div className="text-xs text-slate-600 text-left bg-white p-3 rounded-xl border border-emerald-100 space-y-1">
                    <div><strong>Transaction ID:</strong> <span className="font-mono">GGC-PAY-99381204</span></div>
                    <div><strong>Amount Paid:</strong> ₹38,500</div>
                    <div><strong>College:</strong> Gautam Group of Colleges, Hamirpur</div>
                    <div><strong>Status:</strong> Reconciled with Accounts Office</div>
                  </div>
                  <button 
                    onClick={handlePrint} 
                    className="w-full py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Download Official Fee Receipt</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. Question Papers (PYQs) */}
          {modalType === 'pyq' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={pyqSearch}
                  onChange={(e) => setPyqSearch(e.target.value)}
                  placeholder="Search subject e.g. Pharmaceutics, Medical Surgical Nursing, Data Structures..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                {filteredPYQs.map((q, idx) => (
                  <div key={idx} className="p-3.5 hover:bg-slate-50 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{q.subject}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Code: {q.code} • {q.branch} • {q.semester}
                      </div>
                      <div className="text-[10px] text-indigo-600 mt-0.5 font-medium">Session: {q.year}</div>
                    </div>
                    <button
                      onClick={() => handleDownloadPaper(q)}
                      className="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold transition-colors flex items-center gap-1 text-[11px]"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Application Status Tracker */}
          {modalType === 'status' && (
            <div className="space-y-5">
              <form onSubmit={handleLookupTracking} className="flex gap-2">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Application / Admission Form ID"
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs"
                >
                  Track
                </button>
              </form>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">Service: <strong>Provisional Degree & Migration Certificate</strong></span>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">In Progress</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">Application Submitted at GGC Hamirpur Office</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">No Dues Cleared from Library & Laboratory In-charge</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-indigo-700">
                    <div className="w-4 h-4 rounded-full border-2 border-indigo-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                    </div>
                    <span>Forwarded to HPTU / HPU Registrar for Official Endorsement</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. HP State Scholarship Desk */}
          {modalType === 'scholarship' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
                <div className="font-bold text-sm">HP State Post-Matric Scholarship Scheme (NSP & e-Kalyan)</div>
                <p>Eligible Himachali students belonging to SC, ST, OBC, EWS, IRDP, and BPL categories are eligible for tuition fee waiver and monthly maintenance allowance.</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Aadhaar Biometric Authentication Desk:</span>
                  <span className="font-bold text-emerald-600">Active at College Admin Block</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Last Date for Online Form Verification:</span>
                  <span className="font-bold text-slate-800">31st December 2025</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span>Nodal Officer Contact:</span>
                  <span className="font-bold text-indigo-700">Prof. R.S. Thakur (Ext: 204)</span>
                </div>
              </div>

              <a
                href="https://scholarships.gov.in/" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>Open National Scholarship Portal (NSP)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* 7. Training & Placements */}
          {modalType === 'placements' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
                <div className="font-bold text-sm">Gautam Group Central Placement Cell</div>
                <p className="mt-1">Over 25,000 alumni serving in top multinational pharmaceutical firms, super-specialty hospitals, and Fortune 500 corporations.</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-slate-500">Highest Package</div>
                  <div className="text-lg font-black text-indigo-700 mt-0.5">₹12.4 LPA</div>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-slate-500">Recruiting Partners</div>
                  <div className="text-lg font-black text-emerald-700 mt-0.5">100+ Companies</div>
                </div>
              </div>

              <div className="text-xs text-slate-600">
                <strong>Key Recruiters:</strong> Sun Pharma, Cipla, Macleods, Dr. Reddy's, Fortis Healthcare, Apollo Hospitals, Max Super Specialty, Wipro, Infosys, Tech Mahindra, HDFC Bank.
              </div>
            </div>
          )}

          {/* 8. Notice Detail */}
          {modalType === 'notice-detail' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
                  Official Gazette Circular
                </span>
                <h4 className="font-bold text-sm text-slate-900">{initialData || 'Notification regarding Examination Session'}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Issued under the authority of the Management & Registrar, Gautam Group of Colleges, Hamirpur (H.P.), for the strict compliance of all faculty, staff, and enrolled students.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex justify-between">
                  <span>Campus Office: Near Bus Stand, Hamirpur</span>
                  <span className="font-bold text-slate-700">Signed: Registrar, GGC</span>
                </div>
              </div>

              <button
                onClick={handlePrint}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Circular (PDF)</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
