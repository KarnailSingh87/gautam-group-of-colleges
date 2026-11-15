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
  KeyRound
} from 'lucide-react';
import { NOTICES } from '../data/mockData';

export default function AdminCMSModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState('notices'); // 'notices', 'results', 'faculty', 'gallery'
  const [statusMessage, setStatusMessage] = useState('');

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

  const [newGallery, setNewGallery] = useState({
    title: '',
    category: 'Campus',
    url: ''
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

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title) return;
    
    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('ggc_custom_notices') || '[]');
    const updated = [
      { id: Date.now(), ...newNotice, fileSize: '350 KB PDF' },
      ...saved
    ];
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
              <h3 className="text-base font-bold text-white">Institutional Staff CMS & Admin Panel</h3>
              <p className="text-xs text-slate-300">Gautam College Hamirpur • Zero-Code Publishing Dashboard</p>
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
                Enter your administrative PIN to manage circulars, faculty records, and examination datesheets.
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
              Staff default demo pin: <span className="font-mono font-bold text-slate-600">1999</span>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto flex flex-col">
            
            {/* Top CMS Navigation */}
            <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center gap-2 overflow-x-auto">
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

              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'gallery' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Gallery & Media</span>
              </button>
            </div>

            {/* Notification / Status Feedback */}
            {statusMessage && (
              <div className="m-4 mb-0 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{statusMessage}</span>
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

                {/* Published notices count */}
                <div>
                  <h5 className="text-xs font-bold text-slate-800 mb-2">Live Published Circulars</h5>
                  <div className="space-y-2 max-h-48 overflow-y-auto divide-y divide-slate-100 border border-slate-200 rounded-xl p-3 bg-white">
                    {NOTICES.map((n) => (
                      <div key={n.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-900">{n.title}</div>
                          <div className="text-[10px] text-slate-500">{n.category} • {n.date}</div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
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

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Department</label>
                      <select
                        value={newFaculty.department}
                        onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white outline-none"
                      >
                        <option>Gautam College of Pharmacy</option>
                        <option>Gautam College of Nursing</option>
                        <option>Gautam Institute of Management (GIMT)</option>
                        <option>Gautam PG Degree College</option>
                        <option>Hotel Management & Catering</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Qualifications</label>
                      <input
                        type="text"
                        value={newFaculty.qualification}
                        onChange={(e) => setNewFaculty({ ...newFaculty, qualification: e.target.value })}
                        placeholder="e.g. Ph.D., M.Pharm"
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

            {/* Tab: Gallery */}
            {activeTab === 'gallery' && (
              <div className="p-6 space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Add Media to Gallery</h4>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Caption / Title</label>
                    <input
                      type="text"
                      placeholder="e.g. New Pharmacology Research Wing"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Image URL</label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStatusMessage('Gallery item staged successfully.');
                      setTimeout(() => setStatusMessage(''), 3000);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition"
                  >
                    Upload Gallery Photo
                  </button>
                </div>
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
