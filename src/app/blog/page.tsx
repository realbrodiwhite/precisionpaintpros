
export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Precision Paint Pros Blog</h1>
        <p className="text-lg mt-2">
          Stay up-to-date with the latest painting tips, color trends, and company news.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Example Blog Post 1 */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/200"
            alt="Painting Tips"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Painting Tips for Beginners</h2>
          <p className="text-gray-700">
            Learn essential painting tips to achieve professional-looking results in your next DIY project.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>

        {/* Example Blog Post 2 */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/201"
            alt="Color Trends"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Top Color Trends of 2024</h2>
          <p className="text-gray-700">
            Discover the most popular color trends this year and how to incorporate them into your home.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>

        {/* Example Blog Post 3 */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/202"
            alt="Company News"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Precision Paint Pros Expands Services</h2>
          <p className="text-gray-700">
            We are excited to announce the expansion of our services to better serve our customers in Monte Vista.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
}
