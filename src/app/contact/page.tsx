'use client';

import { useState } from 'react';
import { siteData } from '@/data/siteData';
// This is the line that has been fixed:
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowLeft, FiSend, FiCheckCircle, FiMessageSquare } from 'react-icons/fi';

// Define the steps of the form
const steps = [
  { id: 1, name: 'Service' },
  { id: 2, name: 'Details' },
  { id: 3, name: 'Confirmation' },
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    message: '',
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to a serverless function or an API endpoint.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Get Your Free Quote</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-light">
            Let's get started! Our simple 3-step form makes it easy to get a fast, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Multi-Step Contact Form */}
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-2xl border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FiCheckCircle className="text-primary text-6xl mx-auto mb-4" />
                  <h2 className="text-3xl font-bold">Thank You!</h2>
                  <p className="mt-2 text-lg text-text-light">Your quote request has been sent. We'll be in touch shortly!</p>
                  <button onClick={() => { setIsSubmitted(false); setCurrentStep(1); }} className="mt-6 font-semibold text-primary hover:underline">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Type */}
                  {currentStep === 1 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Step 1: What do you need removed?</h2>
                      <p className="text-text-light mb-6">Select the service that best fits your needs.</p>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="serviceType" className="block text-sm font-medium text-text-main">Service Type</label>
                          <select name="serviceType" id="serviceType" required value={formData.serviceType} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary">
                            <option value="">-- Please select a service --</option>
                            <option value="Furniture Removal">Furniture Removal</option>
                            <option value="Appliance Removal">Appliance Removal</option>
                            <option value="Yard Waste">Yard Waste</option>
                            <option value="Construction Debris">Construction Debris</option>
                            <option value="Full Cleanout">Full Property Cleanout</option>
                            <option value="Other">Other (Please describe below)</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-text-main">Description</label>
                          <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Please list the items you need removed (e.g., 1 couch, 1 fridge, 5 bags of yard waste)." className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Details */}
                  {currentStep === 2 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Step 2: How can we reach you?</h2>
                      <p className="text-text-light mb-6">We'll use this to send you your quote.</p>
                       <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-text-main">Full Name</label>
                          <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-text-main">Phone Number</label>
                          <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-text-main">Email Address (Optional)</label>
                          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Confirmation */}
                  {currentStep === 3 && (
                     <div>
                      <h2 className="text-2xl font-bold mb-2">Step 3: Ready to go?</h2>
                      <p className="text-text-light mb-6">Please review your details below and click submit to get your free quote!</p>
                      <div className="p-6 bg-surface rounded-lg border border-border space-y-2">
                          <p><strong className="text-secondary">Service:</strong> {formData.serviceType}</p>
                          <p><strong className="text-secondary">Name:</strong> {formData.name}</p>
                          <p><strong className="text-secondary">Phone:</strong> {formData.phone}</p>
                          <p><strong className="text-secondary">Description:</strong> {formData.message}</p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 pt-5 border-t border-border">
                    <div className="flex justify-between">
                      <button type="button" onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-text-main font-semibold rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <FiArrowLeft />
                        Back
                      </button>
                      {currentStep < steps.length && (
                        <button type="button" onClick={nextStep} className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark">
                          Next Step
                        </button>
                      )}
                      {currentStep === steps.length && (
                        <button type="submit" className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark">
                          Submit Quote Request
                          <FiSend />
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Or, Contact Us Directly</h2>
                <p className="mt-2 text-text-light">We're available 7 days a week to answer your call or text!</p>
              </div>
              <div className="space-y-4">
                <a href={siteData.phoneHref} className="flex items-center text-lg p-4 rounded-lg hover:bg-surface">
                  <FiPhone className="text-primary text-2xl mr-4" />
                  <span>{siteData.phone}</span>
                </a>
                <a href={siteData.smsHref} className="flex items-center text-lg p-4 rounded-lg hover:bg-surface">
                  <FiMessageSquare className="text-primary text-2xl mr-4" />
                  <span>Text Us a Photo</span>
                </a>
                <a href={`mailto:${siteData.email}`} className="flex items-center text-lg p-4 rounded-lg hover:bg-surface">
                  <FiMail className="text-primary text-2xl mr-4" />
                  <span>{siteData.email}</span>
                </a>
                <div className="flex items-center text-lg p-4 rounded-lg">
                  <FiClock className="text-primary text-2xl mr-4" />
                  <span>{siteData.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
