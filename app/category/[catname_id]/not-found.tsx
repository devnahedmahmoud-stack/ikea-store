import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="p-6 flex min-h-screen items-center justify-center gap-6 bg-gray-300 ">
      <p className=" text-lg text-center font-bold">Products Not Found</p>
      <Link
        href="/"
        className="rounded-full border flex items-center justify-center gap-4 py-2 px-6 hover:bg-black hover:text-white"
      >
        <HugeiconsIcon icon={ArrowLeft02Icon}></HugeiconsIcon> Home
      </Link>
    </div>
  );
};

export default NotFound;
