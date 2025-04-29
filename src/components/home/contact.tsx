'use client';

import { Button } from '@/components/ui/button';

export default function Contact() {

  return (
    <section className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Get in Touch</h2>
        <p className="text-lg text-foreground mb-8">
          Ready to start your next painting project? Contact us today! <br />
          1345 6th Avenue, Monte Vista, Colorado
        </p>
        <Button asChild size="lg" variant="default" className="text-lg font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </section>
  );
}