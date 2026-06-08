import { ProductCard } from "@/types/types";
import TopSellerCard from "../products/TopSellerCard";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import ContainerProvider from "../Providers/ContainerProvider";
import { Suspense } from "react";
type NewCollectionProps = {
  items: ProductCard[];
};
const NewCollection = ({ items }: NewCollectionProps) => {
  return (
    <ContainerProvider>
      <section className="flex gap-6 w-full">
        <SidebarProvider className="lg:w-1/4 lg:flex p-2 w-0 hidden ">
          <AppSidebar />
        </SidebarProvider>

        <Suspense
          fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
              <div className="h-14 w-14 animate-spin rounded-full border-2 border-white border-t-transparent" />                    
            </div>
          }
        >
          <div className="w-3/4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {items.map((card) => (
              <TopSellerCard
                key={card.id}
                productId={card.id}
                images={[card.images[0], card.images[1]]}
                title={card.title}
                subtitle={card.subtitle}
                price={card.price}
                pack={card.pack}
                packCount={card.packCount}
                unitPrice={card.unitPrice}
                ratingCount={card.ratingCount}
                store={card.store}
                priceLowered={card.priceLowered}
                lastChance={card.lastChance}
                previousPrice={card.previousPrice}
                moreOptions={card.moreOptions}
                topSeller={card.topSeller}
                productsData={items}
                favorites={false}
              />
            ))}
          </div>
        </Suspense>
      </section>
    </ContainerProvider>
  );
};

export default NewCollection;
