import Image from "next/image";
import Link from "next/link";

const HomeMatch = () => {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-bold">Home for every match moment</h2>
      <p className="text-black/70 xl:max-w-3xl lg:max-w-xl max-w-full">
        Refresh your home before kick-off. From chaise lounges to smart coffee
        tables and TV units with storage, discover multifunctional living room
        solutions made for busy homes and big match energy.
      </p>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <Link href={""} className="relative min-h-175 w-full overflow-hidden rounded-sm hover:opacity-90 transition-opacity">
          <Image
            src={"/homematch/homematch1.png"}
            alt="homematch1"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover w-full"
            priority
          />
        </Link>
        <Link href={""} className="relative min-h-175 w-full overflow-hidden rounded-sm hover:opacity-90 transition-opacity">
          <Image
            src={"/homematch/homematch2.png"}
            alt="homematch2"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            className="object-cover w-full"
          />
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default HomeMatch;
