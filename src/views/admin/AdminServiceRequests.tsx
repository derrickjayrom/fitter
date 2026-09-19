import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceRequest, ServiceStatus } from '../../types';
import { StatusBadge } from '../../components/StatusBadge';
import { 
  Inbox, 
  Search, 
  Phone, 
  MessageSquare, 
  X, 
  Check, 
  Calendar, 
  Car, 
  FileText, 
  Wrench
} from 'lucide-react';

export const AdminServiceRequests: React.FC = () => {
  const { serviceRequests, updateRequestDetails } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(null);

  // Form states for the detail modal
  const [modalStatus, setModalStatus] = useState<ServiceStatus>('New');
  const [modalTech, setModalTech] = useState<string>('');
  const [modalNotes, setModalNotes] = useState<string>('');
  const [modalAptDate, setModalAptDate] = useState<string>('');
  const [modalAptTime, setModalAptTime] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const statuses: ServiceStatus[] = [
    'New',
    'Contacted',
    'Scheduled',
    'In Progress',
    'Awaiting Approval',
    'Completed',
    'Cancelled'
  ];

  const technicians = [
    'Unassigned',
    'Samuel Appiah (Lead Diagnostic)',
    'Emmanuel Mensah (Mechanical)',
    'David Tagoe (Auto Electrical & AC)',
    'Kwame Boateng (Workshop Manager)'
  ];

  const handleOpenDetail = (req: ServiceRequest) => {
    setSelectedRequest(req);
    setModalStatus(req.status);
    setModalTech(req.assignedTechnician || 'Unassigned');
    setModalNotes(req.internalNotes || '');
    setModalAptDate(req.appointmentDate || req.preferredDate || '');
    setModalAptTime(req.appointmentTime || req.preferredTime || '');
    setSaveSuccess(false);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest) return;

    updateRequestDetails(selectedRequest.id, {
      status: modalStatus,
      assignedTechnician: modalTech === 'Unassigned' ? undefined : modalTech,
      internalNotes: modalNotes,
      appointmentDate: modalAptDate,
      appointmentTime: modalAptTime,
    });

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setSelectedRequest(prev => prev ? {
        ...prev,
        status: modalStatus,
        assignedTechnician: modalTech === 'Unassigned' ? undefined : modalTech,
        internalNotes: modalNotes,
        appointmentDate: modalAptDate,
        appointmentTime: modalAptTime,
      } : null);
    }, 800);
  };

  const filteredRequests = serviceRequests.filter(req => {
    const matchesSearch = 
      req.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.phone.includes(searchTerm) ||
      req.vehicleMake.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.vehicleReg.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || req.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-workshop-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Service Request Management
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Review customer intake requests, assign technicians, schedule slots, and update statuses.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-5 h-5 text-workshop-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by customer, phone, vehicle, or reg..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-workshop-900 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setStatusFilter('All')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded transition-colors ${
              statusFilter === 'All'
                ? 'bg-crimson-600 text-white shadow'
                : 'bg-workshop-900 text-workshop-400 hover:text-white border border-workshop-800'
            }`}
          >
            All ({serviceRequests.length})
          </button>
          {statuses.map(s => {
            const count = serviceRequests.filter(r => r.status === s).length;
            return (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded transition-colors shrink-0 ${
                  statusFilter === s
                    ? 'bg-crimson-600 text-white shadow'
                    : 'bg-workshop-900 text-workshop-400 hover:text-white border border-workshop-800'
                }`}
              >
                {s} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Requests Table */}
      <div className="bg-workshop-900 border border-workshop-800 rounded overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-workshop-950 text-workshop-400 uppercase tracking-wider text-xs border-b border-workshop-800">
              <tr>
                <th className="py-4 px-5 font-bold">Ref & Time</th>
                <th className="py-4 px-5 font-bold">Customer</th>
                <th className="py-4 px-5 font-bold">Vehicle & Reg</th>
                <th className="py-4 px-5 font-bold">Service Type</th>
                <th className="py-4 px-5 font-bold">Assigned Tech</th>
                <th className="py-4 px-5 font-bold">Status</th>
                <th className="py-4 px-5 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-workshop-800 text-slate-200">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-16 text-slate-400 text-base">
                    No service requests found matching your filter.
                  </td>
                </tr>
              ) : (
                filteredRequests.map(req => (
                  <tr key={req.id} className="hover:bg-workshop-850/60 transition-colors">
                    <td className="py-4 px-5 font-mono">
                      <span className="text-white font-bold text-sm block">{req.id.toUpperCase()}</span>
                      <span className="text-xs text-workshop-400">{req.createdAt}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="font-bold text-white text-base block">{req.fullName}</span>
                      <span className="text-xs text-slate-300 font-mono">{req.phone}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-white font-semibold block text-sm">
                        {req.vehicleYear} {req.vehicleMake} {req.vehicleModel}
                      </span>
                      <span className="text-xs font-mono text-crimson-400">{req.vehicleReg}</span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-slate-100 font-semibold block">{req.serviceType}</span>
                      <span className="text-xs text-slate-300 truncate max-w-[200px] block mt-0.5">
                        {req.description}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <span className="text-slate-200 text-sm">
                        {req.assignedTechnician ? req.assignedTechnician.split(' ')[0] + ' ' + req.assignedTechnician.split(' ')[1] : '—'}
                      </span>
                    </td>
                    <td className="py-4 px-5">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="py-4 px-5 text-right">
                      <button
                        onClick={() => handleOpenDetail(req)}
                        className="px-4 py-2 bg-workshop-800 hover:bg-crimson-600 text-slate-100 hover:text-white font-bold rounded transition-colors border border-workshop-700 text-xs uppercase tracking-wider"
                      >
                        Open Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Request Details Drawer / Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-workshop-900 border border-workshop-700 rounded shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 bg-workshop-950 border-b border-workshop-800 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-crimson-600 text-white rounded">
                  <Inbox className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-mono font-bold text-white uppercase">
                      {selectedRequest.id.toUpperCase()}
                    </span>
                    <span className="text-xs text-workshop-400">• Logged {selectedRequest.createdAt}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {selectedRequest.fullName} — {selectedRequest.vehicleYear} {selectedRequest.vehicleMake} {selectedRequest.vehicleModel}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="p-2 text-workshop-400 hover:text-white rounded"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto space-y-6 text-sm">
              {/* Quick Contact Bar */}
              <div className="p-5 bg-workshop-950 rounded border border-workshop-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div>
                    <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block">Customer Phone</span>
                    <span className="text-white font-mono font-bold text-base">{selectedRequest.phone}</span>
                  </div>
                  <div>
                    <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block">Email</span>
                    <span className="text-slate-200">{selectedRequest.email || 'None provided'}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={`https://wa.me/${selectedRequest.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedRequest.fullName)},%20this%20is%20TorqueWorks%20Auto%20regarding%20your%20service%20request%20${selectedRequest.id.toUpperCase()}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded inline-flex items-center transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${selectedRequest.phone}`}
                    className="px-4 py-2 bg-workshop-800 hover:bg-workshop-700 text-white font-bold text-xs uppercase tracking-wider rounded inline-flex items-center border border-workshop-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-1.5 text-crimson-500" />
                    Call
                  </a>
                </div>
              </div>

              {/* Vehicle & Request Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-workshop-950 p-5 rounded border border-workshop-800 space-y-3">
                  <span className="text-xs uppercase font-bold text-crimson-400 tracking-wider block flex items-center">
                    <Car className="w-4 h-4 mr-1.5" />
                    Vehicle Information
                  </span>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-workshop-400">Make & Model:</span>
                      <span className="text-white font-bold">{selectedRequest.vehicleYear} {selectedRequest.vehicleMake} {selectedRequest.vehicleModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-workshop-400">Plate Registration:</span>
                      <span className="text-crimson-400 font-mono font-bold">{selectedRequest.vehicleReg}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-workshop-400">VIN / Chassis:</span>
                      <span className="text-slate-300 font-mono">{selectedRequest.vin || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-workshop-950 p-5 rounded border border-workshop-800 space-y-3">
                  <span className="text-xs uppercase font-bold text-crimson-400 tracking-wider block flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    Requested Service Window
                  </span>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-workshop-400">Service Category:</span>
                      <span className="text-white font-bold">{selectedRequest.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-workshop-400">Preferred Date:</span>
                      <span className="text-slate-200">{selectedRequest.preferredDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-workshop-400">Time Window:</span>
                      <span className="text-slate-200">{selectedRequest.preferredTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Problem Description */}
              <div className="bg-workshop-950 p-5 rounded border border-workshop-800 space-y-2">
                <span className="text-xs uppercase font-bold text-workshop-400 tracking-wider block flex items-center">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Reported Problem Description
                </span>
                <p className="text-slate-200 leading-relaxed bg-workshop-900 p-4 rounded border border-workshop-800 text-sm sm:text-base">
                  {selectedRequest.description || 'No specific description provided by customer.'}
                </p>
                {selectedRequest.images && selectedRequest.images.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs text-workshop-400 block mb-1">Attached Files / Photos:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedRequest.images.map((img, i) => (
                        <span key={i} className="px-3 py-1.5 bg-workshop-800 text-slate-200 rounded text-xs border border-workshop-700">
                          📎 {img}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Form: Status, Tech, Schedule, Notes */}
              <form onSubmit={handleSaveModal} className="bg-workshop-850 p-6 rounded border border-workshop-800 space-y-5">
                <span className="text-xs uppercase font-bold text-crimson-400 tracking-wider block flex items-center">
                  <Wrench className="w-4 h-4 mr-1.5" />
                  Workshop Status & Management Actions
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1.5">
                      Update Service Status
                    </label>
                    <select
                      value={modalStatus}
                      onChange={(e) => setModalStatus(e.target.value as ServiceStatus)}
                      className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                    >
                      {statuses.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1.5">
                      Assign Technician
                    </label>
                    <select
                      value={modalTech}
                      onChange={(e) => setModalTech(e.target.value)}
                      className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                    >
                      {technicians.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-200 font-semibold mb-1.5">
                      Confirmed Appointment Date
                    </label>
                    <input
                      type="date"
                      value={modalAptDate}
                      onChange={(e) => setModalAptDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-200 font-semibold mb-1.5">
                      Confirmed Appointment Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 09:30 AM"
                      value={modalAptTime}
                      onChange={(e) => setModalAptTime(e.target.value)}
                      className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-1.5">
                    Internal Workshop Notes & Diagnostic Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter notes on customer communication, required parts, or diagnostic findings..."
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  {saveSuccess ? (
                    <span className="text-emerald-400 font-bold flex items-center text-sm">
                      <Check className="w-5 h-5 mr-1.5" />
                      Changes saved successfully!
                    </span>
                  ) : (
                    <span className="text-workshop-400 text-xs">
                      Updating status to 'Scheduled' automatically generates a calendar appointment.
                    </span>
                  )}
                  <button
                    type="submit"
                    className="px-6 py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold uppercase tracking-wider rounded transition-colors text-xs shadow-md"
                  >
                    Save Updates
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
