import { InstagramLogo, TwitterLogo, YoutubeLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 pt-16 pb-8 border-t-4 border-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/bem.png" alt="Logo UPN Veteran Jatim" className="w-10 h-10 object-contain drop-shadow-md" />
              <div>
                <h2 className="text-xl font-bold text-white">BEM FASILKOM</h2>
                <p className="text-xs text-brand-400 tracking-wider">UPN "VETERAN" JATIM</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jawa Timur. Organisasi kemahasiswaan tingkat fakultas yang menjadi wadah pergerakan dan aspirasi mahasiswa.
            </p>
            <div className="flex gap-4">
              {[InstagramLogo, TwitterLogo, YoutubeLogo, EnvelopeSimple].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-colors">
                  <Icon weight="fill" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-3">
              {['Beranda', 'Tentang Kami', 'Struktur Kabinet', 'Program & Berita'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
              <li><a href="https://fasilkom.upnjatim.ac.id" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-400 transition-colors text-sm">Web Fakultas</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Sekretariat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin weight="fill" className="text-brand-500 mt-0.5 shrink-0" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Gedung FIK UPN "Veteran" Jawa Timur<br />
                  Jl. Raya Rungkut Madya, Gunung Anyar,<br />
                  Surabaya, Jawa Timur 60294
                </span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple weight="fill" className="text-brand-500 shrink-0" size={20} />
                <span className="text-gray-400 text-sm">bemfasilkom@upnjatim.ac.id</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            &copy; 2026 BEM Fasilkom UPN "Veteran" Jatim. Hak cipta dilindungi.
          </p>
          <p className="text-gray-500 text-xs">
            Didesain ulang dengan ❤️ menggunakan React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
