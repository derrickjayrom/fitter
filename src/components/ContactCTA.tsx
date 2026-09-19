import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactCTA: React.FC = () => {
  const { setIsBookModalOpen } = useApp();

  return (
    <div className="bg-workshop-900 border border-workshop-800 rounded p-10 sm:p-14 my-16 relative overflow-hidden">
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-crimson-400">
            Fast Communication & Direct Access
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Have a Question About Your Vehicle?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Reach out directly to our service team. We can advise on immediate safety precautions, schedule a diagnostic slot, or provide preliminary information.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2 text-sm text-slate-300">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-crimson-500" />
              Spintex Road, Accra
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-workshop-400" />
              Mon – Sat: 8:00 AM – 5:00 PM
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
          <a
            href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20have%20an%20inquiry%20about%20my%20vehicle."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-4 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold uppercase tracking-wider shadow-md transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2.5" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+233245550192"
            className="inline-flex items-center justify-center px-7 py-4 rounded bg-workshop-800 hover:bg-workshop-700 text-slate-100 text-sm font-bold uppercase tracking-wider border border-workshop-700 transition-colors"
          >
            <Phone className="w-5 h-5 mr-2.5 text-crimson-500" />
            Call: +233 24 555 0192
          </a>
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="inline-flex items-center justify-center px-7 py-4 rounded bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
          >
            <Calendar className="w-5 h-5 mr-2.5" />
            Book a Service Slot
          </button>
        </div>
      </div>
    </div>
  );
};
