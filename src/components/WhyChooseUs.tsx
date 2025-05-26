import { ShieldCheck, Clock, MapPin, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
      title: 'Licensed & Insured',
      description: 'We meet all legal requirements to work safely and professionally in Illinois.',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-800" />,
      title: 'Professional & Reliable',
      description: 'Our team delivers high-quality work on time, every time.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-800" />,
      title: 'All Illinois Covered',
      description: 'From Chicago suburbs to downstate Illinois, we’re available everywhere.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-800" />,
      title: 'Residential & Contractors',
      description: 'We work with homeowners and general contractors alike.',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Why Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div key={index} className="text-center border rounded p-6 hover:shadow-md transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
