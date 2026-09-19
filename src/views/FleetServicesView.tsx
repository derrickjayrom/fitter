import React from 'react';
import { useApp } from '../context/AppContext';
import { ContactCTA } from '../components/ContactCTA';
import { 
  Truck, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  BarChart3, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const FleetServicesView: React.FC = () => {
  const { setIsBookModalOpen } = useApp();

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <Truck className="w-4 h-4" />
          <span>B2B & Corporate Fleet Management</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Keep Your Fleet Moving.
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          Vehicle downtime disrupts deliveries, strands personnel, and drives up operating costs. TorqueWorks Auto partners with businesses across Greater Accra to provide structured preventive maintenance, rapid turnaround, and full digital repair tracking.
        </p>
      </div>

      {/* Fleets We Support */}
      <div className="bg-workshop-900 border border-workshop-800 p-10 rounded space-y-8">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
          Vehicles & Fleets We Support Across Ghana
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Company Vehicles</h4>
            <p className="text-sm sm:text-base text-slate-300">Executive sedans, manager SUVs, and pool cars for corporate staff mobility.</p>
          </div>
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Delivery Fleets</h4>
            <p className="text-sm sm:text-base text-slate-300">Courier vans, motorcycles, and light delivery pickups operating on tight delivery schedules.</p>
          </div>
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Corporate Transporters</h4>
            <p className="text-sm sm:text-base text-slate-300">Staff commuter buses and shuttle vans requiring strict safety and punctuality standards.</p>
          </div>
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Car Rental Fleets</h4>
            <p className="text-sm sm:text-base text-slate-300">High-turnover rental vehicles needing rapid turnarounds and comprehensive safety checks.</p>
          </div>
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Commercial Pickups</h4>
            <p className="text-sm sm:text-base text-slate-300">Heavy-duty 4x4 workhorses (Hilux, D-Max, Ranger) carrying cargo over challenging roads.</p>
          </div>
          <div className="bg-workshop-950 p-6 rounded border border-workshop-800 space-y-2">
            <h4 className="font-bold text-white text-lg">Logistics Operators</h4>
            <p className="text-sm sm:text-base text-slate-300">Regional freight and transport fleets operating along the Accra-Kumasi-Takoradi corridors.</p>
          </div>
        </div>
      </div>

      {/* Fleet Features Grid */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
            Engineered For Uptime
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Key Features of the TorqueWorks Fleet Program
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <Clock className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Preventive Maintenance Schedules</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Custom mileage and engine-hour intervals designed for Ghana's tropical climate, ensuring oil, filters, and wear items are replaced before failure.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <FileText className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Digital Vehicle Service History</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every repair, part replaced, and diagnostic scan is logged digitally. Access complete maintenance histories per vehicle for accounting and audits.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <BarChart3 className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Repair Tracking & Monthly Invoicing</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              No unauthorized repairs. Fleet managers receive transparent digital quotes before work starts, with unified monthly billing for corporate accounts.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <ShieldCheck className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Periodic Safety Inspections</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Quarterly multi-point mechanical audits covering brakes, suspension, tire wear, and fluid conditions to avoid roadside breakdowns.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <Truck className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Priority Workshop Bay Access</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fleet vehicles receive priority queueing to ensure minimal idle time, keeping your drivers and goods moving without costly delays.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <CheckCircle2 className="w-8 h-8 text-crimson-500" />
            <h3 className="text-lg font-bold text-white">Dedicated Account Coordinator</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A single point of contact for your dispatchers and fleet manager, offering fast updates and direct telephone / WhatsApp communication.
            </p>
          </div>
        </div>
      </div>

      {/* Fleet Consultation CTA */}
      <div className="bg-workshop-900 border border-workshop-800 p-10 rounded flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to streamline your vehicle maintenance?</h3>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            Schedule a fleet assessment with our Workshop Manager. We will evaluate your fleet requirements and prepare a customized maintenance proposal.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20we%20would%20like%20to%20discuss%20a%20corporate%20fleet%20maintenance%20account."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2.5" />
            WhatsApp Fleet Team
          </a>
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="inline-flex items-center justify-center px-6 py-4 bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors"
          >
            Book Fleet Audit
            <ArrowRight className="w-5 h-5 ml-2.5" />
          </button>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
};
