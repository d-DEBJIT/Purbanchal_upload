import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Tag } from 'lucide-react';

const BlogNewsSection = () => {
  const [expandedAuthor, setExpandedAuthor] = useState(null);

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of Heavy Machinery in Construction',
      excerpt: 'Exploring how innovative technologies are transforming the construction equipment industry.',
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer',
        bio: 'With 15 years experience in heavy machinery development and innovation',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80'
      },
      heading: 'Industry Insights',
      date: '2024-04-05',
      readTime: '10 min',
      likes: '7K',
      comments: '426',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tags: ['Technology', 'Innovation', 'Construction']
    },
    {
      id: 2,
      title: 'Sustainable Practices in Equipment Manufacturing',
      excerpt: 'How Purbanchal is leading the way in eco-friendly heavy equipment production.',
      author: {
        name: 'Priya Sharma',
        role: 'Sustainability Officer',
        bio: 'Head of Environmental Initiatives at Purbanchal Cement',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
      },
      heading: 'Green Tech',
      date: '2024-05-21',
      readTime: '15 min',
      likes: '3.9K',
      comments: '116',
      image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=800&q=80',
      tags: ['Sustainability', 'Eco-friendly', 'Manufacturing']
    },
    {
      id: 3,
      title: 'Safety Innovations in Heavy Equipment Operation',
      excerpt: 'New technologies making construction sites safer for operators and workers.',
      author: {
        name: 'Amit Patel',
        role: 'Safety Director',
        bio: 'Developed award-winning safety protocols for heavy machinery operations',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
      },
      heading: 'Safety First',
      date: '2024-06-15',
      readTime: '8 min',
      likes: '5.2K',
      comments: '342',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
      tags: ['Safety', 'Technology']
    }
  ];

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  const toggleAuthorDetails = (postId) => {
    setExpandedAuthor(prev => prev === postId ? null : postId);
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/esg-pattern.png')] bg-no-repeat bg-right bg-contain opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Purbanchal Cement →
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Blogs and News
          </h1>
          <div className="flex justify-center gap-2 mb-6">
            {['Industry Updates', 'Technology', 'Sustainability'].map((tag, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
            Discover the latest updates, technologies, and stories from the heart of Purbanchal Cement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="w-2 h-6 bg-orange-500 mr-3 rounded-full"></span>
                Featured Articles
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                In-depth analysis and thought leadership from our industry experts
              </p>
            </div>

            {featuredPosts.map(post => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 border-b-4 border-r-4 border-[#3366bb] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <button onClick={() => toggleAuthorDetails(post.id)}>
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-[#3366bb] transition" />
                      </button>
                      <div className="text-xs text-gray-600">
                        In <span className="font-semibold">{post.heading}</span> by{' '}
                        <button onClick={() => toggleAuthorDetails(post.id)} className="font-medium text-gray-700 hover:text-[#3366bb]">
                          {post.author.name}
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          <Tag size={12} className="mr-1" />{tag}
                        </span>
                      ))}
                    </div>

                    {expandedAuthor === post.id && (
                      <div className="bg-white p-3 rounded-lg shadow-md mb-3 border border-gray-200 text-sm">
                        <div className="flex items-start gap-3">
                          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                          <div>
                            <h4 className="font-bold">{post.author.name}</h4>
                            <p className="text-xs text-[#3366bb]">{post.author.role}</p>
                            <p className="text-xs text-gray-600 mt-1">{post.author.bio}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#3366bb] transition-colors">{post.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#3366bb]" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-[#3366bb]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex items-center gap-1 hover:text-[#3366bb]">
                          <Heart size={14} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-[#3366bb]">
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6 sticky top-6 h-fit">
            {/* Featured News Heading */}
            <div className="bg-white p-4 rounded-lg shadow-sm border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="w-2 h-6 bg-[#3366bb] mr-3 rounded-full"></span>
                Featured News
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Highlighted updates shaping our industry
              </p>
            </div>

            {/* Highlight Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=800&q=80"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt="Highlight"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-5 flex items-end">
                  <div>
                    <span className="text-xs font-medium text-[#3366bb] mb-1 block">Today's Featured</span>
                    <h3 className="text-white text-xl font-bold">Tech & Safety Drive Growth</h3>
                    <div className="flex gap-2 text-xs text-white/80 mt-2">
                      <span>{formatDate('2024-07-15')}</span>
                      <span>•</span>
                      <span>8 min</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {['Technology', 'Safety', 'Innovation'].map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Updates */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">Recent Updates</h4>
                  <span className="text-xs text-gray-500">Updated daily</span>
                </div>
                <div className="space-y-4 mb-6">
                  {featuredPosts.map(post => (
                    <div key={post.id} className="flex gap-3 items-start pb-3 border-b border-gray-100 group">
                      <div className="w-16 h-16 rounded overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="absolute w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-[#3366bb] transition-colors">{post.title}</h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex gap-1 items-center">
                    <Clock size={12} className="text-[#3366bb]" />
                    <span>Updated: {new Date().toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}</span>
                  </div>
                  <span>{featuredPosts.length} Articles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All */}
        <motion.div 
          className="text-center mt-12" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          viewport={{ once: true }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#3366bb] text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-[#274f9e] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            View All
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogNewsSection;
