import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Share2, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE =__IMAGE_BASE_PATH__;

const NewsPage = () => {
  const navigate = useNavigate();
  
  const news = [
    {
      id: 1,
      title: 'Company Announces Major Expansion in Southeast Asia',
      excerpt: 'New regional headquarters to be established in Singapore',
      content: 'The company has announced plans to establish a new regional headquarters in Singapore, marking a significant expansion of its operations in Southeast Asia. The move comes as part of a strategic initiative to strengthen presence in high-growth markets...',
      image: `${IMAGE_BASE}/expansion.jpg`,
      date: '2023-11-20',
      readTime: '4 min read',
      category: 'Business',
      featured: true,
      source: 'Business Times',
      breaking: true
    },
    {
      id: 2,
      title: 'Record Quarterly Revenue Reported',
      excerpt: '42% year-over-year growth driven by strong product demand',
      content: 'The company reported record quarterly revenue of $850 million, representing 42% year-over-year growth. This performance was driven by strong demand across all product lines and successful expansion into new markets...',
      image: `${IMAGE_BASE}/revenue.jpg`,
      date: '2023-11-15',
      readTime: '5 min read',
      category: 'Financial',
      featured: true,
      source: 'Financial Review'
    },
    {
      id: 3,
      title: 'New Sustainable Product Line Launched',
      excerpt: 'Eco-friendly alternatives now available across all categories',
      content: 'The company has launched a comprehensive line of sustainable products, offering eco-friendly alternatives across all its major product categories. This initiative represents a significant step in the company\'s sustainability commitments...',
      image: `${IMAGE_BASE}/sustainable.jpg`,
      date: '2023-11-10',
      readTime: '3 min read',
      category: 'Sustainability',
      featured: false,
      source: 'Green Business'
    },
    {
      id: 4,
      title: 'Partnership Announced with Leading Tech Firm',
      excerpt: 'Collaboration to develop next-generation solutions',
      content: 'The company has entered into a strategic partnership with a leading technology firm to develop next-generation solutions for the digital economy. The collaboration will combine expertise from both organizations...',
      image: `${IMAGE_BASE}/partnership.jpg`,
      date: '2023-11-05',
      readTime: '4 min read',
      category: 'Technology',
      featured: false,
      source: 'Tech Insights'
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleArticleClick = (article) => {
    navigate(`/news/${article.id}`);
  };

  const handleShare = async (e, article) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: `${window.location.origin}/news/${article.id}`,
        });
      } else {
        await navigator.clipboard.writeText(
          `${window.location.origin}/news/${article.id}`
        );
        showNotification('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleBookmark = (e, articleId) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || []);
    const updatedBookmarks = bookmarks.includes(articleId)
      ? bookmarks.filter((id) => id !== articleId)
      : [...bookmarks, articleId];
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    
    showNotification(
      bookmarks.includes(articleId)
        ? 'Article removed from bookmarks'
        : 'Article bookmarked!'
    );
  };

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('animate-fade-out');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header with Brand Colors */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0">
        <img
          src={`${IMAGE_BASE}/news-bg.jpg`}
          alt="Company News"
          className="w-full h-[30rem] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-600/40 to-transparent z-10" />
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
                NEWS & MEDIA
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Company <span className="text-orange-600">News</span>
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
                Stay updated with the latest news and media coverage.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breaking News Ticker */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <span className="font-bold mr-4 whitespace-nowrap">BREAKING:</span>
          <div className="overflow-hidden">
            <div className="whitespace-nowrap animate-marquee">
              {news.filter(article => article.breaking).map(article => (
                <span key={article.id} className="inline-block mr-8">
                  {article.title} • 
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Stories Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-900">Top Stories</h2>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured Story */}
            <div className="lg:col-span-2">
              {news.filter(article => article.featured).slice(0, 1).map(article => (
                <motion.article 
                  key={article.id}
                  className="group cursor-pointer"
                  onClick={() => handleArticleClick(article)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    {article.breaking && (
                      <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                        BREAKING
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className="inline-block bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-300 mt-2">
                        <span className="flex items-center mr-4">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Source: {article.source}</span>
                    <div className="flex space-x-3">
                      <button 
                        onClick={(e) => handleShare(e, article)}
                        className="text-gray-500 hover:text-orange-600 transition-colors"
                        aria-label="Share"
                      >
                        <Share2 size={18} />
                      </button>
                      <button 
                        onClick={(e) => handleBookmark(e, article.id)}
                        className="text-gray-500 hover:text-orange-600 transition-colors"
                        aria-label="Bookmark"
                      >
                        <Bookmark size={18} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Secondary Featured Stories */}
            <div className="space-y-6">
              {news.filter(article => article.featured).slice(1).map(article => (
                <motion.article
                  key={article.id}
                  className="group cursor-pointer"
                  onClick={() => handleArticleClick(article)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div>
                      <span className="inline-block bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded mb-1">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span className="flex items-center mr-3">
                          <CalendarDays className="w-3 h-3 mr-1" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
            <div className="text-sm text-gray-500">
              Updated {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.filter(article => !article.featured).map((article, index) => (
              <motion.article
                key={article.id}
                className="group cursor-pointer"
                onClick={() => handleArticleClick(article)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="inline-block bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{formatDate(article.date)} • {article.readTime}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={(e) => handleShare(e, article)}
                      className="text-gray-400 hover:text-orange-600 transition-colors"
                      aria-label="Share"
                    >
                      <Share2 size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleBookmark(e, article.id)}
                      className="text-gray-400 hover:text-orange-600 transition-colors"
                      aria-label="Bookmark"
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-orange-600"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our News</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Get the latest news and updates delivered straight to your inbox. 
              Our newsletter keeps you informed about company developments and industry insights.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 max-w-md px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-orange-600 transition-all rounded-lg"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-all rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </main>

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
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default NewsPage;