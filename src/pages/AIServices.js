import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// AI Services Data
const aiservices = [
  { title: "AI-Powered Automation", description: "Streamline workflows with intelligent automation.", icon: "🤖" },
  { title: "Machine Learning Models", description: "Custom ML solutions tailored to your business needs.", icon: "📊" },
  { title: "Natural Language Processing", description: "Advanced NLP models for chatbots and text analysis.", icon: "🗣️" },
  { title: "Computer Vision", description: "Harness AI for image and video recognition.", icon: "📷" },
  { title: "Predictive Analytics", description: "Leverage AI to forecast trends and behaviors.", icon: "📈" },
  { title: "AI Consulting", description: "Expert guidance to integrate AI into your operations.", icon: "💡" },
];

// Animation variants
const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const cardAnimation = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };
const rotateIcon = { hidden: { rotateY: 180 }, visible: { rotateY: 0, transition: { duration: 0.8 } } };
// Text animation variant
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
};

// Section fade-in animation
const sectionVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};
const AIServices = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 className="text-4xl font-bold">AI Services</motion.h1>
        <motion.p className="text-lg mt-2 px-4 md:px-0">Empowering businesses with cutting-edge artificial intelligence solutions.</motion.p>
      </motion.section>

      {/* About AI Services */}
      <motion.section
        className="container mx-auto px-6 py-12 text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 className="text-3xl font-semibold">Why Choose Our AI Services?</motion.h2>
        <motion.p className="mt-4 text-lg text-gray-700">
          We specialize in **AI-powered automation, predictive analytics, computer vision, and NLP** to drive efficiency and innovation.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 className="text-3xl font-semibold text-center mb-8">Our AI Solutions</motion.h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aiservices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate="visible"
              variants={cardAnimation}
            >
              <motion.div className="text-5xl text-blue-600" initial="hidden" animate="visible" variants={rotateIcon}>
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
              Integrate AI into Your Business
              </motion.h2>
              <motion.p className="mt-2 text-lg" variants={textVariant}>
              Discover how AI can revolutionize your operations and decision-making.
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

export default AIServices;
