'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { 
  Calendar, 
  Users, 
  Ruler, 
  Weight, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Star,
  MapPin,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { items } from '@/data/mockData';

export default function ItemPage() {
  const params = useParams();
  const id = params.id as string;
  const item = items.find(i => i.id === id);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  if (!item) {
    notFound();
  }

  const nextPhoto = () => {
    setSelectedPhotoIndex((prev) => 
      prev === item.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setSelectedPhotoIndex((prev) => 
      prev === 0 ? item.photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/items" className="text-blue-600 hover:text-blue-800">All Items</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/categories/${item.category.id}`} className="text-blue-600 hover:text-blue-800">
              {item.category.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{item.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Photo Gallery */}
          <div className="space-y-4">
            {/* Main Photo */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {item.photos.length > 0 ? (
                <>
                  <Image
                    src={item.photos[selectedPhotoIndex].url}
                    alt={item.photos[selectedPhotoIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {item.photos.length > 1 && (
                    <>
                      <button
                        onClick={prevPhoto}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-6xl text-gray-400">{item.category.icon}</span>
                </div>
              )}
            </div>

            {/* Photo Thumbnails */}
            {item.photos.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {item.photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedPhotoIndex === index ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary">
                  {item.category.icon} {item.category.name}
                </Badge>
                <Badge variant={item.isAvailable ? 'success' : 'error'}>
                  {item.isAvailable ? 'Available' : 'Unavailable'}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{item.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-bold text-blue-600">€{item.pricePerDay}</span>
                  <span className="text-gray-600 ml-2">per day</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Available Quantity</div>
                  <div className="text-2xl font-semibold text-gray-900">{item.quantity}</div>
                </div>
              </div>
            </div>

            {/* Features */}
            {item.features && item.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {item.specifications && Object.keys(item.specifications).length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <dl className="grid grid-cols-1 gap-3">
                    {Object.entries(item.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-gray-600">{key}:</dt>
                        <dd className="font-medium text-gray-900">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}

            {/* Dimensions */}
            {item.dimensions && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dimensions & Weight</h3>
                <div className="grid grid-cols-2 gap-4">
                  {item.dimensions.length && (
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Length: {item.dimensions.length}m</span>
                    </div>
                  )}
                  {item.dimensions.width && (
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Width: {item.dimensions.width}m</span>
                    </div>
                  )}
                  {item.dimensions.height && (
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Height: {item.dimensions.height}m</span>
                    </div>
                  )}
                  {item.dimensions.weight && (
                    <div className="flex items-center">
                      <Weight className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Weight: {item.dimensions.weight}kg</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4 pt-6 border-t">
              <Link href={`/items/${item.id}/reserve`} className="block">
                <Button 
                  size="lg" 
                  className="w-full"
                  disabled={!item.isAvailable}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Reserve This Item
                </Button>
              </Link>
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="/quote">
                  <Button variant="outline" size="lg" className="w-full">
                    Get Custom Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div className="text-center text-sm text-gray-500">
                Need help? Our experts are here to assist you with your rental needs.
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">Delivery & Setup</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Professional delivery and setup service available. 
              Free delivery within 50km radius.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">Quality Guarantee</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All items are thoroughly cleaned and inspected before delivery. 
              100% satisfaction guaranteed.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our team provides technical support and assistance 
              throughout your rental period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}