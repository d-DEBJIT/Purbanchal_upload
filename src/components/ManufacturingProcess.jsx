/* global __IMAGE_BASE_PATH__ */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    title: "Quarry",
    description: "Excavation of high-quality limestone and raw materials",
    image: `${__IMAGE_BASE_PATH__}/Quarry.png`,
  },
  {
    title: "Crusher",
    description: "Crushing and sizing for optimal material uniformity",
    image: `${__IMAGE_BASE_PATH__}/Crusher.png`,
  },
  {
    title: "Raw Mill",
    description: "Blending and grinding of raw components for perfect mix",
    image: `${__IMAGE_BASE_PATH__}/Rawmil to prehitting.png`,
  },
  {
    title: "Preheating & Rotary Kiln",
    description: "High-temperature processing for clinker formation",
    image: `${__IMAGE_BASE_PATH__}/Group 111.png`,
  },
  {
    title: "Clinker Storage & Finish Grinding",
    description: "Cooling, storing, and grinding into fine cement powder",
    image: `${__IMAGE_BASE_PATH__}/kilner storage to finish griding.png`,
  },
  {
    title: "Dispatch",
    description: "Packed and transported with care — ready for delivery",
    image: `${__IMAGE_BASE_PATH__}/Dispatch.png`,
  },
];

const ManufacturingProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const arrow = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2
            className="text-lg md:text-2xl text-orange-500 font-semibold mb-3"
            variants={item}
          >
            ← From Raw To Rock Solid →
          </motion.h2>
          <motion.p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto" variants={item}>
            Starting with premium raw materials and progressing through precise blending, processing,
            and testing, our manufacturing ensures every bag of cement delivers strength, durability,
            and trust.
          </motion.p>
        </motion.div>

        {/* Process Flow - Desktop */}
        <div className="hidden md:block">
          <motion.div
            className="flex justify-between items-start relative"
            initial="hidden"
            animate={controls}
            variants={container}
          >
            {/* Process Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-300 z-0"></div>

            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Process Step */}
                <motion.div
                  className="flex flex-col items-center w-40 relative z-10"
                  variants={item}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon with background */}
                  <div className="bg-white p-3 rounded-full shadow-md mb-4 border border-gray-100">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-gray-800 text-center mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 text-center leading-tight">
                    {step.description}
                  </p>
                  
                  {/* Connecting arrow (except last item) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="absolute top-20 right-[-60px]"
                      variants={arrow}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <svg
                        width="60"
                        height="16"
                        viewBox="0 0 60 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 8H58"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                        <path
                          d="M50 1L58 8L50 15"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Process Flow - Mobile */}
        <div className="md:hidden">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={controls}
            variants={container}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={item}
              >
                {/* Number badge */}
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-8 h-8 object-contain"
                    />
                    <h3 className="font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                  
                  {/* Arrow indicator (except last item) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="flex justify-center mt-2"
                      variants={arrow}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                        <path
                          d="M19 12L12 19L5 12"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;