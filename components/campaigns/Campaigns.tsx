"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import { trendingItems } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";

// Mock data matching the trending campaigns

export default function Campaigns() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#111111] ">
      {/* Header Section */}
      <header className="border-b border-[#dfdfdf] py-16 px-4 md:px-8">
        <div className="max-w-350 mx-auto">
          <h1 className="text-4xl md:text-[2.25rem] font-bold tracking-tight mb-3">
            IKEA Campaigns and Offers
          </h1>
          <p className="text-base text-[#484848] max-w-175">
            Transform your space for less. Explore our limited-time discounts,
            seasonal trends, and exclusive rewards.
          </p>
        </div>
      </header>

      {/* Trending Now Slider Section */}
      <section className="py-14 px-4  overflow-hidden">
        <div className="max-w-350 mx-auto h-200 relative">
          {/* Section Header with Navigation Controls */}          
            <h2 className="text-2xl font-bold tracking-tight mb-6">Trending now</h2>
            {/* Custom IKEA-like Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 flex items-center justify-center transition-colors absolute left-0 -translate-x-1/2 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80"
              aria-label="Previous slide"
            >
              <HugeiconsIcon icon={ArrowLeft} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 flex items-center justify-center transition-colors absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80"
              aria-label="Next slide"
            >
              <HugeiconsIcon icon={ArrowRight} />
            </button>

          {/* Swiper React implementation */}
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={16}
            grabCursor={true}
            breakpoints={{
              480: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {trendingItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="group bg-gray-100 h-170 min-h-0"
              >
                <Link
                  href={item.href}
                  className="block h-full  flex-col aspect-4/6 no-underline"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex-1 min-h-0 flex flex-col">
                      {/* Next.js Optimized Image Box */}
                      <div className="relative w-full h-3/4 min-h-0 overflow-hidden bg-[#f5f5f5]">
                        <Image
                          src={item.image}
                          alt={item.desc}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover transition-transform duration-300"
                        />
                      </div>

                      {/* Content & Arrow Indicator */}
                      <div className="p-4 lex flex-col justify-between">
                        <p className="text-[0.95rem] font-bold leading-snug text-[#111111]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="w-14 h-14 bg-[#111111] rounded-full flex items-center justify-center shrink-0 ">
                        <svg
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          className="fill-white"
                        >
                          <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
