import React from 'react';
import { useApp } from '../context/AppContext';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../data/initialData';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactCTA } from '../components/ContactCTA';
import { 
  Wrench, 
  Cpu, 
  Truck, 
  Calendar, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setCurrentPage, setIsBookModalOpen } = useApp();

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] sm:min-h-[700px] flex items-center bg-workshop-950 border-b border-workshop-800 overflow-hidden">
        {/* Background Workshop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=2200&q=85"
            alt="Modern automotive workshop technician diagnosing a vehicle"
            className="w-full h-full object-cover object-center filter brightness-40 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-workshop-950 via-workshop-950/90 to-workshop-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-workshop-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900/95 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
              <span>Independent Auto Diagnostics & Repair • Accra</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Professional Auto Care. <br />
              <span className="text-slate-100">Without the Guesswork.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Expert diagnostics, maintenance and repairs for modern vehicles. We identify the problem, explain the solution and get you back on the road.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg transition-colors"
              >
                <Calendar className="w-5 h-5 mr-2.5" />
                Book a Service
              </button>
              <a
                href="tel:+233245550192"
                className="inline-flex items-center justify-center px-8 py-4 bg-workshop-900/90 hover:bg-workshop-800 text-slate-100 font-bold text-sm uppercase tracking-wider rounded border border-workshop-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2.5 text-crimson-500" />
                Talk to a Technician
              </a>
            </div>

            {/* Sub-hero Trust Statement */}
            <div className="pt-6 border-t border-workshop-800">
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                Serving vehicle owners, businesses and fleets across Greater Accra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (FULL WIDTH, GENEROUS SPACING) */}
      <section className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 -mt-8 sm:-mt-14 relative z-20">
        <div className="bg-workshop-900 border border-workshop-800 rounded shadow-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-workshop-800">
          <div className="flex items-center space-x-4 pt-3 sm:pt-0 sm:px-4">
            <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">Computer Diagnostics</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Accurate fault-code & live sensor analysis</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-3 sm:pt-0 sm:px-4">
            <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">Repair & Maintenance</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Quality parts & torque-to-spec procedures</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-3 sm:pt-0 sm:px-4">
            <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">Vehicle Inspection</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Independent 150+ point pre-purchase check</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-3 sm:pt-0 sm:px-4">
            <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">Fleet Services</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Scheduled maintenance & downtime reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE AUTOMOTIVE SERVICES SECTION */}
      <section className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-workshop-800 gap-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
              Specialized Workshop Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Complete Automotive Services
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              From routine maintenance to complex diagnostics, our technicians use the right tools and a systematic approach to keep your vehicle reliable.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center text-sm font-bold text-crimson-400 hover:text-crimson-300 transition-colors shrink-0"
          >
            View All 8 Services <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.slice(0, 8).map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (CLEAN 4-STEP PROCESS) */}
      <section className="bg-workshop-900 border-y border-workshop-800 py-20">
        <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
              Simple, Transparent Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              No hidden fees, no unnecessary parts replacement, and no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-workshop-950 p-8 rounded border border-workshop-800 relative space-y-3">
              <span className="text-5xl font-black text-workshop-800 block font-mono">01</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Request a Service
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us about your vehicle and the issue online or via phone/WhatsApp.
              </p>
            </div>

            <div className="bg-workshop-950 p-8 rounded border border-workshop-800 relative space-y-3">
              <span className="text-5xl font-black text-workshop-800 block font-mono">02</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Vehicle Assessment
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Our technicians inspect and diagnose the vehicle using proper test equipment.
              </p>
            </div>

            <div className="bg-workshop-950 p-8 rounded border border-workshop-800 relative space-y-3">
              <span className="text-5xl font-black text-workshop-800 block font-mono">03</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Get the Estimate
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We explain the problem, recommended work and estimated cost before starting.
              </p>
            </div>

            <div className="bg-workshop-950 p-8 rounded border border-workshop-800 relative space-y-3">
              <span className="text-5xl font-black text-workshop-800 block font-mono">04</span>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Repair & Collection
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We complete the approved work and keep you updated until your car is ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (WITH REAL WORKSHOP PHOTO) */}
      <section className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
                Our Workmanship Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Vehicle Owners Choose TorqueWorks
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We built our workshop around engineering discipline, transparent client communication, and reliable diagnostic procedures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-2.5 shrink-0" />
                  Proper Diagnosis
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We diagnose before replacing parts. You only pay for components that are truly defective.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-2.5 shrink-0" />
                  Transparent Communication
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We explain what we find and what needs to be done in plain language, backed by digital inspection photos.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-2.5 shrink-0" />
                  Experienced Technicians
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Skilled technicians working with modern diagnostic equipment and certified repair standards.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white uppercase tracking-wide flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 mr-2.5 shrink-0" />
                  Quality Work
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Repairs are performed using appropriate tools, procedures and quality replacement parts.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center text-sm font-bold text-slate-100 hover:text-white bg-workshop-800 hover:bg-workshop-700 px-6 py-3.5 rounded border border-workshop-700 transition-colors"
              >
                Learn More About Our Standards <ArrowRight className="w-4 h-4 ml-2 text-crimson-500" />
              </button>
            </div>
          </div>

          <div className="relative rounded overflow-hidden border border-workshop-800 shadow-2xl bg-workshop-900">
            <img
              src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1400&q=80"
              alt="Experienced automotive mechanic diagnosing engine wiring in workshop"
              className="w-full h-[450px] sm:h-[520px] object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-workshop-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 bg-workshop-950/95 backdrop-blur-xs p-5 rounded border border-workshop-800">
              <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 block mb-1">
                Workshop Reality
              </span>
              <p className="text-sm text-slate-200">
                Every vehicle undergoing diagnostics is tested systematically with digital multi-meters, oscilloscopes, and OEM scanner live telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VEHICLE INSPECTION SPOTLIGHT (USED CAR BUYERS) */}
      <section className="bg-workshop-900 border-y border-workshop-800 py-20">
        <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
                  Pre-Purchase Peace of Mind
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Buying a Used Car?
                </h2>
                <p className="text-lg font-bold text-slate-100">
                  Know what you're buying before you commit.
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Avoid buying someone else's hidden mechanical problems. In Ghana, buying a used vehicle carries real financial risk. Our independent 150+ point evaluation examines all critical components before money changes hands:
                </p>
              </div>

              {/* Checklist areas */}
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                {[
                  'Engine Health & Compression',
                  'Transmission Shifting & Fluid',
                  'Brake Friction & Discs',
                  'Suspension & Bushings',
                  'Steering Rack & Tie Rods',
                  'Tires & Tread Life',
                  'Battery & Alternator Load',
                  'Cooling System & Radiator',
                  'Electrical Systems & Sensors',
                  'Exterior & Interior Lights',
                  'Air Conditioning Performance',
                  'Fluid Contamination & Levels',
                  'Body Panel Paint Depth (Bondo)',
                  'Diagnostic Fault Codes (OBD-II)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 py-1">
                    <span className="w-2 h-2 rounded-full bg-crimson-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-md"
                >
                  <Calendar className="w-5 h-5 mr-2.5" />
                  Book Inspection
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('inspection');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-workshop-950 hover:bg-workshop-800 text-white border border-workshop-700 font-bold text-sm uppercase tracking-wider rounded transition-colors"
                >
                  View Inspection Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* What We Uncover & Package Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-workshop-950 p-8 rounded border border-workshop-800 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-workshop-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-workshop-900 border border-workshop-700 rounded text-crimson-500">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">What Our Technicians Uncover</h3>
                      <p className="text-xs text-workshop-400">Independent findings before purchase</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Cleared Trouble Codes:</strong>
                      <span>Sellers often wipe check engine lights before test drives. We scan pending codes and monitor readiness states.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Hidden Frame & Bondo Work:</strong>
                      <span>We measure paint thickness across all panels to detect collision repairs, frame welds, and heavy body filler.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Flood Damage & Corrosion:</strong>
                      <span>Deep chassis inspection for saltwater corrosion, rusted subframes, and flooded wiring harnesses.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Imminent Repair Costs:</strong>
                      <span>Detailed wear forecasts on shocks, brake pads, timing belts, and bushings so you negotiate with confidence.</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-workshop-900 rounded border border-workshop-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 block">Comprehensive Inspection</span>
                    <span className="text-white font-bold text-sm">Full 150+ point evaluation in Accra</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-mono font-bold text-crimson-400">GH₵ 950</span>
                    <span className="block text-xs text-workshop-400">~2.5 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLEET SERVICES SECTION (SERIOUS B2B) */}
      <section className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-workshop-900 border border-workshop-800 rounded p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-4xl space-y-8 relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
              Corporate & Commercial Fleet Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Keep Your Fleet Moving.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide structured maintenance planning, scheduled servicing, and fast turnaround for organizations operating multiple vehicles across Ghana:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base text-slate-200">
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Company Vehicles
              </div>
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Delivery Fleets
              </div>
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Corporate Vehicles
              </div>
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Transport Companies
              </div>
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Rental Vehicles
              </div>
              <div className="bg-workshop-950 p-4 rounded border border-workshop-800 font-semibold">
                • Commercial Vehicles
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-100 mb-4">
                Fleet Program Features:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Preventive maintenance schedules</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Digital vehicle service history logs</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Transparent repair tracking & approvals</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Automated maintenance reminders</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Periodic safety inspections</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson-500 shrink-0" />
                  <span>Guaranteed turnaround to reduce downtime</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setCurrentPage('fleet');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center px-8 py-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-md"
              >
                Talk to Our Fleet Team
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
            Real Customer Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Feedback
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Honest communication, accurate diagnoses, and reliable vehicle collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS_DATA.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* 9. REUSABLE CONTACT CTA */}
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <ContactCTA />
      </div>
    </div>
  );
};
