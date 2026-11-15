import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  FolderLock, 
  ShieldAlert, 
  FileCheck2, 
  FileText,
  ExternalLink
} from 'lucide-react';

export default function HimtuQuickAccess({ onNavigate, onOpenApply, onOpenPortal, onOpenResults }) {
  const quickItems = [
    {
      id: 'student-zone',
      title: 'Student Zone',
      subtitle: 'ERP, LMS, Timetable & Clubs',
      icon: Users,
      bgColor: 'from-blue-900 to-indigo-900',
      action: () => onOpenPortal && onOpenPortal('portal')
    },
    {
      id: 'ug-programmes',
      title: 'Under Graduate Programmes',
      subtitle: 'B.Pharm, B.Sc Nursing, BBA, BCA, BHM',
      icon: GraduationCap,
      bgColor: 'from-indigo-900 to-blue-800',
      action: () => onNavigate ? onNavigate('academics') : null
    },
    {
      id: 'pg-programmes',
      title: 'Post Graduate Programmes',
      subtitle: 'M.Pharm, MBA, MCA, M.Sc, M.Com',
      icon: BookOpen,
      bgColor: 'from-blue-950 to-indigo-950',
      action: () => onNavigate ? onNavigate('academics') : null
    },
    {
      id: 'recruitment',
      title: 'Recruitment',
      subtitle: 'Faculty & Administrative Openings',
      icon: Briefcase,
      bgColor: 'from-slate-800 to-blue-950',
      action: () => onNavigate ? onNavigate('faculty') : null
    },
    {
      id: 'digilocker',
      title: 'Digi Locker',
      subtitle: 'NAD / ABC ID Academic Bank Credits',
      icon: FolderLock,
      bgColor: 'from-indigo-950 to-slate-900',
      action: () => window.open('https://www.digilocker.gov.in', '_blank', 'noopener,noreferrer')
    },
    {
      id: 'anti-ragging',
      title: 'Anti-Ragging Cell',
      subtitle: 'Toll-Free Helpline 1800-180-5522',
      icon: ShieldAlert,
      bgColor: 'from-blue-900 to-slate-900',
      action: () => onNavigate ? onNavigate('compliance') : null
    },
    {
      id: 'examination',
      title: 'Examination',
      subtitle: 'Date Sheets, Admit Cards & Results',
      icon: FileCheck2,
      bgColor: 'from-slate-900 to-indigo-900',
      action: () => onOpenResults ? onOpenResults() : (onNavigate && onNavigate('academics'))
    },
    {
      id: 'tenders',
      title: 'Tenders & Notices',
      subtitle: 'Procurement, Quotations & Circulars',
      icon: FileText,
      bgColor: 'from-blue-950 to-blue-900',
      action: () => onNavigate ? onNavigate('downloads') : null
    }
  ];

  return (
    <section className="bg-slate-50 py-10 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#ea580c] tracking-tight uppercase">
            Quick Access
          </h2>
          <div className="h-1 w-16 bg-[#ea580c] mt-1 rounded-full"></div>
        </div>

        {/* 8-Card Grid matching HPTU himtu.ac.in */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {quickItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#25396e] to-[#14234b] text-white p-5 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[140px] border border-blue-900/50"
              >
                {/* Subtle decorative glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-amber-400/20 transition-all duration-300"></div>

                {/* Card Top: Icon inside small pill */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-amber-300 group-hover:bg-amber-400 group-hover:text-blue-950 transition-colors shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 transition" />
                </div>

                {/* Card Bottom: Titles */}
                <div className="mt-4 relative z-10">
                  <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-200/80 mt-1 line-clamp-1 font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
