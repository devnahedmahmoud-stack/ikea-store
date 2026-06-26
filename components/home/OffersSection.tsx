
import Image from "next/image";

const OffersSection = () => {
  return (
    <section className="h-[110vh]">
      <div className="w-full h-full relative ">
        <Image
          src={"/imageoffers.png"}
          alt="imageoffers"
          fill
          sizes="50vw,100vw,(max-width:768px)"
          className="md:object-contain object-cover"
        />
      </div>
    </section>
  );
};

export default OffersSection;