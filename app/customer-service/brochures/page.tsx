// app/brochures/page.tsx
import { brochuresData } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';

export default function BrochuresPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li className="flex items-center">
            <Link href="/customer-service" className="hover:underline">Customer Service</Link>
            <span className="mx-2">&rsaquo;</span>
          </li>
          <li className="text-gray-900 font-medium" aria-current="page">
            Brochures
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Brochures
        </h1>
        <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
          IKEA brochures are designed to give you more specific product information as well as lots of inspiration. 
          You can view our new 2025 brochures online using the links below.
        </p>
      </header>

      {/* Grid of Brochure Items */}
      <section aria-label="Available Brochures">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {brochuresData.map((item) => (
            <article 
              key={item.id} 
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Image Container */}
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-95 transition-opacity duration-200 relative h-64 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 50vw"
                  className="object-cover object-center"
                  priority={item.id === 'price-lowered'} // Optimize LCP for first image
                />
              </div>

              {/* Text & Button Content */}
              <div className="flex flex-1 flex-col p-6 space-y-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm italic text-gray-500">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-2">
                  <Link
                    href={item.exploreUrl}
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}