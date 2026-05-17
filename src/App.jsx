import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cabinet from './components/Cabinet';
import Program from './components/Program';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
import Structure from './pages/Structure'; 
import ProgramHub from './pages/ProgramHub'; 

const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

function App() {
  // 'landing', 'structure', atau 'programs'
  const [currentView, setCurrentView] = useState('landing'); 
  const [targetSection, setTargetSection] = useState(null);

  const navigateTo = (view = 'landing', section = null) => {
    if (view !== 'landing') {
      scrollToTop();
    }

    setCurrentView(view);
    setTargetSection(section);
  };

  useEffect(() => {
    if (currentView !== 'landing') {
      scrollToTop();
      return;
    }

    if (!targetSection) {
      return;
    }

    const sectionId = targetSection;
    const scrollTimer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTargetSection(null);
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [currentView, targetSection]);

  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* Oper fungsi navigasi ke navbar untuk tombol beranda */}
      <Navbar onNavigate={navigateTo} />

      <main>
        {currentView === 'landing' ? (
          <>
            <Hero onExplore={() => navigateTo('structure')} onViewAll={() => navigateTo('programs')} />
            {/* Navigasi dari tombol di seksi About */}
            <About onExplore={() => navigateTo('structure')} />
            <Cabinet />
            {/* Jika ada tombol eksplorasi di komponen seksi Program bawaan, bisa ditaruh di sini */}
            <Program onViewAll={() => navigateTo('programs')} />
          </>
        ) : currentView === 'structure' ? (
          <Structure onBack={() => navigateTo('landing', 'beranda')} />
        ) : (
          <ProgramHub onBack={() => navigateTo('landing', 'program')} />
        )}
      </main>
      
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
