"use client";

import { useActiveOpenMenu } from "@/stores/activeopenmenu.store";
import CategorySlider from "./CategorySlider";
import { HomeSection, ProductCard } from "@/types/types";
import { useEffect, useState } from "react";
import CardsSlider from "../favorites/CardsSlider";
import { homeMainSections, NewCollectionsItems } from "@/data/data";

type CategoryParams = {
  catParams: string[];
};

const Categories = ({ catParams }: CategoryParams) => {
  const { mainMenu, catTitle } = useActiveOpenMenu();

  const [categoryData, setCategoryData] = useState<HomeSection | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<ProductCard[] | null>(null);

  useEffect(() => {
    const id = Number.parseInt(catParams[catParams.length - 1] ?? "", 10);

    if (Number.isNaN(id)) {
      setCategoryData(null);
      setCategoryProducts(null);
      return;
    }

    const selectedCategory =
      mainMenu.find((section) => section.id === id) ??
      homeMainSections.find((section) => section.id === id) ??
      null;

    if (selectedCategory) {
      setCategoryData(selectedCategory);

      const productsFromSubcategory =
        selectedCategory.categries?.find((category) => category.id === id)?.products ??
        [];

      setCategoryProducts(productsFromSubcategory.length ? productsFromSubcategory : null);
      return;
    }

    const collectionProducts =
      NewCollectionsItems.find((item) => item.id === id)?.products ?? null;

    setCategoryData(null);
    setCategoryProducts(collectionProducts);
  }, [catParams, mainMenu]);

  const resolvedTitle = categoryData?.title || catTitle || "Category";
  const hasSubCategories = Boolean(categoryData?.categries?.length);

  if (!categoryData && !categoryProducts) {
    return <p>No Category found</p>;
  }

  return (
    <section>
      <h1 className="text-4xl font-bold">
        <span className="capitalize">{resolvedTitle.charAt(0)}</span>
        {resolvedTitle.slice(1)}
      </h1>

      {hasSubCategories ? (
        <div>
          <CategorySlider
            catParams={catParams}
            subCategories={categoryData?.categries ?? []}
          />

          <p className="text-black/70 text-[15px] lg:max-w-xl w-full">{categoryData?.desc}</p>

          <h2 className="text-3xl font-bold my-6">{categoryData?.heading}</h2>
          <p className="text-black/70 text-[15px] lg:max-w-xl md:max-w-lg w-full">{categoryData?.brief}</p>
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
