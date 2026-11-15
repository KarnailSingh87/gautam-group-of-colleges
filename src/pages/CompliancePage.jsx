import React from 'react';
import { ShieldCheck, AlertTriangle, ExternalLink, FileText, Download, Phone, Lock, HeartHandshake } from 'lucide-react';
import { COMPLIANCE_CELLS } from '../data/blueprintData';

export default function CompliancePage() {
  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              Statutory Compliance & Welfare • Part 13 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Mandatory Disclosures, Anti-Ragging & Grievance Redressal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In accordance with AICTE, PCI, INC, UGC & Supreme Court of India directives, Gautam Group of Colleges operates with full statutory transparency and zero-tolerance safety policies.
            </p>
          </div>
        </div>

        {/* Anti-Ragging Toll-Free Emergency Alert */}
        <div className="p-6 rounded-3xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-red-900 text-base">National Anti-Ragging 24x7 Toll-Free Helpline: 1800-180-5522</h3>
              <p className="text-xs text-red-700">Ragging is a punishable criminal offense. Gautam Group campuses are strictly monitored by CCTV & faculty flying squads.</p>
            </div>
          </div>
          <a
            href="https://www.antiragging.in"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shadow"
          >
            <span>Visit National Anti-Ragging Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Statutory Cells Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {COMPLIANCE_CELLS.map((cell, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">{cell.name}</h4>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="mt-2 text-indigo-700 font-semibold">{cell.helpline}</div>
                <div className="text-slate-600 mt-1"><strong>Nodal In-charge:</strong> {cell.convener}</div>
                <div className="text-slate-500 mt-1">{cell.status}</div>
              </div>

              <a
                href={cell.redirect}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-600 font-bold hover:underline pt-2 border-t"
              >
                <span>Statutory Authority Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Mandatory Disclosure PDF Downloads */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4 text-xs">
          <h3 className="text-lg font-bold text-slate-900">Mandatory Public Disclosures (Audit & Inspection Reports)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: 'AICTE Mandatory Disclosure Form 2024-25', size: '2.4 MB PDF' },
              { name: 'PCI SIF (Standard Inspection Form)', size: '3.1 MB PDF' },
              { name: 'Annual Audited Financial Accounts 2023-24', size: '1.8 MB PDF' },
              { name: 'Internal Complaints Committee Annual Report', size: '640 KB PDF' },
              { name: 'Right to Information (RTI) Manual & Directory', size: '820 KB PDF' },
              { name: 'College Campus Building Safety Certificate', size: '940 KB PDF' },
            ].map((doc, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">{doc.name}</div>
                  <div className="text-[10px] text-slate-500">{doc.size}</div>
                </div>
                <button onClick={() => alert(`Downloading: ${doc.name}`)} className="p-1.5 text-indigo-600 hover:bg-white rounded-lg">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
