import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-blue-800 text-white py-12 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6 text-lg">Contact us today to request your free quote. Let’s work together!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <button className="bg-white text-blue-800 px-6 py-3 rounded hover:bg-gray-200 transition">Get in Touch</button>
          </Link>
          <Link href="/blog">
            <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-800 transition">Visit Our Blog</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
