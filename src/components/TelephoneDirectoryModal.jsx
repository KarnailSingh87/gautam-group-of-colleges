import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  PhoneCall, 
  Copy, 
  Check, 
  Building2, 
  Clock, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';
import { TELEPHONE_DIRECTORY, INSTITUTION_INFO } from '../data/blueprintData';

export default function TelephoneDirectoryModal({ isOpen, onClose }) {
  const [copiedRaw, setCopiedRaw] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (num, raw) => {
    navigator.clipboard.writeText(num);
    setCopiedRaw(raw);
    setTimeout(() => setCopiedRaw(null), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#02263c] text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-300">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-wide uppercase font-['Roboto_Condensed',sans-serif]">
                Official Telephone Directory
              </h3>
              <p className="text-xs text-slate-300">Gautam Group of Colleges • Hamirpur Campus Exchange</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Directory List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Campus Office Timings: <strong>Monday to Saturday (9:00 AM to 5:00 PM IST)</strong></span>
          </div>

          <div className="space-y-2.5">
            {TELEPHONE_DIRECTORY.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#1e3a8a] hover:shadow-xs transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span className="text-[#1e3a8a]">{item.purpose}</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">{item.desc}</div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${item.raw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold transition shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.number}</span>
                  </a>

                  <button
                    onClick={() => handleCopy(item.number, item.raw)}
                    className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 text-slate-700 transition"
                    title="Copy number"
                  >
                    {copiedRaw === item.raw ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Email Channel */}
          <div className="p-3.5 rounded-xl border border-slate-200 bg-blue-50/60 flex items-center justify-between text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#1e3a8a]" />
              <div>
                <strong>Official Email: </strong>
                <span>ggchmr@gmail.com</span>
              </div>
            </div>
            <a 
              href="mailto:ggchmr@gmail.com" 
              className="text-[#1e3a8a] font-bold hover:underline"
            >
              Compose Mail →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Campus Address: Ward No. 10, Near Bus Stand, Hamirpur (H.P.)</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
