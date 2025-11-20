import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Watercrafts: React.FC = () => {
  const watercrafts = [
    {
      title: 'Yachts',
      description: 'Luxury yachts with premium amenities for a lavish lifestyle on the water.',
      image: 'https://res.cloudinary.com/dpchk1ggu/image/upload/v1749127061/rprqks05lbseskkqyoql.jpg',
      link: '/watercrafts/yachts',
    },
    {
      title: 'Boats',
      description: 'High-end boats for leisure, fishing, or water adventures with style and comfort.',
      image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg',
      link: '/watercrafts/boats',
    },
    {
      title: 'Jet Skis',
      description: 'Fast and thrilling personal watercraft for water sports and fun rides.',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      link: '/watercrafts/jetskis',
    },
    {
      title: 'Kayaks',
      description: 'Adventure and leisure kayaks for rivers, lakes, or coastal exploration.',
      image: 'https://images.pexels.com/photos/34153/pexels-photo.jpg',
      link: '/watercrafts/kayaks',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">
            Premium Watercraft Solutions
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Discover our curated selection of watercrafts designed for performance, luxury, and recreation. 
            From yachts to jet skis, boats, and kayaks, we provide solutions to elevate your water lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {watercrafts.map((craft, index) => (
            <div key={index} className="relative group overflow-hidden rounded shadow-lg">
              <img
                src={craft.image}
                alt={craft.title}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-serif text-2xl mb-2">{craft.title}</h3>
                <p className="text-white text-sm mb-4">{craft.description}</p>
                <Link to={craft.link}>
                  <Button variant="primary">View {craft.title}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Watercrafts;