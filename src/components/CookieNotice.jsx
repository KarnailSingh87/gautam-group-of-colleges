import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, X } from 'lucide-react';

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('ggc_cookie_consent');
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ggc_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-700 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="space-y-1 text-xs">
          <div className="font-bold text-white flex items-center gap-1.5">
            <span>SSL Secured & Privacy Protected</span>
            <Lock className="w-3 h-3 text-amber-400" />
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            This official college portal utilizes 256-bit SSL encryption and spam protection. We use minimal cookies to manage session authentication and improve admissions counseling.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] transition shadow-xs"
            >
              Accept & Continue
            </button>
            <button
              onClick={() => setShow(false)}
              className="text-slate-400 hover:text-white text-[11px] transition"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
