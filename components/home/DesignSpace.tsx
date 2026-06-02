import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
const DesignSpace = () => {
  return (
    
    <section className="flex xl:flex-row flex-col my-12">            
        
          
            <Link href="" className="xl:w-[65%] w-full relative h-[76vh]  overflow-hidden">
            <Image
              src={"/home/design-space.png"}
              alt="designspace"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className=" object-fill"
            />
            </Link>
        
        <div className="xl:w-[35%] w-full bg-[#DAD4CA] xl:p-12 p-10 space-y-6">
            <h3 className="lg:text-3xl text-xl font-bold mb-4  ">Design any space in your home</h3>
            <p className="">Design your dream home effortlessly—any space, any time, right at your fingertips</p>
            <Link href={""} className="bg-black text-white text-sm font-semibold rounded-full px-6 py-3 cursor-pointer hover:bg-black/75">Plan Now</Link>
          </div>
      
    </section>
  )
}

export default DesignSpace