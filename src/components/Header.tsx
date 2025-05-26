'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg'; // asegúrate de tener este archivo

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo a la izquierda */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Anderson Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide">Anderson Siding & Construction LLC</span>
        </Link>

        {/* Navegación central */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/portfolio" className="hover:underline">Our Work</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contractors" className="hover:underline">For Contractors</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:bg-white hover:text-blue-800 px-3 py-1 rounded border border-white transition">
            Contact
          </Link>
        </nav>

        {/* Teléfono a la derecha */}
        <div className="hidden md:block text-sm font-semibold">
          📞 <a href="tel:2248013030" className="hover:underline">(224) 801-3030</a>
        </div>
      </div>
    </header>
  );
}