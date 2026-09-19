import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation 
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setFormSent(true);
  };

  return (
    <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-workshop-900 border border-workshop-700 text-sm text-crimson-400 font-bold uppercase tracking-wider rounded">
          <MapPin className="w-4 h-4" />
          <span>Workshop Location & Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Get in Touch with TorqueWorks Auto
        </h1>
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
          Whether you need a diagnostic slot, have a question about an existing quote, or want to discuss fleet maintenance for your business, our workshop team is ready to assist.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info & Hours */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-workshop-900 border border-workshop-800 p-8 rounded space-y-8">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-workshop-800 pb-4">
              Direct Channels
            </h3>

            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold">Workshop Phone</span>
                  <a href="tel:+233245550192" className="text-lg font-bold text-white hover:text-crimson-400 transition-colors">
                    +233 24 555 0192
                  </a>
                  <p className="text-xs text-workshop-400 mt-1">Lines open Mon–Sat, 8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-emerald-500 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold">WhatsApp Line</span>
                  <a
                    href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    +233 24 555 0192
                  </a>
                  <p className="text-xs text-workshop-400 mt-1">Fastest response for quick questions & quotes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-workshop-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold">Email</span>
                  <a href="mailto:service@torqueworksauto.com" className="text-base font-semibold text-white hover:text-crimson-400 transition-colors">
                    service@torqueworksauto.com
                  </a>
                  <p className="text-xs text-workshop-400 mt-1">For corporate inquiries and fleet RFPs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-crimson-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold">Workshop Physical Address</span>
                  <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                    Plot 14, Spintex Road Industrial Area,<br />
                    Near Coca-Cola Roundabout,<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-workshop-950 border border-workshop-800 rounded text-workshop-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-workshop-400 block text-xs uppercase tracking-wider font-semibold">Operating Hours</span>
                  <p className="text-sm sm:text-base text-slate-100 font-semibold">Monday – Saturday: 8:00 AM – 5:00 PM</p>
                  <p className="text-xs text-workshop-400 mt-0.5">Sunday: Closed (Emergency by appointment)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="tel:+233245550192"
              className="py-4 px-5 bg-workshop-800 hover:bg-workshop-700 text-white font-bold text-sm uppercase tracking-wider rounded border border-workshop-700 flex items-center justify-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2 text-crimson-500" />
              Call Workshop
            </a>
            <a
              href="https://wa.me/233245550192?text=Hello%20TorqueWorks%20Auto,%20I%20would%20like%20to%20inquire%20about%20a%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm uppercase tracking-wider rounded flex items-center justify-center transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-workshop-900 border border-workshop-800 p-8 sm:p-12 rounded">
          <h3 className="text-2xl font-bold text-white mb-2">Send Us a Direct Message</h3>
          <p className="text-sm text-slate-300 mb-8">
            Leave a note below and our service team will respond via phone or WhatsApp.
          </p>

          {formSent ? (
            <div className="p-8 bg-workshop-950 border border-emerald-800/60 rounded text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-950 flex items-center justify-center mx-auto text-emerald-400 border-2 border-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">Message Delivered</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our service advisor has received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="text-sm text-crimson-400 hover:underline pt-2 font-semibold"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Your Name <span className="text-crimson-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Kwame Mensah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Ghana Phone Number <span className="text-crimson-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="024 458 9201"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="kwame@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Topic / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
                  >
                    <option value="General Inquiry">General Workshop Inquiry</option>
                    <option value="Diagnostics Quote">Diagnostic & Repair Quote</option>
                    <option value="Vehicle Inspection">Pre-Purchase Vehicle Inspection</option>
                    <option value="Fleet Maintenance">Corporate Fleet Maintenance</option>
                    <option value="Parts Availability">Parts Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Message / Vehicle Question <span className="text-crimson-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help? Include vehicle make, model, and year if asking about a specific mechanical issue..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-workshop-950 border border-workshop-700 focus:border-crimson-500 rounded text-base text-white outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-crimson-600 hover:bg-crimson-700 text-white font-bold text-base uppercase tracking-wider rounded transition-colors flex items-center justify-center shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Styled Interactive Workshop Map Representation */}
      <div className="bg-workshop-900 border border-workshop-800 rounded overflow-hidden">
        <div className="p-5 bg-workshop-950 border-b border-workshop-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
          <div className="flex items-center space-x-3">
            <Navigation className="w-5 h-5 text-crimson-500" />
            <span className="font-bold text-white text-base">Workshop Location Map</span>
            <span className="text-slate-300">• Spintex Road Industrial Area, Accra</span>
          </div>
          <a
            href="https://maps.google.com/?q=Spintex+Road+Accra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson-400 hover:underline font-bold text-sm"
          >
            Open in Google Maps ↗
          </a>
        </div>
        <div className="relative h-80 sm:h-96 w-full bg-workshop-950 flex items-center justify-center p-8 text-center">
          <div className="relative z-10 max-w-lg bg-workshop-900/95 border border-workshop-700 p-8 rounded shadow-2xl backdrop-blur-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-crimson-600/20 border-2 border-crimson-500 flex items-center justify-center mx-auto text-crimson-400">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">TorqueWorks Auto Workshop</h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Plot 14, Spintex Road Industrial Area, Accra<br />
              <span className="text-xs text-workshop-400">Near Coca-Cola Roundabout & Kasapreko Junction</span>
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Spintex+Road+Accra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-crimson-600 hover:bg-crimson-700 text-white text-sm font-bold rounded transition-colors"
              >
                Get Driving Directions
              </a>
              <a
                href="tel:+233245550192"
                className="px-5 py-3 bg-workshop-800 hover:bg-workshop-700 text-slate-100 text-sm font-bold rounded border border-workshop-700 transition-colors"
              >
                Call for Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
