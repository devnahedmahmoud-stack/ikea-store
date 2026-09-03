import FeaturedProducts from "@/components/kitchen/FeaturedProducts";
import { kitchenPageData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Life Starts in the Kitchen - Furniture & Home Decor",
  description:
    "Discover kitchen systems, islands, storage, and cookware designed for everyday life.",
};

export default function KitchenPage() {
  const { hero, categories, featuredProducts, gallery } = kitchenPageData;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">        
        <Link href="/campaigns" className="hover:underline">
          Campaigns
        </Link>
        {" > "}
        <span className="font-semibold text-gray-800">Kitchen</span>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 mb-16">
        <div className="relative h-112.5 w-full rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src={hero.imageUrl}
            alt={hero.title}
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-linear-to-t from-black/80 via-black/30 to-transparent">
            <span className="text-yellow-400 font-semibold tracking-wide uppercase text-xs mb-2">
              {hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {hero.title}
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mb-6">
              {hero.description}
            </p>
            <div>
              <Link
                href={hero.ctaLink}
                className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Explore Kitchen Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={""}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 w-full bg-gray-100">
                <Image
                  src={cat.imageUrl||""}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center font-medium group-hover:text-blue-600 transition-colors">
                {cat.title}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts featuredProducts={featuredProducts} categories={categories} />

      {/* Inspiration Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Choose a kitchen that’s right for you
        </h2>
        <p className="text-gray-600 mb-8">
          Get inspired by real living and kitchen spaces crafted for every lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative rounded-2xl overflow-hidden h-80 bg-gray-900 block"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}