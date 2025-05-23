import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../../utils/data';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="property-card group">
      <Link to={`/properties/${property.id}`} className="block">
        <div className="relative overflow-hidden h-64">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover image-hover"
          />
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-medium uppercase py-1 px-3 rounded-sm ${
              property.type === 'riverfront' 
                ? 'bg-blue-500 text-white' 
                : 'bg-charcoal-700 text-white'
            }`}>
              {property.type === 'riverfront' ? 'Riverfront' : 'Inland'}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-serif text-xl mb-1">{property.title}</h3>
            <p className="text-white font-medium text-lg">{formatPrice(property.price)}</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-4 text-slate-600">
            <MapPin size={16} className="mr-2" />
            <p className="truncate">{property.address}, {property.city}, {property.state}</p>
          </div>
          
          <div className="flex justify-between text-sm text-charcoal-700 mb-4">
            <div className="flex items-center">
              <Bed size={18} className="mr-1 text-gold-600" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath size={18} className="mr-1 text-gold-600" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Square size={18} className="mr-1 text-gold-600" />
              <span>{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
          </div>
          
          <p className="text-charcoal-700 line-clamp-2">
            {property.description.slice(0, 100)}...
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;