"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopSellerCard from "../products/TopSellerCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { ProductCard } from "@/types/types";

type CardsSliderProps = {
  products: ProductCard[];
  favorites?: boolean;
  recommended?: boolean;
};
export default function CardsSlider({ products, favorites }: CardsSliderProps) {  
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
        spaceBetween={6}
        //slidesPerView={1}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
          disabledClass: "hidden",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          425: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },          
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: favorites ? 4 : 4,
            slidesPerGroup: favorites ? 4 : 4,
          },
          1280: {
            slidesPerView: favorites ? 4 : 6,
            slidesPerGroup: favorites ? 4 : 6,
          },
        }}
        //slidesPerGroup={4}
        className="pb-20"
      >
        {products.map((card) => (
          <SwiperSlide key={card.id} className="md:px-2 pb-10 w-full">
            <TopSellerCard
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
              favorites={favorites}
              productsData={products}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
