import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/image';
import { Button } from '@/components/ui/Button';
import { FiCheckCircle } from 'react-icons/fi';
import Image from 'next/image';

interface Service {
  name: string;
  description: string;
  mainImage?: any; // Image is now optional
  problem?: string;
  agitate?: string;
  solution?: string;
  itemsWeTake?: string[];
  faqs?: { question: string; answer: string }[];
}

async function getService(slug: string) {
  const query = `*[_type == "service" && slug.current == $slug][0]`;
  const service: Service = await client.fetch(query, { slug });
  return service;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  return {
    title: `${service.name} | VOLO JUNK REMOVAL`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section className="relative bg-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0">
          {/* This is the fix: Check if an image exists, otherwise use a placeholder */}
          <Image
            src={service.mainImage ? urlFor(service.mainImage).width(1200).height(800).url() : 'https://placehold.co/1200x800/1f2937/ffffff?text=VOLO+JUNK+REMOVAL'}
            alt={`Header image for ${service.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white drop-shadow-lg">{service.name}</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            {service.description}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent" className="text-xl !px-10 !py-4">Get a Quote Today</Button>
          </div>
        </div>
      </section>

      {service.problem && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold">The Problem</h2>
                <p className="mt-2 text-text-light">{service.problem}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Why It's an Issue</h2>
                <p className="mt-2 text-text-light">{service.agitate}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">The VOLO Solution</h2>
                <p className="mt-2 text-text-light">{service.solution}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {service.itemsWeTake && service.itemsWeTake.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Examples of {service.name} We Handle</h2>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {service.itemsWeTake.map(item => (
                <div key={item} className="p-4 bg-white rounded-lg shadow-md border border-border">
                  <FiCheckCircle className="text-primary text-2xl mr-3 inline-block" />
                  <span className="text-text-main font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-12 space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-border">
                  <h3 className="text-xl font-bold text-secondary">{faq.question}</h3>
                  <p className="mt-2 text-text-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
