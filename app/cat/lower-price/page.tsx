'use client';

import TopSellerCard from '@/components/products/TopSellerCard';
import { INITIAL_OFFERS, ProductCategories } from '@/data/data';
import React, { useState, useMemo } from 'react';



export default function LowerPricePage() {
  // State for price filter range
  const [maxPrice, setMaxPrice] = useState<number>(400);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories extraction
 const categories = ['All', ...Array.from(new Set(ProductCategories.map(item => item.name)))];

  // Filtered products calculation
  const filteredOffers = useMemo(() => {
    return INITIAL_OFFERS.filter((item) => {
      const matchesPrice = item.price <= maxPrice;
      const matchesCategory = selectedCategory === 'All' || ProductCategories.find(c=>c.id=== item.categoryId)?.name === selectedCategory;
      return matchesPrice && matchesCategory;
    });
  }, [maxPrice,selectedCategory]);

  return (
    <div className="min-h-screen text-gray-900 lg:p-12 p-6">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <h1 className="text-3xl font-bold tracking-tight">Price lowered products</h1>
        
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl py-8  lg:flex lg:gap-8">
        
        {/* SIDEBAR FILTER */}
        <aside className="w-full lg:w-64 shrink-0 bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit mb-8 lg:mb-0">
          <h2 className="text-sm text-black/70 border-b pb-4 mb-4">{filteredOffers.length} items</h2>
          
          {/* Price Slider Filter */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="price-range" className="text-sm font-semibold text-gray-700">Max Price</label>
              <span className="text-sm font-semibold">EGP{maxPrice}</span>
            </div>
            <input
              id="price-range"
              type="range"
              min="10"
              max="1000"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>EGP10</span>
              <span>EGP1000</span>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="h-4 w-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <main className="flex-1">
          

          {filteredOffers.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-500 text-lg">No offers match your current filter settings.</p>
              <button 
                onClick={() => { setMaxPrice(300); setSelectedCategory('All'); }}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((card) => (
                <TopSellerCard
                key={card.id}
              productId={card.id}
              images={[card.images[0], card.images[1] ?? card.images[0]]}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              pack={card.pack}
              packCount={card.packCount}
              unitPrice={card.unitPrice}
              ratingCount={card.ratingCount}
              store={card.store}
              priceLowered={card.priceLowered}
              lastChance={card.lastChance}
              previousPrice={card.previousPrice}
              moreOptions={card.moreOptions}
              topSeller={card.topSeller}
             // favorites={favorites}
              productsData={INITIAL_OFFERS}
            />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}