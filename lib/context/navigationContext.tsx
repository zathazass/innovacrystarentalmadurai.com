'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navLinks } from '../constants/navigation.data';

interface NavigationContextType {
  currentPage: string;
  previousPage: string;
  navigateTo: (path: string) => void;
  isActive: (path: string) => boolean;
  scrollToSection: (sectionId: string) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(pathname);
  const [previousPage, setPreviousPage] = useState('');
  const [currentSection, setCurrentSection] = useState('');
  const pathnameRef = useRef(pathname);
  const isScrollingRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle initial page load with hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash;
      setCurrentSection(hash);
      
      // Scroll to section after page load
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const offset = 74;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
      }, 500);
    }
  }, [pathname]);

  // Only update when pathname actually changes (navigation), not on scroll
  useEffect(() => {
    if (pathname !== pathnameRef.current) {
      setPreviousPage(pathnameRef.current);
      pathnameRef.current = pathname;
      setCurrentPage(pathname);
      setCurrentSection(''); // Reset section when page changes
    }
  }, [pathname]);

  // Single Intersection Observer for section detection
  useEffect(() => {
    if (currentPage !== '/') return;

    // Get all section IDs from navigation data
    const sectionIds = navLinks
      .filter(link => link.href.startsWith('#'))
      .map(link => link.href.replace('#', ''));


    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // Create new observer with better configuration
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            const newSection = `#${entry.target.id}`;
            setCurrentSection(newSection);
            
            // Update URL without triggering scroll
            if (window.location.hash !== newSection) {
              window.history.replaceState(null, '', newSection);
            }
          }
        });
      },
      { 
        threshold: [0.1, 0.3, 0.5], // Lower thresholds for better detection
        rootMargin: '-70px 0px -50% 0px' // Adjusted for better coverage
      }
    );

    // Observe all sections
    let observedCount = 0;
    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observerRef.current?.observe(element);
        observedCount++;
      } else {
        console.warn('❌ Section element not found:', sectionId);
      }
    });


    // Manual section detection after observer setup
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      manuallyDetectActiveSection();
    }, 1000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPage]);

  // Manual section detection function
  const manuallyDetectActiveSection = () => {
    if (currentPage !== '/') return;

    const sectionIds = navLinks
      .filter(link => link.href.startsWith('#'))
      .map(link => link.href.replace('#', ''));

    let activeSection = '';
    let maxVisibility = 0;

    sectionIds.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Calculate how much of the element is visible
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const visibilityRatio = visibleHeight / windowHeight;


        // If more than 30% visible and closest to top, consider it active
        if (visibilityRatio > 0.3 && visibilityRatio > maxVisibility) {
          maxVisibility = visibilityRatio;
          activeSection = sectionId;
        }
      }
    });

    // If we found an active section, update state
    if (activeSection && !isScrollingRef.current) {
      const newSection = `#${activeSection}`;
      if (currentSection !== newSection) {
        setCurrentSection(newSection);
        if (window.location.hash !== newSection) {
          window.history.replaceState(null, '', newSection);
        }
      }
    }
  };

  // Add scroll listener for manual detection
  useEffect(() => {
    if (currentPage !== '/') return;

    const handleScroll = () => {
      if (!isScrollingRef.current) {
        // Debounce manual detection
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(manuallyDetectActiveSection, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentPage, currentSection]);

  // Handle section scroll and active state
  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    
    if (pathname !== '/') {
      // If not on home page, navigate to home first then scroll to section
      router.push('/');
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    } else {
      // Already on home page, just scroll to section
      scrollToElement(targetId);
    }
  };

  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      isScrollingRef.current = true;
      const offset = 74;
      const elementPosition = element.offsetTop - offset;      
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Immediately set the section as active
      setCurrentSection(`#${targetId}`);
      
      // Update URL
      window.history.pushState(null, '', `#${targetId}`);
      
      // Reset scrolling flag after animation and trigger manual detection
      setTimeout(() => {
        isScrollingRef.current = false;
        manuallyDetectActiveSection(); // Force detection after scroll
      }, 1000);
    } else {
      console.error('❌ Element not found for scrolling:', targetId);
    }
  };

  const navigateTo = (path: string) => {    
    if (path.startsWith('#')) {
      scrollToSection(path);
    } else {
      // It's a page link
      if (path !== currentPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          router.push(path);
        }, 400);
      }
    }
  };

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      const isActive = currentPage === '/' && currentSection === path;
      return isActive;
    }
    return currentPage === path;
  };

  return (
    <NavigationContext.Provider value={{ 
      currentPage, 
      previousPage, 
      navigateTo, 
      isActive,
      scrollToSection,
      currentSection,
      setCurrentSection
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};