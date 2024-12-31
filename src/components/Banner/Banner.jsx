/**
 * Banner Component
 * 
 * A versatile banner section with image and text content
 * Features:
 * - Responsive layout with reverse option
 * - Animated content reveal
 * - Gradient effects
 * - Custom tag styling
 * - Optimized image loading
 * - Interactive button effects
 * 
 * @param {string} image - URL of banner image
 * @param {string} title - Banner title text
 * @param {string} subtitle - Banner subtitle/description
 * @param {string} link - CTA button link
 * @param {string} tag - Category/type tag
 * @param {boolean} reverse - Toggle content order
 */

import React from "react";
import { motion } from "framer-motion";
import { SlideUp, buttonHover } from "../../utility/animation";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className={`flex justify-center md:justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 
                rounded-2xl blur-2xl opacity-50 -z-10" />
              <img
                src={image}
                alt={title}
                className="w-full max-w-[400px] h-auto object-cover rounded-xl 
                  shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left 
            space-y-6 max-w-xl mx-auto md:mx-0">
            <motion.div
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="inline-block px-4 py-1.5 bg-orange-100 rounded-full"
            >
              <p className="text-orange-600 uppercase text-sm font-semibold tracking-wide">
                {tag}
              </p>
            </motion.div>

            <motion.h2
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView="visible"
              className="text-gray-600 text-lg leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start pt-4"
            >
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3.5 bg-gradient-to-r from-secondary to-secondary/90 
                  text-white font-medium rounded-full text-lg
                  hover:shadow-lg hover:shadow-secondary/20 
                  active:scale-[0.98] transition-all duration-200"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;