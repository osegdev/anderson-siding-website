import Image from 'next/image';

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'Vinyl Siding – Elgin, IL',
      image: '/images/portfolio1.png',
    },
    {
      title: 'Full Siding Replacement – Palatine, IL',
      image: '/images/portfolio2.png',
    },
    {
      title: 'Soffit & Fascia – Aurora, IL',
      image: '/images/portfolio3.png',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <Image src={proj.image} alt={proj.title} width={500} height={300} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
