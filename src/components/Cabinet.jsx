import { motion } from 'framer-motion';
import { UsersThree, Scales, Megaphone, Handshake, ArrowRight } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Cabinet() {
  const ministries = [
    {
      id: 1,
      title: 'Pengembaangan Sumber Daya Mahasiswa (PSDM)',
      desc: 'Fokus pada kaderisasi dan peningkatan kapasitas internal pengurus dan mahasiswa.',
      icon: <UsersThree size={32} />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Departemen Sosial dan Politik (Sospol)',
      desc: 'Melayani keluh kesah, bantuan UKT, dan fasilitas untuk kenyamanan belajar.',
      icon: <Scales size={32} />,
      color: 'green'
    },
    {
      id: 3,
      title: 'Biro Media dan Informasi',
      desc: 'Ujung tombak media sosial, publikasi, dan pusat informasi Fasilkom.',
      icon: <Megaphone size={32} />,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Departemen Hubungan dan Kerja Sama',
      desc: 'Menjalin relasi dengan alumni, instansi luar, dan BEM fakultas/universitas lain.',
      icon: <Handshake size={32} />,
      color: 'brand'
    }
  ];

  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-500';
      case 'green': return 'bg-green-50 text-green-600 group-hover:bg-green-500';
      case 'purple': return 'bg-purple-50 text-purple-600 group-hover:bg-purple-500';
      case 'brand': return 'bg-brand-50 text-brand-600 group-hover:bg-brand-500';
      default: return 'bg-gray-50 text-gray-600 group-hover:bg-gray-500';
    }
  };

  return (
    <section id="kabinet" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Struktur Organisasi</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kementerian Kabinet</h2>
          <p className="text-gray-600">Terdiri dari berbagai kementerian yang berfokus pada ranah kerja spesifik untuk melayani mahasiswa.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 ${getColorClass(ministry.color)}`}>
                {ministry.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{ministry.title}</h4>
              <p className="text-gray-500 text-sm">{ministry.desc}</p>
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
