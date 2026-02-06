'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');
    const tHeader = useTranslations('Header');

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Moving',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message
                }),
            });

            if (res.ok) {
                // Send confirmation email asynchronously (fire and forget)
                fetch('/api/confirmation', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: `${formData.firstName} ${formData.lastName}`,
                        email: formData.email
                    }),
                }).catch(err => console.error('Failed to send confirmation', err));

                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', service: 'Moving', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-midnight text-white">
            <Header />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                            {t.rich('title', {
                                span: (chunks) => <span className="text-gold">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl text-slate max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                        {/* Contact Info */}
                        <div className="p-12 bg-midnight-light space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">{t('infoTitle')}</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-slate hover:text-white transition-colors">
                                        <div className="p-3 rounded-full bg-white/5 text-gold">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-light">{t('phoneTitle')}</p>
                                            <p className="font-medium">+1 (240) 309 1643</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-slate hover:text-white transition-colors">
                                        <div className="p-3 rounded-full bg-white/5 text-gold">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-light">{t('emailTitle')}</p>
                                            <p className="font-medium">contact@angelscloset.com</p>
                                        </div>
                                    </div>

                                    {/* <div className="flex items-center gap-4 text-slate hover:text-white transition-colors">
                                        <div className="p-3 rounded-full bg-white/5 text-gold">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-light">{t('locationTitle')}</p>
                                            <p className="font-medium">{t('city')}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            {/* <div className="h-64 rounded-2xl bg-slate/10 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-blue-500/5 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center text-slate-light text-sm">
                                    {t('mapLoading')}
                                </div>
                            </div> */}
                        </div>

                        {/* Contact Form */}
                        <div className="p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-light">{t('formFirstName')}</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-light">{t('formLastName')}</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-light">{t('formPhone')}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-light">{t('formEmail')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-light">{t('formService')}</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                    >
                                        <option value="Moving" className="bg-midnight text-slate">{tHeader('moving')}</option>
                                        <option value="Cleaning" className="bg-midnight text-slate">{tHeader('cleaning')}</option>
                                        <option value="Remodeling" className="bg-midnight text-slate">{tHeader('remodeling')}</option>
                                        <option value="Other" className="bg-midnight text-slate">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-light">{t('formMessage')}</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                        placeholder=""
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className="w-full py-4 bg-gold hover:bg-gold-light text-midnight font-bold rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : t('formButton')}
                                    {status === 'success' ? <div /> : <Send size={18} />}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
}
