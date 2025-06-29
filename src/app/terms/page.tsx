'use client';

import Head from 'next/head';
import Link from 'next/link';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Mail, Phone, Users } from 'lucide-react';

export default function TermsPage() {
  const termsSections = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Website Usage',
      content: [
        'This website is provided for informational purposes about our siding and construction services',
        'You may not use our website for any unlawful or unauthorized purposes',
        'All content, including text, images, and designs, is protected by intellectual property laws',
        'You agree to use our website responsibly and in accordance with applicable laws',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Communication & Contact',
      content: [
        'By submitting your information through our contact forms, you authorize us to communicate with you',
        'We may contact you via email, phone, or SMS regarding your project inquiries',
        'You can opt out of SMS communications at any time by replying STOP',
        'All communications are related to providing our siding and construction services',
      ],
    },
    {
      icon: <Scale className="w-8 h-8 text-purple-600" />,
      title: 'Service Terms',
      content: [
        'All services are subject to written contracts and agreements',
        'Estimates and quotes are valid for 30 days unless otherwise specified',
        'Project timelines are estimates and may vary due to weather or unforeseen circumstances',
        'Materials and workmanship are guaranteed according to our warranty terms',
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: 'Liability & Disclaimers',
      content: [
        'Anderson Siding and Construction is licensed and insured for your protection',
        'We are not liable for damages resulting from website use or information reliance',
        'Our liability is limited to the scope of work defined in signed contracts',
        'Force majeure events (weather, natural disasters) may affect project timelines',
      ],
    },
  ];

  const additionalTerms = [
    {
      title: 'Intellectual Property',
      description: 'All website content, including designs, logos, and text, is owned by Anderson Siding and Construction and protected by copyright laws.',
      icon: <FileText className="w-6 h-6 text-orange-600" />,
    },
    {
      title: 'Terms Updates',
      description: 'We reserve the right to update these terms at any time. Continued use of our website constitutes acceptance of any changes.',
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
    {
      title: 'Governing Law',
      description: 'These terms are governed by Illinois state law. Any disputes will be resolved in Illinois courts.',
      icon: <Scale className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Terms and Conditions – Anderson Siding and Construction</title>
        <meta name="description" content="Review the terms and conditions for using Anderson Siding and Construction website and services. Clear guidelines for our professional relationship." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Terms & Conditions</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">Clear guidelines for using our website and services. Building trust through transparency.</p>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Scale className="w-5 h-5" />
              <span className="text-lg">Effective: December 29, 2024</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Anderson Siding and Construction website and our services. By accessing our website or engaging our services,
                you agree to be bound by these terms and our privacy policy.
              </p>
              <div className="flex items-center gap-3 text-blue-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Licensed, insured, and committed to professional standards</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Terms of Service</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Understanding our professional relationship and responsibilities</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {termsSections.map((section, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">{section.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{section.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Important Notices</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {additionalTerms.map((term, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
                >
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{term.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{term.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{term.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Standards */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">Our Professional Standards</h2>
            <p className="text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              As licensed contractors in Illinois, we maintain the highest standards of professionalism and quality in all our work.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Licensed & Bonded',
                  description: 'Fully licensed Illinois contractors with comprehensive bonding and insurance coverage',
                  icon: <Shield className="w-8 h-8" />,
                },
                {
                  title: 'Quality Guarantee',
                  description: 'All work backed by written warranties and satisfaction guarantees',
                  icon: <CheckCircle className="w-8 h-8" />,
                },
                {
                  title: 'Professional Ethics',
                  description: 'Committed to honest communication, fair pricing, and exceptional service',
                  icon: <Scale className="w-8 h-8" />,
                },
              ].map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">{standard.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{standard.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              If you have any questions about these Terms and Conditions or our services, please don&apos;t hesitate to contact us.
            </p>

            <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <a href="tel:2248013030" className="text-blue-600 hover:text-indigo-600 transition-colors duration-300 font-semibold">
                  (224) 801-3030
                </a>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 border border-indigo-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <a href="mailto:andersonsidingconstruction@gmail.com" className="text-blue-600 hover:text-indigo-600 transition-colors duration-300 font-semibold">
                  andersonsidingconstruction@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border border-white/50">
              <p className="text-gray-700 mb-4 font-medium">Anderson Siding and Construction</p>
              <p className="text-gray-600 mb-6">Palatine, Illinois</p>
              <p className="text-sm text-gray-500 leading-relaxed">Licensed Illinois General Contractor | Fully Insured & Bonded</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Privacy Policy
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">Contact Us</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
