
import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/home/services-section";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Precision Paint Pros</h1>
        <p className="text-lg mt-2">
          Your trusted painting professionals in Monte Vista, Colorado
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            Precision Paint Pros is dedicated to providing high-quality painting services to residents and businesses in Monte Vista, Colorado, and the surrounding areas. With years of experience, we pride ourselves on our attention to detail and commitment to customer satisfaction. Located at 1345 6th Avenue, we are your local experts for all your painting needs.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/500/300"
            alt="Painting Services"
            className="rounded-md shadow-md"
          />
        </div>
      </section>

      <ServicesSection />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          Visit us at 1345 6th Avenue, Monte Vista, Colorado. Call us today for a free estimate!
        </p>
        <Button>Request an Estimate</Button>
      </section>
    </div>
  );
}
