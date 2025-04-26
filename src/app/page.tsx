'use client';

import { Button } from '@/components/ui/button';
import { ServicesSection } from '@/components/home/services-section';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef(null);
  const promoRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for earlier trigger
      }
    );

    const currentRefs = [
      heroRef.current,
      promoRef.current,
      servicesRef.current,
      testimonialsRef.current,
      contactRef.current
    ];

    currentRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col space-y-16"> {/* Added space between sections */}
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 text-center overflow-hidden" // Adjusted min-height for header space
      >
        {/* Background Image */}
        <Image
          // Using a placeholder relevant to painting/home improvement instead of a specific product
          src="https://picsum.photos/seed/paintjob/1920/1080"
          alt="Professional painting equipment"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 opacity-40" // Added opacity
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 flex flex-col items-center">
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 drop-shadow-md slide-in-bottom">
             Precision Paint Pros
          </h1>
           <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            Painting Your Perfect Finish in Monte Vista &amp; Surrounding Areas
          </p>
           <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform slide-in-bottom" style={{ animationDelay: '0.4s' }}>
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section
        ref={promoRef}
        className="py-12 bg-secondary rounded-3xl shadow-lg overflow-hidden relative mx-4 md:mx-8 lg:mx-auto lg:container" // Added container and margins
      >
        <div className="container mx-auto text-center relative z-10 px-4">
           <h2 className="text-3xl font-semibold text-primary mb-4 animate-spray-on-off" style={{ animationDelay: '0s' }}>
            Limited Time Offer
          </h2>
           <p className="text-foreground text-lg mb-6 animate-spray-on-off" style={{ animationDelay: '0.2s' }}>
            First-time customers get <span className="font-bold text-accent">15% off</span> any painting service!
          </p>
           <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full mt-6 animate-spray-on-off shadow-md transform hover:scale-105 transition-transform" style={{ animationDelay: '0.4s' }}>
            Claim Your Discount
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection ref={servicesRef} />

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-16 bg-background rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container" // Added container and margins
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-card-foreground italic mb-4">
                "Precision Paint Pros exceeded our expectations. The team was
                professional, punctual, and delivered exceptional quality. We
                highly recommend them!"
              </p>
              <p className="text-primary mt-4 font-semibold">- John and
                Sarah Miller</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-card-foreground italic mb-4">
                "From start to finish, the service was top-notch. Our home has
                never looked better. Thank you, Precision Paint Pros!"
              </p>
              <p className="text-primary mt-4 font-semibold">- Emily
                Thompson</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-card-foreground italic mb-4">
                "Great attention to detail and excellent customer service. We
                were very impressed with their commitment to getting the job
                done right."
              </p>
              <p className="text-primary mt-4 font-semibold">- David and
                Lisa Garcia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-16" // Added container and margins
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and let us bring your vision to life with precision and care.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform">
            Request Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}
