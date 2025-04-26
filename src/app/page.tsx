'use client';

import {Button} from '@/components/ui/button';
import {ServicesSection} from '@/components/home/services-section';
import Image from 'next/image';
import {useEffect, useRef} from 'react';

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
        threshold: 0.2,
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
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-20 text-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl shadow-lg" // Adjusted min-height
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
            Precision Painting Services
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Transforming spaces with quality and precision in Monte Vista,
            Colorado
          </p>
          <Button className="bg-red-500 text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Promotional Banner Section */}
      <section
        ref={promoRef}
        className="py-12 bg-yellow-50 rounded-2xl shadow-md overflow-hidden relative"
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-semibold text-red-600 mb-4 animate-spray-on-off" style={{ animationDelay: '0s' }}>
            Limited Time Offer
          </h2>
          <p className="text-gray-700 text-lg animate-spray-on-off" style={{ animationDelay: '0.2s' }}>
            First-time customers get 15% off any painting service!
          </p>
          <Button className="bg-blue-500 text-white hover:bg-blue-700 px-6 py-3 rounded-full mt-6 animate-spray-on-off" style={{ animationDelay: '0.4s' }}>
            Learn More
          </Button>
        </div>
         {/* Removed the pulsing background div */}
      </section>

      {/* Services Section */}
      <ServicesSection ref={servicesRef} />

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-16 bg-gray-50 rounded-2xl shadow-md"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-700 italic">
                "Precision Paint Pros exceeded our expectations. The team was
                professional, punctual, and delivered exceptional quality. We
                highly recommend them!"
              </p>
              <p className="text-blue-500 mt-4 font-semibold">- John and
                Sarah Miller</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-700 italic">
                "From start to finish, the service was top-notch. Our home has
                never looked better. Thank you, Precision Paint Pros!"
              </p>
              <p className="text-blue-500 mt-4 font-semibold">- Emily
                Thompson</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-gray-700 italic">
                "Great attention to detail and excellent customer service. We
                were very impressed with their commitment to getting the job
                done right."
              </p>
              <p className="text-blue-500 mt-4 font-semibold">- David and
                Lisa Garcia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-16 bg-blue-50 rounded-2xl shadow-md"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Contact Us For a Free Estimate
          </h2>
          <p className="text-gray-700 mb-8">
            Ready to transform your space? Contact us today for a
            personalized quote.
          </p>
          <Button className="bg-red-500 text-white hover:bg-red-700 px-8 py-3 rounded-full font-semibold">
            Request an Estimate
          </Button>
        </div>
      </section>
    </div>
  );
}
