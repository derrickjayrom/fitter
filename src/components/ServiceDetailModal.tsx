import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, AlertCircle, Wrench, Clock, Calendar } from 'lucide-react';

export const ServiceDetailModal: React.FC = () => {
  const { selectedService, setSelectedService, setIsBookModalOpen } = useApp();

  if (!selectedService) return null;

  const handleBookThis = () => {
    setSelectedService(null);
    setIsBookModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-workshop-900 border border-workshop-700 rounded shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="relative h-56 sm:h-72 bg-workshop-950 shrink-0">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover brightness-75 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-workshop-900 via-workshop-900/60 to-transparent" />
          
          <button
            onClick={() => setSelectedService(null)}
            className="absolute top-5 right-5 p-2.5 bg-workshop-950/90 hover:bg-workshop-950 text-slate-200 hover:text-white rounded-full border border-workshop-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-8 right-8">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-crimson-600 text-white rounded mb-2.5">
              {selectedService.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {selectedService.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8 overflow-y-auto space-y-8 text-base">
          <div>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {selectedService.fullDesc}
            </p>
          </div>

          {/* Turnaround Strip */}
          <div className="flex items-center px-5 py-4 bg-workshop-800/80 border border-workshop-700 rounded text-sm sm:text-base text-slate-200">
            <Clock className="w-5 h-5 text-crimson-500 mr-3 shrink-0" />
            <span className="font-bold mr-2 text-white">Estimated Turnaround:</span>
            <span>{selectedService.estimatedTime} (subject to specific vehicle diagnosis)</span>
          </div>

          {/* Common Symptoms / Indications */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-400 mr-2.5" />
              Common Symptoms & Signs You Need This Service
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {selectedService.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mr-3 mt-2 shrink-0" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Diagnostic Approach */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center">
              <Wrench className="w-5 h-5 text-crimson-500 mr-2.5" />
              Our Systematic Diagnostic Approach
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {selectedService.diagnosticApproach.map((approach, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-crimson-500 mr-3 mt-2 shrink-0" />
                  <span>{approach}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Included */}
          <div className="space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2.5" />
              What Is Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-300">
              {selectedService.whatsIncluded.map((item, idx) => (
                <div key={idx} className="flex items-start bg-workshop-850 p-4 rounded border border-workshop-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-workshop-950 border-t border-workshop-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-sm text-slate-300">
            Transparent estimates provided before any mechanical work begins.
          </p>
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="w-1/2 sm:w-auto px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-workshop-800 hover:bg-workshop-700 rounded transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleBookThis}
              className="w-1/2 sm:w-auto px-7 py-3 text-sm font-bold uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 rounded transition-colors flex items-center justify-center shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book This Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
