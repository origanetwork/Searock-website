import Image from "next/image";

export const metadata = {
  title: "About • Searock",
  description:
    "About Searock – 30+ years of transforming homes with sustainable flooring, natural stone, and bathware.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-screen-sm px-6 py-10">
          <h1 className="text-center font-['Amsi_Pro_Condensed_700'] text-4xl md:text-5xl lg:text-6xl">About us</h1>
          <p className="mt-4 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95">
            30+ years of transforming homes with sustainable flooring, natural stone, and
            bathware. We blend friendship, knowledge, and responsibility into every solution.
          </p>

          <div className="mt-6 border-t border-white/10 pt-6">
            <div className="grid grid-cols-3 items-stretch text-center">
              <div className="flex flex-col">
                <span className="font-['Amsi_Pro_Condensed_700'] text-3xl md:text-4xl lg:text-5xl leading-none">
                  <span className="text-orange-400">30</span>
                  <span className="text-white">+</span>
                </span>
                <span className="mt-1 text-[10px] md:text-xs lg:text-sm opacity-80">Years of Experience</span>
              </div>
              <div className="relative flex flex-col">
                <span className="absolute left-0 top-1/2 h-6 -translate-y-1/2 border-l border-white/20" />
                <span className="font-['Amsi_Pro_Condensed_700'] text-3xl md:text-4xl lg:text-5xl leading-none">
                  <span className="text-orange-400">10k</span>
                  <span className="text-white">+</span>
                </span>
                <span className="mt-1 text-[10px] md:text-xs lg:text-sm opacity-80">Happy Homes</span>
                <span className="absolute right-0 top-1/2 h-6 -translate-y-1/2 border-l border-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Amsi_Pro_Condensed_700'] text-3xl md:text-4xl lg:text-5xl leading-none">
                  <span className="text-orange-400">200</span>
                  <span className="text-white">+</span>
                </span>
                <span className="mt-1 text-[10px] md:text-xs lg:text-sm opacity-80">Product Varieties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/heroAboutbg.webp"
            alt="Stone and tile background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-screen-sm px-6 py-8 space-y-4 md:max-w-2xl lg:max-w-5xl md:grid md:grid-cols-2 md:gap-6 lg:gap-8 md:space-y-0">
          <article className="rounded-br-3xl bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
            <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center text-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 0 0-7 7c0 2.6 1.3 4.6 3.2 6 .5.4.8 1 .8 1.6V19h6v-1.4c0-.6.3-1.2.8-1.6 1.9-1.4 3.2-3.4 3.2-6a7 7 0 0 0-7-7z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 22h6"/>
              </svg>
            </div>
            <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">Our Vision</h2>
            <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-slate-700">
              Our vision is to be the most trusted Flooring Solutions Provider as defined by the Customers we serve. We elevate living spaces with sustainable materials, timeless design, and trusted expertise.
            </p>
          </article>

          <article className="rounded-br-3xl bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
            <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center text-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h12"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6"/>
              </svg>
            </div>
            <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">Our Purpose</h2>
            <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-slate-700">
              Our mission is to provide sustainable, design-forward flooring solutions that improve everyday living. We simplify decisions with honest guidance and curated collections for every budget and style.
            </p>
          </article>

          <article className="rounded-br-3xl bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
            <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center text-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-5 3 1.9-5.9L4 9l6-.2L12 3l2 5.8 6 .2-4.9 5.1L17 20z"/></svg>
            </div>
            <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">Our Values</h2>
            <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-slate-700">
              Integrity, care, and long-term partnerships guide how we serve our customers every day. We stand by quality, transparency, and a commitment to sustainable choices.
            </p>
          </article>

          <article className="rounded-br-3xl bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
            <div className="mx-auto mb-2 flex h-6 w-6 items-center justify-center text-secondary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3 3a2 2 0 0 0 2 0l3-3"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l4-4"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12l-4-4"/>
              </svg>
            </div>
            <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">Our Personality</h2>
            <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-slate-700">
              We love to help people because it makes their life easier. We avoid practices that reduce a helping mindset. Friendly, dependable, and knowledgeable — that’s how we show up.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full bg-gradient-to-br from-primary via-[#3C3063] to-[#54438B] text-white">
        <div className="mx-auto mt-10 max-w-screen-sm px-4 py-8">
          <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl">What Makes Us Different</h2>
          <p className="mt-3 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95">
            For over 30 years, <span className="text-secondary">Searock</span> has been helping
            families create homes that reflect their dreams. With personalized solutions, expert
            guidance, and sustainable products, we bring comfort, beauty, and lasting value to every
            space. Choose <span className="text-secondary">Searock</span> your trusted flooring
            partner for life.
          </p>

          <ul className="mt-6 space-y-4 text-base md:text-lg mx-auto">
            <li className="flex items-center justify-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span className="font-['Amsi_Pro_Condensed_700'] text-white">Innovation-driven Solutions</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span className="font-['Amsi_Pro_Condensed_700'] text-white">Personalized Approach</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </span>
              <span className="font-['Amsi_Pro_Condensed_700'] text-white">Superior Customer Service</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home/heroAboutbg.webp"
            alt="Stone and tile background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-screen-sm px-4 py-4"></div>
      </section>
    </main>
  );
}
