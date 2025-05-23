import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../utils/data';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped our clients find their perfect luxury properties and create extraordinary living experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;