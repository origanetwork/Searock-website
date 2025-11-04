'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' }
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close with ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Focus first link when menu opens (no body scroll lock for popover)
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      {/* Sticky header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="relative mx-auto flex h-16 md:h-20 max-w-screen-xl items-center justify-between px-4">
          {/* Logo: centered, larger size */}
          <Link href="/" className="flex items-center justify-start" aria-label="Searock Home">
            <Image
              src="/images/logo/Searock.svg"
              alt="Searock"
              width={600}
              height={150}
              priority
              sizes="(max-width: 768px) 180px, (max-width: 1024px) 240px, (max-width: 1280px) 280px, 320px"
              className="h-auto w-[180px] md:w-[240px] lg:w-[280px] xl:w-[320px] object-contain shrink-0"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-family-amsi-cond-600)] uppercase tracking-wide text-slate-700 hover:text-secondary text-base lg:text-lg py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger button (mobile-first) - positioned absolute right */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-popover"
            onClick={() => setOpen(!open)}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex flex-col items-start justify-center gap-1.5 rounded-md p-2 text-slate-700 transition hover:bg-slate-100 active:bg-slate-200 md:hidden"
          >
            <span className="block h-0.5 w-7 rounded-lg bg-slate-800" />
            <span className="block h-0.5 w-4 rounded-lg bg-slate-800" />
            <span className="block h-0.5 w-7 rounded-lg bg-slate-800" />
          </button>
        </nav>
      </header>

      <div className="h-16 md:h-20" />

      {/* Backdrop overlay - subtle, click to close */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Compact popover menu - positioned below hamburger */}
      <div
        id="mobile-popover"
        role="menu"
        className={`fixed right-4 top-16 z-50 w-50 origin-top-right rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5 transition-all duration-200 ease-out md:hidden ${
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <nav>
          <ul className="space-y-1">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href}>
                <a
                  ref={idx === 0 ? firstLinkRef : null}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  role="menuitem"
                  className={clsx("flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium font-family-amsi-cond-600 transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none", 
                   `${idx === 0 ? 'font-bold text-secondary' : 'text-slate-600'}`,
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
