"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Remove } from "@hugeicons/core-free-icons";
import { useShoppingCartStore } from "@/stores/useshoppingcart.store";
import { useAuthUserStore } from "@/stores/authuser.stores";

const ShoppingCart = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
 // const [isMounted, setIsMounted] = useState(false);

  // Retrieve state and actions from Zustand store
  const { setCurrentUserId, incrementQuantity, decrementQuantity, updateQuantity, removeItem } =
    useShoppingCartStore();
const { currentUser } = useAuthUserStore();
//const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    setCurrentUserId(currentUser?.id || "guest");
  }, [currentUser?.id, setCurrentUserId]);

  // Read items directly from store using selector to trigger re-renders automatically
  const items = useShoppingCartStore((state) => {
    const userId = state.currentUserId;
    return state.userCarts[userId] || [];
  });

  // Summary Calculations
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleQuantityInputChange = (id: number, value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      if (parsedValue <= 0) {
        // If set to 0 or less via input, find item and remove it
        const itemToRemove = items.find((item) => item.product.id === id);
        if (itemToRemove) removeItem(itemToRemove.product);
      } else {
        updateQuantity(id, parsedValue);
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold">Your bag</h2>
        <div className="flex lg:flex-row lg:gap-20 gap-10 flex-col pb-10">
          
          {/* Left Column: Product List */}
          <div className="lg:w-2/3 w-full space-y-6">
            <p className="text-black/70">
              {totalItems} {totalItems === 1 ? "product" : "products"} in total
            </p>            
            <Separator />

            {items.length === 0 ? (
              <div className="py-12 text-center text-black/60">
                <p className="text-xl">Your shopping bag is empty.</p>
                <Link
                  href="/"
                  className="inline-block mt-4 text-black font-semibold underline hover:text-black/80"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id}>
                  <div className="grid md:grid-cols-5 gap-4 items-center p-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="relative w-20 h-20 lg:w-30 lg:h-30 shrink-0"
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-md"
                      />
                    </Link>

                    <div className="col-span-4 space-y-4">
                      <div className="flex justify-between gap-2">
                        <div>
                          <Link
                            href={`/products/${product.id}`}
                            className={cn(
                              "text-lg font-bold hover:underline",
                              product.id === hoveredId && "underline"
                            )}
                          >
                            {product.title}
                          </Link>
                          <p className="text-sm text-black/70">{product.subtitle}</p>
                        </div>
                        <p className="font-bold">EGP {product.price * quantity}</p>
                      </div>

                      <div className="flex gap-4 items-center justify-between">
                        {/* Quantity Counter */}
                        <div className="flex items-center border font-bold rounded-full px-2 h-10">
                          <button
                            onClick={() => decrementQuantity(product.id)}
                            className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityInputChange(product.id, e.target.value)
                            }
                            className="w-12 text-center outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />

                          <button
                            onClick={() => incrementQuantity(product.id)}
                            className="w-8 h-8 rounded-full hover:bg-black/10 flex items-center justify-center transition"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Item Button */}
                        <button
                          onClick={() => removeItem(product)}
                          className="text-black/60 hover:text-black p-2 transition cursor-pointer"
                          aria-label="Remove item"
                        >
                          <HugeiconsIcon icon={Remove} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <Separator className="mt-4" />
                </div>
              ))
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <h2 className="font-bold text-xl">Order Summary</h2>
              
              <div className="flex justify-between">
                <span className="text-black/60">Products ({totalItems})</span>
                <span>EGP {subtotal.toLocaleString()}</span>
              </div>

              <Separator />

              <div className="flex justify-between items-baseline">
                <span className="font-bold text-lg">Subtotal incl. VAT</span>
                <span className="text-3xl font-extrabold">
                  EGP {subtotal.toLocaleString()}
                </span>
              </div>

              <button
                disabled={items.length === 0}
                className="w-full bg-blue-700 text-white font-bold py-4 rounded-full hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Go to checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;