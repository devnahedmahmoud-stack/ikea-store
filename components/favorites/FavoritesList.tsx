"use client";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Back,
  Ellipsis,
  ShoppingCartAdd02Icon,
} from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { useUserFavorites } from "@/stores/userfavorites.store";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

type FavoritesListProps = {
  userID: string;
};
const FavoritesList = ({ userID }: FavoritesListProps) => {
  const { usersFavorites } = useUserFavorites();
  const router = useRouter();
  
  const userFavorites = usersFavorites.find((uf) => uf.userId === userID);
  
  if (!userFavorites) return null;

  function backtoFavorites() {
    router.push("/favorites");
  }

  const total = userFavorites.favoriteItems.reduce(
  (sum, item) => sum + item.price, 0);

  return (
    <section className="space-y-6 ">
      <h1 className="text-3xl font-bold">Favourites</h1>
      <div className="flex lg:flex-row lg:gap-20 gap-10 flex-col">
        <div className="lg:w-2/3 w-full space-y-10 relative">
          <Button
            variant={"outline"}
            className="border border-black box-border transition-colors duration-200 ease-in-out cursor-pointer hover:border-2"
            onClick={backtoFavorites}
          >
            <HugeiconsIcon icon={Back} strokeWidth={3} />
            Back to Favorites
          </Button>
          <div className="w-10 h-10 rounded-full flex items-center justify-center absolute top-0 right-0 hover:bg-black/20">
            <HugeiconsIcon icon={Ellipsis} className="" />
          </div>
          <div className="grid gap-10 w-full">            
            {userFavorites.favoriteItems.map((fav) => (
              <div key={fav.id} className="w-full ">
                <div className="grid md:grid-cols-5 grid-cols-1 p-2 md:gap-10 gap-4 items-center ">
                <Link href="" className="">
                  <div className="relative lg:w-30 lg:h-30 w-20 h-20">
                    <Image
                      src={fav.images[0]}
                      alt={fav.images[0]}
                      fill
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className=" object-cover"
                    />
                  </div>
                  </Link>
                  <div className=" p-2 space-y-4 col-span-4">
                    <div className="flex flex-col">
                      {fav.priceLowered && (
                        <span className="text-red-700 text-base font-bold capitalize">
                          {fav.priceLowered}
                        </span>
                      )}
                      <Link href={""} className="text-lg font-bold hover:underline hover:text-black/70">{fav.title}</Link>
                      <div className="flex md:flex-row flex-col gap-2 justify-between">
                        <div className="space-y-2">
                          <p className="text-black/70 tracking-tight font-medium md:max-w-3xs w-full">
                            {fav.description}
                          </p>

                          <p className="text-sm text-black/60">
                            EGP{fav.price}
                            {fav.pack && (
                              <span className="text-black/60">
                                /{fav.packCount} {fav.pack}
                              </span>
                            )}
                          </p>

                          {fav.unitPrice && (
                            <p className="text-sm font-medium text-black/80">
                              Unit price:EGP {fav.unitPrice}/{fav.pack}
                            </p>
                          )}
                          {fav.previousPrice && (
                            <p className="text-sm text-black/70">
                              Previous price:EGP{fav.previousPrice}
                            </p>
                          )}
                        </div>
                        <p className="text-sm font-bold">EGP{fav.price}</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-4">
                        <div className="w-30 h-10 rounded-full border px-2 py-4 flex justify-between items-center">
                          <button className="w-8 h-8 rounded-full text-2xl flex items-center justify-center cursor-pointer hover:bg-black/20 ">
                            -
                          </button>

                          <button className="w-8 h-8 rounded-full text-2xl flex items-center justify-center cursor-pointer hover:bg-black/20">
                            +
                          </button>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#0057a3ef] flex items-center justify-center cursor-pointer hover:bg-[#0058A3]">
                          <HugeiconsIcon
                            icon={ShoppingCartAdd02Icon}
                            className="text-white/75"
                          />
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/20">
                        <HugeiconsIcon icon={Ellipsis} className="" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="data-horizontal"></Separator>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:w-1/3">
          <h2 className="font-bold">Summary</h2>
          <div className="flex justify-between">
            <p className="text-black/70 text-sm font-semibold">Products</p>
            <p className="text-black/70 text-sm font-semibold">EGP{total}</p>
          </div>
          <Separator className="data-horizontal:h-0.5 data-horizontal:w-full data-horizontal:bg-black my-6" />
          <div className="flex justify-between">
            <p className="font-bold text-black/70">Total incl. VAT</p>
            <div className="flex">
              <span className="font-extrabold">EGP</span>
              <span className="font-extrabold text-4xl">{total}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesList;
