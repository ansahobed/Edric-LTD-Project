import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../ui/PropertyCard';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabaseClient';

const FeaturedProperties: React.FC = () => {
  const [featuredProperties, setFeaturedProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(3);

      if (!error) setFeaturedProperties(data || []);
      else console.error('Error fetching featured properties:', error);
      setLoading(false);
    };

    fetchFeatured();
  }, []);

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

        {loading ? (
          <p className="text-center text-slate-500">Loading featured properties...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
        
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
