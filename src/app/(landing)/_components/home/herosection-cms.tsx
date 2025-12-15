import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import { fetchHeroBackground } from '@/lib/cms';
import HeroSection from './herosection';

async function getHeroBg(): Promise<string | null> {
  try {
    return await fetchHeroBackground();
  } catch {
    return null;
  }
}

const HeroSectionCMS = async () => {
  const bg = await getHeroBg();
  if (!bg) return <HeroSection />;

  return (
    <section
      className="relative flex w-full items-start sm:items-center justify-center overflow-hidden min-h-[80svh] sm:min-h-screen"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        {/* Mobile */}
        <Image
          src={bg}
          alt="Hero background"
          fill
          priority
          className="object-cover object-top sm:hidden"
          sizes="100vw"
        />
        {/* Desktop */}
        <Image
          src={bg}
          alt="Hero background"
          fill
          priority
          className="hidden sm:block object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent sm:from-transparent" />
      </div>

      <div className="z-10 mx-auto flex w-full max-w-xl flex-col items-center justify-center px-4 pt-2 pb-12 text-center sm:max-w-2xl sm:px-6 sm:pt-12 md:px-8 lg:pt-16 lg:pb-20">
        <h1 className="mb-2 mt-12 sm:mt-0 flex flex-col gap-0.5 md:mb-8 lg:mb-10 justify-center items-center">
          <span
            className={clsx(
              "font-family-amsi-cond-700 text-5xl font-extrabold leading-[1.1] tracking-normal",
              "text-primary",
              "sm:text-6xl sm:leading-[1.05] md:text-7xl md:leading-[1.05] lg:text-8xl lg:leading-[1.03]"
            )}
            style={{ color: 'var(--color-primary)' }}
          >
            Bring life
          </span>
          <span
            className={clsx(
              "font-family-amsi-cond-700 text-5xl font-extrabold leading-[1.1] tracking-normal",
              "text-primary ",
              "sm:text-6xl sm:leading-[1.05] md:text-7xl md:leading-[1.05] lg:text-8xl lg:leading-[1.03]"
            )}
            style={{ color: 'var(--color-primary)' }}
          >
            to your home
          </span>
        </h1>

        <div className="absolute inset-x-0 bottom-2 z-10 mx-auto w-full max-w-xl px-4 sm:static sm:inset-auto sm:bottom-auto sm:mt-8 sm:px-6 md:px-8">
          <p
            className={clsx(
              "mb-3 text-xl font-semibold leading-relaxed tracking-wide",
              "sm:text-3xl md:mb-5 md:text-4xl lg:mb-12 lg:text-5xl"
            )}
          >
            <span className="font-family-amsi-cond-600" style={{ color: 'var(--color-primary)' }}>
              Your{' '}
            </span>
            <span className="font-family-amsi-cond-700" style={{ color: 'var(--color-secondary)' }}>
              Flooring
            </span>
            <span className="font-family-amsi-cond-600" style={{ color: 'var(--color-primary)' }}>
              {' '}Partner
            </span>
          </p>

          <a
            href="/contact#location-heading"
            className={clsx(
              'group inline-flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold transition-all duration-300',
              "font-family-amsi-cond-600",
              'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40',
              'w-full rounded-bl-3xl shadow-lg hover:shadow-xl',
              'focus:outline-none focus:ring-4 focus:ring-white/30',
              'sm:w-auto sm:px-12 sm:py-5 sm:text-xl md:min-w-[300px] md:px-16 md:py-6 md:text-2xl lg:min-w-[360px]'
            )}
            style={{ color: 'var(--color-primary)' }}
            aria-label="Find a store near you"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6 md:h-7 md:w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-family-amsi-cond-700">Locate Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCMS;
