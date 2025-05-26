'use client';

import Head from 'next/head';

export default function ServicesPage() {
  const services = [
    {
      title: 'Vinyl Siding',
      description:
        'Durable and low-maintenance siding solution available in various colors and finishes.',
    },
    {
      title: 'Soffit & Fascia',
      description: 'Ensure proper ventilation and aesthetic finish to your roofing system.',
    },
    {
      title: 'Gutter Installation',
      description: 'Prevent water damage with properly installed and aligned gutters.',
    },
    {
      title: 'House Wrap',
      description:
        'A protective barrier that improves energy efficiency and prevents moisture intrusion.',
    },
  ];

  return (
    <>
      <Head>
        <title>Services – Anderson Siding and Construction</title>
        <meta
          name="description"
          content="Explore the exterior services offered by Anderson Siding and Construction including siding, gutters, soffit, fascia, and more."
        />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Services</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded shadow p-6 border-l-4 border-blue-800">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
