
'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const servicesData = [
  {
    name: 'Interior Painting',
    description: 'Transform your interiors with our expert painting services.',
    image: '/assets/InteriorPainting-PrecisionPaintPros.webp',
  },
  {  
    name: 'Exterior Painting',
    description: 'Protect and beautify your property with our exterior painting solutions.',
    image: '/assets/ExteriorPainting-PrecisionPaintPros.webp',
  },
  {  
    name: 'Commercial Painting',
    description: 'Enhance your business space with our professional commercial painting services.',
    image: '/assets/CommercialPainting-PrecisionPaintPros.webp',
  },
  {  
    name: 'Residential Painting',
    description: 'Make your house a home with our quality residential painting services.',
    image: '/assets/ResidentialPainting-PrecisionPaintPros.webp'
  },
  {  
    name: 'Color Consultation',
    description: 'Get expert advice on choosing the perfect colors for your project.',
    image: '/assets/ColorConsultation-PrecisionPaintPlus.webp'
  },
 {  
    name: 'Parking Lot Line Painting',
    description: 'Expert line painting for parking lots and other surfaces.',
    image: '/assets/LinePainting-PrecisionPaintPros.webp'
  }
  
];


const Services = () => {

  return (
      <section className="py-16 bg-secondary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container overflow-hidden fade-in">
        {/* Added container and margins */}
        <div className="container mx-auto px-4"> 
          <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
            Pro Painting Services

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className={cn("bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2",
                  `zoom-in-${index * 100}`
                )}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={600}
                    height={400}
                    className="rounded-t-xl object-cover object-center h-48 w-full"
                    loading="lazy" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-foreground">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Services

