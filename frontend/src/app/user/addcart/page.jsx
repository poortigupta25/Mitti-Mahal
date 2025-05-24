'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalAmount } = useCart();

  const subtotal = totalAmount;
  const shipping = 199;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl text-amber-800 mb-4">Your cart is empty</h2>
            <Link 
              href="/browse-products"
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                        <p className="text-amber-600">₹{item.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-amber-400 hover:text-amber-600"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-md bg-amber-100 text-amber-600 hover:bg-amber-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <span className="w-8 text-center text-amber-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-md bg-amber-100 text-amber-600 hover:bg-amber-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-semibold text-amber-900 mb-4">Order Summary</h2>
              <div className="space-y-3 text-amber-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping.toLocaleString()}</span>
                </div>
                <div className="border-t border-amber-200 pt-3">
                  <div className="flex justify-between font-semibold text-amber-900">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                Proceed to Checkout
              </button>
              
              <Link 
                href="/browse-products"
                className="block text-center mt-4 text-amber-600 hover:text-amber-800 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;