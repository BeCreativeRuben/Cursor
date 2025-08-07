import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400">🏢 RentEase</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your premier partner for event rentals. From intimate gatherings to large-scale events, 
              we provide quality equipment and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/items" className="text-gray-300 hover:text-white transition-colors">All Items</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/quote" className="text-gray-300 hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/sanitation" className="text-gray-300 hover:text-white transition-colors">Sanitation</Link></li>
              <li><Link href="/categories/cooling" className="text-gray-300 hover:text-white transition-colors">Cooling & Refrigeration</Link></li>
              <li><Link href="/categories/tents" className="text-gray-300 hover:text-white transition-colors">Tents & Shelters</Link></li>
              <li><Link href="/categories/furniture" className="text-gray-300 hover:text-white transition-colors">Furniture</Link></li>
              <li><Link href="/categories/catering" className="text-gray-300 hover:text-white transition-colors">Catering Equipment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">rentals@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">123 Business St, City, State 12345</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">Mon-Fri 8AM-6PM, Sat 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 RentEase. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}