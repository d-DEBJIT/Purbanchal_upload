/* global __IMAGE_BASE_PATH__ */
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [activeProject, setActiveProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: "Ark - 1",
      developer: "Imperial Group",
      location: "Guwahati, Assam",
      contact: "+91 12345 67890",
      tag: "Featured Project",
      description: "A landmark commercial space designed with innovation and strength, featuring state-of-the-art facilities and sustainable design principles.",
      type: "Commercial",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    },
    {
      id: 2,
      name: "Ark - 2",
      developer: "Imperial Group",
      location: "Guwahati, Assam",
      contact: "+91 12345 67890",
      tag: "New Launch",
      description: "Premium residential towers offering luxury living with panoramic city views and world-class amenities.",
      type: "Residential",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    },
    {
      id: 3,
      name: "Imperial Heights",
      developer: "Imperial Group",
      location: "Dibrugarh, Assam",
      contact: "+91 98765 43210",
      tag: "Award Winning",
      description: "An integrated township with residential, commercial, and recreational spaces designed for modern living.",
      type: "Mixed Use",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    },
    {
      id: 4,
      name: "Tech Park East",
      developer: "Imperial Group",
      location: "Jorhat, Assam",
      contact: "+91 87654 32109",
      tag: "Coming Soon",
      description: "A futuristic IT park with smart office solutions and collaborative workspaces for tech companies.",
      type: "Commercial",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    },
    {
      id: 5,
      name: "Green Valley",
      developer: "Imperial Group",
      location: "Tezpur, Assam",
      contact: "+91 76543 21098",
      tag: "Eco Project",
      description: "Sustainable residential community with green spaces, solar power, and water conservation systems.",
      type: "Residential",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    },
    {
      id: 6,
      name: "Industrial Hub",
      developer: "Imperial Group",
      location: "Silchar, Assam",
      contact: "+91 65432 10987",
      tag: "Under Construction",
      description: "Modern industrial complex with advanced infrastructure for manufacturing and logistics.",
      type: "Industrial",
      image: `${__IMAGE_BASE_PATH__}/project1.png`
    }
  ];

  const filters = ["All", "Residential", "Commercial", "Industrial"];
  
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 2);
  };

  const handleProjectClick = (projectId, e) => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
    
    if (isTouchDevice) {
      e.preventDefault();
      setActiveProject(activeProject === projectId ? null : projectId);
    } else {
      // For non-touch devices, navigate to project page
      window.location.href = `/projects/${projectId}`;
    }
  };

  return (
    <div className="bg-[#3366BB] w-full overflow-hidden relative py-16">
      {/* Diagonal pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[length:40px_40px] bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_50%,#ffffff_50%,#ffffff_75%,transparent_75%,transparent)]"></div>
      
      {/* Dark gradient overlay from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Our Projects →
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our journey through impactful infrastructure and real estate projects that reflect strength, quality, and long-term performance.
          </p>
          <p className="text-white/80 mt-2">Each project tells a story of trust built to last.</p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${activeFilter === filter 
                ? 'bg-orange-500 text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'}`}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleProjects(4);
                setActiveProject(null);
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={(e) => handleProjectClick(project.id, e)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {project.tag}
                </div>
                
                {/* Name on light gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                </div>
                
                {/* Info overlay - shown on hover (desktop) or when active (mobile) */}
                <div className={`absolute inset-0 bg-black/70 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}>
                  <div className={`${activeProject === project.id ? 'translate-y-0' : 'translate-y-4'} group-hover:translate-y-0 transition-transform duration-300`}>
                    <p className="text-orange-500 font-medium mb-2">By {project.developer}</p>
                    <p className="text-white text-sm md:text-base line-clamp-3 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm mb-6">
                      <div className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {project.contact}
                      </div>
                    </div>
                    
                    <a 
                      href={`/projects/${project.id}`} 
                      className="inline-flex items-center px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={loadMore}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105"
            >
              Load More Projects
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;