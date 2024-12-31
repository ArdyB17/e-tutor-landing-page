import React from "react";
import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SlideRight,
  floatingAnimation,
  buttonHover,
} from "../../utility/animation";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      <div className="container min-h-[650px] grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Left Content */}
        <div className="flex justify-center flex-col py-10 md:py-20 md:pr-8 xl:pr-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center md:text-left space-y-6"
          >
            <motion.div
              variants={SlideRight(0.4)}
              className="inline-block px-4 py-1.5 bg-orange-100 rounded-full"
            >
              <p className="text-orange-600 uppercase text-sm font-semibold tracking-wide">
                100% Satisfaction Guarantee
              </p>
            </motion.div>

            <motion.h1
              variants={SlideRight(0.6)}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Find your perfect{" "}
              <span className="text-primary relative inline-block">
                Tutor
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={SlideRight(0.8)}
              className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0"
            >
              Transform your learning journey with personalized guidance from
              expert tutors. Join thousands of successful students who achieved
              their goals with E-Tutor.
            </motion.p>

            <motion.div
              variants={SlideRight(1.0)}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center !mt-8"
            >
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 
                text-white font-medium rounded-full text-sm
                hover:shadow-lg hover:shadow-secondary/20
                transition-all duration-200 transform"
              >
                Get Started Now
              </motion.button>

              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2.5 font-medium text-sm text-gray-700 group"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 flex items-center justify-center bg-secondary/10 rounded-full
                  group-hover:bg-secondary/20 transition-all duration-200"
                >
                  <FaPlay className="text-secondary text-xs ml-0.5" />
                </motion.span>
                See How it Works
              </motion.button>
            </motion.div>

            <motion.div
              variants={SlideRight(1.2)}
              className="hidden sm:flex items-center gap-4 text-sm text-gray-500 !mt-10"
            >
              {/* Trust Indicators with stagger effect */}
              {["Verified Tutors", "Money Back Guarantee"].map(
                (text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {text}
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center relative">
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-primary/10 rounded-full blur-3xl -z-10"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            src={HeroImg}
            alt="E-Tutor Hero Image"
            className="w-[300px] md:w-[450px] xl:w-[600px] relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
