/* global __IMAGE_BASE_PATH__ */
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Shield, Target, Award, Globe } from "lucide-react";

const SustainabilityPage = () => {
  const esgPillars = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Stewardship",
      description: "We are committed to minimizing our ecological footprint through innovation and efficient resource management.",
      initiatives: [
        "Carbon & Energy Efficiency:",
        "Comprehensive waste management and recycling systems",
        "Biodiversity conservation programs near mining sites",
        "Carbon capture research and implementation"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Responsibility",
      description: "We believe true sustainability includes empowering communities. Our social initiatives focus on education, healthcare, and economic development, ensuring that our growth translates into shared prosperity for all stakeholders.",
      initiatives: [
        "Skill development programs for local youth",
        "Healthcare camps in neighboring villages",
        "Women empowerment through vocational training",
        "Infrastructure development for community welfare"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical Governance",
      description: "Transparency and integrity form the foundation of our corporate governance. We maintain the highest ethical standards, ensure regulatory compliance, and foster a culture of accountability at every organizational level.",
      initiatives: [
        "Independent sustainability auditing",
        "Stakeholder engagement forums",
        "Anti-corruption and compliance training",
        "Whistleblower protection mechanisms"
      ]
    }
  ];

  const milestones = [
    { year: "2020", achievement: "40% renewable energy target achieved" },
    { year: "2021", achievement: "Zero waste to landfill certification" },
    { year: "2022", achievement: "Carbon neutral in Scope 1 & 2 emissions" },
    { year: "2023", achievement: "100% water recycling in plant operations" },
    { year: "2024", achievement: "Net positive biodiversity impact" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative relative h-96 bg-gradient-to-r from-green-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${__IMAGE_BASE_PATH__}/esg-pattern.png)` }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Sustainable<br />
              <span className="text-orange-400">Future with Surya Cement</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              At Surya Cement, sustainability isn't just a policy—it's our promise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">30%</div>
                <div className="text-sm">Reduction in CO₂ Emissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">5,000+</div>
                <div className="text-sm">Local Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm">Regulatory Compliance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900">Our Sustainable Vision</h2>
              </div>
              
              <p className="text-gray-700 text-lg mb-6">
                At Surya Cement, we believe that the foundations of a stronger society are built on responsible growth. Our commitment to sustainability is integral to our operations, ensuring that we create lasting value for our customers, communities, and the planet. We strive for excellence in every aspect of our Environmental, Social, and Governance (ESG) framework. 
              </p>
              {/* <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-green-600" />
                <div>
                  <h4 className="font-bold text-gray-900">Recognized Excellence</h4>
                  <p className="text-sm text-gray-600">
                    Recipient of the Green Manufacturing Award 2023 & Sustainable Business Leader 2024
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed ESG Pillars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our ESG Framework</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three interconnected pillars that define our approach to sustainable development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center text-green-700 mb-6">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 mb-6">{pillar.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Key Initiatives:</h4>
                  <ul className="space-y-2">
                    {pillar.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="text-sm text-gray-600 font-medium">
                    Ongoing • Measurable • Impact-Driven
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ESG Component from Home Page */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            ESG in Action
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Explore our measurable commitments through interactive insights
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partner With Us in Building a Sustainable Future
            </h2>
            
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Sustainability is a collaborative journey. Join us as we continue to innovate, 
              reduce our environmental impact, and create positive social change. Together, 
              we can construct not just buildings, but a better world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Download Sustainability Report
              </button>
              {/* <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                Contact Our ESG Team
              </button> */}
            </div>
            
            <p className="text-gray-500 text-sm mt-8">
              Our sustainability reports are independently verified and aligned with 
              GRI Standards, SASB, and UN Sustainable Development Goals
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;