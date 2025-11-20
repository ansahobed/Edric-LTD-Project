import React from 'react';
import ImageSlider from '../components/sections/ImageSlider';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import PropertyTypes from '../components/sections/PropertyTypes';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PartnersSlider from '../components/sections/PartnersSlider';
import ContactSection from '../components/sections/ContactSection';
import Watercrafts from '../components/sections/Watercrafts'; // ✅ Correct import

const HomePage: React.FC = () => {
  return (
    <>
      <ImageSlider />
      <FeaturedProperties />
      <PropertyTypes />
      <Watercrafts /> {/* ✅ Correct component usage */}
      <AboutSection />
      <TestimonialsSection />
      <PartnersSlider />
      <ContactSection />
    </>
  );
};

export default HomePage;
