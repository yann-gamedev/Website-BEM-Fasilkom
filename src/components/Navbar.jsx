import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowRight } from '@phosphor-icons/react';

export default function Navbar({ onNavigate, currentPath }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoChoice, setLogoChoice] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoChoice((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    { src: '/assets/upn.png', alt: 'Logo UPN', text: 'UPN "VETERAN" JATIM', color: 'text-brand-600' },
    { src: '/assets/bem.png', alt: 'Logo BEM', text: 'KABINET AETHERION', color: 'text-blue-600' }
  ];

  const handleNavigate = (view, section) => {
    onNavigate(view, section);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (view) => {
    if (view === 'landing') {
      return currentPath === '/';
    } else if (view === 'structure') {
      return currentPath === '/kabinet';
    } else if (view === 'programs') {
      return currentPath === '/program';
    }
    return false;
  };

  const getLinkClassName = (view) => {
    const isActive = isLinkActive(view);
    const baseClass = "text-gray-600 hover:text-brand-500 font-medium nav-link cursor-pointer bg-transparent border-0 p-0 transition-colors duration-200";
    return isActive ? `${baseClass} text-brand-600 font-semibold` : baseClass;
  };

  return (
    <header className={`fixed z-50 transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 max-w-5xl bg-white/75 backdrop-blur-md rounded-full shadow-lg ${
      isScrolled ? 'top-4 py-3' : 'top-6 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo with Animation */}
          <div className="flex items-center gap-3 relative h-12 w-64 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={logoChoice}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                className="flex items-center gap-3 absolute left-0"
              >
                <img src={logos[logoChoice].src} alt={logos[logoChoice].alt} className="w-10 h-10 object-contain drop-shadow-md" />
                <div>
                  <h1 className="text-xl font-extrabold text-gray-900 leading-none">BEM FASILKOM</h1>
                  <p className={`text-xs font-semibold tracking-wider ${logos[logoChoice].color}`}>{logos[logoChoice].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button type="button" onClick={() => handleNavigate('landing', 'beranda')} className={getLinkClassName('landing')}>Beranda</button>
            <button type="button" onClick={() => handleNavigate('landing', 'tentang')} className={getLinkClassName('landing')}>Tentang Kami</button>
            <button type="button" onClick={() => handleNavigate('structure')} className={getLinkClassName('structure')}>Kabinet</button>
            <button type="button" onClick={() => handleNavigate('programs')} className={getLinkClassName('programs')}>Program</button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <a href="https://bemfasilkomupnvjt.carrd.co/" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-xl hover:shadow-brand-500/20 hover:-translate-y-0.5 inline-flex items-center gap-2">
              Hubungi Kami <ArrowRight weight="bold" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-brand-500 focus:outline-none p-2">
              {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute w-full top-full left-0 overflow-hidden bg-white/75 backdrop-blur-md rounded-b-3xl shadow-lg transition-all duration-300"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button type="button" onClick={() => handleNavigate('landing', 'beranda')} className={`w-full text-left block px-3 py-3 text-base font-medium rounded-lg bg-transparent border-0 transition-colors duration-200 ${isLinkActive('landing') ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-gray-800 hover:text-brand-500 hover:bg-brand-50'}`}>Beranda</button>
              <button type="button" onClick={() => handleNavigate('landing', 'tentang')} className={`w-full text-left block px-3 py-3 text-base font-medium rounded-lg bg-transparent border-0 transition-colors duration-200 ${isLinkActive('landing') ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-gray-800 hover:text-brand-500 hover:bg-brand-50'}`}>Tentang Kami</button>
              <button type="button" onClick={() => handleNavigate('structure')} className={`w-full text-left block px-3 py-3 text-base font-medium rounded-lg bg-transparent border-0 transition-colors duration-200 ${isLinkActive('structure') ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-gray-800 hover:text-brand-500 hover:bg-brand-50'}`}>Kabinet</button>
              <button type="button" onClick={() => handleNavigate('programs')} className={`w-full text-left block px-3 py-3 text-base font-medium rounded-lg bg-transparent border-0 transition-colors duration-200 ${isLinkActive('programs') ? 'text-brand-600 bg-brand-50 font-semibold' : 'text-gray-800 hover:text-brand-500 hover:bg-brand-50'}`}>Program</button>
              <button type="button" onClick={() => handleNavigate('landing', 'kontak')} className="w-full block px-3 py-3 mt-4 text-center text-base font-medium bg-brand-500 text-white rounded-lg shadow-md hover:bg-brand-600 transition-colors duration-200">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
