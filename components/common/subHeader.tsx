"use client";

import { assets } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants/navigation.data";
import { useNavigation } from "@/lib/context/navigationContext";
import Link from "next/link"; 

// --- SHADCN/RADIX UI IMPORTS ---
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Assuming Shadcn Sheet component
import { Button } from "@/components/ui/button"; // Assuming Shadcn Button component
import { Menu, X } from "lucide-react"; // Icons for the mobile menu
// --- END SHADCN/RADIX UI IMPORTS ---

const SubHeader = () => {
  const { Logo } = assets;
  // Use Sheet's open/close state logic instead of a local state for `isOpen`
  const [isSheetOpen, setIsSheetOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  
  const { navigateTo, isActive } = useNavigation();

  // PERFORMANCE: Optimized scroll listener using requestAnimationFrame (RAF)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 35);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsSheetOpen(false); // Close the mobile menu on click
    navigateTo(href); 
  }, [navigateTo]);


  // Memoize the Logo and Text block for minor rendering gains
  const LogoBlock = useMemo(() => (
    <motion.div
        className='flex items-center gap-3 cursor-pointer'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <Link href="/" onClick={() => setIsSheetOpen(false)} aria-label="Madurai Murugan Tours and Travels homepage">
          <Image
            src={Logo}
            alt='Madurai Murugan Travels logo - Innova Crysta Rentals'
            width={60}
            height={45}
            priority 
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className='leading-tight'>
          <Link href="/" onClick={() => setIsSheetOpen(false)}>
            <h6 className="text-md md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              MADURAI MURUGAN
            </h6>
            <p className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              TOURS AND TRAVELS
            </p>
          </Link>
        </div>
      </motion.div>
  ), [Logo]);


  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg backdrop-blur-[9px] bg-white/95" : "bg-white"
      }`}
      role="banner" 
    >
      <section className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>
        {LogoBlock}

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          aria-label='Main Site Navigation' 
          className="hidden lg:block"
        >
          <ul className='flex items-center gap-6 text-sm font-medium'>
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  {/* 1. SHADCN/A11Y: Use a custom button/a tag, or Shadcn Button for consistency */}
                  <Button
                    variant="ghost" // Use a minimal variant
                    asChild={link.href.startsWith('#') ? false : true} // If internal scroll, keep as button
                    onClick={() => handleNavClick(link.href)}
                    aria-current={active ? "page" : undefined}
                    aria-controls={link.href.replace('#', '')}
                    className={`relative h-auto py-2 px-3 font-semibold ${
                      active ? "text-orange-600 hover:bg-transparent" : "text-gray-700 hover:text-orange-500 hover:bg-transparent"
                    }`}
                  >
                    {link.name}

                    {/* Hover Underline (Keep Framer Motion) */}
                    <motion.span
                      className={`absolute bottom-0.5 left-0 w-full h-0.5 bg-orange-500 rounded-full ${
                        active ? "scale-100" : "scale-0"
                      }`}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Mobile Navigation (Shadcn Sheet) */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
                {/* 2. SHADCN/A11Y: Use a Button for the trigger, ensuring it is accessible */}
                <Button 
                    variant="ghost" 
                    className="lg:hidden p-2"
                    aria-label={isSheetOpen ? 'Close menu' : 'Open menu'} 
                >
                    {isSheetOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </SheetTrigger>
            
            {/* 3. SHADCN/PERFORMANCE: Sheet Content is off-screen until opened */}
            <SheetContent side="left" className="w-64 sm:w-80 p-0 pt-16">
                <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile Navigation Menu">
                    {navLinks.map((link, index) => {
                        const active = isActive(link.href);
                        return (
                            <Button
                                key={index}
                                variant="ghost"
                                onClick={() => handleNavClick(link.href)}
                                className={`w-full justify-start py-3 px-4 rounded-lg font-medium h-auto ${
                                    active
                                        ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                                        : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
                                }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {link.name}
                            </Button>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
      </section>
    </header>
  );
};

export default memo(SubHeader);


// =========================================================
// SKELETON LOADER COMPONENT (for implementation in PageLayout)
// =========================================================

export const SubHeaderSkeleton = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg">
            <section className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6 h-[72px]'>
                {/* Logo and Title Placeholder */}
                <div className='flex items-center gap-3'>
                    <div className="w-14 h-10 bg-gray-200 rounded animate-pulse"></div>
                    <div className='leading-tight space-y-1'>
                        <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>

                {/* Desktop Navigation Placeholder */}
                <div className='hidden lg:flex items-center gap-8'>
                    {Array(4).fill(0).map((_, i) => (
                        <div key={i} className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                </div>

                {/* Mobile Hamburger Placeholder */}
                <div className='lg:hidden w-8 h-8 bg-gray-200 rounded-full animate-pulse'></div>
            </section>
        </header>
    );
};