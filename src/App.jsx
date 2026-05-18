import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

const scrollToSection = (sectionId) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

function LandingPage({ navigate }) {
  return (
    <>
      <Hero
        onExplore={() => { navigate('/kabinet'); scrollToTop(); }}
        onViewAll={() => { navigate('/program'); scrollToTop(); }}
      />
      <About />
      <Cabinet />
      <Program onViewAll={() => { navigate('/program'); scrollToTop(); }} />
    </>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState('landing');

  useEffect(() => {
    scrollToTop();
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentView('landing');
    } else if (location.pathname === '/kabinet') {
      setCurrentView('structure');
    } else if (location.pathname === '/program') {
      setCurrentView('programs');
    }
  }, [location.pathname]);

  const handleNavigation = (view, section) => {
    if (view === 'landing') {
      navigate('/');
      if (section) {
        scrollToSection(section);
      }
    } else if (view === 'structure') {
      navigate('/kabinet');
    } else if (view === 'programs') {
      navigate('/program');
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar onNavigate={handleNavigation} currentView={currentView} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<LandingPage navigate={navigate} />} />
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
