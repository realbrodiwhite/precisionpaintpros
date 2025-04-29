'use client';

import { Button } from '@/components/ui/button';

export default function CustomerTestimonialsSection() {
  return (
    <section className="py-16 bg-secondary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Testimonials - Replace with dynamic data */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-md zoom-in" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-foreground mb-4">"Precision Paint Pros did an amazing job! Highly recommend their services for anyone needing quality painting."</p>
              <p className="font-semibold text-primary">- Satisfied Customer {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}