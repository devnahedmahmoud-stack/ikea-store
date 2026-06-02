import HeaderSection from "@/components/home/HeaderSection";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Rooms } from "@/data/data";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomsPage = () => {
  return (
    <ContainerProvider className="flex flex-col gap-10">
      <HeaderSection
        title="Rooms"
        desc="Find the inspiration, ideas and products for every corner of your life at home. From interior décor advice to product information, everything you need to make your living space truly yours."
        className="xl:max-w-4xl lg:max-w-lg md:max-w-4xl"
      >        
      </HeaderSection>
      <section className="grid gap-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {Rooms.map((room) => (
          <Link
            key={room.id}
            href={`/rooms/${room.href}`}
            className=""
            //onClick={()=>onClick()}
            //onClick={() => getMenuLinks(item.id,item.title)}
          >
            <div className="space-y-2 group">
              <div className="relative  h-80 overflow-hidden">
                <Image
                  src={room.image || ""}
                  alt={room.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="capitalize text-lg font-bold ml-6 group-hover:underline">
                {room.title}
              </p>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className="text-black/70  ml-6 group-hover:underline"
              />
            </div>
          </Link>
        ))}
      </section>

      <p className="text-black/70 xl:max-w-4xl lg:max-w-lg md:max-w-4xl">
        Looking for the ideas and inspiration for home interior design plus the
        products to make them happen? All your home furnishings needs, from room
        furniture to home décor are here, as well as furnishing knowledge and
        décor inspiration to make your home truly yours.
      </p>
    </ContainerProvider>
  );
};

export default RoomsPage;
