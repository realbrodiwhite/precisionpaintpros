'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function PromotionalBanner() {

  return (
    <section className={cn("py-16 bg-accent-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container my-12 overflow-hidden fade-in")}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6 slide-in-left">Year-Round Savings!</h2>
        <p className="text-lg text-foreground mb-8 fade-in delay-200">
          Enjoy great deals throughout the year with Precision Paint Pros. Ask about our First-Time Customer Discount!
        </p>
        <Button variant="default" size="lg" className="font-bold hover:bg-primary/90 transition-colors text-white text-sm px-5 py-2 zoom-in delay-400">
          Learn More About Offers
        </Button>
      </div>
    </section>
  );
}