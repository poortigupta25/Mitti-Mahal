"use client";
import React, { useState, useEffect } from "react";
import { AlertTriangle, Box, CheckCircle, Plus, Search } from "lucide-react";
import Link from "next/link";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = filter === "low-stock" 
          ? "http://localhost:5000/product/low-stock" 
          : "http://localhost:5000/product/getall";
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  const updateStock = async (id, newStock) => {
    try {
      const response = await fetch(`http://localhost:5000/product/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock: newStock })
      });
      
      if (!response.ok) throw new Error('Update failed');
      const updatedProduct = await response.json();
      
      setProducts(products.map(product => 
        product._id === id ? updatedProduct : product
      ));
    } catch (err) {
      console.error(err);
      alert('Failed to update stock');
    }
  };

  if (loading) return <div className="text-center py-8 text-amber-800">Loading inventory...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error: {error}</div>;

  return (
    <div className="p-6 bg-amber-50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-amber-900">Inventory Management</h1>
        <Link
          href="/admin/add-product"
          className="mt-4 sm:mt-0 inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Link>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full border border-amber-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-amber-300 rounded-lg px-3 py-2 bg-white focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="all">All Products</option>
            <option value="low-stock">Low Stock</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-200">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-amber-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {product.image?.[0] && (
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="h-10 w-10 rounded-md object-cover mr-3"
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-amber-900">{product.name}</div>
                          <div className="text-xs text-amber-700">SKU: {product._id.slice(-6)}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-amber-800 capitalize">{product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-amber-900">₹{product.price.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`mr-2 ${
                          product.stock < 5 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {product.stock < 5 ? (
                            <AlertTriangle className="h-4 w-4" />
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )}
                        </span>
                        <input
                          type="number"
                          min="0"
                          value={product.stock}
                          onChange={(e) => {
                            const newStock = parseInt(e.target.value) || 0;
                            setProducts(products.map(p => 
                              p._id === product._id ? {...p, stock: newStock} : p
                            ));
                          }}
                          onBlur={() => updateStock(product._id, product.stock)}
                          className="w-20 border border-amber-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        href={`/admin/products/edit/${product._id}`}
                        className="text-amber-600 hover:text-amber-800 mr-3"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/admin/products/delete/${product._id}`}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-amber-800">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;