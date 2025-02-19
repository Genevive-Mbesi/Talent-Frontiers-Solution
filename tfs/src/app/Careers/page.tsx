import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedText from "@/components/Animation"
import Slide from "@/components/Slide"


const jobs = [
  {
    title: "Electrician",
    description:
      "Seeking a skilled electrician with expertise in electrical installations, repairs, and maintenance for commercial and residential projects.",
    location: "Dubai, UAE",
    type: "Full-time",
    age: "22-45 years",
    experience: "Minimum 3 years",
    relocation: "Required",
    pay: "$1,500 - $2,500 per month",
    deadline: "March 15, 2025",
  },
  {
    title: "Mechanic",
    description:
      "Looking for an experienced auto mechanic skilled in diagnosing and repairing various vehicle issues, including engine and transmission work.",
    location: "Doha, Qatar",
    type: "Full-time",
    age: "21-50 years",
    experience: "Minimum 4 years",
    relocation: "Required",
    pay: "$1,800 - $2,800 per month",
    deadline: "April 5, 2025",
  },
  {
    title: "Warehouse Worker",
    description:
      "Hiring warehouse workers for packaging, inventory management, and shipping operations in a fast-paced logistics environment.",
    location: "Ontario, Canada",
    type: "Contract",
    age: "20-45 years",
    experience: "Minimum 1 year",
    relocation: "Assistance Provided",
    pay: "$16 - $22 per hour",
    deadline: "March 20, 2025",
  },
  {
    title: "Welder",
    description:
      "We need certified welders with experience in MIG and TIG welding techniques for construction and manufacturing projects.",
    location: "Sydney, Australia",
    type: "Full-time",
    age: "23-50 years",
    experience: "Minimum 5 years",
    relocation: "Required",
    pay: "$3,000 - $4,500 per month",
    deadline: "April 10, 2025",
  },
  {
    title: "Domestic Worker",
    description:
      "Seeking domestic workers for housekeeping, cooking, and child care in private residences.",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    age: "25-45 years",
    experience: "Minimum 2 years",
    relocation: "Required",
    pay: "$600 - $1,200 per month",
    deadline: "March 30, 2025",
  },
];

export default function Careers() {
  return (
    <>
      <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white text-center">
         <AnimatedText text='CAREER OPPORTUNITIES'/>
        </h1>
      </div>
      <Slide>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-gray-800">
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Job Type:</strong> {job.type}</p>
              <p><strong>Age Requirement:</strong> {job.age}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
              <p><strong>Relocation:</strong> {job.relocation}</p>
              <p><strong>Pay:</strong> {job.pay}</p>
              <p><strong>Application Deadline:</strong> {job.deadline}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </Slide> 
    </>
  );
}
