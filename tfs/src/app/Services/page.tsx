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
    <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white animate-wave text-center">
          WHAT WE OFFER
        </h1>
      </div>
      <div className="min-h-screen p-16 flex ">
        <div className="sections-container max-w mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <Card>
            <CardHeader>
              <CardTitle>Global Job Placement</CardTitle>
              <CardDescription>
                We connect skilled local professionals with international employers, ensuring they secure well-matched roles in various industries worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-red-700 text-xl">
              <p>
                By carefully matching talent with the right opportunities, we help professionals advance their careers while enabling businesses to access high-quality expertise. Our mission is to create meaningful, mutually beneficial connections that drive global career growth and business success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Projects;
