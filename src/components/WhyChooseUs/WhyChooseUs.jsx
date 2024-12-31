/**
 * WhyChooseUs Component
 *
 * Displays key features/benefits with animated cards
 * Features:
 * - Responsive grid layout
 * - Animated card transitions
 * - Hover effects
 * - Icon highlighting
 * - Gradient backgrounds
 * - Staggered animations
 */

import React from "react";
import { motion } from "framer-motion";
import {
  SlideLeft,
  HoverScale,
  StaggerContainer,
} from "../../utility/animation";

const WhyChooseUs = () => {
  const WhyChooseData = [
    {
      icon: "🎓",
      title: "Expert Tutors",
      desc: "Learn from highly qualified and experienced educators",
      delay: 0.2,
      bgColor: "#4F46E5",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: "⏰",
      title: "Flexible Schedule",
      desc: "Study at your own pace with 24/7 access",
      delay: 0.4,
      bgColor: "#0EA5E9",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "💡",
      title: "Interactive Learning",
      desc: "Engage with dynamic and interactive content",
      delay: 0.6,
      bgColor: "#EC4899",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      icon: "🎯",
      title: "Personalized Path",
      desc: "Custom learning plans tailored to your goals",
      delay: 0.8,
      bgColor: "#10B981",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">E-Tutor</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the advantages that make us the preferred choice for online
            learning
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={StaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6"
        >
          {WhyChooseData.map((item, index) => (
            <motion.div
              key={index}
              variants={SlideLeft(item.delay)}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl
                transition-all duration-300 p-6"
            >
              {/* Icon Section */}
              <div className={`relative mb-6`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} 
                  opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity`}
                />
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="relative w-12 h-12 rounded-xl flex justify-center items-center
                    transform group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3
                className="font-bold text-xl mb-3 text-gray-800 
                group-hover:text-primary transition-colors"
              >
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
