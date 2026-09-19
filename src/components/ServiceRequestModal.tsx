import React from 'react';
import { useApp } from '../context/AppContext';
import { ServiceRequestForm } from './ServiceRequestForm';
import { X, Calendar } from 'lucide-react';

export const ServiceRequestModal: React.FC = () => {
  const { isBookModalOpen, setIsBookModalOpen } = useApp();

  if (!isBookModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-workshop-900 border border-workshop-700 rounded-sm shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-workshop-950 border-b border-workshop-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-crimson-600 text-white rounded-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Book a Workshop Service</h3>
              <p className="text-xs text-workshop-400">TorqueWorks Auto • Spintex Road, Accra</p>
            </div>
          </div>
          <button
            onClick={() => setIsBookModalOpen(false)}
            className="p-1.5 text-workshop-400 hover:text-white rounded-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          <ServiceRequestForm onSuccessClose={() => setIsBookModalOpen(false)} />
        </div>
      </div>
    </div>
  );
};
