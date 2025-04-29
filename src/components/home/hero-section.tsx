'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative flex items-center justify-center text-center text-white min-h-[calc(100vh-100px)] overflow-hidden opacity-0 transition-opacity duration-1000">
      <Image
        src="/assets/PrecisionPaintProsHeroImage.jpg"
        alt="Professional painter applying paint to a wall"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="absolute inset-0 z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 px-4 py-16 slide-in-bottom">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-pulse">
          Precision Paint Pros
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Painting Your Perfect Finish in Monte Vista & Beyond
        </p>
        <Button size="lg" variant="default" className="text-lg font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Get a Free Estimate
        </Button>
      </div>
    </section>
  );
}