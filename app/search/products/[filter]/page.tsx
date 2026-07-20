import { cache } from "react";
import {
  AccessoriesProducts,
  FurnitureProducts,
  productCards,
} from "@/data/data";
import { ProductCard } from "@/types/types";
import FilterdProducts from "@/components/products/FilterdProducts";

type Props = {
  params: Promise<{ filter: string }>;
  searchParams: Promise<{ group?: string }>;
};

const getProducts = cache(async (filter: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  let filteredProducts: ProductCard[];
  filteredProducts = [];
  if (filter === "topseller") {
    filteredProducts = productCards.filter((product) => product.topSeller);

    filteredProducts.push(
      ...AccessoriesProducts.filter((product) => product.topSeller),
    );
    filteredProducts.push(
      ...FurnitureProducts.filter((product) => product.topSeller),
    );
  } else if (filter === "last-chance") {
    filteredProducts = productCards.filter((product) => product.lastChance);

    filteredProducts.push(
      ...AccessoriesProducts.filter((product) => product.lastChance),
    );
    filteredProducts.push(
      ...FurnitureProducts.filter((product) => product.lastChance),
    );
  } else if (filter === "under100") {
    filteredProducts = productCards.filter((product) => product.price< 100);

    filteredProducts.push(
      ...AccessoriesProducts.filter((product) => product.price < 100),
    );
    filteredProducts.push(
      ...FurnitureProducts.filter((product) => product.price < 100),
    );
  } else if (filter === "under300") {
    filteredProducts = productCards.filter((product) => product.price < 300);

    filteredProducts.push(
      ...AccessoriesProducts.filter((product) => product.price < 300),
    );
    filteredProducts.push(
      ...FurnitureProducts.filter((product) => product.price < 300),
    );
  } else if (filter === "under500") {
    filteredProducts = productCards.filter((product) => product.price < 500);

    filteredProducts.push(
      ...AccessoriesProducts.filter((product) => product.price < 500),
    );
    filteredProducts.push(
      ...FurnitureProducts.filter((product) => product.price < 500),
    );
  }

  return filteredProducts;
});

const SearchPage = async ({ params, searchParams }: Props) => {
  const { filter } = await params;
  const { group } = await searchParams;

  const filteredProducts = (await getProducts(filter)) || undefined;
  let maxPrice: number = 200;
  let isUnderPrice: boolean = false;

  if (!filteredProducts) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Products not found</h2>
      </div>
    );
  }

  if (filter === "under100") {
    maxPrice = 100;
    isUnderPrice = true;
  } else if (filter === "under300") {
    maxPrice = 300;
    isUnderPrice = true;
  } else if (filter === "under500") {
    maxPrice = 500;
    isUnderPrice = true;
  }

  return (
    <FilterdProducts
      products={filteredProducts}
      underPrice={maxPrice}
      isUnderPrice={isUnderPrice}
      title={group || ""}
    />
  );
};
export default SearchPage;
