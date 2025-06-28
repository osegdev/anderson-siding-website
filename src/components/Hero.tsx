import Image from 'next/image';
import heroImage from '@/assets/images/hero.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <Image src={heroImage} alt="Siding work example" fill priority className="object-cover absolute z-0 scale-105 transition-transform duration-[10s] hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-transparent z-5"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
        <div className="backdrop-blur-sm bg-white/10 p-12 rounded-3xl border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Expert Siding & Gutter Solutions
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-blue-100 max-w-2xl mx-auto leading-relaxed">Serving all of Illinois with licensed, high-quality work that transforms your home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Quote
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
