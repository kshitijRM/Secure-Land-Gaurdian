import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import BusinessModel from "@/components/BusinessModel";
import Swot from "@/components/Swot";
import TargetUsers from "@/components/TargetUsers";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FeatureDetail from "@/pages/FeatureDetail";
import ProblemDetail from "@/pages/ProblemDetail";
import ProcessDetail from "@/pages/ProcessDetail";
import ImpactDetail from "@/pages/ImpactDetail";
import BusinessDetail from "@/pages/BusinessDetail";
import SwotDetail from "@/pages/SwotDetail";
import UsersDetail from "@/pages/UsersDetail";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Impact />
      <div className="section-divider" />
      <BusinessModel />
      <div className="section-divider" />
      <Swot />
      <div className="section-divider" />
      <TargetUsers />
      <div className="section-divider" />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features/:slug" element={<FeatureDetail />} />
        <Route path="/problem/:slug" element={<ProblemDetail />} />
        <Route path="/process/:slug" element={<ProcessDetail />} />
        <Route path="/impact/:slug" element={<ImpactDetail />} />
        <Route path="/business/:slug" element={<BusinessDetail />} />
        <Route path="/swot/:slug" element={<SwotDetail />} />
        <Route path="/users/:slug" element={<UsersDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
