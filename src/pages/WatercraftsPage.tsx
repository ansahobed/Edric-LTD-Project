import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

const allWatercrafts = [
  {
    type: 'Yachts',
    images: [
      'https://res.cloudinary.com/dpchk1ggu/image/upload/v1749127061/rprqks05lbseskkqyoql.jpg',
      'https://images.pexels.com/photos/287776/pexels-photo-287776.jpeg',
    ],
    description: 'Luxury yachts with premium amenities for a lavish lifestyle.',
  },
  {
    type: 'Boats',
    images: [
      'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg',
      'https://images.pexels.com/photos/236258/pexels-photo-236258.jpeg',
    ],
    description: 'High-end boats for leisure, fishing, and water adventures.',
  },
  {
    type: 'Jet Skis',
    images: [
      'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      'https://images.pexels.com/photos/1633975/pexels-photo-1633975.jpeg',
    ],
    description: 'Fast and thrilling personal watercraft for water sports.',
  },
  {
    type: 'Kayaks',
    images: [
      'https://images.pexels.com/photos/34153/pexels-photo.jpg',
      'https://images.pexels.com/photos/68646/pexels-photo-68646.jpeg',
    ],
    description: 'Adventure and leisure kayaks for rivers, lakes, and coastal exploration.',
  },
];

const WatercraftsPage: React.FC = () => {
  const location = useLocation();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [displayedCrafts, setDisplayedCrafts] = useState(allWatercrafts);

  // If navigated from homepage with a selected watercraft
  useEffect(() => {
    if (location.state && (location.state as any).selected) {
      const type = (location.state as any).selected;
      setSelectedType(type);
      setDisplayedCrafts(allWatercrafts.filter(c => c.type === type));
    }
  }, [location.state]);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    setDisplayedCrafts(allWatercrafts.filter(c => c.type === type));
  };

  return (
    <section className="section-padding bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-charcoal-800 mb-2">Watercrafts Collection</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Select a watercraft type to see all available images and details.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {allWatercrafts.map(c => (
              <Button
                key={c.type}
                variant={selectedType === c.type ? 'primary' : 'outline'}
                onClick={() => handleSelect(c.type)}
              >
                {c.type}
              </Button>
            ))}
            <Button variant="outline" onClick={() => { setSelectedType(null); setDisplayedCrafts(allWatercrafts); }}>
              All
            </Button>
          </div>
        </div>

        {/* Watercraft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCrafts.map((craft, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-serif text-charcoal-800 mb-2">{craft.type}</h2>
                <p className="text-slate-600 mb-4">{craft.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
                {craft.images.map((img, i) => (
                  <img key={i} src={img} alt={`${craft.type} ${i}`} className="w-full h-48 object-cover rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatercraftsPage;
