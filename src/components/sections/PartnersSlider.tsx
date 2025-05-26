import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { supabase } from '../../lib/supabaseClient'; // ✅ adjust the path as needed
import 'swiper/css';

const PartnersSlider: React.FC = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      const { data, error } = await supabase
        .from('partners') // ✅ ensure this matches your Supabase table
        .select('*')
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
              <div className="flex items-center justify-center p-6 bg-slate-50 rounded-lg h-32 transition-transform hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
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
