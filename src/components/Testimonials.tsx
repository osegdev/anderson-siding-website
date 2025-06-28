export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria G.',
      location: 'Schaumburg, IL',
      text: 'Anderson Siding did an amazing job on our home in Schaumburg. Professional and fast!',
      rating: 5,
    },
    {
      name: 'Tom R.',
      location: 'Aurora, IL',
      text: 'Great experience working with them as a contractor. Clear communication and solid results.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      location: 'Palatine, IL',
      text: 'Outstanding quality work and attention to detail. Our house looks brand new!',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Don't just take our word for it - hear from satisfied customers across Illinois</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-700/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">{renderStars(t.rating)}</div>
                <blockquote className="text-center">
                  <p className="text-lg text-gray-700 italic leading-relaxed mb-6">"{t.text}"</p>
                  <footer className="border-t border-gray-200 pt-6">
                    <div className="font-bold text-xl text-gray-900">{t.name}</div>
                    <div className="text-blue-600 font-medium">{t.location}</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
