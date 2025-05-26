export default function Services() {
  const services = [
    {
      title: 'Vinyl Siding',
      description:
        'Durable, low-maintenance siding solutions for residential and commercial properties.',
    },
    {
      title: 'Soffit & Fascia',
      description:
        'Protect your roof and improve ventilation with professional soffit and fascia installation.',
    },
    {
      title: 'Gutter Installation',
      description: 'Properly installed gutters to protect your property from water damage.',
    },
    {
      title: 'House Wrap',
      description: 'Weather-resistant barrier to keep your home insulated and protected.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-6 hover:shadow-md transition border-t-4 border-blue-800"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
