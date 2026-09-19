import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { BlogReaderModal } from './components/BlogReaderModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { CustomerAuthModal } from './components/CustomerAuthModal';

// Public views
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { VehicleInspectionView } from './views/VehicleInspectionView';
import { FleetServicesView } from './views/FleetServicesView';
import { AboutView } from './views/AboutView';
import { TeamView } from './views/TeamView';
import { BookServiceView } from './views/BookServiceView';
import { ContactView } from './views/ContactView';
import { BlogView } from './views/BlogView';
import { CustomerPortalView } from './views/CustomerPortalView';

// Admin view
import { AdminLayout } from './views/admin/AdminLayout';

export const AppContent: React.FC = () => {
  const { currentPage, isAdminAuthenticated, setIsAdminLoginModalOpen } = useApp();

  // If in admin view and authenticated, render full admin layout without public header/footer
  if (currentPage === 'admin') {
    if (isAdminAuthenticated) {
      return (
        <div className="min-h-screen bg-workshop-950 text-slate-100">
          <AdminLayout />
          <AdminLoginModal />
        </div>
      );
    } else {
      // Auto open login modal if unauthenticated
      setIsAdminLoginModalOpen(true);
    }
  }

  return (
    <div className="min-h-screen bg-workshop-950 text-slate-100 flex flex-col selection:bg-crimson-600 selection:text-white">
      {/* Public Navigation */}
      <Navbar />

      {/* Main Public View Content */}
      <main className="flex-1">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'services' && <ServicesView />}
        {currentPage === 'inspection' && <VehicleInspectionView />}
        {currentPage === 'fleet' && <FleetServicesView />}
        {currentPage === 'about' && <AboutView />}
        {currentPage === 'team' && <TeamView />}
        {currentPage === 'book' && <BookServiceView />}
        {currentPage === 'contact' && <ContactView />}
        {currentPage === 'blog' && <BlogView />}
        {currentPage === 'my-bookings' && <CustomerPortalView />}
      </main>

      {/* Public Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />

      {/* Modals */}
      <ServiceDetailModal />
      <ServiceRequestModal />
      <BlogReaderModal />
      <AdminLoginModal />
      <CustomerAuthModal />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
