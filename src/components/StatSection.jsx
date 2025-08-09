import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const StatCard = ({ value, suffix, label, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="relative p-4 flex flex-col items-start gap-2 z-10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1 + 0.3,
          },
        },
      }}
    >
      <div className="text-gray-900 text-4xl md:text-6xl font-light">
        {inView ? (
          <CountUp
            end={value}
            duration={2}
            decimals={0}
            suffix={suffix}
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-base font-semibold text-gray-700 mt-2">{label}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      value: 17,
      suffix: "+",
      label: "Years of Excellence",
      description: "Delivering strength & reliability since 1998",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Clients Served",
      description: "Long-standing partnerships across industries",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Projects Completed",
      description: "Timely & successful deliveries across sectors",
    },
    {
      value: 100,
      suffix: "%",
      label: "Quality Assurance",
      description: "Uncompromising commitment to performance",
    },
    {
      value: 500,
      suffix: "+",
      label: "Professionals",
      description: "Skilled professionals powering our growth",
    },
    {
      value: 1000,
      suffix: "+",
      label: "Dealers",
      description: "Our Network",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-semibold text-[#3366BB] mb-2"
          >
          MAITHAN LEGACIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Building the future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-[#3366BB]">
              confidence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg mb-6"
          >
Purbanchal Cement is a proud part of the Maithan Group, a trusted name and market leader in steel, specialty alumina, refractory, and ferro alloys. Backed by decades of industrial excellence, Maithan Group has built a formidable presence across core sectors that power India’s infrastructure and manufacturing.

          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 text-lg"
          >
Carrying this legacy forward, Purbanachal cement limited though its brands Surya Gold & Surya concretec is committed to delivering high-quality cement products through advanced manufacturing, sustainable practices, and a relentless focus on customer satisfaction.
          </motion.p>
        </div>

        {/* Right Stats */}
        <motion.div
          ref={ref}
          className="lg:w-1/2 relative grid grid-cols-2 grid-rows-3 gap-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Vertical Line Between Columns */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 z-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            style={{ originY: 0.5 }}
          />

          {/* Horizontal Line Between Row 1 & 2 */}
          <motion.div
            className="absolute left-0 right-0 top-1/3 h-0.5 z-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 0.8, ease: "easeInOut" }}
            style={{ originX: 0.5 }}
          />

          {/* Horizontal Line Between Row 2 & 3 */}
          <motion.div
            className="absolute left-0 right-0 top-2/3 h-0.5 z-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 3.5, delay: 1.1, ease: "easeInOut" }}
            style={{ originX: 0.5 }}
          />

          {/* Stat Cards */}
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
