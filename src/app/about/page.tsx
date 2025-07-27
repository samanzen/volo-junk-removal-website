import type { Metadata } from 'next';
import { FiSmile, FiShield, FiGlobe } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About VOLO JUNK REMOVAL',
  description: 'Learn about our mission to provide friendly, reliable, and eco-conscious junk removal services to our neighbours across Metro Vancouver.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <FiSmile />,
      title: 'Customer-First Approach',
      description: "You're our neighbour, and we treat you like one. From your first call to the final sweep-up, we guarantee a friendly, respectful, and hassle-free experience."
    },
    {
      icon: <FiShield />,
      title: 'Professional & Insured',
      description: "We are a professional, licensed, and fully insured company, giving you complete peace of mind every step of the way."
    },
    {
      icon: <FiGlobe />,
      title: 'Eco-Friendly Promise',
      description: "We're committed to protecting our beautiful British Columbia. We donate what we can and recycle everything possible to minimize our landfill footprint."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Your Friendly Neighbourhood Junk Haulers</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-light">
            We're not just a junk removal company. We're a local, family-run team dedicated to making your life easier with a service you can trust.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                VOLO JUNK REMOVAL was founded on a simple idea: junk removal shouldn't be a chore for you. After seeing friends and family struggle with hauling their own junk, we knew there had to be a better, friendlier way.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                We started with one truck and a commitment to providing the best customer service in the industry. Today, we're proud to serve communities all across Metro Vancouver, but our core mission remains the same: to provide a fast, simple, and reliable service that our customers can count on.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800" 
                alt="Owner of VOLO JUNK REMOVAL" 
                width={800}
                height={800}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">What We Stand For</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-white rounded-xl shadow-lg border border-border">
                <div className="flex justify-center items-center h-16 w-16 bg-primary/10 text-primary text-3xl rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="mt-2 text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
             <div>
              <Image 
                src="https://images.unsplash.com/photo-1605152276397-91a57ed93524?q=80&w=800" 
                alt="The VOLO JUNK REMOVAL team" 
                width={800}
                height={800}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Proudly Serving Our Community</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                As a local Metro Vancouver business, we believe in giving back. We partner with local charities and donation centers in Coquitlam, Surrey, and across the Lower Mainland to ensure usable items find a new home.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                By choosing VOLO, you're not just clearing out your space—you're supporting a local business that cares about our community and our environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Experience the VOLO Difference</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">Ready for a clutter-free space? Let our friendly team help.</p>
            <div className="mt-10">
               <Button href="/contact" variant="accent" className="text-xl !px-10 !py-4">
                Get Your Free Quote
               </Button>
            </div>
        </div>
      </section>
    </>
  );
}
