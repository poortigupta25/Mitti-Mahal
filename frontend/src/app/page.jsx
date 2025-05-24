"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-neutral-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Pottery hero"
            src="slide.jpg"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-6 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow">
                Welcome to Mitti Mahal
              </h1>
              <p className="mb-8 text-lg md:text-xl drop-shadow">
                Discover the warmth of handcrafted pottery rooted in tradition and elegance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/browse-products"
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition"
                >
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-amber-800 font-medium py-3 px-8 rounded-full transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">About Mitti Mahal</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            At Mitti Mahal, we shape clay into culture. Our artisans blend traditional pottery methods
            with modern design sensibilities to create timeless homeware that celebrates craftsmanship, sustainability, and soul.
          </p>
          <Link href="/about" className="text-amber-600 hover:underline font-medium">
            Read Our Full Story →
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Craft Categories</h2>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Explore curated collections — from sculptural vases to everyday mugs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Vases", "Bowls", "Plates", "Mugs"].map((item, i) => (
              <CategoryCard
                key={item}
                title={item}
                count={12 + i}
                image={`https://source.unsplash.com/420x260/?${item},pottery`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">The Art of Our Work</h2>
            <p className="text-neutral-700 mb-4">
              Each piece at Mitti Mahal passes through the careful hands of passionate artisans —
              from sourcing clay to hand-painting. We believe in slow, sustainable creation.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600">
              <li>Locally sourced natural clay</li>
              <li>Hand-molded & wheel-thrown</li>
              <li>Natural glazes & safe finishes</li>
              <li>Fired in traditional kilns</li>
            </ul>
          </div>
          <img
            src="one.jpg"
            alt="Craft process"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">Featured Products</h2>
              <p className="text-amber-800">Handpicked pieces that define our craft</p>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
            >
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard title="Elegant Vase" category="VASES" price={25} image="https://source.unsplash.com/420x260/?vase" rating={4.5} />
            <ProductCard title="Rustic Bowl" category="BOWLS" price={18} image="https://source.unsplash.com/421x261/?bowl" rating={4.8} />
            <ProductCard title="Ceramic Plate" category="PLATES" price={12} image="https://source.unsplash.com/422x262/?plate" rating={4.2} />
            <ProductCard title="Artisan Mug" category="MUGS" price={15} image="https://source.unsplash.com/423x263/?mug" rating={4.7} />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Stay Connected</h2>
          <p className="text-neutral-700 mb-6">Join our newsletter to get stories, offers, and behind-the-scenes insights from the kiln.</p>
          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full sm:w-auto px-4 py-3 rounded-lg border border-neutral-300 focus:ring-amber-500"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">Our Pottery in the Wild</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/300x300/?pottery,home,${i}`}
                alt={`gallery-${i}`}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

// Components (can be extracted into separate files if needed)

const CategoryCard = ({ title, image, count }) => (
  <Link href={`/category/${title.toLowerCase()}`} className="group">
    <div className="relative overflow-hidden rounded-lg h-48 md:h-64 shadow-md bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-white/80 text-sm">{count} products</p>
      </div>
    </div>
  </Link>
);

const ProductCard = ({ title, category, price, image, rating }) => (
  <div className="group bg-white rounded-lg shadow hover:shadow-lg transition">
    <div className="relative overflow-hidden h-64 rounded-t-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition"
      />
    </div>
    <div className="p-4">
      <span className="text-xs font-medium tracking-wide text-amber-500">{category}</span>
      <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-amber-700 transition">
        {title}
      </h3>
      <div className="flex items-center justify-between mt-1">
        <p className="font-bold text-amber-700">${price.toFixed(2)}</p>
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
          <span className="text-sm text-amber-700">{rating}</span>
        </div>
      </div>
    </div>
  </div>
);
