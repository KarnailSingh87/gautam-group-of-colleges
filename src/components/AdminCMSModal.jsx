import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  FileText, 
  Users, 
  Image as ImageIcon, 
  Calendar,
  Save,
  KeyRound,
  CheckSquare,
  Square,
  Download,
  AlertCircle
} from 'lucide-react';
import { NOTICES } from '../data/mockData';

export default function AdminCMSModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState('checklist'); // 'checklist', 'notices', 'faculty', 'gallery'
  const [statusMessage, setStatusMessage] = useState('');

  // Office data checklist items
  const [checklist, setChecklist] = useState([
    { id: 1, title: 'Official Logo & Crest (High-Res Vector / PNG)', status: 'Active on Site', checked: true },
    { id: 2, title: 'Real Campus Photos & Drone Photography', status: 'Active on Site', checked: true },
    { id: 3, title: 'Principal Portrait Photo & Signed Welcome Message', status: 'Message Staged / Photo Needed', checked: false },
    { id: 4, title: 'HPTU, HPU & AMRU Affiliation Letters (PDFs)', status: 'Portal Links Active / Official PDFs Needed', checked: false },
    { id: 5, title: 'AICTE, PCI, INC & HPNRC Regulatory Orders (PDFs)', status: 'Council Links Active / Scans Needed', checked: false },
    { id: 6, title: 'Sanctioned Seat Intake & Eligibility Matrix 2025–26', status: 'Staged / Exact Seats to Verify', checked: true },
    { id: 7, title: 'Session Fee Structure & Bank Payment Account / UPI QR', status: 'Estimator Active / Office Bank to Fill', checked: false },
    { id: 8, title: 'Full Faculty Directory with Degrees & Passport Photos', status: '15+ Profiles Staged / Photos Needed', checked: false },
    { id: 9, title: 'Curriculum Syllabi PDFs & Academic Calendar 2025–26', status: 'Active in Downloads', checked: true },
    { id: 10, title: 'Central Library Volumes Count & Timings', status: 'NDL/SWAYAM Active / 18,500+ Count Staged', checked: true },
    { id: 11, title: 'Hospital MoU (Dr. Radhakrishnan GMC Hamirpur) & Hostels', status: 'Staged / Warden Numbers Needed', checked: false },
    { id: 12, title: 'Recruiter Audit Report & Placement Statistics', status: 'Active on Site', checked: true },
    { id: 13, title: 'Statutory Anti-Ragging, ICC & RTI Committee Member Lists', status: '1800 Helpline Active / Member Names Needed', checked: false },
    { id: 14, title: 'Official Phone Numbers, Emails, Bus Stand Address & Map', status: 'Active on Site', checked: true },
    { id: 15, title: 'Official Social Media Handles (Facebook, IG, YouTube)', status: 'Icons Active / Handles to Link', checked: false }
  ]);

  // Form states for new entries
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Admissions',
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    isNew: true
  });

  const [newFaculty, setNewFaculty] = useState({
    name: '',
    designation: 'Assistant Professor',
    department: 'Gautam College of Pharmacy',
    qualification: 'M.Pharm, Ph.D.'
  });

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1999' || passcode.toLowerCase() === 'admin' || passcode === '') {
      setIsAuthenticated(true);
      setStatusMessage('');
    } else {
      setStatusMessage('Invalid Administrative PIN. (Default: 1999)');
    }
  };

  const toggleCheck = (id) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleDownloadRequisition = () => {
    const textContent = `GAUTAM GROUP OF COLLEGES, HAMIRPUR (H.P.)\nOFFICIAL ADMINISTRATIVE DATA REQUISITION CHECKLIST\n\nPlease supply the verified figures, documents, or photos for each item below:\n\n` + 
      checklist.map((item, idx) => `${idx + 1}. [${item.checked ? 'COMPLETED' : 'PENDING'}] ${item.title} (${item.status})`).join('\n') + 
      `\n\nSubmitted to: Central Administrative Secretariat, Gautam Group Hamirpur (H.P.) - 177001.\nContact: +91-9418010420 | info@ggchmr.com`;
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GGC_Data_Collection_Checklist.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title) return;
    const saved = JSON.parse(localStorage.getItem('ggc_custom_notices') || '[]');
    const updated = [{ id: Date.now(), ...newNotice, fileSize: '350 KB PDF' }, ...saved];
    localStorage.setItem('ggc_custom_notices', JSON.stringify(updated));
    setStatusMessage('Notice published successfully! Visible immediately on notice board.');
    setNewNotice({
      title: '',
      category: 'Admissions',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      isNew: true
    });
    setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleAddFaculty = (e) => {
    e.preventDefault();
    if (!newFaculty.name) return;
    const saved = JSON.parse(localStorage.getItem('ggc_custom_faculty') || '[]');
    const updated = [{ id: Date.now(), ...newFaculty }, ...saved];
    localStorage.setItem('ggc_custom_faculty', JSON.stringify(updated));
    setStatusMessage('Faculty member added to official directory.');
    setNewFaculty({
      name: '',
      designation: 'Assistant Professor',
      department: 'Gautam College of Pharmacy',
      qualification: 'M.Pharm, Ph.D.'
    });
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Institutional Staff CMS & Handover Hub</h3>
              <p className="text-xs text-slate-300">Gautam College Hamirpur • Administrative Dashboard & Data Requisition</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Administrative Verification</h4>
              <p className="text-xs text-slate-500 mt-1">
                Enter Staff PIN to view the Office Data Handover Checklist, publish circulars, or manage faculty directory.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                placeholder="Enter Staff PIN (Default: 1999)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-center text-sm font-mono tracking-widest focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              {statusMessage && (
                <div className="text-xs text-rose-600 font-bold">{statusMessage}</div>
              )}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
              >
                Access CMS Workspace
              </button>
            </form>
            <div className="text-[11px] text-slate-400">
              Staff prefilled demo pin: <span className="font-mono font-bold text-slate-600">1999</span>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col">
            
            {/* Top CMS Navigation */}
            <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'checklist' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Office Data Checklist (Part 3)</span>
              </button>

              <button
                onClick={() => setActiveTab('notices')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'notices' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Notices & Circulars</span>
              </button>

              <button
                onClick={() => setActiveTab('faculty')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'faculty' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Faculty Directory</span>
              </button>
            </div>

            {/* Notification / Status Feedback */}
            {statusMessage && (
              <div className="m-4 mb-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Tab: Office Data Checklist (PART 3) */}
            {activeTab === 'checklist' && (
              <div className="p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50 border border-amber-200 p-4 rounded-2xl">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>Data to Collect from College Office (Blueprint Part 3)</span>
                    </h4>
                    <p className="text-[11px] text-amber-800 mt-0.5">
                      Items marked green are live on the site. Use this checklist when coordinating document handover with the college registrar and principal.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadRequisition}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Checklist</span>
                  </button>
                </div>

                <div className="space-y-2 border border-slate-200 rounded-2xl p-4 bg-white divide-y divide-slate-100">
                  {checklist.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => toggleCheck(item.id)}
                      className="pt-2.5 first:pt-0 flex items-center justify-between gap-3 cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        {item.checked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 shrink-0" />
                        )}
                        <span className={`text-xs ${item.checked ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>
                          {item.title}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        item.checked 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Notices */}
            {activeTab === 'notices' && (
              <div className="p-6 space-y-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Publish New Official Notice</span>
                  </h4>

                  <form onSubmit={handleAddNotice} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Notice Title / Circular Subject *</label>
                      <input
                        type="text"
                        required
                        value={newNotice.title}
                        onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                        placeholder="e.g. Schedule for HPTU Odd Semester Practical Examinations"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Category</label>
                        <select
                          value={newNotice.category}
                          onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white outline-none"
                        >
                          <option>Admissions</option>
                          <option>Examination</option>
                          <option>Scholarship</option>
                          <option>Placements</option>
                          <option>General Circular</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Issue Date</label>
                        <input
                          type="text"
                          value={newNotice.date}
                          onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Publish Notice Instantly</span>
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Tab: Faculty */}
            {activeTab === 'faculty' && (
              <div className="p-6 space-y-6">
                <form onSubmit={handleAddFaculty} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Add Faculty Member</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Teacher Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newFaculty.name}
                        onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
                        placeholder="e.g. Dr. Ramesh Kumar"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Designation</label>
                      <input
                        type="text"
                        value={newFaculty.designation}
                        onChange={(e) => setNewFaculty({ ...newFaculty, designation: e.target.value })}
                        placeholder="e.g. Associate Professor"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    Add Teacher to Directory
                  </button>
                </form>
              </div>
            )}

          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Gautam Group of Colleges • Hamirpur Official Content Management System</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition"
          >
            Close CMS
          </button>
        </div>

      </div>
    </div>
  );
}
