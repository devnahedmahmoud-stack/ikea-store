"use client";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { useShoppingCartStore } from "@/stores/useshoppingcart.store";
import { Category, ProductCard } from "@/types/types";
import { ShoppingCart02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { toast } from "sonner";

type FeaturedProductsProps = {
  featuredProducts: ProductCard[];
  categories: Category[];
};
const FeaturedProducts = ({
  featuredProducts,
  categories,
}: FeaturedProductsProps) => {
  const { addToCart, setCurrentUserId } = useShoppingCartStore();
  const { currentUser } = useAuthUserStore();

  function handleAddtoCart(product: ProductCard) {
    let message: string = "";
    const userId = currentUser?.id || "guest";
    setCurrentUserId(userId);
    message = addToCart(product).message;

    toast.success(message);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Kitchen Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 p-4 relative flex flex-col justify-between"
          >
            {product.badge && (
              <span className="absolute top-6 left-6 z-10  bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                {product.badge}
              </span>
            )}
            <div className="relative h-48 w-full mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs text-gray-500">
                {categories.find((c) => c.id === product.categoryId)?.name}
              </span>
              <h3 className="font-semibold text-lg text-gray-900 mt-1">
                {product.title}
              </h3>
              <div className="flex items-center gap-1 my-2 text-sm text-amber-500">
                <span>★</span>
                <span className="font-medium text-gray-700">
                  {product.ratingCount}
                </span>
              </div>
              <div className="flex justify-between">
              <p className="text-xl font-bold text-gray-900 mt-2">
                {"EGP "}
                {product.price}
              </p>
              <button
              className="w-10 h-10 flex items-center justify-center p-3 bg-blue-900 rounded-full hover:cursor-pointer"
              onClick={() => handleAddtoCart(product)}
            >
              <HugeiconsIcon
                icon={ShoppingCart02Icon}
                className="size-5 text-white"
                strokeWidth={2.5}
              />
            </button>
</div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
