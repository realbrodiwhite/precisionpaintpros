
'use client';

import Image from 'next/image';
import React, {forwardRef, useEffect, useRef} from 'react';
import { cn } from '@/lib/utils';

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger animation when 10% of the element is visible
      }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    return () => {
      cardRefs.current.forEach((cardRef) => {
        if (cardRef) {
          observer.unobserve(cardRef);
        }
      });
    };
  }, []);


  return (
    <section ref={ref} className="py-16 bg-secondary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container overflow-hidden"> {/* Added container and margins */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={cn(
                "bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 opacity-0", // Start with opacity 0 for animation
                // Add animation delay based on index for staggered effect
                `delay-${index * 100}` // Tailwind doesn't have delay utilities by default, add manually or use inline style
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
});

ServicesSection.displayName = 'ServicesSection';

