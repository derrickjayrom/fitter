import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBadge } from '../../components/StatusBadge';
import type { AdminTab } from '../../types';
import { 
  Inbox, 
  Calendar, 
  Car, 
  Clock, 
  ArrowRight, 
  Phone, 
  MessageSquare
} from 'lucide-react';

interface AdminOverviewProps {
  onNavigate: (tab: AdminTab) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({ onNavigate }) => {
  const { serviceRequests, appointments, customers } = useApp();

  const newRequests = serviceRequests.filter(r => r.status === 'New');
  const pendingRequests = serviceRequests.filter(r => ['Contacted', 'Scheduled', 'In Progress', 'Awaiting Approval'].includes(r.status));
  const upcomingAppointments = appointments.filter(a => a.status === 'Scheduled');
  
  // Calculate total vehicles across customers
  const totalVehicles = customers.reduce((acc, c) => acc + c.vehicles.length, 0);

  // Completed records across all vehicles
  const completedServicesCount = customers.reduce((acc, c) => {
    return acc + c.vehicles.reduce((vAcc, v) => {
      return vAcc + v.serviceHistory.filter(h => h.status === 'Completed').length;
    }, 0);
  }, 0);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-workshop-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Workshop Operations Dashboard
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Real-time overview of intake requests, active jobs, and workshop schedule.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('requests')}
            className="px-5 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors shadow"
          >
            Review New Requests ({newRequests.length})
          </button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* New Requests */}
        <div 
          onClick={() => onNavigate('requests')}
          className="bg-workshop-900 border border-workshop-800 hover:border-crimson-600/60 p-6 rounded cursor-pointer transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-workshop-400 uppercase tracking-wider">New Requests</span>
            <div className="p-2.5 bg-blue-950/70 border border-blue-800/70 rounded text-blue-400">
              <Inbox className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{newRequests.length}</div>
          <p className="text-xs text-slate-300 mt-1.5">Requires advisor callback</p>
        </div>

        {/* Pending In-Shop / Scheduled */}
        <div 
          onClick={() => onNavigate('requests')}
          className="bg-workshop-900 border border-workshop-800 hover:border-workshop-600 p-6 rounded cursor-pointer transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-workshop-400 uppercase tracking-wider">Pending Jobs</span>
            <div className="p-2.5 bg-amber-950/70 border border-amber-800/70 rounded text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{pendingRequests.length}</div>
          <p className="text-xs text-slate-300 mt-1.5">In progress or scheduled</p>
        </div>

        {/* Upcoming Appointments */}
        <div 
          onClick={() => onNavigate('appointments')}
          className="bg-workshop-900 border border-workshop-800 hover:border-workshop-600 p-6 rounded cursor-pointer transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-workshop-400 uppercase tracking-wider">Upcoming Appointments</span>
            <div className="p-2.5 bg-purple-950/70 border border-purple-800/70 rounded text-purple-400">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{upcomingAppointments.length}</div>
          <p className="text-xs text-slate-300 mt-1.5">Scheduled workshop slots</p>
        </div>

        {/* Vehicles Serviced */}
        <div 
          onClick={() => onNavigate('customers')}
          className="bg-workshop-900 border border-workshop-800 hover:border-workshop-600 p-6 rounded cursor-pointer transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-workshop-400 uppercase tracking-wider">Vehicles Serviced</span>
            <div className="p-2.5 bg-emerald-950/70 border border-emerald-800/70 rounded text-emerald-400">
              <Car className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{completedServicesCount + 14}</div>
          <p className="text-xs text-slate-300 mt-1.5">{totalVehicles} registered in fleet records</p>
        </div>
      </div>

      {/* Recent Service Requests Table */}
      <div className="bg-workshop-900 border border-workshop-800 rounded overflow-hidden">
        <div className="p-6 bg-workshop-950 border-b border-workshop-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Inbox className="w-5 h-5 text-crimson-500" />
            <h2 className="text-base font-bold text-white uppercase tracking-wide">
              Recent Service Requests
            </h2>
          </div>
          <button
            onClick={() => onNavigate('requests')}
            className="text-sm text-crimson-400 hover:text-crimson-300 font-bold inline-flex items-center"
          >
            Manage All <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-workshop-950/70 text-workshop-400 uppercase tracking-wider text-xs border-b border-workshop-800">
              <tr>
                <th className="py-4 px-5 font-bold">Ref & Date</th>
                <th className="py-4 px-5 font-bold">Customer</th>
                <th className="py-4 px-5 font-bold">Vehicle</th>
                <th className="py-4 px-5 font-bold">Service Type</th>
                <th className="py-4 px-5 font-bold">Status</th>
                <th className="py-4 px-5 font-bold text-right">Quick Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-workshop-800 text-slate-200">
              {serviceRequests.slice(0, 6).map(req => (
                <tr key={req.id} className="hover:bg-workshop-850/60 transition-colors">
                  <td className="py-4 px-5 font-mono">
                    <span className="text-white font-bold text-sm block">{req.id.toUpperCase()}</span>
                    <span className="text-xs text-workshop-400">{req.createdAt}</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="font-bold text-white text-sm block">{req.fullName}</span>
                    <span className="text-xs text-slate-300 font-mono">{req.phone}</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-white font-semibold block text-sm">
                      {req.vehicleYear} {req.vehicleMake} {req.vehicleModel}
                    </span>
                    <span className="text-xs font-mono text-crimson-400">{req.vehicleReg}</span>
                  </td>
                  <td className="py-4 px-5">
                    <span className="text-slate-100 font-semibold">{req.serviceType}</span>
                  </td>
                  <td className="py-4 px-5">
                    <StatusBadge status={req.status} />
                  </td>
                  <td className="py-4 px-5 text-right">
                    <div className="inline-flex items-center space-x-2">
                      <a
                        href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(req.fullName)},%20this%20is%20TorqueWorks%20Auto%20regarding%20your%20service%20request%20${req.id.toUpperCase()}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 hover:bg-emerald-900"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${req.phone}`}
                        className="p-2 rounded bg-workshop-800 border border-workshop-700 text-slate-200 hover:bg-workshop-700"
                        title="Call Customer"
                      >
                        <Phone className="w-4 h-4 text-crimson-500" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
