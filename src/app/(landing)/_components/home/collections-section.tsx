import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

/**
 * CollectionsSection Component
 *
 * Displays the "Our Collections" section showcasing different product categories
 * (Tiles, Flooring, Granite, Bathware, etc.) with image galleries and CTAs.
 *
 * Features:
 * - Section header with title and description
 * - Reusable CollectionCard component for each category
 * - Three-image gallery with unique rounded corners
 * - Mobile-first responsive design
 * - Optimized image loading with next/image
 * - Accessibility-compliant semantic HTML
 * - Brand color integration via CSS custom properties
 */

interface CollectionImage {
  src: string;
  alt: string;
}

interface CollectionCardProps {
  title: string;
  description: string;
  images: [CollectionImage, CollectionImage, CollectionImage]; // Exactly 3 images
  ctaText?: string;
  ctaHref?: string;
}

/**
 * CollectionCard Component
 *
 * Displays a single collection category with title, description,
 * three showcase images, and an "Explore More" CTA button.
 *
 * Image Layout:
 * - Left image: rounded bottom-left corner (rounded-bl-[3rem])
 * - Center image: rectangular (no rounded corners)
 * - Right image: rounded top-right corner (rounded-tr-[3rem])
 */
const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  description,
  images,
  ctaText = 'Explore More',
}) => {
  return (
    <div className="w-full">
      {/* Category Title - Orange */}
      <h3
        className={clsx(
          'mb-4 text-3xl font-bold uppercase tracking-wide',
          "font-['Amsi_Pro_Condensed_700']",
          'sm:text-4xl md:mb-5 md:text-5xl lg:text-6xl'
        )}
        style={{ color: 'var(--color-secondary)' }}
      >
        {title}
      </h3>

      {/* Description Text - Dark Gray */}
      <p
        className={clsx(
          'mb-8 text-lg leading-relaxed text-gray-700',
          "font-['Amsi_Pro_Condensed_400']",
          'sm:text-lg md:mb-10 md:text-xl lg:mb-12 lg:text-2xl'
        )}
      >
        {description}
      </p>

      {/* Image Gallery - 3 Images in Row */}
      <div className="mb-6 grid grid-cols-3 gap-1 sm:grid-cols-3 sm:gap-4 md:mb-8 md:gap-5">
        {/* Left Image - Rounded Bottom-Left Corner */}
        <div className="relative aspect-[2/4] w-full overflow-hidden rounded-bl-[2rem] rounded-xs sm:rounded-bl-[3rem] md:rounded-bl-[4rem]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        {/* Center Image - Rectangular (No Rounded Corners) */}
        <div className="relative aspect-[2/4] w-full rounded-xs overflow-hidden">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        {/* Right Image - Rounded Top-Right Corner */}
        <div className="relative aspect-[2/4] w-full overflow-hidden">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* CTA Button - "Explore More" */}
      <div className="flex justify-center">
        <a
          href="/gallery"
          className={clsx(
            'group inline-flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold transition-all duration-300',
            "font-['Amsi_Pro_Condensed_600']",
            'bg-gradient-to-br from-[#5F5387] via-primary to-[#3C3063]',
            'w-full rounded-bl-3xl shadow-lg hover:shadow-xl',
            'focus:outline-none focus:ring-4 focus:ring-primary/30',
            'sm:w-auto sm:px-12 sm:py-5 sm:text-xl md:px-16 md:py-6 md:text-2xl lg:w-86'
          )}
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'white'
          }}
          aria-label="Learn more about our story"
        >
          <span>{ctaText}</span>

          
        
        </a>
      </div>
    </div>
  );
};

const tiles = [
  {
    title: 'Tiles',
    description:
      "Searock's tiles collection blends style, durability, and modern design. From classic to contemporary, our tiles transform any space with lasting elegance and quality.",
    images: [
      {
        src: '/images/collections/tile-1.webp',
        alt: 'Modern minimalist interior with wooden flooring and white walls'
      },
      {
        src: '/images/collections/tile-2.webp',
        alt: 'Colorful geometric patterned tiles in hotel corridor'
      },
      {
        src: '/images/collections/tile-3.webp',
        alt: 'Contemporary white interior with neutral tiled flooring'
      }
    ] as [CollectionImage, CollectionImage, CollectionImage],
    ctaHref: '/collections/tiles'
  }
  // Add more collections here (Flooring, Granite, Bathware, etc.)
];
const granites = [
  {
    title: 'Granite',
    description:
      'Searock’s granite collection blends strength and elegance, offering durable, timeless surfaces that elevate any space.',
    images: [
      {
        src: '/images/collections/granites-1.webp',
        alt: 'Modern minimalist interior with wooden flooring and white walls'
      },
      {
        src: '/images/collections/granites-2.webp',
        alt: 'Colorful geometric patterned tiles in hotel corridor'
      },
      {
        src: '/images/collections/granites-3.webp',
        alt: 'Contemporary white interior with neutral tiled flooring'
      }
    ] as [CollectionImage, CollectionImage, CollectionImage],
    ctaHref: '/collections/tiles'
  }
  // Add more collections here (Flooring, Granite, Bathware, etc.)
];
const bathwares = [
  {
    title: 'Bathware',
    description:
      'Searock’s bathware collection blends style and functionality, offering elegant, durable solutions that make every bath space refreshing.',
    images: [
      {
        src: '/images/collections/bathware-1.webp',
        alt: 'Modern minimalist interior with wooden flooring and white walls'
      },
      {
        src: '/images/collections/bathware-2.webp',
        alt: 'Colorful geometric patterned tiles in hotel corridor'
      },
      {
        src: '/images/collections/bathware-3.webp',
        alt: 'Contemporary white interior with neutral tiled flooring'
      }
    ] as [CollectionImage, CollectionImage, CollectionImage],
    ctaHref: '/collections/tiles'
  }
  // Add more collections here (Flooring, Granite, Bathware, etc.)
];
/**
 * CollectionsSection Component
 *
 * Main section container that displays the "Our Collections" header
 * and renders multiple CollectionCard components.
 */
const CollectionsSection: React.FC = () => {
  // Collection data - can be extended to include multiple categories

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100 py-12 md:py-16 lg:py-20"
      aria-label="Our Collections section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          {/* Main Heading - "Our Collections" */}
          <h2
            className={clsx(
              'mb-4 text-4xl font-bold leading-tight tracking-normal',
              "font-['Amsi_Pro_Condensed_700']",
              'sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl'
            )}
            style={{ color: 'var(--color-primary)' }}
          >
            Our Collections
          </h2>

          {/* Subtitle - Description */}
          <p
            className={clsx(
              'mx-auto max-w-3xl text-lg leading-relaxed text-gray-600',
              "font-['Amsi_Pro_Condensed_400']",
              'sm:text-lg md:text-xl lg:text-2xl'
            )}
          >
            Discover our extensive range of flooring solutions, each crafted to deliver exceptional quality, durability,
            and aesthetic appeal for your space.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20 mb-10">
          {tiles.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              images={collection.images}
              ctaHref={collection.ctaHref}
            />
          ))}
        </div>
        <div className="space-y-12 md:space-y-16 lg:space-y-20 mb-10">
          {granites.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              images={collection.images}
              ctaHref={collection.ctaHref}
            />
          ))}
        </div>
        <div className="space-y-12 md:space-y-16 lg:space-y-20 ">
          {bathwares.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              description={collection.description}
              images={collection.images}
              ctaHref={collection.ctaHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
