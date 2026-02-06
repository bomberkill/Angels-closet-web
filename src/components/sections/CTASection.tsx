'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function CTASection() {
    const t = useTranslations('CTA');

    return (
        <section className="py-24 bg-gradient-to-br from-midnight to-midnight-light text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                        {t.rich('title', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-xl text-slate-light">
                        {t('description')}
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-midnight font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] group"
                    >
                        {t('button')}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
