
import Image from "next/image";

const OffersSection = () => {
  return (
    <section className="h-screen grid grid-cols-2 bg-amber-500">
      <div className="w-full h-full relative ">
        <Image
          src={"/imageoffers.png"}
          alt="https://www.ikea.com/images/s-853c7830b03d19fe667b5a4acc4812ef.jpg"
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
