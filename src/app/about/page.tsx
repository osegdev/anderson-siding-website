import Head from 'next/head';
import Link from 'next/link';
import { Shield, Award, Users, MapPin, Clock, CheckCircle, Star, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '1000+',
      label: 'Homes Transformed',
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '100%',
      label: 'Licensed & Insured',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
    {
      number: '5★',
      label: 'Customer Rating',
      icon: <Star className="w-8 h-8 text-blue-600" />,
    },
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We use only premium materials and proven installation techniques to ensure your siding project stands the test of time.',
      icon: <Award className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Honest Pricing',
      description: 'Transparent, competitive pricing with no hidden fees. We provide detailed estimates so you know exactly what to expect.',
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We communicate clearly, respect your property, and stand behind our work.',
      icon: <Heart className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Local Expertise',
      description: 'Born and raised in Illinois, we understand local weather challenges and building requirements better than anyone.',
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
    },
  ];

  const team = [
    {
      name: 'Mike Anderson',
      role: 'Founder & Lead Contractor',
      experience: '25+ years',
      description: 'Licensed contractor with extensive experience in residential and commercial siding projects across Illinois.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      experience: '15+ years',
      description: 'Ensures every project runs smoothly from initial consultation to final walkthrough.',
    },
    {
      name: 'David Rodriguez',
      role: 'Senior Installer',
      experience: '18+ years',
      description: 'Master craftsman specializing in complex siding installations and custom solutions.',
    },
  ];

  const milestones = [
    {
      year: '2004',
      title: 'Company Founded',
      description: 'Anderson Siding and Construction was established with a vision to provide exceptional siding services to Illinois homeowners.',
    },
    {
      year: '2008',
      title: 'Licensed & Bonded',
      description: 'Achieved full licensing and bonding, establishing trust and credibility in the Illinois construction industry.',
    },
    {
      year: '2015',
      title: 'Expanded Services',
      description: 'Added comprehensive exterior services including gutters, soffit, fascia, and storm damage restoration.',
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Modernized operations with digital estimates, project tracking, and enhanced customer communication.',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Serving communities across Illinois with an expanded team and commitment to excellence.',
    },
  ];

  return (
    <>
      <Head>
        <title>About Anderson Siding and Construction – Illinois Siding Experts Since 2004</title>
        <meta name="description" content="Learn about Anderson Siding and Construction, Illinois' trusted siding contractors since 2004. Licensed, insured, and committed to quality craftsmanship." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">About Anderson Siding</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Illinois&apos; trusted siding experts since 2004. Licensed, insured, and committed to transforming homes with quality craftsmanship and honest service.
            </p>
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

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Anderson Siding and Construction was founded in 2004 with a simple mission: to provide Illinois homeowners with exceptional siding services backed by honest communication and
                    superior craftsmanship.
                  </p>
                  <p>
                    What started as a small, family-owned business has grown into one of Illinois&apos; most trusted siding contractors. We&apos;ve transformed over 1,000 homes across the state,
                    earning a reputation for quality work, fair pricing, and dependable service.
                  </p>
                  <p>
                    Today, we&apos;re proud to offer comprehensive exterior services including all types of siding installation, gutter systems, soffit and fascia work, and storm damage restoration.
                    Our team of skilled professionals brings decades of combined experience to every project.
                  </p>
                  <p>
                    As a locally owned and operated company, we understand Illinois weather challenges and building requirements. We&apos;re not just contractors – we&apos;re your neighbors, committed
                    to enhancing our communities one home at a time.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver exceptional craftsmanship and exceed client expectations through honest communication, quality materials, and professional installation – every time.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border border-indigo-100">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be Illinois&apos; most trusted exterior contractor, known for transforming homes and building lasting relationships with our clients and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">The principles that guide everything we do</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Experienced professionals dedicated to your project&apos;s success</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.experience} experience</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">Our Journey</h2>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">Two decades of growth, innovation, and commitment to excellence</p>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Licenses */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Licensed & Certified</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Fully licensed, bonded, and insured for your peace of mind</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Illinois General Contractor License',
                  description: 'Fully licensed to perform all exterior construction work in Illinois',
                  icon: <Shield className="w-12 h-12 text-blue-600" />,
                },
                {
                  title: 'Comprehensive Insurance',
                  description: 'General liability and workers compensation insurance for complete protection',
                  icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                },
                {
                  title: 'Manufacturer Certifications',
                  description: 'Certified installer for major siding and gutter manufacturers',
                  icon: <Award className="w-12 h-12 text-blue-600" />,
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{cert.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{cert.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Ready to Work With Illinois&apos; Siding Experts?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the Anderson Siding difference. Professional service, quality craftsmanship, and your satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Get Your Free Estimate
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
