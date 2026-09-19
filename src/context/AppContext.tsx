import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  ServiceRequest, 
  Customer, 
  Appointment, 
  ServiceItem, 
  BlogPost, 
  ServiceStatus,
  ServiceRecord,
  PageType
} from '../types';
import { 
  INITIAL_SERVICE_REQUESTS, 
  INITIAL_CUSTOMERS, 
  INITIAL_APPOINTMENTS
} from '../data/initialData';

interface AppContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedService: ServiceItem | null;
  setSelectedService: (service: ServiceItem | null) => void;
  selectedBlog: BlogPost | null;
  setSelectedBlog: (blog: BlogPost | null) => void;
  isInspectionModalOpen: boolean;
  setIsInspectionModalOpen: (open: boolean) => void;
  isBookModalOpen: boolean;
  setIsBookModalOpen: (open: boolean) => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  isAdminLoginModalOpen: boolean;
  setIsAdminLoginModalOpen: (open: boolean) => void;
  
  // Customer Auth
  currentCustomer: Customer | null;
  isCustomerAuthenticated: boolean;
  isCustomerAuthModalOpen: boolean;
  setIsCustomerAuthModalOpen: (open: boolean) => void;
  loginCustomer: (identifier: string, pin?: string) => boolean;
  registerCustomer: (data: {
    name: string;
    phone: string;
    email: string;
    pin?: string;
    vehicle?: {
      make: string;
      model: string;
      year: number;
      registration: string;
      vin?: string;
    };
  }) => Customer;
  logoutCustomer: () => void;

  // Booking management
  cancelBooking: (id: string, reason?: string) => void;
  rescheduleBooking: (id: string, newDate: string, newTime: string) => void;

  // Data
  serviceRequests: ServiceRequest[];
  addServiceRequest: (request: Omit<ServiceRequest, 'id' | 'status' | 'createdAt'>) => ServiceRequest;
  updateRequestStatus: (id: string, status: ServiceStatus) => void;
  updateRequestDetails: (id: string, updates: Partial<ServiceRequest>) => void;
  
  customers: Customer[];
  addServiceRecord: (customerId: string, vehicleId: string, record: Omit<ServiceRecord, 'id'>) => void;
  
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('tw_admin_auth') === 'true';
  });

  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(() => {
    const saved = localStorage.getItem('tw_service_requests');
    return saved ? JSON.parse(saved) : INITIAL_SERVICE_REQUESTS;
  });

  const [customers, setCustomers] = useState<Customer[]>(() => {
    const saved = localStorage.getItem('tw_customers');
    return saved ? JSON.parse(saved) : INITIAL_CUSTOMERS;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('tw_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  // Customer Authentication state
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(() => {
    const saved = localStorage.getItem('tw_current_customer');
    return saved ? JSON.parse(saved) : null;
  });
  const [isCustomerAuthModalOpen, setIsCustomerAuthModalOpen] = useState(false);

  useEffect(() => {
    if (currentCustomer) {
      localStorage.setItem('tw_current_customer', JSON.stringify(currentCustomer));
    } else {
      localStorage.removeItem('tw_current_customer');
    }
  }, [currentCustomer]);

  // Ensure light class is removed on initialization
  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('tw_service_requests', JSON.stringify(serviceRequests));
  }, [serviceRequests]);

  useEffect(() => {
    localStorage.setItem('tw_customers', JSON.stringify(customers));
  }, [customers]);

  useEffect(() => {
    localStorage.setItem('tw_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('tw_admin_auth', isAdminAuthenticated ? 'true' : 'false');
  }, [isAdminAuthenticated]);

  const loginAdmin = (pin: string): boolean => {
    // Default demo staff PIN: 1234
    if (pin === '1234') {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    if (currentPage === 'admin') {
      setCurrentPage('home');
    }
  };

  // Customer Login / Register / Logout
  const loginCustomer = (identifier: string, pin?: string): boolean => {
    const cleanId = identifier.trim().toLowerCase().replace(/\s+/g, '');
    const cleanPhone = identifier.trim().replace(/\s+/g, '').replace(/^0/, '+233');

    const found = customers.find(c => {
      const cPhone = c.phone.replace(/\s+/g, '');
      const cEmail = c.email.toLowerCase();
      const cName = c.name.toLowerCase();
      return (
        cPhone === cleanPhone ||
        cPhone.endsWith(cleanId) ||
        cEmail === cleanId ||
        cName.includes(cleanId)
      );
    });

    if (found) {
      if (found.pin && pin && found.pin !== pin) {
        return false;
      }
      setCurrentCustomer(found);
      setIsCustomerAuthModalOpen(false);
      return true;
    }

    return false;
  };

  const registerCustomer = (data: {
    name: string;
    phone: string;
    email: string;
    pin?: string;
    vehicle?: {
      make: string;
      model: string;
      year: number;
      registration: string;
      vin?: string;
    };
  }): Customer => {
    const cleanPhone = data.phone.startsWith('+233')
      ? data.phone
      : `+233 ${data.phone.replace(/^0/, '').trim()}`;

    const newCustomerId = `cust-${Date.now().toString().slice(-4)}`;
    const newCustomer: Customer = {
      id: newCustomerId,
      name: data.name,
      phone: cleanPhone,
      email: data.email,
      pin: data.pin || '1234',
      createdAt: new Date().toISOString().slice(0, 10),
      vehicles: data.vehicle
        ? [
            {
              id: `veh-${Date.now().toString().slice(-4)}`,
              customerId: newCustomerId,
              make: data.vehicle.make,
              model: data.vehicle.model,
              year: data.vehicle.year,
              registration: data.vehicle.registration.toUpperCase(),
              vin: data.vehicle.vin || 'PENDING-DECODE',
              mileage: 0,
              serviceHistory: []
            }
          ]
        : []
    };

    setCustomers(prev => [newCustomer, ...prev]);
    setCurrentCustomer(newCustomer);
    setIsCustomerAuthModalOpen(false);
    return newCustomer;
  };

  const logoutCustomer = () => {
    setCurrentCustomer(null);
    if (currentPage === 'my-bookings') {
      setCurrentPage('home');
    }
  };

  const cancelBooking = (id: string, reason?: string) => {
    setServiceRequests(prev =>
      prev.map(r =>
        r.id === id || r.id === id.toLowerCase()
          ? {
              ...r,
              status: 'Cancelled' as ServiceStatus,
              internalNotes: reason
                ? `${r.internalNotes ? r.internalNotes + ' | ' : ''}Customer cancellation: ${reason}`
                : r.internalNotes
            }
          : r
      )
    );

    setAppointments(prev =>
      prev.map(a =>
        a.id === id || a.requestId === id
          ? { ...a, status: 'Cancelled' }
          : a
      )
    );
  };

  const rescheduleBooking = (id: string, newDate: string, newTime: string) => {
    setServiceRequests(prev =>
      prev.map(r => {
        if (r.id === id || r.id === id.toLowerCase()) {
          return {
            ...r,
            preferredDate: newDate,
            preferredTime: newTime,
            appointmentDate: r.status === 'Scheduled' ? newDate : r.appointmentDate,
            appointmentTime: r.status === 'Scheduled' ? newTime : r.appointmentTime
          };
        }
        return r;
      })
    );

    setAppointments(prev =>
      prev.map(a => {
        if (a.id === id || a.requestId === id) {
          return {
            ...a,
            date: newDate,
            time: newTime
          };
        }
        return a;
      })
    );
  };

  const addServiceRequest = (data: Omit<ServiceRequest, 'id' | 'status' | 'createdAt'>): ServiceRequest => {
    const newReq: ServiceRequest = {
      ...data,
      id: `req-${Date.now().toString().slice(-4)}`,
      status: 'New',
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };

    setServiceRequests(prev => [newReq, ...prev]);

    // Also link or create customer record
    setCustomers(prev => {
      const existing = prev.find(c => c.phone.replace(/\s+/g, '') === data.phone.replace(/\s+/g, ''));
      if (existing) {
        // Check if vehicle exists
        const vehExists = existing.vehicles.some(v => v.registration.toLowerCase() === data.vehicleReg.toLowerCase());
        if (!vehExists) {
          const updatedVehicles = [
            ...existing.vehicles,
            {
              id: `veh-${Date.now().toString().slice(-4)}`,
              customerId: existing.id,
              make: data.vehicleMake,
              model: data.vehicleModel,
              year: typeof data.vehicleYear === 'number' ? data.vehicleYear : parseInt(data.vehicleYear, 10) || 2020,
              registration: data.vehicleReg,
              vin: data.vin || 'PENDING-DECODE',
              mileage: 0,
              serviceHistory: []
            }
          ];
          return prev.map(c => c.id === existing.id ? { ...c, vehicles: updatedVehicles } : c);
        }
        return prev;
      } else {
        const newCustomerId = `cust-${Date.now().toString().slice(-4)}`;
        const newCustomer: Customer = {
          id: newCustomerId,
          name: data.fullName,
          phone: data.phone,
          email: data.email,
          vehicles: [
            {
              id: `veh-${Date.now().toString().slice(-4)}`,
              customerId: newCustomerId,
              make: data.vehicleMake,
              model: data.vehicleModel,
              year: typeof data.vehicleYear === 'number' ? data.vehicleYear : parseInt(data.vehicleYear, 10) || 2020,
              registration: data.vehicleReg,
              vin: data.vin || 'PENDING-DECODE',
              mileage: 0,
              serviceHistory: []
            }
          ]
        };
        return [newCustomer, ...prev];
      }
    });

    return newReq;
  };

  const updateRequestStatus = (id: string, status: ServiceStatus) => {
    setServiceRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
  };

  const updateRequestDetails = (id: string, updates: Partial<ServiceRequest>) => {
    setServiceRequests(prev => prev.map(req => {
      if (req.id === id) {
        const updated = { ...req, ...updates };
        // If scheduled with date/time, ensure an appointment exists
        if (updates.status === 'Scheduled' && updates.appointmentDate && updates.appointmentTime) {
          setAppointments(currApts => {
            const existingIndex = currApts.findIndex(a => a.requestId === id);
            const aptData: Appointment = {
              id: existingIndex >= 0 ? currApts[existingIndex].id : `apt-${Date.now().toString().slice(-4)}`,
              requestId: id,
              customerName: updated.fullName,
              customerPhone: updated.phone,
              vehicle: `${updated.vehicleYear} ${updated.vehicleMake} ${updated.vehicleModel} (${updated.vehicleReg})`,
              service: updated.serviceType,
              technician: updated.assignedTechnician || 'Unassigned',
              date: updates.appointmentDate!,
              time: updates.appointmentTime!,
              status: 'Scheduled'
            };
            if (existingIndex >= 0) {
              const copy = [...currApts];
              copy[existingIndex] = aptData;
              return copy;
            }
            return [aptData, ...currApts];
          });
        }
        return updated;
      }
      return req;
    }));
  };

  const addServiceRecord = (customerId: string, vehicleId: string, record: Omit<ServiceRecord, 'id'>) => {
    const newRecord: ServiceRecord = {
      ...record,
      id: `rec-${Date.now().toString().slice(-4)}`
    };

    setCustomers(prev => prev.map(cust => {
      if (cust.id === customerId) {
        return {
          ...cust,
          vehicles: cust.vehicles.map(veh => {
            if (veh.id === vehicleId) {
              return {
                ...veh,
                serviceHistory: [newRecord, ...veh.serviceHistory]
              };
            }
            return veh;
          })
        };
      }
      return cust;
    }));
  };

  const addAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newApt: Appointment = {
      ...appointment,
      id: `apt-${Date.now().toString().slice(-4)}`
    };
    setAppointments(prev => [newApt, ...prev]);
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedService,
        setSelectedService,
        selectedBlog,
        setSelectedBlog,
        isInspectionModalOpen,
        setIsInspectionModalOpen,
        isBookModalOpen,
        setIsBookModalOpen,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        isAdminLoginModalOpen,
        setIsAdminLoginModalOpen,
        currentCustomer,
        isCustomerAuthenticated: !!currentCustomer,
        isCustomerAuthModalOpen,
        setIsCustomerAuthModalOpen,
        loginCustomer,
        registerCustomer,
        logoutCustomer,
        cancelBooking,
        rescheduleBooking,
        serviceRequests,
        addServiceRequest,
        updateRequestStatus,
        updateRequestDetails,
        customers,
        addServiceRecord,
        appointments,
        addAppointment,
        updateAppointmentStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
