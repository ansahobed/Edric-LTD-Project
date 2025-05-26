import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Hero from '../components/sections/Hero';
import ContactSection from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 5.64562, // EDRIC Group location
    lng: -0.06762
  };

  const mapOptions = {
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#242f3e" }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#242f3e" }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
      }
    ]
  };

  return (
    <>
      <Hero 
        title="Contact Edric Group"
        subtitle="Connect with our team of luxury property experts to begin your journey to finding the perfect estate."
        imageUrl="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg"
      />
      
      <ContactSection />
      
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our elegant office space is designed to provide a comfortable environment for discussing your luxury property needs.
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-lg rounded overflow-hidden">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
                options={mapOptions}
              >
                <Marker 
                  position={defaultCenter}
                  title="Edric Limited"
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;