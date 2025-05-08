'use client';
import { useState, useEffect } from 'react';

export default function BrowseProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/getall')
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-amber-900">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p._id} className="bg-stone-50 rounded-lg shadow hover:shadow-lg transition">
            <img src={p.image[0]} alt={p.name} className="h-64 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-1">{p.name}</h2>
              <p className="text-amber-700 font-bold mb-2">${p.price}</p>
              <p className="text-sm text-stone-700 mb-3 line-clamp-2">{p.description}</p>
              <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
