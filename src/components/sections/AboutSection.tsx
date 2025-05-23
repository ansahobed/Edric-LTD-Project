import React from 'react';
import { Award, Leaf, Check, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-charcoal-800 mb-6">
              Redefining Luxury Real Estate Since 2008
            </h2>
            <p className="text-slate-600 mb-6">
              At EliteEstates, we specialize in exceptional properties that represent the pinnacle of luxury living. 
              Our curated portfolio includes magnificent riverfront estates with private docks and boating amenities, 
              as well as prestigious inland properties featuring unparalleled privacy and architectural excellence.
            </p>
            <p className="text-slate-600 mb-8">
              What sets us apart is our unwavering commitment to quality, sustainability, and personalized service. 
              Our team of luxury real estate experts has deep market knowledge and exclusive access to off-market 
              properties, ensuring our clients find their perfect sanctuary.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Award className="text-gold-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-charcoal-800 mb-1">Exceptional Properties</h4>
                  <p className="text-sm text-slate-600">Only the finest properties that meet our exacting standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="text-gold-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-charcoal-800 mb-1">Exclusive Service</h4>
                  <p className="text-sm text-slate-600">Discreet, personalized attention for discerning clients</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Leaf className="text-gold-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-charcoal-800 mb-1">Eco-Conscious</h4>
                  <p className="text-sm text-slate-600">Committed to sustainable luxury in all our offerings</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="text-gold-500 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-serif text-lg text-charcoal-800 mb-1">Smart Technology</h4>
                  <p className="text-sm text-slate-600">Modern homes equipped with cutting-edge automation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
                alt="Luxury Estate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 -right-6 w-2/3 h-2/3 bg-gold-500/10 -z-10 rounded"></div>
            <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-blue-500/10 -z-10 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;