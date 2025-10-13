'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * StatsSection Component
 * 
 * Displays company statistics with animated counters using GSAP.
 * Numbers animate from 0 to target value when section enters viewport.
 * 
 * Features:
 * - GSAP ScrollTrigger for viewport-based animation
 * - Counter animation with easing
 * - Mobile-first responsive grid layout
 * - Accessible semantic HTML
 * - Performance-optimized animations with GPU acceleration
 * - Reduced motion support for accessibility
 */

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

// Helper function to determine border radius based on card position
// Moved outside component to prevent recreation on every render
const getBorderRadius = (index: number): string => {
  switch (index) {
    case 0:
      return 'rounded-br-4xl';
    case 1:
      return 'rounded-bl-4xl';
    case 2:
      return 'rounded-tr-4xl';
    case 3:
      return 'rounded-tl-4xl';
    default:
      return 'rounded-4xl';
  }
};

const StatCard: React.FC<StatCardProps> = ({ value, suffix, label, index }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Memoize border radius class to prevent recalculation
  const borderRadiusClass = useMemo(() => getBorderRadius(index), [index]);

  useEffect(() => {
    const numberElement = numberRef.current;
    const cardElement = cardRef.current;

    if (!numberElement || !cardElement) return;

    // Check for reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      numberElement.textContent = value.toString();
      return;
    }

    // Create GSAP timeline for card animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: 'top 80%', // Start animation when card is 80% in viewport
        toggleActions: 'play none none none', // Play once
        onEnter: () => {
          // Store reference to this specific ScrollTrigger
          scrollTriggerRef.current = ScrollTrigger.getById(cardElement.id) || null;
        },
      },
    });

    // Animate card entrance with fade and slide up
    // Using transform for GPU acceleration
    tl.from(cardElement, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: 'power3.out',
      delay: index * 0.1, // Stagger animation for each card
      force3D: true, // Force GPU acceleration
    });

    // Animate number counter with optimized DOM updates
    tl.to(
      { value: 0 },
      {
        value: value,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          const currentValue = Math.floor(this.targets()[0].value);
          if (numberElement) {
            // Use requestAnimationFrame for smoother DOM updates
            requestAnimationFrame(() => {
              numberElement.textContent = currentValue.toString();
            });
          }
        },
      },
      '-=0.3' // Start counter slightly before card animation ends
    );

    // Cleanup: Kill only THIS component's ScrollTrigger
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      tl.kill(); // Also kill the timeline
    };
  }, [value, index]);

  return (
    <div
      ref={cardRef}
      className={clsx(
        'flex flex-col items-center justify-center bg-white/95 border border-gray-200 p-8 shadow-2xl transition-transform duration-300',
        'will-change-transform', // Hint GPU acceleration for transforms
        'md:hover:scale-105 md:hover:shadow-xl', // Hover only on desktop (not touch devices)
        'sm:p-10 md:p-12 lg:p-14',
        borderRadiusClass
      )}
      style={{
        // Use transform3d to force GPU acceleration
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      {/* Animated Number */}
      <div className="mb-4 flex items-baseline">
        <span
          ref={numberRef}
          className={clsx(
            'text-5xl font-bold leading-none',
            "font-['Amsi_Pro_Condensed_700']",
            'sm:text-6xl md:text-7xl lg:text-8xl'
          )}
          style={{ color: 'var(--color-primary)' }}
        >
          0
        </span>
        <span
          className={clsx(
            'ml-1 text-4xl font-bold',
            "font-['Amsi_Pro_Condensed_700']",
            'sm:text-5xl md:text-6xl lg:text-7xl'
          )}
          style={{ color: 'var(--color-primary)' }}
        >
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p
        className={clsx(
          'text-center text-xl font-semibold leading-snug',
          "font-['Amsi_Pro_Condensed_600']",
          'sm:text-2xl md:text-3xl lg:text-4xl'
        )}
        style={{ color: 'var(--color-secondary)' }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: 10, suffix: 'K+', label: 'Homes Transformed' },
    { value: 50, suffix: 'K+', label: 'Happy Customers' },
    { value: 200, suffix: '+', label: 'Product Varieties' },
    { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10 md:py-20 lg:py-24"
      aria-label="Company statistics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <h2
          className={clsx(
            'text-center text-3xl font-bold leading-tight tracking-normal',
            "font-['Amsi_Pro_Condensed_700']",
            'sm:text-4xl md:mb-16 md:text-5xl lg:mb-20 lg:text-6xl'
          )}
          style={{ color: 'var(--color-primary)' }}
        >
          Laying the Foundation for
          <br />
          Beautiful Living
        </h2>

        {/* Stats Grid - 2 column layout */}
        <div className="grid grid-cols-2 gap-3 px-2 my-10 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
