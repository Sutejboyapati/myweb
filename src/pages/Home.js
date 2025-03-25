import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import VantaBackground from "../components/VantaBackground";
import SlidingSection from "../components/SlidingSection";
import AnimatedCard from "../components/AnimatedCard";
import Contact from "./Contact";

const Home = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <div className="relative min-h-screen">
      {/* Vanta Background */}
      <VantaBackground />

      {/* Content above Vanta */}
      <div className="relative z-10">
        <SlidingSection />

        {/* Services Section */}
        <div className="w-screen bg-blue-600 py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Services We Provide
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
            <AnimatedCard title="Cloud Services" description="Cloud solutions for all businesses.">
              <button
                className="mt-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition-all transform hover:scale-105"
                onClick={() => navigate("/Cloud")}
              >
                Explore Cloud
              </button>
            </AnimatedCard>
            <AnimatedCard title="Web Development" description="Modern web development solutions.">
              <button
                className="mt-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition-all transform hover:scale-105"
                onClick={() => navigate("/Web")}
              >
                Explore Web
              </button>
            </AnimatedCard>
            <AnimatedCard title="Design Services" description="Creative design services.">
              <button
                className="mt-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition-all transform hover:scale-105"
                onClick={() => navigate("/Design")}
              >
                Explore Design
              </button>
            </AnimatedCard>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default Home;
