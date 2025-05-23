import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonLink = '/properties',
}) => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Luxury Property"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-charcoal-900/40"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-white font-serif mb-4 animate-fadeInUp">
              {title}
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 opacity-90 animate-fadeInUp delay-100">
              {subtitle}
            </p>
            {buttonText && (
              <div className="animate-fadeInUp delay-200">
                <Link to={buttonLink}>
                  <Button variant="primary" size="lg">
                    {buttonText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;