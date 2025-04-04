import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for name: only alphabets (no numbers or special characters)
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrorMessage("Name should contain only alphabets.");
      return;
    } else {
      setErrorMessage(""); // Clear error when input is valid
    }

    // Update form data
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_h0sz9l2", // Service ID
        "template_3v5gvtk", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "A360nBYR6z2Sq_OiE" // Public Key
      )
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrorMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 via-white to-blue-600 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-blue-600 mb-6"
        >
          Contact Us
        </motion.h2>

        {successMessage && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-600 text-center mb-4 font-semibold"
          >
            {successMessage}
          </motion.p>
        )}

        {errorMessage && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-red-600 text-center mb-4 font-semibold"
          >
            {errorMessage}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <label className="block text-black font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <label className="block text-black font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <label className="block text-black font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              className="w-full p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
