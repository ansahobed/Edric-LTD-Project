// ✅ Public Properties Page (Supabase-powered)

// File: src/pages/PropertiesPage.tsx
import React, { useState, useEffect } from 'react';
import Hero from '../components/sections/Hero';
import PropertyCard from '../components/ui/PropertyCard';
import { supabase } from '../lib/supabaseClient';

const PropertiesPage: React.FC = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    minPrice: '',
    maxPrice: '',
    minBedrooms: ''
  });

  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from('properties').select('*');
      if (!error) setProperties(data);
      setLoading(false);
    };

    fetchProperties();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredProperties = properties.filter(property => {
    if (filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < parseInt(filters.minPrice, 10)) return false;
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice, 10)) return false;
    if (filters.minBedrooms && property.bedrooms < parseInt(filters.minBedrooms, 10)) return false;
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
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Property Type</label>
                <select name="type" value={filters.type} onChange={handleFilterChange} className="w-full px-3 py-2 border border-slate-300 rounded-sm">
                  <option value="all">All Properties</option>
                  <option value="riverfront">Riverfront</option>
                  <option value="inland">Inland</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Min Price</label>
                <select name="minPrice" value={filters.minPrice} onChange={handleFilterChange} className="w-full px-3 py-2 border border-slate-300 rounded-sm">
                  <option value="">Any</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="3000000">$3,000,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Max Price</label>
                <select name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} className="w-full px-3 py-2 border border-slate-300 rounded-sm">
                  <option value="">Any</option>
                  <option value="3000000">$3,000,000</option>
                  <option value="5000000">$5,000,000</option>
                  <option value="10000000">$10,000,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-1">Bedrooms</label>
                <select name="minBedrooms" value={filters.minBedrooms} onChange={handleFilterChange} className="w-full px-3 py-2 border border-slate-300 rounded-sm">
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl text-charcoal-800">
              {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && !loading && (
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