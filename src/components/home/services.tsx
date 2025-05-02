
'use client';

import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import InteriorPainting from '@/assets/InteriorPainting-PrecisionPaintPros.webp';
import ExteriorPainting from '@/assets/ExteriorPainting-PrecisionPaintPros.webp';
import CommercialPainting from '@/assets/CommercialPainting-PrecisionPaintPros.webp';
import ResidentialPainting from '@/assets/ResidentialPainting-PrecisionPaintPros.webp';
import ColorConsultation from '@/assets/ColorConsultation-PrecisionPaintPlus.webp';
import CurbFaceAddressPainting from "@/assets/CurbFaceAddressPainting-PrecisionPaintPros.webp";
import ParkingLotLinePainting from "@/assets/ParkingLotLinePainting-PrecisionPaintPros.webp";
import FencePainting from "@/assets/FencePainting-PrecisionPaintPros.webp";
import TrimRefinishing from "@/assets/TrimRefinishing-PrecisionPaintPros.webp";
import CabinetRefinishing from "@/assets/CabinetRefinishing-PrecisionPaintPros.webp";
import DrivewayPainting from "@/assets/DrivewayPainting-PrecisionPaintPros.webp";
import TrafficPainting from "@/assets/TrafficPainting-PrecisionPaintPros.webp";
import ConcretePainting from "@/assets/ConcretePainting-PrecisionPaintPros.webp";

const servicesData = [
  {
    name: 'Interior Painting',
    description: 'Transform your interiors with our expert painting services.',
    image: InteriorPainting,
  },
  {
    name: 'Exterior Painting',
    description: 'Protect and beautify your property with our exterior painting solutions.',
    image: ExteriorPainting,
  },
  {
    name: 'Commercial Painting',
    description: 'Enhance your business space with our professional commercial painting services.',
    image: CommercialPainting,
  },
  {
    name: 'Residential Painting',
    description: 'Make your house a home with our quality residential painting services.',
    image: ResidentialPainting,
  },
  {
    name: 'Curb Face Address Painting',
    description: 'Enhance your curb appeal with our custom address painting services.',
    image: CurbFaceAddressPainting,
  },
  {
    name: 'Parking Lot Line Painting',
    description: 'Ensure safety and organization with our professional parking lot line striping services.',
    image: ParkingLotLinePainting,
  },
  {
    name: 'Color Consultation',
    description: 'Get expert advice on choosing the perfect colors for your project.',
    image: ColorConsultation,
   },
  {
    name: 'Fence Painting',
    description: 'Protect and enhance your fence with our quality painting services.',
    image: FencePainting,
  },
  {
    name: 'Trim Refinishing',
    description: 'Revitalize your home\'s trim with our expert refinishing services.',
    image: TrimRefinishing,
  },
  {
    name: 'Cabinet Refinishing',
    description: 'Update your kitchen or bathroom with our cabinet refinishing services.',
    image: CabinetRefinishing,
  },
  {
    name: 'Driveway Painting',
    description: 'Improve the appearance and durability of your driveway with our painting services.',
    image: DrivewayPainting
  },
  {
    name: 'Traffic Painting',
    description: 'Get expert advice on choosing the perfect colors for your project.',
    image: TrafficPainting,
  },
  {
    name: 'Concrete Painting',
    description: 'Beautify and protect your concrete surfaces with our painting services.',
    image: ConcretePainting,
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
                className={cn("bg-card border border-border rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2",
                  `zoom-in-${index * 100}`
                )}
              >


                <Image
                  src={service.image}
                  alt={service.name}
                  width={600}
                  height={400}
                  className="rounded-t-xl object-cover h-48 w-full"
                  loading="lazy" 
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
