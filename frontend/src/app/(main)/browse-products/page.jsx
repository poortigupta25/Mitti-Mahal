'use client'
import { useState, useEffect } from 'react'

export default function BrowseProducts() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/product/getall');
            const data = await response.json();
            console.log('Fetched products:', data); // Debugging line
            setProducts(data);
            console.log('Products set:', data); // Debugging line
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 mt-20 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 py-5">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
                {products.map((product) => (
                    <div key={product._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="relative h-64">
                            <img
                                src={product.image[0]}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-5">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h2>
                            <p className="text-2xl font-bold text-blue-600 mb-3">${product.price}</p>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
