import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer Component
 * 
 * Mobile-first footer with brand logo, social media links, and navigation menus.
 * Features:
 * - Responsive grid layout
 * - Social media icon links
 * - Menu and Quick Links sections
 * - Accessibility with semantic HTML and ARIA labels
 * - Dark mode support (inherits from parent purple background)
 */

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/searock',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/searock',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@searock',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/searocktilegallery',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const menuLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const quickLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },

];

export default function Footer() {
  return (
    <footer
      className="px-4 pb-6 pt-12 text-white sm:px-6 lg:px-8"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-md space-y-8 md:max-w-3xl lg:max-w-5xl">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-start space-y-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/home/searock-white.png"
              alt="Searock"
              width={320}
              height={80}
              priority
              sizes="(max-width: 768px) 620px, 500px"
              className="h-auto w-[180px] md:w-[220px]"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-6">
            <p className="mx-auto md:mx-0 text-center md:text-left font-[family-name:var(--font-family-amsi-cond-600)] text-2xl uppercase tracking-wide sm:text-base">
              Follow Us
            </p>
            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-secondary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menu and Quick Links */}
        <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12">
          {/* Menu */}
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-family-amsi-cond-700)] text-base font-bold uppercase tracking-wide sm:text-lg">
              Menu
            </h4>
            <ul className="space-y-3" role="list">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white/80 transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-family-amsi-cond-700)] text-base font-bold uppercase tracking-wide sm:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white/80 transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-family-amsi-cond-700)] text-base font-bold uppercase tracking-wide sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-3" role="list">
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="font-[family-name:var(--font-family-amsi-cond-400)] text-sm sm:text-base">
                    Panambi, Near EMS Hospital,
                    <br />
                    Perinthalmanna, Kerala -679332.
                  </p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+916238811940"
                  className="flex items-center gap-3 font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white/80 transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-base"
                >
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.67-1.28a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 6238811940
                </a>
              </li>
              <li>
                <a
                  href="mailto:searocktilegallery@gmail.com"
                  className="flex items-center gap-3 font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white/80 transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-base"
                >
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                    <polyline points="22 6 12 13 2 6"></polyline>
                  </svg>
                  searocktilegallery@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="font-[family-name:var(--font-family-amsi-cond-400)] text-xs text-white/60 sm:text-sm">
            @ 2025 Searock , All  rights  reserved
       Design & Developed by <a href="https://www.origanetworks.com/" className='text-lg transition-colors hover:text-orange-400'> Origa Networks</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
