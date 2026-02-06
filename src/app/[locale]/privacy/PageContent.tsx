'use client';

import Header from '@/components/layout/Header';
import CTASection from '@/components/sections/CTASection';
import { useTranslations } from 'next-intl';

export default function Privacy() {
    const t = useTranslations('Privacy');

    // Helper to get all sections. Assuming keys 1-6 based on the JSON structure.
    const sections = [1, 2, 3, 4, 5, 6];

    return (
        <main className="min-h-screen bg-midnight text-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-midnight pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gold">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-slate-light max-w-3xl mx-auto">
                        {t('description')}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-12">
                        {sections.map((key) => (
                            <div key={key} className="space-y-4">
                                <h2 className="text-2xl font-serif font-bold text-white">
                                    {t(`sections.${key}.title`)}
                                </h2>
                                <p className="text-slate leading-relaxed text-lg">
                                    {t(`sections.${key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
