/* global __IMAGE_BASE_PATH__ */
import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-8 overflow-hidden min-h-[600px] mt-20"
      style={{
        background: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))",
      }}
      id="about"
    >
      {/* Parallax background */}
      <motion.div
        style={{
          y: yBg,
          backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80')",
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <h2 className="text-5xl lg:text-6xl font-light text-gray-800 mb-4">About</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-gray-500 text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">SURYA CEMENT: REINFORCING THE FUTURE WITH TRUST</span>
              </p>

              <p className="text-gray-500 text-lg leading-relaxed">
                <span class="font-bold">Founded in 2008</span>, Surya Cement Ltd. (a proud Maithan Group company) operates a fully integrated cement manufacturing facility in Sonapur, Assam. This strategic location enables us to cater to the diverse construction needs of Northeast India and beyond with unmatched speed and reliability.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                •	Under our trusted brand names <span class="font-bold">Surya Gold Cement</span> and <span class="font-bold">Surya Concretec</span> we produce BIS-standard
                <span class="font-bold"> PPC, OPC,</span> and premium-grade <span class="font-bold">Concrete Cement</span>. These products are engineered for superior performance and consistency across all weather and structural requirements.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                •	Backed by stringent quality management systems, including  <span class="font-bold">ISO 9001:2008</span> and <span class="font-bold">ISO 14001:2004</span> we take immense pride in delivering products that ensure <span class="font-bold">quality, consistency,</span> and <span class="font-bold">sustainability</span> in every bag.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                •	Our promise is simple: to offer  <span class="font-bold">fresh, high-performance cement </span> and <span class="font-bold">timely service</span>, reinforcing every project we touch and ensuring the lasting strength you can trust.
              </p>
            </motion.div>

            <motion.div
              className="pt-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => navigate("/pages/maintenance")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Legacy
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <div className="relative">
              {/* <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl transform rotate-2 scale-105"
                animate={{ rotate: [2, -1, 2] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              /> */}

              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${__IMAGE_BASE_PATH__}/etienne-girardet-h2cgYCzedS0-unsplash.jpg`}
                  alt="Industrial Cement Manufacturing Plant"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </motion.div>
            </div>
            <motion.p
              className="text-center mt-4 text-gray-600 italic"
              variants={itemVariants}
            >
              {/* Our Integrated Manufacturing Unit, Sonapur, Assam */}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;