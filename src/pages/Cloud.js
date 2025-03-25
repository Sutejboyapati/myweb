import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const cloud = [
  {
    title: "Cloud Consulting",
    description: "Expert guidance for cloud strategy, migration, and optimization.",
    icon: "💡",
  },
  {
    title: "Cloud Security",
    description: "Robust security solutions to protect cloud environments and data.",
    icon: "🔒",
  },
  {
    title: "Cloud Storage",
    description: "Scalable and secure cloud storage solutions for businesses.",
    icon: "📦",
  },
  {
    title: "DevOps & Automation",
    description: "Streamlining deployment and infrastructure management with DevOps.",
    icon: "⚙️",
  },
  {
    title: "Cloud Backup & Recovery",
    description: "Automated backups and disaster recovery strategies for business continuity.",
    icon: "🛡️",
  },
  {
    title: "AI & Big Data Cloud",
    description: "Harness AI and big data analytics with scalable cloud solutions.",
    icon: "📊",
  },
];

const Cloud = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Cloud Services</h1>
        <p className="text-lg mt-2 px-4 md:px-0">
          Unlock the full potential of cloud computing with our expert services.
        </p>
        {/* Contact Us Button */}
        <button
          onClick={() => navigate("/Contact")}
          className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Contact Us
        </button>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Cloud Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cloud.map((service, index) => (
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

export default Cloud;
