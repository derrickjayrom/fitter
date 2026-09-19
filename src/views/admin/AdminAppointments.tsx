import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBadge } from '../../components/StatusBadge';
import { 
  Calendar as CalendarIcon, 
  Phone, 
  MessageSquare, 
  Filter 
} from 'lucide-react';

export const AdminAppointments: React.FC = () => {
  const { appointments, updateAppointmentStatus } = useApp();
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [dateFilter, setDateFilter] = useState<string>('');

  const filteredAppointments = appointments.filter(apt => {
    const matchesStatus = statusFilter === 'All' || apt.status === statusFilter;
    const matchesDate = !dateFilter || apt.date === dateFilter;
    return matchesStatus && matchesDate;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-workshop-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Workshop Schedule & Appointments
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Monitor intake slots, technician allocations, and service progress.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-workshop-900 border border-workshop-800 p-5 rounded">
        <div className="flex items-center space-x-2.5 text-sm">
          <Filter className="w-5 h-5 text-workshop-400" />
          <span className="text-slate-200 font-bold uppercase tracking-wider">Status:</span>
          {['All', 'Scheduled', 'In Progress', 'Completed', 'Cancelled'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3.5 py-1.5 rounded text-sm font-bold transition-colors ${
                statusFilter === st
                  ? 'bg-crimson-600 text-white shadow'
                  : 'bg-workshop-950 text-workshop-400 hover:text-white border border-workshop-800'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3 text-sm">
          <span className="text-slate-200 font-semibold">Filter Date:</span>
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 py-1.5 bg-workshop-950 border border-workshop-700 rounded text-white outline-none text-sm"
          />
          {dateFilter && (
            <button
              onClick={() => setDateFilter('')}
              className="text-sm text-crimson-400 hover:underline font-semibold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Appointments List / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAppointments.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-400 bg-workshop-900 border border-workshop-800 rounded text-base">
            No appointments found matching your criteria.
          </div>
        ) : (
          filteredAppointments.map(apt => (
            <div
              key={apt.id}
              className="bg-workshop-900 border border-workshop-800 hover:border-workshop-600 rounded p-6 space-y-5 flex flex-col justify-between transition-colors shadow-sm"
            >
              <div className="space-y-4 text-sm">
                {/* Top strip */}
                <div className="flex items-center justify-between border-b border-workshop-800 pb-3">
                  <div className="flex items-center space-x-2 font-bold text-white text-base">
                    <CalendarIcon className="w-4 h-4 text-crimson-500" />
                    <span>{apt.date}</span>
                    <span className="text-workshop-400 font-normal">({apt.time})</span>
                  </div>
                  <StatusBadge status={apt.status} />
                </div>

                {/* Customer */}
                <div>
                  <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Customer</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">{apt.customerName}</span>
                    <div className="flex items-center space-x-1.5">
                      <a
                        href={`https://wa.me/${apt.customerPhone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800"
                        title="WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${apt.customerPhone}`}
                        className="p-1.5 rounded bg-workshop-800 text-slate-200 border border-workshop-700"
                        title="Call"
                      >
                        <Phone className="w-4 h-4 text-crimson-500" />
                      </a>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-workshop-400">{apt.customerPhone}</span>
                </div>

                {/* Vehicle */}
                <div>
                  <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Vehicle</span>
                  <span className="text-slate-100 font-semibold text-sm">{apt.vehicle}</span>
                </div>

                {/* Service */}
                <div>
                  <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Service</span>
                  <span className="text-crimson-400 font-bold text-base">{apt.service}</span>
                </div>

                {/* Technician */}
                <div>
                  <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Assigned Technician</span>
                  <span className="text-slate-200 font-medium text-sm">{apt.technician}</span>
                </div>
              </div>

              {/* Status Selector */}
              <div className="pt-4 border-t border-workshop-800 flex items-center justify-between text-sm">
                <span className="text-slate-300 font-semibold">Change Status:</span>
                <select
                  value={apt.status}
                  onChange={(e) => updateAppointmentStatus(apt.id, e.target.value as any)}
                  className="px-3 py-1.5 bg-workshop-950 border border-workshop-700 text-white rounded text-sm outline-none"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
