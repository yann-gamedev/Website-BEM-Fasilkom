import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, ListChecks } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  // State untuk melacak status flip kartu
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Tentang Kami</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengenal Lebih Dekat BEM Fasilkom</h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="order-2 md:order-1">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target weight="fill" className="text-brand-500 text-3xl" /> Visi
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed bg-brand-50 p-6 rounded-2xl border-l-4 border-brand-500">
              "Mewujudkan BEM Fasilkom UPN Jatim sebagai poros pergerakan mahasiswa yang adaptif, inovatif, dan sinergis dalam menciptakan lingkungan kampus yang prestatif dan inklusif."
            </p>
          </div>
          
          {/* Bagian Foto dengan Animasi Flip */}
          <div className="order-1 md:order-2" style={{ perspective: "1000px" }}>
            <motion.div
              className="relative w-full aspect-[4/3] cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Sisi Depan: Gambar */}
              <div 
                className="absolute inset-0 w-full h-full" 
                style={{ backfaceVisibility: "hidden" }}
              >
                <img src="/assets/aetherion.jpg" alt="Logo Kabinet" className="w-full h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow" />
              </div>
              
              {/* Sisi Belakang: Informasi BPH */}
              <div 
                className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col justify-center items-center"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h4 className="text-xl font-bold text-brand-600 mb-4 border-b-2 border-brand-100 pb-2 w-full text-center">Badan Pengurus Harian</h4>
                <div className="flex flex-col gap-3 w-full text-center text-gray-800">
                  <div className="bg-brand-50 py-2 px-4 rounded-xl font-semibold">Ketua Umum</div>
                  <div className="bg-brand-50 py-2 px-4 rounded-xl font-semibold">Wakil Ketua Umum</div>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <div className="bg-gray-50 py-2 px-2 rounded-xl font-medium text-sm border border-gray-100">Sekretaris 1</div>
                    <div className="bg-gray-50 py-2 px-2 rounded-xl font-medium text-sm border border-gray-100">Sekretaris 2</div>
                    <div className="bg-gray-50 py-2 px-2 rounded-xl font-medium text-sm border border-gray-100">Bendahara 1</div>
                    <div className="bg-gray-50 py-2 px-2 rounded-xl font-medium text-sm border border-gray-100">Bendahara 2</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div>
          <motion.h4
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2"
          >
            <ListChecks weight="fill" className="text-brand-500 text-3xl" /> Misi
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Optimalisasi Pelayanan', desc: 'Meningkatkan pelayanan advokasi dan kesejahteraan mahasiswa yang responsif dan solutif.' },
              { id: 2, title: 'Wadah Eskalasi', desc: 'Menciptakan ruang pengembangan minat, bakat, dan keilmuan secara komprehensif.' },
              { id: 3, title: 'Sinergi Harmonis', desc: 'Membangun hubungan yang harmonis dan kolaboratif antar Ormawa dan elemen Fakultas.' }
            ].map((misi, index) => (
              <motion.div
                key={misi.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center text-2xl mb-6 font-bold">
                  {misi.id}
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">{misi.title}</h5>
                <p className="text-gray-600 leading-relaxed">{misi.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
