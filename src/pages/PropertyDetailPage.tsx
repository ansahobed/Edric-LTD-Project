import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Square, Heart, MapPin, ShieldCheck, Award, Leaf } from 'lucide-react';
import Button from '../components/ui/Button';
import ContactForm from '../components/ui/ContactForm';
import { properties, Property } from '../utils/data';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [isWishlist, setIsWishlist] = useState(false);
  
  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id) || null;
    setProperty(foundProperty);
    
    if (foundProperty) {
      setMainImage(foundProperty.images[0]);
    }
  }, [id]);
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Property Not Found</h2>
          <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button variant="primary">View All Properties</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  return (
    <>
      {/* Property Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40 pt-20">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/properties" className="flex items-center text-charcoal-700 hover:text-gold-600 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              <span>Back to Properties</span>
            </Link>
            
            <button 
              onClick={() => setIsWishlist(!isWishlist)}
              className="flex items-center text-charcoal-700 hover:text-gold-600 transition-colors"
            >
              <Heart 
                size={18} 
                className={`mr-2 ${isWishlist ? 'fill-gold-600 text-gold-600' : ''}`} 
              />
              <span>{isWishlist ? 'Saved to Wishlist' : 'Save to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>
      
      <main className="section-padding pt-8">
        <div className="container-custom">
          {/* Property Header */}
          <div className="mb-8">
            <span className={`inline-block text-xs font-medium uppercase py-1 px-3 rounded-sm mb-2 ${
              property.type === 'riverfront' 
                ? 'bg-blue-500 text-white' 
                : 'bg-charcoal-700 text-white'
            }`}>
              {property.type === 'riverfront' ? 'Riverfront' : 'Inland'}
            </span>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800 mb-4">
              {property.title}
            </h1>
            
            <div className="flex items-center text-slate-600 mb-4">
              <MapPin size={18} className="mr-2" />
              <p>{property.address}, {property.city}, {property.state} {property.zipCode}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center">
                <Bed size={20} className="mr-2 text-gold-600" />
                <span className="text-charcoal-700">{property.bedrooms} Bedrooms</span>
              </div>
              
              <div className="flex items-center">
                <Bath size={20} className="mr-2 text-gold-600" />
                <span className="text-charcoal-700">{property.bathrooms} Bathrooms</span>
              </div>
              
              <div className="flex items-center">
                <Square size={20} className="mr-2 text-gold-600" />
                <span className="text-charcoal-700">{property.sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <h2 className="text-2xl md:text-3xl font-serif text-gold-600">
                {formatPrice(property.price)}
              </h2>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
            <div className="col-span-2 overflow-hidden rounded">
              <img 
                src={mainImage} 
                alt={property.title} 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded cursor-pointer"
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - View ${index + 2}`} 
                    className="w-full h-[calc(500px/2-8px)] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h3 className="font-serif text-2xl text-charcoal-800 mb-4">About This Property</h3>
                <div className="text-slate-700 space-y-4">
                  {property.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="font-serif text-2xl text-charcoal-800 mb-4">Property Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Award size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">Eco-Friendly Features</h3>
                  <ul className="space-y-3">
                    {property.ecoFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Leaf size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">Smart Home Features</h3>
                  <ul className="space-y-3">
                    {property.smartFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ShieldCheck size={18} className="text-gold-500 mr-3 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {property.virtualTour && (
                <div className="mb-12">
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">Virtual Tour</h3>
                  <div className="bg-slate-100 p-12 text-center rounded">
                    <p className="mb-4">Experience this property through our immersive virtual tour.</p>
                    <a 
                      href={property.virtualTour} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary">
                        Start Virtual Tour
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-1">
              <ContactForm propertyId={property.id} className="sticky top-32" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetailPage;