'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ServiceBento from '@/components/sections/ServiceBento';
import TrustSection from '@/components/sections/TrustSection';
import ProcessSection from '@/components/sections/ProcessSection';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <Header />
      <Hero />
      <ServiceBento />
      <ProcessSection />
      <Testimonials />
      <TrustSection />
      <CTASection />
    </main>
  );
}
