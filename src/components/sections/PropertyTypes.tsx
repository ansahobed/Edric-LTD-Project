import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PropertyTypes: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">
            Exclusive Property Collections
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            EliteEstates specializes in two distinct luxury property categories, each offering 
            unique lifestyle advantages for our discerning clientele.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Riverfront Properties */}
          <div className="relative group overflow-hidden rounded shadow-lg">
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
              alt="Luxury Riverfront Property"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white font-serif text-3xl mb-3">Riverfront Estates</h3>
              <p className="text-white mb-6 max-w-md">
                Exceptional waterfront properties featuring private docks, boat lifts, and panoramic water views.
                Perfect for those seeking a lifestyle connected to the water, with yacht and water recreation amenities.
              </p>
              <Link to="/properties">
                <Button variant="primary">
                  View Riverfront Properties
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Inland Properties */}
          <div className="relative group overflow-hidden rounded shadow-lg">
            <img
              src="https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg"
              alt="Luxury Inland Property"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white font-serif text-3xl mb-3">Exclusive Inland Retreats</h3>
              <p className="text-white mb-6 max-w-md">
                Prestigious inland properties offering privacy, expansive grounds, and architectural excellence.
                Featuring mountain views, thoughtful landscaping, and cutting-edge smart home technology.
              </p>
              <Link to="/properties">
                <Button variant="primary">
                  View Inland Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;