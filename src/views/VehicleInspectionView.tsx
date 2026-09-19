import React from 'react';
import { useApp } from '../context/AppContext';
import { InspectionReportPreview } from '../components/InspectionReportPreview';
import { ContactCTA } from '../components/ContactCTA';
import { 
  FileCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';

export const VehicleInspectionView: React.FC = () => {
  const { setIsBookModalOpen } = useApp();

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <FileCheck className="w-4 h-4" />
          <span>Independent Pre-Purchase Inspection</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Buying a Used Car? <br />
          <span className="text-slate-100">Know what you're buying before you commit.</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          In Ghana, purchasing a used vehicle—whether "home-used" or foreign-used—carries significant financial risk. Hidden accident repairs, flood damage, masked diagnostic fault codes, and worn-out mechanical parts can cost you thousands of cedis immediately after purchase.
        </p>
      </div>

      {/* Two Column Section: Why Inspect & Interactive Report Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-100 flex items-center">
              <ShieldAlert className="w-5 h-5 text-crimson-500 mr-2.5" />
              What We Uncover During Inspections
            </h3>
            <ul className="space-y-4 text-sm sm:text-base text-slate-300">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-3 mt-0.5 shrink-0" />
                <span><strong className="text-white">Cleared Trouble Codes:</strong> Sellers often clear check engine lights before viewings. We read pending codes and drive-cycle monitor readiness.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-3 mt-0.5 shrink-0" />
                <span><strong className="text-white">Hidden Frame Damage:</strong> We inspect frame rails and use digital paint depth gauges to detect body filler (bondo) from major structural collisions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-3 mt-0.5 shrink-0" />
                <span><strong className="text-white">Flood & Rust History:</strong> We inspect deep underbody cavities and electrical connectors for silt or saltwater corrosion.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-3 mt-0.5 shrink-0" />
                <span><strong className="text-white">Imminent Component Failures:</strong> Worn suspension bushings, cracked serpentine belts, leaking shock absorbers, and thinning brake pads.</span>
              </li>
            </ul>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-100">
              Inspection Package (Accra)
            </h3>
            <div className="p-6 bg-workshop-950 rounded border border-workshop-800 flex justify-between items-center">
              <div>
                <h4 className="text-base font-bold text-white">Comprehensive 150+ Point Inspection</h4>
                <p className="text-sm text-slate-300 mt-1">Full electronic scan + physical on-lift mechanical audit + road test</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="text-xl font-bold text-crimson-400 font-mono">GH₵ 950</span>
                <span className="block text-xs text-workshop-400 mt-0.5">2.5 Hours</span>
              </div>
            </div>

            <button
              onClick={() => setIsBookModalOpen(true)}
              className="w-full py-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-md flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2.5" />
              Book Vehicle Inspection
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-200">
              Interactive Sample Inspection Report
            </h3>
            <span className="text-xs text-workshop-400">Click any system below to inspect items</span>
          </div>
          <InspectionReportPreview />
        </div>
      </div>

      <ContactCTA />
    </div>
  );
};
