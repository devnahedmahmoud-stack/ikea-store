import RoomsSlider from "@/components/category/RoomsSlider";
import ContainerProvider from "@/components/Providers/ContainerProvider";
import { Rooms } from "@/data/data";
import {
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";



type RoomPageProps = {
  params: {
    room: string;
  };
  id: number;
};
const RoomPage = async ({ params, id }: RoomPageProps) => {
  const { room } = await params;

  const roomData = Rooms.find((r) => r.href === room);
  console.log(roomData);
  if (!roomData) {
    return <div>Room not found</div>;
  }

  return (
    <ContainerProvider className="">
      <section>
      <div className="mb-14">
        <div className="flex items-center">
          <Link
            href={"/rooms"}
            className="text-sm font-medium text-black/60 hover:text-black/80 hover:underline"
          >
            Rooms
          </Link>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            strokeWidth={1}
            className="size-4.5"
          />
          <span className="capitalize text-sm font-medium text-black/60">
            {roomData.title}
          </span>
        </div>
      </div>
      <div>
        <h2 className="capitalize text-4xl font-bold">{roomData.title}</h2>

        {roomData.nestedLinks && (
          <RoomsSlider roomData={roomData} nestedLinks={true}/>
        )}
      </div>
      <div>
      <p className="text-3xl font-bold">Choose a living room that’s right for you</p>
      
        {roomData.gallery && (
          <RoomsSlider roomData={roomData} nestedLinks={false}/>
        )}
      </div>
      </section>
<div>

</div>
    </ContainerProvider>
  );
};

export default RoomPage;
