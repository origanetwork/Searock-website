'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin on client
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * TestimonialsSection Component
 *
 * Displays customer testimonials with animated entrance effects.
 * Features a purple card design with quotation marks and customer avatars.
 *
 * Features:
 * - GSAP ScrollTrigger for viewport-based animations
 * - Responsive card layout with rounded corners and shadow
 * - Optimized image loading with next/image
 * - Mobile-first responsive design
 * - Accessibility-compliant semantic HTML with ARIA labels
 * - Dark mode support via Tailwind class strategy
 * - Performance-optimized with GPU acceleration
 */

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
}

/**
 * TestimonialCard Component
 * 
 * Individual testimonial card with avatar, name, and testimonial text.
 * Features a large orange quotation mark and purple background.
 */
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    // Check for reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations for users who prefer reduced motion
      return;
    }

    // Create GSAP timeline for card animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: 'top 85%', // Start animation when card is 85% in viewport
        toggleActions: 'play none none none', // Play once
      },
    });

    // Animate card entrance with fade and slide up
    // Using transform for GPU acceleration
    tl.from(cardElement, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: 'power3.out',
      force3D: true, // Force GPU acceleration
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={clsx(
        'relative mx-auto max-w-3xl rounded-3xl  p-4 shadow-xl transition-transform duration-300',
        'bg-purple-100/80 backdrop-blur-sm border-[.5px] border-primary',
        'will-change-transform', // Hint GPU acceleration
        'hover:scale-[1.02] hover:shadow-2xl',
        'sm:rounded-[2.5rem] sm:p-10 md:p-12 lg:p-14'
      )}
      style={{
        // Use transform3d to force GPU acceleration
        transform: 'translate3d(0, 0, 0)',
      }}
      role="article"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Large Orange Quotation Mark - Absolutely positioned */}
      <div
        className="absolute left-4 top-4 text-5xl font-bold leading-none sm:left-6 sm:top-6 sm:text-7xl md:left-8 md:top-8 md:text-8xl"
        style={{ color: '#FF8C42' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Customer Avatar - Circular */}
      <div className="mb-2 flex justify-center md:mb-8">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32">
          <Image
            src={testimonial.avatar}
            alt={`${testimonial.name} profile picture`}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
            priority={false} // Below the fold, lazy load
          />
        </div>
      </div>

      {/* Customer Name */}
      <h3
        className={clsx(
          'mb-2 text-center text-2xl font-bold leading-tight',
          "font-family-amsi-cond-700",
          'text-gray-900 dark:text-gray-800',
          'sm:text-3xl md:mb-8 md:text-4xl'
        )}
      >
        {testimonial.name}
      </h3>

      {/* Testimonial Text */}
      <blockquote>
        <p
          className={clsx(
            'text-center text-base leading-relaxed text-gray-800',
            "font-family-amsi-cond-400",
            'dark:text-gray-700',
            'sm:text-lg md:text-xl lg:text-2xl'
          )}
        >
          {testimonial.text}
        </p>
      </blockquote>
    </div>
  );
};

/**
 * TestimonialsSection Component
 * 
 * Main section that displays customer testimonials.
 * Currently shows a single testimonial but can be extended to show multiple.
 */
const TestimonialsSection: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);


  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Animate section header on scroll
    const headerElements = sectionElement.querySelectorAll('[data-header]');
    
    gsap.from(headerElements, {
      scrollTrigger: {
        trigger: sectionElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-linear-to-b from-white to-gray-50 py-10 md:py-16 lg:py-20"
      aria-label="Customer testimonials section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-5 text-center md:mb-14 lg:mb-16">
          {/* Main Heading */}
          <h2
            data-header
            className={clsx(
              'mb-4 text-4xl font-bold leading-tight tracking-normal',
              "font-family-amsi-cond-700",
              'sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl'
            )}
            style={{ color: 'var(--color-secondary)' }}
          >
            What Our Clients Say
          </h2>

          {/* Subtitle */}
          <p
            data-header
            className={clsx(
              'mx-auto max-w-3xl text-lg leading-relaxed text-gray-600',
              "font-family-amsi-cond-400",
              'dark:text-gray-500',
              'sm:text-xl md:text-2xl lg:text-3xl'
            )}
          >
            Hear from those who&apos;ve transformed their spaces with Searock.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mx-auto max-w-4xl">
          {testimonials.length > 0 && (
            <TestimonialCard testimonial={testimonials[current]} />
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
