import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  {
    name: "Luxury Homes International",
    logo: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  },
  {
    name: "Elite Architecture",
    logo: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg",
  },
  {
    name: "Smart Living Solutions",
    logo: "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg",
  },
  {
    name: "Eco Build Masters",
    logo: "https://images.pexels.com/photos/1643386/pexels-photo-1643386.jpeg",
  },
  {
    name: "Premium Interiors",
    logo: "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg",
  }
];

const PartnersSlider: React.FC = () => {
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
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
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