import React, { useState } from 'react';
import Button from './Button';

interface ContactFormProps {
  className?: string;
  propertyId?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '', propertyId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyId 
      ? 'I am interested in learning more about this property.' 
      : '',
    propertyInterest: propertyId ? 'specific' : 'general',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. Our team will contact you shortly.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: propertyId 
        ? 'I am interested in learning more about this property.' 
        : '',
      propertyInterest: propertyId ? 'specific' : 'general',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-8 shadow-md ${className}`}>
      <h3 className="font-serif text-2xl mb-6 text-charcoal-800">Contact Us</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
        
        {!propertyId && (
          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="propertyInterest">
              Property Interest
            </label>
            <select
              id="propertyInterest"
              name="propertyInterest"
              value={formData.propertyInterest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
            >
              <option value="general">General Inquiry</option>
              <option value="riverfront">Riverfront Properties</option>
              <option value="inland">Inland Properties</option>
              <option value="both">Both Property Types</option>
            </select>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-1" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-500"
          />
        </div>
        
        <Button type="submit" variant="primary" fullWidth>
          Send Message
        </Button>
        
        <p className="text-xs text-slate-500 mt-4">
          By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;