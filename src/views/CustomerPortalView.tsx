import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StatusBadge } from '../components/StatusBadge';
import { 
  Calendar, 
  Car, 
  Clock, 
  Wrench, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Plus, 
  MessageSquare, 
  LogIn, 
  LogOut,
  CalendarCheck,
  CalendarClock,
  ArrowRight
} from 'lucide-react';

export const CustomerPortalView: React.FC = () => {
  const { 
    currentCustomer, 
    isCustomerAuthenticated, 
    setIsCustomerAuthModalOpen,
    logoutCustomer,
    setIsBookModalOpen,
    serviceRequests,
    appointments,
    cancelBooking,
    rescheduleBooking
  } = useApp();

  const [activeTab, setActiveTab] = useState<'bookings' | 'vehicles'>('bookings');

  // Reschedule Modal State
  const [rescheduleItem, setRescheduleItem] = useState<{ id: string; currentService: string; vehicle: string } | null>(null);
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('Morning (8:00 AM - 11:00 AM)');

  // Cancel Modal State
  const [cancelItem, setCancelItem] = useState<{ id: string; service: string } | null>(null);
  const [cancelReason, setCancelReason] = useState('');

  const timeSlots = [
    'Morning (8:00 AM - 11:00 AM)',
    'Midday (11:00 AM - 2:00 PM)',
    'Afternoon (2:00 PM - 5:00 PM)'
  ];

  if (!isCustomerAuthenticated || !currentCustomer) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-20 text-center space-y-8 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-crimson-950/70 border-2 border-crimson-600 flex items-center justify-center mx-auto text-crimson-500 shadow-xl">
          <User className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Customer Portal Sign In
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
            Please sign in to view your workshop bookings, check diagnostic findings, and reschedule or cancel appointments.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setIsCustomerAuthModalOpen(true)}
            className="px-8 py-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-lg inline-flex items-center space-x-2.5"
          >
            <LogIn className="w-5 h-5" />
            <span>Sign In or Register</span>
          </button>
        </div>
      </div>
    );
  }

  // Filter bookings for the logged-in customer (match by phone or customerId)
  const cleanCustomerPhone = currentCustomer.phone.replace(/\s+/g, '');
  const customerRequests = serviceRequests.filter(r => {
    const rPhone = r.phone.replace(/\s+/g, '');
    return rPhone === cleanCustomerPhone || r.fullName.toLowerCase() === currentCustomer.name.toLowerCase();
  });

  const customerAppointments = appointments.filter(a => {
    const aPhone = a.customerPhone.replace(/\s+/g, '');
    return aPhone === cleanCustomerPhone || a.customerName.toLowerCase() === currentCustomer.name.toLowerCase();
  });

  const handleConfirmReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (rescheduleItem && newDate) {
      rescheduleBooking(rescheduleItem.id, newDate, newTime);
      setRescheduleItem(null);
      setNewDate('');
    }
  };

  const handleConfirmCancel = () => {
    if (cancelItem) {
      cancelBooking(cancelItem.id, cancelReason);
      setCancelItem(null);
      setCancelReason('');
    }
  };

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-10 animate-fadeIn">
      {/* Customer Header Banner */}
      <div className="bg-workshop-900 border border-workshop-800 rounded p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center space-x-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-crimson-700 to-crimson-900 flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-md border border-crimson-500/40 shrink-0">
            {currentCustomer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentCustomer.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-800">
                Verified Customer
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-workshop-300">
              <span className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-crimson-500" />
                {currentCustomer.phone}
              </span>
              <span className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5 text-crimson-500" />
                {currentCustomer.email}
              </span>
              <span className="flex items-center">
                <Car className="w-3.5 h-3.5 mr-1.5 text-crimson-500" />
                {currentCustomer.vehicles.length} Vehicle{currentCustomer.vehicles.length !== 1 ? 's' : ''} in Garage
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="px-5 py-3 bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded transition-colors shadow-md flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Book Service</span>
          </button>
          <button
            onClick={logoutCustomer}
            className="px-4 py-3 bg-workshop-950 hover:bg-workshop-800 text-workshop-300 hover:text-white border border-workshop-700 rounded text-xs sm:text-sm font-semibold transition-colors flex items-center space-x-1.5"
            title="Sign out of customer portal"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-workshop-800 space-x-8">
        <button
          onClick={() => setActiveTab('bookings')}
          className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 flex items-center space-x-2.5 ${
            activeTab === 'bookings'
              ? 'border-crimson-600 text-white'
              : 'border-transparent text-workshop-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>My Bookings & Requests ({customerRequests.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('vehicles')}
          className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all border-b-2 flex items-center space-x-2.5 ${
            activeTab === 'vehicles'
              ? 'border-crimson-600 text-white'
              : 'border-transparent text-workshop-400 hover:text-slate-200'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>My Garage & Service History ({currentCustomer.vehicles.length})</span>
        </button>
      </div>

      {/* TAB 1: BOOKINGS & REQUESTS */}
      {activeTab === 'bookings' && (
        <div className="space-y-6">
          {customerRequests.length === 0 ? (
            <div className="bg-workshop-900 border border-workshop-800 rounded p-12 text-center space-y-4">
              <CalendarClock className="w-12 h-12 text-workshop-500 mx-auto" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">No Service Bookings Yet</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  You haven't requested any workshop appointments yet. Need maintenance, diagnostics, or an inspection?
                </p>
              </div>
              <button
                onClick={() => setIsBookModalOpen(true)}
                className="px-6 py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
              >
                Book Your First Service
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {customerRequests.map(req => {
                const canCancelOrReschedule = ['New', 'Contacted', 'Scheduled'].includes(req.status);
                
                return (
                  <div
                    key={req.id}
                    className="bg-workshop-900 border border-workshop-800 rounded p-6 sm:p-8 space-y-6 shadow-lg transition-all hover:border-workshop-700"
                  >
                    {/* Top Row: Ref, Status, Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-workshop-800">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono uppercase font-bold text-crimson-400 bg-crimson-950/60 px-2.5 py-1 rounded border border-crimson-800/60">
                          {req.id.toUpperCase()}
                        </span>
                        <StatusBadge status={req.status} />
                        <span className="text-xs text-workshop-400">
                          Logged: {req.createdAt}
                        </span>
                      </div>

                      {canCancelOrReschedule && (
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => {
                              setRescheduleItem({
                                id: req.id,
                                currentService: req.serviceType,
                                vehicle: `${req.vehicleYear} ${req.vehicleMake} ${req.vehicleModel}`
                              });
                              setNewDate(req.appointmentDate || req.preferredDate || '');
                            }}
                            className="px-3.5 py-2 bg-workshop-800 hover:bg-workshop-700 text-slate-100 text-xs font-semibold rounded border border-workshop-700 transition-colors flex items-center space-x-1.5"
                          >
                            <CalendarClock className="w-3.5 h-3.5 text-amber-400" />
                            <span>Reschedule</span>
                          </button>

                          <button
                            onClick={() => setCancelItem({ id: req.id, service: req.serviceType })}
                            className="px-3.5 py-2 bg-workshop-800 hover:bg-red-950/60 text-red-300 border border-workshop-700 hover:border-red-800 rounded text-xs font-semibold transition-colors flex items-center space-x-1.5"
                          >
                            <XCircle className="w-3.5 h-3.5 text-red-400" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Booking Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                      <div>
                        <span className="text-xs uppercase font-bold text-workshop-400 tracking-wider block mb-1">
                          Vehicle
                        </span>
                        <p className="text-white font-bold text-base">
                          {req.vehicleYear} {req.vehicleMake} {req.vehicleModel}
                        </p>
                        <p className="text-xs font-mono font-bold text-crimson-400 mt-0.5">
                          {req.vehicleReg}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs uppercase font-bold text-workshop-400 tracking-wider block mb-1">
                          Service Category
                        </span>
                        <p className="text-white font-bold text-base">
                          {req.serviceType}
                        </p>
                        <p className="text-xs text-workshop-400 mt-0.5">
                          Assigned Tech: <strong className="text-slate-200">{req.assignedTechnician || 'To be assigned'}</strong>
                        </p>
                      </div>

                      <div>
                        <span className="text-xs uppercase font-bold text-workshop-400 tracking-wider block mb-1">
                          Appointment Slot
                        </span>
                        <p className="text-white font-bold text-base">
                          {req.appointmentDate || req.preferredDate || 'Pending confirmation'}
                        </p>
                        <p className="text-xs text-slate-300 mt-0.5">
                          {req.appointmentTime || req.preferredTime}
                        </p>
                      </div>
                    </div>

                    {/* Problem Description & Notes */}
                    <div className="bg-workshop-950 p-4 rounded border border-workshop-800 space-y-2 text-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-workshop-400 block">
                        Customer Reported Issue:
                      </span>
                      <p className="text-slate-200 leading-relaxed text-sm">
                        {req.description || 'Routine service request.'}
                      </p>
                      {req.internalNotes && (
                        <div className="pt-2 border-t border-workshop-800/80 mt-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 block">
                            Workshop Update:
                          </span>
                          <p className="text-xs text-slate-300 mt-0.5">
                            {req.internalNotes}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="text-xs text-workshop-400">
                        Need urgent changes? Call our service desk at <strong className="text-white">+233 24 555 0192</strong>
                      </div>
                      <a
                        href={`https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20have%20an%20inquiry%20regarding%20my%20booking%20${req.id.toUpperCase()}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-emerald-400 hover:text-emerald-300"
                      >
                        <MessageSquare className="w-3.5 h-3.5 mr-1" />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: MY VEHICLE GARAGE */}
      {activeTab === 'vehicles' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentCustomer.vehicles.map(veh => (
              <div
                key={veh.id}
                className="bg-workshop-900 border border-workshop-800 rounded p-6 sm:p-8 space-y-6 shadow-xl"
              >
                <div className="flex items-start justify-between pb-4 border-b border-workshop-800">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-workshop-950 border border-workshop-700 rounded text-crimson-500">
                      <Car className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {veh.year} {veh.make} {veh.model}
                      </h3>
                      <span className="text-xs font-mono font-bold text-crimson-400">
                        {veh.registration}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="px-3 py-1.5 bg-crimson-600 hover:bg-crimson-700 text-white text-xs font-bold uppercase tracking-wider rounded"
                  >
                    Book Service
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-workshop-950 p-3 rounded border border-workshop-800">
                    <span className="text-workshop-400 block mb-0.5">Chassis / VIN:</span>
                    <span className="text-white font-mono font-semibold">{veh.vin || 'Not provided'}</span>
                  </div>
                  <div className="bg-workshop-950 p-3 rounded border border-workshop-800">
                    <span className="text-workshop-400 block mb-0.5">Recorded Mileage:</span>
                    <span className="text-white font-mono font-semibold">{veh.mileage.toLocaleString()} km</span>
                  </div>
                </div>

                {/* Service History */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Completed Service History ({veh.serviceHistory.length})
                  </h4>

                  {veh.serviceHistory.length === 0 ? (
                    <p className="text-xs text-workshop-400 py-3">No completed services logged yet for this vehicle.</p>
                  ) : (
                    <div className="space-y-3">
                      {veh.serviceHistory.map(rec => (
                        <div
                          key={rec.id}
                          className="bg-workshop-950 p-4 rounded border border-workshop-800 space-y-2 text-xs"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-white text-sm">{rec.service}</span>
                            <span className="font-mono text-crimson-400 font-bold">GH₵ {rec.cost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-workshop-400">
                            <span>Date: {rec.date}</span>
                            <span>Tech: {rec.technician}</span>
                          </div>
                          <p className="text-slate-300 leading-relaxed pt-1">
                            {rec.workPerformed}
                          </p>
                          {rec.partsUsed && (
                            <p className="text-workshop-400">
                              <strong className="text-workshop-300">Parts:</strong> {rec.partsUsed}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RESCHEDULE MODAL */}
      {rescheduleItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-md bg-workshop-900 border border-workshop-700 rounded shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-workshop-800">
              <div className="flex items-center space-x-2.5">
                <CalendarClock className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Reschedule Booking</h3>
              </div>
              <button
                onClick={() => setRescheduleItem(null)}
                className="text-workshop-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-1">
              <p><strong className="text-white">Service:</strong> {rescheduleItem.currentService}</p>
              <p><strong className="text-white">Vehicle:</strong> {rescheduleItem.vehicle}</p>
            </div>

            <form onSubmit={handleConfirmReschedule} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-workshop-300 mb-1.5">
                  Select New Date *
                </label>
                <input
                  type="date"
                  required
                  value={newDate}
                  min={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-workshop-300 mb-1.5">
                  Select Preferred Time Slot
                </label>
                <select
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white outline-none"
                >
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
                >
                  Confirm New Date
                </button>
                <button
                  type="button"
                  onClick={() => setRescheduleItem(null)}
                  className="px-4 py-3 bg-workshop-800 hover:bg-workshop-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded transition-colors border border-workshop-700"
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CANCEL MODAL */}
      {cancelItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-md bg-workshop-900 border border-workshop-700 rounded shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-workshop-800">
              <div className="flex items-center space-x-2.5 text-red-400">
                <XCircle className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Cancel Booking</h3>
              </div>
              <button
                onClick={() => setCancelItem(null)}
                className="text-workshop-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300">
              Are you sure you want to cancel your booking for <strong className="text-white">{cancelItem.service}</strong>? This slot will be released back to other customers.
            </p>

            <div>
              <label className="block text-xs uppercase font-bold text-workshop-400 mb-1.5">
                Reason for Cancellation (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Schedule conflict, sold vehicle, already fixed..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-xs text-white placeholder-workshop-500 outline-none"
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={handleConfirmCancel}
                className="flex-1 py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors shadow"
              >
                Confirm Cancellation
              </button>
              <button
                type="button"
                onClick={() => setCancelItem(null)}
                className="px-4 py-3 bg-workshop-800 hover:bg-workshop-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded transition-colors border border-workshop-700"
              >
                Keep Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
