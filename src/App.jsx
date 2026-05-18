import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
import Hero from './components/Hero';
import About from './components/About';
import Cabinet from './components/Cabinet';
import Program from './components/Program';
import Structure from './pages/Structure';
import ProgramHub from './pages/ProgramHub';

const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

function LandingPage({ onNavigateToStructure, onNavigateToPrograms }) {
  return (
    <>
      <Hero onExplore={onNavigateToStructure} onViewAll={onNavigateToPrograms} />
      <About onExplore={onNavigateToStructure} />
      <Cabinet />
      <Program onViewAll={onNavigateToPrograms} />
    </>
  );
}

function App() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<LandingPage onNavigateToStructure={() => scrollToTop()} onNavigateToPrograms={() => scrollToTop()} />} />
              <Route path="/kabinet" element={<Structure />} />
              <Route path="/program" element={<ProgramHub />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
