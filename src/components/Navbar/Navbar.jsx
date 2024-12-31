/**
 * Main navigation component
 * Handles both desktop and mobile navigation
 */

import React, { useEffect, useState } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { navbarAnimation, buttonHoverScale } from "../../utility/animation";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        variants={navbarAnimation}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor }}
        className="sticky top-0 backdrop-blur-md z-50 border-b border-gray-200/80"
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
          {/* Logo */}
          <motion.div
            className="text-2xl flex items-center gap-2 font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NavbarMenu.map((item) => (
                <motion.li key={item.id} whileHover={{ y: -2 }}>
                  <a
                    href={item.link}
                    className="inline-block text-gray-600 hover:text-secondary relative py-2
                      after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                      after:bg-secondary after:transition-all hover:after:w-full"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.button
              variants={buttonHoverScale}
              whileHover="hover"
              whileTap="tap"
              className="font-medium hover:text-secondary transition-colors"
            >
              Sign in
            </motion.button>
            <motion.button
              variants={buttonHoverScale}
              whileHover="hover"
              whileTap="tap"
              className="bg-secondary text-white font-medium rounded-full px-6 py-2.5 
                hover:bg-secondary/90 transition-colors shadow-sm hover:shadow-md
                hover:shadow-secondary/20"
            >
              Register
            </motion.button>
          </div>

          {/* Mobile Menu Trigger */}
          <motion.button
            variants={buttonHoverScale}
            whileHover="hover"
            whileTap="tap"
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <MdMenu className="text-2xl" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
