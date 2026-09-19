import React, { useState } from 'react';
import { SAMPLE_INSPECTION_CAMRY } from '../data/initialData';
import { StatusBadge } from './StatusBadge';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert
} from 'lucide-react';

export const InspectionReportPreview: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const data = SAMPLE_INSPECTION_CAMRY;

  const toggleCategory = (idx: number) => {
    setExpandedCategory(expandedCategory === idx ? null : idx);
  };

  return (
    <div className="bg-workshop-900 border border-workshop-800 rounded shadow-xl overflow-hidden">
      {/* Report Header Strip */}
      <div className="bg-workshop-950 px-6 py-5 border-b border-workshop-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="p-2.5 bg-workshop-900 border border-workshop-700 rounded text-crimson-500">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-0.5">
              <span className="text-xs font-mono uppercase tracking-wider text-workshop-400">Sample Report #TW-INS-2026-089</span>
              <span className="px-2 py-0.5 text-xs bg-workshop-800 text-workshop-300 rounded font-semibold">Demo Format</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">Pre-Purchase Independent Vehicle Inspection</h4>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-xs text-workshop-400 uppercase tracking-wider mb-1 font-semibold">Overall Findings</div>
            <StatusBadge status={data.overallFindings} />
          </div>
        </div>
      </div>

      {/* Vehicle Spec Grid */}
      <div className="p-6 bg-workshop-850 border-b border-workshop-800 grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm">
        <div>
          <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold mb-1">Vehicle</span>
          <span className="text-white font-bold text-base">{data.year} {data.vehicle}</span>
        </div>
        <div>
          <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold mb-1">Registration / Odo</span>
          <span className="text-slate-200 font-semibold">{data.registration} • {data.odometer}</span>
        </div>
        <div>
          <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold mb-1">Inspection Date</span>
          <span className="text-slate-200 font-medium">{data.inspectionDate}</span>
        </div>
        <div>
          <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold mb-1">Status</span>
          <StatusBadge status={data.inspectionStatus} />
        </div>
      </div>

      {/* Technician Executive Summary */}
      <div className="p-6 border-b border-workshop-800 text-sm">
        <div className="flex items-start space-x-4 bg-workshop-950 p-5 rounded border border-workshop-800">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <span className="font-bold text-slate-100 uppercase tracking-wide text-xs">
              Inspecting Technician Finding Summary
            </span>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {data.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive System Breakdown Checklist */}
      <div className="divide-y divide-workshop-800">
        {data.checklist.map((cat, idx) => {
          const isExpanded = expandedCategory === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                onClick={() => toggleCategory(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-workshop-850 transition-colors focus:outline-none"
              >
                <div className="flex items-center space-x-3.5">
                  {cat.status === 'Pass' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  )}
                  <span className="text-sm sm:text-base font-bold text-slate-100">{cat.category}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                    cat.status === 'Pass' ? 'text-emerald-400 bg-emerald-950/60' : 'text-amber-400 bg-amber-950/60'
                  }`}>
                    {cat.items.length} Points Verified
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-workshop-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-workshop-400" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-5 pt-2 bg-workshop-950/60 space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded bg-workshop-900 border border-workshop-800 flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2"
                    >
                      <div className="space-y-1">
                        <span className="font-semibold text-white text-sm sm:text-base">{item.name}</span>
                        <p className="text-xs sm:text-sm text-slate-300">{item.note}</p>
                      </div>
                      <div className="shrink-0">
                        {item.status === 'Pass' ? (
                          <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 rounded">
                            PASS
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-800/60 rounded">
                            ATTENTION
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Report Footer */}
      <div className="p-5 bg-workshop-950 border-t border-workshop-800 flex flex-col sm:flex-row items-center justify-between text-sm text-workshop-300 gap-3">
        <div className="flex items-center space-x-2">
          <span className="text-slate-200 font-semibold">Estimated Rectification Cost:</span>
          <span className="text-crimson-400 font-bold font-mono text-base">GH₵ {data.estimatedRepairsCostGHS.toLocaleString()}</span>
          <span className="text-xs text-workshop-400">(Used for buyer price negotiation)</span>
        </div>
        <span className="text-xs text-workshop-400 italic">
          * Representative sample report format. Not a real customer document.
        </span>
      </div>
    </div>
  );
};
