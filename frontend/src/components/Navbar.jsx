// // Navbar.jsx
// 'use client';
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, ShoppingBag } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "About", href: "/about" },
//     { name: "Shop", href: "/shop" },
//     { name: "Sale", href: "/sale" },
//     { name: "Browse Products", href: "/browse-products" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className={`fixed w-full z-50 ${scrolled ? "bg-amber-900 shadow" : "bg-transparent"} transition`}>
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/" className="flex items-center gap-2 text-amber-100 text-xl font-bold">
//           <img src="/logo.png" alt="Mitti Mahal" className="h-10 w-10 rounded-full" />
//           Mitti Mahal
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map(link => (
//             <Link key={link.name} href={link.href} className="text-amber-100 hover:text-amber-300 transition">
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-amber-100">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             className="md:hidden bg-amber-900"
//           >
//             <ul className="flex flex-col p-4 space-y-2">
//               {navLinks.map(link => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="block text-amber-100 py-2 hover:text-amber-300"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;


// Navbar.jsx
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/browse-products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 ${scrolled ? "bg-amber-900 shadow text-amber-100" : "bg-amber-50 text-amber-900"} transition`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-amber-10 text-xl font-bold">
          <img src="/logo.png" alt="Mitti Mahal" className="h-10 w-10 rounded-full" />
          Mitti Mahal
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-amber-10 hover:text-amber-300 transition">
              {link.name}
            </Link>
          ))}
          
          {/* Login and Signup buttons */}
          <div className="flex items-center gap-4 ml-6">
            <Link href="/login" className="flex items-center gap-1 text-amber-10 hover:text-amber-300 transition">
              <LogIn size={18} />
              <span>Login</span>
            </Link>
            <Link href="/signup" className="flex items-center gap-1 text-amber-10 hover:text-amber-300 transition">
              <User size={18} />
              <span>Signup</span>
            </Link>
            
            {/* Cart button with badge */}
            <Link href="/add-cart" className="relative p-2 text-amber-10 hover:text-amber-300 transition">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-300 text-amber-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </nav>
        
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart button in mobile view */}
          <Link href="/add-cart" className="relative p-1 text-amber-100">
            <ShoppingBag size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-300 text-amber-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Link>
          
          {/* Mobile menu toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-100">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-amber-900 overflow-hidden"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-amber-100 py-2 hover:text-amber-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
              {/* Mobile menu auth links */}
              <li className="border-t border-amber-700 pt-2 mt-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-amber-100 py-2 hover:text-amber-300"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-amber-100 py-2 hover:text-amber-300"
                >
                  <User size={18} />
                  <span>Signup</span>
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;