"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Home, Box, Users, ShoppingBag, BarChart2, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const AdminNavbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: <Home className="h-5 w-5" />,
      current: pathname === "/admin/dashboard",
    },
    {
      name: "Users",
      href: "/admin/manage-users",
      icon: <Users className="h-5 w-5" />,
      current: pathname.startsWith("/admin/manage-users"),
    },
    {
      name: "Orders",
      href: "/admin/manage-orders",
      icon: <ShoppingBag className="h-5 w-5" />,
      current: pathname.startsWith("/admin/manage-orders"),
    },
    {
      name: "Reports",
      href: "/admin/manage-reports",
      icon: <BarChart2 className="h-5 w-5" />,
      current: pathname.startsWith("/admin/manage-reports"),
    },
    {
      name: "Inventory",
      href: "/admin/inventory",
      icon: <Box className="h-5 w-5" />,
      current: pathname.startsWith("/admin/inventory"),
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-amber-900">Mitti Mahal</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition ${
                    item.current
                      ? "bg-amber-100 text-amber-900"
                      : "text-amber-800 hover:bg-amber-50 hover:text-amber-900"
                  }`}
                >
                  <span className={`mr-2 ${item.current ? "text-amber-700" : "text-amber-600"}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-amber-800 hover:text-amber-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop Logout */}
            <div className="hidden md:block">
              <Link
                href="/"
                className="flex items-center text-sm text-amber-800 hover:text-amber-900"
              >
                <LogOut className="mr-1 h-5 w-5 text-amber-600" />
                Back to Site
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-50 border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    item.current
                      ? "bg-amber-100 text-amber-900"
                      : "text-amber-800 hover:bg-amber-50 hover:text-amber-900"
                  }`}
                >
                  <span className={`mr-3 ${item.current ? "text-amber-700" : "text-amber-600"}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-amber-800 hover:bg-amber-50 hover:text-amber-900"
              >
                <LogOut className="mr-3 h-5 w-5 text-amber-600" />
                Back to Site
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Add this div to push content down */}
      <div className="h-16"></div>
    </>
  );
};

export default AdminNavbar;