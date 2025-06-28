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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">See the quality and craftsmanship that sets us apart across Illinois</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
            >
              <div className="relative overflow-hidden">
                <Image src={proj.image} alt={proj.title} width={500} height={300} className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
