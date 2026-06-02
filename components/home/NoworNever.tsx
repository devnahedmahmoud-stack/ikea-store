import Image from "next/image";
import Link from "next/link";

const NoworNever = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Now or never</h2>
      <p className="text-black/70 xl:max-w-full lg:max-w-xl max-w-full">
        Hurry up now and discover our "now or never" items .It's your last
        chance to buy these beloved IKEA products
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-4">
        <Link href="" className="col-span-2">
          <div className=" relative xl:h-[130vh] h-[110vh]  overflow-hidden">
            <Image
              src={"/home/bedroom.png"}
              alt="bedroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className=" object-fill"
            />
          </div>
        </Link>
        <div className="grid col-span-2 gap-4 grid-cols-2">
        <div className="grid gap-4">
            <Link href="">
              <div className=" relative xl:h-[59vh] h-[44vh]  overflow-hidden">
                <Image
                  src={"/home/lastchance.png"}
                  alt="lastchance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className=" object-fill"
                />
              </div>
            </Link>
            <Link href="">
              <div className=" relative xl:h-[68vh]  h-[55vh] overflow-hidden">
                <Image
                  src={"/home/textiles.png"}
                  alt="textiles"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className=" object-fill"
                />
              </div>
            </Link>
          </div>
          <div className="grid gap-4">
            <Link href="">
              <div className=" relative xl:h-[68vh] h-[55vh] overflow-hidden">
                <Image
                  src={"/home/livingroom.png"}
                  alt="livingroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className=" object-fill"
                />
              </div>
            </Link>
            <Link href="">
              <div className=" relative xl:h-[59vh] h-[44vh] overflow-hidden">
                <Image
                  src={"/home/decoration.png"}
                  alt="decoration"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className=" object-fill"
                />
              </div>
            </Link>
          </div>
          </div>
      </div>
    </section>
  );
};

export default NoworNever;
