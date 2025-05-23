import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../ui/PropertyCard';
import Button from '../ui/Button';
import { properties } from '../../utils/data';

const FeaturedProperties: React.FC = () => {
  // Filter for featured properties or just take the first 3
  const featuredProperties = properties
    .filter(property => property.featured)
    .slice(0, 3);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Discover our handpicked selection of the most exclusive properties, combining luxury, 
            location, and exceptional amenities to create unparalleled living experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/properties">
            <Button variant="outline">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;