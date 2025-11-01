import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative flex w-full items-start sm:items-center justify-center overflow-hidden min-h-[80svh] sm:min-h-screen"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay - Optimized with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.webp"
          alt="Beautiful modern living room interior"
          fill
          priority // Load immediately as it's above the fold
          quality={90}
          className="object-cover object-top sm:object-center"
          sizes="100vw" // Full viewport width for hero
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent sm:from-transparent" />
      
      </div>

      {/* Content Container - Centered with responsive padding */}
      <div className="z-10 mx-auto flex w-full max-w-xl flex-col items-center justify-center px-4 pt-2 pb-12 text-center sm:max-w-2xl sm:px-6 sm:pt-12 md:px-8 lg:pt-16 lg:pb-20">
        
        {/* Main Headline - Split into two lines for visual impact */}
        <h1 className="mb-2 mt-5 sm:mt-0 flex flex-col gap-0.5 md:mb-8 lg:mb-10 justify-center items-center">
          {/* "Bring life" line - Uses primary color (#3C3063) */}
          <span 
            className={clsx(
              "font-family-amsi-cond-700 text-5xl font-extrabold leading-tight tracking-normal",
              "text-primary",
              "sm:text-6xl md:text-7xl lg:text-8xl"
            )}
            style={{ color: 'var(--color-primary)' }} // Fallback to CSS variable
          >
            Bring life
          </span>
          
          {/* "to your home" line - Also in primary color */}
          <span 
            className={clsx(
              "font-family-amsi-cond-700 text-5xl font-extrabold leading-tight tracking-normal",
              "text-primary ",
              "sm:text-6xl md:text-7xl lg:text-8xl"
            )}
            style={{ color: 'var(--color-primary)' }}
          >
            to your home
          </span>
        </h1>
        
        {/* Bottom group: Tagline + CTA, anchored to bottom on mobile */}
        <div className="absolute inset-x-0 bottom-2 z-10 mx-auto w-full max-w-xl px-4 sm:static sm:inset-auto sm:bottom-auto sm:mt-8 sm:px-6 md:px-8">
        {/* Tagline - "Your Flooring Partner" with orange highlight on "Flooring" */}
        <p 
          className={clsx(
            "mb-3 text-xl font-semibold leading-relaxed tracking-wide",
            "sm:text-3xl md:mb-5 md:text-4xl lg:mb-12 lg:text-5xl"
          )}
        >
          <span 
            className="font-['Amsi_Pro_Condensed_600']"
            style={{ color: 'var(--color-primary)' }}
          >
            Your{' '}
          </span>
          {/* "Flooring" highlighted in secondary orange color */}
          <span 
            className="font-['Amsi_Pro_Condensed_700']"
            style={{ color: 'var(--color-secondary)' }}
          >
            Flooring
          </span>
          <span 
            className="font-['Amsi_Pro_Condensed_600']"
            style={{ color: 'var(--color-primary)' }}
          >
            {' '}Partner
          </span>
        </p>

        {/* CTA Button - "Locate Store" with location icon */}
        <a
          href="/contact#location-heading"
          className={clsx(
            "group inline-flex w-full max-w-xs items-center justify-center gap-2 px-6 py-3 text-base font-semibold transition-all duration-300 sm:max-w-sm",
            "bg-primary text-white hover:bg-primary-600",
            "focus:outline-none focus:ring-4 focus:ring-primary/50",
            "sm:px-8 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl lg:px-12 lg:py-6 lg:text-2xl",
            "shadow-lg hover:shadow-xl hover:scale-[1.02]",
            "rounded-bl-4xl"
          )}
          style={{ 
            backgroundColor: 'var(--color-primary)',
          }}
          aria-label="Find a store near you"
        >
          {/* Location Pin Icon - SVG inline for performance */}
          <svg 
            className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6 md:h-7 md:w-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          
          <span className="font-['Amsi_Pro_Condensed_700']">
            Locate Store
          </span>
        </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;