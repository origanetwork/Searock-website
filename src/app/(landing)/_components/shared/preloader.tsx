'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;
    if (!overlay || !logo || !progress) return;

    gsap.killTweensOf([overlay, logo, progress]);

    // Reset overlay to visible
    gsap.set(overlay, { y: '0%', display: 'flex', autoAlpha: 1 });

    // Animate logo in
    gsap.fromTo(
      logo,
      { opacity: 0, scale: 0.82, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );

    // Animate progress bar filling left → right
    gsap.fromTo(
      progress,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.85, ease: 'power1.inOut', transformOrigin: 'left center' }
    );

    const timer = setTimeout(() => {
      gsap.to(overlay, {
        y: '-100%',
        duration: 0.65,
        ease: 'power3.inOut',
        onComplete: () => { gsap.set(overlay, { display: 'none' }); },
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: '#3C3063' }}
    >
      <div ref={logoRef}>
        <Image
          src="/images/home/searock-white.png"
          alt="Searock"
          width={220}
          height={88}
          priority
          className="w-[160px] md:w-[220px] object-contain"
        />
      </div>

      {/* Orange progress bar */}
      <div className="w-24 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(249,129,30,0.25)' }}>
        <div
          ref={progressRef}
          className="h-full rounded-full"
          style={{ backgroundColor: '#F9811E' }}
        />
      </div>
    </div>
  );
}
