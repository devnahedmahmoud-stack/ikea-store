import ContainerProvider from "@/components/Providers/ContainerProvider";
import { IKEAStores } from "@/data/data";
import { IKEAStore } from "@/types/types";
import NotFoundStore from "./not-found";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

type StorePageProps = {
  params: {
    storename: string;
  };
};
function getStoreDetails(storeName: string) {
  const storeDetails: IKEAStore | undefined = IKEAStores.find(
    (store) => store.href === storeName,
  );
  return storeDetails;
}
const StorePage = async ({ params }: StorePageProps) => {
  const { storename } = await params;
  console.log("store", storename);

  const storeDetails = getStoreDetails(storename);
  if (!storeDetails) return <NotFoundStore />;
  return (
    <ContainerProvider>
      <section>
        <div className="flex items-center my-10">
          <Link
            href={"/stores"}
            className="text-sm font-medium text-black/60 hover:text-black/80 hover:underline"
          >
            Stores
          </Link>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            strokeWidth={1}
            className="size-4.5"
          />
          <span className="capitalize text-sm font-medium text-black/60">
            {storeDetails.name}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{storeDetails.name}</h1>
          <div className="my-10 grid md:grid-cols-2 grid-cols-1 gap-6">
            <div
              className={cn(
                "relative w-full overflow-hidden",
                storeDetails.id === 4
                  ? "aspect-6/4"
                  : storeDetails.id === 1
                    ? "aspect-12/4 "
                    : "aspect-6/3",
              )}
            >
              <Image
                src={storeDetails.mainImage || ""}
                alt={storeDetails.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-10">
              <p className="text-lg font-bold"> {storeDetails.title}</p>
              <p className="text-black/80 text-[15px] whitespace-pre-line">
                {storeDetails.desc2}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-black/70 text-sm">
            <p className="font-bold ">
              Address:<span className="font-normal text-black/65"> {storeDetails.address}</span>              
            </p>
            <p className="font-bold ">
              Hotline:<span className="font-normal text-black/65"> {storeDetails.hotline}</span>              
            </p>
            <p className="font-bold ">
              Open Hours:<span className="font-normal text-black/65"> {storeDetails.openingHours}</span>              
            </p>
          </div>
        </div>
      </section>
    </ContainerProvider>
  );
};

export default StorePage;
