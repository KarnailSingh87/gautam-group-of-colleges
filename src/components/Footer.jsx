import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ExternalLink,
  Award,
  Database
} from 'lucide-react';
import { getCdnUrl } from '../utils/cloudinary';

export default function Footer({ onNavigate, onOpenApply, onOpenPortalModal }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">

      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1 & 2: Brand & Institution Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-2xl bg-white text-white flex items-center justify-center font-bold shadow-md overflow-hidden p-1">
                <img
                  src={getCdnUrl('/gautam_group_colleges_logo.png')}
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

          {/* Col 3: Academic Sections */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Academic Blueprint
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate && onNavigate('about')} className="hover:text-white transition-colors">
                  About Us & Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('affiliations')} className="hover:text-white transition-colors">
                  Affiliations & Approvals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('academics')} className="hover:text-white transition-colors">
                  Departments & Syllabi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('admissions')} className="hover:text-white transition-colors">
                  Fee Structure & Scholarships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('faculty')} className="hover:text-white transition-colors">
                  Faculty & Staff Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('facilities')} className="hover:text-white transition-colors">
                  Central Library & Hospital
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Programs Offered */}
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
              Location & Portals
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Prime location in Hamirpur city, 800m from Hamirpur Bus Stand with regular buses across HP, Punjab & Chandigarh.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5 text-xs">
              <button
                onClick={onOpenPortalModal}
                className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5" />
                <span>Student Portals Gateway</span>
              </button>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors text-center"
              >
                View Hamirpur Campus Map
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
            <button onClick={() => onNavigate && onNavigate('compliance')} className="hover:text-slate-300">
              Mandatory AICTE Disclosure
            </button>
            <button onClick={() => onNavigate && onNavigate('compliance')} className="hover:text-slate-300">
              Anti-Ragging Committee
            </button>
            <button onClick={() => onNavigate && onNavigate('compliance')} className="hover:text-slate-300">
              RTI Cell
            </button>
            <button onClick={() => onNavigate && onNavigate('compliance')} className="hover:text-slate-300">
              Grievance Redressal
            </button>
          </div>

          <div>
            © {new Date().getFullYear()} Gautam Group of Colleges. All Rights Reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}
