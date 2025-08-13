import React, { useState } from 'react'; // Added useState import here
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  Globe, 
  BarChart2, 
  Briefcase,
  Linkedin,
  Twitter,
  ChevronDown
} from 'lucide-react';

const ProfilePage = () => {
  const [expandedMission, setExpandedMission] = useState(false);
  const [expandedVision, setExpandedVision] = useState(false);

  const leadershipTeam = [
    {
      id: 1,
      name: "Vedant Agarwal",
      position: "Director at Purbanchal Cement Limited, Maithan Group",
      bio: "Industry veteran with 25+ years experience in manufacturing and operations",
      image: "/Vedant-Agarwal.jpg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ];

  const milestones = [
    { year: "2003", event: "Company promoted by founders" },
    { year: "2008", event: "Plant operational; brands launched" },
    { year: "2018", event: "Environment initiatives: plantation drive & clean-up campaigns" },
    { year: "2022", event: "₹200 Cr expansion plan, capacity doubling, new grinding unit proposed" },
    { year: "2023", event: "Expansion drive ongoing, capacity ramp-up plans reiterated" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/our-company.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#3366BB]/20" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Our <span className="text-orange-400">Company</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Building excellence in manufacturing since 2005
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <div className="w-73 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6" />
              <p className="text-gray-600 mb-6">
                Founded in 2005, we have grown from a small manufacturing unit to a leading industrial producer with facilities across Bangladesh. Our commitment to quality, innovation, and sustainable practices has made us a preferred partner for global brands.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">17+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Employees</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Global Clients</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Quality Assurance</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
              <img 
                src="/facility.png" 
                alt="Our manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setExpandedMission(!expandedMission)}
            >
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Globe size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To deliver superior manufacturing solutions through innovation, quality, and operational excellence.
                  </p>
                  {expandedMission && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 text-gray-600"
                    >
                      <p>We achieve this by:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Investing in cutting-edge technology</li>
                        <li>Developing our workforce through continuous training</li>
                        <li>Implementing sustainable manufacturing practices</li>
                        <li>Building long-term partnerships with clients</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
                <ChevronDown 
                  className={`ml-auto text-orange-600 transition-transform ${expandedMission ? 'rotate-180' : ''}`}
                  size={20}
                />
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setExpandedVision(!expandedVision)}
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BarChart2 size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be recognized as a global leader in innovative and sustainable manufacturing.
                  </p>
                  {expandedVision && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 text-gray-600"
                    >
                      <p>Our strategic goals:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Expand to 3 new international markets by 2025</li>
                        <li>Reduce carbon footprint by 30% by 2026</li>
                        <li>Develop 5 new patented technologies by 2027</li>
                        <li>Double workforce while maintaining quality standards</li>
                      </ul>
                    </motion.div>
                  )}
                </div>
                <ChevronDown 
                  className={`ml-auto text-blue-600 transition-transform ${expandedVision ? 'rotate-180' : ''}`}
                  size={20}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Leadership Team */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    

    <div className="space-y-12">
      {leadershipTeam.map((leader) => (
        <motion.div
          key={leader.id}
          className="flex flex-col md:flex-row items-center md:items-stretch bg-transparent shadow-none hover:shadow-none transition-shadow"
          whileHover={{ y: -5 }}
        >
          {/* Image Column */}
          <div className="md:w-1/3 flex justify-center items-center p-8">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-80 h-80 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Text Column */}
          <motion.div
            className="md:w-2/3 p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
            <p className="text-orange-600 mb-4">{leader.position}</p>
            <p className="text-gray-600 mb-6">{leader.bio}</p>
            <div className="flex space-x-4">
              <a
                href={leader.social.linkedin}
                className="text-blue-700 hover:text-orange-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Milestones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-1/2 h-full w-0.5 bg-orange-200 transform -translate-x-1/2"></div>
            
            {/* Milestone items */}
            <div className="space-y-12 sm:space-y-0">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative sm:flex items-center justify-between">
                  {/* Left-aligned for even, right for odd */}
                  <div className={`sm:w-5/12 ${index % 2 === 0 ? 'sm:order-1' : 'sm:order-2'}`}>
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.year}</h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-orange-600 border-4 border-white"></div>
                  </div>

                  {/* Right-aligned for even, left for odd (empty to balance) */}
                  <div className={`sm:w-5/12 ${index % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;