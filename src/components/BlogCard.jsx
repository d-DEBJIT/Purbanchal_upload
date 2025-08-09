// components/BlogCard.js
const BlogCard = ({ title, excerpt, date, author, imageUrl, readTime }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} read</span>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300 mr-3 overflow-hidden">
            <img 
              src={`https://i.pravatar.cc/150?u=${author}`} 
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-700">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;