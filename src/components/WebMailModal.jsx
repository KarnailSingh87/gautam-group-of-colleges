import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  ExternalLink, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export default function WebMailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [server, setServer] = useState('webmail.ggchmr.com');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setStatusMsg('Redirecting to Roundcube Secure Webmail session...');
      setTimeout(() => {
        window.open('https://mail.google.com', '_blank');
        setStatusMsg(null);
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#02263c] text-white p-4 sm:p-5 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base tracking-wide uppercase font-['Roboto_Condensed',sans-serif]">
                Institutional Web Mail
              </h3>
              <p className="text-[11px] text-slate-300">Faculty, Staff & Departmental Mail Access</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-4 text-xs">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-950 flex items-start gap-2">
            <Server className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
            <div>
              <strong className="block">Secure College Mail Server:</strong>
              <span>Enter your official @ggchmr.com institutional email credentials below.</span>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Official Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="faculty@ggchmr.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#1e3a8a]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:border-[#1e3a8a]"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700">Mail Client Platform</label>
            <select
              value={server}
              onChange={(e) => setServer(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 bg-white focus:outline-none focus:border-[#1e3a8a]"
            >
              <option value="webmail.ggchmr.com">Roundcube Webmail Client (SSL 256-bit)</option>
              <option value="horde.ggchmr.com">Horde Groupware Mail</option>
              <option value="gmail">Google Workspace / Gmail for Education</option>
            </select>
          </div>

          {statusMsg && (
            <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-center font-bold">
              {statusMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-2.5 rounded-lg bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold transition flex items-center justify-center gap-2 shadow-xs"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{isLoggingIn ? 'Authenticating...' : 'Sign In to Web Mail'}</span>
          </button>

          <div className="pt-2 text-center text-slate-500 text-[11px] space-y-1">
            <div>Trouble signing in? Contact IT Cell: <strong>01972-221493</strong></div>
            <a 
              href="mailto:ggchmr@gmail.com" 
              className="text-[#ea580c] font-bold hover:underline inline-block"
            >
              Or open default email client (ggchmr@gmail.com)
            </a>
          </div>
        </form>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 text-center text-[10px] text-slate-500">
          SSL Protected • Gautam Group of Colleges IT Services
        </div>

      </div>
    </div>
  );
}
