import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/20">
          <h2 className="text-6xl font-black mb-8 leading-tight">Ready to Start Your Project?</h2>
          <p className="mb-12 text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Transform your home with Illinois' most trusted siding experts. Get your free quote today and see the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
                Get Free Quote
              </button>
            </Link>
            <Link href="/blog">
              <button className="border-2 border-white/50 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
