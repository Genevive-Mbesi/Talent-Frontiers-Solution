import React from "react";
import Image from "next/image";
import cover from "@/app/components/Images/cover.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Red background section */}
      <div className="bg-red-900 py-12">
        <h1 className="text-2xl font-bold text-white animate-wave text-center">
          WE ARE TALENT FRONTIERS SOLUTIONS, A KENYAN-BASED EMPLOYMENT AGENCY DEDICATED TO CONNECTING PROFESSIONAL LOCAL TALENT WITH GLOBAL OPPORTUNITIES.
        </h1>
      </div>

      {/* Cover image below the red background */}
      <div className="relative min-h-screen">
        <Image
          src={cover}
          alt="Cover image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="z-[-1]"
        />
      </div>
      
    </div>
  );
}
