"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopSellerCard from "../products/TopSellerCard";
import { productCards } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { ProductCard } from "@/types/types";

type CardsSliderProps={
  products:ProductCard[]
  favorites?:boolean;
  recommended?:boolean
}
export default function CardsSlider({products,favorites,recommended}:CardsSliderProps) {
  const slidesCountView:number=(favorites?4:6)
  return (
    <section className=" py-4 px-10 relative">
      <button className="button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowLeft} />
      </button>

      <button className="button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowRight} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
          disabledClass: "hidden",          
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          
          1024: {
            slidesPerView: slidesCountView,
          },
        }}
        slidesPerGroup={4}
        className="pb-20"
      >
        {products.map((card) => (
          <SwiperSlide key={card.id} className=" px-2 pb-10 bg-amber">
            <TopSellerCard key={card.id}
            productId={card.id}
              images={[card.images[0], card.images[1]]}
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
              favorites={favorites}
              productsData={products}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
