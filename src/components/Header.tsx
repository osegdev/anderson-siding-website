'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Izquierda: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Anderson Logo" width={36} height={36} />
          <span className="text-xl font-bold tracking-wide">
            Anderson Siding & Construction LLC
          </span>
        </Link>

        {/* Derecha: Navegación + Teléfono en desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex space-x-6 text-sm font-medium">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Our Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contractors">For Contractors</Link>
            <Link href="/blog">Blog</Link>
            <Link
              href="/contact"
              className="hover:bg-white hover:text-blue-800 px-3 py-1 rounded border border-white transition"
            >
              Contact
            </Link>
          </nav>
          <div className="text-sm font-semibold whitespace-nowrap">
            📞{' '}
            <a href="tel:2248013030" className="hover:underline">
              (224) 801-3030
            </a>
          </div>
        </div>

        {/* Hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-blue-900 px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/portfolio" onClick={toggleMenu}>
            Our Work
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contractors" onClick={toggleMenu}>
            For Contractors
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <div className="text-xs mt-2 border-t border-blue-700 pt-2">
            📞 <a href="tel:2248013030">(224) 801-3030</a>
          </div>
        </nav>
      )}
    </header>
  );
}
