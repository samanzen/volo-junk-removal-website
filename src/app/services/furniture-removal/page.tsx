import { Button } from '@/components/ui/Button';
import { FiCheckCircle } from 'react-icons/fi';
import Head from 'next/head';
import type { Metadata } from 'next';

// This data would ideally come from a CMS or a larger data file
const service = {
  name: 'Furniture Removal',
  title: 'Furniture Removal & Disposal in Metro Vancouver',
  description: 'Need to get rid of an old couch, sofa, or mattress in Coquitlam, Surrey, or anywhere in Metro Vancouver? VOLO offers fast, affordable furniture removal.',
  problem: "That old couch has seen better days. It's heavy, awkward to move, and you can't just leave it on the curb. Trying to haul it to the dump yourself means finding a truck, convincing a friend to help, and spending your weekend wrestling with it.",
  agitate: "It's taking up valuable space in your home. Every day you look at it, you wish it were gone. Plus, improper disposal can harm the environment and result in fines.",
  solution: "Let VOLO JUNK REMOVAL take care of it! Our professional team will safely remove your unwanted furniture from anywhere in your home—basement, upstairs, you name it. We do all the heavy lifting and ensure it's donated or recycled responsibly.",
  itemsWeTake: [
    'Couches & Sofas', 'Sectionals & Loveseats', 'Recliners & Armchairs',
    'Mattresses & Box Springs', 'Bed Frames', 'Dressers & Wardrobes',
    'Tables & Chairs', 'Desks & Bookshelves', 'Cabinets & Hutches'
  ],
  faqs: [
    {
      question: "Do I need to move the furniture outside?",
      answer: "Not at all! Our team is fully insured and trained to remove furniture from anywhere inside your property. Just show us where it is, and we'll handle the rest."
    },
    {
      question: "What happens to the old furniture?",
      answer: "We do our best to be eco-friendly. Furniture in good condition is donated to local charities. Other items are sent to specialized recycling facilities to be broken down responsibly."
    },
    {
      question: "How much does furniture removal cost?",
      answer: "Our pricing is based on the volume your items take up in our truck. We provide a free, no-obligation quote upfront so you know the exact price before we begin any work."
    }
  ]
};

// JSON-LD Schema for SEO
const FaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": service.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function ServicePage() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FaqSchema) }} />
      </Head>
      {/* Service Header */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading">{service.name}</h1>
              <p className="mt-4 text-lg text-text-light">{service.description}</p>
              <div className="mt-8">
                <Button href="/contact">Get a Quote Today</Button>
              </div>
            </div>
            <div>
              {/* Replace with a relevant image */}
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2940" alt="Old couch ready for junk removal" className="rounded-lg shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* PAS Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-left md:text-center space-y-6">
            <div>
              <h2 className="text-3xl font-bold">The Problem with Old Furniture</h2>
              <p className="mt-2 text-lg text-text-light">{service.problem}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-red-600">Don't Let it Linger</h2>
              <p className="mt-2 text-lg text-text-light">{service.agitate}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">The VOLO Solution</h2>
              <p className="mt-2 text-lg text-text-light">{service.solution}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Take Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Types of Furniture We Take</h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {service.itemsWeTake.map(item => (
              <div key={item} className="flex items-center p-4 bg-white rounded-md shadow-sm">
                <FiCheckCircle className="text-primary text-xl mr-3 flex-shrink-0" />
                <span className="text-text-main">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="p-6 border border-border rounded-lg bg-surface">
                <h3 className="text-xl font-semibold text-text-main">{faq.question}</h3>
                <p className="mt-2 text-text-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
