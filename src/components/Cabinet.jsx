import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersThree, Scales, Megaphone, Handshake, ArrowRight, CaretDown } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Cabinet() {
  // State untuk melacak ID kementerian mana yang sedang terbuka dropdown-nya
  const [expandedId, setExpandedId] = useState(null);

  const ministries = [
    {
      id: 1,
      title: 'Pengembangan Sumber Daya Mahasiswa (PSDM)', 
      desc: 'Fokus pada kaderisasi dan peningkatan kapasitas internal pengurus dan mahasiswa.',
      icon: <UsersThree size={32} />,
      color: 'blue',
      bidang: ['Bidang Kaderisasi', 'Bidang Penelitian & Pengembangan', 'Bidang Kewirausahaan', 'Bidang Seni & Olahraga'] // Tambahkan list bidang di sini
    },
    {
      id: 2,
      title: 'Departemen Sosial dan Politik (Sospol)',
      desc: 'Melayani keluh kesah, bantuan UKT, dan fasilitas untuk kenyamanan belajar.',
      icon: <Scales size={32} />,
      color: 'green',
      bidang: ['Bidang Advokesma', 'Bidang Pengabdian Masyarakat']
    },
    {
      id: 3,
      title: 'Biro Media dan Informasi',
      desc: 'Ujung tombak media sosial, publikasi, dan pusat informasi Fasilkom.',
      icon: <Megaphone size={32} />,
      color: 'purple',
      bidang: ['Bagian Multimedia', 'Bagian Publikasi & Informasi']
    },
    {
      id: 4,
      title: 'Departemen Hubungan dan Kerja Sama',
      desc: 'Menjalin relasi dengan alumni, instansi luar, dan BEM fakultas/universitas lain.',
      icon: <Handshake size={32} />,
      color: 'brand',
      bidang: ['Bidang Dalam Negeri', 'Bidang Luar Negeri']
    }
  ];

  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-500';
      case 'green': return 'bg-green-50 text-green-600 group-hover:bg-green-500';
      case 'purple': return 'bg-purple-50 text-purple-600 group-hover:bg-purple-500';
      case 'brand': return 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white';
      default: return 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-gray-500 group-hover:text-white';
    }
  };

  return (
    <section id="kabinet" className="py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Struktur Organisasi</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Departemen Kabinet</h2>
          <p className="text-gray-600 dark:text-gray-300">Terdiri dari berbagai departemen yang berfokus pada ranah kerja spesifik untuk melayani mahasiswa.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all"
              onClick={() => setExpandedId(expandedId === ministry.id ? null : ministry.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:text-white transition-all duration-300 ${getColorClass(ministry.color)}`}>
                  {ministry.icon}
                </div>
                {/* Ikon Panah Dropdown */}
                <motion.div
                  animate={{ rotate: expandedId === ministry.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 dark:text-gray-500 mt-2"
                >
                  <CaretDown size={24} />
                </motion.div>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{ministry.title}</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{ministry.desc}</p>

              {/* Konten Dropdown Bidang */}
              <AnimatePresence>
                {expandedId === ministry.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <h5 className="font-semibold text-sm text-gray-900 dark:text-gray-200 mb-2">Daftar Bidang:</h5>
                      <ul className="space-y-2">
                        {ministry.bidang.map((b, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></div>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
            Lihat Seluruh Departemen <ArrowRight weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}