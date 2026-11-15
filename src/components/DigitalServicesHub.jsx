import React, { useState } from 'react';
import { 
  Bell, 
  Sparkles, 
  UserCheck, 
  GraduationCap, 
  Ticket, 
  FileText, 
  SearchCheck, 
  Building2, 
  ArrowRight, 
  FileDown, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Search,
  BookOpen,
  Phone
} from 'lucide-react';
import { GGC_DIGITAL_SERVICES, GGC_PRESS_NOTICES } from '../data/mockData';

export default function DigitalServicesHub({ onOpenServiceModal }) {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Ticket': return <Ticket className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'SearchCheck': return <SearchCheck className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header with Reference Tag */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>GGC Student Services & Examination Portal</span>
              <span className="hidden sm:inline text-indigo-400/60">•</span>
              <span className="hidden sm:inline text-amber-300 font-semibold">Affiliated to HPTU, HPU & AMRU</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              One-Stop Unified Student & Examination Hub
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Modern digital services for Gautam Group students: Direct admissions, online fee receipts, HPTU & HPU examination results, and HP state scholarship verification.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenServiceModal('apply')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/30 transition-all"
            >
              <UserCheck className="w-4 h-4" />
              <span>Direct Admission Portal</span>
            </button>
            <button
              onClick={() => onOpenServiceModal('results')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs transition-all"
            >
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>HPTU/HPU Results</span>
            </button>
          </div>
        </div>

        {/* 6 Core Digital Services (21st.dev / Dribbble Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {GGC_DIGITAL_SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onOpenServiceModal(srv.modalType)}
              className="group cursor-pointer rounded-2xl bg-slate-900/80 hover:bg-slate-900 p-6 sm:p-7 border border-slate-800 hover:border-indigo-500 shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Icon & Action Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${srv.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span className="p-2 rounded-lg bg-slate-800 group-hover:bg-indigo-600 text-slate-300 group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {srv.subtitle}
                </div>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                <span>{srv.actionText}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Notices, Circulars & Examination Announcements (HIMTU / HPU Reference) */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                <Bell className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>GGC Hamirpur Official Notices & Circulars</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-extrabold uppercase border border-red-500/30">
                    Live Feed
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Admissions, HPTU/HPU examination date-sheets, campus recruitment, and scholarship notices
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenServiceModal('notices')}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View All Circulars</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Notices List */}
          <div className="divide-y divide-slate-800">
            {GGC_PRESS_NOTICES.map((notice) => (
              <div
                key={notice.id}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-slate-800/50 rounded-xl px-2 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="text-[11px] font-semibold text-slate-400 whitespace-nowrap min-w-[85px] pt-0.5">
                    {notice.date}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-bold">
                        {notice.tag}
                      </span>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[9px] font-black uppercase tracking-wider flex items-center gap-1 animate-pulse">
                          <Flame className="w-2.5 h-2.5" />
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <a
                      href="#notice"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenServiceModal('notice-detail', notice.title);
                      }}
                      className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-2"
                    >
                      {notice.title}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className="text-[11px] text-slate-400 hidden md:inline">
                    {notice.fileSize}
                  </span>
                  <button
                    onClick={() => onOpenServiceModal('notice-detail', notice.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold transition-all border border-slate-700"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* State E-Governance & Statutory Compliance Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-300">Admission Hotline:</span>
            <a href="tel:+919418010420" className="text-emerald-400 hover:text-white transition-colors font-bold flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+91-9418010420</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Landline: 01972-221493</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span>Email: ggchmr@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>AICTE, PCI, INC, HPNRC Approved • Affiliated to HPTU, HPU & AMRU</span>
          </div>
        </div>

      </div>
    </section>
  );
}
