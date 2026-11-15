import React from 'react';
import { 
  X, 
  Map, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Phone, 
  FileText, 
  HeartPulse, 
  Layers, 
  Compass, 
  Users, 
  ExternalLink 
} from 'lucide-react';

export default function SitemapModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  const handleLink = (page) => {
    onClose();
    if (onNavigate) onNavigate(page);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#02263c] text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-300">
              <Map className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase font-['Roboto_Condensed',sans-serif]">
                Institutional Sitemap & Portal Directory
              </h3>
              <p className="text-xs text-slate-300">Comprehensive map of all academic sections, colleges, portals, and downloads</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Tree */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 divide-y divide-slate-100">
          
          {/* Row 1: Primary Academic Blueprint */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Column 1: Core Institutional */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <Building2 className="w-4 h-4" />
                <span>Institutional Governance</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('home')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Home Portal</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>About Us & 25-Year History (Est. 1999)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('affiliations')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Affiliations (HPU, HPTU, AMRU, PCI, AICTE)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('faculty')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Faculty & Administrative Council</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('compliance')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Mandatory Disclosures & Anti-Ragging</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Academics & Admissions */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <GraduationCap className="w-4 h-4" />
                <span>Academics & Admissions</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('academics')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Seat Matrix (1,165 Total Intake)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('admissions')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Admissions 2025–26 & Fee Matrix</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('academics')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam Polytechnic (8 AICTE Branches)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('academics')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Syllabi (HPU / HPTU NEP-CBCS)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('downloads')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Prospectus & Admission Application Form</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Constituent Colleges */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <Layers className="w-4 h-4" />
                <span>Constituent Colleges</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam College (UG & PG Degree)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam Institute of Management & Tech (GIMT)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam College of Nursing (INC / AMRU)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam College of Pharmacy (PCI / HPTU)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('about')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Gautam Polytechnic (AICTE / HPTSB)</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Row 2: Campus Facilities, Student Life & Support */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Column 4: Infrastructure */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <Building2 className="w-4 h-4" />
                <span>Campus Infrastructure</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('facilities')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>GIMT Computerized Troodon Library (15,474 Titles)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('facilities')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Residential Hostels (Boys & Girls)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('facilities')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>24-Hour Campus Wi-Fi & IT Center</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('facilities')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Student Gymnasium & First-Aid Health Centre</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Student Life & Placement */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <Users className="w-4 h-4" />
                <span>Student Life & Media</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('gallery')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Photo/Video Gallery (NIT Hamirpur Style)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('placements')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Placements & Hospital Clinical Tie-Ups</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('alumni')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Alumni Association & Mentorship</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 6: Contact & Location */}
            <div className="space-y-2.5">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-[#1e3a8a]">
                <Phone className="w-4 h-4" />
                <span>Contact & Communication</span>
              </h4>
              <ul className="space-y-1.5 text-slate-600">
                <li>
                  <button onClick={() => handleLink('contact')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Telephone Directory (01972-221493 / 223557)</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLink('contact')} className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Hamirpur Campus Location (Near ISBT)</span>
                  </button>
                </li>
                <li>
                  <a href="mailto:ggchmr@gmail.com" className="hover:text-[#ea580c] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span>Institutional Email: ggchmr@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-medium">
          <div>
            Gautam Group of Colleges, Ward No. 10, Hamirpur (H.P.) PIN 177001
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#1e3a8a] text-white font-bold hover:bg-blue-900 transition"
          >
            Close Sitemap
          </button>
        </div>
      </div>
    </div>
  );
}
