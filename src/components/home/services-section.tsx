'use client';

import Image from 'next/image';
import React, {forwardRef} from 'react';

const services = [
  {
    name: 'Interior Painting',
    description: 'Transform your interiors with our expert painting services.',
    image: 'https://picsum.photos/id/1047/600/400',
  },
  {
    name: 'Exterior Painting',
    description: 'Protect and beautify your property with our exterior painting solutions.',
    image: 'https://picsum.photos/id/1074/600/400',
  },
  {
    name: 'Commercial Painting',
    description: 'Enhance your business space with our professional commercial painting services.',
    image: 'https://picsum.photos/id/1024/600/400',
  },
  {
    name: 'Residential Painting',
    description: 'Make your house a home with our quality residential painting services.',
    image: 'https://picsum.photos/id/1025/600/400',
  },
  {
    name: 'Color Consultation',
    description: 'Get expert advice on choosing the perfect colors for your project.',
    image: 'https://picsum.photos/id/1062/600/400',
  },
  {
    name: 'Parking Lot Line Painting',
    description: 'Professional line striping for parking lots and other commercial properties.',
    image: 'https://picsum.photos/id/1072/600/400',
  },
];

export const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-16 bg-gray-100 rounded-2xl shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="rounded-t-xl object-cover h-48 w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
