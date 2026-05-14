import { motion } from 'framer-motion';
import { CalendarBlank, CaretRight } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Program() {
  const articles = [
    {
      id: 1,
      category: 'Event',
      categoryColor: 'bg-brand-500',
      date: '12 Oktober 2026',
      title: 'Penyambutan Mahasiswa Baru Fasilkom UPN Jatim',
      desc: 'Rangkaian acara pengenalan kehidupan kampus bagi mahasiswa baru tahun ajaran ini berlangsung meriah dan edukatif.',
      img: 'https://placehold.co/600x400/e2e8f0/475569?text=Ospek+Fakultas'
    },
    {
      id: 2,
      category: 'Kompetisi',
      categoryColor: 'bg-blue-500',
      date: '28 September 2026',
      title: 'Dekan Cup IT Competition Fasilkom',
      desc: 'Ajang unjuk bakat mahasiswa dalam bidang UI/UX Design, Web Development, dan Competitive Programming.',
      img: 'https://placehold.co/600x400/e2e8f0/475569?text=Lomba+IT'
    },
    {
      id: 3,
      category: 'Advokasi',
      categoryColor: 'bg-green-500',
      date: '15 September 2026',
      title: 'Audiensi Terbuka Bersama Dekanat',
      desc: 'Penyampaian aspirasi mahasiswa terkait fasilitas perkuliahan dan kurikulum secara langsung kepada jajaran dekanat.',
      img: 'https://placehold.co/600x400/e2e8f0/475569?text=Audiensi'
    }
  ];

  return (
    <section id="program" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp} transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h3 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Informasi & Kegiatan</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Program Terkini</h2>
          </motion.div>
          
          <motion.a 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
            href="#" 
            className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-brand-500 text-brand-600 font-medium rounded-full hover:bg-brand-500 hover:text-white transition-all"
          >
            Lihat Semua Berita
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col h-full card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full z-20 ${article.categoryColor}`}>
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                  <CalendarBlank /> {article.date}
                </p>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                  {article.desc}
                </p>
                <a href="#" className="text-brand-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Baca Selengkapnya <CaretRight weight="bold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
