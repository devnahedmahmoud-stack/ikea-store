"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IKEANewProducts } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import Image from "next/image";

const NewProducts = () => {
  return (
    <section className="space-y-10 py-20">
      <h1 className="text-5xl font-bold">What’s new in the IKEA range</h1>
      <h2 className="text-3xl font-bold">Discover our new products</h2>


      <div className="relative h-200">
        <button className="button-prev absolute left-0 -translate-x-1/2 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
          <HugeiconsIcon icon={ArrowLeft} />
        </button>

        <button className="button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
          <HugeiconsIcon icon={ArrowRight} />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          //slidesPerView={3}
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
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
          }}
          //slidesPerGroup={3}
          className="pb-28 h-full"
        >
          {IKEANewProducts.map((card) => (
            <SwiperSlide key={card.id} className="h-170 aspect-4/6 pb-10 flex items-stretch min-h-0">
              <Link href={card.href} className="group block h-full">
                <div style={{ backgroundColor: card.color }} className="h-full flex flex-col justify-between pb-4 pt-0">
                  <div className="flex-1 min-h-0 flex flex-col gap-6">
                    <div className="relative overflow-hidden group/image aspect-square w-full min-h-0">
                      <Image
                        src={card.image || ""}
                        alt={card.image || ""}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="block object-cover"
                      />
                    </div>
                    <div className="px-4  text-black ">
                      <p className="md:text-2xl text-xl font-bold mb-2 group-hover:underline">
                        {card.title}
                      </p>
                      <p className="text-lg">{card.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 ml-4 rounded-full bg-black text-white flex items-center justify-center self-start">
                    <HugeiconsIcon icon={ArrowRight02Icon} />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewProducts;
