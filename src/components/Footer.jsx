/* global __IMAGE_BASE_PATH__ */
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-[#3366BB] text-white pt-12 font-sans"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          variants={fadeIn("up", 0.3)}
          className="grid md:grid-cols-4 gap-8 text-sm"
        >
          {/* Company Info */}
          <motion.div variants={fadeIn("right", 0.4)}>
            <div className="flex items-center mb-4">
              <img 
                src={`${__IMAGE_BASE_PATH__}/logo1.png`} 
                alt="Purbanchal Cement Logo" 
                className="h-10 brightness-125"
              />
              <span className="ml-2 font-bold text-lg">PURBANCHAL CEMENT LTD.</span>
            </div>
            <motion.p 
              variants={fadeIn("up", 0.5)}
              className="text-white/90 mb-6 leading-relaxed"
            >
              Delivering superior quality cement to power India's infrastructure growth trusted by builders, architects, and communities for decades.
            </motion.p>
            <motion.div 
              variants={fadeIn("up", 0.6)}
              className="flex space-x-3"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/suryacementofficial/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaLinkedinIn className="text-white text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/pclcorp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaInstagram className="text-white text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/SuryaCementOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebookF className="text-white text-sm" />
              </motion.a>
            </motion.div>
            <motion.p variants={fadeIn("up", 0.7)} className="mt-3 text-sm">
              Connect with Us
            </motion.p>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeIn("up", 0.5)}>
            <motion.h3 
              variants={textVariant(0.2)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Products
            </motion.h3>
            <motion.ul variants={fadeIn("up", 0.6)} className="space-y-2">
              {["Surya PPC", "Surya OPC", "Surya Concrete", "Fresh Bulk Cement"].map((item, idx) => (
                <motion.li key={item} variants={fadeIn("up", 0.7 + idx * 0.1)}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                  >
                    ‹ {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Businesses & Quick Links */}
          <motion.div variants={fadeIn("up", 0.6)}>
            <motion.h3 
              variants={textVariant(0.3)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Businesses
            </motion.h3>
            <motion.ul variants={fadeIn("up", 0.7)} className="space-y-2 mb-6">
              {["Maithan Steels", "Maithan Alloys", "Maithan Ceramic"].map((item, idx) => (
                <motion.li key={item} variants={fadeIn("up", 0.8 + idx * 0.1)}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                  >
                    ‹ {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.h3 
              variants={textVariant(0.4)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Quick Links
            </motion.h3>
            <motion.ul variants={fadeIn("up", 0.8)} className="space-y-2">
              {[
                "Contact Us", "Customer Care", "Careers", "FAQs", "Disclaimer", "Privacy Policy"
              ].map((item, idx) => (
                <motion.li key={item} variants={fadeIn("up", 0.9 + idx * 0.1)}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                  >
                    ‹ {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn("left", 0.4)}>
            <motion.h3
              variants={textVariant(0.5)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Office Address
            </motion.h3>
            <motion.p variants={fadeIn("up", 0.6)} className="mb-3 text-white/90">
              Megha Plaza, 2nd Floor, Basista Chariali,<br />
              Beltola, Guwahati 781029 Assam
            </motion.p>
            <motion.h3
              variants={textVariant(0.6)}
              className="font-semibold text-lg mb-2 mt-6 border-b border-white/20 pb-2"
            >
              Email
            </motion.h3>
            <motion.a 
              variants={fadeIn("up", 0.7)} 
              href="mailto:customercare@purbanchalcement.com" 
              className="mb-3 text-white/90 hover:underline"
            >
              customercare@purbanchalcement.com
            </motion.a>
            <motion.h3
              variants={textVariant(0.7)}
              className="font-semibold text-lg mb-2 mt-6 border-b border-white/20 pb-2"
            >
              Phone Number
            </motion.h3>
            <motion.a 
              variants={fadeIn("up", 0.8)} 
              href="tel:+917099019550" 
              className="text-white/90 hover:underline"
            >
              +91 70990 19550
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        variants={fadeIn("up", 0.9)}
        className="bg-orange-500 text-white text-center py-3 mt-8 w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
          © 2025 Purbanchal Cement Ltd. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;