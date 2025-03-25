import React from "react";
import { motion } from "framer-motion";

// Sample services data
const services = [
  {
    title: "Web Development",
    description: "We craft responsive and high-performing websites with modern technologies.",
    icon: "🌐",
  },
  {
    title: "Cloud Solutions",
    description: "Empower your business with scalable cloud infrastructure and services.",
    icon: "☁",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces that engage users.",
    icon: "🎨",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2 px-4 md:px-0">
          We are passionate about delivering top-notch technology solutions to help businesses grow.
        </p>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 py-12 text-center max-w-4xl">
        <h2 className="text-3xl font-semibold">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to our tech-driven world! We specialize in web development, cloud computing, and 
          UI/UX design. Our mission is to empower businesses with cutting-edge technology, 
          ensuring they stay ahead in the digital landscape.
        </p>
      </section>

      {/* Animated Service Cards */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
