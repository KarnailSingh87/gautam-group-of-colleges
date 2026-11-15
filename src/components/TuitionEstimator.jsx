import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function TuitionEstimator({ onOpenApply }) {
  const [residency, setResidency] = useState('in-state'); // in-state, out-of-state, international
  const [gpaTier, setGpaTier] = useState('high'); // high (3.8-4.0), mid (3.5-3.79), standard (3.0-3.49)
  const [housing, setHousing] = useState('on-campus'); // on-campus, commuter
  const [programType, setProgramType] = useState('stem'); // stem, business, arts

  const calculation = useMemo(() => {
    let baseTuition = 28500;
    if (residency === 'out-of-state') baseTuition = 38200;
    if (residency === 'international') baseTuition = 42500;

    let programFee = 0;
    if (programType === 'stem') programFee = 2400; // Lab & equipment
    if (programType === 'business') programFee = 1600;

    let housingFee = housing === 'on-campus' ? 13800 : 2200;

    // Merit Scholarship based on GPA
    let meritScholarship = 0;
    let scholarshipName = 'Standard Financial Aid Access';
    if (gpaTier === 'high') {
      meritScholarship = 18500;
      scholarshipName = "Presidential Dean's Merit Fellowship";
    } else if (gpaTier === 'mid') {
      meritScholarship = 12000;
      scholarshipName = "Provost Academic Excellence Award";
    } else {
      meritScholarship = 6500;
      scholarshipName = "Collegiate Opportunity Grant";
    }

    const grossCost = baseTuition + programFee + housingFee;
    const netAnnualCost = Math.max(0, grossCost - meritScholarship);

    return {
      baseTuition,
      programFee,
      housingFee,
      meritScholarship,
      scholarshipName,
      grossCost,
      netAnnualCost
    };
  }, [residency, gpaTier, housing, programType]);

  return (
    <section id="tuition" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Transparent Pricing & Scholarship Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            An Ivy-Tier Education Within Financial Reach
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Over 92% of our first-year students receive generous institutional merit scholarships and need-based grant aid. Calculate your personalized estimate in under 30 seconds.
          </p>
        </div>

        {/* Interactive Calculator Bento */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            
            {/* Step 1: Residency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Residency Status
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'in-state', label: 'In-State Resident', sub: 'Eligible for State Grants' },
                  { id: 'out-of-state', label: 'Out-of-State', sub: 'Regional Reciprocity' },
                  { id: 'international', label: 'International', sub: 'F-1 Visa Eligible' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setResidency(item.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      residency === item.id
                        ? 'border-blue-600 bg-blue-50/70 text-blue-900 shadow-sm ring-1 ring-blue-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 hidden sm:block">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: GPA Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. High School or Transfer GPA
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'high', label: '3.80 – 4.0+ GPA', desc: 'Top Tier Merit Aid', award: '$18,500/yr' },
                  { id: 'mid', label: '3.50 – 3.79 GPA', desc: 'Dean Honor Tier', award: '$12,000/yr' },
                  { id: 'standard', label: '3.00 – 3.49 GPA', desc: 'Standard Merit Tier', award: '$6,500/yr' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setGpaTier(tier.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      gpaTier === tier.id
                        ? 'border-emerald-600 bg-emerald-50/70 text-emerald-900 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5">{tier.award}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 hidden sm:block">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Housing Plan & Program Discipline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Housing & Dining
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setHousing('on-campus')}
                    className={`flex-1 p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      housing === 'on-campus'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    On-Campus Dorm
                  </button>
                  <button
                    onClick={() => setHousing('commuter')}
                    className={`flex-1 p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      housing === 'commuter'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Commuter / Off-Campus
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Intended Field of Study
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'stem', label: 'STEM / AI' },
                    { id: 'business', label: 'Business' },
                    { id: 'arts', label: 'Arts & Hum.' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setProgramType(f.id)}
                      className={`flex-1 p-2.5 rounded-xl text-xs font-bold border transition-all ${
                        programType === f.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2 pt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Estimates reflect 2025–2026 Board of Trustees published tuition rates.</span>
            </div>

          </div>

          {/* Results Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimated Financial Aid Package
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Guaranteed Merit
                </span>
              </div>

              {/* Award Highlight */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Qualifying Scholarship:</div>
                    <div className="text-sm font-bold text-white mt-0.5">{calculation.scholarshipName}</div>
                    <div className="text-xl font-black text-amber-300 mt-1">
                      -${calculation.meritScholarship.toLocaleString()} / year
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Items Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-b border-slate-800 pb-5 mb-5">
                <div className="flex justify-between">
                  <span>Base Tuition & Academic Fees:</span>
                  <span className="font-semibold text-white">${calculation.baseTuition.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Program & Lab Facilities:</span>
                  <span className="font-semibold text-white">+${calculation.programFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Room & Culinary Meal Plan:</span>
                  <span className="font-semibold text-white">+${calculation.housingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Estimated Merit Scholarship Aid:</span>
                  <span>-${calculation.meritScholarship.toLocaleString()}</span>
                </div>
              </div>

              {/* Net Estimated Cost */}
              <div>
                <div className="text-xs text-slate-400">Your Estimated Net Annual Cost:</div>
                <div className="text-4xl font-black text-white mt-1 tracking-tight">
                  ${calculation.netAnnualCost.toLocaleString()}
                  <span className="text-sm font-normal text-slate-400"> / academic year</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Excludes federal Pell grants, state awards, or work-study allowances (up to $4,500 additional).
                </p>
              </div>
            </div>

            {/* Lock in CTA */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={() => onOpenApply('tuition-lock', `Net Estimate: $${calculation.netAnnualCost.toLocaleString()}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Lock In & Email My Aid Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
