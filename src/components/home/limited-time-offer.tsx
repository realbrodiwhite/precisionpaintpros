

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LimitedTimeOffer() {

    return (
    <section className="bg-primary text-primary-foreground py-8 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Limited Time Offer!</h2>
        <p className="text-lg mb-4">paint 2 bedrooms and get 1 bathroom painted with no labor charges!</p>
        <Button variant="secondary" className="font-bold">
          Get Your Free Estimate
        </Button>
      </div>
    </section>
  );
}