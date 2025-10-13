import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

/**
 * HeroStory Component
 *
 * Displays the "Our Story" section with a family image, company mission statement,
 * and call-to-action button. Features decorative corner brackets on the image.
 *
 * Features:
 * - Decorative orange corner brackets (top-left, bottom-left)
 * - Rounded corners on image (top-right, bottom-right)
 * - Optimized image loading with next/image
 * - Mobile-first responsive design
 * - Accessibility-compliant semantic HTML
 * - Brand color integration via CSS custom properties
 * - Arrow icon animation on button hover
 */
const HeroStory: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20" aria-label="Our Story section">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 md:px-8 lg:max-w-3xl">
        {/* Image Container with Decorative Frame */}
        <div className="relative mb-8 md:mb-12">
          {/* Main Image with Rounded Corners (top-right, bottom-right) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl z-10 ">
            <Image
              src="/images/home/heroStory.webp"
              alt="Happy family enjoying their beautifully floored home"
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 800px"
              priority={false} // Below the fold, lazy load
            />
          </div>

          {/* Decorative Orange Corner Brackets */}
          {/* Top-Left Corner Bracket */}
          <div
            className="absolute z-0 -left-2 -top-4 h-75 w-20 sm:h-20 sm:w-20 md:h-24 md:w-24 border-2 rounded-bl-xl border-secondary"
            aria-hidden="true"
          ></div>
        </div>

        {/* Content Container */}
        <div className="space-y-6 md:space-y-8">
          {/* Mission Statement */}
          <p
            className={clsx(
              'text-center text-lg leading-relaxed',
              "font-['Amsi_Pro_Condensed_400']",
              'sm:text-xl md:text-2xl lg:text-3xl lg:leading-relaxed'
            )}
            style={{ color: 'var(--color-primary)' }}
          >
            Today, we&apos;re proud to be your trusted flooring partner, carefully selecting every product to meet our
            strict standards for quality and environmental responsibility.
          </p>

          {/* CTA Button - "Our Story" */}
          <div className="flex justify-center">
            <a
              href="/about"
              className={clsx(
                'group inline-flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold transition-all duration-300',
                "font-['Amsi_Pro_Condensed_600']",
                'bg-gradient-to-br from-[#5F5387] via-primary to-[#3C3063]',
                'w-full rounded-bl-4xl shadow-lg hover:shadow-xl',
                'focus:outline-none focus:ring-4 focus:ring-primary/30',
                'sm:w-auto sm:px-12 sm:py-5 sm:text-xl md:px-16 md:py-6 md:text-2xl'
              )}
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'white'
              }}
              aria-label="Learn more about our story"
            >
              <span>Our Story</span>

              {/* Arrow Icon - Animates on hover */}
              <svg
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 sm:h-7 sm:w-7 md:h-8 md:w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStory;
