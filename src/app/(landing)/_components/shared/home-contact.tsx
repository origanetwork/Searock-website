'use client';

import { useState } from 'react';

export default function HomeContact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, message } = form;
    const whatsappNumber = '916238811940'; // remove + and spaces for WhatsApp link
    const text = `Hello! 👋%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(
      phone
    )}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="w-full bg-primary py-12 md:py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">CONTACT US</h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ===== Contact Form ===== */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between space-y-4 lg:space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-bl-3xl border-0 bg-[#2A2347] px-4 py-4 text-sm sm:text-base text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-bl-3xl border-0 bg-[#2A2347] px-4 py-4 text-sm sm:text-base text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-bl-3xl border-0 bg-[#2A2347] px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-secondary"
            />

            <button
              type="submit"
              className="w-full rounded-bl-3xl bg-gradient-to-r from-[#934C12] via-[#F9811E] to-[#F9811E] px-6 py-3.5 font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              Submit
            </button>
          </form>

          {/* ===== Map Section ===== */}
          <div className="h-full overflow-hidden rounded-bl-3xl shadow-lg min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.199615625987!2d76.23768555892087!3d10.970625652041782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd21b11d5611%3A0x6f07d77d5f4aea6a!2sSearock%20Tile%20Gallery!5e0!3m2!1sen!2sin!4v1760172765876!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
