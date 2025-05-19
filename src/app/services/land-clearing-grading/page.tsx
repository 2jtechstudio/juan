"use client";
import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/landclearing1.jpg', alt: 'Land clearing 1' },
  { src: '/images/landclearing2.jpg', alt: 'Land clearing 2' },
  { src: '/images/landclearing3.jpg', alt: 'Land clearing 3' },
  { src: '/images/landclearing4.jpg', alt: 'Land clearing 4' },
  { src: '/images/landclearing5.jpg', alt: 'Land clearing 5' },
];

export default function LandClearingGradingPage() {
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
      <h1 className="text-3xl font-bold mb-4 text-[#0B1E4A]">Land Clearing & Grading</h1>
      <p className="mb-6 text-black">Let us prepare your property for construction or landscaping with expert land clearing and grading services. We level, smooth, and clear sites for safe, ready-to-build results.</p>
      <div className="w-full h-56 bg-slate-200 flex items-center justify-center rounded-lg shadow-inner relative overflow-hidden">
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
