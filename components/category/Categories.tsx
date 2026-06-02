"use client";

import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";
import CategorySlider from "./CategorySlider";
import { HomeSection, ProductCard } from "@/types/types";
import { useEffect, useState } from "react";
import CardsSlider from "../favorites/CardsSlider";
import { NewCollectionsItems } from "@/data/data";

type CategoryParams = {
  catParams: string[];
};

const Categories = ({ catParams }: CategoryParams) => {
  const { mainMenu, catTitle } = useActiveOpenMenu();

  const [categoryData, setCategoryData] = useState<HomeSection | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<
    ProductCard[] | null
  >(null);
  function getCategryProducts(catId: number) {
    let products: ProductCard[];
    //if (mainM.length) {
    products =
      categoryData?.categries?.filter((sec) => sec.id === catId)[0].products ||
      [];
    //setCategoryProducts(getProductsbyCategory(subCategories.id));
    setCategoryProducts(products);
    //return products;
    // }
    // return null;
  }
  function getCategory(
    catId: number,
    mainM: HomeSection[],
  ): HomeSection | null {
    if (mainMenu.length !== 0) {
      return mainM.find((sec) => sec.id === catId) || null;
    }
    else {
        console.log(catId, catParams, categoryData?.categries);
        const products =categoryData?categoryData.categries?.find((sec) => sec.id === catId)?.products:
        NewCollectionsItems.find((item) => item.id === catId)?.products || [];
         // categoryData?.categries?.find((sec) => sec.id === catId)?.products || [];
        console.log(products);
        if(products?.length)
        setCategoryProducts(products);
      return null;
      }


    
    /*  console.log("cat:", subCategory);
    return subCategory || null; */
  }
  useEffect(() => {
    const id = parseInt(catParams[catParams.length - 1]);
    //if (mainMenu.length !== 0) {
    if (!isNaN(id)) {
      const category = getCategory(id, mainMenu);
      if (category) setCategoryData(category);
      
      //console.log(categoryData?.categries);
      /* if (category?.categries) {
          const products =
            category.categries.find((sec) => sec.id === id)?.products || [];
          console.log(products);
          setCategoryProducts(products);
        } */
    }
    /* }
    else{
      console.log("products",categoryData)
      const products =
            categoryData?.categries?.find((sec) => sec.id === id)?.products || [];
          console.log(products);
          setCategoryProducts(products);
    } */
  }, [catParams, mainMenu]);

  if (!categoryData) {
    return <p>No Category found</p>;
  }

  return (
    <section>
      <h1 className="text-4xl font-bold">
        <span className="capitalize">{catTitle.charAt(0)}</span>
        {catTitle.slice(1)}
      </h1>

      {categoryData?.categries ? (
        <div>
          <CategorySlider
            catParams={catParams}
            subCategories={categoryData.categries}
          />

          <p className="text-black/70 w-2/3">{categoryData.desc}</p>

          <div className="text-blue-500">{catTitle} page</div>
        </div>
      ) : categoryProducts ? (
        <CardsSlider products={categoryProducts} favorites={false} />
      ) : (
        ""
      )}
    </section>
  );
};

export default Categories;
