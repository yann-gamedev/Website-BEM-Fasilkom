import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Users } from '@phosphor-icons/react';

const IMAGES = [
  '/assets/gedungbem.jpg',
  '/assets/girisantika.jpg',
  '/assets/fasilkom.png',
  '/assets/program1.jpeg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: {
      x: -100,
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      zIndex: 10,
    },
    exit: {
      x: 200,
      y: -200, // Diagonal swipe
      opacity: 0,
      scale: 0.8,
      rotate: 15,
      zIndex: 0,
    }
  };

  return (
    <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Selamat Datang di Website Resmi
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Kabinet<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-400">Aetherion</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jawa Timur hadir sebagai wadah aspirasi, kreasi, dan kolaborasi untuk seluruh mahasiswa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#tentang" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/30 hover:-translate-y-1 text-center">
                Kenali Lebih Lanjut
              </a>
              <a href="#program" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-md text-center flex items-center justify-center gap-2">
                <PlayCircle size={24} className="text-brand-500" /> Program Kerja
              </a>
            </div>
          </motion.div>

          {/* Hero Graphic - Diagonal Swiping Card Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            {/* Decorative background for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-brand-300 rounded-[2rem] rotate-3 scale-105 opacity-50 z-0"></div>

            <div className="absolute inset-0 z-10 perspective-1000">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.5 }
                  }}
                  className="absolute inset-0 w-full h-full shadow-2xl border-4 border-white rounded-[2rem] overflow-hidden bg-gray-100"
                  style={{ transformOrigin: "bottom left" }}
                >
                  <img src={IMAGES[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex gap-2 justify-center z-20">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-brand-500 scale-125 border-2 border-white' : 'bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Users size={24} weight="fill" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Total Mahasiswa</p>
                <p className="text-xl font-bold text-gray-900">2,000+</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
