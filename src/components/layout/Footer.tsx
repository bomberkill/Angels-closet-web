'use client';

import { Link } from '@/i18n/routing';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const tServices = useTranslations('Header'); // Reuse for service names

    const footerLinks = [
        {
            title: t('company'),
            links: [
                { name: tServices('about'), href: '/about' },
                { name: tServices('getQuote'), href: '/contact' },
            ],
        },
        {
            title: t('services'),
            links: [
                { name: tServices('moving'), href: '/moving' },
                { name: tServices('cleaning'), href: '/cleaning' },
                { name: tServices('remodeling'), href: '/remodeling' },
            ],
        },
    ];

    return (
        <footer className="bg-midnight border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1.5 lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-64 h-16">
                                <Image
                                    src="/logo3.png"
                                    alt="Angel's Closet"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-slate leading-relaxed mb-6">
                            {t('slogan')}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="p-2 rounded-full bg-white/5 text-slate hover:bg-gold hover:text-midnight transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-bold mb-6">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate hover:text-gold transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">{t('contact')}</h3>
                        <ul className="space-y-4 text-slate">
                            {/* <li className="flex items-start gap-3">
                                <MapPin className="text-gold mt-1" size={18} />
                                <span>123 Premium Lane, Suite 100<br />Silver Spring, MD 20910</span>
                            </li> */}
                            <li className="flex items-center gap-3">
                                <Phone className="text-gold" size={18} />
                                <span>+1 (240) 309 1643</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-gold" size={18} />
                                <span>contact@angelscloset.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate text-sm">
                        &copy; {new Date().getFullYear()} Angel&apos;s Closet. {t('rights')}
                    </p>
                    <div className="flex gap-8 text-sm text-slate">
                        <Link href="/terms" className="hover:text-gold transition-colors">{t('terms')}</Link>
                        <Link href="/privacy" className="hover:text-gold transition-colors">{t('privacy')}</Link>
                    </div>
                </div>

                {/* Developer Credit */}
                <div className="mt-4 flex justify-center">
                    <a href="mailto:ronaldkamwa@yahoo.com" className="text-slate-dark text-xs hover:text-gold transition-colors">
                        {t('developer')}
                    </a>
                </div>
            </div>
        </footer>
    );
}
