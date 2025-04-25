
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Painting Blogs</h1>
        <p className="text-lg mt-2">
          Explore our blog categories for painting tips, color trends, and company news.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Painting Tips Blog Category */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/200"
            alt="Painting Tips"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Painting Tips</h2>
          <p className="text-gray-700">
            Essential painting tips to achieve professional-looking results in your next DIY project.
          </p>
          <Link href="/blog/painting-tips" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </Link>
        </div>

        {/* Color Trends Blog Category */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/201"
            alt="Color Trends"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Color Trends</h2>
          <p className="text-gray-700">
            Discover the most popular color trends this year and how to incorporate them into your home.
          </p>
          <Link href="/blog/color-trends" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </Link>
        </div>

        {/* Company News Blog Category */}
        <div className="border rounded-md shadow-md p-4">
          <img
            src="https://picsum.photos/400/202"
            alt="Company News"
            className="rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Company News</h2>
          <p className="text-gray-700">
            Stay up-to-date with the latest news, events, and updates from Precision Paint Pros.
          </p>
          <Link href="/blog/company-news" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </Link>
        </div>
      </section>
    </div>
  );
}
