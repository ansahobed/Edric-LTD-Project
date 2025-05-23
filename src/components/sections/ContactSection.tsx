import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-serif text-charcoal-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Connect with our team of luxury property experts to discuss your specific requirements 
            and begin your journey to finding the perfect estate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-charcoal-800 text-white p-8 h-full">
              <h3 className="font-serif text-2xl mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 text-gold-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Our Office</h4>
                    <p className="text-slate-300">No. 1 Quail Link Comm. 17, Tema, P.O BOX SK 1653 . Accra-Ghana</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-4 text-gold-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-slate-300">
                      <a href="tel:+233303409426 / +233244158119" className="hover:text-gold-500 transition-colors">
                        (233)-30-340-9426 /(233)-24-415-8119 
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-4 text-gold-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-slate-300">
                      <a href="mailto:info@edric.group  / ceo@edric.group" className="hover:text-gold-500 transition-colors">
                        info@edric.group / ceo@edric.group
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="mr-4 text-gold-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-slate-300">Monday - Friday: 8AM - 5PM</p>
                    <p className="text-slate-300">Saturday: 10AM - 2PM</p>
                    <p className="text-slate-300">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Private Showings</h4>
                <p className="text-slate-300">
                  For discreet, private viewings of our exclusive properties, please contact our 
                  VIP client services team to arrange an appointment.
                </p>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;