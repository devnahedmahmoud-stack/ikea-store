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
  isThumbnail?: boolean;
};
export default function ProductImagesSlider({
  images,
  className,
  isThumbnail,
}: ProductImagesSliderProps) {
  const slidesCountView: number = isThumbnail ? 7 : 1;
  const btn_Next: string = isThumbnail
    ? "button-next-thumbnail"
    : "button-next";
  const btn_Prev: string = isThumbnail
    ? "button-prev-thumbnail"
    : "button-prev";
  const btn_Prev_Position: string = isThumbnail
    ? "left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"
    : "left-0 top-1/2 -translate-y-1/2";
  const btn_Next_Position : string = isThumbnail
    ? "left-1/2 top-full -translate-y-1/2 -translate-x-1/2"
    : "right-0 top-1/2 -translate-y-1/2";

    function setMainImage(image: HTMLImageElement)
    {
images.forEach((img)=>{
  if(img === image.src)
  {
    image.src = img;
  } })
    }
  return (
    <div
      className={cn(
        " relative bg-amber-600",
        isThumbnail ? "w-28 h-full " : " h-full w-full",
        className,
      )}
    >
      <button
        className={`${btn_Prev} absolute ${btn_Prev_Position} z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80`}
      >
        {isThumbnail ? (
          <HugeiconsIcon icon={ArrowUp} />
        ) : (
          <HugeiconsIcon icon={ArrowLeft} />
        )}
      </button>

      <button
        className={`${btn_Next} absolute ${btn_Next_Position} z-10 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80`}
      >
        {isThumbnail ? (
          <HugeiconsIcon icon={ArrowDown} />
        ) : (
          <HugeiconsIcon icon={ArrowRight} />
        )}
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={isThumbnail ? 2 : 2}
        navigation={{
          prevEl: `.${btn_Prev}`,
          nextEl: `.${btn_Next}`,
          disabledClass: "hidden",
        }}
        slidesPerView={isThumbnail ? 2 : 1}
        breakpoints={{
          640: {
            slidesPerView: isThumbnail ? 2 : 1,
          },

          1024: {
            slidesPerView: slidesCountView,
          },
        }}
        slidesPerGroup={isThumbnail ? 4 : 1}
        direction={isThumbnail ? "vertical" : "horizontal"}
        className={isThumbnail ? "w-28 h-screen" : "w-full h-full"}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${image.split("/").pop()?.split(".")[0]}-${index}`}
            className=""
          >
            <div
              className={cn(
                "relative ",
                isThumbnail ? "w-24 h-24 border border-gray-200 mb-10 cursor-pointer hover:border-black" : "w-full h-full",
              )}
              
            >
              <Image
                src={image}
                alt={image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                onClick={(e)=>{
                  if(isThumbnail)
                  {
                    setMainImage(e.currentTarget);
                  } }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
