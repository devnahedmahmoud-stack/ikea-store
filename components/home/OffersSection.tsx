
import Image from "next/image";

const OffersSection = () => {
  return (
    <section className="h-[110vh] grid md:grid-cols-2 grid-cols-1">
      <div className="w-full h-full relative ">
        <Image
          src={"/imageoffers.png"}
          alt="imageoffers"
          fill
          sizes="50vw,100vw,(max-width:768px)"
          className="object-cover"
        />
      </div>
      <div >
        
      </div>
    </section>
  );
};

export default OffersSection;
