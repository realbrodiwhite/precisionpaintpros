

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroImage from '@/assets/PrecisionPaintPros-HomePageHeroImage.jpg';

export default function Hero() {
    
    return (
        <section className="relative flex items-center justify-center text-center text-white min-h-[calc(100vh-100px)] overflow-hidden transition-opacity duration-1000 fade-in">
            <Image
                src={heroImage}
                alt="Professional painter applying paint to a wall"
                fill
                className="absolute inset-0 object-cover z-0"
                quality={80}
                priority
                placeholder="blur" 
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/80 z-10"></div>
            <div className="relative z-20 px-4 py-16 slide-in-bottom">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-pulse text-black outline-black text-outline-4">Precision Paint Pros</h1>
                <p className="text-lg md:text-2xl mb-8 drop-shadow-md text-black outline-black text-outline-4">Painting Your Perfect Finish in Monte Vista & Beyond</p>
                <Button size="lg" variant="default" className="text-lg font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Get a Free Estimate</Button>
            </div>
        </section>
    );
}
