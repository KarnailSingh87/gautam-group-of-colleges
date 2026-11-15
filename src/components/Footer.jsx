import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  Heart,
  Globe
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
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-serif font-black text-xl text-white tracking-tight">
                  {preset.name}
                </span>
                <div className="text-[11px] text-slate-400">Chartered & Founded {preset.founded}</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to pioneering intellectual inquiry, transformative scholarship, and preparing global citizens who lead with integrity and purpose.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>100 Aurelius Parkway, Academic Quad, MA 02138</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Main Operator: +1 (617) 555-0100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>admissions@{preset.id}univ.edu</span>
              </div>
            </div>

            {/* Campus Alert Status */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Campus Status: Normal Operations (Green Level)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Schools */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Colleges & Faculties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-white transition-colors">School of Engineering & AI</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Graduate School of Management</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">College of Biomedical Sciences</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Faculty of Arts & Architecture</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">School of Law & Public Policy</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Division of Continuing Studies</a></li>
            </ul>
          </div>

          {/* Col 4: Prospective Students */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Admissions & Aid
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onOpenApply('apply')} className="hover:text-white transition-colors">Undergraduate Application</button></li>
              <li><button onClick={() => onOpenApply('apply')} className="hover:text-white transition-colors">Graduate & Doctoral Portal</button></li>
              <li><a href="#tuition" className="hover:text-white transition-colors">Net Price & Aid Calculator</a></li>
              <li><button onClick={() => onOpenApply('request-info')} className="hover:text-white transition-colors">International Student Visas</button></li>
              <li><a href="#campus" className="hover:text-white transition-colors">Housing & Dining Services</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Campus Visit & Open Days</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Fast Inquiries */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive academic bulletins, admissions deadline reminders, and faculty discoveries.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to university admissions bulletin!'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
              >
                Subscribe to Bulletin
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Accreditation, Legal & Copyright */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Accredited by the New England Commission of Higher Education (NECHE) & ABET.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Title IX Compliance</a>
            <a href="#" className="hover:text-slate-300">Clery Act Security</a>
            <a href="#" className="hover:text-slate-300">Non-Discrimination</a>
          </div>

          <div>
            © {new Date().getFullYear()} {preset.name}. All Rights Reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}
