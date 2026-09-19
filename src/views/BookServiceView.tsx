import React from 'react';
import { ServiceRequestForm } from '../components/ServiceRequestForm';
import { Calendar, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const BookServiceView: React.FC = () => {
  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <Calendar className="w-4 h-4" />
          <span>Workshop Service Request</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Book a Service or Diagnostic Session
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          Provide your vehicle details and describe the symptoms you're experiencing. Our service team will review your request, prepare the appropriate diagnostic bay, and contact you to confirm intake.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Form */}
        <div className="lg:col-span-8 bg-workshop-900 border border-workshop-800 p-8 sm:p-12 rounded shadow-2xl">
          <ServiceRequestForm />
        </div>

        {/* Sidebar Help & Policy */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center">
              <Clock className="w-5 h-5 text-crimson-500 mr-2.5" />
              Workshop Intake Hours
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-workshop-800">
                <span>Monday – Friday</span>
                <span className="text-white font-semibold">8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-workshop-800">
                <span>Saturday</span>
                <span className="text-white font-semibold">8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span>Sunday</span>
                <span className="text-workshop-500 font-medium">Closed</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-workshop-400 leading-relaxed pt-1">
              Vehicles brought in before 10:00 AM for routine servicing or computer diagnostics are typically ready for collection same-day.
            </p>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-5">
            <h3 className="text-base font-bold uppercase tracking-wider text-white flex items-center">
              <ShieldCheck className="w-5 h-5 text-crimson-500 mr-2.5" />
              Our Intake Transparency
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-crimson-500 mr-2.5 mt-2 shrink-0" />
                <span>We inspect your vehicle and provide an itemized written estimate before any repairs begin.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-crimson-500 mr-2.5 mt-2 shrink-0" />
                <span>No work is completed without your explicit verbal or written authorization.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-crimson-500 mr-2.5 mt-2 shrink-0" />
                <span>Replaced old parts are returned to you upon vehicle collection if requested.</span>
              </li>
            </ul>
          </div>

          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-4">
            <h3 className="text-base font-bold uppercase tracking-wider text-white">
              Need Faster Assistance?
            </h3>
            <p className="text-sm text-slate-300">
              If your vehicle has broken down or you need immediate roadside advice:
            </p>
            <div className="space-y-3 pt-1">
              <a
                href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20need%20urgent%20service%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp (+233 24 555 0192)
              </a>
              <a
                href="tel:+233245550192"
                className="w-full py-3.5 px-4 bg-workshop-800 hover:bg-workshop-700 text-slate-100 font-bold text-sm rounded flex items-center justify-center border border-workshop-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-crimson-500" />
                Direct Call: +233 24 555 0192
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
