'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function TrustSection() {
    const t = useTranslations('Stats');

    const stats = [
        { label: t('years'), value: '15+' },
        { label: t('projects'), value: '2k+' },
        { label: t('satisfaction'), value: '100%' },
        { label: t('team'), value: '50+' },
    ];

    return (
        <section className="py-20 bg-midnight relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                                {stat.value}
                            </h3>
                            <p className="text-slate uppercase tracking-widest text-sm font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
