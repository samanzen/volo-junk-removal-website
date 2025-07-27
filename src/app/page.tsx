import Link from 'next/link';
import { Button } from "@/components/ui/Button"; // We'll update the Button component next
import { siteData } from "@/data/siteData";
import { client } from '@/lib/sanity';
import { FiStar, FiTruck, FiFeather, FiCheckCircle, FiArrowRight } from "react-icons/fi";

// --- Data Fetching (same as before) ---
interface HomepageContent {
  heroHeadline?: string;
  heroSubheadline?: string;
}
interface Service {
  name: string;
  slug: {
    current: string;
  };
}
async function getHomepageData() {
  const homepageQuery = `*[_type == "homepage"][0] { heroHeadline, heroSubheadline }`;
  const servicesQuery = `*[_type == "service"] | order(name asc) { name, slug }`;
  const homepageContent: HomepageContent = await client.fetch(homepageQuery);
  const services: Service[] = await client.fetch(servicesQuery);
  return { homepageContent, services };
}

// --- Redesigned Page Component ---
export default async function HomePage() {
  const { homepageContent, services } = await getHomepageData();

  const trustBadges = [
    { icon: <FiStar className="text-yellow-400"/>, text: "5-Star Rated" },
    { icon: <FiFeather className="text-primary"/>, text: "Eco-Friendly" },
    { icon: <FiTruck className="text-accent-dark"/>, text: "Same-Day Service" },
  ];

  const howItWorks = [
    { number: "1", title: "Get Your Quote", description: "Call, text, or fill out our form. We'll give you a free, no-obligation quote in minutes." },
    { number: "2", title: "We Arrive & Confirm", description: "Our friendly, uniformed team arrives on time, confirms the price, and gets ready to work." },
    { number: "3", title: "Junk Disappears!", description: "You point, we lift. We do all the work and even sweep up the area before we leave." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent z-10"></div>
        <video 
          src="/videos/hero-video.mp4" // Make sure you've uploaded this video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center py-24 md:py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white drop-shadow-lg">
            {homepageContent?.heroHeadline || "Metro Vancouver's Friendliest Junk Removal"}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            {homepageContent?.heroSubheadline || "Same-Day Service. Free, No-Obligation Quotes. We do all the heavy lifting so you don't have to."}
          </p>
          <div className="mt-10">
            <Button href="/contact" className="text-xl !bg-accent hover:!bg-accent-dark !px-10 !py-4">Get My Free Quote</Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center space-x-2 text-lg font-medium">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get Rid of Junk in 3 Easy Steps</h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">Our process is designed to be simple, fast, and stress-free.</p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {howItWorks.map((step) => (
              <div key={step.number} className="p-8 bg-white rounded-xl shadow-lg border border-border transition-transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 bg-primary text-white text-3xl font-bold rounded-full">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-text-light text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What We Take</h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">We can haul away almost anything! Here are some of our most popular services.</p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link href={`/services/${service.slug.current}`} key={service.name} className="group block p-6 bg-white rounded-xl text-center border border-border shadow-md hover:shadow-2xl hover:border-primary transition-all transform hover:-translate-y-2">
                <FiCheckCircle className="text-4xl text-primary mx-auto mb-4"/>
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{service.name}</h3>
              </Link>
            ))}
             <Link href="/services" className="group flex flex-col justify-center items-center p-6 bg-primary text-white rounded-xl text-center shadow-lg hover:shadow-2xl hover:bg-primary-dark transition-all transform hover:-translate-y-2 col-span-2 md:col-span-1">
                <h3 className="text-lg font-bold">And Much More!</h3>
                <div className="flex items-center mt-2 text-sm opacity-80 group-hover:opacity-100">
                  <span>View All Services</span>
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to Reclaim Your Space?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">Let VOLO JUNK REMOVAL handle the hard work. We're ready to help today!</p>
            <div className="mt-10">
               <Button href="/contact" className="text-xl !bg-accent hover:!bg-accent-dark !px-10 !py-4">
                Get Your Free Quote Now
               </Button>
            </div>
        </div>
      </section>
    </>
  );
}
