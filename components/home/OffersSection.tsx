
import Image from "next/image";

const OffersSection = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 grid-cols-1">
      <div className="w-full aspect-5/6 relative ">
        <Image
          src={"/imageoffers.png"}
          alt="imageoffers"
          fill
          sizes="50vw,100vw,(max-width:768px)"
          className="object-cover"
        />
      </div>
      <div className="w-full aspect-5/6 relative">
        <Image
          src={"/imageoffers-1.jpg"}
          alt="imageoffers-1"
          fill
          sizes="50vw,100vw,(max-width:768px)"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default OffersSection;