import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      name: "Interior Painting",
      href: "/services/interior-painting",
      description: "Transform your interiors with our expert painting services.",
    },
    {
      name: "Exterior Painting",
      href: "/services/exterior-painting",
      description: "Protect and beautify your property with our exterior painting solutions.",
    },
    {
      name: "Commercial Painting",
      href: "/services/commercial-painting",
      description: "Enhance your business space with our professional commercial painting services.",
    },
    {
      name: "Residential Painting",
      href: "/services/residential-painting",
      description: "Make your house a home with our quality residential painting services.",
    },
    {
      name: "Color Consultation",
      href: "/services/color-consultation",
      description: "Get expert advice on choosing the perfect colors for your project.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">
          Explore our wide range of painting services to meet your needs.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.name}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-700">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
