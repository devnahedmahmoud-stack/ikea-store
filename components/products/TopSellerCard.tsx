"use client";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useUserFavorites } from "@/stores/userfavorites.store";
import { ProductCard } from "@/types/types";
import {
  ArrowRight01Icon,
  Heart,
  ShoppingCart02Icon,
  Star,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
type TopSellerCardProps = {
  productId: number;
  images: string[];
  title: string;
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
  topSeller?: boolean;
  favorites?: boolean;
  productsData:ProductCard[]
};
const TopSellerCard = ({
  productId,
  images,
  price,
  title,
  pack,
  packCount,
  ratingCount,
  unitPrice,
  store,
  priceLowered,
  lastChance,
  previousPrice,
  moreOptions,
  topSeller,
  favorites,
  productsData
}: TopSellerCardProps) => {
  const { addToFavorite, removeFromFavorite, existFavorite, usersFavorites } =
    useUserFavorites();
  const [isAddFavorite, setIsAddFavorite] = useState<boolean>(false);
  const { currentUser } = useAuthUserStore();

  function handleUserFavoriteToggle(productId: number) {
    const p = productsData.find((p) => p.id === productId);

    let messsage: string = "";
    if (!p) return;
    if (!isAddFavorite) {
      messsage = currentUser
        ? addToFavorite(currentUser.id, p).message
        : addToFavorite("", p).message;
    } else {
      messsage = currentUser
        ? removeFromFavorite(currentUser.id, p).message
        : removeFromFavorite("", p).message;
    }
    toast.success(messsage);
    setIsAddFavorite(!isAddFavorite);

  }

  useEffect(() => {
    const p = productsData.find((p) => p.id === productId);

    if (!p) return;

    const exists = currentUser
      ? existFavorite(currentUser.id, p)
      : existFavorite("", p);

    setIsAddFavorite(exists);
  }, [currentUser, productId, existFavorite]);
  return (
    <Card
      className={cn(
        "ring-0 rounded-none relative p-0",
        favorites ? "w-75" : "w-50",
      )}
    >
      <div className=" hover:cursor-pointer group ">
        <Link href={`/products/${productId}`} className="">
          <div>
            {topSeller && (
              <div className="h-4 w-fit z-20 bg-red-600 text-white font-semibold flex items-center px-2 py-3 absolute top-0 left-0">
                Top seller
              </div>
            )}
            <div
              className={cn(
                "w-full relative overflow-hidden group/image",
                favorites ? " h-72" : " h-50",
              )}
            >
              <Image
                src={images[1]}
                alt={images[1]}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className=" object-cover absolute inset-0"
              />
              <Image
                src={images[0]}
                alt={images[0]}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={
                  "object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover/image:opacity-0"
                }
              />
            </div>

            <CardHeader className="p-0">
              {priceLowered && (
                <span className="text-red-700 text-base font-bold capitalize">
                  {priceLowered}
                </span>
              )}
              <CardTitle>
                <span className="font-extrabold text-sm tracking-wide uppercase text-black/80 group-hover:underline">
                  {title.split(" ")[0]}
                </span>
                <p className="text-black/75 text-sm">
                  {title.substring(title.split(" ")[0].length)}
                </p>
              </CardTitle>
              <CardDescription>
                <div className="space-y-3 ">
                  <div
                    className={cn(
                      "w-fit p-1 flex gap-1",
                      !priceLowered &&
                        "bg-yellow-400/80 shadow-[2px_2px_0px_rgba(255,0,0,0.9)]",
                    )}
                  >
                    <div className="flex gap-1">
                      <span className="font-extrabold text-black/80 ">EGP</span>
                      <span className="font-black text-3xl text-black/80">
                        {price}
                      </span>
                    </div>
                    {pack && (
                      <span className="font-extrabold text-black/80 flex items-end">
                        /{packCount} {pack}
                      </span>
                    )}
                  </div>
                  {lastChance && (
                    <div className="flex gap-1">
                      <HugeiconsIcon icon={ArrowRight01Icon} />
                      <span className="text-base font-semibold text-black">
                        {lastChance}
                      </span>
                    </div>
                  )}
                  {unitPrice && (
                    <p className="text-sm font-medium text-black/80">
                      Unit price:EGP {unitPrice}/{pack}
                    </p>
                  )}
                  {previousPrice && (
                    <p className="text-sm text-black/80">
                      Previous price:EGP{previousPrice}
                    </p>
                  )}
                  {ratingCount && (
                    <div className="flex items-center gap-1">
                      <HugeiconsIcon
                        icon={Star}
                        className="size-4 fill-amber-400 "
                        strokeWidth={0}
                      />
                      <span className="text-black/80 font-medium">
                        ({ratingCount})
                      </span>
                    </div>
                  )}
                  {moreOptions && (
                    <span className="text-sm text-black/70">{moreOptions}</span>
                  )}
                </div>
              </CardDescription>
            </CardHeader>
          </div>
        </Link>
        <div className="flex items-center gap-2 hover:cursor-default mt-3">
          <button className="w-10 h-10 flex items-center justify-center p-3 bg-blue-900 rounded-full hover:cursor-pointer">
            <HugeiconsIcon
              icon={ShoppingCart02Icon}
              className="size-5 text-white"
              strokeWidth={2.5}
            />
          </button>
          <button className=" w-10 h-10 flex items-center justify-center p-3 hover:bg-black/20  rounded-full hover:cursor-pointer">
            <HugeiconsIcon
              icon={Heart}
              className={cn(
                "size-5 ",
                isAddFavorite ? "fill-black" : "text-black",
              )}
              strokeWidth={3}
              onClick={() => {
                handleUserFavoriteToggle(productId);
              }}
            />
          </button>
        </div>
      </div>
      {favorites && (
        <CardFooter className="p-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <p className="font-medium  text-black/60">
                In stock at <span className="capitalize">{store || ""}</span>
              </p>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default TopSellerCard;
