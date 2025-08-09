import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const buttonLabels = ["Surya Concreate", "Surya PPC", "Surya OPC", "Buy Fresh Bulk Cement"];

const Addition = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-[#f1f5f9]">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 0" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-2">
          {/* Left Text */}
          <div className="md:w-2/3 flex flex-col justify-between h-full">
            <div>
              <p className="text-sm text-orange-500 font-semibold mb-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                The Strength You Trust. The Name You Know.
                <span className="w-2 h-0.5 bg-orange-500 inline-block"></span>
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3366BB] mb-1">
                Purbanchal Cement Limited
              </h1>
              <h2 className="text-lg text-orange-600 font-semibold mb-2">
                Bharosa Wahi, Pehchan Nai!
              </h2>
              <p className="text-gray-600 max-w-xl mb-3">
                We deliver lasting strength and unmatched versatility adapting seamlessly to all construction needs.
              </p>
              <p className="text-gray-600 max-w-xl mb-6">
                From high-rises to homes, every mix of our cement stands for<span className="font-bold"> durability, reliability,</span> and <span className="font-bold">trust</span>.
              </p>
            </div>
            <button className="w-fit bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 text-lg font-medium">
              Talk to Our Team
            </button>
          </div>

          {/* Orange Gradient Divider */}
          <div className="hidden md:block w-[2px] h-[280px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent mx-6 self-center" />

          {/* Top Right Buttons */}
          <div className="md:w-1/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 self-center">
            {buttonLabels.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveButton(index)}
                className={`w-full h-[56px] box-border text-center rounded-lg text-base font-medium transition-all duration-200 border-2 whitespace-nowrap
                ${
                  activeButton === index
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent shadow-md"
                    : "bg-white border-gray-300 text-[#3366BB] hover:shadow-md hover:border-orange-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addition;