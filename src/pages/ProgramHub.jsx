import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretDown, CalendarBlank, MapPin, IdentificationCard, Code } from '@phosphor-icons/react';

// Aset gambar untuk Hero Slider halaman program
const SLIDER_IMAGES = [
  '/assets/program1.jpeg',
  '/assets/program2.jpeg',
  '/assets/kabinet.jpg'
];

export default function ProgramHub({ onBack }) {
  const [heroIndex, setHeroIndex] = useState(0);
  const [expandedProgramId, setExpandedProgramId] = useState(null);

  // Efek Slider Otomatis tiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Data Contoh Kumpulan Program Kerja BEM & Hima
  const programCategories = [
    {
      category: 'Program Kerja BEM Fasilkom',
      icon: <IdentificationCard size={24} weight="fill" />,
      items: [
        {
          id: 'bem-1',
          title: 'Fasilkom Fest',
          sub: 'Biro Media, Informasi & Kreatif',
          date: 'Oktober 2026',
          location: 'Gedung Serbaguna Girisantika',
          shortDesc: 'Festival akbar tahunan Fakultas Ilmu Komputer yang mempertemukan seni, budaya, dan kompetisi teknologi.',
          longDesc: 'Fasilkom Fest merupakan puncak selebrasi kreativitas mahasiswa. Program ini mewadahi perlombaan skala regional, pameran karya inovasi teknologi dari seluruh jurusan, serta panggung apresiasi seni guna mempererat hubungan internal maupun eksternal fakultas.'
        },
        {
          id: 'bem-2',
          title: 'R&D Tech Innovation Talk',
          sub: 'Divisi Penelitian dan Pengembangan (Litbang)',
          date: 'Agustus 2026',
          location: 'Laboratorium Komputer Terpadu',
          shortDesc: 'Forum diskusi dan diseminasi hasil riset teknologi mutakhir serta pengembangan aplikasi web/mobile.',
          longDesc: 'Program kerja berkala yang berfokus pada eksplorasi teknologi terbarukan, manajemen pangkalan data local server, logika sistem layanan, hingga bedah alur arsitektur sistem. Dirancang untuk meningkatkan iklim akademis dan standar riset solutif di lingkungan mahasiswa.'
        }
      ]
    },
    {
      category: 'Program Kerja Himpunan Mahasiswa (Hima)',
      icon: <Code size={24} weight="fill" />,
      items: [
        {
          id: 'hima-1',
          title: 'Informatics Game Jam & Workshop',
          sub: 'Hima Informatika',
          date: 'Juni 2026',
          location: 'Gedung Aula Fasilkom',
          shortDesc: 'Pelatihan intensif pemanfaatan game engine populer disusul dengan kompetisi merancang game kilat.',
          longDesc: 'Workshop interaktif yang membahas tuntas logika dasar game development menggunakan engine modern seperti Godot, Unity, hingga Roblox Studio. Peserta ditantang menyusun prototipe game orisinal dari nol dalam kurun waktu 48 jam untuk menguji kreativitas dan kecepatan eksekusi kode.'
        },
        {
          id: 'hima-2',
          title: 'Code Immersion Hackathon',
          sub: 'Hima Informatika',
          date: 'September 2026',
          location: 'Online / Hybrid',
          shortDesc: 'Kompetisi pemrograman maraton untuk menyelesaikan permasalahan nyata lewat produk perangkat lunak.',
          longDesc: 'Ajang pembuktian kemampuan problem-solving, struktur data, dan kerja tim. Peserta akan ditantang membangun purwarupa platform digital interaktif (seperti e-learning tergamiﬁkasi atau dashboard finansial) di bawah tekanan waktu yang ketat.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* ================= HERO SECTION DENGAN SLIDER AUTOMATIS ================= */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-slate-900">
        {/* Gambar Slider Berganti Seiring Waktu */}
        <AnimatePresence mode="wait">
          <motion.img
            key={heroIndex}
            src={SLIDER_IMAGES[heroIndex]}
            alt="Event Dokumentasi"
            className="absolute inset-0 h-full w-full object-cover opacity-40 select-none pointer-events-none"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Gradasi Estetik */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/40 to-slate-900/20" />

        {/* Konten Di Atas Hero */}
        <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 z-10">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit transition-all border border-white/10 cursor-pointer"
          >
            <CaretLeft weight="bold" /> Kembali ke Beranda
          </button>

          <div>
            <span className="text-brand-400 font-bold tracking-widest uppercase text-xs md:text-sm block mb-2">Eksplorasi Aktivitas</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl drop-shadow-sm">
              Pusat Program Kerja & Agenda Kreatif
            </h1>
          </div>
        </div>
      </div>

      {/* ================= KUMPULAN LIST PROGRAM (DROPDOWN/ACCORDION) ================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-12">
          {programCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              {/* Judul Kategori Besar (BEM / Hima) */}
              <div className="flex items-center gap-3 text-gray-900 border-b border-gray-200 pb-3">
                <div className="text-brand-500">{cat.icon}</div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">{cat.category}</h2>
              </div>

              {/* List Item di bawah Kategori */}
              <div className="space-y-3">
                {cat.items.map((program) => {
                  const isExpanded = expandedProgramId === program.id;
                  return (
                    <div 
                      key={program.id}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-gray-200 transition-all"
                    >
                      {/* Tombol Header Program */}
                      <button
                        onClick={() => setExpandedProgramId(isExpanded ? null : program.id)}
                        className="w-full p-5 flex items-start justify-between gap-4 text-left transition-colors hover:bg-slate-50/50"
                      >
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{program.sub}</span>
                          <h3 className="text-lg font-bold text-gray-900">{program.title}</h3>
                          <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-none mt-1">{program.shortDesc}</p>
                        </div>
                        <motion.div 
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-400 mt-5 flex-shrink-0"
                        >
                          <CaretDown size={20} weight="bold" />
                        </motion.div>
                      </button>

                      {/* Konten Deskripsi Panjang yang Tersembunyi */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden bg-slate-50/40 border-t border-gray-50"
                          >
                            <div className="p-5 pt-2 border-t border-gray-100/60 space-y-4">
                              {/* Detail Waktu & Lokasi */}
                              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
                                <div className="flex items-center gap-1.5">
                                  <CalendarBlank size={16} className="text-brand-500" />
                                  <span>{program.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <MapPin size={16} className="text-brand-500" />
                                  <span>{program.location}</span>
                                </div>
                              </div>

                              {/* Deskripsi Lengkap */}
                              <p className="text-gray-600 text-sm leading-relaxed bg-white p-4 rounded-xl border border-gray-100 shadow-inner">
                                {program.longDesc}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}