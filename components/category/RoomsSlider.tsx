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
const RoomsSlider = ({roomData,nestedLinks}:RoomsSliderProps) => {
  
    const space:number=nestedLinks?20:180
    const prevBtn=nestedLinks?`button-prev-nestedLinks`:`button-prev-gallery`
    const nextBtn=nestedLinks?`button-next-nestedLinks`:`button-next-gallery`
  return (
    <div className=" py-4 relative ">
            <button className={`${prevBtn} absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80`} >
              <HugeiconsIcon icon={ArrowLeft} />
            </button>

            <button className= {`${nextBtn} absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80`}>
              <HugeiconsIcon icon={ArrowRight} />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={space}
              //slidesPerView={2}
              navigation={{
                prevEl: `.${prevBtn}`,
                nextEl: `.${nextBtn}`,
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
            >{nestedLinks ?
              <>
                            <SwiperSlide key={roomData.id} className="px-2 py-2 pb-10">
                  <div className="p-2 w-full h-45  bg-gray-100 rounded-sm hover:underline hover:border hover:border-black">
                    <Link
                      href={`/cat/${roomData.href}-${roomData.id}`}
                      className="flex flex-col items-center gap-1  w-full h-full p-1 "
                      //onClick={()=>{setMainMenu([])}}
                    >
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                        <HugeiconsIcon icon={ArrowUp03Icon}/>
                      </div>
                      <p className="text-center ">
                        {roomData.title.charAt(0).toUpperCase()}
                        {roomData.title.slice(1)}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              {roomData.nestedLinks?.map((cat) => (
                <SwiperSlide key={cat.id} className="px-2 py-2 pb-10">
                  <div className="p-2 w-full h-45  bg-gray-100 rounded-sm hover:underline hover:border hover:border-black">
                    <Link
                      href={`/cat/${cat.href}-${cat.id}`}
                      className="flex flex-col items-center gap-1  w-full h-full p-1 "
                      //onClick={()=>{setMainMenu([])}}
                    >
                      <div className="w-24 h-24 relative bg-transparent">
                        <Image
                          src={cat.image || ""}
                          alt={cat.image || ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-fill fill-gray-100"
                        ></Image>
                      </div>
                      <p className="text-center ">
                        {cat.title.charAt(0).toUpperCase()}
                        {cat.title.slice(1)}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}</>
               :<>                            
              {roomData.gallery?.map((cat) => (
                <SwiperSlide key={cat.id} className=" pb-10" >
                  <div className=" w-64 h-75 relative">
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
              ))}</>
            }
            </Swiper>
          </div>
  )
}

export default RoomsSlider