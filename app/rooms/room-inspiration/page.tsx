import HeaderSection from "@/components/home/HeaderSection";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { RoomInspiration } from "@/data/data";
import { ArrowRight01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeInspirationPage = () => {
  return (
    <ContainerProvider className="flex flex-col gap-10">
      <div className="mb-2">
        <div className="flex items-center">
          <Link
            href={"/rooms"}
            className="text-sm font-medium text-black/60 hover:text-black/80 hover:underline"
          >
            Rooms
          </Link>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            strokeWidth={1}
            className="size-4.5"
          />
          <span className="capitalize text-sm font-medium text-black/60">
            Inspiration for your favorite room
          </span>
        </div>
      </div>
      <HeaderSection
        title="Inspiration for your favorite room"
        desc="Where you can browse through tons of furniture combinations in lots of different styles and sizes – and at affordable prices. We’ve picked out the products for you, so it’s easy to recreate what you see here in your own home."
        className="xl:max-w-4xl lg:max-w-lg md:max-w-4xl"
      ></HeaderSection>
      <section className="grid gap-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {RoomInspiration.map((room) => (
          <Link
            key={room.id}
            href={`/rooms/${room.href}/gallery`}
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

export default HomeInspirationPage;
