import { motion } from 'framer-motion';
import { Users, UserCircle, Briefcase, CaretLeft } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Structure({ onBack }) {
  const bph = [
    { position: 'Ketua Umum', name: 'Nama Ketua' },
    { position: 'Wakil Ketua Umum', name: 'Nama Wakil' },
    { position: 'Sekretaris 1', name: 'Nama Sekretaris 1' },
    { position: 'Sekretaris 2', name: 'Nama Sekretaris 2' },
    { position: 'Bendahara 1', name: 'Nama Bendahara 1' },
    { position: 'Bendahara 2', name: 'Nama Bendahara 2' },
  ];

  const departments = [
    {
      name: 'PSDM',
      desc: 'Pengembangan Sumber Daya Mahasiswa',
      bidang: ['Kaderisasi', 'Penelitian & Pengembangan', 'Kewirausahaan', 'Seni & Olahraga']
    },
    {
      name: 'Sospol',
      desc: 'Sosial dan Politik',
      bidang: ['Advokesma', 'Pengabdian Masyarakat']
    },
    {
      name: 'Medfo',
      desc: 'Media dan Informasi',
      bidang: ['Multimedia', 'Publikasi & Informasi']
    },
    {
      name: 'HDK',
      desc: 'Hubungan dan Kerja Sama',
      bidang: ['Dalam Negeri', 'Luar Negeri']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tombol Kembali */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-600 font-semibold mb-8 hover:gap-3 transition-all cursor-pointer"
        >
          <CaretLeft weight="bold" /> Kembali ke Beranda
        </button>

        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Mengenal lebih dekat para fungsionaris BEM Fasilkom UPN "Veteran" Jawa Timur Kabinet Aetherion.</p>
        </motion.div>

        {/* Section BPH */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Users size={32} className="text-brand-500" weight="fill" />
            <h3 className="text-2xl font-bold text-gray-900">Badan Pengurus Harian (BPH)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bph.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-500">
                  <UserCircle size={40} weight="light" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{member.name}</h4>
                  <p className="text-sm text-brand-600 font-medium">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Departemen & Bidang */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <Briefcase size={32} className="text-brand-500" weight="fill" />
            <h3 className="text-2xl font-bold text-gray-900">Departemen & Bidang</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, i) => (
              <motion.div 
                key={i}
                whileHover={{ shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="bg-brand-500 p-6 text-white">
                  <h4 className="text-2xl font-bold">{dept.name}</h4>
                  <p className="text-brand-50 text-sm">{dept.desc}</p>
                </div>
                <div className="p-6">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Membawahi Bidang:</h5>
                  <div className="space-y-4">
                    {dept.bidang.map((bid, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="font-bold text-gray-800">{bid}</p>
                        <p className="text-xs text-gray-500 italic mt-1">Klik untuk lihat anggota bidang</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}