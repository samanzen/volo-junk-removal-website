import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Junk Removal Services',
  description: `From furniture and appliance removal to full estate cleanouts and shed demolition, VOLO JUNK REMOVAL handles it all. See our full list of services for Metro Vancouver.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">What We Haul Away</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            If you've got junk, we can take it. We are equipped to handle jobs of all sizes, from single items to full property cleanouts for homes and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service) => (
              <Link
                href={service.href}
                key={service.name}
                className="group block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-text-light">
                  Fast and reliable removal for your old {service.name.toLowerCase()}.
                </p>
                <div className="flex items-center mt-4 font-semibold text-primary">
                  <span>Learn More</span>
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Don't See Your Junk on the List?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Chances are we can still take it! Give us a call for a quick, free quote on any items you need removed.</p>
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
