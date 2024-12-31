/**
 * Footer Component
 *
 * Displays website footer with multiple sections and social links
 * Features:
 * - Responsive grid layout
 * - Animated sections
 * - Social media links
 * - Gradient effects
 * - Hover animations
 */

import React from "react";
import { motion } from "framer-motion";
import { MdComputer } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  StaggerContainer,
  SlideUp,
  buttonHover,
} from "../../utility/animation";

const Footer = () => {
  const socialLinks = [
    { icon: <HiLocationMarker />, href: "#", delay: 0.3 },
    { icon: <FaInstagram />, href: "#", delay: 0.4 },
    { icon: <FaFacebook />, href: "#", delay: 0.5 },
    { icon: <FaLinkedin />, href: "#", delay: 0.6 },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white rounded-t-3xl overflow-hidden">
      {/* Background Patterns */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/90" />
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <motion.div
        variants={StaggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Brand Section */}
          <motion.div variants={SlideUp(0.2)} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <MdComputer className="text-3xl text-secondary" />
              <h2 className="text-2xl font-bold">E-Tutor</h2>
            </motion.div>

            <p className="text-gray-600 leading-relaxed">
              Transform your learning journey with personalized guidance from
              expert tutors. Join thousands of successful students who achieved
              their goals with E-Tutor.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={SlideUp(link.delay)}
                  whileHover={{ y: -3, color: "#4F46E5" }}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center 
                    justify-center text-xl text-gray-600 hover:shadow-md 
                    transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={SlideUp(0.3)} className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Privacy Policy", "Contact Us"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 hover:text-secondary cursor-pointer 
                    transition-colors duration-200"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={SlideUp(0.4)} className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Tutorials", "FAQs", "Community"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-secondary cursor-pointer 
                    transition-colors duration-200"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={SlideUp(0.5)} className="space-y-6">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for updates and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg border border-gray-200 
                  focus:outline-none focus:border-secondary transition-colors"
              />
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-2.5 bg-secondary text-white rounded-lg 
                  hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={SlideUp(0.6)}
          className="py-6 border-t border-gray-200 text-center text-gray-600"
        >
          <p>© {new Date().getFullYear()} E-Tutor. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
