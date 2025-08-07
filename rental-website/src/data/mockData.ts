import { Category, Item, Reservation } from '@/types';

export const categories: Category[] = [
  {
    id: 'sanitation',
    name: 'Sanitation',
    description: 'WC-trailers and sanitation equipment',
    icon: '🚿'
  },
  {
    id: 'cooling',
    name: 'Cooling & Refrigeration',
    description: 'Fridges, freezers, and cooling elements',
    icon: '❄️'
  },
  {
    id: 'tents',
    name: 'Tents & Shelters',
    description: 'Party tents, pavilions, and shelters',
    icon: '⛺'
  },
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Tables, chairs, and seating solutions',
    icon: '🪑'
  },
  {
    id: 'catering',
    name: 'Catering Equipment',
    description: 'Plates, cutlery, and serving equipment',
    icon: '🍽️'
  },
  {
    id: 'lighting',
    name: 'Lighting & Power',
    description: 'Event lighting and power solutions',
    icon: '💡'
  }
];

export const items: Item[] = [
  {
    id: 'wc-trailer-luxury',
    name: 'Luxury WC Trailer',
    description: 'High-end mobile toilet facility with running water, mirrors, and climate control. Perfect for upscale events.',
    category: categories[0],
    pricePerDay: 150,
    quantity: 3,
    photos: [
      {
        id: 'wc1',
        url: '/images/wc-trailer-luxury-1.jpg',
        alt: 'Luxury WC Trailer exterior',
        isPrimary: true
      },
      {
        id: 'wc2',
        url: '/images/wc-trailer-luxury-2.jpg',
        alt: 'Luxury WC Trailer interior',
        isPrimary: false
      }
    ],
    specifications: {
      'Capacity': '2 toilets',
      'Water Tank': '400L fresh water',
      'Waste Tank': '600L',
      'Power': '230V connection required'
    },
    features: ['Running water', 'Mirrors', 'Climate control', 'LED lighting', 'Non-slip flooring'],
    dimensions: {
      length: 4.5,
      width: 2.2,
      height: 2.6,
      weight: 2500
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'industrial-fridge',
    name: 'Industrial Refrigerator 600L',
    description: 'Large capacity commercial refrigerator ideal for catering and events. Maintains consistent temperature.',
    category: categories[1],
    pricePerDay: 45,
    quantity: 8,
    photos: [
      {
        id: 'fridge1',
        url: '/images/industrial-fridge-1.jpg',
        alt: 'Industrial refrigerator exterior',
        isPrimary: true
      }
    ],
    specifications: {
      'Capacity': '600 Liters',
      'Temperature Range': '0°C to +8°C',
      'Power Consumption': '1.2 kW',
      'Voltage': '230V'
    },
    features: ['Digital temperature control', 'Adjustable shelves', 'Energy efficient', 'Lockable'],
    dimensions: {
      length: 0.7,
      width: 0.8,
      height: 2.0,
      weight: 85
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'party-tent-6x12',
    name: 'Party Tent 6x12m',
    description: 'Large white party tent suitable for weddings, corporate events, and celebrations. Waterproof and wind-resistant.',
    category: categories[2],
    pricePerDay: 220,
    quantity: 5,
    photos: [
      {
        id: 'tent1',
        url: '/images/party-tent-1.jpg',
        alt: 'Party tent setup for wedding',
        isPrimary: true
      },
      {
        id: 'tent2',
        url: '/images/party-tent-2.jpg',
        alt: 'Party tent interior view',
        isPrimary: false
      }
    ],
    specifications: {
      'Size': '6m x 12m',
      'Height': '3.2m at peak',
      'Material': 'PVC waterproof fabric',
      'Setup Time': '2-3 hours'
    },
    features: ['Waterproof', 'Wind resistant', 'White fabric', 'Ground anchoring system'],
    dimensions: {
      length: 12,
      width: 6,
      height: 3.2
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'round-table-150cm',
    name: 'Round Table 150cm',
    description: 'Elegant round table seating up to 8 people. Perfect for formal dining and events.',
    category: categories[3],
    pricePerDay: 12,
    quantity: 25,
    photos: [
      {
        id: 'table1',
        url: '/images/round-table-1.jpg',
        alt: 'Round table with white tablecloth',
        isPrimary: true
      }
    ],
    specifications: {
      'Diameter': '150cm',
      'Height': '76cm',
      'Material': 'Wood surface, metal legs',
      'Capacity': '8 people'
    },
    features: ['Folding legs', 'Scratch resistant', 'Easy to clean'],
    dimensions: {
      length: 1.5,
      width: 1.5,
      height: 0.76,
      weight: 25
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'chiavari-chair-gold',
    name: 'Chiavari Chair (Gold)',
    description: 'Elegant gold Chiavari chair, perfect for weddings and formal events. Includes seat cushion.',
    category: categories[3],
    pricePerDay: 3.5,
    quantity: 100,
    photos: [
      {
        id: 'chair1',
        url: '/images/chiavari-chair-gold-1.jpg',
        alt: 'Gold Chiavari chair',
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'Resin with metallic finish',
      'Weight Capacity': '120kg',
      'Seat Height': '46cm',
      'Cushion': 'Included (ivory)'
    },
    features: ['Stackable', 'Lightweight', 'Elegant design', 'Comfortable cushion'],
    dimensions: {
      length: 0.4,
      width: 0.4,
      height: 0.9,
      weight: 2.8
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'dinner-plate-set',
    name: 'Porcelain Dinner Plate Set',
    description: 'High-quality white porcelain dinner plates. Elegant and durable for any event.',
    category: categories[4],
    pricePerDay: 0.8,
    quantity: 500,
    photos: [
      {
        id: 'plate1',
        url: '/images/dinner-plates-1.jpg',
        alt: 'Stack of white porcelain plates',
        isPrimary: true
      }
    ],
    specifications: {
      'Material': 'High-grade porcelain',
      'Diameter': '27cm',
      'Color': 'Pure white',
      'Dishwasher Safe': 'Yes'
    },
    features: ['Chip resistant', 'Elegant design', 'Easy to clean', 'Stackable'],
    dimensions: {
      length: 0.27,
      width: 0.27,
      height: 0.025,
      weight: 0.5
    },
    isAvailable: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

export const mockReservations: Reservation[] = [
  {
    id: 'res-1',
    itemId: 'party-tent-6x12',
    customerName: 'John Smith',
    customerEmail: 'john@example.com',
    customerPhone: '+1234567890',
    startDate: new Date('2024-02-15'),
    endDate: new Date('2024-02-17'),
    quantity: 1,
    totalPrice: 660,
    status: 'confirmed',
    notes: 'Wedding reception setup',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  }
];