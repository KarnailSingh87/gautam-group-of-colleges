import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  Heart,
  Globe,
  Award
} from 'lucide-react';

export default function Footer({ preset, onOpenApply }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Institution Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white text-white flex items-center justify-center font-bold shadow-md overflow-hidden p-1">
                <img 
                  src="https://cache.careers360.mobi/media/colleges/social-media/logo/Logo_of_Gautam_College_Hamirpur_Logo.jpg" 
                  alt="Gautam Group Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-black text-xl text-white tracking-tight">
                  Gautam Group of Colleges
                </span>
                <div className="text-[11px] text-slate-400">Hamirpur (H.P.) • Celebrating 25 Years (Est. 1999)</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Himachal Pradesh's premier multi-disciplinary higher educational institution offering PCI-approved Pharmacy, INC-approved Nursing, AICTE-approved Management, and HPU-affiliated Sciences & Humanities degrees.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Near Bus Stand, Hamirpur, Himachal Pradesh – 177001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Admission Helpline: +91-9418010420 | 01972-221493</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Email: ggchmr@gmail.com</span>
              </div>
            </div>

            {/* Statutory Approvals Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Affiliated: HPTU, HPU & AMRU | Approved: AICTE, PCI, INC, HPNRC</span>
              </div>
            </div>
          </div>

          {/* Col 3: Constituent Colleges */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Constituent Colleges
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam College of Pharmacy</a></li>
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam College of Nursing</a></li>
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam Inst. of Mgmt & Tech (GIMT)</a></li>
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam Post-Graduate Degree College</a></li>
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam College of Hotel Management</a></li>
              <li><a href="#colleges" className="hover:text-white transition-colors">Gautam Polytechnic & ITI</a></li>
            </ul>
          </div>

          {/* Col 4: Courses & Admissions */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Programs Offered
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onOpenApply('apply', 'B.Pharmacy')} className="hover:text-white transition-colors">B.Pharmacy & D.Pharmacy</button></li>
              <li><button onClick={() => onOpenApply('apply', 'B.Sc. Nursing')} className="hover:text-white transition-colors">B.Sc. Nursing & GNM</button></li>
              <li><button onClick={() => onOpenApply('apply', 'MBA')} className="hover:text-white transition-colors">Master of Business Admin (MBA)</button></li>
              <li><button onClick={() => onOpenApply('apply', 'BCA')} className="hover:text-white transition-colors">BCA & PGDCA (Computer Apps)</button></li>
              <li><button onClick={() => onOpenApply('apply', 'M.Sc. Sciences')} className="hover:text-white transition-colors">M.Sc. (Chem, Phys, Bot, Zoo)</button></li>
              <li><button onClick={() => onOpenApply('apply', 'BHM')} className="hover:text-white transition-colors">Bachelor of Hotel Management (BHM)</button></li>
            </ul>
          </div>

          {/* Col 5: Quick Connect & Location */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Location & Transport
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Prime location in Hamirpur city right adjacent to Hamirpur Bus Stand with direct bus connectivity across Bilaspur, Kangra, Mandi, and Una districts.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="text-emerald-400 font-bold">🚍 Student Bus Pass:</div>
              <div className="text-slate-400 text-[11px]">HRTC Concessional Bus Pass verification facility available at college office.</div>
              <button
                onClick={() => onOpenApply('bus-pass')}
                className="w-full py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] transition-colors"
              >
                Apply for Bus Concession
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Accreditation, Legal & Copyright */}
      <div className="border-t border-slate-900 bg-black/50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Gautam Group of Colleges, Hamirpur (H.P.) • Celebrating 25 Years of Service (1999–2025)</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Mandatory AICTE Disclosure</a>
            <a href="#" className="hover:text-slate-300">Anti-Ragging Committee</a>
            <a href="#" className="hover:text-slate-300">RTI Cell</a>
            <a href="#" className="hover:text-slate-300">Grievance Redressal</a>
          </div>

          <div>
            © {new Date().getFullYear()} Gautam Group of Colleges. All Rights Reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}
