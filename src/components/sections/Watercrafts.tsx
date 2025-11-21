// src/components/Watercrafts.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Watercrafts: React.FC = () => {
  const navigate = useNavigate();

  const watercraftTypes = [
    { title: 'Yachts', image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1763735186/ruti0retvozc9nctdyrt.png' },
    { title: 'Boats', image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1763727604/vx1exg5swosfakrnudfo.jpg' },
    { title: 'Jet Skis', image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1763635480/edric-limited-assets/dtpdgteypelplaact8zs.png' },
    { title: 'Kayaks', image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1763727002/mxgunsvhcaynu1ynijhf.png' },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">Premium Watercraft Solutions</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Click any watercraft to explore all available types and images.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {watercraftTypes.map((craft, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded shadow-lg"
              onClick={() => navigate('/watercrafts', { state: { selectedType: craft.title } })}
            >
              <img
                src={craft.image}
                alt={craft.title}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-2">{craft.title}</h3>
                <Button variant="primary">Explore {craft.title}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Watercrafts;
