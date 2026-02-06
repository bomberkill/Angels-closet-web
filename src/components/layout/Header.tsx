'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('moving'), href: '/moving' },
        { name: t('cleaning'), href: '/cleaning' },
        { name: t('remodeling'), href: '/remodeling' },
        { name: t('about'), href: '/about' },
        { name: t('contact'), href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-midnight/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <div className="relative w-40 md:w-64 h-12 md:h-16">
                        <Image
                            src="/logo3.png"
                            alt="Angel's Closet"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-light hover:text-gold transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    {/* Desktop Lang Switcher */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/" locale="en" className={cn("text-xs font-bold", pathname.startsWith('/en') ? "text-gold" : "text-slate")}>EN</Link>
                        <span className="text-slate/30">|</span>
                        <Link href="/" locale="fr" className={cn("text-xs font-bold", pathname.startsWith('/fr') ? "text-gold" : "text-slate")}>FR</Link>
                    </div>

                    <Link
                        href="/contact"
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light text-midnight font-bold rounded-full transition-transform hover:scale-105"
                    >
                        <Phone size={18} />
                        <span>{t('getQuote')}</span>
                    </Link>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative z-[1000] text-gold p-2 active:scale-95 transition-transform"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-0 left-0 w-screen h-[100dvh] bg-midnight z-[999] flex flex-col items-center justify-center gap-8 md:hidden overflow-y-auto overscroll-contain"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-gold transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Lang Switcher */}
                        <div className="flex items-center gap-6 mt-4">
                            <Link
                                href="/"
                                locale="en"
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn("text-xl font-bold", pathname.startsWith('/en') ? "text-gold" : "text-white/50")}
                            >
                                ENGLISH
                            </Link>
                            <span className="text-white/20 text-xl">|</span>
                            <Link
                                href="/"
                                locale="fr"
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn("text-xl font-bold", pathname.startsWith('/fr') ? "text-gold" : "text-white/50")}
                            >
                                FRANÇAIS
                            </Link>
                        </div>

                        <Link
                            href="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-midnight font-bold rounded-full text-lg"
                        >
                            {t('getQuote')}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
