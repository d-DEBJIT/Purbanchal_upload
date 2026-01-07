import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Share2, Bookmark, ChevronLeft, ChevronRight, Search, X, ChevronLeft as LeftIcon, ChevronRight as RightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Use a relative path or your actual image base URL
const IMAGE_BASE = __IMAGE_BASE_PATH__;

// Modal Component for Image Gallery
const ImageGalleryModal = ({ isOpen, onClose, newsItem }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the gallery (main image + additional images)
  const allImages = newsItem ? [
    newsItem.image,
    ...(newsItem.additionalImages || [])
  ] : [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  if (!isOpen || !newsItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
          >
            <X size={24} className="text-gray-800" />
          </button>

          {/* Image Navigation */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <LeftIcon size={24} className="text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <RightIcon size={24} className="text-gray-800" />
              </button>
            </>
          )}

          {/* Current Image */}
          <div className="relative h-[70vh] bg-gray-100">
            <img
              src={allImages[currentImageIndex]}
              alt={`${newsItem.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 text-white text-sm rounded-full">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>

          {/* Title and Navigation Dots */}
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {newsItem.title}
            </h3>
            
            {/* Thumbnail Navigation */}
            {allImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-orange-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const NewsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  // 6 news items with multiple images - USING PLACEHOLDER IMAGES
  const news = [
    {
      id: 1,
      type: 'news',
      title: 'Environment',
      excerpt: 'New regional headquarters to be established in Singapore',
      content: 'The company has announced plans to establish a new regional headquarters in Singapore, marking a significant expansion of its operations in Southeast Asia.',
      image: `${IMAGE_BASE}/Samayik Prasanga 1.jpg`,
      additionalImages: [
        `${IMAGE_BASE}/Mizoram Post 1.jpg`,
        `${IMAGE_BASE}/EASTERN CHRONICLE 1.jpg`,
        `${IMAGE_BASE}/DAINIK PURVODAY 1.jpg`,
        `${IMAGE_BASE}/Samayik Prasanga.jpg`,
        `${IMAGE_BASE}/dainik purvoday.jpg`,
        `${IMAGE_BASE}/Guwahati Chronicle.jpg`,
        `${IMAGE_BASE}/Mizoram Post.jpg`
      ],
      date: '2023-11-20',
      readTime: '4 min read',
      category: 'Business',
      tags: ['expansion', 'business', 'asia'],
      featured: true,
      source: 'Business Times',
      breaking: true,
      author: {
        name: 'John Smith',
        role: 'Business Correspondent',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    },
    {
      id: 2,
      type: 'news',
      title: 'Felicitation',
      excerpt: '42% year-over-year growth driven by strong product demand',
      content: 'The company reported record quarterly revenue of $850 million, representing 42% year-over-year growth.',
      image: `${IMAGE_BASE}/tribune.jpg`,
      additionalImages: [
        `${IMAGE_BASE}/pratidin.jpg`,
        `${IMAGE_BASE}/niyomiya barta.jpg`,
        `${IMAGE_BASE}/dainik purvoday.jpg`,
        `${IMAGE_BASE}/dainik janambhumi.jpg`,
        `${IMAGE_BASE}/dainik agradut.jpg`,
        `${IMAGE_BASE}/amar asom.jpg`,
        `${IMAGE_BASE}/Purbanchal prahari.jpg`
      ],
      date: '2023-11-15',
      readTime: '5 min read',
      category: 'Financial',
      tags: ['financial', 'earnings', 'growth'],
      featured: true,
      source: 'Financial Review',
      author: {
        name: 'Sarah Johnson',
        role: 'Financial Analyst',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    },
    {
      id: 3,
      type: 'news',
      title: 'Health Checkup Camp',
      excerpt: 'Innovative solutions to be unveiled at CES 2024',
      content: 'The company will launch a new product line at CES 2024, featuring cutting-edge technology solutions.',
      image: `${IMAGE_BASE}/jugosankho.png`,
      additionalImages: [
        `${IMAGE_BASE}/Eastern Chjronicle.png`,
        `${IMAGE_BASE}/Asomiya Pratidin.png`,
        `${IMAGE_BASE}/Niyomiya Barta.png`,
        `${IMAGE_BASE}/Dainik Purvoday.png`,
        `${IMAGE_BASE}/Dainik Janambhumi.png`
      ],
      date: '2023-11-18',
      readTime: '3 min read',
      category: 'Technology',
      tags: ['product', 'launch', 'innovation'],
      featured: false,
      source: 'Tech Today',
      author: {
        name: 'Robert Chen',
        role: 'Tech Editor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    },
    {
      id: 4,
      type: 'news',
      title: 'Donation',
      excerpt: 'Recognized for environmental leadership in manufacturing',
      content: 'The company\'s sustainability program has received the Green Manufacturing Award 2023.',
      image: `${IMAGE_BASE}/DAINIK JUGOSHONKHO.jpg`,
      additionalImages: [
        `${IMAGE_BASE}/ASSAM TRIBUNE.jpg`,
        `${IMAGE_BASE}/the sentinal.jpg`,
        `${IMAGE_BASE}/asom barta.jpg`,
        `${IMAGE_BASE}/Asomiya Pratidin.jpg`,
        `${IMAGE_BASE}/easter chronicle.jpg`,
        `${IMAGE_BASE}/Dainik purvoday.jpg`,
        `${IMAGE_BASE}/Purbanchal prahari.jpg`
      ],
      date: '2023-11-10',
      readTime: '4 min read',
      category: 'Sustainability',
      tags: ['sustainability', 'award', 'environment'],
      featured: false,
      source: 'Eco Business',
      author: {
        name: 'Emma Wilson',
        role: 'Environmental Reporter',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    }
  ];

  // Get all unique categories
  const categories = ['all', ...new Set(news.map(item => item.category))];

  // Filter items based on active tab, search, and category
  const filteredItems = news.filter(item => {
    const matchesTab = activeTab === 'all' || item.type === activeTab;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesTab && matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery, selectedCategory]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleArticleClick = (item) => {
    navigate(`/news/${item.id}`);
  };

  const handleImageClick = (e, item) => {
    e.stopPropagation();
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleShare = async (e, item) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: item.title,
          text: item.excerpt,
          url: `${window.location.origin}/news/${item.id}`,
        });
      } else {
        await navigator.clipboard.writeText(
          `${window.location.origin}/news/${item.id}`
        );
        showNotification('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleBookmark = (e, itemId) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const updatedBookmarks = bookmarks.includes(itemId)
      ? bookmarks.filter((id) => id !== itemId)
      : [...bookmarks, itemId];
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    
    showNotification(
      bookmarks.includes(itemId)
        ? 'Removed from bookmarks'
        : 'Bookmarked!'
    );
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPages - 1) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return (
      <div className="flex items-center justify-center space-x-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        
        {pageNumbers.map((pageNum, index) => (
          pageNum === '...' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2">
              ...
            </span>
          ) : (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === pageNum
                  ? 'bg-orange-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          )
        ))}
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  };

  const renderItem = (item, index) => {
    if (viewMode === 'grid') {
      return (
        <motion.article
          key={item.id}
          className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          onClick={() => handleArticleClick(item)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
        >
          <div className="relative h-48 overflow-hidden">
            <div 
              className="w-full h-full cursor-pointer"
              onClick={(e) => handleImageClick(e, item)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
            {/* Image Gallery Indicator */}
            {item.additionalImages && item.additionalImages.length > 0 && (
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                +{item.additionalImages.length} more
              </div>
            )}
            <div className="absolute top-3 left-3">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800`}>
                NEWS
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-block bg-gray-900/70 text-white text-xs font-bold px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <CalendarDays className="w-4 h-4 mr-1" />
              {formatDate(item.date)}
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              {item.readTime}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-2">
              {item.title}
            </h3>
            
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <img 
                  src={item.author.avatar} 
                  alt={item.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.author.name}</p>
                  <p className="text-xs text-gray-500">{item.author.role}</p>
                </div>
              </div> */}
              
              <div className="flex space-x-2">
                <button 
                  onClick={(e) => handleShare(e, item)}
                  className="p-2 text-gray-400 hover:text-orange-600 transition-colors rounded-full hover:bg-gray-100"
                  aria-label="Share"
                >
                  <Share2 size={18} />
                </button>
                <button 
                  onClick={(e) => handleBookmark(e, item.id)}
                  className="p-2 text-gray-400 hover:text-orange-600 transition-colors rounded-full hover:bg-gray-100"
                  aria-label="Bookmark"
                >
                  <Bookmark size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      );
    } else {
      // List view
      return (
        <motion.article
          key={item.id}
          className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 mb-4 p-4 border border-gray-100"
          onClick={() => handleArticleClick(item)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ x: 4 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div 
                className="relative h-40 md:h-full rounded-lg overflow-hidden cursor-pointer"
                onClick={(e) => handleImageClick(e, item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                {item.additionalImages && item.additionalImages.length > 0 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    +{item.additionalImages.length} more
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800`}>
                    NEWS
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {item.category}
                </span>
                <div className="flex items-center text-xs text-gray-500">
                  <CalendarDays className="w-3 h-3 mr-1" />
                  {formatDate(item.date)}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.readTime}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {item.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={item.author.avatar} 
                    alt={item.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.author.name}</p>
                    <p className="text-xs text-gray-500">{item.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={(e) => handleShare(e, item)}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={18} />
                  </button>
                  <button 
                    onClick={(e) => handleBookmark(e, item.id)}
                    className="text-gray-400 hover:text-orange-600 transition-colors"
                    aria-label="Bookmark"
                  >
                    <Bookmark size={18} />
                  </button>
                  <span className="text-gray-400 group-hover:text-orange-600 transition-colors">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newsItem={selectedItem}
      />

      {/* Header */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${__IMAGE_BASE_PATH__}/utsav-srestha-HeNrEdA4Zp4-unsplash.jpg`}
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/40 to-transparent z-10" />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block text-white text-sm font-bold tracking-tight mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                LATEST NEWS
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Stay <span className="text-orange-600">Informed</span> & <span className="text-orange-600">Updated</span>
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
                Latest company news, announcements, and industry updates.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Controls & Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search & View Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full sm:w-64"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length} items
            </span>
            {searchQuery && (
              <span className="text-orange-600">
                Search: "{searchQuery}"
              </span>
            )}
            {selectedCategory !== 'all' && (
              <span className="text-blue-600">
                Category: {selectedCategory}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* All Items */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Latest News
            </h2>
            <div className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {currentItems.length > 0 ? (
            <>
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {currentItems.map((item, index) => renderItem(item, index))}
              </div>
              
              {/* Pagination */}
              {renderPagination()}
            </>
          ) : null}
        </section>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 my-12 rounded-xl border border-blue-100"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Never Miss an Update</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Subscribe to our newsletter and get the latest news delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 max-w-md px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all rounded-lg"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold hover:from-orange-700 hover:to-orange-600 transition-all rounded-lg shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </motion.div>
      </main>

      {/* Global Styles */}
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
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
};

export default NewsPage;