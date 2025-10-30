import ContactSection from "@/app/(landing)/_components/shared/contact-section";

export const metadata = {
  title: "Contact • Searock",
  description:
    "Get in touch with Searock Tile Gallery. Call, email, or visit our store. Find our location on the map and submit your inquiry.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Top header band under navbar */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-screen-sm px-6 py-10">
          <h1 className="text-center font-['Amsi_Pro_Condensed_700'] text-4xl md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95">
            Feel free to reach out with any questions or ideas — we&apos;re here to help you build better homes.
          </p>
        </div>
      </section>

      {/* Contact content: form + info + inline map (mobile) / split with map (desktop) */}
      <ContactSection />

      {/* Large location map below (full-width responsive) */}
      <section aria-labelledby="location-heading" className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-12 sm:px-6 lg:px-8">
          <h2
            id="location-heading"
            className="mb-4 text-center font-[family-name:var(--font-family-amsi-cond-700)] text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl"
          >
            Our Location
          </h2>
          <div className="overflow-hidden rounded-br-[4rem] shadow-2xl ring-1 ring-black/5 md:-mx-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.199615625987!2d76.23768555892087!3d10.970625652041782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd21b11d5611%3A0x6f07d77d5f4aea6a!2sSearock%20Tile%20Gallery!5e0!3m2!1sen!2sin!4v1760172765876!5m2!1sen!2sin"
              title="Searock Tile Gallery Location - Large Map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full sm:h-[420px] lg:h-[560px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
