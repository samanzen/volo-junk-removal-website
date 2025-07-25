import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-heading text-primary">VOLO<span className="text-secondary">JUNK</span></h3>
            <p className="mt-4 text-gray-300">Your friendly, local choice for fast and responsible junk removal across Metro Vancouver.</p>
            <div className="flex space-x-4 mt-6">
              <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-2xl"><FaInstagram /></a>
              <a href={siteData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-2xl"><FaFacebook /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Our Services</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white">Before & After</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          {/* Services */}
           <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Top Services</h4>
            <ul className="mt-4 space-y-2">
              {siteData.services.slice(0, 5).map(service => (
                 <li key={service.name}><Link href={service.href} className="text-gray-300 hover:text-white">{service.name}</Link></li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li className="flex items-start"><span className="font-semibold w-20">Phone:</span> <a href={siteData.phoneHref} className="hover:text-white">{siteData.phone}</a></li>
              <li className="flex items-start"><span className="font-semibold w-20">Hours:</span> <span>{siteData.hours}</span></li>
              <li className="flex items-start"><span className="font-semibold w-20">Service:</span> <span>All of Metro Vancouver</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteData.businessName}. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
