import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import SlidingSection from "../components/SlidingSection";
import AnimatedCard from "../components/AnimatedCard";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">

      {/* Hero Section */}
      <div className="bg-gray-100 flex flex-col justify-center items-center text-center py-20 px-6">
        
        {/* Company Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-extrabold text-gray-900 tracking-wide leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Taco <span className="text-blue-600">Cloud Services</span>
        </motion.h1>
        
        {/* Summary Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl text-gray-700 max-w-2xl mt-4 leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Powering businesses with scalable cloud solutions and AI-driven innovations for a smarter future.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg text-gray-600 max-w-2xl mt-2 leading-relaxed font-light"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          We help you deploy, secure, and optimize cloud solutions with cutting-edge technologies.
        </motion.p>

      </div>

      {/* Existing Content Below (Including Testimonials) */}
      <SlidingSection />

      {/* Services Section */}
      <div className="w-screen bg-blue-600 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Services We Provide
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
          <AnimatedCard title="Cloud Services" description="We provide scalable cloud solutions, ensuring seamless deployment, security, and automation to optimize performance and efficiency.">
            <button
              className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-md"
              onClick={() => navigate("/Cloud")}
            >
              Explore Cloud
            </button>
          </AnimatedCard>
          <AnimatedCard title="AI Services" description="Leverage cutting-edge AI and ML technologies to automate processes, enhance decision-making, and drive innovation.">
            <button
              className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-md"
              onClick={() => navigate("/AiServices")}
            >
              Explore AI
            </button>
          </AnimatedCard>
          <AnimatedCard title="Data Engineering Services" description="Transform raw data into actionable insights with our advanced data engineering, big data processing, and analytics solutions.">
            <button
              className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-md"
              onClick={() => navigate("/DataServices")}
            >
              Explore Data
            </button>
          </AnimatedCard>
        </div>
      </div>

      <Contact />
      
    </div>
  );
};

export default Home;
