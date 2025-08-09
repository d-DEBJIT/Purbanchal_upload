/* global __IMAGE_BASE_PATH__ */
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 bg-gray-100 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold mb-3">
            ← Why Choose Us? →
          </h2>
          <p>
            <span className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Purbanchal Cement is the foundation of India's growth, trusted by
              builders big and small for its unmatched  <span class="font-bold">quality, consistency</span> and  <span class="font-bold">reliability</span>.
            </span>
          </p>
        </div>

        {/* Main Box */}
        <div
          ref={featuresRef}
          className={`grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-1000 ${
            featuresInView
              ? "opacity-100 translate-y-0 shadow-xl"
              : "opacity-0 translate-y-20"
          }`}
        >
          {/* Left Blue Panel */}
          <div className="relative bg-[#3366BB] text-white p-8 space-y-6">
            {/* Orange Tab */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-2 bg-orange-500 rounded-r animate-pulse-slow" />

            {/* Feature Items */}
            {[
              {
                icon: "https://cdn-icons-png.flaticon.com/512/3522/3522658.png",
                title: "Quality That Speaks Volumes",
                desc: "Our cement delivers long-lasting strength and consistent performance every time, for every project.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/4776/4776924.png",
                title: "Price Meets Performance",
                desc: "Premium quality at smart pricing because your project deserves the best, without the extra cost.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/10033/10033835.png",
                title: "Experience That Builds Confidence",
                desc: "With over two decades of expertise, we know how to deliver cement that builders can rely on rain or shine.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
                title: "Innovation That Powers Progress",
                desc: "Backed by cutting-edge technology and continuous R&D, we ensure every batch is stronger, safer, and more sustainable than the last.",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png",
                title: "Service That Has Your Back",
                desc: "From start to finish, our dedicated team supports your project with hassle-free, always reliable service.",
              },
            ].map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                index={idx}
                inView={featuresInView}
              />
            ))}
          </div>

          {/* Right Image Panel */}
          <div className="relative group min-h-[500px] md:min-h-full overflow-hidden">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-2 bg-orange-500 rounded-l z-20 animate-pulse-slow" />
            <div className="relative h-full w-full">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={`${__IMAGE_BASE_PATH__}/why-choose-us.png`}
                  alt="Construction site"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#003c88]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc, index, inView }) => {
  return (
    <div
      className={`flex items-start gap-4 transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-5"
      }`}
      style={{ transitionDelay: `${index * 100 + 300}ms` }}
    >
      <img
        src={icon}
        alt={title}
        className="w-6 h-6 mt-1 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
      />
      <div>
        <h3 className="font-bold text-white mb-1 group-hover:text-orange-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;