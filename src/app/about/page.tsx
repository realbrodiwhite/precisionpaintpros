export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Precision Paint Pros</h1>
        <p className="text-lg mt-2">
          Learn more about our company and our commitment to quality.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Precision Paint Pros, our mission is to provide exceptional painting services with a focus on precision, quality, and customer satisfaction. We strive to exceed expectations on every project.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Quality: We are committed to using the best materials and techniques.</li>
          <li>Integrity: We conduct our business with honesty and transparency.</li>
          <li>Customer Satisfaction: We prioritize our clients' needs and preferences.</li>
        </ul>
      </section>
    </div>
  );
}
