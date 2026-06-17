import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import ProfileActionLink from "../user/ProfileActionLink";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { MenuItemButtons, MenuMainLinks } from "@/data/data";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FooterLink, MenuItemButton } from "@/types/types";
import { title } from "process";

const MenuLinks = () => {
  const { isMenuOpen, setIsMenuOpen } = useDialogStateStore();
  const[activeMenuId,setActiveMenuId]=useState<number>(1)
  const [activeMenuLinks,setActiveMenuLinks]=useState<MenuItemButton[]|[]>([])

  function btnClick() {
    //closeMenu();
    setIsMenuOpen(true);
  }
  useEffect(()=>{
   const activeMenu:FooterLink|undefined= MenuMainLinks.find(l=>l.id===activeMenuId)
   if(!activeMenu) return
   
    /* if(activeMenuId===1)
  
setActiveMenuLinks(activeMenu.links.map((l) => (
   {
    id: l.id,
    title: l.title,
  }
))||[])
    else
      setActiveMenuLinks(MenuItemButtons)
    */
  },[activeMenuId])

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen} >
      <SheetContent className="px-2">
        <SheetHeader>
          <SheetTitle className="mt-6 text-3xl font-bold"></SheetTitle>
        </SheetHeader>
        <div className="md:px-5 px-3">
            {}
          {/* <ProfileActionLink
            title="Account home"
            subtitle="Profile overview"
            href="/profile"
            icon={<HugeiconsIcon icon={ArrowRight02Icon} />}
          /> */}
          <SheetFooter className="p-2">
            <ul className="flex gap-2 items-center">
              {MenuMainLinks.map((l) => {
                return (
                  <li key={l.id}>
                    <Link href={""} className={cn("text-xs capitalize ",activeMenuId===l.id &&("underline font-semibold" ))}
                    onClick={()=>setActiveMenuId(l.id)}>
                      {l.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MenuLinks;
