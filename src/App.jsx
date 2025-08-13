import React from "react"; // ✅ Add this
import { Routes, Route } from 'react-router-dom';

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
import ProjectSection from "./components/ProjectSection"; // Import the new ProjectSection component
import ConstructionCTA from "./components/ConstructionCTA"; // Import the new component 
import CSRSection from "./components/CSR";
import AboutSection from "./components/AboutSection"; // Import the new AboutSection component
import SustainabilitySection from "./components/Sustainability"; // Import the SustainabilitySection component
import BlogPage from './pages/blogs/page';
import NewsPage from './pages/news/page';
import NewsArticlePage from "./pages/news/[title]/page";
import ProductPage from "./pages/products/page";
import MaintenancePage from "./pages/maintenance/page";
import ManufacturingProcessPage from "./pages/Manufacturing/page";
import CustomerCarePage from "./pages/customercare/page";
import ProfilePage from "./pages/profile/page";
function HomePage(){
  return (
      <>
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
      </>
  );
}


function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Topbar />
        <Navbar />
        <Routes>
          {/* ✅ Match homepage route */}
          <Route path="/" element={<HomePage />} />
          {/* News page */}
          <Route path="/pages/news" element={<NewsPage />} />
          <Route path="/pages/news/article" element={<NewsArticlePage />} />

          {/* Blogs page */}
          <Route path="/pages/blogs" element={<BlogPage />} />
          {/* products page */}
          <Route path="/pages/products" element={<ProductPage />} />
          {/* Maintenance page */}
          <Route path="/pages/maintenance" element={<MaintenancePage />} />
          {/* Manufacturing page */}
          <Route path="/pages/manufacturing" element={<ManufacturingProcessPage />} />
          {/* Customer Care page */}
          <Route path="/pages/customercare" element={<CustomerCarePage />} />
          {/* Profile page ProfilePage */}
          <Route path="/pages/profile" element={<ProfilePage />} />



        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;
