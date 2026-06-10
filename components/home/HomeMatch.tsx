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
      <div className="h-[110vh] grid md:grid-cols-2  gap-4">
        <Link href={""} className="relative h-175 ">
          <Image
            src={"/homematch/home-match-1.png"}
            alt="home-match-1"
            fill
            sizes="50vw,100vw,(max-width:768px)"
            className="object-fill"
          />
        </Link>
        <Link href={""} className="relative h-175">
          <Image
            src={"/homematch/home-match-2.png"}
            alt="home-match-2"
            fill
            sizes="50vw,100vw,(max-width:768px)"
            className="object-fill"
          />
        </Link>
      </div>
      <div></div>
    </section>
  );
};

export default HomeMatch;
