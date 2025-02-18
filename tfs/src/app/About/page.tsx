import Image from "next/image";
import React from "react";
import AnimatedText from "@/components/Animation"
import wood from "@/app/components/Images/wood.jpg";
import warehouse from "@/app/components/Images/warehouse.jpg";
import electrician from "@/app/components/Images/electrician.jpg";
import waitress from "@/app/components/Images/waitresses.jpg";

const About: React.FC = () => {
  return (
    <div>
    <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white animate-wave text-center">
        <AnimatedText text='WHY CHOOSE US'/>
        </h1>
      </div>

    <div className="max-w-7xl mx-auto px-2 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div className="relative w-full h-60">
          <Image
            src={wood}
            alt="Wood"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-full h-60">
          <Image
            src={warehouse}
            alt="Warehouse"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-full h-60">
          <Image
            src={waitress}
            alt="Waitress"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative w-full h-60">
          <Image
            src={electrician}
            alt="Electrician"
            fill
            className="rounded-lg object-cover"
          />
        </div>
       
      </div>

      {/* Right Column: About Us Text */}
      <div className="flex flex-col justify-center">
       
        <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="mb-6 text-xl">
          Our unique approach and commitment to excellence make us the preferred partner in bridging local talent with global opportunities.
        </p>
        <ul className="list-none space-y-4 
          [&>li::before]:content-['■'] [&>li::before]:text-red-700 [&>li::before]:mr-2 [&>li::before]:text-2xl">
          <li className="text-xl">
            We maintain transparency in all dealings with workers and employers.
          </li>
          <li className="text-xl">
            Our comprehensive process includes job postings, filtering, interviewing,
            documentation verification, background checks, and medical tests.
          </li>
          <li className="text-xl">
            We prioritize workers rights and well-being and maintain open communication
            channels.
          </li>
          <li className="text-xl">
            We adhere to both Kenya and destination country legal and ethical standards.
          </li>
        </ul>
      </div>
      </div>
    </div>
    </div>
  );
};

export default About;
