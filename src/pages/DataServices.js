import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Sample data services data
const dataservices = [
  {
    title: "Data Engineering",
    description: "Building scalable data pipelines and infrastructure.",
    icon: "🛠️",
  },
  {
    title: "Data Analytics",
    description: "Transforming raw data into valuable business insights.",
    icon: "📊",
  },
  {
    title: "Big Data Solutions",
    description: "Handling and processing large-scale datasets efficiently.",
    icon: "🌐",
  },
  {
    title: "Cloud Data Management",
    description: "Secure and scalable cloud-based data storage solutions.",
    icon: "☁️",
  },
  {
    title: "Data Governance & Security",
    description: "Ensuring data privacy, compliance, and security standards.",
    icon: "🔒",
  },
  {
    title: "ETL & Data Integration",
    description: "Extracting, transforming, and loading data seamlessly.",
    icon: "🔄",
  },
];

// Text animation variant
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
};

// Card animation variant
const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

// Section fade-in animation
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const DataServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <motion.h1 className="text-5xl font-bold" variants={textVariant}>
          Data Services
        </motion.h1>
        <motion.p className="text-lg mt-2 px-4 md:px-0" variants={textVariant}>
          Empowering businesses with reliable and scalable data solutions.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section className="container mx-auto px-6 py-12" variants={sectionVariant}>
        <motion.h2 className="text-4xl font-semibold text-center mb-8" variants={textVariant}>
          Our Data Solutions
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dataservices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              variants={cardVariant}
            >
              <motion.div className="text-5xl" initial={{ rotateY: 180 }} animate={{ rotateY: 0 }} transition={{ duration: 0.8 }}>
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="bg-gray-100 text-blue-600 text-center py-12 mt-12" variants={sectionVariant}>
        <motion.h2 className="text-3xl font-bold" variants={textVariant}>
          Ready to Optimize Your Data?
        </motion.h2>
        <motion.p className="mt-2 text-lg" variants={textVariant}>
          Let’s build scalable and intelligent data solutions together.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/Contact")}
        >
          Contact us
        </motion.button>
      </motion.section>
    </div>
  );
};

export default DataServices;
