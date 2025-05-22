"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Box, Users, ShoppingBag, TrendingUp, Star, Package } from "lucide-react";

const AdminDashboard = () => {
  // Sample data - replace with actual API calls
  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    orders: 0,
    revenue: 0,
    lowStock: 0,
    topSelling: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchStats = async () => {
      try {
        // In a real app, you would fetch these from your API
        const mockData = {
          products: 42,
          users: 128,
          orders: 86,
          revenue: 5240,
          lowStock: 5,
          topSelling: [
            { name: "Terracotta Vase", sales: 28 },
            { name: "Handcrafted Bowl", sales: 22 },
            { name: "Artisan Mug Set", sales: 18 },
          ]
        };
        setStats(mockData);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-amber-900 text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-neutral-900">
      {/* Header Section */}
      <section className="py-12 bg-amber-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Mitti Mahal Dashboard
          </h1>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Overview of your pottery business performance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              icon={<Box className="h-8 w-8" />}
              title="Total Products"
              value={stats.products}
              color="bg-amber-100 text-amber-800"
            />
            <StatCard 
              icon={<Users className="h-8 w-8" />}
              title="Registered Users"
              value={stats.users}
              color="bg-green-100 text-green-800"
            />
            <StatCard 
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Total Orders"
              value={stats.orders}
              color="bg-blue-100 text-blue-800"
            />
            <StatCard 
              icon={<TrendingUp className="h-8 w-8" />}
              title="Revenue (₹)"
              value={stats.revenue.toLocaleString()}
              color="bg-purple-100 text-purple-800"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Low Stock Alert */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900">Low Stock</h3>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {stats.lowStock} items
                </span>
              </div>
              <div className="space-y-3">
                {stats.lowStock > 0 ? (
                  Array.from({ length: stats.lowStock }).map((_, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-amber-100 pb-2">
                      <span className="text-amber-800">Product {i+1}</span>
                      <span className="text-red-600 font-medium">Only 2 left</span>
                    </div>
                  ))
                ) : (
                  <p className="text-amber-700">All products are well stocked!</p>
                )}
              </div>
              <Link href="/admin/inventory" className="mt-4 inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium">
                Manage Inventory <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Top Selling</h3>
              <div className="space-y-4">
                {stats.topSelling.map((product, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <Package className="h-5 w-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900">{product.name}</h4>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                        <span className="text-sm text-amber-700">{product.sales} sales</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/admin/products" className="mt-4 inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium">
                View All Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Recent Orders</h3>
              <div className="space-y-3">
                {[
                  { id: "#1001", customer: "Priya Sharma", amount: "₹1,850", status: "Shipped" },
                  { id: "#1000", customer: "Rahul Patel", amount: "₹2,450", status: "Delivered" },
                  { id: "#999", customer: "Ananya Gupta", amount: "₹1,200", status: "Processing" },
                ].map((order, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-amber-100 pb-3">
                    <div>
                      <p className="font-medium text-amber-900">{order.id}</p>
                      <p className="text-sm text-amber-700">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Delivered" ? "bg-green-100 text-green-800" :
                        order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                        "bg-amber-100 text-amber-800"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/admin/orders" className="mt-4 inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium">
                View All Orders <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <DashboardLink 
              icon={<Package className="h-5 w-5" />}
              title="Products"
              href="/admin/manage-product"
              color="bg-amber-100 text-amber-800"
            />
            <DashboardLink 
              icon={<Users className="h-5 w-5" />}
              title="Customers"
              href="/admin/manage-user"
              color="bg-green-100 text-green-800"
            />
            <DashboardLink 
              icon={<ShoppingBag className="h-5 w-5" />}
              title="Orders"
              href="/admin/manage-orders"
              color="bg-blue-100 text-blue-800"
            />
            <DashboardLink 
              icon={<TrendingUp className="h-5 w-5" />}
              title="Reports"
              href="/admin/reports"
              color="bg-purple-100 text-purple-800"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for stat cards
const StatCard = ({ icon, title, value, color }) => (
  <div className={`${color} p-6 rounded-lg shadow-md flex items-center`}>
    <div className="mr-4">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

// Component for quick links
const DashboardLink = ({ icon, title, href, color }) => (
  <Link href={href} className={`${color} p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center`}>
    <div className="mb-2">
      {icon}
    </div>
    <p className="font-medium">{title}</p>
  </Link>
);

export default AdminDashboard;