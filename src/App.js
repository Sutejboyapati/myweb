import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cloud from "./pages/Cloud";
import AIServices from "./pages/AIServices";
import Careers from "./pages/Carriers";
import ContactPage from "./pages/ContactPage";
import Insights from "./pages/insights";
import DataServices from "./pages/DataServices";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/aiservices" element={<AIServices />} />
        <Route path="/dataservices" element={<DataServices />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;