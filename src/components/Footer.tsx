import React from 'react';
import { useApp } from '../context/AppContext';
import { Wrench, Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, setIsAdminLoginModalOpen } = useApp();

  const services = [
    { id: 'computer-diagnostics', name: 'Computer Diagnostics' },
    { id: 'general-repairs', name: 'General Mechanical Repairs' },
    { id: 'engine-transmission', name: 'Engine & Transmission' },
    { id: 'electrical-diagnostics', name: 'Electrical Diagnostics' },
    { id: 'air-conditioning', name: 'AC & Climate Control' },
    { id: 'preventive-maintenance', name: 'Preventive Maintenance' },
    { id: 'vehicle-inspection', name: 'Used Car Vehicle Inspection' },
    { id: 'fleet-maintenance', name: 'Fleet Maintenance Programs' },
  ];

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-workshop-950 border-t border-workshop-800 text-slate-300 text-sm sm:text-base pb-20 lg:pb-0">
      <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-crimson-600 to-crimson-800 flex items-center justify-center text-white border border-crimson-500/30">
                <Wrench className="w-5 h-5 -rotate-45" />
              </div>
              <div className="text-xl font-bold tracking-tight text-white">
                TORQUE<span className="text-crimson-500">WORKS</span> <span className="text-xs uppercase font-semibold text-workshop-400">Auto</span>
              </div>
            </div>
            <p className="text-xs uppercase tracking-widest text-workshop-400 font-bold">
              Diagnostics. Repairs. Done Right.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Professional automotive workshop in Accra. We believe in honest diagnostics, transparent communication, and quality engineering workmanship for private vehicle owners and corporate fleets.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-sm text-emerald-400 font-medium">
              <ShieldCheck className="w-5 h-5" />
              <span>Certified Workshop Equipment & Technicians</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-5 border-b border-workshop-800 pb-2.5">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm sm:text-base">
              {services.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left text-slate-300 hover:translate-x-1 inline-block"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop Location & Hours */}
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-5 border-b border-workshop-800 pb-2.5">
              Workshop Location & Hours
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-crimson-500 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Plot 14, Spintex Road Industrial Area,<br />
                  Near Coca-Cola Roundabout,<br />
                  Accra, Ghana
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-workshop-400 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-100 font-semibold">Monday – Saturday: 8:00 AM – 5:00 PM</p>
                  <p className="text-workshop-400 text-sm mt-0.5">Sunday: Closed</p>
                </div>
              </div>
              <div className="pt-1">
                <p className="text-xs sm:text-sm text-workshop-400">
                  Walk-ins welcome, scheduled appointments prioritized for prompt bay access.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Direct Channels */}
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-5 border-b border-workshop-800 pb-2.5">
              Direct Contact
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <a
                href="tel:+233245550192"
                className="flex items-center space-x-3 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-crimson-500 shrink-0" />
                <span className="font-semibold">+233 24 555 0192</span>
              </a>
              <a
                href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20would%20like%20to%20inquire%20about%20a%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span className="font-semibold">WhatsApp: +233 24 555 0192</span>
              </a>
              <a
                href="mailto:service@torqueworksauto.com"
                className="flex items-center space-x-3 text-slate-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-workshop-400 shrink-0" />
                <span>service@torqueworksauto.com</span>
              </a>

              <div className="pt-4">
                <button
                  onClick={() => handlePageChange('book')}
                  className="w-full py-3.5 px-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold rounded text-sm uppercase tracking-wider text-center transition-colors shadow-md"
                >
                  Request Service Online
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-workshop-900 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-workshop-400 gap-4">
          <p>© {new Date().getFullYear()} TorqueWorks Auto Ltd. All rights reserved. Accra, Ghana.</p>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => handlePageChange('inspection')}
              className="hover:text-white transition-colors"
            >
              Used Car Inspection
            </button>
            <button
              onClick={() => handlePageChange('fleet')}
              className="hover:text-white transition-colors"
            >
              Fleet Solutions
            </button>
            <button
              onClick={() => setIsAdminLoginModalOpen(true)}
              className="inline-flex items-center text-workshop-400 hover:text-crimson-400 transition-colors text-xs font-semibold"
            >
              <Lock className="w-3.5 h-3.5 mr-1" />
              Staff Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
