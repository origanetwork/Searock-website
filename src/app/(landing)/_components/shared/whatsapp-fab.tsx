import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFab() {
  const href = "https://wa.me/916238811940";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 inline-flex items-center justify-center text-primary hover:opacity-90 active:scale-95 transition p-1 sm:p-1.5 md:p-2"
    >
      <FaWhatsapp className="h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 xl:h-20 xl:w-20" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
