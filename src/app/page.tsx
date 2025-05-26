import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import PortfolioPreview from '@/components/PortfolioPreview';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Anderson Siding and Construction – Illinois Siding Experts</title>
        <meta
          name="description"
          content="Licensed siding contractors serving all of Illinois. Get a free quote today."
        />
      </Head>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
