import "@/App.css";
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

function App() {
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

export default App;
