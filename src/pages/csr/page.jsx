import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check, Shield, Truck, ShoppingCart, X, Calendar, MapPin, Users, Heart, Globe, Award, Droplets, Target, TrendingUp, Clock, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE = __IMAGE_BASE_PATH__;

const CSRDetailedPage = () => {
  const navigate = useNavigate();
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All CSR initiatives with detailed information
  const csrInitiatives = [
    {
      id: 1,
      title: "Environment Day Celebration",
      category: "Environmental Sustainability",
      shortDescription: "Annual Environment Day celebration focusing on raising awareness about environmental conservation.",
      description: "Annual Environment Day celebration focusing on raising awareness about environmental conservation. Activities included tree plantation drives, waste management workshops, and eco-friendly practices demonstrations.",
      fullDescription: "Our Environment Day celebration brought together employees, local communities, and environmental experts for a day dedicated to planetary health. We organized large-scale tree plantation drives across 5 villages, planted over 2000 saplings, and conducted workshops on sustainable living practices. The event also featured interactive sessions with environmental NGOs and demonstrations of water conservation techniques.",
      images: ["ed1.jpg", "ed2.jpg", "ed3.jpg","ed4.jpg", "ed5.jpg", "ed6.jpg","ed7.jpg", "ed8.jpg"], // Multiple images
      impact: "2000+ trees planted, 500+ community members engaged",
      participants: 350,
      icon: Globe,
      color: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-500",
      features: ['Large-scale Tree Plantation', 'Waste Management Workshops', 'Community Engagement Programs'],
      specifications: [
        { name: 'Trees Planted', value: '2000+' },
        { name: 'Villages Covered', value: '5' },
        { name: 'Duration', value: '1 Day' }
      ],
      isFeatured: true,
      isNew: true
    },
    {
      id: 2,
      title: "Employee & Community Felicitation",
      category: "Community Engagement",
      date: "March 15, 2024",
      location: "Surya Cement Auditorium",
      shortDescription: "Annual felicitation ceremony honoring outstanding employees and community members.",
      description: "Annual felicitation ceremony honoring outstanding employees and community members for their exceptional contributions and community service.",
      fullDescription: "The Felicitation Ceremony is our annual tradition to recognize and celebrate excellence within our workforce and the communities we serve. We honored 50+ employees for exceptional performance and safety records, and 25+ community members for their significant contributions to social welfare. Awards included educational scholarships for employees' children and grants for local social entrepreneurs.",
      images: ["fp1.JPG","fp2.JPG","fp3.JPG","fp4.JPG","fp5.JPG","fp6.JPG","fp7.JPG","fp8.JPG",], // Multiple images
      impact: "75+ individuals honored, ₹15L+ in scholarships & grants",
      participants: 500,
      icon: Award,
      color: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-500",
      features: ['Employee Recognition', 'Community Awards', 'Educational Scholarships'],
      specifications: [
        { name: 'Awards Given', value: '75+' },
        { name: 'Scholarship Amount', value: '₹15L+' },
        { name: 'Attendees', value: '500' }
      ],
      isFeatured: true,
      isNew: false
    },
    {
      id: 3,
      title: "Health & Eye Checkup Camp",
      category: "Healthcare",
      date: "February 22-24, 2024",
      location: "Community Health Centers, 3 Villages",
      shortDescription: "Free health screening and eye checkup camp providing comprehensive medical services.",
      description: "Free health screening and eye checkup camp providing comprehensive medical services to underserved communities.",
      fullDescription: "Our 3-day Health & Eye Checkup Camp provided free medical services to over 1200 residents from surrounding villages. Services included complete health screenings, vision tests, free eyeglasses distribution, and specialist consultations. We partnered with local hospitals and ophthalmologists to ensure quality care. 150+ pairs of prescription glasses were distributed, and critical cases were referred for further treatment with financial assistance from our CSR fund.",
      images: ["e1.jpg", "e2.jpg", "e3.jpg","e4.jpg", "e5.jpg", "e6.jpg","e7.jpg"], // Multiple images
      impact: "1200+ patients served, 150+ eyeglasses provided",
      participants: 1200,
      icon: Heart,
      color: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-500",
      features: ['Free Medical Screenings', 'Eye Checkups', 'Eyeglasses Distribution'],
      specifications: [
        { name: 'Patients Served', value: '1200+' },
        { name: 'Eyeglasses Provided', value: '150+' },
        { name: 'Camp Duration', value: '3 Days' }
      ],
      isFeatured: true,
      isNew: true
    },
    {
      id: 4,
      title: "Flood Relief Donation Drive",
      category: "Disaster Relief",
      date: "August 10-25, 2024",
      location: "Flood-affected Regions",
      shortDescription: "Comprehensive relief efforts providing essential supplies to flood-affected communities.",
      description: "Comprehensive relief efforts providing essential supplies and support to communities affected by severe flooding.",
      fullDescription: "In response to the devastating floods, Surya Cement mobilized immediate relief efforts across affected regions. Our teams distributed 5000+ relief kits containing food, water, medicines, and essential supplies. We provided temporary shelter materials and contributed ₹50L to rehabilitation efforts. Additionally, our employees volunteered 2000+ hours in cleanup and rebuilding activities, demonstrating our commitment to standing with communities in times of crisis.",
      images: ["Donation for Flood Relief.jpg"], // Multiple images
      impact: "5000+ relief kits, ₹50L+ contribution, 2000+ volunteer hours",
      participants: 200,
      icon: Droplets,
      color: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-500",
      features: ['Emergency Relief Kits', 'Financial Assistance', 'Volunteer Support'],
      specifications: [
        { name: 'Relief Kits', value: '5000+' },
        { name: 'Financial Aid', value: '₹50L+' },
        { name: 'Volunteer Hours', value: '2000+' }
      ],
      isFeatured: false,
      isNew: false
    }
  ];

  // Filter initiatives based on category
  const filteredInitiatives = activeFilter === "All" 
    ? csrInitiatives 
    : csrInitiatives.filter(initiative => initiative.category === activeFilter);

  // Get unique categories for filter
  const categories = ["All", ...new Set(csrInitiatives.map(item => item.category))];

  const handleExploreClick = (e, initiative) => {
    e.stopPropagation();
    setSelectedInitiative(initiative);
    setCurrentImageIndex(0); // Reset to first image when opening modal
  };

  const closeModal = () => {
    setSelectedInitiative(null);
  };

  const nextImage = () => {
    if (selectedInitiative) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedInitiative.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedInitiative) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedInitiative.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Header with Brand Colors - Same as Products Page */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMAGE_BASE}/csr_bg.jpg`}
            alt="CSR Initiatives"
            className="w-full h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3366BB] to-transparent" />
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
                OUR SOCIAL COMMITMENT
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Corporate Social <span className="text-orange-600">Responsibility</span>
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
                Building stronger communities through sustainable initiatives in education, healthcare, environmental conservation, and disaster relief.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CSR Impact Banner */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <span className="font-bold mr-2">IMPACT UPDATE:</span>
          <span>4+ CSR Initiatives Completed • 50,000+ Lives Touched</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Initiatives", value: "4+", icon: Target, color: "text-blue-600" },
            { label: "Communities", value: "50+", icon: MapPin, color: "text-green-600" },
            { label: "Investment", value: "₹5Cr+", icon: TrendingUp, color: "text-orange-600" },
            { label: "Volunteer Hours", value: "10,000+", icon: Clock, color: "text-red-600" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color.replace('text-', 'bg-')} bg-opacity-20 mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CSR Initiatives - 4 cards vertically one after another */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-900">Our CSR Initiatives</h2>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${activeFilter === category 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 4 cards vertically one after another */}
          <div className="space-y-8">
            {filteredInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                className="group cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  {/* Initiative Image */}
                  <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={`${IMAGE_BASE}/${initiative.images[0]}`}
                      alt={initiative.title}
                      className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Initiative Details */}
                  <div className="w-full md:w-2/3 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded text-sm font-medium ${initiative.color} ${initiative.textColor}`}>
                        {initiative.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {initiative.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    {/* Impact Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        <span className="font-medium">{initiative.participants.toLocaleString()} participants</span>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div className="mt-auto">
                      <button
                        onClick={(e) => handleExploreClick(e, initiative)}
                        className="flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                      >
                        VIEW DETAILS
                        <ArrowRight className="ml-2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CSR Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-orange-600"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Our CSR Commitment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Community First</h4>
                <p className="text-gray-600">
                  Every initiative is designed with community needs at the forefront, ensuring meaningful impact and sustainable development.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Sustainable Impact</h4>
                <p className="text-gray-600">
                  We focus on creating long-term, sustainable change through programs that empower communities and protect the environment.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Measurable Results</h4>
                <p className="text-gray-600">
                  All our CSR activities are tracked and measured to ensure transparency, accountability, and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Initiative Details Modal - Simplified version */}
      {selectedInitiative && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
            aria-hidden="true"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="flex items-center justify-center min-h-screen pt-20 px-4 pb-4 text-center">
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 z-10 bg-white rounded-full p-1"
                  >
                    <X size={24} />
                  </button>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="space-y-8">
                      {/* Image Gallery with Navigation */}
                      <div className="relative">
                        {/* Main Image */}
                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                          <img
                            src={`${IMAGE_BASE}/${selectedInitiative.images[currentImageIndex]}`}
                            alt={`${selectedInitiative.title} - Image ${currentImageIndex + 1}`}
                            className="w-full h-96 object-cover"
                          />
                        </div>
                        
                        {/* Navigation Arrows */}
                        {selectedInitiative.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                            >
                              <ChevronLeft size={24} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
                            >
                              <ChevronRight size={24} />
                            </button>
                          </>
                        )}
                        
                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                          {currentImageIndex + 1} / {selectedInitiative.images.length}
                        </div>
                        
                        {/* Image Thumbnails */}
                        {selectedInitiative.images.length > 1 && (
                          <div className="flex gap-2 mt-4 justify-center">
                            {selectedInitiative.images.map((img, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-16 h-16 rounded overflow-hidden border-2 ${
                                  index === currentImageIndex 
                                    ? 'border-orange-600' 
                                    : 'border-transparent'
                                }`}
                              >
                                <img
                                  src={`${IMAGE_BASE}/${img}`}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Initiative Details */}
                      <div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {selectedInitiative.title}
                        </h3>

                        {/* Full Description */}
                        <div className="mb-6">
                          <div className="text-gray-600 leading-relaxed space-y-4">
                            {selectedInitiative.fullDescription.split('. ').map((sentence, index) => (
                              sentence.trim() && (
                                <p key={index} className="text-gray-700">
                                  {sentence.trim()}.
                                </p>
                              )
                            ))}
                          </div>
                        </div>

                        {/* Participants Count */}
                        <div className="flex items-center gap-2 text-gray-600 mt-6 pt-6 border-t border-gray-200">
                          <Users className="w-5 h-5" />
                          <span className="font-medium">
                            {selectedInitiative.participants.toLocaleString()} participants engaged
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CSRDetailedPage;