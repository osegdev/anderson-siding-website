export default function Services() {
  const services = [
    {
      title: 'Vinyl Siding',
      description: 'Durable, low-maintenance siding solutions for residential and commercial properties.',
      icon: '🏠',
    },
    {
      title: 'Soffit & Fascia',
      description: 'Protect your roof and improve ventilation with professional soffit and fascia installation.',
      icon: '🏘️',
    },
    {
      title: 'Gutter Installation',
      description: 'Properly installed gutters to protect your property from water damage.',
      icon: '🌧️',
    },
    {
      title: 'House Wrap',
      description: 'Weather-resistant barrier to keep your home insulated and protected.',
      icon: '🛡️',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Professional siding and construction services designed to protect and enhance your property</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border border-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
