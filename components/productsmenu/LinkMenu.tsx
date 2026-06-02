"use client";
import MenuItemButton from "./MenuItemButton";
import { MenuItemButtons, MenuMainLinks, Rooms } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { FooterLink, HomeSection, NavLink } from "@/types/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";

type LinkMenuProps = {
  isProducts?: boolean;
  isRooms: boolean;
  isOffers?: boolean;
  menuId: number;
  onClick: () => void;
};

const LinkMenu = ({
  menuId,
  isProducts,
  isRooms,
  isOffers,
  onClick,
}: LinkMenuProps) => {
  const { setMainMenu, setCatTitle, setMenuLinksCol } = useActiveOpenMenu();
  let initialLinks;
  let navType:string="custom";
  if (!isRooms)
  {
    initialLinks = MenuMainLinks.find((l) => l.id === menuId)?.links[0];     
  } else {
    navType="progressbar"
  }

  let curMenuItemId = 0;
  if (isProducts) curMenuItemId = 1;

  const [menuItemId, setMenuItemId] = useState<number>(curMenuItemId);
  const [mainMenuLinks, setMainMenuLinks] = useState(initialLinks);

  function getMenuLinks(id: number, title: string) {
    setMenuItemId(id);
    setCatTitle(title);
  }
  useEffect(() => {
    if (isRooms) return;
    if (menuItemId !== 0) {
      setMainMenuLinks(
        MenuMainLinks.find((l) => l.id === menuId)?.links.find(
          (ml) => ml.id === menuItemId,
        ),
      );
    } else {
      setMainMenuLinks(MenuMainLinks.find((l) => l.id === menuId)?.links[0]);
    }
  }, [menuItemId]);

  function linkMenuClick(menu: HomeSection[], index: number, title?: string) {
    onClick();
    setMainMenu(menu);
    if (title) setCatTitle(title);
    setMenuLinksCol(index);
  }
  if (!isRooms && !mainMenuLinks) return null;

  return (
    <div className=" bg-white py-4 px-10">
      {(isProducts || isRooms) && (
        <div className={cn("relative",isRooms?" pl-10":"")}>
          <button className={cn("button-prev-link absolute left-0 z-10  bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80",isProducts?"top-3":"top-1/2 -translate-y-1/2 ")}>
            <HugeiconsIcon icon={ArrowLeft} />
          </button>

          <button className={cn("button-next-link absolute right-0 z-10  bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80",isProducts?"top-3":"top-1/2 -translate-y-1/2 ")}>
            <HugeiconsIcon icon={ArrowRight} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={isRooms ?20: 2 }
            navigation={{
              prevEl: ".button-prev-link",
              nextEl: ".button-next-link",
              disabledClass: "hidden",
            }}
            pagination={{ clickable: true, type: "custom"}}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            slidesPerGroup={6}
            className=""
          >
            {isProducts
              ? MenuItemButtons.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="min-w-max px-1 pt-2 pb-10"
                  >
                    <MenuItemButton
                      id={item.id}
                      title={item.title}
                      onClick={() => getMenuLinks(item.id, item.title)}
                    />
                  </SwiperSlide>
                ))
              : Rooms.map((room,index) => (
                  <SwiperSlide
                    key={room.id}
                    className="max-w-min px-1 pt-2 pb-10"
                  >
                    <Link
                      href={`/rooms/${room.href}`}
                      className=""
                      onClick={()=>onClick()}
                      //onClick={() => getMenuLinks(item.id,item.title)}
                    >
                      <div className=" w-40 space-y-2 group">
                        <div className={cn("relative  h-50 overflow-hidden group/image", 
                        (index+1)%3===1?"rounded-tl-[36%] rounded-tr-[36%]":(index+1)%3===0?"rounded-tl-[36%] rounded-tr-[36%] rounded-bl-[36%] rounded-br-[36%]":"")}>
                          <Image
                            src={room.image || ""}
                            alt={room.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover duration-500 group-hover/image:scale-110"
                          />
                        </div>
                        <div className=" flex justify-between">
                          <p className="capitalize font-semibold text-black/70 group-hover:underline group-hover:text-black">
                            {room.title}
                          </p>
                          <HugeiconsIcon icon={ArrowRight02Icon} className="text-black/70 group-hover:underline group-hover:text-black"/>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      )}
      {!isRooms && (
        <div className="grid grid-cols-4">
          <div className="col-span-1 flex flex-col gap-2 py-2">
            {mainMenuLinks?.relLinks.map((l) => (
              <Link
                key={l.id}
                href={`/cat/${l.href}-${l.id}`}
                className={cn(
                  "font-bold text-2xl capitalize w-fit hover:underline",
                  isOffers && l.id === 1 ? "underline" : "",
                )}
                onClick={() => linkMenuClick(mainMenuLinks?.relLinks, 0)}
              >
                {l.title}
              </Link>
            ))}
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-5 gap-4 py-2">
              {mainMenuLinks?.secondLinks && (
                <div className="flex flex-col gap-4  ">
                  {
                    <h3 className=" font-semibold text-black/70">
                      {" "}
                      {mainMenuLinks?.secondLinks?.header}
                    </h3>
                  }
                  {mainMenuLinks?.secondLinks?.links.map((l) => (
                    <Link
                      key={l.id}
                      href={`/cat/${l.href}-${l.id}`}
                      className=" capitalize w-fit text-sm hover:underline"
                      onClick={() =>
                        linkMenuClick(
                          mainMenuLinks?.secondLinks?.links ?? [],
                          1,
                          l.title,
                        )
                      }
                    >
                      {l.title}
                    </Link>
                  ))}
                </div>
              )}
              <div className="flex flex-col gap-4">
                {
                  <h3 className=" font-semibold text-black/70 ">
                    {" "}
                    {mainMenuLinks?.thirdLinks?.header}
                  </h3>
                }
                {mainMenuLinks?.thirdLinks?.links.map((l) => (
                  <Link
                    key={l.id}
                    href={l.href}
                    className=" capitalize w-fit text-sm hover:underline"
                  >
                    {l.title}
                  </Link>
                ))}
              </div>
              {menuId === 1 && menuItemId === 1 && (
                <div className="col-span-3 grid grid-cols-2 gap-6">
                  <div className="">
                    <Link
                      href={"/compaigns/free-delivery"}
                      className="hover:underline"
                    >
                      <div className=" relative w-full h-1/2">
                        <Image
                          src={"/freedelivery.png"}
                          alt="freedelivery"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="w-full h-1/2  p-10 bg-gray-50">
                        <p className="text-2xl font-bold ">
                          Free accessories delivery
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <Link href={"/cat/lower-price"} className="hover:underline">
                      <div className="relative w-full h-1/2">
                        <Image
                          src={"/pricelowered.png"}
                          alt="pricelowered"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="w-full h-1/2  p-10 bg-gray-50">
                        <p className="text-2xl font-bold ">Price lowered</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkMenu;
