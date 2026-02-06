'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

interface PricingProps {
    title: string;
    subtitle: string;
    tiers: {
        name: string;
        description: string;
        features: string[];
        recommended?: boolean;
    }[];
    ctaText: string;
    ctaLink: string;
}

export default function PricingCards({ title, subtitle, tiers, ctaText, ctaLink }: PricingProps) {
    return (
        <section className="py-24 bg-midnight relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{title}</h2>
                    <p className="text-slate text-lg">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${tier.recommended
                                    ? 'bg-white/10 border-gold/50 shadow-[0_0_30px_rgba(251,191,36,0.1)] scale-105 z-10'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                        >
                            {tier.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-midnight text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${tier.recommended ? 'text-gold' : 'text-white'}`}>
                                    {tier.name}
                                </h3>
                                <p className="text-slate-light text-sm">{tier.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-200">
                                        <div className="mt-1 min-w-[18px]">
                                            <Check size={18} className="text-gold" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={ctaLink}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${tier.recommended
                                        ? 'bg-gold text-midnight hover:bg-gold-light'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {ctaText}
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
