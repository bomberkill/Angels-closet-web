'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Smile } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProcessSection() {
    const t = useTranslations('Process');

    const steps = [
        {
            icon: MessageSquare,
            title: t('step1'),
            description: t('step1Desc'),
        },
        {
            icon: Calendar,
            title: t('step2'),
            description: t('step2Desc'),
        },
        {
            icon: Smile,
            title: t('step3'),
            description: t('step3Desc'),
        },
        {
            icon: Smile,
            title: t('step4'),
            description: t('step4Desc'),
        },
    ];

    return (
        <section className="py-24 bg-midnight text-white relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        {t.rich('title', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate max-w-2xl mx-auto text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-midnight border-2 border-gold/30 rounded-full flex items-center justify-center text-gold mb-6 relative z-10 group-hover:scale-110 transition-transform group-hover:bg-gold group-hover:text-midnight group-hover:border-gold shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-slate text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
