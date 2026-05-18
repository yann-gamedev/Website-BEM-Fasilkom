import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeft, CaretDown, Users, Briefcase, IdentificationBadge, SquaresFour } from '@phosphor-icons/react';

// Komponen Photocard Reusable
const Photocard = ({ role, name, img }) => (
  <div className="flex w-full flex-col items-center">
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

const PhotoGrid = ({ children }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(9.5rem,12rem))] justify-center gap-6 md:gap-8">
    {children}
  </div>
);

const getMemberCount = (dept) => dept.core.length + dept.bidang.reduce((total, bidang) => total + bidang.members.length, 0);

const SectionMeta = ({ items }) => (
  <div className="mt-3 flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
        {item.icon}
        {item.label}
      </span>
    ))}
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
        { role: 'Wakil Kepala Departemen', name: '[Nama Wakadep]', img: '' },
        { role: 'Sekretaris Departemen', name: '[Nama Sekdep]', img: '' }
      ],
      bidang: [
        {
          name: 'Bidang Kaderisasi',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Penelitian & Pengembangan',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Kewirausahaan',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Seni & Olahraga',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
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
          name: 'Bidang Advokasi & Kesejahteraan Mahasiswa',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Pengabdian Masyarakat',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
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
        { role: 'Wakil Kepala Biro', name: '[Nama Wakabiro]', img: '' },
        { role: 'Sekretaris Biro', name: '[Nama Sekbiro]', img: '' },
      ],
      bidang: [
        {
          name: 'Bidang Multimedia',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Publikasi & Informasi',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
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
        { role: 'Wakil Kepala Departemen', name: '[Nama Wakadep]', img: '' },
        { role: 'Sekretaris Departemen', name: '[Nama Sekdep]', img: '' },
      ],
      bidang: [
        {
          name: 'Bidang Dalam Negeri',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
          ]
        },
        {
          name: 'Bidang Luar Negeri',
          members: [
            { role: 'Ketua Bidang', name: '[Nama Kabid]', img: '' },
            { role: 'Wakil Ketua Bidang', name: '[Nama Wakabid]', img: '' },
            { role: 'Sekretaris Bidang', name: '[Nama Sekbid]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
            { role: 'Staff', name: '[Nama Staff]', img: '' },
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
          className="inline-flex items-center gap-2 text-brand-600 font-semibold mb-8 hover:gap-3 transition-all cursor-pointer bg-brand-50/60 hover:bg-brand-100 px-4 py-2.5 rounded-full"
        >
          <CaretLeft weight="bold" size={20} /> Kembali ke Beranda
        </button>

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Struktur Kabinet
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full mb-6 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Kenali formasi lengkap pengurus BEM Fasilkom UPN "Veteran" Jawa Timur.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          
          {/* ================= SECTION BPH ================= */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => toggleSection('bph')}
              className="w-full flex items-center justify-between gap-5 p-6 bg-gradient-to-r from-brand-50 to-white hover:from-brand-100/80 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex shrink-0 items-center justify-center">
                  <Users size={28} weight="fill" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Badan Pengurus Harian (BPH)</h3>
                  <SectionMeta items={[
                    { label: `${bphMembers.length} Jabatan Inti`, icon: <IdentificationBadge size={14} weight="fill" /> },
                    { label: 'Koordinasi Kabinet', icon: <SquaresFour size={14} weight="fill" /> }
                  ]} />
                </div>
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
                    <PhotoGrid>
                      {bphMembers.map((member, idx) => (
                        <Photocard key={idx} {...member} />
                      ))}
                    </PhotoGrid>
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
                className="w-full flex items-center justify-between gap-5 p-6 bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex shrink-0 items-center justify-center">
                    <Briefcase size={28} weight="fill" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{dept.name}</h3>
                    <SectionMeta items={[
                      { label: `${dept.core.length} Core`, icon: <IdentificationBadge size={14} weight="fill" /> },
                      { label: `${dept.bidang.length} Bidang`, icon: <SquaresFour size={14} weight="fill" /> },
                      { label: `${getMemberCount(dept)} Formasi`, icon: <Users size={14} weight="fill" /> }
                    ]} />
                  </div>
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
                        <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Core Departemen</p>
                            <h4 className="text-lg font-bold text-gray-900">Pimpinan dan Sekretariat</h4>
                          </div>
                          <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">{dept.core.length} orang</span>
                        </div>
                        <PhotoGrid>
                          {dept.core.map((member, idx) => (
                            <Photocard key={idx} {...member} />
                          ))}
                        </PhotoGrid>
                      </div>

                      {/* Per Bidang */}
                      <div className="space-y-10">
                        {dept.bidang.map((bidang, idx) => (
                          <div key={idx}>
                            <h4 className="text-lg font-bold text-gray-800 border-l-4 border-brand-500 pl-3 mb-6">
                              {bidang.name}
                            </h4>
                            <PhotoGrid>
                              {bidang.members.map((member, mIdx) => (
                                <Photocard key={mIdx} {...member} />
                              ))}
                            </PhotoGrid>
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
