import React from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const { setIsBookModalOpen } = useApp();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-workshop-950/98 backdrop-blur-lg border-t border-workshop-800 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 divide-x divide-workshop-800/80 max-w-lg mx-auto">
        {/* Call Action */}
        <a
          href="tel:+233245550192"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-slate-200 hover:text-white active:bg-workshop-900 transition-colors"
          aria-label="Call TorqueWorks Auto"
        >
          <Phone className="w-5 h-5 text-crimson-500 mb-1" />
          <span className="text-[11px] font-semibold tracking-wide uppercase">Call Us</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20would%20like%20to%20inquire%20about%20a%20vehicle%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 text-slate-200 hover:text-white active:bg-workshop-900 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-emerald-500 mb-1" />
          <span className="text-[11px] font-semibold tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Book Service Action */}
        <button
          onClick={() => setIsBookModalOpen(true)}
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 text-white transition-colors"
          aria-label="Book a Service"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Book Service</span>
        </button>
      </div>
    </div>
  );
};
