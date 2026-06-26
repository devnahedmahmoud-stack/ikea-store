"use client";

import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Back, ShoppingCartAdd02Icon } from "@hugeicons/core-free-icons";
import { useRouter } from "next/navigation";
import { useUserFavorites } from "@/stores/userfavorites.store";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import CardsSlider from "./CardsSlider";
import { productCards } from "@/data/data";
import { cn } from "@/lib/utils";

type FavoritesListProps = {
  userID: string;
};

type FavoriteItem = {
  id: number;
  price: number;
  title: string;
  subtitle?:string;
  description?: string;
  images: string[];
  pack?: string;
  packCount?: number;
};

const FavoritesList = ({ userID }: FavoritesListProps) => {
  const { usersFavorites, updateItemQty } = useUserFavorites();

  const router = useRouter();

  const userFavorites = usersFavorites.find((uf) => uf.userId === userID);

  const [items, setItems] = useState<FavoriteItem[]>([]);
  const [counts, setCounts] = useState<Record<number, number>>({});
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    if (!userFavorites) return;

    setItems(userFavorites.favoriteItems);

    const initial: Record<number, number> = {};

    userFavorites.FavoriteItemsQty.forEach((item) => {
      initial[item.productID] = item.Qty;
    });

    setCounts(initial);
  }, [userFavorites]);

  function increment(id: number) {
    const qty: number = (counts[id] ?? 1) + 1;
    if (qty > 99) return;
    setCounts((prev) => ({
      ...prev,
      [id]: qty,
    }));

    updateItemQty(userID, id, qty);
  }

  function decrement(id: number) {
    const qty = (counts[id] ?? 1) - 1;

    if (qty <= 0) {
      setItems(
        userFavorites?.favoriteItems.filter((item) => item.id !== id) || [],
      );

      setCounts((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
      updateItemQty(userID, id, 0);
      return;
    }

    setCounts((prev) => ({
      ...prev,
      [id]: qty,
    }));

    updateItemQty(userID, id, qty);
  }

  function handleChange(id: number, value: string) {
    const num = Number(value);

    if (isNaN(num)) return;
    if (num > 99) return;

    if (num <= 0) {
      setItems(
        userFavorites?.favoriteItems.filter((item) => item.id !== id) || [],
      );

      setCounts((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
      updateItemQty(userID, id, 0);
      return;
    }

    setCounts((prev) => ({
      ...prev,
      [id]: num,
    }));

    updateItemQty(userID, id, num);
  }

  function backtoFavorites() {
    router.push("/favorites");
  }

  if (!userFavorites) return null;

  const total = items.reduce((sum, item) => {
    return sum + item.price * (counts[item.id] ?? 1);
  }, 0);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Favourites</h1>

      <div className="flex lg:flex-row lg:gap-20 gap-10 flex-col pb-10">
        <div className="lg:w-2/3 w-full space-y-10">
          <Button variant="outline" onClick={backtoFavorites} className="border border-black cursor-pointer 
          transition ease-in-out duration-300 box-border hover:border-2 ">
            <HugeiconsIcon icon={Back} strokeWidth={3} />
            Back to Favorites
          </Button>

          {items.map((fav) => (
            <div key={fav.id} className="">
              <div className="grid md:gap-6 gap-2 items-center p-2 md:grid-cols-5">
                <Link
                  href={`/products/${fav.id}`}
                  className="relative w-24 h-24 lg:w-28 lg:h-28 "
                  onMouseEnter={() => setHoveredId(fav.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={fav.images[0]}
                    alt={fav.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Link>

                <div className="md:col-span-4 space-y-4">
                  <div className="flex justify-between gap-2">
                    <div>
                      <Link
                        href={`/products/${fav.id}`}
                        className={cn(
                          "text-lg font-bold hover:underline",
                          fav.id === hoveredId && "underline",
                        )}
                      >
                        {fav.title}
                      </Link>

                      <p className="text-sm text-black/70 ">{fav.subtitle}</p>
                    </div>
                    <p className="font-bold">EGP {fav.price}</p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <div className="flex items-center border  font-bold rounded-full px-2 h-10">
                      <button
                        onClick={() => decrement(fav.id)}
                        className="w-8 h-8 rounded-full hover:bg-black/20"
                      >
                        -
                      </button>

                      <input
                        type="number"
                        value={counts[fav.id] ?? 1}
                        onChange={(e) => handleChange(fav.id, e.target.value)}
                        className="w-10 text-center outline-none"
                      />

                      <button
                        onClick={() => increment(fav.id)}
                        className="w-8 h-8 rounded-full hover:bg-black/20"
                      >
                        +
                      </button>
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
                      <HugeiconsIcon
                        icon={ShoppingCartAdd02Icon}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 space-y-6">
          <h2 className="font-bold">Summary</h2>

          <div className="flex justify-between">
            <span>Products</span>
            <span>EGP {total}</span>
          </div>

          <Separator />

          <div className="flex justify-between">
            <span className="font-bold">Total incl. VAT</span>
            <span className="text-3xl font-extrabold">EGP {total}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesList;
