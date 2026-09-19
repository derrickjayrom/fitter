import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/initialData';
import { ServiceCard } from '../components/ServiceCard';
import { ContactCTA } from '../components/ContactCTA';
import { Wrench } from 'lucide-react';

export const ServicesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Diagnostics', 'Mechanical', 'Powertrain', 'Electrical', 'Climate', 'Maintenance', 'Inspection', 'Fleet'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <Wrench className="w-4 h-4" />
          <span>Professional Workshop Services</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Complete Automotive Services
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          From routine maintenance to complex electronic diagnostics, our technicians use OEM-level diagnostic equipment and follow structured procedures to keep your vehicle running safely and efficiently.
        </p>
      </div>

      {/* Category Filter Tabs (Extended across screen with generous spacing) */}
      <div className="w-full pb-2">
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`py-3 px-4 text-sm sm:text-base font-bold rounded transition-all text-center ${
                activeCategory === cat
                  ? 'bg-crimson-600 text-white shadow-md'
                  : 'bg-workshop-900 text-workshop-300 hover:text-white hover:bg-workshop-800 border border-workshop-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <ContactCTA />
    </div>
  );
};
