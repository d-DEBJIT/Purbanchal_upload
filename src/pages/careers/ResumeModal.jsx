import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  X,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ResumeModal = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  onInputChange,
  onFileChange,
  experienceOptions
}) => {
  const modalRef = useRef(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus on modal when it opens
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop (not modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (e) => {
    // Prevent click from bubbling up to backdrop
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <motion.div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        />
        
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        {/* Modal panel */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative"
          onClick={handleModalClick}
          tabIndex={-1}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h3 id="modal-title" className="text-2xl font-bold text-gray-900">
                Submit Your Resume
              </h3>
              <p className="mt-1 text-gray-600">
                We'll contact you when a suitable position opens up
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3366BB] focus:ring-offset-2"
              aria-label="Close modal"
              type="button"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal form */}
          <form onSubmit={onSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline-block w-4 h-4 mr-1" />
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3366BB] focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline-block w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3366BB] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline-block w-4 h-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3366BB] focus:border-transparent transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Preferred Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="inline-block w-4 h-4 mr-1" />
                  Preferred Position
                </label>
                <input
                  id="position"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={onInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3366BB] focus:border-transparent transition-colors"
                  placeholder="e.g., Production Engineer"
                />
              </div>

              {/* Experience Level */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {experienceOptions.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={option}
                        checked={formData.experience === option}
                        onChange={onInputChange}
                        required
                        className="mr-2 text-[#3366BB] focus:ring-[#3366BB]"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline-block w-4 h-4 mr-1" />
                Cover Letter / Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3366BB] focus:border-transparent transition-colors resize-none"
                placeholder="Tell us why you'd like to join Surya Cement..."
              />
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="inline-block w-4 h-4 mr-1" />
                  Resume / CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={onFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <label 
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (Max. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                {formData.resume && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <CheckCircle size={16} className="mr-1" />
                    {formData.resume.name}
                  </p>
                )}
              </div>

              {/* Cover Letter Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="inline-block w-4 h-4 mr-1" />
                  Cover Letter (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    onChange={onFileChange}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <label 
                    htmlFor="coverLetter"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-1 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (Max. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                {formData.coverLetter && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <CheckCircle size={16} className="mr-1" />
                    {formData.coverLetter.name}
                  </p>
                )}
              </div>
            </div>

            {/* Form footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#3366BB] text-white font-medium rounded-lg hover:bg-[#2a5599] transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-[#3366BB] focus:ring-offset-2"
                >
                  Submit Application
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeModal;