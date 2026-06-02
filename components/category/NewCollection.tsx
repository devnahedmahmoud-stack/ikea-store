import { ProductCard } from "@/types/types";
import TopSellerCard from "../products/TopSellerCard";
type NewCollectionProps = {
  items: ProductCard[];
};
const NewCollection = ({ items }: NewCollectionProps) => {
  return (
    <section className="flex gap-6">
      <div className="bg-amber-800 lg:w-96 ">ggggggggg</div>
      <div className="w-96 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {items.map((card) => (
          <div key={card.id} className=" px-2 pb-10">
            <TopSellerCard
              key={card.id}
              productId={card.id}
              images={[card.images[0], card.images[1]]}
              title={card.title}
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
            />
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default NewCollection;
