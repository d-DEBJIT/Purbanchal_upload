/* global __IMAGE_BASE_PATH__ */
import React from 'react';

const ConstructionCTA = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto md:h-80">
          
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img 
              src={`${__IMAGE_BASE_PATH__}/cta-bg.png`} 
              alt="Modern construction site" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 bg-[#3366BB] text-white flex items-center p-6 sm:p-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Let’s Build Your Next Landmark Together
              </h2>
              <p className="text-white/90 leading-relaxed">
                No delays. No compromises. 
                <br />
               With Purbanchal Cement, your construction milestones
are achieved with unmatched quality and speed.
              </p>
              <div className="pt-2">
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Contact Us <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionCTA;
