'use client';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="text-gray-600 body-font bg-gray-100">
        <div className=" mx-auto items-center flex px-0 w-full relative">
          <img
            className="w-full h-[600px] object-cover"
            alt="hero"
            src="./slide.png"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center lg:w-2/3 px-4 ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text drop-shadow-lg">
                Welcome to Mitti Mahal
              </h1>
              <p className="mb-8 leading-relaxed text-black drop-shadow-md">
                Discover the beauty of handcrafted pottery. Each piece is a unique blend of tradition and artistry, bringing warmth and elegance to your home.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-black bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Shop Now
                </button>
                <button className="ml-4 inline-flex text-black bg-transparent border-2 border-black py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-900 rounded text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pottery Collection Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="pottery"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  VASES
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Elegant Vase
                </h2>
                <p className="mt-1">$25.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="pottery"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  BOWLS
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rustic Bowl
                </h2>
                <p className="mt-1">$18.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="pottery"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  PLATES
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Ceramic Plate
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="pottery"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  MUGS
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Artisan Mug
                </h2>
                <p className="mt-1">$15.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home