'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    altText: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, altText }: BeforeAfterProps) {
    const t = useTranslations('Gallery');
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as MouseEvent).clientX;
        }

        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    useEffect(() => {
        if (!isResizing) return;

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isResizing]);

    return (
        <section className="py-24 bg-midnight relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        {t.rich('title', {
                            span: (chunks) => <span className="text-gold">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate text-lg">{t('subtitle')}</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* After Image (Background) */}
                    <img
                        src={afterImage}
                        alt={`After ${altText}`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-midnight/80 backdrop-blur text-gold text-sm font-bold px-3 py-1 rounded-full pointer-events-none">
                        {t('after')}
                    </div>

                    {/* Before Image (Foreground - Clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src={beforeImage}
                            alt={`Before ${altText}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-midnight/80 backdrop-blur text-white text-sm font-bold px-3 py-1 rounded-full pointer-events-none">
                            {t('before')}
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-midnight rounded-full flex items-center justify-center gap-[2px]">
                                <div className="w-[2px] h-3 bg-white/50 rounded-full" />
                                <div className="w-[2px] h-3 bg-white/50 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
