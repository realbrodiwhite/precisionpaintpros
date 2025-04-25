
const services = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Residential Painting",
  "Color Consultation",
];

export function ServicesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
      <ul className="list-disc list-inside">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
}
