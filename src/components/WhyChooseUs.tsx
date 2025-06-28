import { ShieldCheck, Clock, MapPin, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: 'Licensed & Insured',
      description: 'We meet all legal requirements to work safely and professionally in Illinois.',
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Professional & Reliable',
      description: 'Our team delivers high-quality work on time, every time.',
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: 'All Illinois Covered',
      description: 'From Chicago suburbs to downstate Illinois, we’re available everywhere.',
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Residential & Contractors',
      description: 'We work with homeowners and general contractors alike.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Experience the difference of working with Illinois&apos; most trusted siding professionals</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-700/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
