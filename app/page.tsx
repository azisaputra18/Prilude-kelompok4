"use client";

import React from 'react';
import { 
  Layers, Code, Users, Brain, Key, Video, 
  CheckCircle, ArrowRight, ExternalLink, ShieldCheck, Zap, Globe, Smartphone, Landmark
} from 'lucide-react';

export default function Home() {
  const teamMembers = [
    {
      name: "Azi Saputra",
      nim: "202402044", 
      role: "Frontend Developer",
      icon: <Code className="w-6 h-6 text-cyan-500" />,
      contribution: "Membangun struktur web landing page menggunakan Next.js App Router, melakukan debug konfigurasi PostCSS/Tailwind, dan mengintegrasikan ikon.",
      challenge: "Menyinkronkan compiler Turbopack yang ketat dengan library pihak ketiga agar layout tetap responsif dan estetik."
      },
    {
      name: "Fitiyan",
      nim: "22010001", 
      role: "Project Lead / System Analyst",
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      contribution: "Mengkoordinasi tim selama visitasi ke Prilude Studio, menyusun draf pertanyaan wawancara SDLC, dan memetakan logika bisnis konversi waktu ke harga proyek.",
      challenge: "Memahami bagaimana estimasi riil di industri bekerja secara fleksibel tanpa harus bergantung pada diagram UML yang kaku."
      },
    {
      name: "Nurwan Soufwan A Salam",
      nim: "202402019", 
      role: "Analyst",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      contribution: "Menganalisis trade-off penggunaan ERD vs UML serta alasan rasional pemilihan duet arsitektur Laravel dan Spring Boot di Prilude Studio.",
      challenge: "Menghubungkan teori kuliah yang idealis dengan realita industri yang menuntut efisiensi dan kecepatan rilis produk."
    },
    {
      name: "Zaki Saefuloh",
      nim: "22010004", 
      role: "Content Creator & Video Editor",
      icon: <Video className="w-6 h-6 text-indigo-500" />,
      contribution: "Mengambil dokumentasi video b-roll selama kunjungan, menyusun storyboard sinematik tanpa suara (no talking), dan menyisipkan teks insight.",
      challenge: "Merangkum kultur kerja harian Prilude Studio yang dinamis ke dalam durasi video yang sangat terbatas (60-90 detik)."
    },
    {
      name: "Padlan",
      nim: "22010005", 
      role: "Copywriter",
      icon: <Users className="w-6 h-6 text-amber-500" />,
      contribution: "Menganalisis aspek penentuan harga Man-Days, model kontrak MoU, riset legalitas PT Perorangan, serta menyusun narasi teks laporan agar terstruktur.",
      challenge: "Menggali data finansial dan legalitas industri secara mendalam namun tetap menjaga kerahasiaan informasi sensitif perusahaan."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-900">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              P
            </div>
            <span className="font-bold tracking-tight text-lg bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Prilude.Insight
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">Profil</a>
            <a href="#workflow" className="hover:text-cyan-400 transition">Workflow</a>
            <a href="#tech" className="hover:text-cyan-400 transition">Tech Stack</a>
            <a href="#culture" className="hover:text-cyan-400 transition">Kultur & AI</a>
            <a href="#insights" className="hover:text-cyan-400 transition">Matematika Bisnis</a>
            <a href="#team" className="hover:text-cyan-400 transition">Tim Kami</a>
          </nav>
          <a 
            href="https://project.priludestudio.com/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 px-3 py-1.5 rounded-full transition text-slate-300"
          >
            Live Project Site <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="text-center pt-20 pb-16 max-w-3xl mx-auto px-6 space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide shadow-lg shadow-cyan-950/30">
          <Zap size={12} className="animate-pulse" /> LAPORAN VISITASI INDUSTRI — KELOMPOK 4
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Bedah Industri Nyata di Prilude Studio
        </h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Hasil studi kritis dan wawancara langsung mengenai tata kelola pengembangan perangkat lunak skala agensi, implementasi teknologi modern, hingga adopsi AI di dunia kerja profesional.
        </p>
      </section>

      {/* CORE CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-32">
        
        {/* SECTION 1: WORKFLOW INSIGHT */}
        <section id="workflow" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20">
              <Layers size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Workflow Insight: Dari Klien Menjadi Sistem</h2>
            <p className="text-slate-400 max-w-xl text-sm">Bagaimana Prilude Studio mengonversi kebutuhan mentah klien menjadi arsitektur aplikasi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
              <div className="text-xs text-cyan-400 font-mono tracking-wider font-bold">01 / PRA-DESAIN</div>
              <h3 className="text-lg font-semibold text-slate-200">Figma untuk Demo Klien</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sebelum masuk ke proses koding, Prilude menggunakan <b>Figma</b> untuk membuat purwarupa desain interaktif. Tujuannya adalah menyamakan persepsi dengan klien agar alur aplikasi disepakati di awal sebelum resource developer dikerahkan.
              </p>
            </div>
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
              <div className="text-xs text-indigo-400 font-mono tracking-wider font-bold">02 / ARSITEKTUR</div>
              <h3 className="text-lg font-semibold text-slate-200">Desain ERD over UML</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Menariknya, industri cenderung <b>jarang menggunakan UML</b> yang kaku. Tim Prilude Studio lebih berfokus pada perancangan <b>ERD (Entity-Relationship Diagram)</b> yang adaptif untuk memetakan integritas data, sehingga proses migrasi database menjadi jauh lebih taktis.
              </p>
            </div>
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-3 hover:border-slate-800 transition">
              <div className="text-xs text-purple-400 font-mono tracking-wider font-bold">03 / DISTRIBUSI</div>
              <h3 className="text-lg font-semibold text-slate-200">CI/CD & Play Store</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Setiap baris kode didorong (<b>push</b>) ke repositori <b>GitHub</b>. Otomatisasi rilis memanfaatkan <b>GitHub Actions CI/CD</b> untuk deploy aplikasi web, serta pipeline distribusi otomatis menuju <b>Play Store</b> untuk aplikasi mobile mereka.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECH STACK BREAKDOWN */}
        <section id="tech" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 border border-emerald-500/20">
              <Code size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tech Stack & Pilihan Arsitektur</h2>
            <p className="text-slate-400 max-w-xl text-sm">Kombinasi teknologi yang dipilih Prilude untuk menyeimbangkan kecepatan dan performa bisnis.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Andalan Backend & Frontend
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex gap-3 items-start">
                  <div className="p-1.5 bg-slate-800 rounded text-slate-200 mt-0.5"><Globe size={16} /></div>
                  <p><strong className="text-slate-200 block mb-0.5">Laravel Framework:</strong> Menjadi andalan utama backend karena ekosistemnya yang matang, dokumentasi lengkap, dan sangat cepat untuk pengerjaan proyek berskala kecil hingga menengah.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-1.5 bg-slate-800 rounded text-slate-200 mt-0.5"><Smartphone size={16} /></div>
                  <p><strong className="text-slate-200 block mb-0.5">Spring Boot:</strong> Digunakan secara khusus untuk kebutuhan sistem tingkat enterprise (<b>enterprise backend</b>). Menawarkan konkurensi tinggi, keamanan ketat, dan performa yang sangat stabil untuk memproses beban data yang masif.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" /> Justifikasi & Trade-off Realistis
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Kecepatan vs Skalabilitas</h4>
                  <p className="leading-relaxed">Prilude tidak memakai satu teknologi untuk semua masalah. Laravel dipilih saat efisiensi waktu dan budget klien menjadi prioritas utama (<b>time-to-market</b>), sedangkan Spring Boot diturunkan saat keandalan transaksi data mutlak diperlukan.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 mb-1">Alasan Memangkas Dokumentasi UML</h4>
                  <p className="leading-relaxed">Di industri agensi yang bergerak sangat dinamis, dokumentasi UML yang terlalu detail seringkali usang dalam hitungan minggu karena perubahan kebutuhan klien. ERD dinilai jauh lebih representatif terhadap kode program akhir.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KULTUR KERJA & AI INTEGRATION */}
        <section id="culture" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
              <Brain size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Kultur Kerja & Peran AI Copilot</h2>
            <p className="text-slate-400 max-w-xl text-sm">Bagaimana tim berkolaborasi setiap hari dan memanfaatkan kecerdasan buatan dengan bijak.</p>
          </div>

          <div className="bg-slate-900/20 border border-slate-900 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200">Akselerasi via Copilot & Antigravity AI</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Developer di Prilude Studio memanfaatkan extension kecerdasan buatan seperti <b>GitHub Copilot di VS Code</b> dan <b>Antigravity AI</b> untuk mempercepat penulisan baris kode repetitif (<b>boilerplate</b>) serta optimasi refactoring fungsi.
              </p>
              <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Prinsip Utama Developer</p>
                <p className="text-slate-300 text-xs leading-relaxed italic">
                  "AI hanyalah alat pembantu kecepatan. Nilai utama yang wajib dimiliki seorang engineer tetaplah pemahaman mendalam tentang konsep fundamental coding dan proses fundamental pemecahan masalah UI/UX."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-slate-400"><strong className="text-slate-200">Manajemen Harian Trello:</strong> Prilude menerapkan budaya unik pembagian tugas harian secara transparan menggunakan papan <b>Trello</b>, memastikan alur pengerjaan terdokumentasi dengan rapi.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-slate-400"><strong className="text-slate-200">Optimasi Pemasaran via SEO:</strong> Selain membangun kualitas produk digital yang solid dari sisi kode, aspek komersial seperti <b>Search Engine Optimization</b> (SEO) diintegrasikan agar website klien mudah bersaing di halaman pencarian Google.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MATEMATIKA BISNIS & LEGALITAS */}
        <section id="insights" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
              <Key size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Temuan (Key Insights)</h2>
            <p className="text-slate-400 max-w-xl text-sm">Wawasan esensial di luar bangku kuliah yang kami pelajari langsung dari para praktisi.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-slate-900/40 border-l-4 border-cyan-500 p-6 rounded-r-2xl space-y-2">
              <p className="text-slate-200 font-semibold text-sm flex items-center gap-1.5">
                <Landmark size={16} className="text-cyan-400" /> Rumus Penentuan Kapasitas Klien & Biaya
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Di industri perangkat lunak, harga sebuah aplikasi tidak ditentukan asal tembak. Prilude mengonversikan seluruh fitur ke dalam satuan <b>Hari Kerja (Man-Days)</b>, menghitung jumlah personil yang dialokasikan, menambahkan biaya operasional, serta menyisipkan margin profit perusahaan sebelum menerbitkan kesepakatan kontrak tertulis (<b>MoU</b>).
              </p>
            </blockquote>
            
            <blockquote className="bg-slate-900/40 border-l-4 border-indigo-500 p-6 rounded-r-2xl space-y-2">
              <p className="text-slate-200 font-semibold text-sm flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-indigo-400" /> Fleksibilitas Legalitas Hukum Modern
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sebuah wawasan hukum bisnis baru yang sangat relevan untuk karir mahasiswa: regulasi hukum di Indonesia saat ini telah mempermudah legalitas entitas bisnis digital. Kini, <b>cukup satu orang saja sudah bisa mendirikan badan hukum resmi berbentuk Perseroan Terbatas (PT Perorangan)</b> untuk mengamankan proyek formal dari korporasi besar.
              </p>
            </blockquote>
          </div>
        </section>

        {/* SECTION 5: VIDEO DOKUMENTASI (REELS) */}
        <section className="space-y-8 bg-gradient-to-b from-slate-900/40 to-transparent p-8 md:p-12 rounded-3xl border border-slate-900/60">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-rose-500/10 rounded-xl text-rose-400 border border-rose-500/20">
              <Video size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dokumentasi Sinematik (Reels)</h2>
            <p className="text-slate-400 max-w-xl text-sm">Video rangkuman aktivitas kunjungan industri berdurasi 60-90 detik (Cinematic, No Talking, Rich Information Text).</p>
          </div>

          <div className="max-w-sm mx-auto aspect-[9/16] bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-500 p-6 text-center overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
            <Video size={36} className="mb-2 text-slate-700 group-hover:scale-110 transition duration-300" />
            <span className="text-sm font-semibold text-slate-300">Kontainer Video Kelompok 4</span>
            <span className="text-xs text-slate-600 mt-2 max-w-[220px]">
              Tempel tag `iframe` embed Instagram Reels atau short video kelompok Anda di blok baris ini nanti.
            </span>
          </div>
        </section>

        {/* SECTION 6: KONTRIBUSI TIM (REAL INDUSTRY TWIST - WITH NIM) */}
        <section id="team" className="space-y-12 border-t border-slate-900 pt-16">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
              <Users size={20} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pembagian Peran & Refleksi Individu</h2>
            <p className="text-slate-400 max-w-xl text-sm">Penilaian objektivitas porsi kerja dan tantangan riil yang dihadapi setiap anggota kelompok.</p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-slate-800 transition group">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 shrink-0">
                  {member.icon}
                </div>
                <div className="space-y-4 w-full">
                  <div>
                    <h3 className="font-bold text-lg text-slate-100 group-hover:text-cyan-400 transition">{member.name}</h3>
                    {/* NIM LABEL DENGAN LOOKS MONOSPACE ANAK IT */}
                    <p className="text-xs font-mono text-slate-400 mt-0.5">NIM. {member.nim}</p>
                    <p className="text-xs font-mono text-cyan-500 uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-slate-950 text-xs text-slate-400">
                    <div>
                      <span className="block font-bold text-slate-300 uppercase tracking-wide mb-1">Kontribusi Aktif:</span>
                      <p className="leading-relaxed">"{member.contribution}"</p>
                    </div>
                    <div>
                      <span className="block font-bold text-pink-500 uppercase tracking-wide mb-1">Tantangan Pribadi:</span>
                      <p className="leading-relaxed italic">"{member.challenge}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center text-xs text-slate-600">
        <p>© 2026 Kelompok 4 Visitasi Prilude Studio.</p>
      </footer>
    </div>
  );
}