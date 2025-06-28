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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Izquierda: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl group-hover:scale-105 transition-transform duration-300">
            <Image src={logo} alt="Anderson Logo" width={28} height={28} className="brightness-0 invert" />
          </div>
          <span className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Anderson Siding & Construction LLC</span>
        </Link>

        {/* Derecha: Navegación + CTA Block en desktop */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-1">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-1">
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-1">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contractors" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-1">
              For Contractors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative group py-1">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* CTA Block: Contact + Phone */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
            <div className="flex items-center gap-2 text-gray-600 font-medium whitespace-nowrap bg-gray-50 px-3 py-2 rounded-full">
              <span className="text-teal-600 text-lg">📞</span>
              <a href="tel:2248013030" className="hover:text-teal-600 transition-colors duration-300 text-sm">
                (224) 801-3030
              </a>
            </div>
          </div>
        </div>

        {/* Hamburguesa en móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 px-6 py-6 flex flex-col gap-5">
          <Link href="/services" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300">
            Services
          </Link>
          <Link href="/portfolio" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300">
            Our Work
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300">
            About
          </Link>
          <Link href="/contractors" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300">
            For Contractors
          </Link>
          <Link href="/blog" onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors duration-300">
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg mt-2"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 text-gray-600 text-sm mt-4 pt-4 border-t border-gray-200">
            <span className="text-teal-600">📞</span>
            <a href="tel:2248013030" className="hover:text-teal-600 transition-colors duration-300">
              (224) 801-3030
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
