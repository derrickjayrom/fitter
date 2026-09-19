import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, 
  Inbox, 
  Calendar, 
  Users, 
  Settings, 
  LogOut, 
  ArrowLeft,
  Wrench
} from 'lucide-react';
import { AdminOverview } from './AdminOverview';
import { AdminServiceRequests } from './AdminServiceRequests';
import { AdminCustomersVehicles } from './AdminCustomersVehicles';
import { AdminAppointments } from './AdminAppointments';
import { AdminSettings } from './AdminSettings';
import type { AdminTab } from '../../types';

export type { AdminTab };

export const AdminLayout: React.FC = () => {
  const { setCurrentPage, logoutAdmin, serviceRequests, appointments } = useApp();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  const newRequestsCount = serviceRequests.filter(r => r.status === 'New').length;
  const upcomingAptsCount = appointments.filter(a => a.status === 'Scheduled').length;

  const navTabs = [
    { id: 'overview' as AdminTab, label: 'Dashboard', icon: LayoutDashboard },
    { 
      id: 'requests' as AdminTab, 
      label: 'Service Requests', 
      icon: Inbox, 
      badge: newRequestsCount > 0 ? newRequestsCount : undefined 
    },
    { id: 'customers' as AdminTab, label: 'Customers & Vehicles', icon: Users },
    { 
      id: 'appointments' as AdminTab, 
      label: 'Appointments', 
      icon: Calendar,
      badge: upcomingAptsCount > 0 ? upcomingAptsCount : undefined 
    },
    { id: 'settings' as AdminTab, label: 'Workshop Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-workshop-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full lg:w-72 bg-workshop-900 border-b lg:border-b-0 lg:border-r border-workshop-800 shrink-0 flex flex-col justify-between">
        <div>
          {/* Brand header */}
          <div className="p-6 border-b border-workshop-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded bg-crimson-600 flex items-center justify-center text-white shadow">
                <Wrench className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="text-base font-bold text-white block">TorqueWorks</span>
                <span className="text-xs uppercase font-bold text-crimson-400 tracking-wider">
                  Workshop Management
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-950/90 text-emerald-400 border border-emerald-800 font-bold">
              Active
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-2">
            {navTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-crimson-600 text-white shadow'
                      : 'text-workshop-300 hover:text-white hover:bg-workshop-850'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge !== undefined && (
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      isActive ? 'bg-white text-crimson-700' : 'bg-crimson-600 text-white'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom User / Exit Controls */}
        <div className="p-5 border-t border-workshop-800 space-y-3">
          <div className="p-3 bg-workshop-950 rounded border border-workshop-800 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-crimson-900/90 flex items-center justify-center text-xs font-bold text-crimson-200">
                KB
              </div>
              <div className="truncate">
                <p className="font-bold text-white truncate text-sm">Kwame Boateng</p>
                <p className="text-xs text-workshop-400">Workshop Manager</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center justify-center py-2.5 px-3 rounded bg-workshop-800 hover:bg-workshop-700 text-slate-100 text-xs font-bold uppercase tracking-wider transition-colors border border-workshop-700"
              title="Return to public website"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Website
            </button>
            <button
              onClick={logoutAdmin}
              className="flex items-center justify-center py-2.5 px-3 rounded bg-workshop-800 hover:bg-red-900/70 text-red-300 text-xs font-bold uppercase tracking-wider transition-colors border border-workshop-700"
              title="Sign out of staff portal"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
        {activeTab === 'overview' && <AdminOverview onNavigate={setActiveTab} />}
        {activeTab === 'requests' && <AdminServiceRequests />}
        {activeTab === 'customers' && <AdminCustomersVehicles />}
        {activeTab === 'appointments' && <AdminAppointments />}
        {activeTab === 'settings' && <AdminSettings />}
      </main>
    </div>
  );
};
