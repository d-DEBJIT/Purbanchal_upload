import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react"; // ✅ Import Lucide icons

const ToolsSection = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const navigate = useNavigate();

  // State for calculators
  const [costCalculatorData, setCostCalculatorData] = useState({
    state: "",
    city: "",
    area: ""
  });

  const [cementCalculatorData, setCementCalculatorData] = useState({
    area: "",
    thickness: "4", // default 4 inches
    mixRatio: "1:4" // default mix ratio
  });

  const [aggregateCalculatorData, setAggregateCalculatorData] = useState({
    area: "",
    thickness: "4", // default 4 inches
    aggregateType: "coarse" // coarse or fine
  });

  // Calculation functions
  const calculateConstructionCost = () => {
    const { state, city, area } = costCalculatorData;
    if (!state || !city || !area || area <= 0) return null;

    const areaNum = parseFloat(area);
    
    // Base construction rates per sq.ft (approx rates for different regions)
    const baseRates = {
      "Assam": 1200,
      "West Bengal": 1300,
      "Bihar": 1100
    };

    const cityMultipliers = {
      "Guwahati": 1.1,
      "Silchar": 0.95,
      "Jorhat": 0.9,
      "Kolkata": 1.2,
      "Asansol": 1.0,
      "Durgapur": 0.95,
      "Patna": 1.1,
      "Gaya": 0.9,
      "Muzaffarpur": 0.85
    };

    const baseRate = baseRates[state] || 1200;
    const multiplier = cityMultipliers[city] || 1.0;
    
    const totalCost = areaNum * baseRate * multiplier;
    
    return {
      basicCost: areaNum * baseRate,
      locationAdjustment: multiplier,
      totalCost: Math.round(totalCost / 1000) * 1000, // Round to nearest 1000
      costPerSqFt: Math.round(baseRate * multiplier),
      area: areaNum,
      city,
      state
    };
  };

  const calculateCementRequired = () => {
    const { area, thickness, mixRatio } = cementCalculatorData;
    if (!area || area <= 0 || !thickness) return null;

    const areaNum = parseFloat(area);
    const thicknessNum = parseFloat(thickness);
    
    // Convert area from sq.ft to sq.m
    const areaSqM = areaNum * 0.0929;
    // Convert thickness from inches to meters
    const thicknessM = thicknessNum * 0.0254;
    
    // Volume in cubic meters
    const volume = areaSqM * thicknessM;
    
    // Different mix ratios require different cement quantities
    const mixRatios = {
      "1:4": { cement: 6.5, sand: 0.44 }, // kg per sq.ft per inch
      "1:5": { cement: 5.5, sand: 0.48 },
      "1:6": { cement: 4.8, sand: 0.52 }
    };
    
    const ratio = mixRatios[mixRatio] || mixRatios["1:4"];
    
    const cementBags = Math.ceil((volume * 1440 * ratio.cement) / 50); // 50kg per bag
    const sandVolume = Math.ceil(volume * ratio.sand * 35.3147); // Convert to cubic feet
    
    return {
      cementBags,
      sandVolume,
      area: areaNum,
      thickness: thicknessNum,
      mixRatio
    };
  };

  const calculateAggregateRequired = () => {
    const { area, thickness, aggregateType } = aggregateCalculatorData;
    if (!area || area <= 0 || !thickness) return null;

    const areaNum = parseFloat(area);
    const thicknessNum = parseFloat(thickness);
    
    // Convert area from sq.ft to sq.m
    const areaSqM = areaNum * 0.0929;
    // Convert thickness from inches to meters
    const thicknessM = thicknessNum * 0.0254;
    
    // Volume in cubic meters
    const volume = areaSqM * thicknessM;
    
    // Aggregate calculation (in cubic feet)
    const aggregateVolume = volume * 35.3147; // Convert to cubic feet
    
    // Different types of aggregates
    const aggregateTypes = {
      "coarse": { density: 1.5, unit: "cft", name: "Coarse Aggregate" }, // coarse aggregate for concrete
      "fine": { density: 1.6, unit: "cft", name: "Fine Aggregate (Sand)" }    // fine aggregate (sand)
    };
    
    const aggregateInfo = aggregateTypes[aggregateType] || aggregateTypes["coarse"];
    const weight = Math.ceil(aggregateVolume * aggregateInfo.density); // in tons
    
    return {
      volume: Math.ceil(aggregateVolume),
      weight,
      type: aggregateType,
      typeName: aggregateInfo.name,
      area: areaNum,
      thickness: thicknessNum,
      unit: aggregateInfo.unit
    };
  };

  const showResultModal = (title, data, type) => {
    setModalTitle(title);
    setModalData({ ...data, type });
    setShowModal(true);
  };

  const handleCostCalculatorSubmit = () => {
    const result = calculateConstructionCost();
    if (result) {
      showResultModal("Construction Cost Estimate", result, "cost");
    } else {
      showResultModal("Error", { message: "Please fill all fields with valid values" }, "error");
    }
  };

  const handleCementCalculatorSubmit = () => {
    const result = calculateCementRequired();
    if (result) {
      showResultModal("Cement Calculation Results", result, "cement");
    } else {
      showResultModal("Error", { message: "Please fill all fields with valid values" }, "error");
    }
  };

  const handleAggregateCalculatorSubmit = () => {
    const result = calculateAggregateRequired();
    if (result) {
      showResultModal("Aggregate Calculation Results", result, "aggregate");
    } else {
      showResultModal("Error", { message: "Please fill all fields with valid values" }, "error");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setModalData(null);
      setModalTitle("");
    }, 300);
  };

  // Render modal content based on type
  const renderModalContent = () => {
    if (!modalData) return null;

    if (modalData.type === "error") {
      return (
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Input Required</h3>
          <p className="text-gray-600">{modalData.message}</p>
        </div>
      );
    }

    if (modalData.type === "cost") {
      return (
        <div className="space-y-6">
          {/* Project Summary */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Project Summary</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Area:</span>
              <span className="font-medium">{modalData.area} sq.ft</span>
              <span className="text-gray-600">Location:</span>
              <span className="font-medium">{modalData.city}, {modalData.state}</span>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Cost Breakdown</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Basic Construction Cost</span>
                <span className="font-semibold">₹{modalData.basicCost?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Location Adjustment ({modalData.locationAdjustment}x)</span>
                <span className="text-sm text-gray-500">Regional Factor</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Cost per sq.ft</span>
                <span className="font-semibold">₹{modalData.costPerSqFt}</span>
              </div>
            </div>
          </div>

          {/* Total Cost */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total Estimated Cost</span>
              <span className="text-2xl font-bold">₹{modalData.totalCost?.toLocaleString()}</span>
            </div>
            <p className="text-orange-100 text-sm mt-2">* This is an approximate estimate</p>
          </div>
        </div>
      );
    }

    if (modalData.type === "cement") {
      return (
        <div className="space-y-6">
          {/* Project Summary */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Project Details</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Area:</span>
              <span className="font-medium">{modalData.area} sq.ft</span>
              <span className="text-gray-600">Thickness:</span>
              <span className="font-medium">{modalData.thickness} inches</span>
              <span className="text-gray-600">Mix Ratio:</span>
              <span className="font-medium">{modalData.mixRatio} (Cement:Sand)</span>
            </div>
          </div>

          {/* Material Requirements */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Material Requirements</h4>
            
            {/* Cement Card */}
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-gray-800">Cement Bags</h5>
                  <p className="text-sm text-gray-600">50kg per bag</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-orange-600">{modalData.cementBags}</span>
                  <p className="text-sm text-gray-600">bags</p>
                </div>
              </div>
            </div>

            {/* Sand Card */}
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-gray-800">Sand Required</h5>
                  <p className="text-sm text-gray-600">Fine aggregate</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-600">{modalData.sandVolume}</span>
                  <p className="text-sm text-gray-600">cubic feet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> These are approximate values. Actual requirements may vary based on material quality and workmanship.
            </p>
          </div>
        </div>
      );
    }

    if (modalData.type === "aggregate") {
      return (
        <div className="space-y-6">
          {/* Project Summary */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Project Details</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Area:</span>
              <span className="font-medium">{modalData.area} sq.ft</span>
              <span className="text-gray-600">Thickness:</span>
              <span className="font-medium">{modalData.thickness} inches</span>
              <span className="text-gray-600">Aggregate Type:</span>
              <span className="font-medium">{modalData.typeName}</span>
            </div>
          </div>

          {/* Material Requirements */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Aggregate Requirements</h4>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
              <div className="text-center">
                <h5 className="text-lg font-semibold mb-2">Total {modalData.typeName} Needed</h5>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold">{modalData.volume}</span>
                    <p className="text-green-100 text-sm">Cubic Feet</p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-bold">{modalData.weight}</span>
                    <p className="text-green-100 text-sm">Tons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Volume and weight calculations are approximate. Consider 10-15% wastage during construction.
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-[#f5f8fa] to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-500 mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500 mix-blend-multiply filter blur-3xl animate-float-delay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3 animate-fadeIn flex items-center justify-center gap-2">
              <ArrowLeft className="w-5 h-5 inline-block transition-transform duration-300 hover:-translate-x-1" /> 
              Your Hassle Free Projects Start Here 
              <ArrowRight className="w-5 h-5 inline-block transition-transform duration-300 hover:translate-x-1" />
            </h2>
            <p className="animate-fadeIn delay-100">
              <span className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                Instantly calculate costs, locate trusted dealers near you, and access expert construction guidance—all designed by Surya Cement to make your project  <span className="font-bold">faster, smarter,</span> and  <span className="font-bold">stress-free</span>.
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
                  { 
                    type: "select", 
                    placeholder: "Select State", 
                    options: ["Assam", "West Bengal", "Bihar"],
                    value: costCalculatorData.state,
                    onChange: (e) => setCostCalculatorData({...costCalculatorData, state: e.target.value})
                  },
                  { 
                    type: "select", 
                    placeholder: "Select City", 
                    options: costCalculatorData.state === "Assam" ? ["Guwahati", "Silchar", "Jorhat"] : 
                             costCalculatorData.state === "West Bengal" ? ["Kolkata", "Asansol", "Durgapur"] :
                             costCalculatorData.state === "Bihar" ? ["Patna", "Gaya", "Muzaffarpur"] : ["Select State First"],
                    value: costCalculatorData.city,
                    onChange: (e) => setCostCalculatorData({...costCalculatorData, city: e.target.value})
                  },
                  { 
                    type: "input", 
                    placeholder: "Area in sq.feet",
                    value: costCalculatorData.area,
                    onChange: (e) => setCostCalculatorData({...costCalculatorData, area: e.target.value})
                  },
                ],
                buttonText: "Calculate Now",
                timeBadge: "Takes 30 seconds",
                onSubmit: handleCostCalculatorSubmit
              },
              {
                title: "Cement Calculator",
                desc: "Calculate exact cement and sand requirements for your construction project based on area and mix ratio.",
                img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1470&q=80",
                icon: (
                  <>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </>
                ),
                inputs: [
                  { 
                    type: "input", 
                    placeholder: "Area in sq.feet",
                    value: cementCalculatorData.area,
                    onChange: (e) => setCementCalculatorData({...cementCalculatorData, area: e.target.value})
                  },
                  { 
                    type: "select", 
                    placeholder: "Thickness (inches)", 
                    options: ["4", "5", "6"],
                    value: cementCalculatorData.thickness,
                    onChange: (e) => setCementCalculatorData({...cementCalculatorData, thickness: e.target.value})
                  },
                  { 
                    type: "select", 
                    placeholder: "Mix Ratio", 
                    options: ["1:4", "1:5", "1:6"],
                    value: cementCalculatorData.mixRatio,
                    onChange: (e) => setCementCalculatorData({...cementCalculatorData, mixRatio: e.target.value})
                  },
                ],
                buttonText: "Calculate Cement",
                timeBadge: "Instant Results",
                onSubmit: handleCementCalculatorSubmit
              },
              {
                title: "Aggregate Calculator",
                desc: "Calculate coarse and fine aggregate requirements for concrete work and foundation.",
                img: "https://images.unsplash.com/photo-1581094794329-cdc0c0a5d0e9?auto=format&fit=crop&w=1470&q=80",
                icon: (
                  <>
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </>
                ),
                inputs: [
                  { 
                    type: "input", 
                    placeholder: "Area in sq.feet",
                    value: aggregateCalculatorData.area,
                    onChange: (e) => setAggregateCalculatorData({...aggregateCalculatorData, area: e.target.value})
                  },
                  { 
                    type: "select", 
                    placeholder: "Thickness (inches)", 
                    options: ["4", "6", "8"],
                    value: aggregateCalculatorData.thickness,
                    onChange: (e) => setAggregateCalculatorData({...aggregateCalculatorData, thickness: e.target.value})
                  },
                  { 
                    type: "select", 
                    placeholder: "Aggregate Type", 
                    options: ["coarse", "fine"],
                    value: aggregateCalculatorData.aggregateType,
                    onChange: (e) => setAggregateCalculatorData({...aggregateCalculatorData, aggregateType: e.target.value})
                  },
                ],
                buttonText: "Calculate Aggregate",
                timeBadge: "Quick Calculation",
                onSubmit: handleAggregateCalculatorSubmit
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

                  <div className="space-y-4 mb-6 animate-fadeInUp">
                    {tool.inputs.map((input, i) =>
                      input.type === "select" ? (
                        <select
                          key={i}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={input.value}
                          onChange={input.onChange}
                        >
                          <option value="" disabled>
                            {input.placeholder}
                          </option>
                          {input.options.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt.charAt(0).toUpperCase() + opt.slice(1)}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          key={i}
                          type="number"
                          placeholder={input.placeholder}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                          value={input.value}
                          onChange={input.onChange}
                        />
                      )
                    )}
                  </div>

                  <button
                    onClick={tool.onSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg group-hover/button:shadow-orange-200"
                  >
                    <span className="inline-block transform group-hover/button:translate-x-1 transition-transform duration-300">
                      {tool.buttonText}
                    </span>
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

      {/* Results Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">{modalTitle}</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {renderModalContent()}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToolsSection;