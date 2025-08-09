import React from "react"; // ✅ Add this
import "./App.css";
import ManufacturingProcess from "./components/ManufacturingProcess";
import StatsSection from "./components/StatSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ToolsSection from "./components/ToolsSection";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Addition from "./components/Additional";
import Testimonials from "./components/TestimonialsSection";
import StrengthLineup from "./components/StrengthLineup";
import BlogNewsSection from "./components/BlogNewsSection";
import Footer from "./components/Footer";
import LegacySection from "./components/LegacySection";
import ProjectSection from "./components/ProjectSection"; // Import the new ProjectSection component
import ConstructionCTA from "./components/ConstructionCTA"; // Import the new component 
import CSRSection from "./components/CSR";
import AboutSection from "./components/AboutSection"; // Import the new AboutSection component
import SustainabilitySection from "./components/Sustainability"; // Import the SustainabilitySection component
const Home =()=> {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <HeroSection />  
        <StatsSection/>      
        <AboutSection />
        <Addition />        
        <StrengthLineup />
        <ToolsSection />
        <WhyChooseUs />
        <ManufacturingProcess />
        <SustainabilitySection />
        <ProjectSection />
        <Testimonials />
        <CSRSection />
        <BlogNewsSection />
        <ConstructionCTA /> 
        <LegacySection />
        {/* <div className="h-20"></div> */}
      </div>
    </main>
  );
}

export default Home;
