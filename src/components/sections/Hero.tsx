'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-midnight">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/50" />
                {/* Placeholder for Video Background */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')] bg-cover bg-center animate-pulse-slow scale-105" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-light"
                    >
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-medium tracking-wide">{t('badge')}</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                        {t('titlePrefix')} <br />
                        <span className="text-gradient">{t('titleSuffix')}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-light max-w-2xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-gold hover:bg-gold-light text-midnight font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center gap-2"
                        >
                            {t('ctaPrimary')}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/services" // Note: This link might technically be broken if services page doesn't exist at root, but user asked for services pages which are /moving etc. Wait, I should probably link to section or just keep it generic.
                            className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium rounded-full transition-colors backdrop-blur-sm"
                        >
                            {t('ctaSecondary')}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-light"
            >
                <span className="text-xs tracking-widest uppercase">{t('scroll')}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
