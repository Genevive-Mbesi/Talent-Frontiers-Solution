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

      <div className="py-12 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
          <AnimatedText text="Our unique approach and commitment to excellence make us the preferred partner in bridging local talent with global opportunities." />
        </h1>
      </div>

      {/* Images Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Slide>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[wood, warehouse, waitress, electrician].map((img, index) => (
              <div key={index} className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </Slide>
      </div>

      {/* Information Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <Slide>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { img: ethics, text: "We maintain transparency in all dealings with workers and employers." },
              { img: recruitment, text: "Our comprehensive process includes job postings, filtering, interviewing, documentation verification, background checks, and medical tests." },
              { img: balance, text: "We prioritize workers' rights and well-being and maintain open communication channels." },
              { img: auction, text: "We adhere to both Kenya and destination country legal and ethical standards." }
            ].map(({ img, text }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-all text-center h-auto"
              >
                <Image src={img} alt="Icon" width={60} height={60} className="mb-4" />
                <span className="text-lg text-gray-800">{text}</span>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
