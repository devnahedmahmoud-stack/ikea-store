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
import { homeMainSections, MenuMainLinks, Rooms } from "@/data/data";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FooterLink } from "@/types/types";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

const MenuLinks = () => {
  const { isMenuOpen, setIsMenuOpen } = useDialogStateStore();
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [activeMenu, setActiveMenu] = useState<FooterLink | null>(null);
  const [activeSelectedMenu, setActiveSelectedMenu] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const [activeMenuLinks, setActiveMenuLinks] = useState<
    { id: number; title: string; image: string; href: string }[]
  >([]);

  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);
  const [activeSelectedMenuLinks, setSelectedActiveMenuLinks] = useState<
    { id: number; title: string; image: string; href: string }[]
  >([]);

  useEffect(() => {
    const activeMenu: FooterLink | undefined = MenuMainLinks.find(
      (l) => l.id === activeMenuId,
    );
    console.log(activeMenuId);
    if (!activeMenu) {
      setActiveMenuLinks([]);
      setActiveMenu(null);
      setActiveSelectedMenu(null);
      return;
    }
    if (activeMenuId === 2) {
      setActiveMenuLinks(
        Rooms.map((link, index) => ({
          id: link.id ?? index,
          title: link.title ?? "",
          image: link.image ?? "",
          href: link.href ?? "",
        })),
      );
    } else {
      setActiveMenuLinks(
        activeMenu.links.map((link, index) => ({
          id: link.id ?? index,
          title: link.title ?? "",
          image: link.image ?? "",
          href: "",
        })),
      );
    }
    setActiveMenu(activeMenu);
    if (selectedMenuId) {
      const selctedMenu = activeMenu.links.find((m) => m.id === selectedMenuId);
      if (!selctedMenu) return;

      setSelectedActiveMenuLinks(
        selctedMenu.relLinks.map((link, index) => ({
          id: link.id ?? index,
          title: link.title ?? "",
          image: link.image ?? "",
          href: link.href,
        })),
      );
      setActiveMenu(null);
      setActiveSelectedMenu({
        id: selctedMenu.id ?? -1,
        title: selctedMenu.title ?? "",
      });
    }
  }, [activeMenuId, selectedMenuId]);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetContent
        className="xl:hidden w-full max-w-full lg:w-1/2 lg:max-w-[50%]"
        overlayClassName="xl:hidden"
      >
        <SheetHeader>
          <SheetTitle
            className={cn(
              "font-bold",
              activeMenu ? "text-center" : "flex gap-20",
            )}
          >
            {activeSelectedMenu && (
              <button>
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
          {activeMenuLinks.length > 0 && (
            <div
              className={cn(
                "flex-1 min-h-0 overflow-y-auto show-scrollbar grid gap-3",
                activeMenuId === 2
                  ? "lg:grid-cols-2 md:grid-cols-3 grid-cols-2 px-4 "
                  : "",
              )}
            >
              {activeMenuId === 2
                ? Rooms.map((room, index) => (
                    <Link
                      key={room.id}
                      href={`/rooms/${room.href}`}
                      className=""
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className=" w-40 space-y-2 group">
                        <div
                          className={cn(
                            "relative  h-50 overflow-hidden group/image",
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
                          <p className="capitalize font-semibold text-black/70 group-hover:underline group-hover:text-black">
                            {room.title}
                          </p>
                          <HugeiconsIcon
                            icon={ArrowRight02Icon}
                            className="text-black/70 group-hover:underline group-hover:text-black"
                          />
                        </div>
                      </div>
                    </Link>
                  ))
                :""}
                {activeMenuLinks.map((link) => (
                      <div key={link.id} className={cn("",selectedMenuId?"hidden":"")}>
                        <button
                          type="button"
                          className="flex justify-between items-center w-full  
                     px-4 py-2 text-left text-sm font-medium 
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
                  {activeSelectedMenuLinks.map((link) => (
                      <div key={link.id}>
                        <Link 
                          href={homeMainSections.find(s=>s.title.toLowerCase()===link.title.toLowerCase())?`/cat/${link.href}`:link.href}
                          className="flex justify-between items-center w-full  
                          px-4 py-2 text-left text-sm font-medium 
                        text-black transition hover:border-black/30 hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
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
                        <Separator/>
                      </div>
                    ))}
            </div>
          )}
          <SheetFooter className="p-0 mt-auto">
            <Separator className="w-full" />
            <ul className="flex gap-4 items-center justify-center">
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
