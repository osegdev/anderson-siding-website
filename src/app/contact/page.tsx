'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 8000);
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Call Us',
      details: '(224) 801-3030',
      description: 'Available 7 days a week for estimates and emergencies',
      action: 'tel:2248013030',
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: 'Email Us',
      details: 'andersonsidingconstruction@gmail.com',
      description: 'Send us your project details for a detailed quote',
      action: 'mailto:andersonsidingconstruction@gmail.com',
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: 'Service Area',
      details: 'Throughout Illinois',
      description: 'Licensed contractors serving communities statewide',
      action: null,
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: 'Response Time',
      details: '24-48 Hours',
      description: 'Fast response for all inquiries and emergency repairs',
      action: null,
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Anderson Siding and Construction – Free Estimates in Illinois</title>
        <meta name="description" content="Get your free siding estimate from Illinois' trusted contractors. Call (224) 801-3030 or fill out our contact form. Licensed, insured, and ready to help." />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your home? Get your free estimate from Illinois&apos; most trusted siding professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2248013030">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Call (224) 801-3030
                </button>
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Multiple ways to reach our team of siding experts</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
                >
                  <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">{info.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{info.title}</h3>
                  {info.action ? (
                    <a href={info.action} className="text-lg font-semibold text-blue-600 hover:text-indigo-600 transition-colors duration-300 block mb-3">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-blue-600 mb-3">{info.details}</p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6">Request Your Free Estimate</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Tell us about your project and we&apos;ll provide a detailed quote within 24-48 hours</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
              {/* Form */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 shadow-xl border border-white/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white"
                      placeholder="Enter your phone number"
                    />
                    <p className="text-xs text-gray-600 mt-2">By providing your phone number, you agree to receive SMS updates related to your inquiry. Message and data rates may apply.</p>
                    <p className="text-xs text-gray-600">Reply STOP to unsubscribe.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <input id="sms-consent" name="smsConsent" type="checkbox" required className="mt-1 w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="sms-consent" className="text-sm text-gray-700 leading-relaxed">
                      I consent to receive SMS messages from Anderson Siding and Construction regarding my inquiry.
                    </label>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white resize-none"
                      placeholder="Tell us about your siding project, preferred materials, timeline, and any specific questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send My Request
                  </button>

                  {status === 'success' && (
                    <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 text-green-800 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-bold">Thank you!</h4>
                          <p>Your message has been sent successfully. We&apos;ll contact you within 24-48 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 text-red-800 rounded-xl shadow-lg">
                      <h4 className="font-bold">Something went wrong</h4>
                      <p>Please try again later or call us directly at (224) 801-3030.</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-600 mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Initial Review',
                        description: 'We review your project details and prepare preliminary recommendations.',
                      },
                      {
                        step: '2',
                        title: 'Site Visit',
                        description: 'Schedule a convenient time for our team to assess your property.',
                      },
                      {
                        step: '3',
                        title: 'Detailed Quote',
                        description: 'Receive a comprehensive proposal with materials, timeline, and pricing.',
                      },
                      {
                        step: '4',
                        title: 'Project Start',
                        description: 'Once approved, we schedule your project and begin transformation.',
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-4">Why Choose Anderson Siding?</h3>
                  <ul className="space-y-3">
                    {[
                      'Licensed & insured Illinois contractors',
                      '10+ years of experience',
                      'Free, no-obligation estimates',
                      'Quality materials with warranties',
                      'Professional installation guarantee',
                      'Emergency storm damage response',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black mb-6">Need Emergency Storm Damage Repair?</h2>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t wait when storm damage threatens your home. Our emergency response team is available 24/7 for urgent siding repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2248013030">
                <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Emergency: (224) 801-3030
                </button>
              </a>
              <Link href="/services">
                <button className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  View Storm Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
