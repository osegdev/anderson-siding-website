'use client';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Anderson Siding and Construction – Illinois Siding Experts</title>
        <meta name="description" content="Licensed siding contractors serving all of Illinois. Get a free quote today." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">About Us</h1>

        <p className="text-lg mb-4">
          Anderson Siding and Construction is a locally owned siding company based in Illinois. Our team has decades of combined experience in residential and commercial siding projects.
        </p>
        <p className="text-lg mb-4">We’re proud to serve communities across the state with high-quality work, honest pricing, and dependable timelines.</p>
        <p className="text-lg">Our mission is simple: deliver excellent craftsmanship and exceed client expectations — every time.</p>
      </main>
    </>
  );
}
