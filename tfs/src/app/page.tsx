import React from "react";
import Image from "next/image";
import cover from "@/app/components/Images/cover.jpg"


export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={cover}
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="z-[-1]"
      />

      <div className="pl-12 pt-12">
        <h1 className="text-5xl font-bold text-white animate-wave">
          
        </h1>
      </div>
      <div className="relative z-10 flex  text-3xl flex-col pt-14 pl-12 min-h-screen">
      

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
         
        </div>
      </div>
    </div>
  );
}