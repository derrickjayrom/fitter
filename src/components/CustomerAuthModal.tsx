import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Phone, Mail, Lock, Car, X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const CustomerAuthModal: React.FC = () => {
  const { 
    isCustomerAuthModalOpen, 
    setIsCustomerAuthModalOpen, 
    loginCustomer, 
    registerCustomer,
    setIsBookModalOpen 
  } = useApp();

  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');
  const [identifier, setIdentifier] = useState('');
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Register fields
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPin, setRegPin] = useState('1234');
  const [regVehicleMake, setRegVehicleMake] = useState('');
  const [regVehicleModel, setRegVehicleModel] = useState('');
  const [regVehicleYear, setRegVehicleYear] = useState('2021');
  const [regVehicleReg, setRegVehicleReg] = useState('');

  if (!isCustomerAuthModalOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!identifier) {
      setErrorMsg('Please enter your phone number or email.');
      return;
    }

    const success = loginCustomer(identifier, pin);
    if (!success) {
      setErrorMsg('Account not found. Check phone number or use a demo account below.');
    }
  };

  const handleDemoLogin = (phone: string) => {
    setErrorMsg(null);
    loginCustomer(phone);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!regName || !regPhone || !regEmail) {
      setErrorMsg('Please fill in your Name, Phone, and Email.');
      return;
    }

    registerCustomer({
      name: regName,
      phone: regPhone,
      email: regEmail,
      pin: regPin,
      vehicle: regVehicleMake && regVehicleModel && regVehicleReg ? {
        make: regVehicleMake,
        model: regVehicleModel,
        year: parseInt(regVehicleYear, 10) || 2021,
        registration: regVehicleReg
      } : undefined
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-workshop-900 border border-workshop-700 rounded shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 bg-workshop-950 border-b border-workshop-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-crimson-600 text-white rounded">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Customer Portal Access</h3>
              <p className="text-xs text-workshop-400">Book services, track status & manage appointments</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsCustomerAuthModalOpen(false);
              setErrorMsg(null);
            }}
            className="p-1.5 text-workshop-400 hover:text-white rounded"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-workshop-800 bg-workshop-950/50 shrink-0">
          <button
            type="button"
            onClick={() => {
              setAuthMode('signin');
              setErrorMsg(null);
            }}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider text-center transition-colors border-b-2 ${
              authMode === 'signin'
                ? 'border-crimson-600 text-white bg-workshop-900'
                : 'border-transparent text-workshop-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMode('register');
              setErrorMsg(null);
            }}
            className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider text-center transition-colors border-b-2 ${
              authMode === 'register'
                ? 'border-crimson-600 text-white bg-workshop-900'
                : 'border-transparent text-workshop-400 hover:text-white'
            }`}
          >
            New Customer
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {errorMsg && (
            <div className="p-3.5 bg-red-950/60 border border-red-800/80 rounded text-red-300 text-xs flex items-center space-x-2">
              <span>⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {authMode === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-workshop-300 mb-1.5">
                  Phone Number or Email
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-workshop-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="e.g. 024 458 9201 or kwame@ghmail.com"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-workshop-300 mb-1.5">
                  4-Digit PIN / Password <span className="text-workshop-500 lowercase">(optional for demo)</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-workshop-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    maxLength={10}
                    placeholder="e.g. 1234"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Sign In to Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Demo Accounts Quick-Select */}
              <div className="pt-4 border-t border-workshop-800 space-y-2.5">
                <span className="text-xs uppercase font-bold text-workshop-400 block tracking-wider">
                  Quick 1-Click Demo Accounts:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('+233 24 458 9201')}
                    className="p-3 bg-workshop-950 hover:bg-workshop-800 border border-workshop-700 rounded text-left transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">Kwame Mensah</span>
                    <span className="text-[11px] text-workshop-400 block">+233 24 458 9201</span>
                    <span className="text-[10px] text-crimson-400 font-mono mt-0.5 block">Corolla & C200</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDemoLogin('+233 20 812 3456')}
                    className="p-3 bg-workshop-950 hover:bg-workshop-800 border border-workshop-700 rounded text-left transition-colors"
                  >
                    <span className="text-xs font-bold text-white block">Nana Osei</span>
                    <span className="text-[11px] text-workshop-400 block">+233 20 812 3456</span>
                    <span className="text-[10px] text-crimson-400 font-mono mt-0.5 block">Toyota Hilux D-4D</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs uppercase font-bold text-workshop-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel K. Arthur"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase font-bold text-workshop-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 024 123 4567"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-bold text-workshop-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. samuel@example.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-workshop-300 mb-1">
                    Set a 4-Digit PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    value={regPin}
                    onChange={(e) => setRegPin(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-sm text-white placeholder-workshop-500 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Optional First Vehicle */}
              <div className="pt-3 border-t border-workshop-800 space-y-3">
                <span className="text-xs uppercase font-bold text-crimson-400 block tracking-wider flex items-center">
                  <Car className="w-4 h-4 mr-1.5" />
                  Primary Vehicle Details (Optional)
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Make (e.g. Toyota)"
                    value={regVehicleMake}
                    onChange={(e) => setRegVehicleMake(e.target.value)}
                    className="w-full px-3 py-2 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-xs text-white placeholder-workshop-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Model (e.g. Camry)"
                    value={regVehicleModel}
                    onChange={(e) => setRegVehicleModel(e.target.value)}
                    className="w-full px-3 py-2 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-xs text-white placeholder-workshop-500 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    placeholder="Year (e.g. 2021)"
                    value={regVehicleYear}
                    onChange={(e) => setRegVehicleYear(e.target.value)}
                    className="w-full px-3 py-2 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-xs text-white placeholder-workshop-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Plate Reg (e.g. GW 4120 - 21)"
                    value={regVehicleReg}
                    onChange={(e) => setRegVehicleReg(e.target.value)}
                    className="w-full px-3 py-2 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-xs text-white placeholder-workshop-500 outline-none uppercase font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Create Account & Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="p-3 bg-workshop-950/70 rounded border border-workshop-800/80 flex items-start space-x-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Your phone and vehicle details are securely recorded to track service history and keep you updated via WhatsApp and SMS.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
