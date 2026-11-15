import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  FileText, 
  ChevronRight,
  Globe
} from 'lucide-react';
import { FacebookIcon, YoutubeIcon, XIcon, InstagramIcon } from './SocialIcons';

export default function HimtuFooter({ onNavigate, onOpenCMSModal, onOpenPortalModal }) {
  const usefulLinks = [
    { label: 'About Us', page: 'about' },
    { label: 'Statutory Affiliations & Approvals', page: 'affiliations' },
    { label: 'Academic Programs & Syllabi', page: 'academics' },
    { label: 'Admissions & Fee Structure', page: 'admissions' },
    { label: 'Faculty & Administrative Staff', page: 'faculty' },
    { label: 'Central Library & OPAC', page: 'facilities' },
    { label: 'Placements & Training Cell', page: 'placements' },
    { label: 'Mandatory Disclosures (RTI, Anti-Ragging)', page: 'compliance' },
    { label: 'Downloads & Official Prospectus', page: 'downloads' },
    { label: 'Alumni Association Network', page: 'alumni' }
  ];

  const complianceLinks = [
    { label: 'Privacy Policy', page: 'compliance' },
    { label: 'Terms & Conditions', page: 'compliance' },
    { label: 'Hyperlinking Policy', page: 'compliance' },
    { label: 'Copyright Policy', page: 'compliance' },
    { label: 'Accessibility Statement (WCAG AA)', page: 'compliance' },
    { label: 'Refund & Cancellation Policy', page: 'admissions' }
  ];

  return (
    <footer className="bg-[#262626] text-white text-xs font-sans selection:bg-[#ea580c] selection:text-white border-t-4 border-[#ea580c]">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Institutional Identity & Address (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img 
                src="/gautam_group_colleges_logo.png" 
                alt="GGC Crest" 
                className="w-16 h-16 object-contain bg-white rounded-full p-1 border-2 border-amber-400 shrink-0 shadow-md"
              />
              <div>
                <span className="block text-amber-400 font-bold text-xs tracking-wide font-['Noto_Sans_Devanagari',sans-serif]">
                  गौतम ग्रुप ऑफ कॉलेजेस, हमीरपुर
                </span>
                <h3 className="text-base sm:text-lg font-black text-white leading-tight uppercase tracking-tight font-['Roboto_Condensed',sans-serif]">
                  GAUTAM GROUP OF COLLEGES
                </h3>
                <span className="text-[11px] text-slate-300 font-medium block">
                  Hamirpur, Himachal Pradesh – 177001 (Est. 1999)
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              A premier institution of higher learning in Himachal Pradesh, providing world-class education across Pharmacy, Nursing, Management, Information Technology, Basic Sciences, and Teacher Training. Affiliated to HPTU, HPU & AMRU; approved by AICTE, PCI, INC & NCTE.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>Ward No. 10, near Bus Stand, Chakmoh, Galore, Hamirpur (H.P.) – 177001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span>01972-221493 / +91-9736391060 / +91-9816687100 (Admissions)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ea580c] shrink-0" />
                <span className="font-mono">ggchmr@gmail.com</span>
              </div>
            </div>

            {/* Codes Badge */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 border border-white/15">
                AISHE: C-11482 / C-53351
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 border border-white/15">
                College Code: HMR-04
              </span>
            </div>
          </div>

          {/* Column 2: Useful Links (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-white/20 pb-2">
              Useful Navigation Links
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {usefulLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate && onNavigate(item.page)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 text-left transition group py-1"
                >
                  <ChevronRight className="w-3 h-3 text-[#ea580c] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span className="line-clamp-1">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Compliance & Policies
              </h5>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                {complianceLinks.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => onNavigate && onNavigate(p.page)}
                    className="hover:text-amber-300 underline underline-offset-2"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Statutory Redressal (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-white/20 pb-2">
              Helplines & Portals
            </h4>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-[#ea580c] font-black uppercase tracking-wider block">
                  National Anti-Ragging Toll-Free
                </span>
                <p className="text-sm font-mono font-bold text-white">
                  1800-180-5522
                </p>
                <a
                  href="https://www.antiragging.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-blue-300 hover:underline flex items-center gap-1"
                >
                  www.antiragging.in <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-amber-300 font-black uppercase tracking-wider block">
                  National Scholarship & HP e-Pass
                </span>
                <p className="text-[11px] text-slate-300">
                  Government Post-Matric & Merit Schemes
                </p>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-blue-300 hover:underline flex items-center gap-1"
                >
                  scholarships.gov.in <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Social Media Follow Links */}
              <div>
                <span className="text-xs font-bold text-slate-300 block mb-2">Connect With Us:</span>
                <div className="flex items-center gap-2">
                  <a href="https://www.facebook.com/search/top?q=Gautam%20Group%20of%20Colleges%20Hamirpur" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition" title="Facebook">
                    <FacebookIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://www.youtube.com/@gautamgroupofcollegesggc2063" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#FF0000] flex items-center justify-center transition" title="YouTube">
                    <YoutubeIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://twitter.com/search?q=Gautam%20College%20Hamirpur" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center transition" title="X / Twitter">
                    <XIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://www.instagram.com/explore/tags/gautamcollegehamirpur/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition" title="Instagram">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Staff / Admin CMS button */}
              <div className="pt-2">
                <button
                  onClick={onOpenCMSModal}
                  className="w-full py-1.5 px-3 rounded bg-white/10 hover:bg-[#ea580c] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 border border-white/20"
                >
                  <Lock className="w-3 h-3" />
                  <span>College Staff CMS Login</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer: Copyright and Guidelines Notice */}
      <div className="bg-[#1a1a1a] border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <div>
            <span>© 2026 Gautam Group of Colleges, Hamirpur (Himachal Pradesh). All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Website designed as per GIGW & UGC Norms</span>
            <span>•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-amber-400 hover:underline font-bold"
            >
              ↑ Top of Page
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
