import Image from 'next/image';
import heroImage from '@/assets/images/hero.png';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image src={heroImage} alt="Siding work example" fill priority className="object-cover absolute z-0" />
      <div className="relative z-10 bg-black/60 p-6 rounded">
        <h1 className="text-4xl md:text-5xl font-bold">Expert Siding & Gutter Solutions</h1>
        <p className="mt-4 text-lg">Serving all of Illinois with licensed, high-quality work.</p>
        <Link href="/contact">
          <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Request a Free Quote</button>
        </Link>
      </div>
    </section>
  );
}
