import Image from 'next/image';

export const metadata = {
  title: 'Gallery • Searock',
  description: 'Explore our showroom — a curated gallery of tiles, granites, and bathware.'
};

const galleryImages: { src: string; alt: string }[] = [
  { src: '/images/gallery/g1.jpg', alt: 'Showroom interior 1' },
  { src: '/images/gallery/g2.jpeg', alt: 'Showroom interior 2' },
  { src: '/images/gallery/g3.webp', alt: 'Showroom interior 3' },
  { src: '/images/gallery/g4.jpg', alt: 'Showroom interior 4' },
  { src: '/images/gallery/g5.avif', alt: 'Showroom interior 5' },
  { src: '/images/gallery/g8.jpg', alt: 'Showroom interior 8' },
  { src: '/images/collections/tile-1.webp', alt: 'Tile collection 1' },
  { src: '/images/collections/tile-2.webp', alt: 'Tile collection 2' },
  { src: '/images/collections/tile-3.webp', alt: 'Tile collection 3' },
  { src: '/images/collections/granites-1.webp', alt: 'Granite collection 1' },
  { src: '/images/collections/granites-2.webp', alt: 'Granite collection 2' },
  { src: '/images/collections/granites-3.webp', alt: 'Granite collection 3' },
  { src: '/images/collections/bathware-1.webp', alt: 'Bathware collection 1' },
  { src: '/images/collections/bathware-2.webp', alt: 'Bathware collection 2' },
  { src: '/images/collections/bathware-3.webp', alt: 'Bathware collection 3' },
  { src: '/images/gallery/g6.jpg', alt: 'Showroom interior 6' },
  { src: '/images/gallery/g9.jpg', alt: 'Showroom interior 7' },
  { src: '/images/products/tile.jpg', alt: 'Tile product' },
  { src: '/images/products/granite.jpg', alt: 'Granite product' },
  { src: '/images/products/bath.jpg', alt: 'Bath product' },
];

export default function GalleryPage() {
  const first = galleryImages.slice(0, 10);
  const rest = galleryImages.slice(10);

  return (
    <main className="flex flex-col min-h-screen bg-[url('/images/home/heroAboutbg.webp')] bg-cover bg-center bg-no-repeat">
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-screen-sm px-6 py-10 md:py-16">
          <h1 className="text-center font-['Amsi_Pro_Condensed_700'] text-4xl md:text-5xl lg:text-6xl">Explore our Showroom</h1>
          <p className="mt-4 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95 max-w-lg mx-auto">
            Get captivated by a stunning collection of images showcasing various subjects in our meticulously curated gallery.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {first.map((img, idx) => (
              <a key={idx} href={`#gallery-${idx}`} className="block">
                <figure className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={idx < 4}
                    />
                  </div>
                </figure>
              </a>
            ))}
          </div>

          <input id="more-gallery" type="checkbox" className="peer sr-only" />
          <div className="mt-6 flex justify-center peer-checked:hidden">
            <label htmlFor="more-gallery" className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white text-sm font-medium hover:bg-[#382b60]">
              Load More →
            </label>
          </div>

          <div className="mt-8 hidden peer-checked:block">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {rest.map((img, idx) => (
                <a key={idx} href={`#gallery-${idx + first.length}`} className="block">
                  <figure className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </figure>
                </a>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <label htmlFor="more-gallery" className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-6 bg-primary py-3 text-white text-sm font-medium">
                Show Less
              </label>
            </div>
          </div>
        </div>
      </section>

      {galleryImages.map((img, i) => {
        const prev = (i - 1 + galleryImages.length) % galleryImages.length;
        const next = (i + 1) % galleryImages.length;
        return (
          <div
            key={i}
            id={`gallery-${i}`}
            className="modal fixed inset-0 z-50 hidden flex items-center justify-center p-4"
            aria-hidden="true"
          >
            <a href="#" className="absolute inset-0 bg-black/60 z-0" aria-label="Close"></a>
            <div className="relative z-10 w-full max-w-6xl">
              <div className="relative w-full h-[70vh] bg-white rounded-bl-[2rem] overflow-hidden shadow-2xl flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-contain bg-gray-100"
                  priority={i < 4}
                />
                <a
                  href={`#gallery-${prev}`}
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow hover:brightness-110 text-xl"
                  aria-label="Previous"
                >
                  ‹
                </a>
                <a
                  href={`#gallery-${next}`}
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow hover:brightness-110 text-xl"
                  aria-label="Next"
                >
                  ›
                </a>
                <a
                  href="#"
                  className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow hover:brightness-110 text-xl"
                  aria-label="Close"
                >
                  ✕
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
