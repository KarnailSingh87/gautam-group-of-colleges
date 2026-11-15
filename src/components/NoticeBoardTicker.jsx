import React, { useState } from 'react';
import { 
  Bell, 
  ExternalLink, 
  Download, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  FileText,
  AlertCircle,
  X
} from 'lucide-react';
import { NOTICES } from '../data/mockData';

export default function NoticeBoardTicker({ onOpenServiceModal, onOpenApply }) {
  const [activeTab, setActiveTab] = useState('All');
  const [showAllNoticesModal, setShowAllNoticesModal] = useState(false);

  const categories = ['All', 'Admissions', 'Examination', 'Academic', 'Scholarship'];

  const filteredNotices = activeTab === 'All' 
    ? NOTICES 
    : NOTICES.filter(n => n.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="bg-gradient-to-r from-amber-50 via-indigo-50 to-amber-50 border-y border-amber-200/80 py-2.5 px-4 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Badge & Marquee Ticker */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600 text-white font-extrabold text-[11px] uppercase tracking-wider shrink-0 shadow-sm animate-pulse">
            <Bell className="w-3.5 h-3.5" />
            <span>Official Ticker</span>
          </div>

          {/* Scrolling Announcement Preview */}
          <div className="text-xs text-slate-800 font-medium truncate flex items-center gap-2">
            <span className="font-bold text-indigo-950">
              Session 2025–26:
            </span>
            <span className="text-slate-700 truncate">
              Direct Admissions & HPCET / NEET Seat Allocation Open for B.Pharm, D.Pharm, B.Sc Nursing, MBA & BCA • Dr. Radhakrishnan GMC Hamirpur Clinical Rotations Batch Scheduled
            </span>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <button
            onClick={() => setShowAllNoticesModal(true)}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-300 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 text-xs font-bold transition shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Notice Board ({NOTICES.length})</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => onOpenApply('apply')}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Apply 2025</span>
          </button>
        </div>

      </div>

      {/* Notice Board Modal (NIT Hamirpur / HPTU Template Style) */}
      {showAllNoticesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 bg-slate-900 text-white rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Institutional Notice Board & Circulars</h3>
                  <p className="text-xs text-slate-300">Gautam Group of Colleges • Affiliated to HPTU, HPU & AMRU</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAllNoticesModal(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="px-5 pt-3 pb-2 border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                    activeTab === cat
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Notices List */}
            <div className="p-5 overflow-y-auto space-y-3 flex-1 divide-y divide-slate-100">
              {filteredNotices.map((notice) => (
                <div key={notice.id} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 uppercase tracking-wider">
                        {notice.category}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </span>
                      {notice.urgent && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-rose-600 text-white uppercase tracking-wider animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {notice.title}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Ref: GGC/HAM/{notice.category.toUpperCase()}/2025
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        const blob = new Blob([`Official Notice: ${notice.title}\nDate: ${notice.date}\nCategory: ${notice.category}\n\nIssued by Gautam Group of Colleges Hamirpur (H.P.) Office of the Registrar.`], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `${notice.title.slice(0, 25).replace(/\s+/g, '_')}.txt`;
                        a.click();
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-bold transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Circular</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex items-center justify-between text-xs text-slate-500">
              <span>Notice updates are synchronized directly with HPTU & HPU notifications.</span>
              <button
                onClick={() => setShowAllNoticesModal(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
