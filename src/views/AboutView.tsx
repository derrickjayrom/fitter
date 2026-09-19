import React from 'react';
import { useApp } from '../context/AppContext';
import { ContactCTA } from '../components/ContactCTA';
import { 
  ShieldCheck, 
  Target, 
  Wrench, 
  ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <ShieldCheck className="w-4 h-4" />
          <span>About TorqueWorks Auto</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Built Around Better Automotive Service.
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          TorqueWorks Auto was established to provide reliable automotive diagnostics, repair and maintenance in Ghana while making the entire process easier, more transparent, and predictable for vehicle owners.
        </p>
      </div>

      {/* Story & Workshop Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Story: Moving Beyond Trial and Error
          </h2>
          <p>
            For too long, motorists in Accra have faced a frustrating cycle: an unexplainable dashboard warning light or mysterious noise leads to a workshop where parts are swapped on a hunch. After spending hard-earned cedis on fuel pumps, oxygen sensors, and spark plugs, the underlying fault often remains unresolved.
          </p>
          <p>
            TorqueWorks Auto was founded by automotive engineers and seasoned master technicians who believed there was a better way: an engineering approach. By investing in modern electronic diagnostic scanners, digital oscilloscopes, and standardized repair procedures, we eliminated guesswork.
          </p>
          <p>
            Today, our facility on Spintex Road serves private motorists, business executives, and corporate fleets with a simple promise: we diagnose the root cause before recommending any repair, and we provide transparent quotes before turning a wrench.
          </p>
        </div>

        <div className="rounded overflow-hidden border border-workshop-800 shadow-2xl bg-workshop-900">
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1400&q=80"
            alt="TorqueWorks Auto workshop bay in Accra"
            className="w-full h-96 sm:h-[480px] object-cover filter brightness-90 contrast-105"
          />
          <div className="p-5 bg-workshop-950 border-t border-workshop-800 text-sm text-slate-300">
            Precision equipment, organized tool boards, and clean hydraulic service bays at our Spintex Road workshop.
          </div>
        </div>
      </div>

      {/* Mission & Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-workshop-900 border border-workshop-800 p-10 rounded space-y-4">
          <div className="w-12 h-12 rounded bg-crimson-900/50 border border-crimson-700/50 flex items-center justify-center text-crimson-400">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            To set a new benchmark for automotive repair in West Africa by pairing modern diagnostic science with upfront, honest communication—giving vehicle owners total confidence in the safety, reliability, and operating costs of their cars.
          </p>
        </div>

        <div className="bg-workshop-900 border border-workshop-800 p-10 rounded space-y-4">
          <div className="w-12 h-12 rounded bg-crimson-900/50 border border-crimson-700/50 flex items-center justify-center text-crimson-400">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Our Approach</h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We treat vehicle repair as an engineering discipline. We follow OEM technical service bulletins, torque specifications, and diagnostic flowcharts. We never recommend a part replacement without physical or electronic proof of failure.
          </p>
        </div>
      </div>

      {/* 5 Core Values */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
            Principles We Work By
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-3">
            <div className="text-crimson-500 font-mono font-bold text-2xl">01</div>
            <h4 className="text-lg font-bold text-white">Integrity</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We never fabricate defects or recommend unnecessary work. If a component has remaining lifespan, we tell you truthfully.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-3">
            <div className="text-crimson-500 font-mono font-bold text-2xl">02</div>
            <h4 className="text-lg font-bold text-white">Precision</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From tightening bolts to exact torque ratings to measuring electrical waveform deviations, precision prevents costly rework.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-3">
            <div className="text-crimson-500 font-mono font-bold text-2xl">03</div>
            <h4 className="text-lg font-bold text-white">Accountability</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We stand behind our workmanship and provide clear guarantees on parts and labor. We take full responsibility for vehicle care.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-3">
            <div className="text-crimson-500 font-mono font-bold text-2xl">04</div>
            <h4 className="text-lg font-bold text-white">Customer Care</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We communicate proactively, explain technical terms in plain language, and respect your schedule and budget.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-3">
            <div className="text-crimson-500 font-mono font-bold text-2xl">05</div>
            <h4 className="text-lg font-bold text-white">Continuous Improvement</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Modern vehicle technology evolves rapidly. Our technicians participate in regular diagnostic and technical training updates.
            </p>
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-workshop-900 border border-workshop-800 p-10 rounded flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Meet the technicians working on your vehicle</h3>
          <p className="text-base text-slate-300">Certified mechanical and auto electrical specialists with proven track records.</p>
        </div>
        <button
          onClick={() => {
            setCurrentPage('team');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center px-7 py-3.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shrink-0"
        >
          View Our Team <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <ContactCTA />
    </div>
  );
};
