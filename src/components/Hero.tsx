'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.png';
import Link from 'next/link';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image src={heroImage} alt="Siding work example" fill priority className="object-cover object-[75%_25%] scale-110" />
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-indigo-700/40 z-5"></div>

      {/* Additional subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-5"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
        <div className="bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
            Expert Siding & Gutter Solutions
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Serving all of Illinois with licensed, high-quality work that transforms your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Quote
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/15 transition-all duration-300 backdrop-blur-sm shadow-lg">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
