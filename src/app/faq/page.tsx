"use client";
export default function Faq() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </header>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          What areas do you serve?
        </h2>
        <p className="text-gray-700">
          We proudly serve Monte Vista and the surrounding areas. Contact us to
          confirm if we cover your location.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How do I get a free estimate?</h2>
        <p className="text-gray-700">
          You can get a free estimate by filling out our online form, calling us
          directly, or sending us an email. We'll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What types of paint do you use?</h2>
        <p className="text-gray-700">We use high-quality, durable paints from trusted brands. We can also work with specific brands or types of paint if you have a preference.</p>
      </div>
    </div>
  );
}