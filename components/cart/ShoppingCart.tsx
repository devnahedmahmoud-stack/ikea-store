"use client";

import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { useState } from "react";
import { productCards } from "@/data/data";
import { cn } from "@/lib/utils";

const ShoppingCart = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <section className="">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold">Your bag</h2>
        <div className="flex lg:flex-row lg:gap-20 gap-10 flex-col pb-10">
          <div className="lg:w-2/3 w-full space-y-6">
            <p className="text-black/70">products in total</p>            
            <Separator />
            {productCards.map((fav) => (
              <div key={fav.id}>
                <div className="grid md:grid-cols-5 gap-4 items-center p-2">
                  <Link
                    href={`/products/${fav.id}`}
                    className="relative w-20 h-20 lg:w-30 lg:h-30"
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

                  <div className="col-span-4 space-y-4">
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
                          //onClick={() => decrement(fav.id)}
                          className="w-8 h-8 rounded-full hover:bg-black/20"
                        >
                          -
                        </button>

                        <input
                          type="number"
                          //value={counts[fav.id] ?? 1}
                          //onChange={(e) => handleChange(fav.id, e.target.value)}
                          className="w-10 text-center outline-none"
                        />

                        <button
                          //onClick={() => increment(fav.id)}
                          className="w-8 h-8 rounded-full hover:bg-black/20"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 space-y-6">
            <h2 className="font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <span className="text-black/60">Products</span>
              <span>EGP {10}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="font-bold">Subtotal incl. VAT</span>
              <span className="text-3xl font-extrabold">EGP {10}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
