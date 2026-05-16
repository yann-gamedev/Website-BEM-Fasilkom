import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretDown, Users, Briefcase } from '@phosphor-icons/react';

// Komponen Photocard Reusable
const Photocard = ({ role, name, img }) => (
  <div className="flex flex-col items-center">
    <div className="w-full aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative group cursor-pointer">
      {/* Jika foto belum ada, akan menampilkan warna abu-abu. Jika sudah ada, akan merender gambar */}
      {img ? (
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4 text-center">
          <span className="text-sm font-medium mb-2">Panggon Foto</span>
          <span className="text-xs border border-gray-300 rounded px-2 py-1">3 : 4</span>
        </div>
      )}
    </div>
    <div className="mt-4 text-center">
      <h4 className="font-bold text-gray-900 leading-tight">{name}</h4>
      <p className="text-sm text-brand-600 font-medium">{role}</p>
    </div>
  </div>
);

export default function Structure({ onBack }) {
  // State untuk mengontrol dropdown mana yang terbuka
  const [openSection, setOpenSection] = useState('bph'); // Default BPH terbuka

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Data Struktur Organisasi
  const bphMembers = [
    { role: 'Ketua Umum', name: '[Nama Ketua Umum]', img: '' },
    { role: 'Wakil Ketua Umum', name: '[Nama Wakil Ketua]', img: '' },
    { role: 'Sekretaris 1', name: '[Nama Sek 1]', img: '' },
    { role: 'Sekretaris 2', name: '[Nama Sek 2]', img: '' },
    { role: 'Bendahara 1', name: '[Nama Ben 1]', img: '' },
    { role: 'Bendahara 2', name: '[Nama Ben 2]', img: '' },
  ];

  const departments = [
    {
      id: 'psdm',
      name: 'Pengembangan Sumber Daya Mahasiswa (PSDM)',
      core: [
        { role: 'Kepala Departemen', name: '[Nama Kadep]', img: '' },
        { role: 'Wakil Kepala Departemen', name: '[Nama Wakadep]', img: '' }
      ],
      bidang: [
        {
          name: 'Bidang Kaderisasi',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Keilmuan',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        }
      ]
    },
    {
      id: 'sospol',
      name: 'Departemen Sosial dan Politik (Sospol)',
      core: [
        { role: 'Kepala Departemen', name: '[Nama Kadep]', img: '' },
      ],
      bidang: [
        {
          name: 'Bidang Kesejahteraan Mahasiswa',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Kajian Aksi Strategis',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        }
      ]
    },
    {
      id: 'medfo',
      name: 'Biro Media dan Informasi',
      core: [
        { role: 'Kepala Biro', name: '[Nama Kabiro]', img: '' },
      ],
      bidang: [
        {
          name: 'Bidang Desain Kreatif',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Jurnalistik & Publikasi',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        }
      ]
    },
    {
      id: 'hdk',
      name: 'Departemen Hubungan dan Kerja Sama',
      core: [
        { role: 'Kepala Departemen', name: '[Nama Kadep]', img: '' },
      ],
      bidang: [
        {
          name: 'Bidang Relasi Eksternal',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Kemitraan & Sponsorship',
          members: [
            { role: 'Kepala Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Kembali */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-600 font-semibold mb-8 hover:gap-3 transition-all cursor-pointer"
        >
          <CaretLeft weight="bold" /> Kembali ke Beranda
        </button>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Struktur Kabinet</h2>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Kenali formasi lengkap pengurus BEM Fasilkom UPN "Veteran" Jawa Timur.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* ================= SECTION BPH ================= */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => toggleSection('bph')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center">
                  <Users size={28} weight="fill" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-left">Badan Pengurus Harian (BPH)</h3>
              </div>
              <motion.div animate={{ rotate: openSection === 'bph' ? 180 : 0 }}>
                <CaretDown size={24} className="text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openSection === 'bph' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-gray-100"
                >
                  <div className="p-6 md:p-8">
                    {/* Grid Photocard BPH */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                      {bphMembers.map((member, idx) => (
                        <Photocard key={idx} {...member} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= SECTION DEPARTEMEN ================= */}
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => toggleSection(dept.id)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={28} weight="fill" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-left">{dept.name}</h3>
                </div>
                <motion.div animate={{ rotate: openSection === dept.id ? 180 : 0 }}>
                  <CaretDown size={24} className="text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === dept.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="p-6 md:p-8 bg-slate-50/50">
                      
                      {/* Kadep & Wakadep */}
                      <div className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-center">
                          {dept.core.map((member, idx) => (
                            <Photocard key={idx} {...member} />
                          ))}
                        </div>
                      </div>

                      {/* Per Bidang */}
                      <div className="space-y-10">
                        {dept.bidang.map((bidang, idx) => (
                          <div key={idx}>
                            <h4 className="text-lg font-bold text-gray-800 border-l-4 border-brand-500 pl-3 mb-6">
                              {bidang.name}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                              {bidang.members.map((member, mIdx) => (
                                <Photocard key={mIdx} {...member} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}