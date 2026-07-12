import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { MenuMainLinks, Rooms } from "@/data/data";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import { useState } from "react";
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
  const { setMainMenu } = useActiveOpenMenu();
  
  // 1. Keep only the core navigation tracking states
  const [activeMenuId, setActiveMenuId] = useState<number>(1);
  const [selectedMenuId, setSelectedMenuId] = useState<number | null>(null);

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

  // 2. Derive state synchronously during the render cycle
  const activeMenu: FooterLink | null = MenuMainLinks.find((l) => l.id === activeMenuId) || null;

  let activeMenuLinks: MobileMenuLink[] = [];
  let activeSelectedMenu: { id: number; title: string } | null = null;
  let activeSelectedMenuLinks: MobileMenuLink[] = [];

  if (activeMenu) {
    if (activeMenuId !== 2) {
      activeMenuLinks = activeMenu.links.map((link, index) => mapMenuLink(link, index));
    }

    // Handle single-item menus (Offers, Services) auto-show
    if (activeMenu.links.length === 1 && !activeMenu.links[0].id) {
      activeSelectedMenuLinks = activeMenu.links[0].relLinks.map((link, index) => mapMenuLink(link, index));
      activeSelectedMenu = {
        id: 0,
        title: activeMenu.title,
      };
      activeMenuLinks = [];
    } else if (selectedMenuId !== null) {
      const selectedMenu = activeMenu.links.find((m) => m.id === selectedMenuId);
      if (selectedMenu) {
        activeSelectedMenuLinks = selectedMenu.relLinks.map((link, index) => mapMenuLink(link, index));
        activeSelectedMenu = {
          id: selectedMenu.id ?? -1,
          title: selectedMenu.title ?? "",
        };
      }
    }
  }

  // Adjust visibility condition flags based on derived states
  const showActiveMenuTitle = activeMenu && !(activeMenu.links.length === 1 && !activeMenu.links[0].id) && selectedMenuId === null;

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetContent
        className="xl:hidden data-[side=right]:w-full data-[side=right]:max-w-full data-[side=right]:md:w-full data-[side=right]:md:max-w-full data-[side=right]:lg:w-1/2 data-[side=right]:lg:max-w-1/2"
        overlayClassName="xl:hidden"
      >
        <SheetHeader>
          <SheetTitle
            className={cn(
              "font-bold h-14 capitalize relative",
              showActiveMenuTitle ? "text-center " : "flex gap-20 items-center justify-center",
            )}
          >
            {activeMenuId === 1 && selectedMenuId !== null && (
              <button
                type="button"
                className="back absolute left-0 top-1/2 -translate-y-1/2"
                onClick={() => setSelectedMenuId(null)}
              >
                <HugeiconsIcon icon={ArrowLeft02Icon} />
              </button>
            )}
            {showActiveMenuTitle
              ? activeMenu.title.charAt(0).toUpperCase() + activeMenu.title.slice(1)
              : activeSelectedMenu?.title}
          </SheetTitle>
        </SheetHeader>

        <div className="flex min-h-0 flex-col h-full">
          {activeMenuId === 2 ? (
            <div className="flex-1 min-h-0 overflow-y-auto show-scrollbar grid gap-3 space-y-6 lg:grid-cols-2 md:grid-cols-3 grid-cols-2 px-4">
              {Rooms.map((room, index) => (
                <Link
                  key={room.id}
                  href={`/rooms/${room.href}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="md:w-52 max-w-full space-y-2 group">
                    <div
                      className={cn(
                        "relative md:h-64 h-52 overflow-hidden group/image",
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
                    <div className="flex justify-between">
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
              {selectedMenuId === null && activeMenuLinks.length > 0 && activeMenuLinks.map((link) => (
                <div key={link.id}>
                  <button
                    type="button"
                    className="flex justify-between items-center w-full px-4 py-1 text-left text-sm font-medium text-black transition hover:border-black/30 hover:bg-gray-100"
                    onClick={() => setSelectedMenuId(link.id)}
                  >
                    <div className="flex gap-4 items-center">
                      {link.image !== "" && (
                        <div className="w-14 h-14 relative">
                          <Image
                            src={link.image}
                            alt={link.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
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
              
              {activeSelectedMenuLinks.length > 0 && activeSelectedMenuLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    href={
                      activeMenuId === 1 && selectedMenuId !== 1
                        ? `/cat/${link.href}-${link.id}`
                        : link.href
                    }
                    className="flex justify-between items-center w-full px-4 py-2 text-left text-sm font-medium text-black transition hover:border-black/30 hover:bg-gray-100"
                    onClick={() => {
                      setMainMenu(activeSelectedMenuLinks);
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="flex gap-4 items-center">
                      {link.image !== "" && (
                        <div className="w-14 h-14 relative">
                          <Image
                            src={link.image}
                            alt={link.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
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
                        <div key={`${link.id}-${category.id}`}>
                          <Link
                            href={
                              activeMenuId === 1 && selectedMenuId !== 1
                                ? `/cat/${category.href}-${category.id}`
                                : category.href
                            }
                            className="flex justify-between items-center w-full px-4 py-2 text-left text-sm font-medium text-black transition hover:border-black/30 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex gap-4 items-center">
                              {category.image !== "" && (
                                <div className="w-14 h-14 relative">
                                  <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
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
                </div>
              ))}
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
                    onClick={() => {
                      setSelectedMenuId(null);
                      setActiveMenuId(l.id);
                    }}
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