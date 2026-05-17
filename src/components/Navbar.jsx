import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowRight } from '@phosphor-icons/react';

export default function Navbar({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoChoice, setLogoChoice] = useState(0); // 0 or 1

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alternate logo every 4 seconds
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/90 py-2 glass-nav' : 'bg-white/30 py-4 glass-nav'}`}>
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
            <button type="button" onClick={() => handleNavigate('landing', 'beranda')} className="text-gray-600 hover:text-brand-500 font-medium nav-link cursor-pointer bg-transparent border-0 p-0">Beranda</button>
            <button type="button" onClick={() => handleNavigate('landing', 'tentang')} className="text-gray-600 hover:text-brand-500 font-medium nav-link cursor-pointer bg-transparent border-0 p-0">Tentang Kami</button>
            <button type="button" onClick={() => handleNavigate('structure')} className="text-gray-600 hover:text-brand-500 font-medium nav-link cursor-pointer bg-transparent border-0 p-0">Kabinet</button>
            <button type="button" onClick={() => handleNavigate('landing', 'program')} className="text-gray-600 hover:text-brand-500 font-medium nav-link cursor-pointer bg-transparent border-0 p-0">Program</button>
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full top-full left-0 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button type="button" onClick={() => handleNavigate('landing', 'beranda')} className="w-full text-left block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-500 hover:bg-brand-50 rounded-lg bg-transparent border-0">Beranda</button>
              <button type="button" onClick={() => handleNavigate('landing', 'tentang')} className="w-full text-left block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-500 hover:bg-brand-50 rounded-lg bg-transparent border-0">Tentang Kami</button>
              <button type="button" onClick={() => handleNavigate('structure')} className="w-full text-left block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-500 hover:bg-brand-50 rounded-lg bg-transparent border-0">Kabinet</button>
              <button type="button" onClick={() => handleNavigate('landing', 'program')} className="w-full text-left block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-500 hover:bg-brand-50 rounded-lg bg-transparent border-0">Program</button>
              <button type="button" onClick={() => handleNavigate('landing', 'kontak')} className="w-full block px-3 py-3 mt-4 text-center text-base font-medium bg-brand-500 text-white rounded-lg shadow-md">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
