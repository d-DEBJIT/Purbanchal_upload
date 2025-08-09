import React from 'react';
// pages/BlogPage.js
import BlogCard from "../../components/BlogCard";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      date: "May 15, 2023",
      author: "sarah_dev",
      readTime: "5 min",
      imageUrl: "https://source.unsplash.com/random/600x400/?coding"
    },
    {
      id: 2,
      title: "Tailwind CSS: Utility-First Approach",
      excerpt: "Discover the benefits of using Tailwind CSS and how it can speed up your development workflow.",
      date: "June 2, 2023",
      author: "mike_tailwind",
      readTime: "7 min",
      imageUrl: "https://source.unsplash.com/random/600x400/?design"
    },
    {
      id: 3,
      title: "Building Responsive Layouts",
      excerpt: "A comprehensive guide to creating responsive designs that work on all devices.",
      date: "June 18, 2023",
      author: "jane_ui",
      readTime: "8 min",
      imageUrl: "https://source.unsplash.com/random/600x400/?responsive"
    },
    {
      id: 4,
      title: "State Management in 2023",
      excerpt: "Comparing different state management solutions for modern React applications.",
      date: "July 5, 2023",
      author: "alex_state",
      readTime: "10 min",
      imageUrl: "https://source.unsplash.com/random/600x400/?data"
    },
  ];

  const categories = ["All", "React", "Tailwind", "JavaScript", "CSS", "Performance"];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest articles, tutorials and insights from our team
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="text-gray-700 hover:text-blue-600 transition-colors w-full text-left py-2 px-3 rounded hover:bg-gray-50">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
                <p className="text-gray-600 mb-3">Get the latest posts delivered to your inbox</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="md:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">Latest Posts</h2>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Latest</option>
                  <option>Popular</option>
                  <option>Oldest</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 border border-blue-500 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;