'use client';

import { motion } from 'framer-motion';
import { Truck, Home, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function ServiceBento() {
    const t = useTranslations('ServiceBento');

    const services = [
        {
            id: 'moving',
            title: t('movingTitle'),
            description: t('movingDesc'),
            icon: Truck,
            href: '/moving',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop', // Modern bright living room with boxes
            color: 'bg-blue-500', // Used for overlay opacity
            textColor: 'text-blue-400',
            colSpan: 'md:col-span-2',
        },
        {
            id: 'remodeling',
            title: t('remodelingTitle'),
            description: t('remodelingDesc'),
            icon: Home,
            href: '/remodeling',
            image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop', // Kitchen interior
            color: 'bg-gold',
            textColor: 'text-gold',
            colSpan: 'md:col-span-1',
        },
        {
            id: 'cleaning',
            title: t('cleaningTitle'),
            description: t('cleaningDesc'),
            icon: Sparkles,
            href: '/cleaning',
            image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1080&auto=format&fit=crop', // Confirmed valid cleaning image
            color: 'bg-emerald-500',
            textColor: 'text-emerald-400',
            colSpan: 'md:col-span-3',
        },
    ];

    return (
        <section className="py-24 px-6 bg-midnight-light relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        {t.rich('sectionTitle', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate max-w-2xl mx-auto text-lg">
                        {t('sectionSubtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-white/5 bg-midnight hover:border-white/10 transition-all duration-500 hover:shadow-2xl overflow-hidden",
                                service.colSpan
                            )}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                />
                                <div className={cn("absolute inset-0 opacity-80 mix-blend-multiply transition-opacity duration-500", service.color)} />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="flex justify-between items-start">
                                    <div className={cn("p-4 rounded-2xl bg-white/5", service.textColor)}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors group-hover:scale-110"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                                    <p className="text-slate group-hover:text-white/80 transition-colors leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
