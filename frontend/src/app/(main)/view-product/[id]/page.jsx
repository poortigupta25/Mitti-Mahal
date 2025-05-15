'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const getProductData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/getbyid/` + id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProductData();
  }, []);

  if (!product) {
    return (
      <div>
        <div className="container mx-auto px-4 py-16">
          <p className="text-center text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-neutral-100 rounded-lg p-4">
            <img
              src={product.image?.[0] || '/placeholder.jpg'}
              alt={product.name}
              className="w-full h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-amber-900 mb-2">{product.name}</h1>
              <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <div className="border-t border-b py-4">
              <p className="text-4xl font-bold text-amber-700">${product.price}</p>
              <p className="text-green-700 mt-2">
                {product.stock > 0 ? (
                  <span>
                    <i className="fas fa-check-circle mr-2"></i>
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600">
                    <i className="fas fa-times-circle mr-2"></i>
                    Out of Stock
                  </span>
                )}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {product.size && product.size.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Available Sizes</h3>
                <div className="flex gap-2">
                  {product.size.map((size, index) => (
                    <span
                      key={index}
                      className="inline-block border border-amber-200 bg-amber-50 text-amber-800 px-4 py-2 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.color && product.color.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Available Colors</h3>
                <div className="flex gap-2">
                  {product.color.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block border border-amber-200 bg-amber-50 text-amber-800 px-4 py-2 rounded"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              <button
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button className="flex-1 border border-amber-600 text-amber-600 hover:bg-amber-50 py-3 px-6 rounded-lg font-medium transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;