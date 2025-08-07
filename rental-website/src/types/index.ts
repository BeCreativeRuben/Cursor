export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  category: Category;
  pricePerDay: number;
  quantity: number;
  photos: Photo[];
  specifications?: Record<string, string>;
  features?: string[];
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
  };
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Reservation {
  id: string;
  itemId: string;
  item?: Item;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  startDate: Date;
  endDate: Date;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  reservations?: Reservation[];
}

export interface AvailabilityCheck {
  itemId: string;
  startDate: Date;
  endDate: Date;
  requestedQuantity: number;
  availableQuantity: number;
  isAvailable: boolean;
  conflicts?: Reservation[];
}