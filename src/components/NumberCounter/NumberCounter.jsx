/**
 * NumberCounter Component
 *
 * Displays animated statistics with icons and counters
 * Features:
 * - Responsive grid layout
 * - Animated counters with scroll trigger
 * - Hover effects and transitions
 * - Gradient background with blur effects
 * - Floating icon animations
 */

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { MdPeople, MdSchool, MdAccessTime, MdPersonPin } from "react-icons/md";
import {
  StaggerContainer,
  floatingAnimation,
  ScaleIn,
} from "../../utility/animation";

/**
 * CounterItem Component
 * Renders individual statistic cards with animations
 *
 * @param {Function} Icon - React icon component
 * @param {number} end - Final number to count to
 * @param {string} suffix - Optional suffix after number
 * @param {string} separator - Number thousand separator
 * @param {string} title - Counter description
 */
const CounterItem = ({ icon: Icon, end, suffix, separator, title }) => {
  return (
    <motion.div
      variants={ScaleIn(0.2)}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 
        rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/15 
        border border-white/5 transition-all duration-300 group"
    >
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        className="mb-3"
      >
        <Icon
          className="text-3xl sm:text-4xl text-white/90 group-hover:scale-110 
          transition-transform duration-300"
        />
      </motion.div>

      <h3
        className="text-2xl sm:text-3xl font-bold mb-1.5 bg-gradient-to-r 
        from-white to-white/90 bg-clip-text text-transparent"
      >
        <CountUp
          end={end}
          duration={2.5}
          separator={separator}
          suffix={suffix}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
      </h3>

      <p
        className="text-white/80 font-medium text-center text-xs sm:text-sm 
        uppercase tracking-wider"
      >
        {title}
      </p>
    </motion.div>
  );
};

const NumberCounter = () => {
  const counterData = [
    {
      icon: MdPersonPin,
      end: 898,
      title: "Expert tutors",
    },
    {
      icon: MdAccessTime,
      end: 20000,
      suffix: "+",
      separator: ",",
      title: "Hours Content",
    },
    {
      icon: MdSchool,
      end: 298,
      title: "Subject and courses",
    },
    {
      icon: MdPeople,
      end: 72878,
      suffix: "+",
      separator: ",",
      title: "Active students",
    },
  ];

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        {/* Background patterns - Reduced size */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90" />
          {/* Smaller blur circles */}
          <div className="absolute top-0 left-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-1/4 w-24 h-24 sm:w-28 sm:h-28 bg-white/5 rounded-full blur-xl" />
          {/* Smaller pattern with reduced opacity */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.415L40.172 0H32z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px", // Smaller pattern size
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            variants={StaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 
          px-3 sm:px-4 py-6 sm:py-8"
          >
            {counterData.map((item, index) => (
              <CounterItem key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default NumberCounter;
