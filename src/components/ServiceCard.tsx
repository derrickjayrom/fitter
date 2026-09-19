import React from 'react';
import { ServiceItem } from '../types';
import { useApp } from '../context/AppContext';
import { ArrowRight, Clock } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { setSelectedService, setIsBookModalOpen } = useApp();

  return (
    <div className="group bg-workshop-900 border border-workshop-800 hover:border-workshop-600 rounded overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-xl">
      {/* Service Image */}
      <div className="relative h-56 w-full overflow-hidden bg-workshop-950">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter brightness-90 contrast-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-workshop-900 via-transparent to-transparent opacity-80" />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-workshop-950/90 text-crimson-400 border border-crimson-900/60 rounded backdrop-blur-xs">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-crimson-400 transition-colors mb-3 leading-snug">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {service.shortDesc}
          </p>
        </div>

        <div>
          <div className="flex items-center text-sm text-workshop-300 mb-5 pb-4 border-b border-workshop-800">
            <Clock className="w-4 h-4 mr-2 text-crimson-500" />
            <span>Est. Turnaround: <strong className="text-slate-100">{service.estimatedTime}</strong></span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => setSelectedService(service)}
              className="text-sm font-bold text-crimson-400 hover:text-crimson-300 inline-flex items-center group-hover:underline"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="text-sm font-semibold px-4 py-2 bg-workshop-800 hover:bg-crimson-600 text-slate-100 hover:text-white rounded border border-workshop-700 hover:border-crimson-600 transition-colors"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
