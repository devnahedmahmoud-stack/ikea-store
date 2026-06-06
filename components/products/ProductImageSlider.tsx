"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductImagesSliderProps = {
  images: string[];
  className?: string;
};
export default function ProductImageSlider({
  images,
  className,
}: ProductImagesSliderProps) {
  const slidesCountView: number = 1;

  return (
    <div className={cn(" relative bg-amber-500 w-full h-96", className)}>
      <button className="button-prev-thumbnail absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowLeft} />
      </button>

      <button className="button-next-thumbnail absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowRight} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={2}
        navigation={{
          prevEl: ".button-prev-thumbnail",
          nextEl: ".button-next-thumbnail",
          disabledClass: "hidden",
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: slidesCountView,
          },
        }}
        slidesPerGroup={1}
        direction="horizontal"
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${image.split("/").pop()?.split(".")[0]}-${index}`}
            className=" px-2 pb-10 "
          >
            <div
              className={cn(
                "relative border mb-10 cursor-pointer",
                "w-full h-full",
              )}
            >
              <Image
                src={image}
                alt={image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
