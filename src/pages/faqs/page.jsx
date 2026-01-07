import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Shield, Truck, Leaf, Award } from 'lucide-react';


const IMAGE_BASE = __IMAGE_BASE_PATH__;

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why did Purbanchal Cement change its name to Surya Cement?",
      answer: "The rebranding to Surya Cement reflects our expanded vision, growth ambitions, and renewed commitment to quality and innovation. This strategic change represents our evolution into a modern, forward-thinking organization while maintaining the same trusted values and expertise that have defined us for decades.",
      critical: true,
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "Has the product quality or manufacturing process changed under Surya Cement?",
      answer: "Surya Cement maintains the exact same high-quality manufacturing standards and expertise that our customers have trusted for years. There has been no change to our manufacturing processes, raw material sourcing, or quality control measures. We continue to deliver the same consistent, reliable performance that has made our cement products the preferred choice in the region.",
      critical: true,
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      question: "Where are Surya Cement products available?",
      answer: "Surya Cement products are primarily available throughout Eastern India, with our core markets including West Bengal, Bihar, Jharkhand, Odisha, and the North-Eastern states. For specific availability and to find authorized dealers near you, please use our Dealer Locator tool or contact our Sales team directly through the Contact Us page.",
      icon: <Truck className="w-5 h-5" />
    },
    {
      question: "How does Surya Cement ensure the sustainability of its products?",
      answer: "Surya Cement is committed to sustainable manufacturing through several key initiatives. We utilize alternative raw materials to reduce natural resource consumption, implement energy-efficient production processes, and actively manage our carbon footprint. Our sustainability approach extends across our supply chain, ensuring responsible sourcing and minimal environmental impact. For detailed information, visit our Sustainability page.",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      question: "What certifications does Surya Cement hold?",
      answer: "Surya Cement holds ISO 9001:2015 certification for Quality Management Systems, which guarantees consistent product quality and manufacturing excellence. Additionally, we maintain BIS certification for all our products, ensuring they meet Indian Standards specifications. These certifications demonstrate our unwavering commitment to quality control and customer satisfaction.",
      icon: <Award className="w-5 h-5" />
    },
    {
      question: "What types of cement does Surya Cement manufacture?",
      answer: "Surya Cement manufactures a comprehensive range of cement products including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized cement variants for specific construction needs. Each product undergoes rigorous testing to ensure it meets the highest standards of strength, durability, and performance.",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      question: "How can I verify the authenticity of Surya Cement products?",
      answer: "All genuine Surya Cement bags feature a unique QR code, holographic security label, and batch number. You can verify authenticity by scanning the QR code with our official mobile app or by contacting our customer service with the batch number. Always purchase from authorized dealers to ensure you receive genuine Surya Cement products.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "What technical support does Surya Cement offer?",
      answer: "Surya Cement provides comprehensive technical support through our team of experienced engineers and construction experts. We offer on-site guidance, mix design recommendations, and troubleshooting assistance. Our technical team is available to consult on projects of all scales, from residential buildings to large infrastructure projects.",
      icon: <Award className="w-5 h-5" />
    },
    {
      question: "Does Surya Cement offer bulk ordering and corporate discounts?",
      answer: "Yes, Surya Cement offers competitive pricing for bulk orders and corporate projects. We provide customized solutions for large-scale construction projects, including dedicated supply chain management and project coordination. Contact our corporate sales team for personalized quotations and volume-based pricing structures.",
      icon: <Truck className="w-5 h-5" />
    },
    {
      question: "What is Surya Cement's warranty and quality assurance policy?",
      answer: "Surya Cement stands behind the quality of every product we manufacture. Our cement comes with a comprehensive quality assurance guarantee, backed by our ISO 9001 certification. In the rare event of any quality concerns, we have a dedicated customer support team that will promptly investigate and resolve any issues according to our established quality protocols.",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header with Brand Colors */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMAGE_BASE}/faq-bg.jpg`}
            alt="Surya Cement FAQs"
            className="w-full h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3366BB] via-[#3366BB] to-[#3366BB]" />
        </div>
        <div className="relative z-10 pt-[8rem] pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block text-white text-sm font-bold tracking-tight mb-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                QUESTIONS & ANSWERS
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Frequently Asked <span className="text-orange-600">Questions</span>
              </motion.h1>
              
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Find clear, factual answers to common questions about Surya Cement products, 
                availability, quality standards, and our commitment to excellence.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Critical Notice Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-50 border-l-4 border-orange-600 p-4 mb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Shield className="w-5 h-5 text-orange-600 mr-3" />
            <p className="text-blue-800 font-medium">
              <span className="font-bold">Note:</span> The company formerly known as Purbanchal Cement is now operating as <span className="font-bold text-orange-600">Surya Cement</span>. All products maintain the same trusted quality and standards.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Rebranding & Name Change', 'Product Quality', 'Availability', 'Certifications'].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const faqIndex = faqs.findIndex(faq => 
                    faq.question.toLowerCase().includes(category.split(' ')[0].toLowerCase())
                  );
                  if (faqIndex !== -1) setActiveIndex(faqIndex);
                }}
                className="px-4 py-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:text-orange-700 transition-all"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 text-left flex items-center justify-between transition-all ${
                  activeIndex === index ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    faq.critical ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {faq.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-900 text-lg">{faq.question}</h3>
                    {faq.critical && (
                      <span className="inline-block mt-1 text-xs font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                        IMPORTANT UPDATE
                      </span>
                    )}
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-11">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          {faq.critical && (
                            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded">
                              <p className="text-sm text-blue-800">
                                <span className="font-bold">Note:</span> This information addresses recent changes and ensures continuity of our commitment to quality.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-gray-200"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team at Surya Cement is always ready to assist you with any additional questions 
              or specific concerns about our products and services. We're committed to providing 
              transparent and helpful information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/pages/contact-us")}
                className="px-6 py-3 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all rounded-lg"
              >
                Contact Our Team
              </motion.button>
            </div>
          </div>
        </motion.div> */}

        {/* Quality Assurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
            <p className="text-gray-600 text-sm">
              Every batch of Surya Cement undergoes rigorous testing to ensure it meets our 
              stringent quality standards and BIS specifications.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Sustainable Commitment</h4>
            <p className="text-gray-600 text-sm">
              Our manufacturing processes prioritize environmental responsibility through 
              energy efficiency and sustainable raw material sourcing.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Certified Excellence</h4>
            <p className="text-gray-600 text-sm">
              ISO 9001 certified operations ensure consistent quality management and 
              continuous improvement across all our processes.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default FAQPage;