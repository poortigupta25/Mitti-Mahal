// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-neutral-900 min-h-screen px-6 py-12 text-neutral-100">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Intro Section */}
        <section className="bg-neutral-800 p-6 md:p-10 rounded-xl shadow-md border border-neutral-700">
          <h1 className="text-4xl font-bold text-amber-100 mb-4">About Mitti Mahal</h1>
          <p className="text-amber-300 leading-relaxed text-lg">
            Welcome to Mitti Mahal — where earth meets art. We are artisans and dreamers, crafting
            soulful pottery that celebrates tradition, beauty, and sustainability.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-amber-900 p-6 md:p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-amber-100 mb-4">Our Mission</h2>
          <p className="text-amber-200 leading-relaxed text-base">
            Our mission is to preserve the timeless art of pottery while embracing modern design.
            We aim to create pieces that connect people to nature, culture, and the joy of handmade beauty.
          </p>
        </section>

        {/* Our Process Section */}
        <section className="bg-neutral-800 p-6 md:p-10 rounded-xl shadow-md border border-neutral-700">
          <h2 className="text-3xl font-semibold text-amber-100 mb-4">Our Process</h2>
          <ol className="list-decimal list-inside space-y-2 text-amber-300 text-base">
            <li>Careful selection of high-quality, locally sourced clay.</li>
            <li>Hand-shaping each piece with precision and love.</li>
            <li>Delicate drying and refinement to achieve smooth finishes.</li>
            <li>Firing in small batches to ensure lasting durability.</li>
            <li>Hand-painting and glazing to bring every design to life.</li>
          </ol>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-amber-900 p-6 md:p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-amber-100 mb-4">Meet Our Artisans</h2>
          <p className="text-amber-200 leading-relaxed text-base mb-4">
            Our team is the heart of Mitti Mahal — a family of passionate creators, each bringing
            their unique touch to every piece.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100">Asha Verma</h3>
              <p className="text-amber-300 text-sm">Master potter with 20+ years of experience, known for elegant vase designs.</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100">Rajesh Patel</h3>
              <p className="text-amber-300 text-sm">Lead glazer and painter, bringing color and detail to every creation.</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100">Fatima Khan</h3>
              <p className="text-amber-300 text-sm">Innovative designer blending modern styles with traditional techniques.</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-100">Karan Singh</h3>
              <p className="text-amber-300 text-sm">Workshop coordinator, ensuring every piece meets our quality standards.</p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="bg-neutral-800 p-6 md:p-10 rounded-xl shadow-md border border-neutral-700">
          <h2 className="text-3xl font-semibold text-amber-100 mb-4">Our Commitment to Sustainability</h2>
          <p className="text-amber-300 leading-relaxed text-base">
            At Mitti Mahal, we believe in honoring the earth that gives us clay. We minimize waste,
            use natural materials, and follow eco-friendly practices at every stage. When you choose our pottery,
            you support mindful craftsmanship that cares for both people and the planet.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;
