"use client";

import { Info } from '@/lib/constants/information';
import { motion } from 'framer-motion';
import { Car, Shield, Users, MapPin, Star, ArrowRight, Phone, Trophy, CheckCircle } from 'lucide-react';

const HomePages = () => {
  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft: any = {
    hidden: { 
      opacity: 0, 
      x: -60 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Users,
      title: "7+1 Seater Luxury",
      description: "Spacious interiors with ample legroom"
    },
    {
      icon: Shield,
      title: "Premium Safety",
      description: "Airbags, ABS & experienced drivers"
    },
    {
      icon: Car,
      title: "2023-24 Models",
      description: "Latest Toyota Innova Crysta fleet"
    },
    {
      icon: Star,
      title: "Luxury Comfort",
      description: "AC, reclining seats & smooth ride"
    }
  ];

  const achievements = [
    "3000+ Successful Trips Completed",
    "500+ Happy & Delighted Customers",
    "5★ Rated on Google Reviews",
    "Clean Vehicles & Professional Drivers",
    "Customized South India Tour Packages"
  ];

  return (
    <section className="relative min-h-[calc(100vh-210px)] max-h-auto flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-orange-900">
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-orange-500/10 to-purple-600/20"
        />
        
        {/* Animated background shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-3xl opacity-10"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-10"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_70%,transparent_110%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div 
            variants={fadeInLeft}
            className="text-white order-2 lg:order-1"
          >
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-lg border border-white/20 mb-6 lg:mb-8 shadow-2xl shadow-blue-500/20"
            >
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50" />
              <span className="text-sm font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-[family-name:var(--font-inter)]">
                Premium Taxi Service Since 2010
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="mb-6 lg:mb-8"
            >
              <h1 className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight font-[family-name:var(--font-oswald)]">
                {/* Decorative glow behind text */}
                <span className="absolute -inset-1 bg-gradient-to-r from-orange-400/30 via-yellow-300/20 to-blue-400/30 blur-3xl rounded-full opacity-40 animate-pulse" />

                <div className="relative">
                  {/* Line 1 – INNOVA */}
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-400 drop-shadow-[0_3px_10px_rgba(255,180,50,0.6)]"
                  >
                    INNOVA
                  </motion.span>

                  {/* Line 2 – CRYSTA */}
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-100 drop-shadow-[0_3px_10px_rgba(120,180,255,0.6)]"
                  >
                    CRYSTA
                  </motion.span>

                  {/* Line 3 – Rentals in Madurai */}
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 drop-shadow-[0_3px_10px_rgba(150,200,255,0.5)] mt-2 lg:mt-4"
                  >
                    Rentals in Madurai
                  </motion.span>
                </div>
              </h1>
              
              {/* SVG Decorative Element */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-4 lg:mt-6"
              >
                <svg width="200" height="20" viewBox="0 0 200 20" className="w-40 lg:w-48">
                  <motion.path
                    d="M10 10 L190 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            {/* Description Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 mb-6 lg:mb-8"
            >
              <p className="text-md md:text-lg font-light text-blue-100 leading-relaxed bg-white/5 backdrop-blur-sm p-4 lg:p-6 rounded-2xl border border-white/10 shadow-xl font-[family-name:var(--font-inter)]">
                <span className="font-semibold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent font-[family-name:var(--font-oswald)]">
                  Experience a smooth and premium travel journey
                </span> with our Toyota Innova Crysta — the perfect choice for family trips, corporate travel, and long-distance tours from Madurai.
              </p>

              <p className="text-base md:text-lg font-medium text-gray-200 leading-relaxed bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 lg:p-6 rounded-2xl border border-white/5 shadow-lg font-[family-name:var(--font-inter)]">
                The Innova Crysta combines <span className="text-orange-300 font-semibold font-[family-name:var(--font-oswald)]">style</span>, <span className="text-yellow-300 font-semibold font-[family-name:var(--font-oswald)]">comfort</span>, and <span className="text-cyan-300 font-semibold font-[family-name:var(--font-oswald)]">performance</span>, offering spacious interiors and a powerful engine that ensures a relaxed and safe ride even on long routes.
              </p>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
              variants={itemVariants}
              className="mb-6 lg:mb-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="text-yellow-400" size={24} />
                  <h3 className="text-xl font-bold text-yellow-300 font-[family-name:var(--font-oswald)]">
                    Why Choose Madurai Murugan Tours and Travels
                  </h3>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  With years of experience and thousands of successful trips, we are proud to be one of the most trusted travel service providers in South India.
                </p>
              </motion.div>

              {/* Achievements Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2"
                  >
                    <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                    <span className="text-white text-xs font-medium font-[family-name:var(--font-inter)]">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#packages"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 font-[family-name:var(--font-inter)]"
              >
                <span>View Packages</span>
                <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href={`tel:${Info.contact.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-gray-900 transition-all duration-300 font-[family-name:var(--font-inter)]"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Single Static Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 order-1 lg:order-2"
          >
            {/* Single Static Image */}
            <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden">
              {/* Placeholder for Innova Crysta Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-orange-900/80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Car className="w-20 h-20 mx-auto mb-4 text-orange-400" />
                  <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-oswald)]">Toyota Innova Crysta</h3>
                  <p className="text-blue-100 font-[family-name:var(--font-inter)]">Premium 7+1 Seater Luxury MPV</p>
                </div>
              </div>
              
              {/* Image Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Feature Badges Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute top-3 lg:top-4 left-3 lg:left-4 flex flex-wrap gap-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-2 lg:px-3 py-1 lg:py-2 rounded-lg lg:rounded-xl"
                >
                  <feature.icon size={14} className="inline mr-1 text-orange-300" />
                  <span className="text-white text-xs font-medium font-[family-name:var(--font-inter)]">{feature.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Badge on Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full shadow-lg"
            >
              <span className="text-xs lg:text-sm font-bold font-[family-name:var(--font-oswald)]">PREMIUM FLEET</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePages;