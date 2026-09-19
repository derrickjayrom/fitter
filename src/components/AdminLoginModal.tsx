import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Lock, X, KeyRound, AlertCircle } from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const { 
    isAdminLoginModalOpen, 
    setIsAdminLoginModalOpen, 
    loginAdmin, 
    setCurrentPage 
  } = useApp();
  
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isAdminLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pin)) {
      setError(false);
      setPin('');
      setIsAdminLoginModalOpen(false);
      setCurrentPage('admin');
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-workshop-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="w-full max-w-md bg-workshop-900 border border-workshop-700 rounded-sm shadow-2xl p-6 relative">
        <button
          onClick={() => {
            setIsAdminLoginModalOpen(false);
            setError(false);
            setPin('');
          }}
          className="absolute top-4 right-4 p-1 text-workshop-400 hover:text-white rounded-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-sm bg-crimson-900/50 border border-crimson-700/50 flex items-center justify-center text-crimson-400">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Workshop Staff Portal</h3>
            <p className="text-xs text-workshop-400">Restricted to authorized technicians and managers</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-workshop-300 uppercase tracking-wider mb-1.5">
              Enter Staff Access PIN
            </label>
            <div className="relative">
              <input
                type="password"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                placeholder="••••"
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 rounded-sm text-white font-mono text-center tracking-widest text-lg outline-none"
                autoFocus
              />
              <KeyRound className="w-4 h-4 text-workshop-500 absolute left-3 top-3.5" />
            </div>
            <p className="text-[11px] text-workshop-500 mt-1.5 text-center">
              Demo staff access PIN: <span className="font-mono text-crimson-400 font-bold">1234</span>
            </p>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-xs text-red-400 bg-red-950/40 p-2.5 rounded-sm border border-red-900/50">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Invalid PIN. Please enter the authorized staff PIN (1234).</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-xs rounded-sm transition-colors uppercase tracking-wider"
            >
              Authenticate & Open Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
