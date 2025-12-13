"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { clsx } from 'clsx';

/**
 * HeroAbout Component
 * 
 * Displays the "About Searock" section with company description and maintenance support feature.
 * Uses mobile-first responsive design with Tailwind CSS v4 utilities.
 * 
 * Features:
 * - Background image optimization with next/image
 * - Centered content layout with responsive typography
 * - Icon with decorative diamond container
 * - Accessibility-compliant semantic HTML
 * - Performance-optimized with proper image loading
 */
const HeroAbout: React.FC = () => {
    const slides = [
        { label: 'Maintenance Support', icon: 'home' },
        { label: 'Wide Collections', icon: 'layers' },
        { label: 'Best Prices', icon: 'rupee' },
        { label: 'Quality Products', icon: 'shield' },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(id);
    }, [slides.length]);

    return (
    <section
        className="relative flex min-h-[calc(75svh)] w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24"
        aria-label="About Searock section"
    >
        {/* gradiant overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/50 to-white/90"></div>

        {/* Background Image - Optimized with next/image for performance */}
        <div className="absolute inset-0 z-0">
            <Image
                src="/images/home/heroAboutbg.webp"
                alt="Textured background pattern"
                fill
                quality={85}
                className="object-cover"
                sizes="100vw" // Full viewport width
                priority={false} // Not above the fold, lazy load
            />
        </div>

        {/* Content Container - Centered with responsive padding */}
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 md:px-8 lg:max-w-5xl">

            {/* Main Heading - "About Searock" */}
            <h2
                className={clsx(
                    "mb-6 text-4xl font-bold leading-tight tracking-normal",
                    "font-['Amsi_Pro_Condensed_700']",
                    "sm:text-5xl md:mb-8 md:text-6xl lg:mb-10 lg:text-7xl"
                )}
                style={{ color: 'var(--color-primary)' }} // Primary brand color (#3C3063)
            >
                About Searock
            </h2>

            {/* Description Paragraph - Company mission and values */}
            <p
                className={clsx(
                    "mb-12 max-w-3xl text-lg leading-relaxed text-primary/90",
                    "font-['Amsi_Pro_Condensed_400']",
                    "sm:text-lg md:mb-16 md:text-xl lg:mb-20 lg:text-2xl lg:leading-relaxed"
                )}
               
            >
                Welcome to searock

Building your home is a dream, and we know the process can be challenging.
At Searock, we’re here to make it easier.

For 30 years, families have trusted us not just for products, but for clear and honest guidance.

Our purpose is simple: helping you choose the right products so your home-building journey feels smoother and more confident.
            </p>

            {/* Feature Icon with Label - Auto-rotating */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:hidden">

                {/* Diamond-shaped Icon Container - Rotated square with rounded corners */}
                <div
                    className={clsx(
                        "relative flex h-20 w-20 rotate-45 items-center justify-center overflow-hidden",
                        "sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                    )}
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '1rem' // Rounded corners on the diamond
                    }}
                    aria-hidden="true" // Decorative element
                >
                    {/* Dashed Circle Border - Decorative accent */}
                    <div
                        className="absolute inset-4 rounded-full border-2 border-dashed border-white/40"
                        style={{ borderStyle: 'dashed' }} />

                    {/* Icon - Counter-rotated to appear upright (varies by slide) */}
                    {slides[current].icon === 'home' && (
                        <svg
                            className="-rotate-45 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'var(--color-secondary)' }}
                        >
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                    )}
                    {slides[current].icon === 'rupee' && (
                        <svg
                            className="-rotate-45 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'var(--color-secondary)' }}
                        >
                            <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">₹</text>
                        </svg>
                    )}
                    {slides[current].icon === 'layers' && (
                        <svg
                            className="-rotate-45 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'var(--color-secondary)' }}
                        >
                            <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 17l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    {slides[current].icon === 'shield' && (
                        <svg
                            className="-rotate-45 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: 'var(--color-secondary)' }}
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>

                {/* Feature Label - dynamic */}
                <p
                    className={clsx(
                        "text-2xl font-semibold tracking-wide",
                        "font-['Amsi_Pro_Condensed_600']",
                        "sm:text-3xl md:text-4xl lg:text-5xl"
                    )}
                    style={{ color: 'var(--color-primary)' }}
                    aria-live="polite"
                >
                    {slides[current].label}
                </p>
            </div>

            <div className="hidden lg:grid grid-cols-4 items-start justify-items-center gap-20 xl:gap-24">
                {slides.map((s, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div
                            className={clsx(
                                "relative flex h-36 w-36 rotate-45 items-center justify-center overflow-hidden"
                            )}
                            style={{ backgroundColor: 'var(--color-primary)', borderRadius: '1rem' }}
                            aria-hidden="true"
                        >
                            <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/40" style={{ borderStyle: 'dashed' }} />

                            {s.icon === 'home' && (
                                <svg className="-rotate-45 h-14 w-14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-secondary)' }}>
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </svg>
                            )}
                            {s.icon === 'rupee' && (
                                <svg className="-rotate-45 h-20 w-20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-secondary)' }}>
                                    <text x="12" y="16" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">₹</text>
                                </svg>
                            )}
                            {s.icon === 'layers' && (
                                <svg className="-rotate-45 h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-secondary)' }}>
                                    <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 12l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 17l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                            {s.icon === 'shield' && (
                                <svg className="-rotate-45 h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--color-secondary)' }}>
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                        <p
                            className={clsx(
                                "mt-8 text-2xl font-semibold tracking-wide whitespace-nowrap",
                                "font-['Amsi_Pro_Condensed_600']",
                                "lg:text-3xl"
                            )}
                            style={{ color: 'var(--color-primary)' }}
                        >
                            {s.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default HeroAbout;