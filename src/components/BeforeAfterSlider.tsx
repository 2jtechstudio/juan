"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  altBefore = "Before image",
  altAfter = "After image",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded shadow-lg cursor-ew-resize"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After image (bottom layer) */}
      <Image
        src={afterImage}
        alt={altAfter}
        fill
        className="object-cover absolute top-0 left-0 z-0"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Before image (top layer, partially clipped) */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={altBefore}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 h-full w-1 bg-white z-20"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      />
    </div>
  );
}