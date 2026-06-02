"use client";
import { MenuItemButtons } from "@/data/data";
import { cn } from "@/lib/utils";
import { NavLink } from "@/types/types";
import Link from "next/link";
import { useState } from "react";

import LinkMenu from "../productsmenu/LinkMenu";

type NavLinksProps = {
  navLinks: NavLink[];
  className?: string;
};
const NavLinks = ({ navLinks, className }: NavLinksProps) => {
 
  return (
    <ul className={cn("", className)}>
      {navLinks.map((l) => {
        
        return (
          <li key={l.id}>
            <Link
              href={""}
              className=                "text-[15px]   hover:underline hover:text-black"              
            >
              {l.title.charAt(0).toUpperCase() + l.title.slice(1)}
            </Link>
            
            
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
