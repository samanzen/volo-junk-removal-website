import Link from 'next/link';
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/image';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Junk Removal Services',
  description: `From furniture and appliance removal to full estate cleanouts and shed demolition, VOLO JUNK REMOVAL handles it all. See our full list of services for Metro Vancouver.`,
};

// Define the type for a service, including the new image
interface Service {
  name: string;
  slug: {
    current: string;
  };
  description: string;
  mainImage: any; // Sanity image type
}

// Fetch all services from Sanity
async function getServices() {
  const query = `*[_type == "service"] | order(name asc) { name, slug, description, mainImage }`;
  const services: Service[] = await client.fetch(query);
  return services;
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Services</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-light">
            We are equipped to handle jobs of all sizes, from single items to full property cleanouts for homes and businesses across Metro Vancouver.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug.current}`}
                key={service.name}
                className="group block bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={urlFor(service.mainImage).width(400).height(300).url()}
                    alt={`Promotional image for ${service.name} service`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-text-light text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Don't See Your Junk on the List?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">Chances are we can still take it! Give us a call for a quick, free quote on any items you need removed.</p>
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
