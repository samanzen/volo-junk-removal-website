import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/siteData";
import { client } from '@/lib/sanity';
import { urlFor } from '@/lib/image'; // Import the image helper
import { FiStar, FiTruck, FiFeather, FiCheckCircle, FiArrowRight, FiSmile, FiShield, FiHome, FiMessageSquare } from "react-icons/fi";

// --- Data Fetching (Updated to include heroImage) ---
interface HomepageContent {
  heroHeadline?: string;
  heroSubheadline?: string;
  heroImage?: any; // The new hero image field
}
interface Service {
  name: string;
  slug: {
    current: string;
  };
}
async function getHomepageData() {
  // Updated the query to fetch the heroImage
  const homepageQuery = `*[_type == "homepage"][0] { heroHeadline, heroSubheadline, heroImage }`;
  const servicesQuery = `*[_type == "service"] | order(name asc)[0...7] { name, slug }`;
  const homepageContent: HomepageContent = await client.fetch(homepageQuery);
  const services: Service[] = await client.fetch(servicesQuery);
  return { homepageContent, services };
}

// --- Excellent Page Component ---
export default async function HomePage() {
  const { homepageContent, services } = await getHomepageData();

  const howItWorks = [
    { number: "1", title: "Get Your Quote", description: "Call, text, or fill out our form. We'll give you a free, no-obligation quote in minutes." },
    { number: "2", title: "We Arrive & Confirm", description: "Our friendly, uniformed team arrives on time, confirms the price, and gets ready to work." },
    { number: "3", title: "Junk Disappears!", description: "You point, we lift. We do all the work and even sweep up the area before we leave." },
  ];
  
  const whyChooseUs = [
      { icon: <FiSmile />, title: "Friendly, Uniformed Professionals", description: "Our team is courteous, respectful of your property, and happy to help." },
      { icon: <FiShield />, title: "Licensed & Fully Insured", description: "We are a professional company, giving you complete peace of mind." },
      { icon: <FiHome />, title: "Local Metro Vancouver Experts", description: "We're your neighbours! We know the area and are proud to serve our community." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white">
        {/* This Image component is now fully dynamic */}
        <Image 
          // It checks if you've uploaded an image. If not, it uses a safe placeholder.
          src={homepageContent?.heroImage ? urlFor(homepageContent.heroImage).width(2832).url() : "https://images.unsplash.com/photo-1574681321055-d3b135823940?q=80&w=2832"}
          alt="The VOLO JUNK REMOVAL team working in front of their truck" 
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white drop-shadow-lg">
            {homepageContent?.heroHeadline || "Metro Vancouver's Friendliest Junk Removal"}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
            {homepageContent?.heroSubheadline || "Same-Day Service. Free, No-Obligation Quotes."}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="accent" className="text-lg !px-8 !py-4 w-full sm:w-auto">Get My Free Quote</Button>
            <Button href={siteData.smsHref} as="a" variant="primary" className="text-lg !px-8 !py-4 w-full sm:w-auto flex items-center justify-center gap-2">
              <FiMessageSquare />
              Text Us a Photo
            </Button>
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
      
      {/* "Why Choose Us?" Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold">Why Choose VOLO?</h2>
                      <p className="mt-4 text-lg text-text-light">We're not a big, faceless franchise. We're your local experts dedicated to providing an unbeatable customer experience.</p>
                      <ul className="mt-8 space-y-6">
                          {whyChooseUs.map((item) => (
                              <li key={item.title} className="flex items-start">
                                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary text-2xl">
                                      {item.icon}
                                  </div>
                                  <div className="ml-4">
                                      <h3 className="text-xl font-bold">{item.title}</h3>
                                      <p className="mt-1 text-text-light">{item.description}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                      <Image 
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940" 
                          alt="A VOLO JUNK REMOVAL team member giving a thumbs up"
                          width={800}
                          height={600}
                          className="rounded-xl shadow-2xl w-full h-auto"
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface">
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

      {/* Google Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Neighbours Are Saying</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.reviews.map((review) => (
              <div key={review.name} className="p-8 bg-white rounded-xl shadow-lg border border-border">
                <div className="flex items-center text-yellow-400 mb-4">
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                  <FiStar fill="currentColor" />
                </div>
                <p className="text-text-light text-left">"{review.quote}"</p>
                <p className="mt-6 font-bold text-left text-secondary">{review.name}, <span className="font-normal text-text-light">{review.location}</span></p>
              </div>
            ))}
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
