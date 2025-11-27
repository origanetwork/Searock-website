'use client';
import { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const whatsappHref = 'https://wa.me/916238811940';
  const callHref = 'tel:+916238811940';
  const mailHref = 'mailto:searocktilegallery@gmail.com';

  return (
    <div className="fixed z-50 bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-56 rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-50"
          >
            <FaWhatsapp className="h-5 w-5 text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">WhatsApp</span>
              <span className="text-xs text-gray-500">+91 6238811940</span>
            </div>
          </a>
          <a
            href={callHref}
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-50"
          >
            <FaPhone className="h-5 w-5 text-primary" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Call</span>
              <span className="text-xs text-gray-500">+91 6238811940</span>
            </div>
          </a>
          <a
            href={mailHref}
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-50"
          >
            <FaEnvelope className="h-5 w-5 text-orange-500" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Mail</span>
              <span className="text-xs text-gray-500">searocktilegallery@gmail.com</span>
            </div>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Customer Care"
        className="inline-flex items-center justify-center text-primary hover:opacity-90 transition p-1 sm:p-1.5 md:p-2 focus:outline-none focus:ring-0 select-none"
      >
        <FaMobileAlt className="h-16 w-16 sm:h-16 sm:w-16 md:h-16 md:w-16 xl:h-20 xl:w-20" />
        <span className="sr-only">Customer Care</span>
      </button>
    </div>
  );
}

