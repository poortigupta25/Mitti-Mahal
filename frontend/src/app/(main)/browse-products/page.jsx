'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const BrowseProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/product/getall');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-amber-900 mt-14">Our Products</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((p) => (
            <div key={p._id} className="bg-stone-50 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={p.image?.[0] || '/placeholder.jpg'}
                alt={p.name}
                className="h-64 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-amber-900 mb-1">{p.name}</h2>
                <p className="text-amber-700 font-bold mb-2">${p.price}</p>
                <p className="text-sm text-stone-700 mb-3 line-clamp-2">{p.description}</p>
                <Link href={`/view-product/${p._id}`}>
                  <button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseProducts;
