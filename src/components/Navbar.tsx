import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, Calendar, Menu, X, Shield, Wrench, MessageSquare, User, CalendarCheck, LogIn, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    setIsBookModalOpen, 
    isAdminAuthenticated,
    currentCustomer,
    isCustomerAuthenticated,
    setIsCustomerAuthModalOpen,
    logoutCustomer
  } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'fleet', label: 'Fleet Services' },
    { id: 'inspection', label: 'Vehicle Inspection' },
    { id: 'team', label: 'Our Team' },
    { id: 'blog', label: 'Car Care Tips' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: typeof navItems[number]['id']) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookClick = () => {
    if (!isCustomerAuthenticated) {
      setIsCustomerAuthModalOpen(true);
    } else {
      setIsBookModalOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-workshop-950/98 backdrop-blur-md border-b border-workshop-800 transition-colors">
      {/* Top Utility Strip */}
      <div className="hidden lg:block bg-workshop-900/90 border-b border-workshop-800 text-sm text-workshop-300 py-2 px-6 lg:px-12">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <span className="flex items-center text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2.5 inline-block"></span>
              Workshop Open: Mon – Sat 8:00 AM – 5:00 PM
            </span>
            <span className="text-slate-300">Spintex Road, Industrial Area, Accra</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20would%20like%20to%20inquire%20about%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              WhatsApp: +233 24 555 0192
            </a>
            <a
              href="tel:+233245550192"
              className="flex items-center text-slate-200 hover:text-white transition-colors font-medium text-sm"
            >
              <Phone className="w-4 h-4 mr-1.5 text-crimson-500" />
              Call: +233 24 555 0192
            </a>

            {/* Customer Auth / Portal in Top Strip */}
            {isCustomerAuthenticated ? (
              <div className="flex items-center space-x-2 pl-2 border-l border-workshop-700">
                <button
                  onClick={() => {
                    setCurrentPage('my-bookings');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-200 hover:text-white bg-workshop-800 px-3 py-1 rounded border border-workshop-700 transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-crimson-500" />
                  <span>{currentCustomer?.name}</span>
                  <span className="text-[10px] text-crimson-400 font-semibold uppercase">● Portal</span>
                </button>
                <button
                  onClick={logoutCustomer}
                  className="text-xs text-workshop-400 hover:text-red-400 transition-colors"
                  title="Sign out of customer portal"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsCustomerAuthModalOpen(true)}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-200 hover:text-white bg-workshop-800 hover:bg-workshop-700 px-3 py-1 rounded border border-workshop-700 transition-colors pl-2 border-l border-workshop-700"
              >
                <LogIn className="w-3.5 h-3.5 text-crimson-500" />
                <span>Customer Sign In</span>
              </button>
            )}

            {isAdminAuthenticated && (
              <button
                onClick={() => setCurrentPage('admin')}
                className="inline-flex items-center px-3 py-1 rounded bg-crimson-900/70 text-crimson-200 hover:bg-crimson-800 text-xs font-bold uppercase tracking-wider"
              >
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                Staff Dashboard
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Full-Width Navigation Bar */}
      <div className="w-full px-6 lg:px-12 py-3.5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Wordmark & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3.5 text-left group shrink-0 focus:outline-none"
          >
            <div className="w-11 h-11 rounded bg-gradient-to-br from-crimson-600 to-crimson-800 flex items-center justify-center text-white shadow-md border border-crimson-500/30 group-hover:bg-crimson-600 transition-colors">
              <Wrench className="w-6 h-6 -rotate-45" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-white flex items-center">
                <span>TORQUE</span>
                <span className="text-crimson-500">WORKS</span>
                <span className="text-xs ml-2 uppercase font-bold text-workshop-400 tracking-wider">Auto</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-workshop-400 font-semibold">
                Diagnostics. Repairs. Done Right.
              </p>
            </div>
          </button>

          {/* Desktop Extended Navigation Tabs */}
          <nav className="hidden lg:flex flex-1 items-center justify-evenly px-4 xl:px-8">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 text-base font-semibold tracking-wide transition-all rounded ${
                    isActive
                      ? 'text-white bg-workshop-900 border-b-2 border-crimson-500 shadow-sm'
                      : 'text-workshop-300 hover:text-white hover:bg-workshop-900/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3.5 shrink-0">
            {isCustomerAuthenticated ? (
              <button
                onClick={() => {
                  setCurrentPage('my-bookings');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`inline-flex items-center px-4 py-2.5 text-sm font-bold rounded border transition-colors ${
                  currentPage === 'my-bookings'
                    ? 'bg-crimson-900/60 border-crimson-500 text-white'
                    : 'bg-workshop-900 hover:bg-workshop-800 text-slate-100 border-workshop-700'
                }`}
              >
                <CalendarCheck className="w-4 h-4 mr-2 text-crimson-500" />
                <span>My Bookings</span>
              </button>
            ) : (
              <button
                onClick={() => setIsCustomerAuthModalOpen(true)}
                className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-workshop-900 hover:bg-workshop-800 border border-workshop-700 rounded transition-colors"
              >
                <User className="w-4 h-4 mr-2 text-crimson-500" />
                Sign In
              </button>
            )}

            <button
              onClick={handleBookClick}
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-crimson-600 hover:bg-crimson-700 active:bg-crimson-800 rounded shadow-sm transition-colors uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2.5">
            <button
              onClick={handleBookClick}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-crimson-600 hover:bg-crimson-700 rounded"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-workshop-300 hover:text-white focus:outline-none rounded"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-workshop-900 border-b border-workshop-800 px-6 pt-4 pb-8 space-y-4 animate-fadeIn">
          {/* Mobile Customer Account Strip */}
          <div className="p-3.5 bg-workshop-950 rounded border border-workshop-800">
            {isCustomerAuthenticated ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-crimson-600 text-white font-bold text-xs flex items-center justify-center">
                    {currentCustomer?.name[0]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{currentCustomer?.name}</span>
                    <button
                      onClick={() => {
                        setCurrentPage('my-bookings');
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[11px] text-crimson-400 font-semibold hover:underline block"
                    >
                      View My Bookings & Garage →
                    </button>
                  </div>
                </div>
                <button
                  onClick={logoutCustomer}
                  className="text-xs text-workshop-400 hover:text-red-400 p-1"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-xs text-workshop-300">Have a vehicle booked with us?</span>
                <button
                  onClick={() => {
                    setIsCustomerAuthModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-bold text-crimson-400 hover:text-crimson-300 flex items-center space-x-1"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-base font-semibold rounded transition-colors ${
                  currentPage === item.id
                    ? 'bg-crimson-900/40 text-white border-l-4 border-crimson-600'
                    : 'text-workshop-200 hover:bg-workshop-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-workshop-800 grid grid-cols-2 gap-3">
            <a
              href="tel:+233245550192"
              className="flex items-center justify-center py-3 px-4 rounded bg-workshop-800 text-white text-sm font-semibold border border-workshop-700"
            >
              <Phone className="w-4 h-4 mr-2 text-crimson-500" />
              Call Workshop
            </a>
            <a
              href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20would%20like%20to%20inquire%20about%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center py-3 px-4 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
