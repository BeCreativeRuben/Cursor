# 🏢 RentEase - Premium Event Rentals Website

A comprehensive rental website built with Next.js 15, TypeScript, and Tailwind CSS for renting event equipment like WC-trailers, refrigerators, tents, furniture, and catering equipment.

## ✨ Features

### 🏠 Homepage
- Hero section with search functionality
- Category-based browsing with visual icons
- Featured items showcase
- Service highlights and trust indicators

### 📦 Item Management
- Detailed item pages with interactive photo galleries
- Comprehensive specifications and features
- Real-time pricing and availability information
- Responsive design for all devices

### 🛒 Reservation System
- Complete booking form with date selection
- Quantity management with availability checking
- Customer information collection
- Real-time price calculation
- Professional confirmation flow

### 🔍 Advanced Search & Filtering
- Full-text search functionality
- Category-based filtering
- Price sorting options
- Clean results display with active filter indicators

## 🎯 Rental Categories

- **🚿 Sanitation**: Luxury WC Trailers with full amenities
- **❄️ Cooling**: Industrial refrigerators and cooling elements  
- **⛺ Tents**: Large party tents for events
- **🪑 Furniture**: Tables, elegant Chiavari chairs
- **🍽️ Catering**: Professional dinnerware and equipment
- **💡 Lighting**: Event lighting and power solutions

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Build Tool**: Next.js built-in bundler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Key Pages

- `/` - Homepage with search and featured items
- `/items` - All items with advanced filtering
- `/items/[id]` - Detailed item pages with photo gallery
- `/items/[id]/reserve` - Reservation system
- `/reservation-success` - Confirmation page

## 🎨 Design Features

- **Clean Layout**: Professional, uncluttered design
- **Visual Categories**: Easy-to-understand icons and organization
- **Photo Galleries**: Support for multiple detailed photos per item
- **Modern Forms**: Intuitive reservation and contact forms
- **Trust Elements**: Professional features, guarantees, and contact info
- **Mobile-First**: Responsive design that works perfectly on all devices

## 📦 Sample Items Included

The website comes with sample rental items including:

- Luxury WC Trailer with climate control
- Industrial 600L Refrigerator
- 6x12m Party Tent
- Round tables and Chiavari chairs
- Porcelain dinnerware sets
- And more...

## 🔧 Customization

### Adding New Items
Update the `src/data/mockData.ts` file to add new rental items with:
- Item details and pricing
- Category assignment
- Photo URLs
- Specifications and features
- Availability status

### Styling
The project uses Tailwind CSS. Customize colors, fonts, and spacing in:
- `tailwind.config.js` - Theme configuration
- `src/app/globals.css` - Global styles
- Individual components - Component-specific styles

### Business Information
Update contact information and business details in:
- `src/components/Header.tsx` - Header contact info
- `src/components/Footer.tsx` - Footer details
- `src/data/mockData.ts` - Business-specific content

## 🚀 Production Ready

This website is production-ready and includes:
- ✅ SEO-optimized structure
- ✅ Performance optimizations
- ✅ Mobile responsiveness
- ✅ Type safety with TypeScript
- ✅ Professional UI/UX
- ✅ Form validation
- ✅ Error handling

## 📄 License

This project is available for commercial use. Perfect for rental businesses looking for a professional online presence.

---

Built with ❤️ for premium event rental businesses.
