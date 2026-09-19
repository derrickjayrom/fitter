import React from 'react';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getColors = () => {
    switch (status) {
      case 'New':
        return 'bg-blue-950/70 text-blue-400 border-blue-800/60';
      case 'Contacted':
        return 'bg-purple-950/70 text-purple-300 border-purple-800/60';
      case 'Scheduled':
        return 'bg-amber-950/70 text-amber-300 border-amber-800/60';
      case 'In Progress':
        return 'bg-cyan-950/70 text-cyan-300 border-cyan-800/60';
      case 'Awaiting Approval':
        return 'bg-orange-950/70 text-orange-300 border-orange-800/60';
      case 'Completed':
      case 'Pass':
      case 'Good':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60';
      case 'Cancelled':
      case 'Critical':
        return 'bg-red-950/70 text-red-400 border-red-800/60';
      case 'Warning':
      case 'Needs Attention':
      case 'Fair':
        return 'bg-amber-950/80 text-amber-300 border-amber-700/80';
      default:
        return 'bg-workshop-800 text-workshop-300 border-workshop-700';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider border ${getColors()} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-80" />
      {status}
    </span>
  );
};
