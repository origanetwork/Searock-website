import Image from 'next/image';

export const metadata = {
  title: 'Our Products • Searock',
  description: 'Discover our comprehensive range of premium flooring solutions, natural stone, and modern bathware designed to transform your space.',
};

// Define the structure for a product category card
type ProductCategory = {
  name: string;
  description: string;
  imagePath: string;
  features: string[];
  link: string; // The destination for the "Learn More" button
};

// Data for the product categories, based on the uploaded images
const productCategories: ProductCategory[] = [
  {
    name: 'Granites',
    description: 'Elegant and durable granite solutions that bring natural stone beauty to your spaces.',
    imagePath: '/images/products/granite.jpg', // Placeholder - Update with your actual image path
    features: ['Highly durable', 'Heat resistant', 'Luxurious finish'],
    link: '/products/granites',
  },
  {
    name: 'Tiles',
    description: 'Premium quality tiles that combine beauty with durability. Perfect for floors, walls, and any surface.',
    imagePath: '/images/products/tile.jpg', // Placeholder - Update with your actual image path
    features: ['Water resistant', 'Easy maintenance', 'Wide variety of designs'],
    link: '/products/tiles',
  },
  {
    name: 'Bathware',
    description: 'Complete bathroom solutions including sanitaryware, fittings, and accessories for modern bathrooms.',
    imagePath: '/images/products/bath.jpg', // Placeholder - Update with your actual image path
    features: ['Premium quality', 'Water efficient', 'Contemporary designs'],
    link: '/products/bathware',
  },
];

// Helper to create a slug to target the modal via anchor links
const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// Reusable component for the Product Category Card
const CategoryCard = ({ category }: { category: ProductCategory }) => (
  // UPDATED: Single-corner radius (bottom-left only) and hover effects
  <div className="flex flex-col overflow-hidden rounded-bl-3xl shadow-xl bg-white transition-all duration-300 
                 hover:shadow-2xl hover:scale-[1.02] hover:ring-4 hover:ring-offset-4 hover:ring-primary/50">

    {/* Image container for the category banner */}
    <div className="relative h-64 w-full overflow-hidden rounded-bl-3xl">

      {/* Image translation on hover */}
      <div className="h-full w-full transition-transform duration-500 ease-in-out hover:translate-x-2">
        <Image
          src={category.imagePath}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
          priority={true}
        />
      </div>

      {/* Overlay with the category name - it remains static */}
      <div className="absolute inset-0 flex items-end bg-black/30">
        <h2 className="p-4 ml-4 md:ml-6 font-['Amsi_Pro_Condensed_700'] text-4xl text-white">
          {category.name}
        </h2>
      </div>
    </div>

    {/* Content Area */}
    <div className="p-5">
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {category.description}
      </p>

      {/* Feature List */}
      <ul className="space-y-2 mb-6">
        {category.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block h-2 w-2 flex-shrink-0 mt-1 mr-3 rounded-full bg-orange-500" />
            <span className="text-sm font-medium text-gray-800">{feature}</span>
          </li>
        ))}
      </ul>

    </div>
  </div>
);


export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* Products Hero Section */}
      <section className="w-full bg-primary text-white">
        <div className="mx-auto max-w-screen-sm px-6 py-10 md:py-16">
          <h1 className="text-center font-['Amsi_Pro_Condensed_700'] text-4xl md:text-5xl lg:text-6xl">Our Products</h1>
          <p className="mt-4 text-center text-sm md:text-base lg:text-lg leading-6 opacity-95 max-w-lg mx-auto">
            Discover our comprehensive range of premium flooring solutions designed to transform your space.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          {/* Grid for responsiveness: 1 column on mobile, 2 on medium, 3 on large */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Guidance at Every Step - Feature Block */}
      <section className="w-full py-10 md:py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="border-3 border-orange-500 rounded-bl-[3rem] p-6 max-w-2xl mx-auto text-center bg-white">
            {/* 2-slide CSS carousel (3s per slide) */}
            <div className="carousel relative min-h-[170px] md:min-h-[160px]">
              {/* Slide 1 */}
              <div className="carousel-slide is-first absolute inset-0">
                <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">
                  Wide Collections to Explore
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  Discover an extensive range of flooring tiles, natural stones, and bathware—carefully curated to match every style and budget. Choose from textures, finishes, and sizes tailored to your project.
                </p>
              </div>

              {/* Slide 2 */}
              <div className="carousel-slide is-second absolute inset-0">
                <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">
                  Guidance at Every Step
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  From choosing the right design to final installation, our experts stand by you with honest advice and personalized support. We help you make confident decisions at every stage.
                </p>
              </div>

              {/* Slide 3 */}
              <div className="carousel-slide is-third absolute inset-0">
                <h2 className="text-center font-['Amsi_Pro_Condensed_700'] text-2xl md:text-3xl lg:text-4xl text-primary">
                  Quality You Can Trust
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  We ensure every product meets our high standards, from sourcing to delivery, ensuring you receive only the best. Rigorous checks and careful packaging ensure lasting performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals for each category (shown when URL target matches) */}
      {productCategories.map((category) => (
        <div
          key={category.name}
          id={`modal-${toSlug(category.name)}`}
          className="modal fixed inset-0 z-50 hidden flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <a href="#" className="absolute inset-0 bg-black/60 z-0" aria-label="Close"></a>
          <div className="relative z-10 w-full max-w-4xl bg-white rounded-br-[2rem] shadow-2xl">
            {/* Close button */}
            <a
              href="#"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/70 text-white hover:bg-black"
              aria-label="Close"
            >
              ✕
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-60 md:h-full">
                <Image
                  src={category.imagePath}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={true}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-['Amsi_Pro_Condensed_700'] text-3xl text-primary">{category.name}</h3>
                <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                  {category.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {category.features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-800">
                      <span className="mt-1 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                      <span className="font-medium">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  {/* <a
                    href={category.link}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#382b60]"
                  >
                    Go to {category.name}
                  </a> */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </main>
  );
}