
'use client';

 import { Button } from '@/components/ui/button';
 import { ServicesSection } from '@/components/home/services-section';
 import Image from 'next/image';
 import { useEffect, useRef } from 'react';
 import { cn } from '@/lib/utils';

 export default function Home() {

   const heroRef = useRef<HTMLDivElement>(null);
   const servicesRef = useRef<HTMLElement>(null);
   const contactRef = useRef<HTMLElement>(null);

   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             entry.target.classList.add('fade-in'); // Use fade-in animation
             observer.unobserve(entry.target);
           }
         });
       },
       {
         threshold: 0.1,
       }
     );

     if (heroRef.current) observer.observe(heroRef.current);
     if (servicesRef.current) observer.observe(servicesRef.current);
     if (contactRef.current) observer.observe(contactRef.current);


     return () => {
       if (heroRef.current) observer.unobserve(heroRef.current);
       if (servicesRef.current) observer.unobserve(servicesRef.current);
       if (contactRef.current) observer.unobserve(contactRef.current);

     };
   }, []);


   return (
     <div className="flex flex-col min-h-screen">
       {/* Hero Section */}
       <section ref={heroRef} className="relative flex items-center justify-center text-center text-white min-h-[calc(100vh-60px)] overflow-hidden opacity-0 transition-opacity duration-1000"> {/* Adjust min-height calculation if header height changes */}
         {/* Background Image */}
         <Image
           src="/assets/hero-painter-new.jpg" // Updated image source
           alt="Professional painter applying paint to a wall"
           layout="fill"
           objectFit="cover"
           quality={80}
           className="absolute inset-0 z-0" // Removed overlay filter
           priority // Load hero image faster
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10"></div> {/* Adjusted overlay */}

         {/* Content */}
         <div className="relative z-20 px-4 py-16 slide-in-bottom">
           <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-pulse"> {/* Added pulse animation */}
             Precision Paint Pros
           </h1>
           <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
             Painting Your Perfect Finish in Monte Vista & Beyond
           </p>
           <Button size="lg" variant="default" className="text-lg font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
             Get a Free Estimate
           </Button>
         </div>
       </section>

       {/* Limited Time Offer Banner */}
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


       {/* Services Section */}
       <ServicesSection ref={servicesRef} />

       {/* Promotional Banner Section */}
        <section className="py-16 bg-accent-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container my-12 overflow-hidden">
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


       {/* Customer Testimonials Section */}
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

       {/* Contact Section */}
       <section ref={contactRef} className="py-16 bg-primary-section rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-auto lg:container mb-12 overflow-hidden opacity-0 transition-opacity duration-1000">
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
     </div>
   );
 }