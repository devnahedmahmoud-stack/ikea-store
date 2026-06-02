import { IconSvgElement } from "@hugeicons/react";

export type ProductCard = {
  id: number;
  topSeller?: boolean;
  images: string[];
  title: string;
  description?: string;
  price: number;
  unitPrice?: number;
  pack?: string;
  packCount?: number;
  ratingCount?: number;
  store?: string;
  priceLowered?: string;
  lastChance?: string;
  previousPrice?: number;
  moreOptions?: string;
};

export type NavLink = {
  id: number;
  title: string;
  href: string;
  image?: string;
  products?: ProductCard[];
  nestedLinks?:NavLink[],
  gallery?:NavLink[]
};

export type HomeSection = {
  id: number;
  title: string;
  page?: string;
  image?: string;
  href: string;
  desc?: string;
  categries?: NavLink[];
};

export type FooterLink = {
  id: number;
  title: string;
  links: {
    id?: number;
    title?: string;
    relLinks: HomeSection[];
    secondLinks?: { header?: string; links: HomeSection[] };
    thirdLinks?: { header?: string; links: HomeSection[] };
  }[];
};

export type SocialMediaLink = {
  id: number;
  icon: IconSvgElement;
  href: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type MenuItemButton = {
  id: number;
  title: string;
};

export type FavoriteItem = {
  ProductId: number;
};

export type FavoriteItems = {
  userId: string;
  products: ProductCard[];
};
