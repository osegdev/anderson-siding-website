import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, Star, Shield, Clock } from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      title: 'Siding Installation & Replacement',
      description: 'Transform your home with premium siding solutions including vinyl, fiber cement, wood, and composite materials.',
      features: [
        'Vinyl, fiber cement, wood, and composite siding options',
        'Premium materials with extended warranties',
        'Wide selection of colors, textures, and styles',
        'Expert installation with proper insulation',
        'Low maintenance and weather-resistant solutions',
        'Increased home value and curb appeal',
      ],
      benefits: 'Versatile options for every budget and aesthetic preference',
      icon: '🏠',
      price: 'Competitive pricing - Free estimates',
    },
    {
      title: 'Soffit & Fascia Systems',
      description: 'Complete your roofing system with professional soffit and fascia installation for optimal ventilation and protection.',
      features: [
        'Proper attic ventilation systems',
        'Seamless integration with existing roofing',
        'Pest and weather protection',
        'Custom color matching available',
        'Prevents ice dams and moisture issues',
      ],
      benefits: 'Improved home ventilation and structural protection',
      icon: '🏘️',
      price: 'Competitive pricing - Call for quote',
    },
    {
      title: 'Professional Gutter Installation',
      description: 'Protect your home foundation and landscape with expertly installed gutter systems and downspouts.',
      features: ['Seamless aluminum gutters', 'Proper slope and drainage design', 'Heavy-duty hangers and brackets', 'Multiple color options available', 'Optional gutter guards and leaf protection'],
      benefits: 'Foundation protection and water damage prevention',
      icon: '🌧️',
      price: 'Competitive pricing - Free estimates',
    },
    {
      title: 'House Wrap & Insulation',
      description: 'Advanced moisture barrier and insulation systems to improve energy efficiency and prevent moisture intrusion.',
      features: ['High-performance house wrap materials', 'Vapor barrier installation', 'Thermal bridging prevention', 'Air sealing and weatherization', 'Energy efficiency improvements'],
      benefits: 'Lower energy bills and improved indoor comfort',
      icon: '🛡️',
      price: 'Competitive pricing - Free estimates',
    },
  ];

  const additionalServices = [
    {
      title: 'Siding Repair & Restoration',
      description: 'Expert repair services for damaged or aging siding',
      icon: '🔧',
    },
    {
      title: 'Window Trim & Capping',
      description: 'Professional window trim installation and aluminum capping',
      icon: '🪟',
    },
    {
      title: 'Storm Damage Restoration',
      description: 'Insurance claim assistance and storm damage repairs',
      icon: '⛈️',
    },
    {
      title: 'Commercial Siding Projects',
      description: 'Large-scale commercial and multi-unit siding solutions',
      icon: '🏢',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage',
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: 'Quality Materials',
      description: 'Premium materials from trusted manufacturers with excellent warranties',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Timely Completion',
      description: 'Projects completed on time and within budget, every time',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Satisfaction Guaranteed',
      description: 'Your satisfaction is our priority with comprehensive project warranties',
    },
  ];

  return (
    <>
      <Head>
        <title>Professional Siding Services in Illinois – Anderson Siding and Construction</title>
        <meta
          name="description"
          content="Expert siding (vinyl, fiber cement, wood, composite), gutter, soffit & fascia services across Illinois. Licensed contractors with 10+ years experience. Free quotes available."
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Professional Siding Services</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your Illinois home with expert siding (vinyl, fiber cement, wood, composite), gutter, and exterior services. Licensed, insured, and committed to excellence.
            </p>
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Get Your Free Quote Today
              </button>
            </Link>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Comprehensive exterior solutions designed to protect and enhance your property value</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">{service.benefits}</p>
                          <p className="font-semibold text-blue-600">{service.price}</p>
                        </div>
                        <Link href="/contact">
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-sm">
                            Get Quote
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Additional Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Complete exterior solutions for every need</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Why Illinois Homeowners Choose Anderson Siding</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Experience the difference of working with Illinois&apos; most trusted siding professionals</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">Our Process</h2>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">From initial consultation to project completion, we ensure a smooth and professional experience</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  title: 'Free Consultation',
                  description: 'Schedule your free estimate. We will assess your needs and provide detailed recommendations.',
                },
                {
                  step: '02',
                  title: 'Custom Proposal',
                  description: 'Receive a detailed proposal with materials, timeline, and transparent pricing.',
                },
                {
                  step: '03',
                  title: 'Professional Installation',
                  description: 'Our skilled team completes your project on time with the highest quality standards.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-2xl font-bold mb-6">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">Join thousands of satisfied Illinois homeowners who trust Anderson Siding for their exterior needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300">View Our Work</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
