import React from "react";
import { motion } from "framer-motion";

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary/95 backdrop-blur-sm border-b border-primary/20 shadow-sm"
      >
        <div className="container mx-auto text-sm text-center font-semibold py-3 px-4 hidden lg:block relative">
          <span className="text-gray-700 tracking-wide">
            Are you a university or school student for an online tutoring
            partnership?
          </span>
          <a
            href="#"
            className="text-secondary hover:text-secondary/90 ml-2.5 font-bold 
            transition-all duration-300 hover:underline underline-offset-4 decoration-2"
          >
            Talk to us
          </a>
          <button
            className="absolute top-1/2 right-10 -translate-y-1/2 w-7 h-7 
            flex items-center justify-center rounded-full 
            hover:bg-gray-200/80 active:bg-gray-300/80 
            transition-all duration-200"
            onClick={() => setIsOpen(false)}
            aria-label="Close banner"
          >
            <svg
              className="w-3.5 h-3.5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
