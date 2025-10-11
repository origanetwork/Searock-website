'use client';

import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';

/**
 * ContactSection Component
 * 
 * Mobile-first contact form with embedded map and contact information.
 * Features:
 * - Responsive form with validation
 * - Google Maps integration
 * - Contact info cards with icons
 * - Accessibility with ARIA labels and semantic HTML
 * - Dark mode support via Tailwind class strategy
 */

interface FormData {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full px-4 py-12 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* Contact Form */}
        <div className="mx-auto max-w-md">
          <h2
            id="contact-heading"
            className="mb-8 text-center font-[family-name:var(--font-family-amsi-cond-700)] text-3xl font-bold uppercase tracking-wide text-white sm:text-3xl"
          >
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className={cn(
                  'w-full rounded-br-3xl border-0 bg-[#2A2347] px-4 py-4 font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary sm:text-base',
                  errors.name && 'ring-2 ring-red-500'
                )}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-300" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone Number"
                className={cn(
                  'w-full rounded-br-3xl border-0 bg-[#2A2347] px-4 py-4 font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary sm:text-base',
                  errors.phone && 'ring-2 ring-red-500'
                )}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-300" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message"
                rows={4}
                className={cn(
                  'w-full resize-none rounded-br-3xl border-0 bg-[#2A2347] px-4 py-3 font-[family-name:var(--font-family-amsi-cond-400)] text-md text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary sm:text-base',
                  errors.message && 'ring-2 ring-red-500'
                )}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-300" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'w-full rounded-br-3xl bg-gradient-to-r from-[#934C12] via-[#F9811E] to-[#F9811E] px-6 py-3.5 font-[family-name:var(--font-family-amsi-cond-700)] text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg',
                submitSuccess && 'bg-green-500'
              )}
              aria-live="polite"
            >
              {isSubmitting ? 'Submitting...' : submitSuccess ? 'Sent!' : 'Submit'}
            </button>
          </form>

          {/* Google Maps Embed */}
          <div className="mt-6 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.199615625987!2d76.23768555892087!3d10.970625652041782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd21b11d5611%3A0x6f07d77d5f4aea6a!2sSearock%20Tile%20Gallery!5e0!3m2!1sen!2sin!4v1760172765876!5m2!1sen!2sin"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Searock Tile Gallery Location"
              className="w-full  rounded-br-3xl"
            />
          </div>

          {/* Contact Information */}
          <div className="mt-6 space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3 text-white">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-[family-name:var(--font-family-amsi-cond-400)] text-md leading-relaxed sm:text-base">
                Panambi, Near EMS Hospital,
                <br />
                Perinthalmanna, Kerala -679332.
              </p>
            </div>

            {/* Phone */}
            <a
              href="tel:+916238811940"
              className="flex items-center gap-3 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-[family-name:var(--font-family-amsi-cond-400)] text-md sm:text-base">
                +91 6238811940
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:searocktilegallery@gmail.com"
              className="flex items-center gap-3 text-white transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              <svg
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-[family-name:var(--font-family-amsi-cond-400)] text-md sm:text-base">
                searocktilegallery@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
