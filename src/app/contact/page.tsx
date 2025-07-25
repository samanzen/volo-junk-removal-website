'use client';

import { useState } from 'react';
import { siteData } from '@/data/siteData';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to a serverless function or an API endpoint.
    console.log('Form submitted:', formData);
    setStatus('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Get in Touch</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Ready for your free quote? Have a question? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-main">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-main">Phone Number</label>
                  <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-main">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-main">Tell us about your junk</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors shadow-md">
                    Request My Free Quote
                  </button>
                </div>
              </form>
              {status && <p className="mt-6 text-center text-primary font-semibold">{status}</p>}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="mt-2 text-text-light">We're available 7 days a week to answer your call!</p>
              </div>
              <div className="space-y-4">
                <a href={siteData.phoneHref} className="flex items-center text-lg">
                  <FiPhone className="text-primary text-2xl mr-4" />
                  <span>{siteData.phone}</span>
                </a>
                <a href={`mailto:${siteData.email}`} className="flex items-center text-lg">
                  <FiMail className="text-primary text-2xl mr-4" />
                  <span>{siteData.email}</span>
                </a>
                <div className="flex items-center text-lg">
                  <FiClock className="text-primary text-2xl mr-4" />
                  <span>{siteData.hours}</span>
                </div>
                 <div className="flex items-start text-lg">
                  <FiMapPin className="text-primary text-2xl mr-4 mt-1 flex-shrink-0" />
                  <span>Serving Coquitlam & all of Metro Vancouver</span>
                </div>
              </div>
              <div className="h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.623668065586!2d-122.89495062365922!3d49.26389697139199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867816d357039d%3A0x70c5622358f27afb!2sJUNK%20FREE!5e0!3m2!1sen!2sca!4v1721867160914!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
