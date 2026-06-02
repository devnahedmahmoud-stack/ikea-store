import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CardsSlider from "../favorites/CardsSlider";
import { AccessoriesProducts, FurnitureProducts, productCards } from "@/data/data";

const CategoryTab = () => {
  return (
    <div className="w-full my-10">
      <Tabs defaultValue="recommended">
        <TabsList variant={"line"} className="border-b ">
          <TabsTrigger value="recommended"  className="font-bold">Recommended for you</TabsTrigger>
          <TabsTrigger value="accessories"  className="font-bold">Accessories</TabsTrigger>
          <TabsTrigger value="furniture"  className="font-bold">Furniture</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended">
          <CardsSlider products={productCards} />
        </TabsContent>
        <TabsContent value="accessories">
          <CardsSlider products={AccessoriesProducts} />
        </TabsContent>
        <TabsContent value="furniture">
          <CardsSlider products={FurnitureProducts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
