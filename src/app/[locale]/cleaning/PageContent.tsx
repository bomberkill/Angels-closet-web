'use client';

import Header from '@/components/layout/Header';
import ServiceHero from '@/components/sections/ServiceHero';
import PricingCards from '@/components/sections/PricingCards';
import FAQSection from '@/components/sections/FAQSection';
// import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Sun, CheckCircle } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Cleaning() {
    const t = useTranslations('Cleaning');

    return (
        <main className="min-h-screen bg-midnight text-white">
            <Header />

            {/* Hero */}
            <ServiceHero
                badge={t('heroBadge')}
                titlePrefix={t('heroTitlePrefix')}
                titleSuffix={t('heroTitleSuffix')}
                description={t('heroDesc')}
                icon={Sparkles}
                colorClass="text-emerald-400"
                bgClass="bg-emerald-500/10"
                borderClass="border-emerald-500/20"
                image="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1080&auto=format&fit=crop"
            />

            {/* Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Leaf, title: t('feature1Title'), desc: t('feature1Desc') },
                        { icon: Sun, title: t('feature2Title'), desc: t('feature2Desc') },
                        { icon: CheckCircle, title: t('feature3Title'), desc: t('feature3Desc') },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <item.icon className="text-emerald-400 mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Before/After Gallery */}
            {/* Before/After Gallery - Temporarily disabled
            <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1200&auto=format&fit=crop"
                afterImage="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop"
                altText="Living Room Cleaning"
            />
            */}

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
            <section className="py-20 bg-emerald-900/10 border-t border-emerald-500/10 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('ctaTitle')}</h2>
                <Link
                    href="/contact"
                    className="inline-flex px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-colors"
                >
                    {t('ctaButton')}
                </Link>
            </section>
        </main>
    );
}
