import { motion } from 'framer-motion';
import { MapPin, NavigationArrow } from '@phosphor-icons/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function MapSection() {
  // Link lokasi (Ganti dengan link embed hasil langkah 1 jika berbeda)
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1773019490047!2d112.78598817500047!3d-7.333975392674454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb792f87d495%3A0xaae1e1cbcc3e2778!2sFakultas%20Ilmu%20Komputer%20UPN%20%22Veteran%22%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1778782084809!5m2!1sid!2sid";
  
  // Link tujuan ketika diklik (Link Google Maps biasa)
  const directMapLink = "https://maps.app.goo.gl/QLx7QQKq5wEqJcFc7";

  return (
    <section id="lokasi" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h3 className="text-brand-500 font-bold tracking-wider uppercase text-sm mb-2">Lokasi Kami</h3>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Kunjungi Sekretariat Kami</h2>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="relative group bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          {/* Kotak Map */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-inner">
            <iframe
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi BEM Fasilkom UPN Jatim"
            ></iframe>
            
            {/* Overlay Gradient agar teks lebih terbaca (Opsional) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Info Box di bagian bawah */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-6 px-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin size={28} weight="fill" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Gedung Fakultas Ilmu Komputer</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Jl. Raya Rungkut Madya No.1, Gn. Anyar, Surabaya, Jawa Timur 60294</p>
              </div>
            </div>

            {/* Tombol Arahkan ke Maps */}
            <a 
              href={directMapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-brand-200 group-hover:scale-105"
            >
              <NavigationArrow size={20} weight="fill" />
              Buka di Google Maps
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}