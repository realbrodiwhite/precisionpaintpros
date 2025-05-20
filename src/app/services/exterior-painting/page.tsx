export default function ExteriorPaintingPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Exterior Painting Services</h1>
        {/* Image related to Exterior Painting */}
        <div className="flex justify-center my-8">
          <img src="/assets/ExteriorPainting-PrecisionPaintPros.webp" alt="Exterior Painting" className="max-w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </header>

      <section className="mb-8">
        <p className="text-gray-700">Enhance your home's curb appeal with our professional exterior painting services. Our expert team will refresh your home's exterior, protecting it from the elements and boosting its visual appeal. We use durable, weather-resistant paints and meticulous techniques to ensure a lasting finish.</p>
      </section>

      <section className="mb-8">
        <p className="text-gray-700">Getting started is easy. Contact us today to schedule a free consultation. We'll discuss your project, provide a detailed estimate, and answer any questions you may have about our exterior painting process.</p>
      </section>
    </div>
  );
}