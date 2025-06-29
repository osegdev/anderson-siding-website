import Head from 'next/head';
import Link from 'next/link';
import { Shield, Users, Clock, CheckCircle, Award, Settings, MapPin, Star, Phone, Mail } from 'lucide-react';

export default function ContractorsPage() {
  const services = [
    {
      title: 'Large-Scale Siding Installation',
      description: 'Multi-unit residential and commercial siding projects with fast, professional completion.',
      features: [
        'All siding types: vinyl, fiber cement, wood, composite',
        'High-volume project experience',
        'Consistent quality across multiple units',
        'Coordinated scheduling and timeline management',
      ],
      icon: '🏢',
    },
    {
      title: 'Exterior Finishing Services',
      description: 'Complete exterior solutions including soffit, fascia, gutters, and trim work.',
      features: ['Comprehensive exterior packages', 'Professional soffit and fascia installation', 'Gutter systems and downspouts', 'Window and door trim finishing'],
      icon: '🔨',
    },
    {
      title: 'Storm Damage Projects',
      description: 'Emergency response and insurance claim support for storm-damaged properties.',
      features: ['Rapid emergency response capability', 'Insurance documentation support', 'Large-scale restoration projects', 'Coordinated multi-property repairs'],
      icon: '⛈️',
    },
    {
      title: 'Custom Commercial Work',
      description: 'Specialized commercial and industrial exterior installations.',
      features: ['Commercial-grade materials and techniques', 'Safety compliance and certifications', 'Project management and coordination', 'Flexible scheduling for business operations'],
      icon: '🏭',
    },
  ];

  const capabilities = [
    {
      title: 'Fully Licensed & Insured',
      description: 'Illinois General Contractor License with comprehensive liability and workers compensation coverage.',
      icon: <Shield className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Complete Equipment Fleet',
      description: 'Professional-grade brakes, ladders, scaffolds, trailers, and specialized siding installation tools.',
      icon: <Settings className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Experienced Crews',
      description: 'Skilled installation teams with 15+ years average experience and proven track record.',
      icon: <Users className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Statewide Coverage',
      description: 'Available for projects throughout Illinois with local knowledge of building codes and requirements.',
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and attention to detail on every installation.',
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Fast Turnaround',
      description: 'Efficient project completion with flexible scheduling to meet your deadlines.',
      icon: <Clock className="w-12 h-12 text-blue-600" />,
    },
  ];

  const stats = [
    {
      number: '10+',
      label: 'Years Experience',
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '50+',
      label: 'Contractor Partners',
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '24/7',
      label: 'Emergency Response',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '100%',
      label: 'Licensed & Bonded',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
  ];

  const whyPartner = [
    {
      title: 'Reliable Partnership',
      description: 'Consistent quality, on-time delivery, and professional communication you can count on.',
      benefit: 'Build long-term relationships with dependable subcontractors',
    },
    {
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing that helps you maintain healthy profit margins on your projects.',
      benefit: 'Maximize project profitability with cost-effective solutions',
    },
    {
      title: 'Scalable Capacity',
      description: 'Handle projects of any size, from single homes to large residential developments.',
      benefit: 'Take on bigger projects with confidence in our capacity',
    },
    {
      title: 'Insurance & Bonding',
      description: 'Full liability coverage and bonding protects your business and gives clients peace of mind.',
      benefit: 'Reduce your risk and liability exposure',
    },
  ];

  const projectTypes = [
    {
      type: 'Residential Developments',
      description: 'Multi-unit housing projects, subdivisions, and planned communities',
      details: ['New construction siding', 'Coordinated material delivery', 'Phase-based scheduling', 'Quality consistency across units'],
    },
    {
      type: 'Commercial Buildings',
      description: 'Office buildings, retail centers, warehouses, and industrial facilities',
      details: ['Commercial-grade materials', 'Safety compliance', 'Minimal business disruption', 'Professional project management'],
    },
    {
      type: 'Insurance Restoration',
      description: 'Storm damage repairs, hail damage restoration, and insurance claim projects',
      details: ['Emergency response capability', 'Insurance documentation', 'Supplemental claim support', 'Coordinated repairs'],
    },
    {
      type: 'Retrofit & Renovation',
      description: 'Exterior renovations, energy efficiency upgrades, and building modernization',
      details: ['Historical building experience', 'Energy efficiency solutions', 'Minimal occupant disruption', 'Custom solutions'],
    },
  ];

  return (
    <>
      <Head>
        <title>Professional Subcontracting Services for General Contractors – Anderson Siding</title>
        <meta
          name="description"
          content="Partner with Anderson Siding for professional subcontracting services across Illinois. Licensed, insured, and equipped for large-scale siding and exterior projects."
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">For General Contractors</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Partner with Illinois&apos; most reliable siding subcontractor. Licensed, insured, and equipped for projects of any scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Request Partnership Quote
                </button>
              </Link>
              <a href="tel:2248013030">
                <button className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Call (224) 801-3030
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-black text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Subcontracting Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Comprehensive exterior solutions for your general contracting projects</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Capabilities Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Everything you need for successful project completion</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Project Types We Handle</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">From single homes to large developments, we scale to meet your needs</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {projectTypes.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{project.type}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <div className="space-y-3">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">Why Partner With Anderson Siding?</h2>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">We understand the challenges general contractors face and provide solutions that help your business succeed</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {whyPartner.map((reason, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">{reason.description}</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white font-medium">✓ {reason.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Simple, straightforward process to get your project started</p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Initial Contact',
                  description: 'Reach out with your project details and timeline requirements.',
                },
                {
                  step: '02',
                  title: 'Project Assessment',
                  description: 'We review plans, specifications, and provide detailed pricing.',
                },
                {
                  step: '03',
                  title: 'Partnership Agreement',
                  description: 'Finalize terms, insurance verification, and project scheduling.',
                },
                {
                  step: '04',
                  title: 'Project Execution',
                  description: 'Professional installation with regular progress updates.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full text-white text-2xl font-bold mb-6">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Ready to Partner With Us?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Let&apos;s discuss your upcoming projects and how we can help you deliver exceptional results.</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Direct</h3>
                  <a href="tel:2248013030" className="text-blue-600 font-semibold hover:text-indigo-600 transition-colors duration-300">
                    (224) 801-3030
                  </a>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:andersonsidingconstruction@gmail.com" className="text-blue-600 font-semibold hover:text-indigo-600 transition-colors duration-300">
                    andersonsidingconstruction@gmail.com
                  </a>
                </div>

                <div className="text-center md:col-span-2 lg:col-span-1">
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Request Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
