import React from 'react';
import { Testimonial } from '../../utils/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mb-4">
          <h4 className="font-serif text-xl text-charcoal-800">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">{testimonial.title}</p>
        </div>
        
        <blockquote className="relative">
          <span className="text-gold-500 text-4xl absolute -top-4 -left-2">"</span>
          <p className="text-charcoal-700 z-10 relative pl-2">{testimonial.quote}</p>
          <span className="text-gold-500 text-4xl absolute -bottom-6 -right-2">"</span>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;