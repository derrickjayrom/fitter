import React, { useState } from 'react';
import { Settings, Save, Check, Shield } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    workshopName: 'TorqueWorks Auto Ltd',
    tagline: 'Diagnostics. Repairs. Done Right.',
    address: 'Plot 14, Spintex Road Industrial Area, Near Coca-Cola Roundabout, Accra, Ghana',
    phone: '+233 24 555 0192',
    whatsapp: '+233 24 555 0192',
    email: 'service@torqueworksauto.com',
    hours: 'Monday – Saturday: 8:00 AM – 5:00 PM',
    bays: 6,
    staffPin: '1234',
    enableWhatsAppAlerts: true,
    enableSmsAlerts: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl">
      <div className="pb-4 border-b border-workshop-800">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Workshop Settings & Configuration
        </h1>
        <p className="text-sm text-slate-300 mt-1">
          Manage operating hours, workshop capacity, contact credentials, and staff access PIN.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 text-sm">
        {/* General Workshop Identity */}
        <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center border-b border-workshop-800 pb-3">
            <Settings className="w-5 h-5 text-crimson-500 mr-2.5" />
            General Workshop Identity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Company / Brand Name</label>
              <input
                type="text"
                value={settings.workshopName}
                onChange={(e) => setSettings({ ...settings, workshopName: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Brand Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-200 font-semibold mb-1.5">Workshop Physical Address</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Primary Phone</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">WhatsApp Business Line</label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Email Address</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Security & Access */}
        <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center border-b border-workshop-800 pb-3">
            <Shield className="w-5 h-5 text-crimson-500 mr-2.5" />
            Staff Portal Security & Access
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Staff Access PIN</label>
              <input
                type="text"
                value={settings.staffPin}
                onChange={(e) => setSettings({ ...settings, staffPin: e.target.value })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white font-mono rounded outline-none text-base"
              />
              <p className="text-xs text-workshop-400 mt-1.5">Used to unlock the staff dashboard from the public website.</p>
            </div>
            <div>
              <label className="block text-slate-200 font-semibold mb-1.5">Active Workshop Bays</label>
              <input
                type="number"
                value={settings.bays}
                onChange={(e) => setSettings({ ...settings, bays: Number(e.target.value) })}
                className="w-full px-4 py-2.5 bg-workshop-950 border border-workshop-700 text-white rounded outline-none text-base"
              />
              <p className="text-xs text-workshop-400 mt-1.5">Current bay capacity for simultaneous vehicle intake.</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between pt-2">
          {saved && (
            <span className="text-emerald-400 font-bold flex items-center text-sm">
              <Check className="w-5 h-5 mr-2" />
              Settings updated successfully!
            </span>
          )}
          <button
            type="submit"
            className="ml-auto px-7 py-3 bg-crimson-600 hover:bg-crimson-700 text-white font-bold uppercase tracking-wider rounded transition-colors text-xs flex items-center shadow-md"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
};
