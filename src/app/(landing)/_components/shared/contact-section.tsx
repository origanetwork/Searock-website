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
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
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
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full px-4 pt-12 pb-6 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Left: Contact Details Cards */}
          <div className="w-full max-w-md space-y-4 lg:max-w-none">
            <h2 id="contact-heading" className="mt-[15px] font-[family-name:var(--font-family-amsi-cond-700)] text-2xl text-orange-400  sm:text-3xl">Contact</h2>
            {/* Phone Card */}
            <div className="flex items-start gap-4 rounded-br-3xl bg-white/95 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-orange-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.67-1.28a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-family-amsi-cond-700)] text-slate-900">Phone</p>
                <a href="tel:+916238811940" className="mt-0.5 block text-slate-700">+91 6238811940</a>
                <p className="text-xs text-slate-500">Call us for immediate assistance</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-br-3xl bg-white/95 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-orange-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-family-amsi-cond-700)] text-slate-900">Email</p>
                <a href="mailto:searocktilegallery@gmail.com" className="mt-0.5 block text-slate-700">searocktilegallery@gmail.com</a>
                <p className="text-xs text-slate-500">Send us your inquiries anytime</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-4 rounded-br-3xl bg-white/95 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-orange-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-family-amsi-cond-700)] text-slate-900">Store Location</p>
                <p className="mt-0.5 text-slate-700">Panambi, Near EMS Hospital, Perinthalmanna, Kerala -679332</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="flex items-start gap-4 rounded-br-3xl bg-white/95 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
              <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-orange-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-family-amsi-cond-700)] text-slate-900">Business Hours</p>
                <p className="mt-0.5 text-slate-700">Mon - Sun: 9AM - 7PM</p>
              </div>
            </div>
          </div>

          {/* Right: Complaint Form */}
          <div className="w-full max-w-md lg:max-w-none">
          <h3 className="mt-[15px] mb-3 sm:mb-4 font-[family-name:var(--font-family-amsi-cond-700)] text-xl text-orange-400 sm:text-2xl">Register a Complaint</h3>
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
                placeholder="Enter your full name"
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

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your e-mail id"
                className={cn(
                  'w-full rounded-br-3xl border-0 bg-[#2A2347] px-4 py-4 font-[family-name:var(--font-family-amsi-cond-400)] text-sm text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary sm:text-base',
                  errors.email && 'ring-2 ring-red-500'
                )}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-300" role="alert">
                  {errors.email}
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
                placeholder="Enter your phone number"
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
                placeholder="Please describe your complaint in detail..."
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
          </div>
        </div>
      </div>
    </section>
  );
}
