import React from "react";
import Image from "next/image";
import cover from "@/app/components/Images/cover.jpg";
import Services from "@/app/Services/page";
import About from "@/app/About/page";
import AnimatedText from "@/components/Animation";
import Slide from "@/components/Slide";


export default function Home() {
  return (
    <div className="relative w-full">
      <div className="bg-red-900 z-10 py-12 text-center">
        <h1 className="text-2xl font-bold text-white px-6 md:px-20">
          <AnimatedText text="WE ARE TALENT FRONTIERS SOLUTIONS, A KENYAN-BASED EMPLOYMENT AGENCY DEDICATED TO CONNECTING PROFESSIONAL LOCAL TALENT WITH GLOBAL OPPORTUNITIES." />
        </h1>
      </div>
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src={cover}
          alt="Cover image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      <Slide>
        <Services />
      </Slide>

      <Slide>
        <About />
      </Slide>

    </div>
  );
}
