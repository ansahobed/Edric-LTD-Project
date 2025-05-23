import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    title: "Luxury Waterfront Living",
    subtitle: "Experience unparalleled riverside elegance"
  },
  {
    image: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
    title: "Exclusive Inland Estates",
    subtitle: "Where luxury meets sophisticated design"
  },
  {
    image: "https://images.pexels.com/photos/2873064/pexels-photo-2873064.jpeg",
    title: "Smart Home Innovation",
    subtitle: "The future of sustainable luxury living"
  }
];

const ImageSlider: React.FC = () => {
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
                src={slide.image}
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