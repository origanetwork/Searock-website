import React from 'react';
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
const HeroAbout: React.FC = () => (
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
                At Searock, we are dedicated to transforming spaces with premium flooring, tiles, granites, and bathware solutions. Blending style, durability, and functionality, our products are crafted to meet the highest standards of design and quality. We focus on helping customers create interiors that reflect elegance, comfort, and lasting value.
            </p>

            {/* Feature Icon with Label - Maintenance Support */}
            <div className="flex flex-col items-center gap-4 md:gap-6">

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

                    {/* Home Icon - Counter-rotated to appear upright */}
                    <svg
                        className="-rotate-45 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: 'var(--color-secondary)' }} // Orange accent color
                    >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </div>

                {/* Feature Label - "Maintenance Support" */}
                <p
                    className={clsx(
                        "text-2xl font-semibold tracking-wide",
                        "font-['Amsi_Pro_Condensed_600']",
                        "sm:text-3xl md:text-4xl lg:text-5xl"
                    )}
                    style={{ color: 'var(--color-primary)' }}
                >
                    Maintenance Support
                </p>
            </div>
        </div>
    </section>
);

export default HeroAbout;