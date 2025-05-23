import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import PropertyCard from '../components/ui/PropertyCard';
import { properties, Property } from '../utils/data';

const PropertiesPage: React.FC = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredProperties = properties.filter(property => {
    // Filter by type
    if (filters.type !== 'all' && property.type !== filters.type) {
      return false;
    }
    
    // Filter by price (min)
    if (filters.minPrice && property.price < parseInt(filters.minPrice, 10)) {
      return false;
    }
    
    // Filter by price (max)
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice, 10)) {
      return false;
    }
    
    // Filter by bedrooms
    if (filters.minBedrooms && property.bedrooms < parseInt(filters.minBedrooms, 10)) {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <Hero 
        title="Luxury Property Collection"
        subtitle="Browse our exclusive selection of extraordinary properties designed for discerning individuals."
        imageUrl="https://images.pexels.com/photos/2873064/pexels-photo-2873064.jpeg"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="bg-white p-6 shadow-md mb-12">
            <h3 className="font-serif text-xl mb-4 text-charcoal-800">Find Your Perfect Property</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="type">
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="all">All Properties</option>
                  <option value="riverfront">Riverfront</option>
                  <option value="inland">Inland</option>
                  
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="minPrice">
                  Min Price
                </label>
                <select
                  id="minPrice"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="">Any</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="7000000">$7,000,000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="maxPrice">
                  Max Price
                </label>
                <select
                  id="maxPrice"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="">Any</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="7000000">$7,000,000</option>
                  <option value="10000000">$10,000,000</option>
                  <option value="15000000">$15,000,000</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="minBedrooms">
                  Bedrooms
                </label>
                <select
                  id="minBedrooms"
                  name="minBedrooms"
                  value={filters.minBedrooms}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl text-charcoal-800">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h2>
          </div>
          
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600">No properties match your current filters. Please adjust your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;