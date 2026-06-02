"use client";
import { useAuthUserStore } from "@/stores/authuser.stores";
import {
  Ellipsis,
  Heart,
  Menu,
  User02Icon,
  Warning,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import CardsSlider from "./CardsSlider";
import { productCards } from "@/data/data";
import { useUserFavorites } from "@/stores/userfavorites.store";
import Link from "next/link";
import LoginProfileDialog from "../user/LoginProfileDialog";
import { useDialogStateStore } from "@/stores/dialogstate.store";
import Image from "next/image";

const Favorites = () => {
  const { currentUser } = useAuthUserStore();
  const { usersFavorites } = useUserFavorites();
  const { setIsOpen } = useDialogStateStore();
  
  const userFavorites = currentUser
    ? usersFavorites.find((uf) => uf.userId === currentUser.id)
    : usersFavorites.find((uf) => uf.userId === "");
const userId:string=userFavorites?.userId||""
if(userId==="") return
console.log(userId)
  return (
    <>
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 ">
          {!userFavorites ? (
            <div className="flex flex-col gap-5 ">
              <h1 className="md:text-4xl text-3xl font-bold">
                You don’t have any favourites yet
              </h1>
              <p className="text-sm text-black/70">
                Save and arrange the best bits of your future home here until
                you’re ready for them.
              </p>
              <div className="flex items-center gap-2 text-black/70">
                <HugeiconsIcon
                  icon={Heart}
                  className="size-5"
                  strokeWidth={2.5}
                />
                <p className="font-bold md:text-base sm:text-sm">
                  Save products using the Save to favourites button
                </p>
              </div>
              <div className="flex items-center gap-2 text-black/70">
                <HugeiconsIcon
                  icon={Menu}
                  className="size-5"
                  strokeWidth={2.5}
                />
                <p className="font-bold  md:text-base sm:text-sm">
                  Save your products to different lists
                </p>
              </div>
              <div className="flex items-center gap-2 text-black/70">
                <HugeiconsIcon
                  icon={User02Icon}
                  className="size-5"
                  strokeWidth={2.5}
                />
                {currentUser ? (
                  <p className="font-bold  md:text-base sm:text-sm">
                    Stay logged in to view your lists on different devices
                  </p>
                ) : (
                  <p className="font-bold">
                    Join or log in to view saved lists on different devices
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-4xl font-bold">Your favourites</h3>
              {!currentUser && (
                <div className="border rounded-sm shadow-[-4px_0px_0px_rgba(255,0,0,0.6)]">
                  <div className="shadow-md p-4 flex gap-2">
                    <HugeiconsIcon icon={Warning} className="text-orange-500" />
                    <div>
                      <p className="font-bold">
                        These lists are only temporary
                      </p>
                      <p className="text-black/65">
                        <Link
                          href=""
                          onClick={() => setIsOpen(true)}
                          className="underline text-black/80"
                        >
                          Log in or join
                        </Link>{" "}
                        to make sure your lists are here when you come back and
                        to view them on other devices.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <p className="text-black/80 font-bold">Favorites</p>
                <span className="text-black/70 text-sm">
                  {userFavorites.favoriteItems.length} items{" "}
                </span>
                <Link href={`/favorites/list/${userId}`}>
                  <div className="flex my-2 relative">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center absolute right-0 hover:bg-black/20">
                      <HugeiconsIcon icon={Ellipsis} className="" />
                    </div>
                    {userFavorites.favoriteItems.slice(0, 5).map((fav) => (
                      <div
                        key={fav.id}
                        className="relative w-60 h-60 border-4 border-gray-100"
                      >
                        <Image
                          src={fav.images[0]}
                          alt={fav.images[0]}
                          fill
                          quality={75}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className=" object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Link>
                
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Button
              className={cn(
                "font-bold md:px-12 px-10 py-5 bg-white border-black cursor-pointer hover:border-2",
                currentUser ? "hidden" : "flex",
              )}
              variant={"outline"}
            >
              Log in
            </Button>

            <Button className="font-bold md:px-6 px-4 py-5 cursor-pointer">
              Create a new list
            </Button>
          </div>
        </div>

        <CardsSlider products={productCards} favorites={true} />
      </section>
      <LoginProfileDialog />
    </>
  );
};

export default Favorites;
