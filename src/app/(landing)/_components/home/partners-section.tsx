 'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * PartnersSection Component
 *
 * Displays the "Our Trusted Partners" section with partner logos on a purple background.
 * Features a textured background image overlay and responsive logo grid.
 *
 * Features:
 * - Background image with purple gradient overlay
 * - Section header with title and subtitle
 * - Responsive logo grid (1 column mobile → 2 columns tablet → 3 columns desktop)
 * - Partner logo cards with unique rounded corners
 * - Mobile-first responsive design
 * - Optimized image loading with next/image
 * - Accessibility-compliant semantic HTML
 */

interface PartnerLogo {
  src: string;
  alt: string;
  name: string;
}

/**
 * PartnersSection Component
 *
 * Main section that displays partner logos in a responsive grid layout.
 * Each logo card has a light gray background with unique rounded corners.
 */
const PartnersSection: React.FC = () => {
  // Partner logos data - placeholder logos (replace with actual partner logos)
  const partners: PartnerLogo[] = [
    {
      src: '/images/partners/haique.png',
      alt: 'IPSUM partner logo',
      name: 'IPSUM',
    },
    {
      src: '/images/partners/kajaria.png',
      alt: 'Partner 2 logo',
      name: 'Partner 2',
    },
    {
      src: '/images/partners/mapai.png',
      alt: 'Logoipsum partner logo',
      name: 'Logoipsum',
    },
    {
        src: '/images/partners/RAK.png',
        alt: 'Partner 2 logo',
        name: 'Partner 2',
    },
    {
      src: '/images/partners/somany.png',
      alt: 'IPSUM partner logo',
      name: 'IPSUM',
    },
    {
      src: '/images/partners/varmora.png',
      alt: 'Logoipsum partner logo',
      name: 'Logoipsum',
    },
  ];

  /**
   * Shape per card to match design
   * - Card 0 (left): rounded top-right corner
   * - Card 1 (center): rounded bottom-left corner
   * - Card 2 (right): rounded top-right corner
   */
  const getCardBorderRadius = (index: number): string => {
    switch (index) {
      case 0:
        return 'rounded-bl-[2.5rem] sm:rounded-bl-[3rem]';
      case 1:
        return 'rounded-bl-[2.5rem] sm:rounded-bl-[3rem]';
      case 2:
        return 'rounded-bl-[2.5rem] sm:rounded-bl-[3rem]';
      default:
        return '';
    }
  };

  /**
   * Position tweaks on large screens to mimic staggered layout
   * - Card 0 (left): default
   * - Card 1 (center): translate down
   * - Card 2 (right): default
   */
  const getCardPositionClasses = (index: number): string => {
    switch (index) {
      case 1:
        return 'translate-y-8 md:translate-y-8 lg:translate-y-8';
      default:
        return '';
    }
  };

  // paging state: show 3 at a time
  const pageSize = 3;
  const [startIndex, setStartIndex] = useState(0);

  // refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const rotationTweenRef = useRef<gsap.core.Tween | null>(null);

  // compute visible partners (wrap-around)
  const visiblePartners = useMemo(() => {
    const out: PartnerLogo[] = [];
    if (partners.length === 0) return out;
    for (let i = 0; i < Math.min(pageSize, partners.length); i++) {
      out.push(partners[(startIndex + i) % partners.length]);
    }
    return out;
  }, [partners, startIndex]);
  // function to advance page with smooth animation
  const advance = () => {
    if (!gridRef.current || partners.length <= pageSize) return;
    const grid = gridRef.current;
    const tl = gsap.timeline();
    tl.to(grid, { y: 20, opacity: 0, duration: 0.35, ease: 'power2.in' })
      .add(() => {
        setStartIndex((prev) => (prev + pageSize) % partners.length);
      })
      .to(grid, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' });
  };

  // animate in cards on index change (staggered translate)
  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('[data-partner-inner]');
    gsap.fromTo(
      items,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', stagger: 0.06 }
    );
  }, [startIndex]);

  // start/stop rotation when in viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        if (!rotationTweenRef.current) {
          rotationTweenRef.current = gsap.to({}, {
            duration: 4,
            repeat: -1,
            onRepeat: advance,
          });
        }
      },
      onLeave: () => {
        rotationTweenRef.current?.kill();
        rotationTweenRef.current = null;
      },
      onEnterBack: () => {
        if (!rotationTweenRef.current) {
          rotationTweenRef.current = gsap.to({}, {
            duration: 4,
            repeat: -1,
            onRepeat: advance,
          });
        }
      },
      onLeaveBack: () => {
        rotationTweenRef.current?.kill();
        rotationTweenRef.current = null;
      },
    });

    // initial reveal
    if (gridRef.current) {
      gsap.fromTo(gridRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });
    }

    return () => {
      st.kill();
      rotationTweenRef.current?.kill();
      rotationTweenRef.current = null;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20"
      aria-label="Our Trusted Partners section"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-10 opacity-3">
        <Image
          src="/images/home/partners-bg.webp"
          alt="Partners background texture"
          fill
          quality={85}
          className="object-cover"
          sizes="100vw"
          priority={false} // Below the fold, lazy load
        />
      </div>

      {/* Purple Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 50%, var(--color-primary-600) 100%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-5 text-center md:mb-14 lg:mb-16">
          {/* Main Heading - "Our Trusted Partners" */}
          <h2
            className={clsx(
              'mb-4 text-4xl font-bold leading-tight tracking-normal text-white',
              "font-['Amsi_Pro_Condensed_700']",
              'sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl'
            )}
          >
            Our Trusted Partners
          </h2>

          {/* Subtitle - Description */}
          <p
            className={clsx(
              'mx-auto max-w-3xl text-lg leading-relaxed text-white/80',
              "font-['Amsi_Pro_Condensed_400']",
              'sm:text-lg md:text-xl lg:text-2xl'
            )}
          >
            Collaborating with the best to deliver lasting excellence.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div ref={gridRef} className="grid grid-cols-3 items-start gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 z-20">
          {visiblePartners.map((partner, index) => (
            <div
              key={index}
              className={clsx(
                // Card base
                'flex items-center justify-center p-2 transition-transform duration-300',
                // Card surface to match the reference (light panel with border)
                'bg-gray-200/40 backdrop-blur-[1px] border-[0.5px] border-white/80 shadow-[0_6px_24px_rgba(0,0,0,0.15)]',
                'hover:scale-[1.02] hover:bg-white/25',
                'sm:p-10 md:p-12 lg:p-14',
                getCardBorderRadius(index),
                getCardPositionClasses(index)
              )}
              data-partner-card
              style={{
                minHeight: '68px', // Ensure consistent card height
              }}
            >
              {/* Inner wrapper receives enter animations; outer keeps any static offset */}
              <div data-partner-inner className="w-full h-full">
                {/* Partner Logo */}
                <div className="relative h-15 w-full sm:h-24 md:h-28">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="500px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
