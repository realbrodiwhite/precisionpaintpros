

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LimitedTimeOffer() {

    return (
<section className="bg-primary text-primary-foreground py-8 text-center border-t-3 border-b-3 border-red-500 outline outline-red-500 outline-8 outline-offset-0">
<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
<div className="md:col-span-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-bold mb-2">Limited Time Offer!</h2>
<p className="text-lg mb-0 md:mb-4">paint 2 bedrooms and get 1 bathroom painted with no labor charges!</p>
</div>
<div className="md:col-span-1 flex justify-center md:justify-end">
<Button variant="secondary" className="font-bold w-full md:w-auto">
Get Your Free Estimate
</Button>
</div>
</div>
</section>
  );
}