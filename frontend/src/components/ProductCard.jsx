'use client'
import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ title, category, price, image, rating, id }) => {
  const { addToCart } = useCart();
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/Product/getall`);
    const data = res.data;
    console.table(data);
    setProductList(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid justify-items-center mx-auto my-auto">
      <div className="px-6 py-10 rounded-lg bg-indigo-100 shadow-3x1 mt-8 mx-auto my-auto space-y-4 gap-4 flex">
        <div className="grid justify-content">
          <img
            className="w-85 mt-3"
            src={image}
            alt={title}
          />
        </div>
        <div className="mx-auto my-auto space-y-2 gap-2 justify-items">
          <button className="text-1xl bg-stone-900 text-gray-50 px-4 rounded-full">Free shipping</button>
          <h2 className="text-3xl font-bold">{title}</h2>
          <h3 className="text-stone-600">{category}</h3>
          <p className="line-through">1.599,-</p>
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-stone-600">
            The offer is valid until April 3 or as long as stock lasts
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-stone-50">
            <i className="fa-solid fa-credit-card"></i> Buy Now
          </button>
          <p className="text-green-800">
            <i className="fa-solid fa-circle text-green-500 fa-2xs mr-1"></i>50+ pcs. in stock.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-stone-50"
            onClick={() => addToCart({ id, name: title, price, image })}
          >
            <i className="fa-solid fa-cart-plus"></i> Add to cart
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-stone-50">
            <i className="fa-solid fa-heart text-red-500"></i> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;