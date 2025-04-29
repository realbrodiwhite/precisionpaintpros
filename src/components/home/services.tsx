
'use client';

import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const servicesData = [
  {
    name: 'Interior Painting',
    description: 'Transform your interiors with our expert painting services.',
    image: '@/assets/InteriorPainting-PrecisionPaintPros.jpeg',
  },
  {
    name: 'Exterior Painting',
    description: 'Protect and beautify your property with our exterior painting solutions.',
    image: '@/assets/ExteriorPainting-PrecisionPaintPros.jpeg',
  },
  {
    name: 'Commercial Painting',
    description: 'Enhance your business space with our professional commercial painting services.',
    image: '@/assets/CommercialPainting-PrecisionPaintPros.jpeg',
  },
  {
    name: 'Residential Painting',
    description: 'Make your house a home with our quality residential painting services.',
    image: '@/assets/ResidentialPainting-PrecisionPaintPlus.jpeg',
  },
  {
    name: 'Color Consultation',
    description: 'Get expert advice on choosing the perfect colors for your project.',
    image: '@/assets/ColorConsultation-PrecisionPaintPlus.jpeg',
  },
  {
    name: 'Parking Lot Line Painting',
    description: 'Professional line striping for parking lots and other commercial properties.',
    image: '@/assets/ResidentialPainting-PrecisionPaintPlus.jpeg',
  },
];

const Services = () => {

  return (
      <section className="py-16 bg-secondary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container overflow-hidden fade-in">
        {/* Added container and margins */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2" // Start with opacity 0 for animation
                  // Add animation delay based on index for staggered effect
                  // Tailwind doesn't have delay utilities by default, add manually or use inline style
                )}
                style={{ animationDelay: `${index * 100}ms` }} // Inline style for delay
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="rounded-t-xl object-cover h-48 w-full"
                  loading="lazy" // Lazy load images below the fold
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services
