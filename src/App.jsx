import { useEffect } from 'react';
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

function LandingPage() {
  const navigate = useNavigate();
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

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-brand-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-2">Halaman Tidak Ditemukan</p>
        <p className="text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak ada.</p>
        <button
          onClick={() => { navigate('/'); scrollToTop(); }}
          className="px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors"
        >
          Kembali ke Beranda
        </button>
      </motion.div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
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

  const handleBackToHome = () => {
    navigate('/');
    scrollToTop();
  };

  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar onNavigate={handleNavigation} currentPath={location.pathname} />

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
              <Route path="/" element={<LandingPage />} />
              <Route path="/kabinet" element={<Structure onBack={handleBackToHome} />} />
              <Route path="/program" element={<ProgramHub onBack={handleBackToHome} />} />
              <Route path="*" element={<NotFound />} />
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
