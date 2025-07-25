'use client';

import Link from "next/link";
import { useState } from "react";
import { siteData } from "@/data/siteData";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { Button } from "./ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-heading text-primary">
            VOLO<span className="text-secondary">JUNK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-medium text-text-main hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={siteData.phoneHref} className="flex items-center space-x-2 text-base font-semibold text-secondary hover:text-secondary/80 transition-colors">
              <FiPhone />
              <span>{siteData.phone}</span>
            </a>
            <Button href="/contact">Get a Free Quote</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-text-main focus:outline-none">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block text-lg font-medium text-text-main hover:bg-surface rounded-md px-3 py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
             <div className="border-t border-border pt-4 space-y-4">
               <a href={siteData.phoneHref} className="flex items-center justify-center space-x-2 text-base font-semibold text-secondary hover:text-secondary/80 transition-colors rounded-md px-3 py-2 border border-secondary">
                  <FiPhone />
                  <span>{siteData.phone}</span>
                </a>
               <Button href="/contact" className="w-full text-center">Get a Free Quote</Button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}
