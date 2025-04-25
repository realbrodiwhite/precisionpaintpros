export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">
          Get in touch with Precision Paint Pros for your painting needs.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Address:</strong> 1345 6th Avenue, Monte Vista, Colorado
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> info@precisionpaintpros.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
        {/* Placeholder for contact form */}
        <p className="text-gray-700">
          We'd love to hear from you! Fill out the form below to send us a message.
        </p>
      </section>
    </div>
  );
}
