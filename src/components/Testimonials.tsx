export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria G.',
      text: 'Anderson Siding did an amazing job on our home in Schaumburg. Professional and fast!',
    },
    {
      name: 'Tom R.',
      text: 'Great experience working with them as a contractor. Clear communication and solid results.',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">What Our Clients Say</h2>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-4 border-blue-800 pl-4 text-left">
              <p className="italic">“{t.text}”</p>
              <footer className="mt-2 text-sm font-semibold">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}