import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Tokenomics from "../components/home/Tokenomics";
import Roadmap from "../components/home/Roadmap";
import HowToBuy from "../components/home/HowToBuy";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white">
      {/* 1. Our Layout Component */}
      <Navbar />

      {/*2. Hero Section */}
      <Hero />

      {/* 2.5 About / Vision Section */}
      <About />

      {/* 3. Tokenomics Section */}
      <Tokenomics />

      {/* 4. Roadmap Section */}
      <Roadmap />

      {/* 5. How To Buy Section */}
      <HowToBuy />

      {/* 6. Ecosystem Features Section */}
      <Features />

      {/* 7. Call To Action Section */}
      <CTA />

      {/* 8. Global Footer */}
      <Footer />

    </div>
  );
}