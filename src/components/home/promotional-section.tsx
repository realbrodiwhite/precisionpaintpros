'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';

export default function PromotionalSection() {
  const promotionalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (promotionalRef.current) observer.observe(promotionalRef.current);

    return () => {
      if (promotionalRef.current) observer.unobserve(promotionalRef.current);
    };
  }, []);

  return (
    <section ref={promotionalRef} className={cn("py-16 bg-accent-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container my-12 overflow-hidden")}>
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