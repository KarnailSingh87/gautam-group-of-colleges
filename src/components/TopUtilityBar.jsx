import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, User, CreditCard, Award, ExternalLink } from 'lucide-react';

export default function TopUtilityBar({ onOpenPortal }) {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Contact & Location */}
        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <a 
            href="tel:+919418010420" 
            className="flex items-center gap-1.5 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Admission Helpline: +91-9418010420</span>
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a 
            href="tel:01972221493" 
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Office: 01972-221493</span>
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Near Bus Stand, Hamirpur, Himachal Pradesh – 177001</span>
          </span>
        </div>

        {/* Right: Real Student & Administrative Portals */}
        <div className="flex items-center gap-3 text-[11px]">
          <div className="hidden lg:flex items-center gap-1.5 text-amber-300 font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>25 Years of Academic Excellence (1999–2025)</span>
          </div>
          <span className="hidden lg:inline text-slate-700">|</span>
          
          <button
            onClick={() => onOpenPortal('fee-pay')}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <CreditCard className="w-3.5 h-3.5 text-indigo-400" />
            <span>Pay Fee Online</span>
          </button>
          
          <span className="text-slate-700">|</span>
          
          <button
            onClick={() => onOpenPortal('otr')}
            className="flex items-center gap-1 text-indigo-300 hover:text-white font-semibold transition-colors"
          >
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>Student ERP / OTR</span>
          </button>

          <span className="text-slate-700">|</span>

          <a 
            href="mailto:ggchmr@gmail.com" 
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>ggchmr@gmail.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
