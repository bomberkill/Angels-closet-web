'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
    const t = useTranslations('Testimonials');

    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: t('role1'),
            content: t('story1'),
            rating: 5,
        },
        {
            name: 'Michael Ross',
            role: t('role2'),
            content: t('story2'),
            rating: 5,
        },
        {
            name: 'Elena Rodriguez',
            role: t('role3'),
            content: t('story3'),
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-midnight-light relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        {t.rich('title', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate max-w-2xl mx-auto text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-2xl relative hover:bg-white/10 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 text-white/5" size={64} />

                            <div className="flex gap-1 mb-6 text-gold">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-light italic mb-6 leading-relaxed relative z-10">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                <p className="text-slate text-sm">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
