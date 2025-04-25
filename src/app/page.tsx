
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/home/services-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto py-16">
      <header className="text-center mb-12 fade-in">
        <h1 className="text-5xl font-bold text-primary">Welcome to Precision Paint Pros</h1>
        <p className="text-xl mt-4 text-gray-600">
          Your trusted painting professionals in Monte Vista, Colorado
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 zoom-in">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-accent">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Precision Paint Pros is dedicated to providing high-quality painting services to residents and businesses in Monte Vista, Colorado, and the surrounding areas. With years of experience, we pride ourselves on our attention to detail and commitment to customer satisfaction. Located at 1345 6th Avenue, we are your local experts for all your painting needs.
          </p>
        </div>
        <div>
          <Image
            src="https://picsum.photos/500/300"
            alt="Painting Services"
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <ServicesSection />

      <section className="text-center fade-in">
        <h2 className="text-3xl font-semibold mb-6 text-accent">Contact Us</h2>
        <p className="text-gray-700">
          Visit us at 1345 6th Avenue, Monte Vista, Colorado. Call us today for a free estimate!
        </p>
        <Button className="bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-colors mt-6 px-8 py-3 rounded-md">
          Request an Estimate
        </Button>
      </section>
    </div>
  );
}
