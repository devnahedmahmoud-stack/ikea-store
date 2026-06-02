"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopSellerCard from "../products/TopSellerCard";
import { productCards } from "@/data/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HomeSection, NavLink, ProductCard } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";
import { useEffect, useState } from "react";

type CategorySliderProps = {
  catParams: string[];
  subCategories?: NavLink[];
  products?:ProductCard[]
};
export default function CategorySlider({
  catParams,
  subCategories,
}: CategorySliderProps) {
  const slidesCountView: number = 7;
  const { mainMenu, catTitle,setMainMenu } = useActiveOpenMenu();
  //const [categoryData, setCategoryData] = useState<HomeSection | null>(null);
  console.log(mainMenu, catParams);
  

  /* useEffect(() => {
   setCategoryProducts(getCategryProducts(parseInt(catParams[catParams.length - 1])))
  }, [catParams]); */

  //if (!categoryData) {
  // return <p>No Category found</p>;
  //}
  /* const { setMainMenu, setCatTitle, setMenuLinksCol } = useActiveOpenMenu();
const { mainMenu, catTitle, menuLinksCol } = useActiveOpenMenu();
  const [categoryData, setCategoryData] = useState<HomeSection | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<
    ProductCard[] | null
  >(null);

  function linkMenuClick(title: string) {
    setMainMenu([]);
    if (title) setCatTitle(title);
    console.log(subCategories);
  }
 function getCategry(catId: number, mainM: HomeSection[], index: number) {
    let subCategories: HomeSection;
    if (mainM.length) {
     return subCategories = mainM.filter((sec) => sec.id === catId)[0];
    } 
    return null */
  /*  else 
      console.log(mainM, catId, subCategories);
    //: homeMainSections.filter((sec) => sec.id === catId)[index];
    return subCategories; */
  /* }
  function getProductsbyCategory(
    mainCatId: number
  ) {
    const products: ProductCard[] =
      categoryData?.categries?.filter((sec) => sec.id === mainCatId)[0]
        .products || [];
        console.log(products,)
    return products;
  }

  
  useEffect(() => {
    setCategoryData(
      getCategry(
        parseInt(catParams[catParams.length - 1] || "0"),
        mainMenu,
        menuLinksCol,
      ),
    );
    if(categoryData)
    {
      console.log(categoryData?.id,parseInt(catParams[catParams.length - 1]))
    setCategoryProducts(getProductsbyCategory(categoryData?.id));
    }
    
  }, [catParams, mainMenu, menuLinksCol]);
 */

  return (subCategories?
    <div className=" py-4 relative ">
      <button className="button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowLeft} />
      </button>

      <button className="button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black/80">
        <HugeiconsIcon icon={ArrowRight} />
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
          disabledClass: "hidden",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: slidesCountView,
          },
        }}
        slidesPerGroup={4}
        className="pb-20"
      >
        {subCategories.map((cat) => (
              <SwiperSlide key={cat.id} className="px-2 py-2 pb-10">
                <div className="p-2 w-full h-45  bg-gray-100 rounded-sm hover:underline hover:border hover:border-black">
                  <Link
                    href={`/cat/${cat.href}-${cat.id}`}
                    className="flex flex-col items-center gap-1  w-full h-full p-1 "
                    onClick={()=>{setMainMenu([])}}
                  >
                    <div className="w-24 h-24 relative bg-transparent">
                      <Image
                        src={cat.image || ""}
                        alt={cat.image || ""}
                        fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-fill fill-gray-100"
                      ></Image>
                    </div>
                    <p className="text-center ">
                      {cat.title.charAt(0).toUpperCase()}
                      {cat.title.slice(1)}
                    </p>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          }
      </Swiper>
    </div>:<p>ddddddddd</p>
  );
}
