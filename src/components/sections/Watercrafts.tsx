import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Watercrafts: React.FC = () => {
  const navigate = useNavigate();

  const watercrafts = [
    { title: 'Yachts', image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1749127061/rprqks05lbseskkqyoql.jpg' },
    { title: 'Boats', image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg' },
    { title: 'Jet Skis', image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg' },
    { title: 'Kayaks', image: 'https://images.pexels.com/photos/34153/pexels-photo.jpg' },
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
          {watercrafts.map((craft, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded shadow-lg"
              onClick={() => navigate('/watercrafts', { state: { selected: craft.title } })}
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
