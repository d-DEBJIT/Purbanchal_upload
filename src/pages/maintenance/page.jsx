import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Mail, Phone, HardHat } from 'lucide-react';

const IMAGE_BASE = __IMAGE_BASE_PATH__;

const MaintenancePage = () => {
  return (
    <div className="bg-white min-h-screen font-sans flex flex-col">
      {/* Animated Background with Construction Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gray-100 opacity-20"></div>
        <motion.img 
          src={`${IMAGE_BASE}/construction-worker.png`}
          alt="Construction worker"
          className="absolute bottom-0 left-10 h-64"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
        <motion.img 
          src={`${IMAGE_BASE}/tools.png`}
          alt="Tools"
          className="absolute top-20 right-10 h-40"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <div className="absolute inset-0 bg-[url('/construction-pattern.png')] opacity-10"></div>
      </div>

      {/* Top Bar - Brand Colors */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMAGE_BASE}/construction-site.gif`}
            alt="Maintenance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3366BB] via-[#3366BB] to-[#3366BB] opacity-90" />
        </div>
        <div className="relative z-10 flex flex-col justify-end items-center h-full pb-8">
          
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're Building Something Better
          </motion.h1>
          
          <motion.div
            className="w-48 h-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          
          <motion.p
            className="text-lg text-gray-200 max-w-2xl leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Our website is undergoing scheduled maintenance to bring you an enhanced experience. We'll be back soon!
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <motion.div
          className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-2xl w-full text-center border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              className="bg-orange-100 p-6 rounded-full relative"
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            >
              <Wrench className="text-orange-600" size={52} />
              <motion.div 
                className="absolute -top-2 -right-2 bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <span className="text-white text-xs font-bold">!</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="flex items-center justify-center text-gray-700 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Clock className="mr-3 text-orange-600" size={24} />
            <p>We're working hard to improve your experience</p>
          </motion.div>

          {/* <motion.div 
            className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 text-left rounded-r-lg relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <Wrench size={80} className="text-blue-500" />
            </div>
            <h3 className="font-bold text-blue-800 mb-3 text-lg">Maintenance Details:</h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Start: August 10, 2023 - 10:00 PM IST</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Expected Completion: August 15, 2023 - 10:00 AM IST</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 rounded-full p-1 mr-2 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Updates: Follow our social media for progress</span>
              </li>
            </ul>
          </motion.div> */}

          <motion.div 
            className="space-y-6 text-left max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              Need immediate assistance?
            </h3>

            <motion.div 
              className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4">
                <Mail className="text-orange-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email us at</p>
                <a href="mailto:customercare@purbanchalcement.com" className="text-blue-600 hover:underline font-medium">
                  customercare@purbanchalcement.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-2 rounded-full mr-4">
                <Phone className="text-orange-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us at</p>
                <a href="tel:+919678017888" className="text-blue-600 hover:underline font-medium">
                  +919678017888
                </a>
              </div>
            </motion.div>
          </motion.div>

          
        </motion.div>
      </main>

      {/* Progress Bar
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full mb-8">
        <motion.div 
          className="bg-gray-200 rounded-full h-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-orange-500 to-orange-300 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ duration: 2, delay: 1 }}
          />
        </motion.div>
        <motion.p 
          className="text-right text-sm text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Maintenance progress: 65%
        </motion.p>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="mb-2">© {new Date().getFullYear()} Dalmia Cement. All rights reserved.</p>
            <p className="text-sm">We appreciate your patience during this upgrade.</p>
          </motion.div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;