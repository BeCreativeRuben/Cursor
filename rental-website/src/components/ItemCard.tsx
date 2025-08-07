import Link from 'next/link';
import Image from 'next/image';
import { Item } from '@/types';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const primaryPhoto = item.photos.find(photo => photo.isPrimary) || item.photos[0];

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gray-100">
        {primaryPhoto ? (
          <Image
            src={primaryPhoto.url}
            alt={primaryPhoto.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <span className="text-4xl">{item.category.icon}</span>
          </div>
        )}
        
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <Badge variant={item.isAvailable ? 'success' : 'error'}>
            {item.isAvailable ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary">
            {item.category.icon} {item.category.name}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Key features */}
        {item.features && item.features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {item.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {item.features.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{item.features.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Pricing and quantity */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              €{item.pricePerDay}
            </span>
            <span className="text-gray-500 text-sm">/day</span>
          </div>
          <div className="text-sm text-gray-500">
            {item.quantity} available
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link href={`/items/${item.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          <Link href={`/items/${item.id}/reserve`} className="flex-1">
            <Button size="sm" className="w-full">
              Reserve Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}