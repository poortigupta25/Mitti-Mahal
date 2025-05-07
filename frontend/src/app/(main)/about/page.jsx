import React from 'react';

const About = () => {
  return (
    <div className="bg-stone-100 min-h-screen p-8 text-amber-800 font-sans">
      {/* About Section */}
      <section className="bg-orange-100 p-6 rounded-lg mb-6 shadow">
        <h1 className="text-3xl font-bold text-orange-700 mb-2">About Us</h1>
        <p className="text-base leading-relaxed">
          Welcome to our space! We are a team of passionate creators dedicated to delivering high-quality content and experiences.
          Our mission is rooted in simplicity, warmth, and trust — much like the earthy tones of this page.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-amber-200 p-6 rounded-lg mb-6 shadow">
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">Our Story</h2>
        <p className="text-base leading-relaxed">
          Founded in a small studio with big dreams, we grew through a blend of creativity, hard work, and a desire to make a difference.
          Each phase of our journey is inspired by organic connection and natural beauty.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-amber-300 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-amber-900 mb-2">What We Value</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Authenticity</li>
          <li>Quality over quantity</li>
          <li>Kindness in all interactions</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
