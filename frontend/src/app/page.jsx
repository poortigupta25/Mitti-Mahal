// // "use client";
// // import Footer from "@/components/Footer";
// // import Navbar from "@/components/Navbar";
// // import Link from "next/link";
// // import { ArrowRight, Star } from "lucide-react";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Navbar />

// //       {/* Hero Section */}
// //       <section className="relative w-full">
// //         <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
// //           <img className="w-full h-full object-cover" alt="Pottery hero image" src="./pexels-retosatti-22823.webp" />
// //           <div className="absolute inset-0 bg-black/30" />
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <div className="text-center max-w-3xl px-6">
// //               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
// //                 Welcome to Mitti Mahal
// //               </h1>
// //               <p className="mb-8 text-lg md:text-xl text-white drop-shadow-md">
// //                 Discover the beauty of handcrafted pottery. Each piece is a unique blend of tradition and artistry,
// //                 bringing warmth and elegance to your home.
// //               </p>
// //               <div className="flex flex-col sm:flex-row justify-center gap-4">
// //                 <Link
// //                   href="/shop"
// //                   className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
// //                 >
// //                   Shop Now
// //                   <ArrowRight size={18} />
// //                 </Link>
// //                 <Link
// //                   href="/about"
// //                   className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-amber-900 font-medium py-3 px-8 rounded-full transition-all duration-300"
// //                 >
// //                   Learn More
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Categories */}
// //       <section className="py-16 bg-amber-50">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Craft Categories</h2>
// //             <p className="text-amber-800/80 max-w-2xl mx-auto">
// //               Explore our diverse collection of handcrafted pottery, each piece telling a unique story of tradition and
// //               craftsmanship.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
// //             <CategoryCard title="Vases" image="https://dummyimage.com/420x260" count={12} />
// //             <CategoryCard title="Bowls" image="https://dummyimage.com/421x261" count={8} />
// //             <CategoryCard title="Plates" image="https://dummyimage.com/422x262" count={15} />
// //             <CategoryCard title="Mugs" image="https://dummyimage.com/423x263" count={10} />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Products */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="flex flex-col md:flex-row justify-between items-center mb-12">
// //             <div>
// //               <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">Featured Products</h2>
// //               <p className="text-amber-800/80">Handpicked pottery that showcases our finest craftsmanship</p>
// //             </div>
// //             <Link
// //               href="/shop"
// //               className="mt-4 md:mt-0 inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
// //             >
// //               View All Products
// //               <ArrowRight size={18} className="ml-2" />
// //             </Link>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
// //             <ProductCard
// //               title="Elegant Vase"
// //               category="VASES"
// //               price={25.0}
// //               image="https://dummyimage.com/420x260"
// //               rating={4.5}
// //             />
// //             <ProductCard
// //               title="Rustic Bowl"
// //               category="BOWLS"
// //               price={18.0}
// //               image="https://dummyimage.com/421x261"
// //               rating={4.8}
// //             />
// //             <ProductCard
// //               title="Ceramic Plate"
// //               category="PLATES"
// //               price={12.0}
// //               image="https://dummyimage.com/422x262"
// //               rating={4.2}
// //             />
// //             <ProductCard
// //               title="Artisan Mug"
// //               category="MUGS"
// //               price={15.0}
// //               image="https://dummyimage.com/423x263"
// //               rating={4.7}
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonial Section */}
// //       <section className="py-16 bg-amber-100">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
// //             <p className="text-amber-800/80 max-w-2xl mx-auto">
// //               Hear from people who have brought our pottery into their homes
// //             </p>
// //           </div>

// //           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10">
// //             <div className="flex flex-col items-center text-center">
// //               <div className="flex mb-4">
// //                 {[...Array(5)].map((_, i) => (
// //                   <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
// //                 ))}
// //               </div>
// //               <p className="text-lg md:text-xl italic text-gray-700 mb-6">
// //                 "The craftsmanship of these pottery pieces is exceptional. Each item tells a story and adds character to
// //                 my home. I'm absolutely in love with my collection from Mitti Mahal."
// //               </p>
// //               <div>
// //                 <h4 className="font-semibold text-amber-900">Sarah Johnson</h4>
// //                 <p className="text-amber-700/70 text-sm">Loyal Customer</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </div>
// //   );
// // }

// // // Component for category cards
// // function CategoryCard({ title, image, count }) {
// //   return (
// //     <Link href={`/category/${title.toLowerCase()}`} className="group">
// //       <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
// //         <img
// //           src={image || "/placeholder.svg"}
// //           alt={title}
// //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
// //           <h3 className="text-white font-medium text-lg">{title}</h3>
// //           <p className="text-white/80 text-sm">{count} products</p>
// //         </div>
// //       </div>
// //     </Link>
// //   );
// // }

// // // Component for product cards
// // function ProductCard({ title, category, price, image, rating }) {
// //   return (
// //     <div className="group">
// //       <div className="relative overflow-hidden rounded-lg h-64 mb-4">
// //         <img
// //           src={image || "/placeholder.svg"}
// //           alt={title}
// //           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
// //         />
// //         <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-amber-900"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
// //             />
// //           </svg>
// //         </div>
// //       </div>
// //       <div>
// //         <span className="text-xs font-medium tracking-wider text-amber-700">{category}</span>
// //         <h3 className="text-lg font-medium text-amber-900 group-hover:text-amber-700 transition-colors">{title}</h3>
// //         <div className="flex items-center justify-between mt-1">
// //           <p className="font-medium text-amber-900">${price.toFixed(2)}</p>
// //           <div className="flex items-center">
// //             <Star className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
// //             <span className="text-sm text-amber-700">{rating}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // page.jsx
// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { ArrowRight, Star } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col bg-amber-50">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="relative w-full">
//         <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
//           <img className="w-full h-full object-cover" alt="Pottery hero" src="./pexels-retosatti-22823.webp" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center max-w-3xl px-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-6 drop-shadow">
//                 Welcome to Mitti Mahal
//               </h1>
//               <p className="mb-8 text-lg md:text-xl text-amber-100">
//                 Discover the beauty of handcrafted pottery. Each piece blends tradition and artistry.
//               </p>
//               <div className="flex flex-col sm:flex-row justify-center gap-4">
//                 <Link
//                   href="/shop"
//                   className="inline-flex items-center bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-full transition"
//                 >
//                   Shop Now <ArrowRight size={18} className="ml-2" />
//                 </Link>
//                 <Link
//                   href="/about"
//                   className="inline-flex items-center bg-white/90 hover:bg-white text-amber-900 font-medium py-3 px-8 rounded-full transition"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Categories */}
//       <section className="py-16 bg-stone-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Craft Categories</h2>
//             <p className="text-amber-800 max-w-2xl mx-auto">
//               Explore handcrafted pottery, each telling a unique story of tradition.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {["Vases", "Bowls", "Plates", "Mugs"].map((item) => (
//               <CategoryCard key={item} title={item} image={`https://dummyimage.com/420x260`} count={12} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// function CategoryCard({ title, image, count }) {
//   return (
//     <Link href={`/category/${title.toLowerCase()}`} className="group">
//       <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
//         <img src={image} alt={title} className="w-full h-full object-cover transition group-hover:scale-110" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
//           <h3 className="text-white font-semibold text-lg">{title}</h3>
//           <p className="text-white/80 text-sm">{count} products</p>
//         </div>
//       </div>
//     </Link>
//   );
// }



"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-neutral-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
          <img className="w-full h-full object-cover" alt="Pottery hero" src="./pexels-retosatti-22823.webp" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-6 drop-shadow-lg">
                Welcome to Mitti Mahal
              </h1>
              <p className="mb-8 text-lg md:text-xl text-amber-200 drop-shadow">
                Discover handcrafted pottery that blends tradition and timeless artistry.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-8 rounded-full transition"
                >
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-amber-900 font-medium py-3 px-8 rounded-full transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-4">Our Craft Categories</h2>
            <p className="text-amber-300 max-w-2xl mx-auto">
              Explore our curated collection of pottery, where each piece tells a unique story.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Vases", "Bowls", "Plates", "Mugs"].map((item) => (
              <CategoryCard key={item} title={item} image={`https://dummyimage.com/420x260`} count={12} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-2">Featured Products</h2>
              <p className="text-amber-300">
                Handpicked pottery showcasing our finest craftsmanship.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 inline-flex items-center text-amber-400 hover:text-amber-200 font-medium"
            >
              View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard title="Elegant Vase" category="VASES" price={25.0} image="https://dummyimage.com/420x260" rating={4.5} />
            <ProductCard title="Rustic Bowl" category="BOWLS" price={18.0} image="https://dummyimage.com/421x261" rating={4.8} />
            <ProductCard title="Ceramic Plate" category="PLATES" price={12.0} image="https://dummyimage.com/422x262" rating={4.2} />
            <ProductCard title="Artisan Mug" category="MUGS" price={15.0} image="https://dummyimage.com/423x263" rating={4.7} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-4">What Our Customers Say</h2>
          <p className="text-amber-300 max-w-2xl mx-auto mb-8">
            Hear from people who have brought our pottery into their homes.
          </p>
          <div className="bg-neutral-900 rounded-xl shadow-md p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-lg italic text-neutral-200 mb-4">
              "The craftsmanship is exceptional. Each item adds warmth and character to my space."
            </p>
            <div>
              <h4 className="font-semibold text-amber-100">Sarah Johnson</h4>
              <p className="text-amber-400 text-sm">Loyal Customer</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CategoryCard({ title, image, count }) {
  return (
    <Link href={`/category/${title.toLowerCase()}`} className="group">
      <div className="relative overflow-hidden rounded-lg h-48 md:h-64 bg-neutral-700">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-amber-100 font-semibold text-lg">{title}</h3>
          <p className="text-amber-300 text-sm">{count} products</p>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ title, category, price, image, rating }) {
  return (
    <div className="group bg-neutral-800 rounded-lg shadow hover:shadow-lg transition">
      <div className="relative overflow-hidden h-64 rounded-t-lg">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition" />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium tracking-wide text-amber-400">{category}</span>
        <h3 className="text-lg font-semibold text-amber-100 group-hover:text-amber-300 transition">{title}</h3>
        <div className="flex items-center justify-between mt-1">
          <p className="font-bold text-amber-200">${price.toFixed(2)}</p>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
            <span className="text-sm text-amber-400">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
