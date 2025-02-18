import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedText from "@/components/Animation"

const services = [
  {
    title: "Global Job Placement",
    description:
      "We connect skilled professionals with global employers, ensuring they secure well-matched roles.",
    details:
      "By matching talent with the right opportunities, we help professionals advance their careers while enabling businesses to access top expertise.",
  },
  {
    title: "Interview Preparation",
    description:
      "We partner with recruiters to streamline hiring and provide tailored coaching for candidates.",
    details:
      "Beyond placements, we offer personalized coaching tailored to global hiring standards, boosting confidence and cultural awareness.",
  },
  {
    title: "Visa Application",
    description:
      "We process visa applications and work permits, simplifying the process of legally working abroad.",
    details:
      "Our comprehensive support ensures successful candidates navigate visa and work permit processes smoothly for a hassle-free transition.",
  },
  {
    title: "Relocation & Settlement Support",
    description:
      "From travel to accommodation, we help professionals settle into their new work environment overseas.",
    details:
      "We provide end-to-end relocation assistance, including flight bookings, visas, and housing arrangements, for a seamless transition.",
  },
];


const ServiceCard = ({ title, description, details }: { title: string; description: string; details: string }) => {
  return (
    <Card className="h-full flex flex-col bg-white shadow-xl rounded-2xl p-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-red-800">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-xl flex-grow">
        <p>{details}</p>
      </CardContent>
    </Card>
  );
};

function Projects() {
  return (
    <>
     
      <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white animate-wave text-center">
         <AnimatedText text=' WHAT WE OFFER'/>
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            details={service.details}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
