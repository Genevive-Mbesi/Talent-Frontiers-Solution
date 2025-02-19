import React from "react";
import AnimatedText from "@/components/Animation";
import Slide from "@/components/Slide";

function Location() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-red-900 z-10 py-12">
        <h1 className="text-2xl font-bold text-white text-center">
          <AnimatedText text="OUR LOCATION" />
        </h1>
      </div>

      {/* Location Details */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <Slide>
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                <AnimatedText text="Visit Us" />
              </h2>
              <p className="text-gray-600 mt-2">
                Find us at our office and get in touch with our team. We are happy to assist you!
              </p>

              <div className="mt-4 text-gray-700">
                <p>
                  📍 <span className="font-semibold">Address:</span> 1st Floor, Magharibi Place, Mai Mahiu Rd, Nairobi
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4274.423664891402!2d36.81450407527869!3d-1.3137174856573393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1056e12460f3%3A0xc011f781892835d2!2sMagharibi%20Place%2C%20Mai%20Mahiu%20Rd%2C%20Nairobi%20City!5e1!3m2!1sen!2ske!4v1738846977604!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Location;
