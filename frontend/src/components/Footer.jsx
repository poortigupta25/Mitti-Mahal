// Footer.jsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Mitti Mahal</h2>
          <p className="text-sm mb-4">Celebrating the art of pottery with handcrafted pieces that bring warmth and character to your home.</p>
          <div className="flex space-x-4">
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Twitter /></Link>
            <Link href="#"><Instagram /></Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="/shop" className="hover:text-amber-400">Shop</Link></li>
            <li><Link href="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-amber-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li><Link href="/category/vases" className="hover:text-amber-400">Vases</Link></li>
            <li><Link href="/category/bowls" className="hover:text-amber-400">Bowls</Link></li>
            <li><Link href="/category/plates" className="hover:text-amber-400">Plates</Link></li>
            <li><Link href="/category/mugs" className="hover:text-amber-400">Mugs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2"><MapPin /> 123 Pottery Lane</li>
            <li className="flex items-center gap-2"><Phone /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><Mail /> info@mittimahal.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-xs bg-amber-900">
        © {new Date().getFullYear()} Mitti Mahal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
