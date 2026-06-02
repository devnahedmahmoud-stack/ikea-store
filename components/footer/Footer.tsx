import React from "react";
import NavLinks from "../navlinks/NavLinks";
import {  
  footerLinks,  
  socialMediaLinks,
} from "@/data/data";
import { Separator } from "../ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { LiaCcVisa } from "react-icons/lia";
import { MasterCardIcon } from "@hugeicons/core-free-icons";
import { FooterLink, SocialMediaLink } from "@/types/types";

const Footer = () => {
  return (
    <footer className="lg:px-12 px-6 py-5 bg-gray-100">
      <div className="grid lg:grid-cols-4 grid-cols-1">
        {footerLinks.map((footerLink: FooterLink, index: number) => (
          <div key={footerLink.id}>
            <Separator className="lg:hidden flex  my-6 " />
            <h3 className="font-bold text-lg mb-4">{footerLink.title}</h3>
            {index === footerLinks.length - 1 && (
              <Separator className="lg:hidden flex  my-6 " />
            )}
            <NavLinks
              navLinks={footerLink.links[0].relLinks}
              className="space-y-2 lg:flex lg:flex-col hidden"
            />
          </div>
        ))}
      </div>
      <div className="flex md:flex-row md:items-center flex-col  gap-10 mt-6">
        <div className="flex items-center gap-4">
          {socialMediaLinks.map((socialMediaLink: SocialMediaLink) => (
            <Link
              key={socialMediaLink.id}
              href={socialMediaLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 flex items-center justify-center border rounded-full">
                <HugeiconsIcon icon={socialMediaLink.icon} strokeWidth={1} />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <LiaCcVisa className="w-15 h-full" />
          <HugeiconsIcon
            icon={MasterCardIcon}
            className="w-15 h-full"
            strokeWidth={1}
          />
        </div>
      </div>
      <Separator className="my-6" />
      <div className="flex lg:justify-between lg:flex-row lg:items-center flex-col gap-6">
        <p className="text-xs text-black/60">
          &copy;IKEA Systems 1999-{new Date().getFullYear()}
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href={"/privacy-policy"}
            className="text-xs font-semibold text-black/70 tracking-wide hover:underline hover:text-black/60"
          >
            Privacy policy
          </Link>
          <Link
            href={"/cookie-policy"}
            className="text-xs font-semibold text-black/70  tracking-wide hover:underline hover:text-black/60"
          >
            Cookie policy
          </Link>
          <Link
            href={"/cookie-settings"}
            className="text-xs font-semibold text-black/70 tracking-wide hover:underline hover:text-black/60"
          >
            Cookie settings
          </Link>
          <Link
            href={"/terms-conditions"}
            className="text-xs font-semibold text-black/70 tracking-wide hover:underline hover:text-black/60"
          >
            Terms and conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
