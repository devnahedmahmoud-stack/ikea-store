"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

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
import { useEffect, useState } from "react";

type ProductImagesSliderProps = {
  images: string[];
  className?: string;
  isThumbnail?: boolean;
  selectedImageIndex: number;
  onImageSelectIndex: (index: number) => void;
};
export default function ProductImagesSlider({
  images,
  className,
  isThumbnail,
  selectedImageIndex,
  onImageSelectIndex,
}: ProductImagesSliderProps) {
  const slidesCountView: number = isThumbnail ? 7 : 1;
  const navBtn: string = isThumbnail ? "hidden" : "disabled";

  const btn_Next: string = isThumbnail
    ? "button-next-thumbnail"
    : "button-next";
  const btn_Prev: string = isThumbnail
    ? "button-prev-thumbnail"
    : "button-prev";
  const btn_Prev_Position: string = isThumbnail
    ? "left-1/2 top-0 -translate-y-1/2 -translate-x-1/2"
    : "left-0 top-1/2 -translate-y-1/2";
  const btn_Next_Position: string = isThumbnail
    ? "left-1/2 top-full -translate-y-1/2 -translate-x-1/2"
    : "right-0 top-1/2 -translate-y-1/2";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let activeIndex = selectedImageIndex ?? 0;
console.log(activeIndex)
  function next () {
    if (activeIndex + 1 > images.length-1 )
       {console.log("len1")
       // event.currentTarget.disabled=true
      return}
    //console.log("selectedImageIndex");
    let nextIndex: number; //= Math.min(activeIndex + 1, images.length - 1);

    /* if (activeIndex + 1 > images.length - 1) 
      {nextIndex = images.length - 1;
        console.log("len")
      }
    else 
      { */
        nextIndex = activeIndex + 1;
        console.log("index")
     // }

    onImageSelectIndex(nextIndex);
    //setCurrentImageIndex( Math.min(selectedImageIndex + 1, images.length - 1))
    console.log(nextIndex);
  };

  function prev  (){
    //console.log(selectedImageIndex);
    if (activeIndex -1<0)
       {
        console.log("len2")
        //event.currentTarget.disabled=true
      return
    }
    
    let prevIndex:number //= Math.max(activeIndex - 1, 0);
     /* if (activeIndex - 1 <0) prevIndex = 0;
    else */
       prevIndex = activeIndex - 1;

    onImageSelectIndex(prevIndex);
    //setCurrentImageIndex(Math.max(selectedImageIndex - 1, 0))

    console.log(prevIndex);
    console.log("prevIndex");
  };

 // console.log(images[currentImageIndex]);
  useEffect(() => {
    setCurrentImageIndex(selectedImageIndex);
  }, [selectedImageIndex]);
  console.log(currentImageIndex);
  return (
    <div
      className={cn(
        " relative",
        isThumbnail ? "w-28 h-full" : " h-full w-full",
        className,
      )}
    >
      <button
        className={`${btn_Prev} absolute ${btn_Prev_Position} z-10 bg-black text-white p-2 rounded-full cursor-pointer 
        hover:bg-black/80`}
        onClick={prev}
      >
        {isThumbnail ? (
          <HugeiconsIcon icon={ArrowUp} />
        ) : (
          <HugeiconsIcon icon={ArrowLeft} />
        )}
      </button>

      <button
        className={`${btn_Next} absolute ${btn_Next_Position} z-10 bg-black text-white p-2 rounded-full cursor-pointer 
        hover:bg-black/80`}
        onClick={next}
      >
        {isThumbnail ? (
          <HugeiconsIcon icon={ArrowDown} />
        ) : (
          <HugeiconsIcon icon={ArrowRight} />
        )}
      </button>

      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={isThumbnail ? 2 : 2}
        navigation={{
          prevEl: `.${btn_Prev}`,
          nextEl: `.${btn_Next}`,
          disabledClass: navBtn,
        }}
        //slidesPerView={isThumbnail ? 2 : 1}

        breakpoints={{
          0:{
            slidesPerView:isThumbnail?0:1,
            slidesPerGroup: isThumbnail ? 0 : 1,
          },
          1024: {
            slidesPerView: isThumbnail ? 7 : 1,
            slidesPerGroup: isThumbnail ? 7 : 1,
          }
          
        }}
        //slidesPerGroup={isThumbnail ? 4 : 1}
        direction={isThumbnail ? "vertical" : "horizontal"}
        className={isThumbnail ? "w-28 h-screen" : "w-full h-full"}
      >
        {!isThumbnail
          ? images.map((image, index) => (
              <SwiperSlide
                key={`${image.split("/").pop()?.split(".")[0]}-${index}`}
                className="w-full"
              >
                <div className="relative w-full h-full overflow-hidden hover:cursor-zoom-in">
                  <Image
                    src={images[currentImageIndex]}
                    alt={images[currentImageIndex]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="md:object-cover object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                    
                  />
                </div>
              </SwiperSlide>
            ))
          : images.map((image, index) => (
              <SwiperSlide
                key={`${image.split("/").pop()?.split(".")[0]}-${index}`}
                className=""
              >
                <div
                  className={cn(
                    "relative w-24 h-24 border mb-10 cursor-pointer hover:border-black",
                    selectedImageIndex === index
                      ? "border-black"
                      : "border-gray-200",
                  )}
                  onClick={() => {                    
                    onImageSelectIndex?.(index)}}
                >
                  <Image
                    src={image}
                    alt={image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover "
                  />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
