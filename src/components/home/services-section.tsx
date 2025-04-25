const services = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Residential Painting",
  "Color Consultation",
];

export function ServicesSection() {
  return (
    <section className="mb-16 slide-in-left">
      <h2 className="text-3xl font-semibold mb-8 text-accent">Our Services</h2>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        {services.map((service, index) => (
          <li key={index} className="mb-2">{service}</li>
        ))}
      </ul>
    </section>
  );
}
