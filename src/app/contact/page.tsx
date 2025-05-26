'use client';

import Head from 'next/head';
import { useState } from 'react';

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

  return (
    <>
      <Head>
        <title>Contact Anderson Siding and Construction</title>
        <meta
          name="description"
          content="Reach out to Anderson Siding and Construction for a free siding consultation or estimate in Illinois."
        />
      </Head>

      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full border px-3 py-2 rounded"
            />
            <p className="text-xs text-gray-600 mt-1">
              By providing your phone number, you agree to receive SMS updates related to your
              inquiry. Message and data rates may apply.
            </p>
          </div>

          <div className="flex items-center">
            <input id="sms-consent" name="smsConsent" type="checkbox" required className="mr-2" />
            <label htmlFor="sms-consent" className="text-sm">
              I consent to receive SMS messages from Anderson Siding and Construction regarding my
              inquiry.
            </label>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded shadow">
              ✅ Thank you! Your message has been sent successfully. We&apos;ll contact you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-800 rounded shadow">
              ❌ Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </main>
    </>
  );
}
