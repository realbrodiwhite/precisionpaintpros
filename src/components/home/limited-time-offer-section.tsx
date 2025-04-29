'use client';

import { Button } from '@/components/ui/button';

export default function LimitedTimeOfferSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-accent text-white text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="animate-spray-on-off"> {/* Apply spray animation here */}
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-xl mb-6">Get 10% off your first interior painting project!</p>
          <Button variant="secondary" size="lg" className="font-bold hover:bg-white hover:text-primary transition-colors duration-300 shadow-lg">
            Claim Your Discount
          </Button>
        </div>
      </div>
    </section>
  );
}