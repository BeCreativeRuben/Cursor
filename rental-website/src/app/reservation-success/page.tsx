import Link from 'next/link';
import { CheckCircle, Calendar, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ReservationSuccessPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Reservation Submitted Successfully!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your reservation. We've received your request and will contact you shortly to confirm the details.
          </p>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">What happens next?</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Confirmation Email</p>
                  <p className="text-blue-700 text-sm">You'll receive an email confirmation within 15 minutes with your reservation details.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Personal Contact</p>
                  <p className="text-blue-700 text-sm">Our team will call you within 24 hours to confirm availability and arrange payment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-blue-800 font-medium">Delivery & Setup</p>
                  <p className="text-blue-700 text-sm">We'll deliver and set up your equipment at the scheduled time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need immediate assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">rentals@example.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                Return to Home
              </Button>
            </Link>
            <Link href="/items">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse More Items
              </Button>
            </Link>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Reference ID: #RES-{Date.now().toString().slice(-6)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Please save this page or take a screenshot for your records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}