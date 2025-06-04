import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { supabase } from '../../lib/supabaseClient';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Slide {
  image_url: string;
  title: string;
  subtitle: string;
}

const ImageSlider: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      const { data, error } = await supabase
        .from('homepage_slider')
        .select('image_url, title, subtitle')
        .eq('active', true) // ✅ Only show active slides
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching slides:', error.message);
      } else {
        setSlides(data || []);
      }
      setLoading(false);
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <div className="h-screen flex items-center justify-center text-slate-500">Loading slider...</div>;
  }

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image_url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-charcoal-900/40 flex items-center">
                <div className="container-custom">
                  <div className="max-w-2xl">
                    <h2 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl mb-4 animate-fadeInUp">
                      {slide.title}
                    </h2>
                    <p className="text-white text-lg md:text-xl opacity-90 animate-fadeInUp delay-100">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
