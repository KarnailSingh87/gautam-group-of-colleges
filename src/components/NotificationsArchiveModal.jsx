import React, { useState } from 'react';
import { 
  X, 
  Bell, 
  Search, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Printer, 
  Filter,
  ArrowRight,
  ShieldCheck,
  Building2,
  ChevronRight
} from 'lucide-react';

const NOTIFICATIONS_ARCHIVE = [
  {
    id: 'notif-1',
    day: '31',
    month: 'OCT',
    year: '2026',
    time: '5:23 PM',
    category: 'Examination',
    refNo: 'GGC/EXAM/HPTU-HPU/2026/942',
    title: 'Re-evaluation Result of B. Pharmacy / B.Tech Computer Science & MBA (NEP & CBCS) Session',
    description: 'The re-evaluation results for B.Pharmacy, B.Tech CSE, and MBA examinations (NEP & CBCS schemes) have been declared. Students who applied for re-evaluation can check their updated scorecards on the official examination portal or verify with the college examination branch.',
    issuedBy: 'Controller of Examinations, Gautam Group of Colleges',
    isNew: true
  },
  {
    id: 'notif-2',
    day: '31',
    month: 'OCT',
    year: '2026',
    time: '5:20 PM',
    category: 'Examination',
    refNo: 'GGC/EXAM/FORMS/2026/941',
    title: 'Submission of Examination Forms for HPTU & HPU Odd Semester Upcoming Examination Session',
    description: 'All regular and re-appear students of B.Pharmacy, B.Sc Nursing, BCA, BBA, and M.Sc are hereby informed that online examination forms for the upcoming Odd Semester regular/re-appear examinations are now open. Forms must be submitted by the prescribed deadline to avoid late fee penalties.',
    issuedBy: 'Dean of Academic Affairs, Gautam College',
    isNew: true
  },
  {
    id: 'notif-3',
    day: '31',
    month: 'OCT',
    year: '2026',
    time: '5:18 PM',
    category: 'Admissions',
    refNo: 'GGC/ADM/SPOT/2026/940',
    title: 'Direct Walk-in Counseling & Admission Notification for B.Pharm, D.Pharm, B.Sc Nursing & GNM',
    description: 'Vacant state quota and management seats in B.Pharmacy (PCI approved), D.Pharmacy, B.Sc Nursing (AMRU / INC), and GNM will be filled through direct spot counseling on campus. Candidates must bring original certificates and passport photographs.',
    issuedBy: 'Central Admission Cell, Near Bus Stand Hamirpur',
    isNew: true
  },
  {
    id: 'notif-4',
    day: '28',
    month: 'OCT',
    year: '2026',
    time: '4:45 PM',
    category: 'Placements',
    refNo: 'GGC/TPO/CAMPUS/2026/938',
    title: 'Annual Campus Placement Drive by Sun Pharmaceutical Industries & Fortis Healthcare',
    description: 'Training and Placement Cell announces an upcoming joint placement drive by Sun Pharma, Macleods, and Fortis Healthcare for graduating batches of B.Pharmacy, D.Pharmacy, and B.Sc Nursing. Pre-placement talk scheduled at the Central Auditorium.',
    issuedBy: 'Training & Placement Officer (TPO), GGC',
    isNew: false
  },
  {
    id: 'notif-5',
    day: '24',
    month: 'OCT',
    year: '2026',
    time: '3:30 PM',
    category: 'Scholarships',
    refNo: 'GGC/SCH/E-KALYAN/2026/935',
    title: 'Mandatory Aadhaar KYC & Biometric verification for HP State Post-Matric Scholarship Renewal',
    description: 'All eligible students belonging to SC, ST, OBC, and EWS categories receiving HP State e-Kalyan / National Scholarship Portal (NSP) assistance must complete their biometric authentication and bank seed check at the student scholarship counter before November 15.',
    issuedBy: 'Nodal Scholarship Officer, Gautam College',
    isNew: false
  },
  {
    id: 'notif-6',
    day: '20',
    month: 'OCT',
    year: '2026',
    time: '2:15 PM',
    category: 'Admissions',
    refNo: 'GGC/ADM/MBA-MCA/2026/931',
    title: 'Spot Round for MBA & PGDCA Direct Entry at Gautam Institute of Management & Technology',
    description: 'Applications invited for direct counseling for remaining seats in MBA (Affiliated to HPTU / HPU, approved by AICTE). Valid CAT / MAT / CMAT / HPCET scores or graduation merit eligible.',
    issuedBy: 'Director, Gautam Institute of Management & Technology (GIMT)',
    isNew: false
  },
  {
    id: 'notif-7',
    day: '18',
    month: 'OCT',
    year: '2026',
    time: '11:00 AM',
    category: 'Academic',
    refNo: 'GGC/ACAD/MID-SEM/2026/928',
    title: 'Schedule for Sessional Minor Tests and Practical Lab Assessments (Odd Semester)',
    description: 'Departmental minor assessments and practical laboratory evaluations for Physics, Chemistry, Botany, Zoology, Computer Applications, and Pharmacy labs will commence as per the published departmental roster.',
    issuedBy: 'Office of the Principal, Gautam Degree College',
    isNew: false
  },
  {
    id: 'notif-8',
    day: '15',
    month: 'OCT',
    year: '2026',
    time: '4:00 PM',
    category: 'Compliance',
    refNo: 'GGC/COMP/ANTI-RAG/2026/925',
    title: 'Anti-Ragging Committee Campus Inspection and Student Undertaking Submission Notice',
    description: 'Notice regarding zero-tolerance policy against ragging under UGC & AICTE regulations. All hostel residents and day scholars are required to submit online affidavit confirmation numbers at the Proctor office.',
    issuedBy: 'Proctorial Board & Anti-Ragging Squad, GGC',
    isNew: false
  },
  {
    id: 'notif-9',
    day: '12',
    month: 'OCT',
    year: '2026',
    time: '1:30 PM',
    category: 'Scholarships',
    refNo: 'GGC/SCH/SILVER/2026/920',
    title: 'Silver Jubilee Merit Scholarship Concession Allotment Committee Decision List',
    description: 'The Silver Jubilee Scholarship Committee has finalized the list of meritorious candidates eligible for up to ₹15,000 tuition fee waiver for academic year 2026–27. Beneficiaries may collect confirmation slips from the Accounts Branch.',
    issuedBy: 'Finance & Accounts Branch, Gautam Group',
    isNew: false
  },
  {
    id: 'notif-10',
    day: '08',
    month: 'OCT',
    year: '2026',
    time: '10:30 AM',
    category: 'Academic',
    refNo: 'GGC/POLY/REG/2026/915',
    title: 'Gautam Polytechnic Diploma (AICTE Approved) Semester Registration & Lab Kit Distribution',
    description: 'Classes and workshop lab kit distribution for Civil, Computer, Electrical, Electronics, and Mechanical diploma branches commence. Students must complete semester enrollment clearances.',
    issuedBy: 'Principal, Gautam Polytechnic Hamirpur',
    isNew: false
  }
];

export default function NotificationsArchiveModal({ 
  isOpen, 
  onClose, 
  selectedItem = null,
  onNavigate 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeNoticeDetail, setActiveNoticeDetail] = useState(null);

  if (!isOpen) return null;

  const categories = ['All', 'Examination', 'Admissions', 'Placements', 'Scholarships', 'Academic', 'Compliance'];

  const filteredNotices = NOTIFICATIONS_ARCHIVE.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.refNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#ea580c] text-white p-4 sm:p-5 flex items-center justify-between border-b border-orange-600">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-xs">
              <Bell className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase font-['Roboto_Condensed',sans-serif]">
                Official Notice Board & Circulars Archive
              </h3>
              <p className="text-xs text-orange-100">
                Gautam Group of Colleges • Affiliated to HPTU, HPU & AMRU • Hamirpur (H.P.)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-[#ea580c] text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* If viewing a single notice detail */}
        {activeNoticeDetail ? (
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
            <button
              onClick={() => setActiveNoticeDetail(null)}
              className="text-xs font-bold text-[#ea580c] hover:underline flex items-center gap-1"
            >
              ← Back to All Notifications
            </button>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ea580c]/10 text-[#ea580c]">
                  Category: {activeNoticeDetail.category}
                </span>
                <span className="text-xs font-mono text-slate-500 font-bold">
                  {activeNoticeDetail.refNo}
                </span>
                <span className="text-xs text-slate-500">
                  Published: {activeNoticeDetail.day} {activeNoticeDetail.month} {activeNoticeDetail.year} ({activeNoticeDetail.time})
                </span>
              </div>

              <h2 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
                {activeNoticeDetail.title}
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                {activeNoticeDetail.description}
              </p>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
                <div>
                  <span className="font-semibold block text-slate-800">Issuing Authority:</span>
                  <span>{activeNoticeDetail.issuedBy}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold block text-slate-800">Campus Location:</span>
                  <span>Ward No. 10, Near Bus Stand, Hamirpur (H.P.) - 177001</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end pt-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition"
              >
                <Printer className="w-4 h-4" />
                <span>Print Notice</span>
              </button>
              <button
                onClick={() => {
                  alert(`Downloading official PDF circular for: ${activeNoticeDetail.refNo}`);
                }}
                className="px-5 py-2 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Gazette PDF</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Search and Category Filters */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter notices by keyword (e.g. B.Pharm, Examination, Spot Round, KYC, HPTU)..."
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c] focus:border-transparent bg-white shadow-xs"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#ea580c] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Notices List */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 divide-y divide-slate-100">
              {filteredNotices.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <FileText className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="text-sm font-semibold">No notifications match your search criteria.</p>
                  <button
                    onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                    className="text-xs text-[#ea580c] hover:underline font-bold mt-2"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredNotices.map((item) => (
                  <div
                    key={item.id}
                    className="pt-3 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors group cursor-pointer"
                    onClick={() => setActiveNoticeDetail(item)}
                  >
                    <div className="flex items-start gap-3.5 flex-1">
                      {/* Date Badge */}
                      <div className="w-12 h-13 shrink-0 rounded-xl border border-slate-300 bg-white text-slate-900 flex flex-col items-center justify-center font-bold shadow-xs group-hover:border-[#ea580c] group-hover:bg-orange-50/50 transition">
                        <span className="text-base font-black text-slate-950 leading-none">{item.day}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-600 mt-0.5 tracking-wider">{item.month}</span>
                      </div>

                      {/* Title & Metadata */}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
                            {item.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {item.refNo}
                          </span>
                          {item.isNew && (
                            <span className="text-[10px] font-extrabold text-[#ea580c] bg-orange-50 px-1.5 py-0.5 rounded uppercase">
                              Latest
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <span className="text-xs font-bold text-[#ea580c] group-hover:underline flex items-center gap-0.5">
                        <span>Read Notice</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600 shrink-0">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Official Notice Board • Controller of Examinations, Hamirpur</span>
              </span>

              {onNavigate && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('downloads');
                  }}
                  className="font-bold text-blue-900 hover:text-[#ea580c] flex items-center gap-1 transition"
                >
                  <span>Go to Downloads & Information Archive</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
