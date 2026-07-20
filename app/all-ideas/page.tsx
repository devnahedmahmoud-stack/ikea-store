'use client';

import ContainerProvider from '@/components/Providers/ContainerProvider';
import { InspirationItems, ProductCategories } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';


export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? InspirationItems
    : InspirationItems.filter(item => item.categoryId ===(ProductCategories.find(c=>c.name===activeCategory)?.id));

  return (
    <ContainerProvider>    
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Inspiration & ideas</h1>
        <p className="text-gray-600">Explore beautifully designed spaces and get ready to transform your home.</p>
      </div>

      {/* Promos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-between border border-amber-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find the perfect gifts</h2>
            <p className="text-gray-600 mb-4">Shop unique, affordable gifts and gift cards for all occasions.</p>
          </div>
          <button className="self-start bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
            Shop gifts
          </button>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg flex flex-col justify-between border border-blue-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Home tours</h2>
            <p className="text-gray-600 mb-4">Explore complete homes, exclusively designed by interior experts.</p>
          </div>
          <button className="self-start bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition">
            See the home tours
          </button>
        </div>
      </div>

      {/* Design Inspiration Feed Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Design inspiration feed</h2>

      {/* Category Filter Pills */}
      <div className="flex overflow-x-auto pb-4 mb-8 space-x-2">
        <button
            key="All"
            onClick={() => setActiveCategory("All")}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === "All"
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {"All"}
          </button>
        {ProductCategories.filter(c=>c.id>=7).map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.name)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === category.name
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Inspiration Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer overflow-hidden rounded-lg bg-gray-100 border border-gray-200">
              <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="inline-block text-xs font-semibold tracking-wide uppercase text-gray-500 mb-1">
                   {ProductCategories.find(c=>c.id===item.categoryId)?.name}
                </span>
                <p className="text-sm font-medium text-gray-900 line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No inspiration ideas found for this category yet.
        </div>
      )}

      {/* Load More Button Container */}
      <div className="mt-12 flex justify-center">
        <button className="border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-900 transition-colors">
          Load more
        </button>
      </div>
    </ContainerProvider>
  );
}