'use client';

import Header from '@/components/layout/Header';
import ServiceHero from '@/components/sections/ServiceHero';
import PricingCards from '@/components/sections/PricingCards';
import FAQSection from '@/components/sections/FAQSection';
import { motion } from 'framer-motion';
import { Shield, Truck, Clock, Package } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Moving() {
    const t = useTranslations('Moving');

    return (
        <main className="min-h-screen bg-midnight text-white">
            <Header />

            {/* Hero */}
            <ServiceHero
                badge={t('heroBadge')}
                titlePrefix={t('heroTitlePrefix')}
                titleSuffix={t('heroTitleSuffix')}
                description={t('heroDesc')}
                icon={Truck}
                colorClass="text-blue-400"
                bgClass="bg-blue-500/10"
                borderClass="border-blue-500/20"
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
            />

            {/* Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Shield, title: t('feature1Title'), desc: t('feature1Desc') },
                        { icon: Clock, title: t('feature2Title'), desc: t('feature2Desc') },
                        { icon: Package, title: t('feature3Title'), desc: t('feature3Desc') },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="text-blue-400 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Pricing */}
            <PricingCards
                title={t('pricingTitle')}
                subtitle={t('pricingSubtitle')}
                ctaText={t('ctaButton')}
                ctaLink="/contact"
                tiers={[
                    {
                        name: t('tier1Title'),
                        description: t('tier1Desc'),
                        features: t('tier1Features').split(','),
                        recommended: false
                    },
                    {
                        name: t('tier2Title'),
                        description: t('tier2Desc'),
                        features: t('tier2Features').split(','),
                        recommended: true
                    },
                    {
                        name: t('tier3Title'),
                        description: t('tier3Desc'),
                        features: t('tier3Features').split(','),
                        recommended: false
                    }
                ]}
            />

            {/* FAQ */}
            <FAQSection
                title={t('faqTitle')}
                items={[
                    { question: t('faq1Q'), answer: t('faq1A') },
                    { question: t('faq2Q'), answer: t('faq2A') },
                    { question: t('faq3Q'), answer: t('faq3A') },
                ]}
            />

            {/* CTA */}
            <section className="py-20 bg-blue-900/10 border-t border-blue-500/10 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('ctaTitle')}</h2>
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full transition-colors"
                >
                    {t('ctaButton')}
                </Link>
            </section>
        </main>
    );
}
