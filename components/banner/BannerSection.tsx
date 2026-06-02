import Image from "next/image";

const BannerSection = () => {
  return (
    <div className="xl:max-w-lg lg:max-w-md  flex flex-col bg-amber-400 ">
      <div className="xl:h-100 h-90 w-full relative">
        <Image
          src={"/profileimage.png"}
          alt="profileimage"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="xl:max-w-lg lg:max-w-sm  p-6 flex-1 bg-[#6f5c52]">
        <h2 className="lg:text-2xl md:text-4xl text-2xl tracking-wide font-bold bg-conic-270 text-white mb-4 lg:max-w-md max-w-lg">
          Welcome home to your IKEA account
        </h2>
        <p className="text-base text-white/90">
          Here you can find and update information connected to your account.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
