"use client";
import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/demolition1.jpg', alt: 'Demolition work 1' },
  { src: '/images/demolition2.jpg', alt: 'Demolition work 2' },
];

export default function DemolitionPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-[#0B1E4A]">Demolition</h1>
      <p className="mb-8 text-black text-lg leading-relaxed">
        We perform safe, efficient demolition work for structures of all sizes. Our team manages every aspect, from preparation to debris removal, ensuring your site is ready for what’s next.
      </p>

      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg border border-slate-300">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-cover transition-all duration-500"
        />

        <button
          onClick={goToPrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white z-10"
        >
          <span className="text-2xl text-[#0B1E4A]">&#8592;</span>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white z-10"
        >
          <span className="text-2xl text-[#0B1E4A]">&#8594;</span>
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? 'bg-[#0B1E4A]' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}