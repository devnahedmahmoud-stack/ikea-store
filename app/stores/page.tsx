import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Separator } from "@/components/ui/separator";
import { IKEAStores } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const StoresPage = () => {
  return (
    <ContainerProvider>
      <section>
        <div>
          <h1 className="text-4xl font-bold mb-10">
            Choose your nearest IKEA store
          </h1>
          <div className="flex flex-wrap gap-4">
            {IKEAStores.map((store, index) => (
              <div key={store.id} className="flex gap-4">
                <Link
                  href={`#${store.id}`}
                  className="text-black/65 underline text-[15px]"
                >
                  {store.name}
                </Link>
                {index < IKEAStores.length - 1 && (
                  <Separator orientation="vertical" className="" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-10">
          {IKEAStores.map((store) => (
            <div
              key={store.id}
              id={store.id.toString()}
              className=""
            >              
                <div className="">
                  <Link href={`/stores/${store.href}`} className="block">
                  <div>
                    <Image
                      src={store.image || ""}
                      alt={store.name}
                      width={800}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  </Link>
                  <p className="text-black/70 mt-2">{store.desc}</p>
                </div>
              
            </div>
          ))}
        </div>
      </section>
    </ContainerProvider>
  );
};

export default StoresPage;
