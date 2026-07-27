"use client";
import { MenuMainLinks } from "@/data/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import LinkMenu from "../productsmenu/LinkMenu";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import ButtonPhoto from "../home/ButtonPhoto";
import LoginLink from "../user/LoginLink";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import MenuLinks from "./MenuLinks";
import { useShoppingCartStore } from "@/stores/useshoppingcart.store";
import { useAuthUserStore } from "@/stores/authuser.stores";

const NavBar = () => {
  const [activeOpenItem, setActiveOpenItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { setIsMenuOpen } = useDialogStateStore();
  const { setCurrentUserId } = useShoppingCartStore();
const { currentUser } = useAuthUserStore();
 

  function showMenu(item: string) {
    setActiveItem(item);
    setActiveOpenItem((prev) => (prev === item ? null : item));
  }
  function closeMenu() {
    setActiveOpenItem(null);
    setActiveItem(null);
  }

  useEffect(() => {
    setCurrentUserId(currentUser?.id || "guest");
    document.body.style.overflow = activeOpenItem ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };    
  }, [activeOpenItem,currentUser?.id, setCurrentUserId]);
    

  // Read items directly from store using selector to trigger re-renders automatically
  const items = useShoppingCartStore((state) => {
    const userId = state.currentUserId;
    return state.userCarts[userId] || [];
  });
const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      {activeOpenItem && (
        <div
          className="xl:flex hidden fixed inset-0 z-40 bg-black/40 duration-100  data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 "
          onClick={() => {
            closeMenu();
          }}
        />
      )}

      <header
        className="lg:px-12 px-6 py-5 sticky top-0 left-0 z-50 bg-white md:flex 
    md:items-center  lg:gap-12  gap-2"
      >
        <nav className="">
          <div className="flex items-center gap-8 ">
            <Link
              href={"/"}
              className="relative w-25 h-12"
              onClick={() => closeMenu()}
            >
              <Image
                src="/logo.png"
                alt="logo"
                fill
                sizes="40px"
                priority
                className="object-contain shrink-0"
              ></Image>
            </Link>
            <div className="xl:flex hidden ">
              {/* <NavLinks navLinks={navBarLinks} className="flex gap-3" /> */}
              <ul className="flex gap-3">
                {MenuMainLinks.map((l) => {
                  const isActive = activeItem === l.id.toString();

                  return (
                    <li key={l.id}>
                      <Link
                        href={""}
                        className={cn(
                          "text-[15px] p-4  hover:underline hover:text-black",
                          isActive
                            ? activeOpenItem
                              ? "font-bold text-black/70 hover:text-black"
                              : "text-black underline"
                            : "text-black/70",
                        )}
                        onClick={() => {
                          showMenu(l.id.toString());
                        }}
                      >
                        {l.title.charAt(0).toUpperCase() + l.title.slice(1)}
                      </Link>
                      {isActive && activeOpenItem && (
                        <div className="w-full  absolute top-full left-0">
                          <LinkMenu
                            menuId={l.id}
                            isProducts={l.title.toLowerCase() === "products"}
                            isRooms={l.title.toLowerCase() === "rooms"}
                            isOffers={l.title.toLowerCase() === "offers"}
                            onClick={closeMenu}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className=" md:flex md:flex-1 md:justify-between ">
          <div className="relative md:mt-0 mt-4 xl:w-[55%] md:w-[75%]">
            <HugeiconsIcon
              icon={Search}
              className="absolute left-4 top-1/2 -translate-y-1/2 cursor-text size-4.5 "
            />
            <input
              className="w-full  px-12 py-3 bg-gray-50 rounded-full text-black focus:outline-2 focus:outline-blue-900/75 
            placeholder:text-black/60 placeholder:font-medium placeholder:tracking-wide"
              placeholder="What are you looking for?"
            ></input>
            <ButtonPhoto />
          </div>
          <div className="flex items-center justify-center gap-2 md:static absolute top-5 right-6">
            <LoginLink closeMenu={() => closeMenu()} />

            <Link
              href={"/favorites"}
              className=" w-10 h-10 flex items-center justify-center p-3 hover:bg-black/20  rounded-full"
              onClick={() => closeMenu()}
            >
              <HugeiconsIcon icon={Heart} className="size-5 " strokeWidth={3} />
            </Link>

            <Link
              href={"/cart"}
              className="relative w-10 h-10 flex items-center justify-center p-3 hover:bg-black/20 rounded-full"
              onClick={() => closeMenu()}
            >
              <HugeiconsIcon
                icon={ShoppingCart02Icon}
                className="size-5 "
                strokeWidth={2.5}
              />
              {totalItems >0? (
                <span className="absolute top-1 -right-2 bg-[#0058A3] text-sm text-white flex items-center justify-center w-5 h-5 rounded-full">
                  {totalItems}
                </span>
              ):""}
            </Link>
            <div className="xl:hidden">
              <HugeiconsIcon
                icon={Menu}
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            </div>
            <MenuLinks />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
