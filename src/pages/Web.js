import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Web Services Data
const web = [
  { title: "Custom Web Development", description: "Tailor-made websites for businesses.", icon: "🛠️" },
  { title: "E-Commerce Solutions", description: "Seamless online shopping experiences.", icon: "🛒" },
  { title: "SEO & Digital Marketing", description: "Boost visibility and grow your audience.", icon: "📈" },
  { title: "Web Hosting & Security", description: "Reliable hosting with top-notch security.", icon: "🔒" },
  { title: "UI/UX Design", description: "Visually stunning and user-friendly interfaces.", icon: "🎨" },
  { title: "Web App Development", description: "Powerful and scalable web applications.", icon: "💻" },
];

// Animation variants
const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const cardAnimation = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };
const rotateIcon = { hidden: { rotateY: 180 }, visible: { rotateY: 0, transition: { duration: 0.8 } } };

const Web = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-200 text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-600 text-white py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1 className="text-4xl font-bold">Web Services</motion.h1>
        <motion.p className="text-lg mt-2 px-4 md:px-0">Premium solutions to elevate your online presence.</motion.p>
      </motion.section>

      {/* About Web Services */}
      <motion.section
        className="container mx-auto px-6 py-12 text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 className="text-3xl font-semibold">Why Choose Our Web Services?</motion.h2>
        <motion.p className="mt-4 text-lg text-gray-700">
          Our expertise covers **custom development, SEO, hosting, and security**—helping businesses thrive online.
        </motion.p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 className="text-3xl font-semibold text-center mb-8">Our Web Solutions</motion.h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {web.map((service, index) => (
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
      <motion.section
        className="bg-blue-600 text-white text-center py-12 mt-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 className="text-3xl font-bold">Start Your Web Project Today</motion.h2>
        <motion.p className="mt-2 text-lg">Let’s build a powerful website for your business.</motion.p>
        <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/Contact")} // Navigate to Contact page
            >
              Contact us
            </motion.button>
      </motion.section>
    </div>
  );
};

export default Web;
