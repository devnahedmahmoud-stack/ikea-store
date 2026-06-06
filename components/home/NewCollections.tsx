"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight02Icon,
  ArrowUp03Icon,
  
} from "@hugeicons/core-free-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/types/types";

type NewCollectionsProps=
{newCollectionsData:NavLink[],
}
const NewCollections = ({newCollectionsData}:NewCollectionsProps) => {
  
    const space:number=180
    const prevBtn=`button-prev-gallery`
    const nextBtn=`button-next-gallery`
  return (
    <div className=" py-4 relative ">
        <h2 className="text-2xl font-bold mb-4">New Collections</h2>
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
                  slidesPerView:1.25,
                  slidesPerGroup:1.25,
                  spaceBetween:4
                },
                768: {
                  slidesPerView:2.7,
                  slidesPerGroup:2.7,
                  spaceBetween:4
                },
                1024: {
                  slidesPerView:3.5,
                  slidesPerGroup:3.5,
                  spaceBetween:4
                },
                
                1440: {
                  slidesPerView:5,
                  slidesPerGroup:5,
                  spaceBetween:4
                },
              }}
              //slidesPerGroup={6}
              className="pb-20"
            >                          
              {newCollectionsData.map((cat,index) => (
                <SwiperSlide key={cat.id} className=" pb-10" >
                    {index===newCollectionsData.length-1?
                    <div className=" w-64 h-75 bg-orange-700 group">
                    <Link
                      href={""}
                      className="flex flex-col items-center gap-1  w-full h-full p-1 text-white"
                      //onClick={()=>{setMainMenu([])}}
                    >
                      <div className="h-full p-4 flex flex-col justify-between">
                        <p className="text-center text-white font-bold group-hover:underline">
                        {cat.title}                        
                      </p>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex justify-center items-center ">
                      <HugeiconsIcon icon={ArrowRight02Icon}/>
                      </div>
                      </div>
                      
                    </Link>
                  </div>
                    :
                  <div className=" w-64 h-75 relative">
                    <Link
                      href={`/category/${cat.href}-${cat.id}`}
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
                  </div>}
                </SwiperSlide>
              ))}            
            </Swiper>
          </div>
  )
}

export default NewCollections