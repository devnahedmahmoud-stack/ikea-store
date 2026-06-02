"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp03Icon,
  Back,
  
} from "@hugeicons/core-free-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/types/types";

type RoomsSliderProps=
{roomData:NavLink,
nestedLinks?:boolean
}
const LivingRoomsSlider = ({roomData,nestedLinks}:RoomsSliderProps) => {
  
    const space:number=nestedLinks?20:180
  return (
    <div className=" py-4 relative ">
            <button className="button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
              <HugeiconsIcon icon={ArrowLeft} />
            </button>

            <button className="button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
              <HugeiconsIcon icon={ArrowRight} />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={space}
              //slidesPerView={2}
              navigation={{
                prevEl: ".button-prev",
                nextEl: ".button-next",
                disabledClass: "hidden",
              }}
              pagination={{ clickable: true }}
             
              breakpoints={{
                320: {
                  slidesPerView:nestedLinks? 2:1.25,
                  slidesPerGroup:nestedLinks?2:1.25,
                  spaceBetween:4
                },
                768: {
                  slidesPerView:nestedLinks? 4:2.7,
                  slidesPerGroup:nestedLinks?4:2.7,
                  spaceBetween:4
                },
                1024: {
                  slidesPerView:nestedLinks? 5:3.5,
                  slidesPerGroup:nestedLinks?5:3.5,
                  spaceBetween:4
                },
                
                1440: {
                  slidesPerView:nestedLinks? 7:5,
                  slidesPerGroup:nestedLinks?7:5,
                  spaceBetween:4
                },
              }}
              //slidesPerGroup={6}
              className="pb-20"
            >                       
              {roomData.gallery?.map((cat) => (
                <SwiperSlide key={cat.id} className=" pb-10" >
                  <div className=" w-64 h-75 relative bg-gray-100 rounded-sm hover:underline hover:border hover:border-black">
                    <Link
                      href={`/cat/${cat.href}-${cat.id}`}
                      className="flex flex-col items-center gap-1  w-full h-full p-1 "
                      //onClick={()=>{setMainMenu([])}}
                    >
                      <div className="w-full h-full relative bg-transparent">
                        <Image
                          src={cat.image || ""}
                          alt={cat.image || ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-fill fill-gray-100"
                        ></Image>
                      </div>
                      <div className="border rounded-full bg-white absolute bottom-10 w-40 px-6 ">
                        <p className="text-center text-sm font-semibold tracking-tighter">
                        {cat.title}
                        
                      </p>
                      </div>
                      
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            
            </Swiper>
          </div>
  )
}

export default LivingRoomsSlider