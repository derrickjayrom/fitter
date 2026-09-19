import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Upload, AlertCircle, Calendar, Car, User, MessageSquare, LogIn, PlusCircle } from 'lucide-react';

interface ServiceRequestFormProps {
  onSuccessClose?: () => void;
  initialService?: string;
}

export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ onSuccessClose, initialService }) => {
  const { 
    addServiceRequest, 
    currentCustomer, 
    isCustomerAuthenticated, 
    setIsCustomerAuthModalOpen,
    setCurrentPage 
  } = useApp();

  const [formData, setFormData] = useState({
    fullName: currentCustomer?.name || '',
    phone: currentCustomer?.phone || '',
    email: currentCustomer?.email || '',
    vehicleMake: currentCustomer?.vehicles[0]?.make || '',
    vehicleModel: currentCustomer?.vehicles[0]?.model || '',
    vehicleYear: currentCustomer?.vehicles[0]?.year?.toString() || '2020',
    vehicleReg: currentCustomer?.vehicles[0]?.registration || '',
    vin: currentCustomer?.vehicles[0]?.vin || '',
    serviceType: initialService || 'Computer Diagnostics',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 11:00 AM)',
    description: '',
  });

  const [selectedGarageVehicleId, setSelectedGarageVehicleId] = useState<string>(
    currentCustomer?.vehicles[0]?.id || 'custom'
  );

  // Sync customer details when customer logs in
  useEffect(() => {
    if (currentCustomer) {
      const primaryVeh = currentCustomer.vehicles[0];
      setFormData(prev => ({
        ...prev,
        fullName: currentCustomer.name,
        phone: currentCustomer.phone,
        email: currentCustomer.email,
        vehicleMake: primaryVeh ? primaryVeh.make : prev.vehicleMake,
        vehicleModel: primaryVeh ? primaryVeh.model : prev.vehicleModel,
        vehicleYear: primaryVeh ? primaryVeh.year.toString() : prev.vehicleYear,
        vehicleReg: primaryVeh ? primaryVeh.registration : prev.vehicleReg,
        vin: primaryVeh ? (primaryVeh.vin !== 'PENDING-DECODE' ? primaryVeh.vin : '') : prev.vin,
      }));
      if (primaryVeh) {
        setSelectedGarageVehicleId(primaryVeh.id);
      }
    }
  }, [currentCustomer]);

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [submittedRequest, setSubmittedRequest] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const serviceOptions = [
    'General Service',
    'Computer Diagnostics',
    'Engine Repair',
    'Transmission',
    'Electrical',
    'Brakes',
    'Suspension',
    'Air Conditioning',
    'Vehicle Inspection',
    'Fleet Service',
    'Other'
  ];

  const timeSlots = [
    'Morning (8:00 AM - 11:00 AM)',
    'Midday (11:00 AM - 2:00 PM)',
    'Afternoon (2:00 PM - 5:00 PM)'
  ];

  const handleGarageVehicleSelect = (vehId: string) => {
    setSelectedGarageVehicleId(vehId);
    if (vehId === 'custom') {
      setFormData(prev => ({
        ...prev,
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '2021',
        vehicleReg: '',
        vin: ''
      }));
    } else {
      const veh = currentCustomer?.vehicles.find(v => v.id === vehId);
      if (veh) {
        setFormData(prev => ({
          ...prev,
          vehicleMake: veh.make,
          vehicleModel: veh.model,
          vehicleYear: veh.year.toString(),
          vehicleReg: veh.registration,
          vin: veh.vin !== 'PENDING-DECODE' ? veh.vin : ''
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.vehicleMake || !formData.vehicleModel || !formData.vehicleReg) {
      setErrorMsg('Please complete all required fields (Name, Phone, Make, Model, and Registration).');
      return;
    }

    setErrorMsg(null);
    const newReq = addServiceRequest({
      fullName: formData.fullName,
      phone: formData.phone.startsWith('+233') ? formData.phone : `+233 ${formData.phone.replace(/^0/, '')}`,
      email: formData.email,
      vehicleMake: formData.vehicleMake,
      vehicleModel: formData.vehicleModel,
      vehicleYear: formData.vehicleYear,
      vehicleReg: formData.vehicleReg.toUpperCase(),
      vin: formData.vin,
      serviceType: formData.serviceType,
      preferredDate: formData.preferredDate || new Date().toISOString().slice(0, 10),
      preferredTime: formData.preferredTime,
      description: formData.description,
      images: uploadedFiles
    });

    setSubmittedRequest(newReq);
  };

  if (submittedRequest) {
    return (
      <div className="bg-workshop-900 border border-workshop-700 rounded p-8 sm:p-12 text-center space-y-8 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-950/90 border-2 border-emerald-600 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-sm font-mono uppercase tracking-wider text-crimson-400 font-bold">
            Reference ID: {submittedRequest.id.toUpperCase()}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Request Received & Logged
          </h3>
          <p className="text-base sm:text-lg font-semibold text-slate-100">
            Thank you. Your request is now recorded in your customer profile.
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
            Our service team will review your vehicle's requirements and confirm intake. You can track, reschedule, or cancel this booking directly in your customer portal.
          </p>
        </div>

        <div className="bg-workshop-950 p-6 rounded border border-workshop-800 text-left max-w-lg mx-auto text-sm space-y-3">
          <div className="flex justify-between">
            <span className="text-workshop-400">Customer:</span>
            <span className="text-white font-semibold">{submittedRequest.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-workshop-400">Phone:</span>
            <span className="text-white font-mono font-semibold">{submittedRequest.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-workshop-400">Vehicle:</span>
            <span className="text-white font-semibold">{submittedRequest.vehicleYear} {submittedRequest.vehicleMake} {submittedRequest.vehicleModel} ({submittedRequest.vehicleReg})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-workshop-400">Requested Service:</span>
            <span className="text-crimson-400 font-bold">{submittedRequest.serviceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-workshop-400">Preferred Window:</span>
            <span className="text-slate-200">{submittedRequest.preferredDate} ({submittedRequest.preferredTime})</span>
          </div>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setCurrentPage('my-bookings');
              onSuccessClose?.();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors shadow-md"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Manage in My Bookings
          </button>
          <a
            href={`https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20just%20submitted%20service%20request%20${submittedRequest.id.toUpperCase()}%20for%20my%20${submittedRequest.vehicleMake}%20${submittedRequest.vehicleModel}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold rounded transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            WhatsApp Workshop
          </a>
          {onSuccessClose && (
            <button
              onClick={onSuccessClose}
              className="w-full sm:w-auto px-6 py-3.5 bg-workshop-800 hover:bg-workshop-700 text-slate-100 text-sm font-bold rounded transition-colors border border-workshop-700"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left">
      {/* Login Prompt Banner if unauthenticated */}
      {!isCustomerAuthenticated ? (
        <div className="p-5 bg-workshop-950 border border-crimson-600/50 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-crimson-400 block flex items-center">
              <User className="w-4 h-4 mr-1.5" />
              Customer Login Recommended
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              Sign in to record your service history and easily track, reschedule, or cancel this booking anytime.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsCustomerAuthModalOpen(true)}
            className="shrink-0 px-5 py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center space-x-2"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In / Register</span>
          </button>
        </div>
      ) : (
        <div className="p-4 bg-workshop-950 border border-emerald-700/60 rounded flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 flex items-center justify-center font-bold text-xs">
              ✓
            </div>
            <div>
              <span className="text-xs text-emerald-400 font-bold block">Logged in as {currentCustomer?.name}</span>
              <span className="text-xs text-workshop-400">{currentCustomer?.phone} • Details auto-filled</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCustomerAuthModalOpen(true)}
            className="text-xs text-workshop-400 hover:text-white underline"
          >
            Switch Account
          </button>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-red-950/70 border border-red-800 rounded text-sm text-red-200 flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Customer Information */}
      <div className="space-y-4">
        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white pb-2 border-b border-workshop-800 flex items-center">
          <User className="w-4 h-4 mr-2 text-crimson-500" />
          1. Customer Contact Details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Full Name <span className="text-crimson-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="e.g. Kwame Mensah"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Ghana Phone / WhatsApp <span className="text-crimson-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="e.g. 024 458 9201"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. kwame@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="space-y-4">
        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white pb-2 border-b border-workshop-800 flex items-center">
          <Car className="w-4 h-4 mr-2 text-crimson-500" />
          2. Vehicle Information
        </h4>

        {currentCustomer && currentCustomer.vehicles.length > 0 && (
          <div className="bg-workshop-950 p-4 rounded border border-workshop-800 space-y-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-workshop-300 block">
              Select Vehicle from Your Garage:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentCustomer.vehicles.map(v => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleGarageVehicleSelect(v.id)}
                  className={`p-3 rounded text-left transition-all border ${
                    selectedGarageVehicleId === v.id
                      ? 'border-crimson-500 bg-crimson-950/30 text-white'
                      : 'border-workshop-800 bg-workshop-900/80 text-workshop-300 hover:border-workshop-700'
                  }`}
                >
                  <span className="text-xs font-bold block text-white">{v.year} {v.make} {v.model}</span>
                  <span className="text-[11px] font-mono text-crimson-400 block mt-0.5">{v.registration}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleGarageVehicleSelect('custom')}
                className={`p-3 rounded text-left transition-all border flex items-center space-x-2.5 ${
                  selectedGarageVehicleId === 'custom'
                    ? 'border-crimson-500 bg-crimson-950/30 text-white'
                    : 'border-workshop-800 bg-workshop-900/80 text-workshop-400 hover:border-workshop-700'
                }`}
              >
                <PlusCircle className="w-4 h-4 text-crimson-500 shrink-0" />
                <span className="text-xs font-semibold">Different / New Vehicle</span>
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Make <span className="text-crimson-500">*</span>
            </label>
            <input
              type="text"
              name="vehicleMake"
              required
              placeholder="e.g. Toyota"
              value={formData.vehicleMake}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Model <span className="text-crimson-500">*</span>
            </label>
            <input
              type="text"
              name="vehicleModel"
              required
              placeholder="e.g. Camry"
              value={formData.vehicleModel}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Year <span className="text-crimson-500">*</span>
            </label>
            <input
              type="number"
              name="vehicleYear"
              min="1990"
              max="2027"
              required
              value={formData.vehicleYear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Registration No. <span className="text-crimson-500">*</span>
            </label>
            <input
              type="text"
              name="vehicleReg"
              required
              placeholder="e.g. GW 4920 - 22"
              value={formData.vehicleReg}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white uppercase placeholder-workshop-500 outline-none"
            />
          </div>
        </div>

        <div className="pt-2">
          <label className="block text-sm font-semibold text-slate-200 mb-1.5">
            VIN / Chassis Number <span className="text-workshop-400 font-normal text-xs">(Optional — helps verify exact OEM parts)</span>
          </label>
          <input
            type="text"
            name="vin"
            placeholder="e.g. 4T1B11HK5KU892019"
            value={formData.vin}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white uppercase placeholder-workshop-500 outline-none"
          />
        </div>
      </div>

      {/* Service Selection & Scheduling */}
      <div className="space-y-4">
        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white pb-2 border-b border-workshop-800 flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-crimson-500" />
          3. Service Required & Preferred Schedule
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Service Required <span className="text-crimson-500">*</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
            >
              {serviceOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Preferred Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-1.5">
              Preferred Time Window
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
            >
              {timeSlots.map(ts => (
                <option key={ts} value={ts}>{ts}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-2">
          <label className="block text-sm font-semibold text-slate-200 mb-1.5">
            Description of Problem or Symptoms
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="Describe any warning lights, noises, vibration, or specific symptoms (e.g. Squeaking when applying brakes at low speed)..."
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white placeholder-workshop-500 outline-none"
          />
        </div>
      </div>

      {/* Image Upload Area */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-2">
          Upload Vehicle Images or Warning Lights (Optional)
        </label>
        <div className="p-6 border-2 border-dashed border-workshop-700 hover:border-workshop-500 rounded bg-workshop-950/60 text-center cursor-pointer relative">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleSimulatedFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
          <Upload className="w-6 h-6 text-workshop-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-200">Click or tap to upload photos</p>
          <p className="text-xs text-workshop-400 mt-1">Attach photos of dashboard warning lights, leak areas, or vehicle condition</p>
        </div>
        {uploadedFiles.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {uploadedFiles.map((file, i) => (
              <span key={i} className="px-3 py-1.5 bg-workshop-800 text-slate-200 rounded text-xs border border-workshop-700">
                📎 {file}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-4 bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 text-white font-bold text-base uppercase tracking-wider rounded transition-colors shadow-lg"
        >
          Submit Service Request
        </button>
      </div>
    </form>
  );
};
