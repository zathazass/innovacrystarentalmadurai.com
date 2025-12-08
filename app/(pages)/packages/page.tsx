"use client";

import { Info } from '@/lib/constants/information';
import { packagesData } from '@/lib/constants/package';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Car, Star, ArrowRight } from 'lucide-react';

const PopularPackages = () => {
  // Animation variants for left to right
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight: any = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft: any = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants:any = {
    initial: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants:any = {
    initial: { x: 0 },
    hover: { x: 5, transition: { duration: 0.2 } }
  };

  return (
    <section id="packages" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl uppercase md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-oswald)]"
          >
            Popular Tour Packages from Madurai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore South India's Most Loved Destinations with Comfort & Style
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {packagesData.packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:shadow-xl flex flex-col"
            >
              {/* Package Header */}
              <div className="bg-gradient-to-r from-primary to-blue-800 p-6 text-white">
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-oswald)] uppercase">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car size={16} />
                    <span>{pkg.vehicle.split('/')[0].trim()}</span>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Star size={16} className="text-yellow-500" />
                    Tour Highlights
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-blue-600 font-medium">
                        +{pkg.highlights.length - 3} more places
                      </li>
                    )}
                  </ul>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                  {pkg.description}
                </p>

                {/* Ideal For */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users size={16} className="text-blue-500" />
                    Ideal For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.idealFor.map((type, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div className="mt-auto">
                  <motion.a
                   href={`https://wa.me/${Info.contact?.whatsapp ?? ""}?text=${encodeURIComponent(
                   `Hello! I want to book the package: ${pkg.title}`
                    )}`}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                     target="_blank"
                    whileTap="tap"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Book This Package</span>
                    <motion.span variants={iconVariants}>
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Group Packages Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 mb-10"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center font-[family-name:var(--font-oswald)]">
              {packagesData.groupPackages.title}
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto font-[family-name:var(--font-inter)] leading-relaxed">
              {packagesData.groupPackages.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {packagesData.groupPackages.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-[family-name:var(--font-inter)] text-md">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
};

export default PopularPackages;