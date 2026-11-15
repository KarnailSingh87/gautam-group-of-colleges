import React from 'react';
import { ShieldCheck, ExternalLink, FileText, CheckCircle2, Award, Download, ArrowRight } from 'lucide-react';
import { AFFILIATIONS_APPROVALS, INSTITUTION_INFO } from '../data/blueprintData';

export default function AffiliationsPage() {
  return (
    <div className="py-12 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Statutory Approvals & Accreditations • Part 3 Blueprint
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Accreditation, Affiliations & University Approvals
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every course at Gautam Group of Colleges is conducted in strict compliance with the statutory apex councils of the Government of India and affiliating state universities.
            </p>
            
            {/* AISHE & College Code Banner */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-amber-300">
                AISHE Code: <strong>{INSTITUTION_INFO.aisheCode}</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400">
                College Code: <strong>{INSTITUTION_INFO.collegeCode}</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-blue-300">
                UGC Section: <strong>2(f) & 12(B) Approved</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Official Affiliation & Statutory Table with Verify Links */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Apex Statutory Council Approvals & University Affiliation Matrix</h2>
              <p className="text-xs text-slate-500 mt-1">Official verification redirects and government notification gazette copies</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              ✓ All Approvals Active (2024–25)
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[11px] font-bold border-b border-slate-200">
                  <th className="p-4">Statutory Body / University</th>
                  <th className="p-4">Regulatory Jurisdiction</th>
                  <th className="p-4">Status & Gazette Ref</th>
                  <th className="p-4 text-right">Official Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {AFFILIATIONS_APPROVALS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{item.body}</span>
                    </td>
                    <td className="p-4 text-slate-600">{item.role}</td>
                    <td className="p-4">
                      <span className="font-semibold text-slate-800">{item.status}</span>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">{item.docNumber}</div>
                    </td>
                    <td className="p-4 text-right">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white font-bold transition-all shadow-sm"
                      >
                        <span>Verify Approval</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloadable Approval Letters Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Download Official Gazette & Approval Orders (PDF)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            {[
              { title: 'PCI Approval Order 2024-25', sub: 'Pharmacy Council of India Gazette', size: '1.4 MB' },
              { title: 'INC Nursing Recognition Letter', sub: 'Indian Nursing Council New Delhi', size: '980 KB' },
              { title: 'AICTE Extension of Approval (EOA)', sub: 'Management & Polytechnic 2024-25', size: '2.1 MB' },
              { title: 'HPU Permanent Affiliation Certificate', sub: 'Himachal Pradesh University Shimla', size: '1.1 MB' },
              { title: 'HPTU Technical Affiliation Letter', sub: 'HP Technical University Hamirpur', size: '840 KB' },
              { title: 'AMRU Health Sciences Notification', sub: 'Atal Medical & Research University', size: '1.6 MB' },
            ].map((doc, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between hover:border-indigo-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{doc.title}</div>
                    <div className="text-[11px] text-slate-500">{doc.sub} • {doc.size}</div>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading gazette copy: ${doc.title}`)}
                  className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
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
