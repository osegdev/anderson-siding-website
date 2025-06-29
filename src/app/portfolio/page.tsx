'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, CheckCircle, Star, Award, Users, Clock, Filter, Grid3X3, List } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Siding Installation', 'Soffit & Fascia', 'Gutter Systems', 'Storm Restoration', 'Commercial Projects'];

  const projects = [
    {
      title: 'Complete Siding Transformation',
      location: 'Elgin, IL',
      category: 'Siding Installation',
      image: '/images/ourwork1.png',
      description: 'Full vinyl siding replacement with modern color scheme and enhanced curb appeal.',
      details: {
        duration: '5 days',
        materials: 'Premium vinyl siding, house wrap, trim',
        size: '2,400 sq ft',
        year: '2024',
        challenges: 'Weather-resistant installation with proper insulation',
        results: 'Increased home value by 15% and improved energy efficiency',
      },
      features: ['Premium vinyl siding', 'Professional installation', 'Color-matched trim', 'Energy efficient'],
      testimonial: 'Anderson Siding transformed our home beyond our expectations. The quality of work is outstanding.',
      client: 'Johnson Family',
    },
    {
      title: 'Soffit & Fascia Upgrade',
      location: 'Aurora, IL',
      category: 'Soffit & Fascia',
      image: '/images/ourwork2.png',
      description: 'Complete soffit and fascia system replacement with improved ventilation.',
      details: {
        duration: '3 days',
        materials: 'Aluminum soffit and fascia, ventilation panels',
        size: '1,800 sq ft',
        year: '2024',
        challenges: 'Proper ventilation design for optimal airflow',
        results: 'Eliminated moisture issues and improved attic ventilation',
      },
      features: ['Ventilated soffit panels', 'Seamless fascia boards', 'Pest protection', 'Long-lasting aluminum'],
      testimonial: 'Professional work completed on time and within budget. Highly recommend!',
      client: 'Wilson Residence',
    },
    {
      title: 'Seamless Gutter System',
      location: 'Joliet, IL',
      category: 'Gutter Systems',
      image: '/images/ourwork3.png',
      description: 'Custom seamless gutter installation with downspout placement optimization.',
      details: {
        duration: '2 days',
        materials: 'Seamless aluminum gutters, heavy-duty hangers',
        size: '180 linear feet',
        year: '2024',
        challenges: 'Complex roofline requiring custom solutions',
        results: 'Perfect water drainage and foundation protection',
      },
      features: ['Seamless aluminum construction', 'Proper slope design', 'Heavy-duty mounting', 'Color matched'],
      testimonial: 'No more water issues around our foundation. Excellent craftsmanship!',
      client: 'Thompson Home',
    },
    {
      title: 'Energy-Efficient House Wrap',
      location: 'Palatine, IL',
      category: 'Siding Installation',
      image: '/images/ourwork4.png',
      description: 'Advanced house wrap installation for superior moisture and air barrier protection.',
      details: {
        duration: '4 days',
        materials: 'High-performance house wrap, sealing tape, fasteners',
        size: '2,100 sq ft',
        year: '2024',
        challenges: 'Ensuring complete air sealing around windows and doors',
        results: '25% improvement in energy efficiency ratings',
      },
      features: ['Moisture barrier protection', 'Air sealing technology', 'Thermal bridging prevention', 'Warranty included'],
      testimonial: 'Our heating bills dropped significantly after the house wrap installation.',
      client: 'Martinez Family',
    },
    {
      title: 'Storm Damage Restoration',
      location: 'Naperville, IL',
      category: 'Storm Restoration',
      image: '/images/ourwork1.png',
      description: 'Complete siding restoration after severe hail damage with insurance coordination.',
      details: {
        duration: '7 days',
        materials: 'Impact-resistant siding, reinforced trim, weatherproofing',
        size: '3,200 sq ft',
        year: '2024',
        challenges: 'Coordinating with insurance and matching existing architecture',
        results: 'Full restoration with upgraded materials for future protection',
      },
      features: ['Insurance claim assistance', 'Impact-resistant materials', 'Emergency repairs', 'Code compliance'],
      testimonial: 'Anderson Siding handled everything with our insurance company. Stress-free experience.',
      client: 'Davis Residence',
    },
    {
      title: 'Multi-Unit Commercial Project',
      location: 'Schaumburg, IL',
      category: 'Commercial Projects',
      image: '/images/ourwork2.png',
      description: 'Large-scale commercial siding installation for retail complex.',
      details: {
        duration: '14 days',
        materials: 'Commercial-grade siding, fire-resistant materials',
        size: '12,000 sq ft',
        year: '2024',
        challenges: 'Working around business operations with minimal disruption',
        results: 'Modern appearance attracting new tenants and increased property value',
      },
      features: ['Commercial-grade materials', 'Fire resistance', 'Minimal disruption', 'Project coordination'],
      testimonial: 'Professional team that understood our business needs and delivered exceptional results.',
      client: 'Retail Plaza Management',
    },
  ];

  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      icon: <Star className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '20+',
      label: 'Years Experience',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '50+',
      label: 'Illinois Cities Served',
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
    },
  ];

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Our Work Portfolio – Anderson Siding Projects Across Illinois</title>
        <meta name="description" content="View our portfolio of completed siding, gutter, soffit and exterior projects across Illinois. Quality craftsmanship and satisfied customers since 2004." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Our Work Portfolio</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore our completed projects across Illinois. Quality craftsmanship, satisfied customers, and transformed homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Start Your Project
                </button>
              </Link>
              <button
                onClick={() => document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Projects
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Portfolio Highlights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Numbers that reflect our commitment to excellence</p>
            </div>

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

        {/* Filter and View Controls */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2 text-gray-700 font-medium mr-4">
                  <Filter className="w-4 h-4" />
                  Filter by:
                </span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium mr-2">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-50'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="portfolio-grid" className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">{selectedCategory === 'All' ? 'All Projects' : selectedCategory}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{project.details.year}</span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{project.category}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>

                      <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                      <div className="space-y-3 mb-6">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{project.details.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{project.details.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">{project.details.year}</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">{project.category}</span>
                          </div>

                          <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>

                          <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-4">
                          <div className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-gray-700 italic mb-2">&ldquo;{project.testimonial}&rdquo;</p>
                              <p className="text-sm font-medium text-blue-600">— {project.client}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Duration: {project.details.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Size: {project.details.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">Our Project Process</h2>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">Every project follows our proven process to ensure exceptional results</p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'Free on-site assessment and detailed project planning',
                },
                {
                  step: '02',
                  title: 'Design & Quote',
                  description: 'Custom design solutions with transparent pricing',
                },
                {
                  step: '03',
                  title: 'Installation',
                  description: 'Professional installation by our skilled team',
                },
                {
                  step: '04',
                  title: 'Completion',
                  description: 'Final walkthrough and project warranty',
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
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our satisfied customers across Illinois. Get your free consultation and see how we can transform your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Get Free Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300">View Our Services</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
