import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ServiceRecord } from '../../types';
import { StatusBadge } from '../../components/StatusBadge';
import { 
  Users, 
  Car, 
  Clock, 
  Plus, 
  Search, 
  Phone, 
  X 
} from 'lucide-react';

export const AdminCustomersVehicles: React.FC = () => {
  const { customers, addServiceRecord } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>(customers[0]?.id || '');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');

  // Add Service Record Form State
  const [isAddingRecord, setIsAddingRecord] = useState(false);
  const [newRecord, setNewRecord] = useState({
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    service: 'Preventive Maintenance',
    technician: 'Emmanuel Mensah',
    workPerformed: '',
    partsUsed: '',
    cost: 1500,
    status: 'Completed' as ServiceRecord['status']
  });

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];
  
  // Set default selected vehicle if not set or invalid
  const currentVehicles = selectedCustomer?.vehicles || [];
  const activeVehicle = currentVehicles.find(v => v.id === selectedVehicleId) || currentVehicles[0];

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm) ||
    c.vehicles.some(v => v.registration.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCreateRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer || !activeVehicle) return;

    addServiceRecord(selectedCustomer.id, activeVehicle.id, {
      vehicleId: activeVehicle.id,
      date: newRecord.date,
      service: newRecord.service,
      technician: newRecord.technician,
      workPerformed: newRecord.workPerformed,
      partsUsed: newRecord.partsUsed,
      cost: Number(newRecord.cost),
      status: newRecord.status
    });

    setIsAddingRecord(false);
    setNewRecord({
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      service: 'Preventive Maintenance',
      technician: 'Emmanuel Mensah',
      workPerformed: '',
      partsUsed: '',
      cost: 1500,
      status: 'Completed'
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-workshop-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Customer & Vehicle Fleet Records
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            Manage customer accounts, linked vehicles, and complete chronological service history logs.
          </p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Customer Directory */}
        <div className="lg:col-span-4 bg-workshop-900 border border-workshop-800 rounded overflow-hidden">
          <div className="p-5 bg-workshop-950 border-b border-workshop-800 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-100 flex items-center">
              <Users className="w-5 h-5 text-crimson-500 mr-2" />
              Customer Accounts ({customers.length})
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 text-workshop-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search customers or plates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-workshop-900 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
              />
            </div>
          </div>

          <div className="divide-y divide-workshop-800 max-h-[600px] overflow-y-auto">
            {filteredCustomers.map(cust => {
              const isSelected = cust.id === selectedCustomer?.id;
              return (
                <button
                  key={cust.id}
                  onClick={() => {
                    setSelectedCustomerId(cust.id);
                    setSelectedVehicleId('');
                  }}
                  className={`w-full text-left p-5 transition-colors flex flex-col justify-between space-y-2 ${
                    isSelected ? 'bg-workshop-800/90 border-l-4 border-crimson-600' : 'hover:bg-workshop-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white">{cust.name}</span>
                    <span className="text-xs font-semibold text-slate-200 bg-workshop-950 px-2.5 py-1 rounded border border-workshop-800">
                      {cust.vehicles.length} {cust.vehicles.length === 1 ? 'Vehicle' : 'Vehicles'}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-workshop-300">
                    {cust.phone}
                  </div>
                  <div className="text-xs text-workshop-400 truncate">
                    {cust.vehicles.map(v => `${v.year} ${v.make} ${v.model}`).join(' • ')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Customer Details, Vehicles & Service History */}
        <div className="lg:col-span-8 space-y-8">
          {selectedCustomer ? (
            <>
              {/* Customer Profile Card */}
              <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-workshop-800 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedCustomer.name}</h3>
                    {selectedCustomer.company && (
                      <span className="text-sm text-crimson-400 font-semibold">{selectedCustomer.company}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <a
                      href={`tel:${selectedCustomer.phone}`}
                      className="px-4 py-2 bg-workshop-800 hover:bg-workshop-700 text-slate-100 rounded flex items-center border border-workshop-700 font-semibold"
                    >
                      <Phone className="w-4 h-4 mr-2 text-crimson-500" />
                      {selectedCustomer.phone}
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div>
                    <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Email</span>
                    <span className="text-white">{selectedCustomer.email || 'None'}</span>
                  </div>
                  <div>
                    <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Location / Address</span>
                    <span className="text-white">{selectedCustomer.address || 'Accra, Ghana'}</span>
                  </div>
                </div>
              </div>

              {/* Customer's Vehicles Tabs */}
              <div className="bg-workshop-900 border border-workshop-800 p-6 rounded space-y-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center">
                    <Car className="w-5 h-5 text-crimson-500 mr-2" />
                    Vehicles Registered to {selectedCustomer.name}
                  </h4>
                </div>

                {/* Vehicle Selection Pills */}
                <div className="flex flex-wrap gap-3">
                  {currentVehicles.map(veh => {
                    const isActive = activeVehicle?.id === veh.id;
                    return (
                      <button
                        key={veh.id}
                        onClick={() => setSelectedVehicleId(veh.id)}
                        className={`px-5 py-3 text-sm font-bold rounded transition-colors border text-left ${
                          isActive
                            ? 'bg-crimson-600 text-white border-crimson-500 shadow'
                            : 'bg-workshop-950 text-workshop-300 hover:text-white border-workshop-700 hover:bg-workshop-850'
                        }`}
                      >
                        <div className="text-base">{veh.year} {veh.make} {veh.model}</div>
                        <div className={`text-xs font-mono mt-0.5 ${isActive ? 'text-white/80' : 'text-crimson-400'}`}>
                          {veh.registration}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Vehicle Spec Details */}
                {activeVehicle && (
                  <div className="p-5 bg-workshop-950 rounded border border-workshop-800 grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm">
                    <div>
                      <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Registration</span>
                      <span className="text-crimson-400 font-mono font-bold text-base">{activeVehicle.registration}</span>
                    </div>
                    <div>
                      <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">VIN / Chassis</span>
                      <span className="text-white font-mono">{activeVehicle.vin}</span>
                    </div>
                    <div>
                      <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Odometer / Mileage</span>
                      <span className="text-slate-200 font-mono font-bold">{activeVehicle.mileage.toLocaleString()} km</span>
                    </div>
                    <div>
                      <span className="text-workshop-400 text-xs uppercase tracking-wider font-semibold block mb-1">Total Services Logged</span>
                      <span className="text-white font-bold">{activeVehicle.serviceHistory.length} records</span>
                    </div>
                  </div>
                )}
              </div>

              {/* SERVICE HISTORY TIMELINE */}
              {activeVehicle && (
                <div className="bg-workshop-900 border border-workshop-800 rounded space-y-6 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-workshop-800 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-white flex items-center">
                        <Clock className="w-5 h-5 text-crimson-500 mr-2" />
                        Service History Timeline: {activeVehicle.year} {activeVehicle.make} {activeVehicle.model}
                      </h4>
                      <p className="text-xs sm:text-sm text-workshop-300 mt-0.5">
                        Chronological maintenance logs, parts replaced, and invoice costs in GH₵.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsAddingRecord(!isAddingRecord)}
                      className="px-4 py-2 bg-crimson-600 hover:bg-crimson-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded inline-flex items-center transition-colors shadow"
                    >
                      <Plus className="w-4 h-4 mr-1.5" />
                      Add Service Entry
                    </button>
                  </div>

                  {/* Add Service Record Form */}
                  {isAddingRecord && (
                    <form onSubmit={handleCreateRecord} className="p-6 bg-workshop-950 rounded border border-workshop-700 space-y-5 animate-fadeIn text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white uppercase tracking-wider text-xs">
                          Log New Vehicle Service Record
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsAddingRecord(false)}
                          className="text-workshop-400 hover:text-white"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Date</label>
                          <input
                            type="text"
                            required
                            value={newRecord.date}
                            onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Service Type</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Brake Overhaul"
                            value={newRecord.service}
                            onChange={(e) => setNewRecord({ ...newRecord, service: e.target.value })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Lead Technician</label>
                          <input
                            type="text"
                            required
                            value={newRecord.technician}
                            onChange={(e) => setNewRecord({ ...newRecord, technician: e.target.value })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Work Performed</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Replaced front brake pads and flushed hydraulic fluid"
                            value={newRecord.workPerformed}
                            onChange={(e) => setNewRecord({ ...newRecord, workPerformed: e.target.value })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Parts & Materials Used</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Akebono Ceramic Pads, DOT 4 Fluid (1L)"
                            value={newRecord.partsUsed}
                            onChange={(e) => setNewRecord({ ...newRecord, partsUsed: e.target.value })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Total Invoiced Cost (GH₵)</label>
                          <input
                            type="number"
                            required
                            value={newRecord.cost}
                            onChange={(e) => setNewRecord({ ...newRecord, cost: Number(e.target.value) })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-200 font-semibold mb-1">Status</label>
                          <select
                            value={newRecord.status}
                            onChange={(e) => setNewRecord({ ...newRecord, status: e.target.value as any })}
                            className="w-full px-3 py-2 bg-workshop-900 border border-workshop-700 text-white rounded outline-none"
                          >
                            <option value="Completed">Completed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Pending Approval">Pending Approval</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold rounded text-xs uppercase tracking-wider transition-colors"
                      >
                        Save Service Record
                      </button>
                    </form>
                  )}

                  {/* Timeline entries */}
                  {activeVehicle.serviceHistory.length === 0 ? (
                    <div className="py-12 text-center text-slate-400 text-sm">
                      No service records logged yet for this vehicle. Click "Add Service Entry" above to log work.
                    </div>
                  ) : (
                    <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-workshop-800">
                      {activeVehicle.serviceHistory.map(rec => (
                        <div key={rec.id} className="relative pl-10 space-y-2">
                          {/* Dot */}
                          <div className="absolute left-2.5 top-2 w-4 h-4 rounded-full bg-crimson-600 border-2 border-workshop-900 ring-2 ring-workshop-800" />
                          
                          <div className="p-6 bg-workshop-950 rounded border border-workshop-800 space-y-3 text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-white text-base">{rec.service}</span>
                                <span className="text-xs font-mono text-workshop-400">• {rec.date}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-mono font-bold text-crimson-400 text-base">
                                  GH₵ {rec.cost.toLocaleString()}
                                </span>
                                <StatusBadge status={rec.status} />
                              </div>
                            </div>

                            <div className="text-slate-200">
                              <span className="text-workshop-400 font-semibold">Work Performed: </span>
                              {rec.workPerformed}
                            </div>

                            <div className="text-slate-300">
                              <span className="text-workshop-400 font-semibold">Parts Used: </span>
                              {rec.partsUsed}
                            </div>

                            <div className="text-xs text-workshop-400 pt-2 border-t border-workshop-900 flex justify-between">
                              <span>Technician: <strong className="text-slate-100">{rec.technician}</strong></span>
                              <span className="font-mono text-workshop-500">Record ID: {rec.id}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="bg-workshop-900 border border-workshop-800 p-16 text-center text-slate-400 rounded text-base">
              Select a customer to inspect vehicles and service history.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
