"use client"
import { Camera01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

const ButtonPhoto = () => {
    function openSearchbyPhoto()
    {
        console.log("photo")
    }
  return (
    <button  className="absolute right-4 top-1/2 -translate-y-1/2  cursor-pointer p-1 hover:border hover:bg-gray-200 hover:rounded-full " onClick={openSearchbyPhoto} >
      <HugeiconsIcon icon={Camera01Icon} className="size-4.5" strokeWidth={2.5}/>
    </button>
  );
};

export default ButtonPhoto;
