/* global __IMAGE_BASE_PATH__ */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react"; // ✅ Added Lucide arrows

const SustainabilitySection = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const esgData = [
    {
      title: "Environment",
      img: `${__IMAGE_BASE_PATH__}/environment.png`,
      alt: "Environment",
      shortText: "Reducing our carbon footprint through sustainable manufacturing practices and a firm focus on conserving natural resources.",
      stats: [
        "40% energy from renewable sources",
        "100K+ trees planted",
        "30% reduction in CO2 emissions",
      ],
      gradientFrom: "from-green-500/20",
      gradientTo: "to-green-900/70",
    },
    {
      title: "Social",
      img: `${__IMAGE_BASE_PATH__}/social.png`,
      alt: "Social",
      shortText: "Empowering local communities and fostering inclusive growth through skill development, infrastructure support, and focused social initiatives.",
      stats: [
        "5,000+ jobs created locally",
        "25 schools supported",
        "90% local workforce",
      ],
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-blue-900/70",
    },
    {
      title: "Governance",
      img: `${__IMAGE_BASE_PATH__}/governance.png`,
      alt: "Governance",
      shortText: "Upholding ethical leadership and transparent business practices across all operations, ensuring accountability to all stakeholders.",
      stats: [
        "100% compliance with regulations",
        "50+ sustainability audits",
        "Zero corruption cases",
      ],
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-purple-900/70",
    },
  ];

  const handleCardClick = (idx) => {
    if (!isMobile) return;
    setActiveCard(activeCard === idx ? null : idx);
  };

  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      {/* Right-side background pattern */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${__IMAGE_BASE_PATH__}/esg-pattern.png)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="flex justify-center items-center gap-2 text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            {/* <ArrowLeft size={20} /> */}
            SURYA CEMENT: CEMENTING OUR ESG COMMITMENTS
            {/* <ArrowRight size={20} /> */}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            At Surya Cement, we are deeply committed to {" "}
            <span className="font-bold">
              eco-friendly practices, energy-efficient manufacturing,
            </span>{" "}
            and <span className="font-bold">community well-being.</span> This integrated focus ensures we build a greener, safer, and more sustainable tomorrow for everyone.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {esgData.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(idx)}
            >
              {/* Orange border effect */}
              <div
                className={`absolute inset-0 border-b-8 border-r-8 border-orange-500 rounded-xl transition-all duration-300 z-10 pointer-events-none ${
                  isMobile
                    ? activeCard === idx
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></div>

              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${card.gradientFrom} ${card.gradientTo} transition-all duration-500 ${
                  isMobile
                    ? activeCard === idx
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></div>

              {/* Default Title */}
              <div
                className={`absolute bottom-0 left-0 p-6 w-full transition-opacity duration-300 ${
                  isMobile
                    ? activeCard === idx
                      ? "opacity-0"
                      : "opacity-100"
                    : "group-hover:opacity-0"
                }`}
              >
                <h3 className="text-white text-xl md:text-2xl font-bold text-left">
                  {card.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  isMobile
                    ? activeCard === idx
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="text-white text-2xl font-bold mb-3 text-left">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm font-medium mb-4 text-left">
                  {card.shortText}
                </p>

                {/* Statistics List */}
                <ul className="space-y-2 mb-4">
                  {card.stats.map((stat, statIdx) => (
                    <li key={statIdx} className="flex items-start">
                      <svg
                        className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-orange-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/90 text-sm">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Report Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            onClick={() => navigate("/pages/sustainability")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
          >
            View Full Sustainability Report
            <ArrowRight size={18} className="ml-2" /> {/* ✅ Replaced SVG with Lucide */}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
