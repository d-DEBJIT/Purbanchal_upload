import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  TrendingUp, 
  Heart, 
  Target,
  Clock,
  MapPin,
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import ResumeModal from './ResumeModal';

const IMAGE_BASE = __IMAGE_BASE_PATH__;

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null,
    coverLetter: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Production Engineer",
      department: "Manufacturing",
      location: "Guwahati, Assam",
      type: "Full-time",
      experience: "3-5 years",
      description: "Oversee production operations and ensure quality standards"
    },
    {
      id: 2,
      title: "Quality Control Manager",
      department: "Quality Assurance",
      location: "Guwahati, Assam",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead quality control initiatives and process improvements"
    },
    {
      id: 3,
      title: "Sustainability Officer",
      department: "ESG",
      location: "Guwahati, Assam",
      type: "Full-time",
      experience: "2-4 years",
      description: "Drive environmental sustainability initiatives"
    },
    {
      id: 4,
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Eastern India Region",
      type: "Full-time",
      experience: "2-5 years",
      description: "Expand market reach and build client relationships"
    }
  ];

  const benefits = [
    {
      icon: <Award size={24} className="text-orange-600" />,
      title: "Career Growth",
      description: "Structured career progression and promotion paths"
    },
    {
      icon: <TrendingUp size={24} className="text-orange-600" />,
      title: "Learning & Development",
      description: "Continuous training and skill enhancement programs"
    },
    {
      icon: <Heart size={24} className="text-orange-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Clock size={24} className="text-orange-600" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and leave policies"
    }
  ];

  const values = [
    "Integrity in all actions",
    "Commitment to excellence",
    "Collaboration & teamwork",
    "Innovation & continuous improvement",
    "Safety as a core value",
    "Social responsibility"
  ];

  const experienceOptions = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5-8 years",
    "8+ years"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.resume) {
      alert('Please upload your resume');
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // For demo purposes, show an alert and close modal
    alert('Resume submitted successfully! We will contact you soon.');
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null,
      coverLetter: null
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Resume Submission Modal */}
      <ResumeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}
        experienceOptions={experienceOptions}
      />

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMAGE_BASE}/careers-bg.jpg`}
            alt="Careers at Surya Cement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3366BB]/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Build Your Future. <span className="text-orange-400">Build with Surya Cement.</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Join our ambitious expansion and growth under our new brand
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-6" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Build a Career That Lasts
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8" />
            <p className="text-gray-600 max-w-4xl mx-auto text-lg mb-8">
              Joining Surya Cement means becoming part of a legacy that is redefining the future of construction. 
              As we embark on our ambitious expansion and growth under our new brand, we are looking for 
              passionate, driven individuals ready to make a concrete impact. This is more than a job; 
              it's a chance to build a rewarding career at the forefront of innovation and quality.
            </p>
          </div>

          {/* Culture & Values */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Culture: Strength in Unity
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Target className="text-orange-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Growth Mindset</h4>
                    <p className="text-gray-600">
                      We encourage curiosity and continuous learning. Your ideas are not just heard—they drive our innovation and operational excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-orange-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Respect & Inclusion</h4>
                    <p className="text-gray-600">
                      Our team is diverse, and we thrive on mutual respect. We ensure a supportive environment where professionalism and integrity are paramount.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="text-orange-600 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Purpose-Driven Work</h4>
                    <p className="text-gray-600">
                      Every bag of Surya Cement contributes to critical infrastructure. You will find meaning in knowing your work helps build stronger homes, roads, and cities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unmatched Growth Opportunities
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to helping our employees reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Mentorship Programs
              </h3>
              <p className="text-gray-600 text-center">
                Learn directly from industry veterans through structured mentorship and leadership development programs designed to accelerate your career trajectory.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Technical Excellence
              </h3>
              <p className="text-gray-600 text-center">
                Access to advanced training in cement technology, automation, and sustainable manufacturing practices, ensuring you are equipped with future-ready skills.
              </p>
            </motion.div>
          </div>

          {/* Employee Benefits */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Employee Benefits & Perks
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Explore opportunities to join our dynamic team and contribute to building India's infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Briefcase size={14} className="mr-1" />
                    {job.department}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <Clock size={14} className="mr-1" />
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Experience: {job.experience}</span>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Suitable Opening? */}
          <motion.div
            className="bg-gradient-to-r from-[#3366BB] to-[#3366BB] text-white p-8 rounded-xl text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Don't See a Suitable Opening?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll contact you 
              when a suitable position opens up.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-white text-[#3366BB] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Submit Your Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your Career with Us?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
              Join Surya Cement and be part of a team that's building India's future, one project at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                className="px-8 py-3 bg-[#3366BB] text-white font-bold rounded-lg hover:bg-[#2a5599] transition-colors"
              >
                View All Openings
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 border-2 border-[#3366BB] text-[#3366BB] font-bold rounded-lg hover:bg-[#3366BB]/10 transition-colors"
              >
                Submit Your Resume
              </button>
              <button className="px-8 py-3 border-2 border-[#3366BB] text-[#3366BB] font-bold rounded-lg hover:bg-[#3366BB]/10 transition-colors">
                Contact HR Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;