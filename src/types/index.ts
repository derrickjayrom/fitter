export type ServiceStatus = 
  | 'New' 
  | 'Contacted' 
  | 'Scheduled' 
  | 'In Progress' 
  | 'Awaiting Approval' 
  | 'Completed' 
  | 'Cancelled';

export interface ServiceRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number | string;
  vehicleReg: string;
  vin?: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
  status: ServiceStatus;
  assignedTechnician?: string;
  internalNotes?: string;
  appointmentDate?: string;
  appointmentTime?: string;
  createdAt: string;
  images?: string[];
}

export interface ServiceRecord {
  id: string;
  vehicleId: string;
  date: string;
  service: string;
  technician: string;
  workPerformed: string;
  partsUsed: string;
  cost: number; // in GHS
  status: 'Completed' | 'In Progress' | 'Pending Approval';
}

export interface Vehicle {
  id: string;
  customerId: string;
  make: string;
  model: string;
  year: number;
  registration: string;
  vin: string;
  mileage: number;
  serviceHistory: ServiceRecord[];
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  company?: string;
  pin?: string;
  createdAt?: string;
  vehicles: Vehicle[];
}

export type PageType = 
  | 'home' 
  | 'services' 
  | 'inspection' 
  | 'fleet' 
  | 'about' 
  | 'team' 
  | 'book' 
  | 'contact' 
  | 'blog' 
  | 'admin'
  | 'my-bookings';

export interface Appointment {
  id: string;
  requestId?: string;
  customerName: string;
  customerPhone: string;
  vehicle: string;
  service: string;
  technician: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  symptoms: string[];
  diagnosticApproach: string[];
  whatsIncluded: string[];
  estimatedTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  roleOrLocation: string;
  vehicle: string;
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface InspectionCheckItem {
  area: string;
  items: {
    name: string;
    status: 'Good' | 'Fair' | 'Needs Attention' | 'Critical';
    notes?: string;
  }[];
}

export type AdminTab = 'overview' | 'requests' | 'customers' | 'appointments' | 'settings';
