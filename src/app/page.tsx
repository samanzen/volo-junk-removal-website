import Link from 'next/link';
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/siteData";
import { FiStar, FiTruck, FiLeaf, FiCheckCircle } from "react-icons/fi";

export default function HomePage() {
  const trustBadges = [
    { icon: <FiStar className="text-yellow-400"/>, text: "5-Star Google Rating" },
    { icon: <FiLeaf className="text-primary"/>, text: "Eco-Friendly Disposal" },
    { icon: <FiTruck className="text-secondary"/>, text: "Same-Day Service" },
  ];

  const howItWorks = [
    { number: "1", title: "You Call Us", description: "Tell us what you need gone. We'll give you a free, no-obligation quote right over the phone." },
    { number: "2", title: "We Arrive", description: "We schedule a time that works for you. Our friendly team arrives on time, ready to work." },
    { number: "3", title: "We Haul It Away", description: "You point, and we do all the lifting. We'll sweep up the area before we leave." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          {/* Replace with a high-quality local image of your team/truck */}
          <img 
            src="https://images.unsplash.com/photo-1615485925576-85f153957874?q=80&w=2940" 
            alt="Friendly junk removal team in front of a clean truck" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white">Metro Vancouver's Friendliest Junk Removal</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Same-Day Service. Free, No-Obligation Quotes. We do all the heavy lifting so you don't have to.</p>
          <div className="mt-8">
            <Button href="/contact" className="text-xl">Get My Free Quote</Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-lg">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Get Rid of Junk in 3 Easy Steps</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.number} className="p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center h-16 w-16 bg-primary text-white text-2xl font-bold rounded-full mx-auto">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-text-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What We Take</h2>
          <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">We can haul away almost anything! Here are some of our most popular services.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {siteData.services.map((service) => (
              <Link href={service.href} key={service.name} className="group block p-6 bg-surface rounded-lg text-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-xl">
                <FiCheckCircle className="text-3xl text-primary mx-auto mb-3 group-hover:text-white transition-colors"/>
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </Link>
            ))}
             <Link href="/services" className="group block p-6 bg-secondary text-white rounded-lg text-center hover:bg-secondary/80 transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-xl col-span-2 md:col-span-1 lg:col-span-1">
                <h3 className="text-lg font-semibold">And Much More!</h3>
                <p className="text-sm">View All Services</p>
              </Link>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to Reclaim Your Space?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Let VOLO JUNK REMOVAL handle the hard work. We're ready to help today!</p>
            <div className="mt-8">
               <Button href="/contact" variant="primary" className="bg-white text-primary hover:bg-gray-100 text-xl">
                Get Your Free Quote Now
               </Button>
            </div>
        </div>
      </section>
    </>
  );
}
