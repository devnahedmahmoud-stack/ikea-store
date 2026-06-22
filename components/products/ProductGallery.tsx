"use client";
import { cache, useEffect, useState } from "react";
import ProductImagesSlider from "./ProductImagesSlider";
import ProductThumbnailSlider from "./ProductThumbnailSlider";
import { HugeiconsIcon } from "@hugeicons/react";
import { Heart } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { useUserFavorites } from "@/stores/userfavorites.store";
import { useAuthUserStore } from "@/stores/authuser.stores";
import { toast } from "sonner";
import { ProductCard } from "@/types/types";
import {
  AccessoriesProducts,
  FurnitureProducts,
  productCards,
} from "@/data/data";

type ProductGalleryProps = {
  productData: ProductCard;
  images: string[];
  topSeller?: boolean;
  className?: string;
};

const ProductGallery = ({
  images,
  topSeller,
  productData,
}: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToFavorite, removeFromFavorite, existFavorite, usersFavorites } =
    useUserFavorites();
  const [isAddFavorite, setIsAddFavorite] = useState<boolean>(false);
  const { currentUser } = useAuthUserStore();

  function handleUserFavoriteToggle() {
    //const p = productsData.find((p) => p.id === productId);
//console.log(productData)
    if (!productData) return;
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
    <div className="flex py gap-6 lg:w-2/3 w-full ">
      <ProductThumbnailSlider
        images={images}
        //isThumbnail={true}
        onImageSelectIndex={setSelectedImageIndex}
        selectedImageIndex={selectedImageIndex}
      />

      <div className=" relative lg:w-full md:w-2/3 flex-1 min-w-0 h-screen">
        {topSeller && (
          <div
            className="h-4 w-fit z-20  bg-red-600 text-white font-semibold flex items-center px-2 py-3 
                absolute top-0 left-0 "
          >
            Top seller
          </div>
        )}

        <button
          className=" w-12 h-12 lg:hidden flex  items-center justify-center p-3 hover:bg-black/20  rounded-full 
          absolute top-0 right-0 z-20  hover:cursor-pointer"
        >
          <HugeiconsIcon
            icon={Heart}
            className={cn(
              "size-5 ",
              isAddFavorite ? "fill-black" : "text-black",
            )}
            strokeWidth={3}
            onClick={() => {
              //console.log("heart")
              handleUserFavoriteToggle();
            }}
          />
        </button>
        <ProductImagesSlider
          images={images}
          isThumbnail={false}
          onImageSelectIndex={setSelectedImageIndex}
          selectedImageIndex={selectedImageIndex}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
