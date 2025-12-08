"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { assets } from "@/assets";
import Image from "next/image";

import {
  Award,
  Users,
  Star,
  Heart,
  Shield,
  ShieldCheck,
  Clock,
  MapPin,
  Trophy,
  Route,
  CheckCircle2,
} from "lucide-react";
import { Info } from "@/lib/constants/information";

export default function About() {
  const { AboutBanner } = assets;
  // Data for the component
  const stats = [
    {
      number: "3000+",
      label: "Successful Trips",
      icon: <Route className="w-6 h-6 text-blue-600" />,
    },
    {
      number: "500+",
      label: "Delighted Customers",
      icon: <Users className="w-6 h-6 text-blue-600" />,
    },
    {
      number: "5★",
      label: "Google Rating",
      icon: <Star className="w-6 h-6 text-blue-600" />,
    },
    {
      number: "100%",
      label: "Professional",
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
  ];

  const features = [
    {
      title: "3000+ Successful Trips Completed",
      description:
        "Years of expertise in crafting memorable journeys across South India with perfect execution",
    },
    {
      title: "500+ Delighted Customers",
      description:
        "Join our family of delighted travelers who experienced the best of South Indian hospitality",
    },
    {
      title: "5★ Rated on Google Reviews",
      description:
        "Consistently top-rated on Google with excellent reviews for our professional service",
    },
    {
      title: "Clean Vehicles & Professional Drivers",
      description:
        "Well-maintained, clean vehicles with experienced and professional chauffeurs",
    },
    {
      title: "Customized South India Tour Packages",
      description:
        "Tailored itineraries designed to match your preferences, budget, and travel style",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-poppins font-bold text-3xl md:text-4xl mb-6 leading-tight"
                data-testid="section-title-story"
              >
                Welcome to Madurai Murugan Tours and Travels
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Madurai Murugan Travels</strong> is your trusted
                  partner for comfortable and affordable travel across{" "}
                  <strong>South India</strong>. With over{" "}
                  <strong>five years of experience</strong>, we specialize in
                  reliable <strong>Innova Crysta rentals</strong>, premium cab
                  service, and one-way taxi service in Madurai.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We ensure safe, smooth, and professional rides for tourists,
                  families, business travelers, and pilgrims. Whether you're
                  looking for the <strong>best cab service in Madurai</strong>{" "}
                  or a quick <strong>call taxi</strong>, our fleet is available{" "}
                  <strong>24/7</strong>
                  with trained and courteous drivers.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  <strong>Founded in 2010</strong>, our journey started as a
                  small family business with just two vehicles. Today, we are
                  one of Tamil Nadu’s most trusted travel companions, serving
                  over <strong>3000+ travelers </strong>
                  from India and around the world.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Our mission remains the same: delivering honest pricing,
                  personalized service, and memorable travel experiences. Every
                  trip is more than a ride — it's a journey filled with comfort,
                  trust, and care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={AboutBanner}
                alt="Madurai Murugan Tours and Travels - Premium Cab and Taxi Services in Madurai"
                className="shadow-xl w-full h-auto object-cover md:mt-6"
                width={600}
                height={400}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="font-poppins font-medium text-sm">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Experience The <span className="text-blue-600">Difference</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience and thousands of successful trips, we are
              proud to be Madurai's most trusted travel partner
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Features List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                  Verified & Trusted
                </h4>
                <p className="text-gray-600 text-sm">
                  Government approved travel agency
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 text-sm">
                  Round the clock customer service
                </p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                  50+ Destinations
                </h4>
                <p className="text-gray-600 text-sm">Across South India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-orange-500 rounded-3xl p-10 md:p-14 text-white shadow-xl overflow-hidden relative"
            >
              {/* Glow Accent */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl opacity-10 rounded-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
                  Ready To Experience premium travels ?
                </h3>

                <p className="text-md md:text-lg mb-8 opacity-95 max-w-2xl mx-auto">
                  Book your comfortable{" "}
                  <span className="font-semibold">Innova Crysta</span>
                  or choose from our premium fleet for a safe and luxurious
                  journey.
                </p>

                <motion.a
                  href={`https://wa.me/${
                    Info.contact?.whatsapp
                  }?text=${encodeURIComponent(
                    `Hello! I want to book the ride`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-sm bg-white text-primary font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all cursor-pointer"
                >
                  Book Your Ride Now
                </motion.a>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
