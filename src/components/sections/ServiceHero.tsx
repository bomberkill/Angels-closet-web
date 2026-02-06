'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
    badge: string;
    titlePrefix: string;
    titleSuffix: string;
    description: string;
    image: string;
    icon: LucideIcon;
    colorClass: string;     // e.g. "text-blue-400"
    bgClass: string;        // e.g. "bg-blue-500/10"
    borderClass: string;    // e.g. "border-blue-500/20"
}

export default function ServiceHero({
    badge,
    titlePrefix,
    titleSuffix,
    description,
    image,
    icon: Icon,
    colorClass,
    bgClass,
    borderClass
}: ServiceHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-midnight/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/60" />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${bgClass} border ${borderClass} ${colorClass} mb-6 backdrop-blur-md`}
                >
                    <Icon size={16} />
                    <span className="text-sm font-medium tracking-wide">{badge}</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-lg">
                    {titlePrefix} <span className={colorClass}>{titleSuffix}</span>
                </h1>

                <p className="text-xl text-slate-100 max-w-2xl mx-auto drop-shadow-md font-medium">
                    {description}
                </p>
            </div>
        </section>
    );
}
