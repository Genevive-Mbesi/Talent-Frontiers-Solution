import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Projects() {
  return (
    <>
      {/* Section Header */}
      <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white animate-wave text-center">
          WHAT WE OFFER
        </h1>
      </div>

      {/* Grid Layout for Uniform Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Global Job Placement */}
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Global Job Placement</CardTitle>
            <CardDescription>
              We connect skilled local professionals with international
              employers, ensuring they secure well-matched roles in various
              industries worldwide.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-800 text-xl flex-grow">
            <p>
              By carefully matching talent with the right opportunities, we help
              professionals advance their careers while enabling businesses to
              access high-quality expertise. Our mission is to create
              meaningful, mutually beneficial connections that drive global
              career growth and business success.
            </p>
          </CardContent>
        </Card>

        {/* Interview Preparation */}
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Interview Preparation</CardTitle>
            <CardDescription>
              We partner with global recruiters and employers to streamline the
              hiring process and provide tailored interview coaching to help
              candidates excel in international job interviews.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-800 text-xl flex-grow">
            <p>
              Beyond job placements, we provide personalized interview coaching
              tailored to global hiring standards, equipping candidates with the
              confidence, skills, and cultural awareness needed to excel in
              international job interviews.
            </p>
          </CardContent>
        </Card>

        {/* Visa Application */}
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Visa Application</CardTitle>
            <CardDescription>
              We process visa applications and work permits for successful
              candidates, simplifying the process of legally working abroad.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-800 text-xl flex-grow">
            <p>
              We provide comprehensive support to successful candidates by
              guiding them through visa applications and work permit processes,
              ensuring a smooth transition to legally working abroad.
            </p>
          </CardContent>
        </Card>

        {/* Relocation & Settlement Support */}
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Relocation & Settlement Support</CardTitle>
            <CardDescription>
              From travel arrangements to accommodation, we assist professionals
              in settling into their new work environment overseas.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-red-800 text-xl flex-grow">
            <p>
              We go beyond job placement by providing end-to-end support for
              professionals relocating abroad. From booking flights and securing
              visas to arranging accommodation, we ensure a smooth transition.
            </p>
          </CardContent>
        </Card>

      </div>
    </>
  );
}

export default Projects;
