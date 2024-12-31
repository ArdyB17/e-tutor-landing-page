/**
 * ResponsiveMenu Component
 *
 * A mobile-friendly navigation menu that slides in from the left
 * Features:
 * - Animated transitions
 * - Nested menu items with dropdowns
 * - Backdrop blur effect
 * - Authentication buttons
 * - Accessibility support
 *
 * @param {boolean} isOpen - Controls menu visibility
 * @param {function} setIsOpen - Function to toggle menu state
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdComputer, MdExpandMore } from "react-icons/md";
import { NavbarMenu, authButtons } from "../../mockData/data.js";

/**
 * MenuItem Component
 * Renders individual menu items with optional dropdown functionality
 *
 * @param {Object} item - Menu item data containing title, link, and optional children
 */
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div
        className="flex items-center justify-between py-3 px-4 cursor-pointer
          hover:bg-gray-50 rounded-lg transition-colors duration-200"
        onClick={() => item.children && setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <a
          href={item.link}
          className="text-gray-700 hover:text-secondary transition-colors duration-200"
        >
          {item.title}
        </a>
        {item.children && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <MdExpandMore className="text-xl text-gray-500" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 pl-4 border-l-2 border-gray-100 space-y-2"
          >
            {item.children.map((child) => (
              <motion.a
                key={child.id}
                href={child.link}
                whileHover={{ x: 4 }}
                className="block py-2 text-gray-600 hover:text-secondary 
                  transition-all duration-200"
              >
                {child.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/**
 * ResponsiveMenu Component
 * Main mobile menu container with backdrop and sliding animation
 */
const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
            role="presentation"
          />

          {/* Menu Container */}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 w-[280px] h-screen bg-white z-50 
              overflow-y-auto shadow-xl"
          >
            {/* Header */}
            <div
              className="sticky top-0 bg-white z-10 px-6 py-4 border-b 
              border-gray-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <MdComputer className="text-2xl text-secondary" />
                <span className="text-xl font-bold">E-Tutor</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="py-4 space-y-2">
              {NavbarMenu.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 space-y-3">
              <button
                className="w-full bg-secondary text-white rounded-full py-2.5 
                hover:bg-secondary/90 active:scale-[0.98] transition-all duration-200 
                font-medium text-sm"
              >
                {authButtons.register.title}
              </button>
              <button
                className="w-full border border-gray-200 rounded-full py-2.5 
                hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 
                font-medium text-sm"
              >
                {authButtons.signIn.title}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
