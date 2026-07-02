import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import {  MenuMainLinks, Rooms } from "@/data/data";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FooterLink } from "@/types/types";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";

type MobileMenuLink = {
  id: number;
  title: string;
  image: string;
  href: string;
  categries?: Array<{ id: number; title: string; image: string; href: string }>;
};

const MenuLinks = () => {
  const { isMenuOpen, setIsMenuOpen } = useDialogStateStore();
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [activeMenu, setActiveMenu] = useState<FooterLink | null>(null);
  const [activeSelectedMenu, setActiveSelectedMenu] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const [activeMenuLinks, setActiveMenuLinks] = useState<MobileMenuLink[]>([]);

  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [activeSelectedMenuLinks, setActiveSelectedMenuLinks] = useState<
    MobileMenuLink[]
  >([]);
  const { setMainMenu } = useActiveOpenMenu();
  const mapMenuLink = (
    link: {
      id?: number;
      title?: string;
      image?: string;
      href?: string;
      categries?: Array<{
        id?: number;
        title?: string;
        image?: string;
        href?: string;
      }>;
    },
    index: number,
  ): MobileMenuLink => ({
    id: link.id ?? index,
    title: link.title ?? "",
    image: link.image ?? "",
    href: link.href ?? "",
    categries: link.categries?.map((category, categoryIndex) => ({
      id: category.id ?? categoryIndex,
      title: category.title ?? "",
      image: category.image ?? "",
      href: category.href ?? "",
    })),
  });

  useEffect(() => {
    const activeMenu: FooterLink | undefined = MenuMainLinks.find(
      (l) => l.id === activeMenuId,
    );
    //console.log(activeMenuId, selectedMenuId);
    if (!activeMenu) {
      setActiveMenuLinks([]);
      setActiveMenu(null);
      setActiveSelectedMenu(null);
      return;
    }
    setActiveMenu(activeMenu);
    if (activeMenuId === 2) {
      setActiveMenuLinks([]);
      return
    } else {
      setActiveMenuLinks(
        activeMenu.links.map((link, index) => mapMenuLink(link, index)),
      );
    }    

    // For single-item menus (Offers, Services), auto-show the relLinks
    if (activeMenu.links.length === 1 && !activeMenu.links[0].id) {
      setActiveSelectedMenuLinks(
        activeMenu.links[0].relLinks.map((link, index) => mapMenuLink(link, index)),
      );
      setActiveSelectedMenu({
        id: 0,
        title: activeMenu.title,
      });
      setActiveMenuLinks([]);
      return;
    }

    if (selectedMenuId === null) {
      setActiveSelectedMenuLinks([]);
      setActiveSelectedMenu(null);
      return;
    }

    const selctedMenu = activeMenu.links.find((m) => m.id === selectedMenuId);
    console.log(selctedMenu, "selctedMenu");
    if (!selctedMenu ) {
      setActiveSelectedMenuLinks([]);    
      setActiveSelectedMenu(null);
      return;
    }

    setActiveSelectedMenuLinks(
      selctedMenu.relLinks.map((link, index) => mapMenuLink(link, index)),
    );
    setActiveMenu(null);
    setActiveSelectedMenu({
      id: selctedMenu.id ?? -1,
      title: selctedMenu.title ?? "",
    });
    //console.log(activeMenuLinks, "activeMenuLinks");
    
  }, [activeMenuId, selectedMenuId]);
  //console.log(activeMenuLinks, "activeMenuLinks");
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetContent
        className="xl:hidden data-[side=right]:w-full data-[side=right]:max-w-full data-[side=right]:md:w-full data-[side=right]:md:max-w-full data-[side=right]:lg:w-1/2 data-[side=right]:lg:max-w-1/2"
        overlayClassName="xl:hidden"
      >
        <SheetHeader>
          <SheetTitle
            className={cn(
              "font-bold h-14",
              activeMenu ? "text-center" : "flex gap-20 items-center",
            )}
          >
            {activeMenuId === 1 && activeSelectedMenu && (
              <button
                type="button"
                className="back"
                onClick={() => {
                  setSelectedMenuId(null);
                  setActiveSelectedMenu(null);
                  setActiveSelectedMenuLinks([]);
                }}
              >
                <HugeiconsIcon icon={ArrowLeft02Icon} className="" />
              </button>
            )}
            {activeMenu
              ? activeMenu.title.charAt(0).toUpperCase()
              : activeSelectedMenu?.title.charAt(0).toUpperCase()}
            {activeMenu
              ? activeMenu.title.substring(1)
              : activeSelectedMenu?.title.substring(1)}
          </SheetTitle>
        </SheetHeader>

        <div className=" flex min-h-0 flex-col h-full">
          {activeMenuId === 2 ? (
            <div
              className="flex-1 min-h-0 overflow-y-auto show-scrollbar grid gap-3 space-y-6                
                   lg:grid-cols-2 md:grid-cols-3 grid-cols-2 px-4 "
            >
              {Rooms.map((room, index) => (
                <Link
                  key={room.id}
                  href={`/rooms/${room.href}`}
                  className=""
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className=" md:w-52 max-w-full space-y-2 group">
                    <div
                      className={cn(
                        "relative  md:h-64 h-52 overflow-hidden group/image",
                        (index + 1) % 3 === 1
                          ? "rounded-tl-[36%] rounded-tr-[36%]"
                          : (index + 1) % 3 === 0
                            ? "rounded-tl-[36%] rounded-tr-[36%] rounded-bl-[36%] rounded-br-[36%]"
                            : "",
                      )}
                    >
                      <Image
                        src={room.image || ""}
                        alt={room.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover duration-500 group-hover/image:scale-110"
                      />
                    </div>
                    <div className=" flex justify-between">
                      <p className="capitalize font-bold text-black group-hover:underline group-hover:text-black">
                        {room.title}
                      </p>
                      <HugeiconsIcon
                        icon={ArrowRight02Icon}
                        className="text-black group-hover:underline group-hover:text-black"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex-1 min-h-0 overflow-y-auto show-scrollbar grid gap-3 space-y-6">
              {activeMenuLinks.length > 0 && activeMenuLinks.map((link) => (
                  <div
                    key={link.id}
                    className={cn("", selectedMenuId ? "hidden" : "")}
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center w-full  
                     px-4 py-1 text-left text-sm font-medium
                    text-black transition hover:border-black/30 hover:bg-gray-100"
                      onClick={() => setSelectedMenuId(link.id)}
                    >
                      <div className="flex gap-4 items-center">
                        {link.image !== "" && (
                          <div className="w-14 h-14 relative">
                            <Image
                              src={link.image}
                              alt={link.image}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                            ></Image>
                          </div>
                        )}
                        {link.title.charAt(0).toUpperCase()}
                        {link.title.substring(1)}
                      </div>
                      <HugeiconsIcon icon={ArrowRight02Icon} />
                    </button>
                    <Separator />
                  </div>
              ))}
              {activeSelectedMenuLinks.length>0 && ( activeSelectedMenuLinks.map((link) => (
                  <div key={link.id} className="">
                    <Link
                      href={
                        activeMenuId === 1 && selectedMenuId !== 1
                          ? `/cat/${link.href}-${link.id}`
                          : link.href
                      }
                      className="flex justify-between items-center w-full  
                          px-4 py-2 text-left text-sm font-medium
                        text-black transition hover:border-black/30 hover:bg-gray-100"
                      onClick={() => {
                        console.log(activeSelectedMenuLinks);
                        setMainMenu(activeSelectedMenuLinks);
                        setIsMenuOpen(false);
                      }}
                    >
                      <div className="flex gap-4 items-center">
                        {link.image !== "" && (
                          <div className="w-14 h-14 relative">
                            <Image
                              src={link.image}
                              alt={link.image}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                            ></Image>
                          </div>
                        )}
                        {link.title.charAt(0).toUpperCase()}
                        {link.title.substring(1)}
                      </div>
                    </Link>
                    <Separator />
                    {link.categries?.length ? (
                      <div className="mt-2 space-y-1 pb-2">
                        {link.categries.map((category) => (
                          <div key={`${link.id}-${category.id}`} className="">
                            <Link
                              href={
                                activeMenuId === 1 && selectedMenuId !== 1
                                  ? `/cat/${category.href}-${category.id}`
                                  : category.href
                              }
                              className="flex justify-between items-center w-full  
                          px-4 py-2 text-left text-sm font-medium 
                        text-black transition hover:border-black/30 hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex gap-4 items-center">
                                {category.image !== "" && (
                                  <div className="w-14 h-14 relative">
                                    <Image
                                      src={category.image}
                                      alt={category.image}
                                      fill
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                    ></Image>
                                  </div>
                                )}
                                {category.title.charAt(0).toUpperCase()}
                                {category.title.slice(1)}
                              </div>
                            </Link>
                            <Separator className="w-full" />
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <Separator />
                  </div>
                )))}
              </div>
          )}

          <SheetFooter className="p-0 mt-auto">
            <Separator className="w-full" />
            <ul className="h-16 flex gap-4 items-center justify-center">
              {MenuMainLinks.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    className={cn(
                      "text-xs capitalize transition-colors duration-150",
                      activeMenuId === l.id
                        ? "underline font-semibold text-black"
                        : "text-black/70 hover:text-black",
                    )}
                    onClick={() => setActiveMenuId(l.id)}
                  >
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MenuLinks;
