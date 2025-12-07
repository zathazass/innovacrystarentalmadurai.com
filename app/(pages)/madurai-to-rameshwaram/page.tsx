"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets";
import { Check } from "lucide-react";


export default function PackageDetails() {
  return (
    <main className="w-full">
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={assets.RameshwaramBanner}
          alt="Madurai Tour Package"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center text-center px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-oswald)]"
          >
            RAMESHWARAM TOUR PACKAGE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center gap-2 mt-3 font-medium flex-wrap md:text-lg md:gap-4 w-full"
          >
            <span>Distance: 175 km</span>
            <span className="text-green-400">•</span>
            <span>Travel Time: Approx. 3.5 to 4 hours</span>
          </motion.div>
        </div>
      </section>

      <section className="w-full z-10 flex justify-center -mt-20 md:-mt-28 px-4 pb-20">
        <div className="z-1 bg-white w-full max-w-5xl p-6 md:p-10 shadow-xl">
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Are you planning an exciting journey from the vibrant cultural hub
              of Madurai to the revered shores of Rameshwaram? With Madurai
              Murugan Travels, your trip begins seamlessly with our reliable{" "}
              <strong>Madurai to Rameshwaram taxi service</strong>. Whether
              you're traveling solo, with family, or in a group, we ensure
              complete comfort and convenience with well-maintained vehicles and
              experienced drivers. Experience a divine journey filled with
              spirituality, scenic coastal beauty, and historic wonders — all
              guided by professional drivers who speak{" "}
              <strong>Tamil, English, and Hindi</strong> for smooth and friendly
              communication throughout your trip.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold font-poppins mb-3">
              Major Attractions En Route & in Rameshwaram
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1. <b>Pamban Bridge</b> – India’s first sea bridge with
              breathtaking views
              <br />
              2. <b>Ramanathaswamy Temple</b> – Famous Jyotirlinga & long
              corridors
              <br />
              3. <b>Agni Theertham</b> – Popular sea-based holy bath
              <br />
              4. <b>Dhanushkodi</b> – Ghost town at India’s land end
              <br />
              5. <b>APJ Abdul Kalam Memorial</b> – Honouring India’s Missile Man
              <br />
              6. <b>Ramar Patham</b> – Highest viewpoint in Rameshwaram
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              {" "}
              Best Time To Visit Rameshwaram
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                October to February – Pleasant & ideal for temple visits
              </p>

              <p className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                March to June – Hot but manageable for sightseeing
              </p>

              <p className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-1" />
                July to September – Light rains with peaceful temple darshan
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              Why Choose Us for Your Rameshwaram Trip ?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1. <b>Pamban Bridge</b> – India’s first sea bridge with
              breathtaking views
              <br />
              2. <b>Ramanathaswamy Temple</b> – Famous Jyotirlinga & long
              corridors
              <br />
              3. <b>Agni Theertham</b> – Popular sea-based holy bath
              <br />
              4. <b>Dhanushkodi</b> – Ghost town at India’s land end
              <br />
              5. <b>APJ Abdul Kalam Memorial</b> – Honouring India’s Missile Man
              <br />
              6. <b>Ramar Patham</b> – Highest viewpoint in Rameshwaram
            </p>
          </div>
        <div className="mb-6">
          {/* <h2 className="text-xl font-bold mb-3 font-[family-name:var(--font-oswald)] uppercase">
            Top Sightseeing Spots
            </h2>  */}
            
        </div>
        </div>
      </section>

      {/* <section className="w-full z-10 flex justify-center -mt-20 md:-mt-28 px-4 pb-20">
       <div className="mb-6">
        <h2 className="text-xl font-bold mb-3 font-[family-name:var(--font-oswald)] uppercase">Why Choose Us for Your Rameshwaram Trip ?</h2>
        </div>   
      </section> */}
    </main>
  );
}
