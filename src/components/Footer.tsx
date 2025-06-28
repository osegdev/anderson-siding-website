import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl">
                <Image src={logo} alt="Anderson Logo" width={32} height={32} className="brightness-0 invert" />
              </div>
              <span className="text-xl font-bold">Anderson Siding & Construction</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Illinois&apos; trusted siding professionals. Licensed, insured, and committed to transforming homes with quality craftsmanship.</p>
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-teal-400">📞</span>
              <a href="tel:2248013030" className="hover:text-teal-400 transition-colors duration-300 font-medium">
                (224) 801-3030
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Our Work
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                About
              </Link>
              <Link href="/contractors" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                For Contractors
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Ready to Get Started?</h3>
            <p className="text-gray-300">Get your free quote today and see why Illinois homeowners trust Anderson Siding.</p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">&copy; {currentYear} Anderson Siding and Construction LLC. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <span className="text-gray-500">Licensed & Insured in Illinois</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
