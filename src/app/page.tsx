
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/home/services-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8 slide-in-bottom">
        <h1 className="text-4xl font-bold text-primary">Welcome to Precision Paint Pros</h1>
        <p className="text-lg mt-2 text-gray-600">
          Your trusted painting professionals in Monte Vista, Colorado
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="slide-in-bottom">
          <h2 className="text-2xl font-semibold mb-4 text-accent">About Us</h2>
          <p className="text-gray-700">
            Precision Paint Pros is dedicated to providing high-quality painting services to residents and businesses in Monte Vista, Colorado, and the surrounding areas. With years of experience, we pride ourselves on our attention to detail and commitment to customer satisfaction. Located at 1345 6th Avenue, we are your local experts for all your painting needs.
          </p>
        </div>
        <div className="slide-in-bottom">
          <Image
            src="https://picsum.photos/500/300"
            alt="Painting Services"
            width={500}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </section>

      <ServicesSection />

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-accent slide-in-bottom">Contact Us</h2>
        <p className="text-gray-700 slide-in-bottom">
          Visit us at 1345 6th Avenue, Monte Vista, Colorado. Call us today for a free estimate!
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors mt-4 slide-in-bottom">Request an Estimate</Button>
      </section>
    </div>
  );
}
