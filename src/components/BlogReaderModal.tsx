import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, Clock, BookOpen } from 'lucide-react';

export const BlogReaderModal: React.FC = () => {
  const { selectedBlog, setSelectedBlog, setIsBookModalOpen } = useApp();

  if (!selectedBlog) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-workshop-900 border border-workshop-700 rounded shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top bar with close */}
        <div className="p-5 bg-workshop-950 border-b border-workshop-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5 text-sm text-crimson-400 font-bold uppercase tracking-wider">
            <BookOpen className="w-5 h-5" />
            <span>Car Care & Maintenance Guide</span>
          </div>
          <button
            onClick={() => setSelectedBlog(null)}
            className="p-2 text-workshop-400 hover:text-white rounded"
            aria-label="Close article"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 bg-workshop-950 shrink-0">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-full object-cover brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-workshop-900 via-workshop-900/50 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-crimson-600 text-white rounded mb-2.5">
              {selectedBlog.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {selectedBlog.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto space-y-6 text-base text-slate-200">
          <div className="flex items-center space-x-5 text-sm text-workshop-400 pb-5 border-b border-workshop-800">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {selectedBlog.date}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              {selectedBlog.readTime}
            </span>
          </div>

          <div className="space-y-5 leading-relaxed font-normal text-base sm:text-lg text-slate-300">
            {selectedBlog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 p-6 bg-workshop-950 rounded border border-workshop-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Experiencing similar vehicle issues?</h4>
              <p className="text-sm text-slate-300 mt-0.5">Our technicians can run a diagnostic scan or inspection.</p>
            </div>
            <button
              onClick={() => {
                setSelectedBlog(null);
                setIsBookModalOpen(true);
              }}
              className="px-6 py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shrink-0"
            >
              Book an Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
