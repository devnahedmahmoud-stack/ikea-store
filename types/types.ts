
import { IconSvgElement } from "@hugeicons/react";

export type ProductCard = {
  id: number;
  topSeller?: boolean;
  images: string[];
  title: string;
  subtitle?: string;
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
  categoryId?: number;
};
// Define the structure of our offer item
export type OfferItem= {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  offerPrice: number;
  discount: number;
  imageUrl: string;
}

export type NavLink = {
  id: number;
  title: string;
  desc?: string;
  href: string;
  image?: string;
  products?: ProductCard[];
  nestedLinks?: NavLink[];
  gallery?: NavLink[];
  color?: string;
};

export type HomeSection = {
  id: number;
  title: string;
  page?: string;
  image?: string;
  href: string;
  desc?: string;
  categries?: NavLink[];
  heading?: string;
  brief?: string;
};

export type FooterLink = {
  id: number;
  title: string;
  links: {
    id?: number;
    title?: string;
    image?: string;
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
export type Category = {
  id: number;
  name: string;
  title: string;
  desc?: string;
};
export type RestaurantItem = {
  id: number;
  title: string;
  price: number;
  desc?: string;
  categoryId: number;
  image?: string;
};
export type IKEAStore = {
  id: number;
  name: string;
  desc?: string;
  address: string;
  hotline?: string;
  image?: string;
  openingHours?: string;
  href: string;
  title:string;
  desc2:string;
  mainImage:string;
};

export type IKEAOffer = {
  id: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  expiryDate: string;
  imageUrl: string;
}
