'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-midnight text-white px-6">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated 404 */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl md:text-9xl font-serif font-bold text-gold opacity-30 leading-none select-none mb-8"
                >
                    404
                </motion.h1>

                {/* Content Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative z-10 mt-8"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-slate mb-10 max-w-md mx-auto leading-relaxed">
                        {t('description')}
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-midnight font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <Home size={20} />
                        {t('button')}
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
