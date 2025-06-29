'use client';

import Head from 'next/head';
import Link from 'next/link';
import { Shield, Eye, Lock, Mail, Phone, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function PrivacyPage() {
  const privacySections = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: 'Information We Collect',
      content: [
        'Personal information you voluntarily provide when filling out our contact form',
        'Contact details including name, phone number, email address, and project details',
        'Communication records when you interact with us via email, phone, or SMS',
        'Website usage data through cookies and analytics (non-personal)',
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'How We Use Your Information',
      content: [
        'Provide siding and construction services as requested',
        'Respond to your inquiries and quote requests promptly',
        'Improve our website functionality and user experience',
        'Send project updates and service-related communications',
        'We do NOT sell or share your personal data for marketing purposes',
      ],
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: 'Data Security & Protection',
      content: [
        'Implementation of industry-standard security measures',
        'Secure data transmission using SSL encryption',
        'Limited access to personal information by authorized personnel only',
        'Regular security assessments and updates to our systems',
        'Note: No method of transmission over the internet is 100% secure',
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
      title: 'Your Privacy Rights',
      content: [
        'Opt out of SMS communication at any time by replying STOP',
        'Request access to your personal data we have collected',
        'Request correction or deletion of your personal information',
        'Withdraw consent for data processing (where applicable)',
        'File a complaint with relevant privacy authorities if needed',
      ],
    },
  ];

  const additionalInfo = [
    {
      title: 'Cookies & Analytics',
      description: 'We use cookies to enhance your browsing experience and understand how our website is used. You can disable cookies in your browser settings.',
      icon: <FileText className="w-6 h-6 text-orange-600" />,
    },
    {
      title: 'Third-Party Links',
      description: 'Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external websites.',
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    },
    {
      title: 'Policy Updates',
      description: 'We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.',
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy – Anderson Siding and Construction</title>
        <meta name="description" content="Learn how Anderson Siding and Construction protects your personal information and respects your privacy. Transparent data practices since 2016." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">Your privacy matters to us. Learn how we protect and handle your personal information.</p>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Shield className="w-5 h-5" />
              <span className="text-lg">Last updated: December 29, 2024</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Your Privacy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Anderson Siding and Construction (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and maintaining the security of your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              <div className="flex items-center gap-3 text-blue-600">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">We prioritize transparency and your control over your data</span>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Privacy Practices</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Understanding how we handle your information</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {privacySections.map((section, index) => (
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

        {/* Additional Information */}
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Additional Information</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {additionalInfo.map((info, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 border border-white/30"
                >
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your personal information, please don&apos;t hesitate to contact us.
            </p>

            <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <a href="tel:2248013030" className="text-blue-100 hover:text-white transition-colors duration-300">
                  (224) 801-3030
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <a href="mailto:andersonsidingconstruction@gmail.com" className="text-blue-100 hover:text-white transition-colors duration-300">
                  andersonsidingconstruction@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-blue-100 mb-4">Anderson Siding and Construction</p>
              <p className="text-blue-100">Palatine, Illinois</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/terms">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Terms & Conditions
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
