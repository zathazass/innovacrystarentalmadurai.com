"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigUpDash, ArrowUp } from "lucide-react";
import { Info } from "@/lib/constants/information";

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false);
  const { contact } = Info;
  const whatsappMessage = "Hello! I'm interested in your travel services. Please provide more information.";
  
  // Show scroll-to-top only when user scrolls
  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button — RIGHT BOTTOM */}
      <motion.a
        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      >
        <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
<svg width="40" height="40" viewBox="0 0 1.6 1.6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M.8 1.549a.7.7 0 1 0-.609-.354L.1 1.55l.365-.085A.67.67 0 0 0 .8 1.55m0-.108a.592.592 0 1 0-.485-.253l-.053.199.203-.051a.6.6 0 0 0 .336.104" fill="#bfc8d0"/>
  <path d="M1.4.8a.6.6 0 0 1-.94.495l-.205.051.053-.201A.6.6 0 0 1 .2.8a.6.6 0 1 1 1.2 0" fill="url(#paint0_linear_87_7264)"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M.8 1.5a.7.7 0 1 0-.609-.355L.1 1.5l.365-.085A.67.67 0 0 0 .8 1.5m0-.108a.592.592 0 1 0-.485-.252l-.053.199.203-.051a.6.6 0 0 0 .336.104" fill="#fff"/>
  <path d="M.625.475C.609.441.583.444.557.444.511.444.44.499.44.601c0 .084.037.176.163.315.121.133.279.201.411.2S1.172 1 1.172.963c0-.018-.011-.026-.017-.028l-.147-.07C.989.857.98.868.973.873.956.889.923.937.911.948S.881.953.875.949A.5.5 0 0 1 .719.852C.648.784.644.76.631.739.62.721.628.712.632.707L.677.648C.687.635.68.615.675.601.655.547.639.5.625.473" fill="#fff"/>
</svg>
        </div>
      </motion.a>

      {/* Scroll to Top Button — LEFT BOTTOM */}
      <AnimatePresence>
        {visible && (
          <motion.button
            onClick={scrollTop}
            className="fixed cursor-pointer bottom-6 left-6 z-50 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowBigUpDash size={26} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
