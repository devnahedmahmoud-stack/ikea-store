import HeaderSection from "@/components/home/HeaderSection";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { RoomGallery, RoomInspiration } from "@/data/data";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";


type GalleryPageProps = {
  params: {
    room: string;
  };

};
const GalleryPage = async ({params}:GalleryPageProps) => {
    const { room} = await params;
    const roomData = RoomInspiration.find((r) => r.href === room);
    console.log(room)
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
          <Link
            href={`/rooms/${room}`}
            className="text-sm capitalize font-medium text-black/60 hover:text-black/80 hover:underline"
          >
            {room}
          </Link>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            strokeWidth={1}
            className="size-4.5"
          />          
          <span className="capitalize text-sm font-medium text-black/60">
            Gallery
          </span>
        </div>
      </div>
      <HeaderSection
        title={roomData?.title||''}
        desc={roomData?.desc||""}
        className="xl:max-w-4xl lg:max-w-lg md:max-w-4xl"
      >        
      </HeaderSection>
      <section className="grid gap-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {RoomGallery.filter(r=>r.roomId===roomData?.id).map((gallery) => (          
            <div key={gallery.id} className="space-y-2 group">
              <div className="relative  h-80 overflow-hidden">
                <Image
                  src={gallery.image || ""}
                  alt={gallery.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="capitalize text-lg font-bold ml-6 group-hover:underline">
                {gallery.title}
              </p>
              
            </div>
          
        ))}
      </section>

    </ContainerProvider>
  );
};

export default GalleryPage;
