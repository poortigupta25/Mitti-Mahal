"use client";
import Link from "next/link";
import React, { useState } from "react";

const AdminDashboard = () => {
  const [tab, setTab] = useState("products");

  const tabClasses = (current) =>
    `py-2 px-4 rounded-lg font-medium text-sm transition ${tab === current
      ? "bg-blue-600 text-white shadow"
      : "bg-white text-gray-800 hover:bg-blue-50"
    }`;

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700">Mitti Mahal Admin Dashboard</h1>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
          <button className={tabClasses("products")} onClick={() => setTab("products")}>Products</button>
          <button className={tabClasses("stock")} onClick={() => setTab("stock")}>Stock</button>
          <button className={tabClasses("orders")} onClick={() => setTab("orders")}>Orders</button>
          <button className={tabClasses("sales")} onClick={() => setTab("sales")}>Sales</button>
          <button className={tabClasses("users")} onClick={() => setTab("users")}>Users</button>
        </div>

        <div className="space-y-6">
          {tab === "products" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-700">Manage Products</h2>
                <Link href="/admin/add-product"> <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Product</button>
                </Link>
              </div>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">Sample Product</td>
                    <td className="p-3">$10</td>
                    <td className="p-3">Clayware</td>
                    <td className="p-3 space-x-2">
                      <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">Edit</button>
                      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {tab === "stock" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stock Overview</h2>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">Product</th>
                    <th className="p-3">Available Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">Sample Product</td>
                    <td className="p-3">25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {tab === "orders" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Orders</h2>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">Order ID</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">#12345</td>
                    <td className="p-3">John Doe</td>
                    <td className="p-3">Shipped</td>
                    <td className="p-3">$100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {tab === "sales" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sales Summary</h2>
              <p className="text-lg text-gray-600">Total Sales: <span className="font-bold text-green-600">$5000</span></p>
              <p className="text-lg text-gray-600">Total Orders: <span className="font-bold text-blue-600">150</span></p>
            </div>
          )}

          {tab === "users" && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">User Management</h2>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">User ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3">U001</td>
                    <td className="p-3">Jane Smith</td>
                    <td className="p-3">jane@example.com</td>
                    <td className="p-3">
                      <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
