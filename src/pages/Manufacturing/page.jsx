import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Factory, Settings, Shield, CheckCircle, Layers, Clock, Award, ArrowRight, ChevronUp } from 'lucide-react';

// Reusable CTA Button
const CTAButton = ({ text }) => (
  <motion.button
    className="px-8 py-3 bg-white text-[#3366BB] font-bold rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {text} <ArrowRight size={18} />
  </motion.button>
);

// Floating Scroll to Top Button
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return visible && (
    <motion.button
      className="fixed bottom-6 right-6 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ChevronUp />
    </motion.button>
  );
};

const ManufacturingProcessPage = () => {
  const processes = [
    {
      id: 1,
      title: "Raw Material Preparation",
      description: "High-quality raw materials are carefully selected and prepared for production.",
      icon: <Layers size={48} className="text-orange-600" />,
      steps: [
        "Material sourcing from certified suppliers",
        "Quality inspection and testing",
        "Precision measurement and preparation"
      ],
      image: "/raw-materials.jpg"
    },
    {
      id: 2,
      title: "Precision Mixing",
      description: "Advanced computerized mixing ensures perfect consistency and composition.",
      icon: <Settings size={48} className="text-orange-600" />,
      steps: [
        "Computer-controlled batching",
        "Automated mixing process",
        "Real-time quality monitoring"
      ],
      image: "/mixing.jpg"
    },
    {
      id: 3,
      title: "Molding & Forming",
      description: "State-of-the-art molding technology creates products with exact specifications.",
      icon: <Factory size={48} className="text-orange-600" />,
      steps: [
        "High-pressure forming",
        "Precision temperature control",
        "Automated demolding"
      ],
      image: "/molding.jpg"
    },
    {
      id: 4,
      title: "Curing & Drying",
      description: "Controlled environment curing ensures optimal strength and durability.",
      icon: <Clock size={48} className="text-orange-600" />,
      steps: [
        "Temperature-controlled chambers",
        "Humidity regulation",
        "Automated curing cycles"
      ],
      image: "/curing.jpg"
    },
    {
      id: 5,
      title: "Quality Inspection",
      description: "Rigorous testing at every stage guarantees product excellence.",
      icon: <CheckCircle size={48} className="text-orange-600" />,
      steps: [
        "Automated scanning systems",
        "Manual inspection points",
        "Performance testing"
      ],
      image: "/inspection.jpg"
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
<div className="relative h-96 w-full overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/bg-manufacturing.jpg')" }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/0" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
        >
          Our Manufacturing{" "}
          <span className="text-orange-400">Process</span>
        </h1>

        <p
          className="text-xl text-gray-200 max-w-3xl mx-auto"
          style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.7)" }}
        >
          Precision engineering meets cutting-edge technology in our
          state-of-the-art production facilities
        </p>

        {/* Divider */}
        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-6 shadow-lg" />
      </motion.div>
    </div>
  </div>
</div>


      

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ALL OF IT BEGINS HERE
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each stage of production undergoes rigorous quality control to ensure exceptional results
            </p>
          </div>

          <div className="space-y-20">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-xl p-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, backgroundColor: "rgba(255,165,0,0.05)" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Image */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl h-64 md:h-80">
                    <motion.img
                      src={process.image}
                      alt={process.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{process.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      {process.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  <ul className="space-y-3">
                    {process.steps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Manufacturing Stands Out
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              Combining decades of expertise with innovative technologies to deliver unmatched quality and consistency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award size={32} className="text-orange-600" />, title: "ISO Certified", desc: "Our facilities meet the highest international quality standards with ISO 9001 certification" },
              { icon: <Settings size={32} className="text-orange-600" />, title: "Advanced Automation", desc: "Computer-controlled systems ensure precision and consistency in every product" },
              { icon: <Shield size={32} className="text-orange-600" />, title: "Sustainable Practices", desc: "Environmentally responsible manufacturing with waste reduction and energy efficiency" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-16 bg-gradient-to-r from-[#3366BB] to-[#3366BB] text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" // <-- Added container and padding
        >
          <h2 className="text-3xl font-bold mb-6 text-left">Ready to Experience Our Quality?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mb-8 text-left">
            Contact us today to learn more about our manufacturing capabilities and how we can meet your specific requirements
          </p>
          <div className="text-left">
            <CTAButton text="Request Manufacturing Consultation" />
          </div>
        </motion.div>
      </section> */}

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default ManufacturingProcessPage;
