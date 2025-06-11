import React from 'react';
import Hero from '../components/sections/Hero';
import { Award, Users, Lightbulb, Wind, Clock, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="About EDRIC Limited"
        subtitle="We specialize in exceptional properties that represent the pinnacle of luxury living."
        imageUrl="https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Founded in 2025, EDRIC Limited was born from a vision to create a real estate 
                  experience as exceptional as the properties we represent. Our founders recognized 
                  a gap in the market for a truly bespoke service catering to discerning clients 
                  seeking extraordinary homes.
                </p>
                <p>
                  What began as a boutique agency specializing in waterfront properties has evolved 
                  into the premier luxury real estate firm, known for our curated portfolio of the 
                  most exclusive riverfront and inland estates. Our growth has been guided by an 
                  unwavering commitment to quality, integrity, and personalized service.
                </p>
                <p>
                  Today, We leads the luxury market not only in matching exceptional 
                  clients with extraordinary properties but also in pioneering the integration of 
                  sustainability and smart technology into the luxury real estate experience.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dpchk1ggu/image/upload/v1749121785/ij8or7cvlab9r7akyths.png" 
                  alt="Luxury Estate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 -left-6 w-2/3 h-2/3 bg-gold-500/10 -z-10 rounded"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-blue-500/10 -z-10 rounded"></div>
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
                Our Values
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                These core principles guide everything we do, from client interactions to property curation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-md rounded">
                <Award className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Excellence</h3>
                <p className="text-slate-600">
                  We hold ourselves to the highest standards in every aspect of our service, 
                  reflecting the exceptional quality of the properties we represent.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-md rounded">
                <Heart className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Integrity</h3>
                <p className="text-slate-600">
                  Our business is built on trust, transparency, and ethical practices 
                  that prioritize our clients' best interests above all else.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-md rounded">
                <Lightbulb className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Innovation</h3>
                <p className="text-slate-600">
                  We continuously seek new ways to enhance the real estate experience through 
                  technology, sustainability, and creative solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-md rounded">
                <Users className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Relationships</h3>
                <p className="text-slate-600">
                  We build lasting connections with our clients based on understanding their 
                  unique needs and exceeding their expectations.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-md rounded">
                <Wind className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Sustainability</h3>
                <p className="text-slate-600">
                  We are committed to promoting eco-friendly features and sustainable 
                  practices in luxury real estate.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-md rounded">
                <Clock className="text-gold-500 mb-4" size={36} />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">Discretion</h3>
                <p className="text-slate-600">
                  We respect our clients' privacy and handle all transactions with the 
                  utmost confidentiality and professionalism.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-800 mb-4">
                Our Team
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Meet the exceptional professionals who make EDRIC Limited the leader in luxury real estate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded overflow-hidden shadow-md group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Courage Dogbegah" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-1">Courage Dogbegah</h3>
                  <p className="text-gold-600 mb-3">Founder & CEO</p>
                  <p className="text-slate-600">
                    With over 20 years of experience in luxury real estate, Courage's vision and leadership 
                    have established EDRIC Limited as the premier destination for extraordinary properties.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded overflow-hidden shadow-md group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                    alt="Kwame Osei" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-1">Kwame Osei</h3>
                  <p className="text-gold-600 mb-3">Director of Riverfront Properties</p>
                  <p className="text-slate-600">
                    Jonathan's deep knowledge of waterfront real estate and boating amenities makes him 
                    the go-to expert for clients seeking the perfect riverfront lifestyle.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded overflow-hidden shadow-md group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                    alt="Kojo Mensah" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-1">Kojo Mensah</h3>
                  <p className="text-gold-600 mb-3">Director of Inland Estates</p>
                  <p className="text-slate-600">
                    Kojo specializes in exclusive inland properties, with particular expertise in 
                    eco-friendly luxury homes and sustainable design innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;