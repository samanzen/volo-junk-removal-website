import type { Metadata } from 'next';
import { FiUsers, FiHeart, FiGlobe } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About VOLO JUNK REMOVAL',
  description: 'Learn about our mission to provide friendly, reliable, and eco-conscious junk removal services to our neighbours across Metro Vancouver.',
};

export default function AboutPage() {
  const values = [
    {
      icon: <FiUsers className="text-primary text-4xl" />,
      title: 'Customer-First Approach',
      description: "You're our neighbour, and we treat you like one. From your first call to the final sweep-up, we guarantee a friendly, respectful, and hassle-free experience."
    },
    {
      icon: <FiHeart className="text-red-500 text-4xl" />,
      title: 'Passion for Our Community',
      description: "We're a local business, born and raised in the Vancouver area. We're proud to help keep our communities clean and clutter-free."
    },
    {
      icon: <FiGlobe className="text-secondary text-4xl" />,
      title: 'Eco-Friendly Promise',
      description: "We're committed to protecting our beautiful British Columbia. We donate what we can and recycle everything possible to minimize our landfill footprint."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Your Friendly Neighbourhood Junk Haulers</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-light">
            We're more than just a junk removal company. We're a local team dedicated to making your life easier.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-text-light leading-relaxed">
                VOLO JUNK REMOVAL was founded on a simple idea: junk removal shouldn't be a chore for you. After seeing friends and family struggle with hauling their own junk, we knew there had to be a better, friendlier way.
              </p>
              <p className="mt-4 text-text-light leading-relaxed">
                We started with one truck and a commitment to providing the best customer service in the industry. Today, we're proud to serve communities all across Metro Vancouver, but our core mission remains the same: to provide a fast, simple, and reliable service that our customers can count on.
              </p>
            </div>
            <div>
              {/* Replace with a real photo of the owner or team */}
              <img 
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2942" 
                alt="Owner of VOLO JUNK REMOVAL" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">What We Stand For</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="mt-2 text-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Experience the VOLO Difference</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Ready for a clutter-free space? Let our friendly team help.</p>
            <div className="mt-8">
               <Button href="/contact" variant="secondary" className="bg-white text-secondary hover:bg-gray-100 text-xl">
                Get Your Free Quote
               </Button>
            </div>
        </div>
      </section>
    </>
  );
}
