

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
    
    return (
        <section className="relative flex items-center justify-center text-center text-white flex-grow overflow-hidden transition-opacity duration-1000 fade-in">
            <Image
                src="/assets/PrecisionPaintPros-HomePageHeroImage.webp"
                alt="Professional painter applying paint to a wall"
                fill
                className="absolute inset-0 object-cover z-0"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80} 

            />
            <div className="absolute inset-0 bg-white/40 z-10"></div>
            <div className="relative z-20 px-4 py-16 slide-in-bottom">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 drop-shadow-lg animate-pulse text-black outline-black text-outline-4">Painting Your Perfect Finish</h1>
                <p className="text-2xl md:text-3xl lg:text-4xl mb-8 drop-shadow-md text-black outline-black text-outline-4">in Monte Vista, Alamosa, South Fork & Beyond!</p>
                <Button variant="default" className="font-bold hover:bg-primary/90 transition-colors text-white text-sm px-5 py-2 text-sm px-5 py-2">Get a Free Estimate</Button>
            </div>
        </section>
    );
}
