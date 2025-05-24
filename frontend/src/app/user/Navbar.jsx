import React from 'react';
import Link from 'next/link';
import { UserCircle, ShoppingCart, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-amber-200 via-amber-100 to-yellow-100 dark:from-yellow-900 dark:via-amber-900 dark:to-yellow-950 shadow-md py-3 px-6 flex items-center justify-between relative z-20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Mitti Mahal Logo" className="h-10 w-10 rounded-full border-2 border-amber-700 bg-white" />
        <span className="text-xl font-extrabold text-yellow-900 dark:text-amber-100 tracking-tight">Mitti Mahal</span>
      </Link>
      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <Link href="/user/profile" className="flex items-center gap-1 text-yellow-900 dark:text-amber-100 font-semibold hover:text-amber-700 dark:hover:text-yellow-200 transition">
          <UserCircle className="w-5 h-5" /> Profile
        </Link>
        <Link href="/user/add-cart" className="flex items-center gap-1 text-yellow-900 dark:text-amber-100 font-semibold hover:text-amber-700 dark:hover:text-yellow-200 transition">
          <ShoppingCart className="w-5 h-5" /> Cart
        </Link>
        <Link href="/" className="flex items-center gap-1 text-yellow-900 dark:text-amber-100 font-semibold hover:text-amber-700 dark:hover:text-yellow-200 transition">
          <LogOut className="w-5 h-5" /> Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;