import Image from "next/image";
import React from "react";
import AnimatedText from "@/components/Animation";
import wood from "@/app/components/Images/welder.png";
import warehouse from "@/app/components/Images/cleaner.png";
import electrician from "@/app/components/Images/truck.png";
import waitress from "@/app/components/Images/warehouse.jpg";
import Slide from "@/components/Slide";
import recruitment from "@/app/components/Images/recruitment.png";
import balance from "@/app/components/Images/balance.png";
import auction from "@/app/components/Images/auction.png";
import ethics from "@/app/components/Images/business-ethics.png";

const About: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-red-900 py-12 text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          <AnimatedText text="WHY CHOOSE US" />
        </h1>
      </div>

      {/* Images Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Slide>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {[wood, warehouse, waitress, electrician].map((img, index) => (
              <div
                key={index}
                className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </Slide>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
  <Slide>
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
      {[
        { img: ethics, text: "We maintain transparency in all dealings with workers and employers." },
        { img: recruitment, text: "Our comprehensive process includes job postings, filtering, interviewing, documentation verification, background checks, and medical tests." },
        { img: balance, text: "We prioritize workers' rights and well-being and maintain open communication channels." },
        { img: auction, text: "We adhere to both Kenya and destination country legal and ethical standards." }
      ].map(({ img, text }, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all h-48">
          <Image src={img} alt="Icon" width={50} height={50} className="mb-4" />
          <span className="text-xl text-gray-800 text-center">{text}</span>
        </div>
      ))}
    </div>
  </Slide>
</div>

    </div>
  );
};

export default About;
