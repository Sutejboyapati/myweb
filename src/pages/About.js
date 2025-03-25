import React from "react";
import { motion } from "framer-motion";

// Services Data
const services = [
  {
    title: "AI & Machine Learning",
    description: "Innovative AI solutions to automate processes and drive insights.",
    icon: "🤖",
  },
  {
    title: "Cloud Computing",
    description: "Scalable and secure cloud solutions for modern businesses.",
    icon: "☁️",
  },
  {
    title: "Data Engineering",
    description: "Building robust data pipelines to power intelligent decision-making.",
    icon: "📊",
  },
  {
    title: "Cybersecurity",
    description: "Protecting your digital assets with cutting-edge security solutions.",
    icon: "🔒",
  },
  {
    title: "Big Data Analytics",
    description: "Leveraging data analytics to extract meaningful business insights.",
    icon: "📈",
  },
  {
    title: "DevOps & Automation",
    description: "Enhancing efficiency with automated deployment and infrastructure.",
    icon: "⚙️",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 bg-blue-100">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-600 tracking-wide">About Us</h1>
          <p className="text-xl mt-6 leading-relaxed text-gray-700">
            At Taco Cloud Services, we are passionate about harnessing technology to transform businesses.
            Our expertise in AI, cloud computing, and data engineering helps organizations adapt to an
            ever-evolving digital landscape.
          </p>
          <p className="text-xl mt-4 leading-relaxed text-gray-700">
            From **startups to large enterprises**, we help organizations modernize operations, enhance
            security, and optimize workflows using cutting-edge technology. Our goal is to empower
            businesses with future-ready solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-blue-600">Who We Are</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Taco Cloud Services is a technology-driven company committed to providing scalable, secure, and
            innovative solutions. Our team of experts specializes in AI, cloud computing, cybersecurity, and
            automation, ensuring businesses stay ahead in a competitive market.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            We collaborate closely with clients to tailor solutions that enhance productivity and growth.
            Whether deploying robust cloud solutions or securing critical infrastructure, we focus on delivering
            impactful, future-proof technology.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-blue-600">Why Choose Us?</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Choosing Taco Cloud Services means partnering with a team of innovators and problem-solvers.
            Our commitment to excellence, reliability, and innovation sets us apart. Here's why businesses trust us:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left mt-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600">🚀 Cutting-Edge Technology</h3>
              <p className="mt-2 text-gray-700">
                We stay ahead of the curve by implementing the latest AI and cloud advancements.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600">⚙️ Customized Solutions</h3>
              <p className="mt-2 text-gray-700">
                Every business is unique, and so are our solutions, tailored to meet your specific needs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600">🔐 Security & Compliance</h3>
              <p className="mt-2 text-gray-700">
                We ensure top-tier security measures to protect your data and infrastructure.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600">👨‍💻 Expert Team</h3>
              <p className="mt-2 text-gray-700">
                Our skilled professionals bring years of industry experience to deliver the best results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-blue-600 text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
