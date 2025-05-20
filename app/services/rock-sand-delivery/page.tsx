"use client";
import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/rocksand1.jpg', alt: 'Rock and sand delivery 1' },
  { src: '/images/rocksand2.jpg', alt: 'Rock and sand delivery 2' },
];

export default function RockSandDeliveryPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-[#0B1E4A]">Rock & Sand Delivery</h1>
      <p className="mb-6 text-black">We deliver a full range of rock, sand, and fill material straight to your site—on time and as specified. Get the materials you need to keep your project moving.</p>
      <div className="w-full h-96 bg-slate-200 flex items-center justify-center rounded-lg shadow-inner relative overflow-hidden">
        <button
          aria-label="Previous"
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
        >
          <span className="text-2xl text-[#0B1E4A]">&#8592;</span>
        </button>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="object-cover w-full h-full rounded-lg transition-all duration-500"
        />
        <button
          aria-label="Next"
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-10"
        >
          <span className="text-2xl text-[#0B1E4A]">&#8594;</span>
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-[#0B1E4A]' : 'bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
