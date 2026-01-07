import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Building2, Phone, Mail, MapPin } from "lucide-react";

const CustomerCarePage = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    { id: "technical", label: "Technical Services", icon: <Wrench size={20} /> },
    { id: "rmg", label: "RMG Support", icon: <Building2 size={20} /> },
  ];

  const content = {
    technical: [
      {
        icon: <Wrench size={48} className="text-orange-500" />,
        title: "Machine Maintenance",
        description: "Expert maintenance to keep your systems running flawlessly, minimizing downtime and maximizing operational lifespan. ",
      },
      {
        icon: <Wrench size={48} className="text-orange-500" />,
        title: "Troubleshooting",
        description: "Quick diagnosis and repair of technical issues, ensuring fast resolution and preserving your project's timeline.",
      },
      {
        icon: <Wrench size={48} className="text-orange-500" />,
        title: "Performance Optimization",
        description: "Proactive strategies to improve efficiency and reduce waste, helping you achieve the highest performance standards using Surya Cement products.",
      },
    ],
    rmg: [
      {
        icon: <Building2 size={48} className="text-blue-500" />,
        title: "RMG Consultation",
        description: "Get expert guidance on RMG projects, including mix design optimization, technical specifications, and site execution planning from our specialist team. ",
      },
      {
        icon: <Building2 size={48} className="text-blue-500" />,
        title: "Regulatory Compliance",
        description: "Ensure all your projects meet local and international industry regulations, providing peace of mind through complete documentation and expert oversight.",
      },
      {
        icon: <Building2 size={48} className="text-blue-500" />,
        title: "Project Management",
        description: "End-to-end support for your RMG needs, covering logistics coordination, quality monitoring, and timely delivery management.",
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/customercare.jpg')] bg-cover bg-center" />
        {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue/80 to-black/0" />

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Customer <span className="text-orange-400">Care</span>
            </h1>
            <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
              Your Project Success is Our Priority.
            </p>
            <p className="text-lg text-gray-200 mt-4 max-w-7xl mx-auto">At Surya Cement, our commitment extends beyond delivering premium products. Our 
dedicated Technical Services and RMG Support team is here to provide expert guidance, 
swift troubleshooting, and specialized assistance to ensure your project's optimal 
performance from start to finish. </p>
          </motion.div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-400"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {content[activeTab].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Contact Our Support Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <Phone className="text-orange-500 mb-3" size={36} />
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-gray-600">+91 7099019550</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <Mail className="text-blue-500 mb-3" size={36} />
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-gray-600">customercare@https://www.google.com/search?q=suryacement.com</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <MapPin className="text-green-500 mb-3" size={36} />
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-gray-600">Megha Plaza, 2nd Floor, Basista Chariali,
Beltola, Guwahati 781029 Assam</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarePage;
