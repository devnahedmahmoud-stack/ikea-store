"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useUserFavorites } from "@/stores/userfavorites.store";
import {
  ArrowRight01Icon,
  Heart,
  ShoppingCart02Icon,
  Star,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/types/types";

type ProductDetailsProps = {
  productData: ProductCard;
};
const ProductDetails = ({ productData }: ProductDetailsProps) => {
  const { addToFavorite, removeFromFavorite, existFavorite, usersFavorites } =
    useUserFavorites();
  const [isAddFavorite, setIsAddFavorite] = useState<boolean>(false);
  const { currentUser } = useAuthUserStore();

  function handleUserFavoriteToggle(productId: number) {
    //const p = productsData.find((p) => p.id === productId);

    let messsage: string = "";
    //if (!p) return;
    if (!isAddFavorite) {
      messsage = currentUser
        ? addToFavorite(currentUser.id, productData).message
        : addToFavorite("", productData).message;
    } else {
      messsage = currentUser
        ? removeFromFavorite(currentUser.id, productData).message
        : removeFromFavorite("", productData).message;
    }
    toast.success(messsage);
    setIsAddFavorite(!isAddFavorite);

  }

  useEffect(() => {
    //const p = productsData.find((p) => p.id === productId);

    if (!productData) return;

    const exists = currentUser
      ? existFavorite(currentUser.id, productData)
      : existFavorite("", productData);

    setIsAddFavorite(exists);
  }, [currentUser, productData.id, existFavorite]);
  return (
    <Card
      className={cn(
        "ring-0 rounded-none relative p-0", "w-64"
      )}
    >
      <div className="">        
          <div>
            <CardHeader className="p-0">
              {productData.priceLowered && (
                <span className="text-red-700 text-base font-bold capitalize">
                  {productData.priceLowered}
                </span>
              )}
              <CardTitle>
                <span className="font-extrabold text-sm tracking-wide uppercase text-black/80 ">
                  {productData.title}
                </span>
                
                <p className="text-black/75 text-sm">
                  {productData.description}
                </p>
              </CardTitle>
              <CardDescription>
                <div className="space-y-3 ">
                  <div
                    className={cn(
                      "w-fit p-1 flex gap-1",
                      !productData.priceLowered &&
                        "bg-yellow-400/80 shadow-[2px_2px_0px_rgba(255,0,0,0.9)]",
                    )}
                  >
                    <div className="flex gap-1">
                      <span className="font-extrabold text-black/80 ">EGP</span>
                      <span className="font-black text-3xl text-black/80">
                        {productData.price}
                      </span>
                    </div>
                    {productData.pack && (
                      <span className="font-extrabold text-black/80 flex items-end">
                        /{productData.packCount} {productData.pack}
                      </span>
                    )}
                  </div>
                  {productData.lastChance && (
                    <div className="flex gap-1">
                      <HugeiconsIcon icon={ArrowRight01Icon} />
                      <span className="text-base font-semibold text-black">
                        {productData.lastChance}
                      </span>
                    </div>
                  )}
                  {productData.unitPrice && (
                    <p className="text-sm font-medium text-black/80">
                      Unit price:EGP {productData.unitPrice}/{productData.pack}
                    </p>
                  )}
                  {productData.previousPrice && (
                    <p className="text-sm text-black/80">
                      Previous price:EGP{productData.previousPrice}
                    </p>
                  )}
                  {productData.ratingCount && (
                    <div className="flex items-center gap-1 group">
                      <HugeiconsIcon
                        icon={Star}
                        className="size-4 fill-amber-400 "
                        strokeWidth={0}
                      />
                      <span className="text-black/80 font-medium group-hover:underline">
                        ({productData.ratingCount})
                      </span>
                    </div>
                  )}
                  {productData.moreOptions && (
                    <span className="text-sm text-black/70">{productData.moreOptions}</span>
                  )}
                </div>
              </CardDescription>
            </CardHeader>
          </div>
        
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
                handleUserFavoriteToggle(productData.id);
              }}
            />
          </button>
        </div>
      </div>
      
    </Card>
   
)
}

export default ProductDetails