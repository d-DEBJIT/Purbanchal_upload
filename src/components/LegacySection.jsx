/* global __IMAGE_BASE_PATH__ */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const LegacySection = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#f4f6f8] py-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div variants={textVariant(0.3)}>
          <motion.h2
            variants={fadeIn("up", 0.4)}
            className="text-lg md:text-xl text-orange-500 font-semibold mb-3"
          >
            ← Built on a Legacy of Strength →
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-700 max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed"
          >
            Purbanchal Cement fuels growth as part of the dynamic Maithan Group family, alongside Maithan Steels, Alloys, and Ceramics, delivering excellence that builds tomorrow.
          </motion.p>
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Logo 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn("right", 0.7)}
            className="bg-white px-10 py-6 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={`${__IMAGE_BASE_PATH__}/maithan-steel.png`}
              alt="Maithan Steel"
              className="h-20 mx-auto"
            />
          </motion.div>

          {/* Logo 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn("up", 0.8)}
            className="bg-white px-10 py-6 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={`${__IMAGE_BASE_PATH__}/maithan-alloys.jpg`}
              alt="Maithan Alloys"
              className="h-20 mx-auto"
            />
          </motion.div>

          {/* Logo 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeIn("left", 0.9)}
            className="bg-white px-10 py-6 rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={`${__IMAGE_BASE_PATH__}/maithan-ceramic.png`}
              alt="Maithan Ceramic"
              className="h-20 mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LegacySection;
