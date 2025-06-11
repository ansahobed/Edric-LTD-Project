import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl mb-6">
              EDRIC<span className="text-gold-500">  Limited</span>
            </h3>
            <p className="text-slate-300 mb-6">
              Redefining luxury living with exclusive properties that blend opulence and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-serif text-xl mb-6">Properties</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Riverfront Estates
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Luxury Villas
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Penthouse Suites
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-slate-300 hover:text-gold-500 transition-colors">
                  Eco-Friendly Homes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-slate-300">No. 1 Quail Link Comm. 17, Tema, P.O BOX SK 1653 . Accra-Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="tel:+233303409426" className="text-slate-300 hover:text-gold-500 transition-colors">
                  (233)-30-340-9426 
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="tel:+233244158119" className="text-slate-300 hover:text-gold-500 transition-colors">
                  (233)-24-415-8119
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@edric.group" className="text-slate-300 hover:text-gold-500 transition-colors">
                  info@edric.group
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="mailto:ceo@edric.group" className="text-slate-300 hover:text-gold-500 transition-colors">
                  ceo@edric.group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EDRIC Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;