import type { Metadata } from 'next';
import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { FiMapPin } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: `VOLO JUNK REMOVAL proudly serves communities across Metro Vancouver, including Coquitlam, Burnaby, Surrey, Richmond, Vancouver, and more.`,
};

export default function LocationsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Our Metro Vancouver Service Areas</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-text-light">
            We provide fast, friendly junk removal services to homes and businesses throughout the Lower Mainland.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {siteData.serviceAreas.map((area) => (
              // In a full build, these would link to individual location pages: /locations/coquitlam
              <div key={area} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                <FiMapPin className="text-secondary text-xl mr-3 flex-shrink-0" />
                <span className="font-medium text-text-main">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
