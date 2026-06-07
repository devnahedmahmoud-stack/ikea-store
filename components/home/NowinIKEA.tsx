"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopSellerCard from "../products/TopSellerCard";
import { Now_in_IKEA, productCards } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { ProductCard } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

const NowinIKEA = () => {
  return (
    <section className="space-y-10 h-[120vh]">
      <h2 className="text-2xl font-bold">Now in IKEA Egypt</h2>

      <div className="h-[110vh] relative">
        <button className="button-prev absolute left-0 -translate-x-1/2 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
          <HugeiconsIcon icon={ArrowLeft} />
        </button>

        <button className="button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
          <HugeiconsIcon icon={ArrowRight} />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
            disabledClass: "hidden",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerGroup={3}
          className="pb-28 h-[110vh]"
        >
          {Now_in_IKEA.map((card) => (
            <SwiperSlide key={card.id} className="h-[110vh] pb-10">
              <Link href={card.href} className={`hover:cursor-pointer group h-[110vh]`}>
                <div className={`bg-[${card.color}] h-[110vh] flex flex-col justify-between py-4 `}>
                  <div className="">
                    <div className="overflow-hidden group/image">
                      <Image
                        src={card.image || ""}
                        alt={card.image || ""}
                        width={500}
                        height={700}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className=" object-contain"
                      />
                    </div>
                    <div className="px-4 mt-8">
                      <p className="text-2xl font-bold mb-2 group-hover:underline">
                        {card.title}
                      </p>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                  <div className="w-14 h-14 ml-4 rounded-full bg-black text-white flex items-center justify-center">
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

export default NowinIKEA;
