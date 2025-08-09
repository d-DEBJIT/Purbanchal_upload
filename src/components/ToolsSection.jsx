import React, { useState } from "react";

const ToolsSection = () => {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-[#f5f8fa] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-500 mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3 animate-fadeIn">
            <span className="inline-block hover:-translate-x-1 transition-transform duration-300">←</span>{" "}
            Your Hassle Free Projects Start Here{" "}
            <span className="inline-block hover:translate-x-1 transition-transform duration-300">→</span>
          </h2>
          <p className="animate-fadeIn delay-100">
            <span className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Instantly calculate costs, locate trusted dealers near you, and access expert construction
              guidance all designed to make your project <span class="font-bold">faster, smarter,</span> and  <span class="font-bold">stress-free</span>.
            </span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Cost Calculator",
              desc: "Get your project's cost in clicks, not guesswork. Input your location and construction area to receive an estimated cost instantly",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80",
              icon: (
                <>
                  <path d="M7 2a1 1 0 000 2h6a1 1 0 100-2H7zM4 9a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 15a1 1 0 011-1h12a1 1 0 110 2H3a1 1 0 01-1-1z" />
                </>
              ),
              inputs: [
                { type: "select", placeholder: "Select State", options: ["Assam", "West Bengal", "Bihar"] },
                { type: "select", placeholder: "Select City", options: ["Guwahati", "Silchar", "Jorhat"] },
                { type: "input", placeholder: "Area in sq.feet" },
              ],
              buttonText: "Calculate Now",
              timeBadge: "Takes 30 seconds"
            },
            {
              title: "Dealer Locator",
              desc: "Find verified Purbanchal Cement dealers near you in seconds. Search by city or pin code to get contact details and directions.",
              img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1470&q=80",
              icon: (
                <>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </>
              ),
              inputs: [
                { type: "select", placeholder: "Select State", options: ["Assam", "West Bengal", "Bihar"] },
                { type: "select", placeholder: "Select City", options: ["Guwahati", "Dibrugarh", "Tezpur"] },
                { type: "input", placeholder: "Pincode" },
              ],
              buttonText: "Find Dealers",
              timeBadge: "Takes 45 seconds"
            },
            {
              title: "Construction Guide",
              desc: "Plan right, build better.",
              img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1470&q=80",
              icon: (
                <>
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </>
              ),
              isGuide: true,
              buttonText: "Explore Guide",
              timeBadge: "Quick tips"
            },
          ].map((tool, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group ${
                activeTool === idx ? "ring-2 ring-orange-500" : ""
              }`}
              onMouseEnter={() => setActiveTool(idx)}
              onMouseLeave={() => setActiveTool(null)}
            >
              {/* Top Image Section */}
              <div
                className="relative h-[180px] bg-cover bg-center"
                style={{ backgroundImage: `url('${tool.img}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 group-hover:from-black/50 group-hover:to-black/30 transition-all duration-500"></div>
                
                {/* Time Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 shadow-sm">
                  {tool.timeBadge}
                </div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full border-4 border-white p-4 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl z-10">
                  <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      {tool.icon}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-12 pb-6 px-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-center text-gray-600 mb-4 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {tool.desc}
                  </p>
                </div>

                {!tool.isGuide ? (
                  <div className="space-y-4 mb-6 animate-fadeInUp">
                    {tool.inputs.map((input, i) =>
                      input.type === "select" ? (
                        <select
                          key={i}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                        >
                          <option value="" disabled selected>
                            {input.placeholder}
                          </option>
                          {input.options.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          key={i}
                          type="text"
                          placeholder={input.placeholder}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                        />
                      )
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 leading-relaxed mb-6 group-hover:bg-gray-100 transition-colors duration-300 animate-fadeInUp">
                    A step-by-step guide to help you choose the right materials, manage timelines, and
                    confidently execute every construction phase.
                  </div>
                )}

                <button
                  className={`w-full ${
                    tool.isGuide
                      ? "flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3"
                  } rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg group-hover/button:shadow-orange-200`}
                >
                  {tool.isGuide ? (
                    <>
                      <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-1">
                        →
                      </span>
                      <span className="transition-all duration-300 group-hover/button:font-bold">
                        {tool.buttonText}
                      </span>
                    </>
                  ) : (
                    <span className="inline-block transform group-hover/button:translate-x-1 transition-transform duration-300">
                      {tool.buttonText}
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 8s ease-in-out 2s infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        /* Glow effect on hover */
        .group:hover .glow {
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;