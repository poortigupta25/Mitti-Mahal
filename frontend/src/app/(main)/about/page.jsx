'use client';
import React from "react";
import Image from "next/image";
import { Leaf, Users, Sparkles, Brush } from "lucide-react";
const About = () => {
  return (
    <div className="bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src="/"
          alt="Mitti Mahal pottery banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Mitti Mahal — Where Earth Meets Art
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-amber-600">Our Story</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Welcome to Mitti Mahal — a sanctuary for traditional artistry and sustainable living.
              Each piece we create is a blend of cultural legacy, skillful hands, and soulful intent.
            </p>
          </div>
          <Image
            src="/tow.jpg"
            alt="Handmade pottery"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </section>

        {/* Mission Section */}
        <section className="bg-amber-50 dark:bg-amber-900 p-10 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center">
          <Leaf className="w-12 h-12 text-amber-600 dark:text-white" />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-amber-700 dark:text-white">Our Mission</h3>
            <p className="text-neutral-700 dark:text-amber-200">
              To preserve the timeless art of pottery while embracing modern design. We aim to reconnect
              people to nature and the joy of handmade craftsmanship.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="space-y-8">
          <h3 className="text-3xl font-bold text-amber-600">Our Process</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <ol className="list-decimal list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Selecting locally sourced, high-quality clay.</li>
              <li>Hand-shaping each piece with precision and love.</li>
              <li>Drying and refining for smooth finishes.</li>
              <li>Firing in small batches for durability.</li>
              <li>Hand-painting and glazing with care.</li>
            </ol>
            <Image
              src="/ourproces.jpg"
              alt="Pottery process"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Meet the Team */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl font-bold text-amber-600">Meet Our Artisans</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Asha Verma',
                role: 'Master potter with 20+ years of experience, known for elegant vase designs.',
                image: '/images/team/asha.jpg'
              },
              {
                name: 'Rajesh Patel',
                role: 'Lead glazer and painter, bringing color and detail to every creation.',
                image: '/images/team/rajesh.jpg'
              },
              {
                name: 'Fatima Khan',
                role: 'Designer blending modern styles with traditional techniques.',
                image: '/images/team/fatima.jpg'
              },
              {
                name: 'Karan Singh',
                role: 'Workshop coordinator ensuring quality in every piece.',
                image: '/images/team/karan.jpg'
              },
            ].map(({ name, role, image }) => (
              <div key={name} className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md text-center">
                <Image
                  src={image}
                  alt={name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full mb-3 object-cover h-24 w-24"
                />
                <h4 className="text-lg font-semibold text-amber-700 dark:text-amber-200">{name}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="bg-green-50 dark:bg-green-900 p-10 rounded-xl shadow-md flex flex-col md:flex-row gap-8 items-center">
          <Sparkles className="w-12 h-12 text-green-700 dark:text-white" />
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-green-800 dark:text-white">Our Sustainability Promise</h3>
            <p className="text-neutral-700 dark:text-green-200">
              Every piece at Mitti Mahal honors the earth that gives us clay. We use natural, eco-friendly materials,
              minimize waste, and promote mindful craftsmanship.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;