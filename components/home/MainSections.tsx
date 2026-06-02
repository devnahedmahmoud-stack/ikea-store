"use client"
import { homeMainSections } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Suspense } from "react";
import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";
import { HomeSection } from "@/types/types";

const MainSections = () => {
  const { setMainMenu ,setCatTitle,setMenuLinksCol} = useActiveOpenMenu();
  function onClickItem(sections:HomeSection[],title:string)
  {
    setMainMenu(sections)
    setCatTitle(title)
    setMenuLinksCol(0) 
  }
  return (
    <Suspense
      fallback={
        <div className="fixd inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-3xl">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      }
    >
      <div className="">
        <Carousel>
          <CarouselContent>
            {homeMainSections.map((sec) => (
              <CarouselItem
                key={sec.id}
                className={`basis-1/2   xl:basis-1/8 md:basis-1/5`}
              >
                <div className="p-2 w-full h-full bg-gray-100 rounded-sm hover:underline hover:border hover:border-black">
                  <Link
                    href={`/cat/${sec.href}-${sec.id}`}
                    className="flex flex-col items-center  w-full h-full p-1 "
                    onClick={()=>onClickItem(homeMainSections,sec.title)}
                  >
                    <div className="w-24 h-24 relative bg-transparent">
                      <Image
                        src={sec?.image||""}
                        alt={sec.image||""}
                        fill
                        sizes="80px"
                        className="object-fill fill-gray-100"
                      ></Image>
                    </div>
                    <p className="text-center ">
                      {sec.title.charAt(0).toUpperCase()}
                      {sec.title.slice(1)}
                    </p>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute -right-4 bg-black text-white" />
          <CarouselPrevious className="absolute -left-4 bg-black text-white" />
        </Carousel>
      </div>
    </Suspense>
  );
};

export default MainSections;
