import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cabinet from './components/Cabinet';
import Program from './components/Program';
import Footer from './components/Footer';
import MapSection from './components/MapSection';
import Structure from './pages/Structure'; 
import ProgramHub from './pages/ProgramHub'; 

function App() {
  // 'landing', 'structure', atau 'programs'
  const [currentView, setCurrentView] = useState('landing'); 

  return (
    <div className="font-sans text-gray-800 bg-slate-50 antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* Oper fungsi navigasi ke navbar untuk tombol beranda */}
      <Navbar onNavigate={() => setCurrentView('landing')} />

      <main>
        {currentView === 'landing' ? (
          <>
            <Hero onExplore={() => setCurrentView('structure')} onViewAll={() => setCurrentView('programs')} />
            {/* Navigasi dari tombol di seksi About */}
            <About onExplore={() => setCurrentView('structure')} />
            <Cabinet />
            {/* Jika ada tombol eksplorasi di komponen seksi Program bawaan, bisa ditaruh di sini */}
            <Program onViewAll={() => setCurrentView('programs')} />
          </>
        ) : currentView === 'structure' ? (
          <Structure onBack={() => setCurrentView('landing')} />
        ) : (
          <ProgramHub onBack={() => setCurrentView('landing')} />
        )}
      </main>
      
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;