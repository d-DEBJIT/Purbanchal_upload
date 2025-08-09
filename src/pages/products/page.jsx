import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check, Shield, Truck, ShoppingCart, X } from 'lucide-react';

const IMAGE_BASE = __IMAGE_BASE_PATH__;

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Concrete',
      description: 'High-quality steel beams for structural applications with superior load-bearing capacity.',      longDescription: 'Dalmia Cement has been designed to provide quality that lasts a lifetime. Our advanced formulation ensures superior strength and durability for all construction needs.',
      category: 'Premium',
      price: 249.99,
      rating: 4.8,
      features: ['High quality', 'Long-lasting', 'Innovative technology'],
      specifications: [
        { name: 'Compressive Strength', value: '53 MPa' },
        { name: 'Setting Time', value: '30-45 minutes' },
        { name: 'Packaging', value: '50kg bags' }
      ],
      image: `${IMAGE_BASE}/middle.png`,
      isNew: true,
      isFeatured: true,
      stock: 150
    },
    {
      id: 2,
      name: 'PPC',
      description: 'Aesthetic and durable metal panels for modern architectural facades and interiors.',      longDescription: 'Dalmia Supreme Cement is engineered for superior performance across all construction applications. Its unique formulation provides excellent workability and finish.',
      category: 'Premium',
      price: 189.50,
      rating: 4.6,
      features: ['Best-in-class', 'Versatile', 'High strength'],
      specifications: [
        { name: 'Compressive Strength', value: '43 MPa' },
        { name: 'Setting Time', value: '45-60 minutes' },
        { name: 'Packaging', value: '50kg bags' }
      ],
      image: `${IMAGE_BASE}/left.png`,
      isNew: false,
      isFeatured: true,
      stock: 85
    },
    {
      id: 3,
      name: 'OPC',
      description: 'Corrosion-resistant piping solutions for industrial fluid transport applications.',      longDescription: 'Dalmia USP cement is specially formulated to deliver high-strength concrete required for critical structural elements like foundations, columns and slabs.',
      category: 'Specialized',
      price: 329.99,
      rating: 4.9,
      features: ['High strength', 'Specialized formula', 'Foundations & slabs'],
      specifications: [
        { name: 'Compressive Strength', value: '63 MPa' },
        { name: 'Setting Time', value: '25-40 minutes' },
        { name: 'Packaging', value: '50kg bags' }
      ],
      image: `${IMAGE_BASE}/right.png`,
      isNew: true,
      isFeatured: false,
      stock: 42
    },
    {
      id: 4,
      name: 'Fresh Bulk Cement',
      description: 'Tailored metal solutions designed to meet your specific project requirements.',      longDescription: 'Konark Cement has been a market leader since 1952, known for its consistent quality and reliability. Ideal for all general construction purposes.',
      category: 'Classic',
      price: 199.99,
      rating: 4.7,
      features: ['Trusted brand', 'Since 1952', 'High quality'],
      specifications: [
        { name: 'Compressive Strength', value: '33 MPa' },
        { name: 'Setting Time', value: '60-90 minutes' },
        { name: 'Packaging', value: '50kg bags' }
      ],
      image: `${IMAGE_BASE}/custom-fabrication.jpg`,
      isNew: false,
      isFeatured: false,
      stock: 120
    },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Dalmia Cement', name: 'Dalmia Cement' },
    { id: 'Dalmia Supreme', name: 'Dalmia Supreme' },
    { id: 'Dalmia USP Cement', name: 'Dalmia USP Cement' },
    { id: 'Konark Cement', name: 'Konark Cement' },
  ];

  const handleExploreClick = (e, product) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  const handleQuickAdd = (e, productId) => {
    e.stopPropagation();
    showNotification('Contact Us!');
  };

  const closeModal = () => {
    setSelectedProduct(null);
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

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.name === selectedCategory);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Header with Brand Colors */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${IMAGE_BASE}/concrete.jpeg`}
            alt="Our Products"
            className="w-full h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3366BB] via-[#3366BB] to-[#3366BB]" />
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
                OUR PRODUCT CATALOG
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Premium <span className="text-orange-600">Cement Products</span>
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
                High-quality cement products engineered for performance and durability.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products Banner */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <span className="font-bold mr-2">FEATURED:</span>
          <span>New Sustainable Product Line Now Available </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* All Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-900">Our Cement Products</h2>
            <div className="text-sm text-gray-500">
              Showing {products.length} products
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div className="p-6 flex flex-col md:flex-row gap-6 h-full">
                  {/* Product Image */}
                  <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-50 rounded-lg p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 object-contain"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="w-full md:w-1/3 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>
                    <div className="flex items-center">
                      <button
                        onClick={(e) => handleExploreClick(e, product)}
                        className="flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                      >
                        EXPLORE
                        <ArrowRight className="ml-1" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                {index < filteredProducts.length - 1 && (
                  <div className="border-t border-gray-200 mx-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Product Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-orange-600"
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
                <p className="text-gray-600">
                  Every product undergoes rigorous testing to meet industry standards and your expectations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Durability Guaranteed</h4>
                <p className="text-gray-600">
                  Our materials are selected for their strength and longevity, ensuring lasting performance.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-orange-600" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Reliable Delivery</h4>
                <p className="text-gray-600">
                  On-time shipments with careful packaging to ensure your products arrive in perfect condition.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#3366BB] to-[#3366BB] text-white p-8 my-12 rounded-lg"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need Custom Concrete Solutions?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Our construction team specializes in delivering custom concrete solutions tailored to your exact needs.
              From unique structural designs to specialized concrete mixes, we turn your vision into a durable reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-[#3366BB] font-semibold hover:bg-gray-100 transition-all rounded-lg">
                Request a Quote
              </button>
              <button className="px-6 py-3 border border-white text-white font-semibold hover:bg-white/10 transition-all rounded-lg">
                Contact Our Engineers
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
            aria-hidden="true"
            onClick={closeModal}
          />
          {/* Modal Content */}
          <div className="flex items-center justify-center min-h-screen pt-20 px-4 pb-4 text-center ">
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                  >
                    <X size={24} />
                  </button>

                  {/* Product Image */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="max-h-80 object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedProduct.name}
                        </h3>
                        
                        <div className="flex items-center mb-4">
                          <div className="flex items-center mr-4">
                            <Star className="text-orange-500 fill-orange-500 mr-1" size={18} />
                            <span className="text-gray-700">{selectedProduct.rating}</span>
                          </div>
                          <span className="text-gray-500">{selectedProduct.category}</span>
                        </div>

                        <p className="text-gray-600 mb-6">
                          {selectedProduct.longDescription}
                        </p>

                        {/* Specifications */}
                        <div className="mb-6">
                          <h4 className="font-bold text-lg mb-3">Specifications</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {selectedProduct.specifications.map((spec, index) => (
                              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                                <h5 className="text-sm font-medium text-gray-500">{spec.name}</h5>
                                <p className="text-gray-900 font-medium">{spec.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-bold text-lg mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {selectedProduct.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={(e) => {
                              closeModal();
                              handleQuickAdd(e, selectedProduct.id);
                            }}
                            className="flex-1 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors flex items-center justify-center"
                          >
                            Contact Sales
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

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

export default ProductsPage;