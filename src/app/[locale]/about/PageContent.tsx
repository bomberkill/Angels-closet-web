'use client';

import Header from '@/components/layout/Header';
import CTASection from '@/components/sections/CTASection';
import { motion } from 'framer-motion';
import { Shield, Star, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    const values = [
        {
            icon: Star,
            title: t('value1Title'),
            description: t('value1Desc'),
        },
        {
            icon: Shield,
            title: t('value2Title'),
            description: t('value2Desc'),
        },
        {
            icon: Heart,
            title: t('value3Title'),
            description: t('value3Desc'),
        },
    ];

    return (
        <main className="min-h-screen bg-midnight text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-midnight pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        {t.rich('title', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-light max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-midnight-light">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-lg text-slate leading-relaxed"
                        >
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
                                {t('storyTitle')}
                            </h2>
                            <p>{t('storyText1')}</p>
                            <p>{t('storyText2')}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative h-[500px] rounded-3xl overflow-hidden group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://images.pexels.com/photos/5439468/pexels-photo-5439468.jpeg')" }}
                            />
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-4">{t('valuesTitle')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 mx-auto bg-midnight rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-slate">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
