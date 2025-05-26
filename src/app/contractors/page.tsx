'use client';

import Head from 'next/head';

export default function ContractorsPage() {
  return (
    <>
      <Head>
        <title>Subcontracting for Contractors – Anderson Siding and Construction</title>
        <meta name="description" content="Partner with Anderson Siding and Construction for professional subcontracting services across Illinois. Fully equipped and ready to work." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">For Contractors</h1>

        <p className="text-lg mb-4">
          We currently offer subcontracting services for large-scale siding and exterior construction projects across Illinois.
          Our crews are experienced, fast, and fully equipped.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-800 mb-6">
          <li>Licensed and insured in the state of Illinois</li>
          <li>Full equipment: brakes, ladders, scaffolds, trailers</li>
          <li>Trained team with attention to detail</li>
          <li>Fast, clean, and professional results</li>
          <li>Available for immediate new jobs</li>
        </ul>

        <p className="text-lg">
          We are open to working with new general contractors. If you have a project that requires experienced siding crews, let’s talk.
        </p>
      </main>
    </>
  );
}