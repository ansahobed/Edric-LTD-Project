import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { supabase } from '../../lib/supabaseClient';
import 'swiper/css';

const PartnersSlider: React.FC = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('logo_url, name')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Failed to fetch partners:', error.message);
      } else {
        setPartners(data || []);
      }
      setLoading(false);
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom text-center text-slate-500">Loading partners...</div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional quality and innovation in luxury real estate.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="py-8"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center bg-white border rounded-lg h-32 shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={partner.logo_url}
                  alt={partner.name || 'Partner logo'}
                  className="max-h-28 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSlider;
