import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, Clock, Share2, Bookmark } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const news = [
    {
      id: 1,
      title: 'Company Announces Major Expansion in Southeast Asia',
      excerpt: 'New regional headquarters to be established in Singapore',
      content: 'The company has announced plans to establish a new regional headquarters in Singapore, marking a significant expansion of its operations in Southeast Asia. The move comes as part of a strategic initiative to strengthen presence in high-growth markets.\n\n' +
      'Key details of the expansion include:\n' +
      '- $150 million investment over 3 years\n' +
      '- Creation of 500 new jobs\n' +
      '- Focus on digital transformation services\n' +
      '- Partnership with local universities for R&D\n\n' +
      'CEO Jane Smith stated: "This expansion represents our commitment to the Southeast Asian market and our confidence in the region\'s growth potential. Singapore\'s strategic location and business-friendly environment make it the ideal hub for our regional operations."\n\n' +
      'The new facility is scheduled to open in Q2 2024 and will serve as the company\'s APAC headquarters.',
      image: '/images/news/expansion.jpg',
      date: '2023-11-20',
      readTime: '4 min read',
      category: 'Business',
      featured: true,
      source: 'Business Times'
    },
    {
      id: 2,
      title: 'Record Quarterly Revenue Reported',
      excerpt: '42% year-over-year growth driven by strong product demand',
      content: 'The company reported record quarterly revenue of $850 million, representing 42% year-over-year growth. This performance was driven by strong demand across all product lines and successful expansion into new markets.\n\n' +
      'Financial highlights:\n' +
      '- Revenue: $850M (up 42% YoY)\n' +
      '- Net income: $120M (up 58% YoY)\n' +
      '- Operating margin: 18.5% (up from 15.2%)\n' +
      '- Cash reserves: $1.2B\n\n' +
      'CFO Michael Johnson commented: "Our strong financial performance reflects the successful execution of our growth strategy and the increasing adoption of our solutions across industries. We continue to see robust demand in all geographic regions."\n\n' +
      'The company raised its full-year guidance and announced a $500 million share repurchase program.',
      image: '/images/news/revenue.jpg',
      date: '2023-11-15',
      readTime: '5 min read',
      category: 'Financial',
      featured: true,
      source: 'Financial Review'
    }
  ];

  const article = news.find(item => item.id === Number(id)) || news[0];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleShare = async (e) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showNotification('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const updatedBookmarks = bookmarks.includes(article.id)
      ? bookmarks.filter((id) => id !== article.id)
      : [...bookmarks, article.id];
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    
    showNotification(
      bookmarks.includes(article.id)
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
    <div className="min-h-screen bg-gray-50">
      {/* Article Header Section */}
      <motion.section 
        className="relative bg-blue-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
          <div className="text-left">
            <motion.button
              onClick={() => navigate('/news')}
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
              aria-label="Back to news"
              whileHover={{ x: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to News
            </motion.button>
            
            <div className="mb-4">
              <span className="text-xs font-semibold text-white bg-orange-600 px-3 py-1 rounded">
                {article.category}
              </span>
              {article.source && (
                <span className="ml-3 text-sm text-white/80">{article.source}</span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Article Content Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex justify-end gap-3 mb-6">
                <motion.button 
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Share article"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </motion.button>
                <motion.button 
                  onClick={handleBookmark}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Bookmark article"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
              
              <div className="prose max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <motion.p 
                    key={index} 
                    className="text-gray-700 leading-relaxed mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                    #{article.category.replace(/\s+/g, '')}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                    #CompanyUpdates
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                    #IndustryNews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Articles Section */}
      <motion.section 
        className="pb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Related News
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news
              .filter(item => item.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <motion.article
                  key={relatedArticle.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-200"
                  onClick={() => navigate(`/news/${relatedArticle.id}`)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-gray-100 px-2 py-1 rounded">
                        {relatedArticle.category}
                      </span>
                      {relatedArticle.source && (
                        <span className="text-xs text-gray-500">{relatedArticle.source}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedArticle.title}</h3>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
                      <div className="text-xs text-gray-500">
                        {formatDate(relatedArticle.date)}
                      </div>
                      <div className="flex items-center text-sm text-blue-600 font-medium">
                        Read more
                        <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Subscription Section */}
      <motion.div 
        className="bg-blue-600 rounded-lg mx-6 md:mx-10 xl:mx-auto mb-16 p-8 max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-6">
            Subscribe to receive the latest news and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-orange-600"
              required
            />
            <motion.button 
              type="submit" 
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        .prose {
          line-height: 1.75;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
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

export default NewsArticlePage;