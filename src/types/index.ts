export interface Practice {
  id: string;
  name: string;
  specialty: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  timezone: string;
  website?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  biography: string;
  credentials: string[];
  image: string;
  featured: boolean;
  active: boolean;
  displayOrder: number;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
  active: boolean;
  displayOrder: number;
}

export interface Testimonial {
  id: string;
  displayName: string;
  quote: string;
  context: string;
  rating: number;
  approved: boolean;
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  altText: string;
  active: boolean;
  order: number;
}

export interface BeforeAfterCase {
  id: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  beforeAlt: string;
  afterAlt: string;
  active: boolean;
  featured: boolean;
  order: number;
}

export interface AvailabilitySlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  appointmentType?: string;
  available: boolean;
}

export interface AppointmentRequestInput {
  patientName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  appointmentType: string;
  note?: string;
}

export interface ContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface APIResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field?: string; message: string }>;
}
