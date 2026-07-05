import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Separator } from "@/components/ui/separator";
import { RestaurantCtegories, RestaurantItems } from "@/data/data";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

const RestaurantPage = () => {
  return (
    <ContainerProvider className="flex flex-col gap-10">
      <div className="mb-4">
        <div className="flex items-center">
          <Link
            href={"/rooms"}
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
            Restaurant
          </span>
        </div>
      </div>
      <section>
        <h1 className="text-3xl font-bold">IKEA Restaurant</h1>
        <div className="grid md:grid-cols-2 gap-10 grid-cols-1 my-10">
          <div className="relative aspect-6/2  overflow-hidden ">
            <Image
              src="/ikeafood/ikea-food-1.jpg"
              alt="ikea-food-1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-6/2 overflow-hidden">
            <Image
              src="/ikeafood/ikea-food-2.jpg"
              alt="ikea-food-2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
        <Separator />
        {RestaurantCtegories.map((category) => (
          <div key={category.id} className="my-20">
            <h2 className="md:text-3xl text-xl font-semibold">{category.title}</h2>
            <p className="text-black/70 mt-2">{category.desc}</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 my-6">
              {RestaurantItems.filter(
                (item) => item.categoryId === category.id,
              ).map((item) => (
                <div key={item.id} className="grid grid-cols-1 gap-4">
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={item.image || ""}
                      alt={item.title || ""}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <Separator />
                  <div>
                  <h2 className=" font-bold text-[14px] text-black/70">
                    {item.title}
                  </h2>
                  
                    <p className="text-black/70">{item.desc}</p>
                    <p className="font-bold text-[14px] text-black/70">
                      EGP {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </ContainerProvider>
  );
};

export default RestaurantPage;
