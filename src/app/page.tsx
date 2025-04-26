'use client';

import { Button } from '@/components/ui/button';
import { ServicesSection } from '@/components/home/services-section';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

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
            const animationClass = entry.target.getAttribute('data-animation') || 'fade-in';
             entry.target.classList.add(animationClass);
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
        data-animation="fade-in"
        className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center py-20 text-center overflow-hidden opacity-0" // Adjusted min-height for header+announcement, start with opacity 0
      >
        {/* Background Image */}
        <Image
          src="/assets/Graco_x17.png"
          alt="Graco Paint Sprayer"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="absolute inset-0 z-0 opacity-40" // Added opacity
          priority // Load hero image faster
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>

        {/* Content */}
        <div className="container relative z-20 mx-auto px-4 flex flex-col items-center">
           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 drop-shadow-md opacity-0 slide-in-bottom" style={{ animationDelay: '0.1s' }}>
             Precision Paint Pros
          </h1>
           <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl opacity-0 slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            Painting Your Perfect Finish in Monte Vista &amp; Surrounding Areas
          </p>
           <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform opacity-0 slide-in-bottom" style={{ animationDelay: '0.5s' }}>
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section
        ref={promoRef}
        data-animation="fade-in"
        className="py-12 bg-secondary-section rounded-3xl shadow-lg overflow-hidden relative mx-4 md:mx-8 lg:mx-auto lg:container opacity-0" // Added container and margins, start with opacity 0
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
        data-animation="fade-in"
        className="py-16 bg-background rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container opacity-0" // Added container and margins, start with opacity 0
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-primary text-center mb-10 slide-in-bottom">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300 opacity-0 zoom-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-card-foreground italic mb-4">
                "Precision Paint Pros exceeded our expectations. The team was
                professional, punctual, and delivered exceptional quality. We
                highly recommend them!"
              </p>
              <p className="text-primary mt-4 font-semibold">- John and
                Sarah Miller</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300 opacity-0 zoom-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-card-foreground italic mb-4">
                "From start to finish, the service was top-notch. Our home has
                never looked better. Thank you, Precision Paint Pros!"
              </p>
              <p className="text-primary mt-4 font-semibold">- Emily
                Thompson</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 transform hover:scale-105 transition-transform duration-300 opacity-0 zoom-in" style={{ animationDelay: '0.6s' }}>
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
        data-animation="fade-in"
        className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-16 opacity-0" // Added container and margins, start with opacity 0
      >
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-primary mb-6 slide-in-bottom">
            Ready to Transform Your Space?
          </h2>
          <p className="text-foreground mb-8 max-w-2xl mx-auto opacity-0 slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            Contact us today for a personalized quote and let us bring your vision to life with precision and care.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform opacity-0 slide-in-bottom" style={{ animationDelay: '0.4s' }}>
            Request Your Free Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}
