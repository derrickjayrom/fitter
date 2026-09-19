import React from 'react';
import { TestimonialItem } from '../types';
import { Quote, Car } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-workshop-900 border border-workshop-800 rounded p-8 flex flex-col justify-between transition-colors hover:border-workshop-600 shadow-sm">
      <div>
        <Quote className="w-8 h-8 text-crimson-600/70 mb-5" />
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 italic">
          "{testimonial.content}"
        </p>
      </div>

      <div className="pt-5 border-t border-workshop-800 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white">
            {testimonial.author}
          </h4>
          <p className="text-xs sm:text-sm text-workshop-400 mt-0.5">
            {testimonial.roleOrLocation}
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="inline-flex items-center text-xs text-slate-200 bg-workshop-800 px-3 py-1.5 rounded border border-workshop-700 font-medium">
            <Car className="w-3.5 h-3.5 mr-1.5 text-crimson-500" />
            {testimonial.vehicle}
          </span>
          <span className="block text-xs text-workshop-500 mt-1">
            {testimonial.date}
          </span>
        </div>
      </div>
    </div>
  );
};
