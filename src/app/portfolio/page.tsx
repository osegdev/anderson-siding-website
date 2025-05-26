'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Siding Replacement – Elgin, IL',
      image: '/images/ourwork1.png',
      description: 'Vinyl siding installed on a single-story home with landscaped front yard.',
    },
    {
      title: 'Soffit & Fascia – Aurora, IL',
      image: '/images/ourwork2.png',
      description: 'White soffit and fascia upgrade on a single-story garage-front home.',
    },
    {
      title: 'Gutter Installation – Joliet, IL',
      image: '/images/ourwork3.png',
      description: 'Seamless white gutters installed on a dark blue two-story home.',
    },
    {
      title: 'House Wrap – Palatine, IL',
      image: '/images/ourwork4.png',
      description: 'House wrap installation on a single-story home with a paved backyard.',
    },
  ];

  return (
    <>
      <Head>
        <title>Our Work – Anderson Siding and Construction Portfolio</title>
        <meta name="description" content="Browse recent siding, gutter, and exterior construction projects completed across Illinois by Anderson Siding and Construction." />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Our Work</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                width={600}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{proj.title}</h2>
                <p className="text-sm text-gray-700 mt-1">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}