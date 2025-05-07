import React from 'react';
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-200 text-stone-100">
      {/* Newsletter Section */}
      <div className="bg-amber-800/80 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="mb-6 opacity-90">Stay updated with our latest collections and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-stone-300 flex-1 px-4 py-3 rounded-lg focus:outline-none text-stone-800"
                required
              />
              <button
                type="submit"
                className="bg-orange-700 hover:bg-amber-800 text-stone-100 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 text-stone-800">
            <h2 className="text-2xl font-bold">Mitti Mahal</h2>
            <p className="opacity-80 max-w-xs">
              Celebrating the art of pottery with handcrafted pieces that bring warmth and character to your home.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-stone-800">
              <FooterLink href="/shop">Shop</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-4">Categories</h4>
            <ul className="space-y-2 text-stone-800">
              <FooterLink href="/category/vases">Vases</FooterLink>
              <FooterLink href="/category/bowls">Bowls</FooterLink>
              <FooterLink href="/category/plates">Plates</FooterLink>
              <FooterLink href="/category/mugs">Mugs</FooterLink>
              <FooterLink href="/category/decor">Home Decor</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-stone-800 mb-4">Contact Us</h4>
            <ul className="space-y-3 text-stone-800">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-stone-800 shrink-0 mt-0.5" />
                <span>123 Pottery Lane, Ceramic City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-stone-800 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-stone-800 shrink-0" />
                <span>info@mittimahal.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-300 bg-amber-800/80">
        <div className="container mx-auto px-4 py-6">
          <div className="text-stone-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Mitti Mahal. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper component for footer links
const FooterLink = ({ href, children }) => {
  return (
    <li>
      <Link href={href} className="opacity-80 hover:opacity-100 hover:text-orange-700 transition-colors">
        {children}
      </Link>
    </li>
  );
};

// Helper component for social links
const SocialLink = ({ href, icon }) => {
  return (
    <Link
      href={href}
      className="h-9 w-9 rounded-full bg-amber-800 hover:bg-orange-700 flex items-center justify-center transition-colors text-stone-100"
    >
      {icon}
    </Link>
  );
};

export default Footer;