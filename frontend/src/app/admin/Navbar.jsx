'use client';
import Link from 'next/link';
import React from 'react';

const AdminNavbar = () => {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Mitti Mahal Admin</h1>
        <div className="space-x-4">
          <Link href="/admin/profile">
            <button className="hover:underline">Dashboard</button>
          </Link>
          <Link href="">
            <button className="hover:underline">Settings</button>
          </Link>
          <Link href="">
            <button className="hover:underline">Logout</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
