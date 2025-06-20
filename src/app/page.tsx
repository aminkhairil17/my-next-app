import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

// Data dummy
const heroData = {
  name: "Muhammad Khairil Amin, S.Kom",
  role: "Full Stack Web Developer | UI/UX Enthusiast",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Gambar online
  cta: "Hubungi Saya",
};
const aboutData = {
  title: "Tentang Saya",
  description:
    "Saya adalah pengembang web berpengalaman yang berfokus pada pembuatan aplikasi modern dan responsif. Saya suka mengeksplorasi teknologi baru dan mendesain antarmuka yang menarik serta mudah digunakan.",
};

const projectsData = [
  {
    title: "Aplikasi Kasir Modern",
    description:
      "Aplikasi kasir berbasis web dengan fitur laporan penjualan real-time dan integrasi printer struk.",
    link: "#",
  },
  {
    title: "Website Portfolio",
    description:
      "Website portfolio pribadi dengan tampilan interaktif dan animasi smooth.",
    link: "#",
  },
  {
    title: "Sistem Booking Online",
    description:
      "Platform booking online untuk layanan konsultasi dengan notifikasi otomatis.",
    link: "#",
  },
];

const contactData = {
  email: "khairilamin1217@gmail.com",
};
const medicalSolutions = [
  {
    icon: "🏥",
    title: "Sistem Informasi Rumah Sakit",
    desc: "Digitalisasi proses administrasi, rekam medis, dan manajemen pasien untuk efisiensi dan akurasi data.",
  },
  {
    icon: "🩺",
    title: "Integrasi Rekam Medis Elektronik",
    desc: "Menyatukan data pasien dari berbagai departemen agar dokter dan tenaga medis dapat mengakses informasi dengan mudah dan aman.",
  },
  {
    icon: "📊",
    title: "Automasi Laporan & Analitik",
    desc: "Pembuatan laporan otomatis dan dashboard analitik untuk mendukung pengambilan keputusan manajemen rumah sakit.",
  },
  {
    icon: "📅",
    title: "Sistem Booking & Antrian Online",
    desc: "Memudahkan pasien dalam melakukan reservasi layanan kesehatan dan mengurangi waktu tunggu di rumah sakit.",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="flex flex-col items-center justify-center py-28 bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 text-white relative overflow-hidden"
        >
          {/* Animated Technology Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Animated Dots */}
            <svg
              className="absolute top-0 left-0 w-full h-full animate-pulse"
              style={{ opacity: 0.15 }}
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
            {/* Moving Lines */}
            <svg
              className="absolute bottom-0 right-0 w-full h-full"
              style={{ opacity: 0.12 }}
            >
              <g className="animate-[moveLines_8s_linear_infinite]">
                <rect x="0" y="30" width="100%" height="2" fill="#fff" />
                <rect x="0" y="80" width="100%" height="2" fill="#fff" />
                <rect x="0" y="130" width="100%" height="2" fill="#fff" />
              </g>
              <style>
                {`
            @keyframes moveLines {
              0% { transform: translateY(0); }
              100% { transform: translateY(40px); }
            }
            .animate-\\[moveLines_8s_linear_infinite\\] {
              animation: moveLines 8s linear infinite;
            }
          `}
              </style>
            </svg>
            {/* Glowing Circles */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <img
            src={heroData.avatar}
            alt="Avatar"
            className="w-36 h-36 rounded-full shadow-2xl mb-6 border-4 border-white ring-4 ring-indigo-400 transition-transform duration-300 hover:scale-105 z-10"
          />
          <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg tracking-tight z-10">
            {heroData.name}
          </h1>
          <p className="text-xl font-medium mb-4 text-indigo-100 z-10">
            {heroData.role}
          </p>
          <div className="flex items-center gap-3 mb-6 z-10">
            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold shadow">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 18v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1"
                ></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Programmer Hebat
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m4 4h1a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2h1"
                ></path>
              </svg>
              UI/UX Enthusiast
            </span>
          </div>
          <a
            href="#contact"
            className="mt-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-pink-500 hover:to-yellow-400 transition-transform duration-200 z-10"
          >
            {heroData.cta}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4 z-10">
            <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono tracking-wide shadow border border-white/20">
              Typescript
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono tracking-wide shadow border border-white/20">
              React.js
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono tracking-wide shadow border border-white/20">
              Next.js
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono tracking-wide shadow border border-white/20">
              Tailwind CSS
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-mono tracking-wide shadow border border-white/20">
              UI/UX Design
            </span>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-3xl mx-auto py-20 px-6 text-center bg-white/80 rounded-3xl shadow-2xl mt-16 backdrop-blur-md border border-blue-100"
        >
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              alt="Hospital Developer"
              className="w-28 h-28 mb-6 rounded-full shadow-lg border-4 border-blue-200"
            />
            <h2 className="text-3xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
              {aboutData.title}
            </h2>
            <p className="text-gray-700 text-lg mb-4 font-medium">
              Saya adalah seorang programmer berpengalaman lebih dari 4 tahun di
              bidang pengembangan aplikasi rumah sakit. Fokus utama saya adalah
              membangun solusi digital modern yang memudahkan proses kerja dan
              meningkatkan pelayanan kesehatan dengan teknologi terkini.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-white px-4 py-2 rounded-full text-xs font-semibold shadow">
          Sistem Informasi Rumah Sakit
              </span>
              <span className="bg-gradient-to-r from-green-400 to-green-200 text-white px-4 py-2 rounded-full text-xs font-semibold shadow">
          Integrasi Rekam Medis
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-xs font-semibold shadow">
          Automasi Laporan
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow">
          Cloud & AI
              </span>
            </div>
          </div>
        </section>
        {/* Medical Solutions Section */}
        <section
          id="solutions"
          className="max-w-6xl mx-auto py-20 px-6 text-center"
        >
          <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
            Solusi Digital Modern untuk Dunia Medis
          </h2>
          <p className="mb-12 text-gray-700 text-lg font-medium">
            Saya berpengalaman membantu dokter, klinik, dan rumah sakit dalam
            mengembangkan sistem digital berbasis cloud, mobile, dan AI yang meningkatkan pelayanan serta efisiensi kerja.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {medicalSolutions.map((item, idx) => (
              <div
          key={idx}
          className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-10 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
          <div className="text-6xl mb-5 drop-shadow">{item.icon}</div>
          <h3 className="font-bold text-2xl mb-3 text-blue-700">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="bg-gradient-to-b from-gray-50 via-white to-blue-50 py-24 px-6"
        >
          <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-center tracking-tight">
            Proyek Unggulan Teknologi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projectsData.map((project, idx) => (
              <div
          key={idx}
          className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-10 hover:shadow-2xl transition-all duration-300 flex flex-col hover:scale-105"
              >
          <h3 className="font-bold text-2xl mb-4 text-gray-900">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-8 flex-1">
            {project.description}
          </p>
          <a
            href={project.link}
            className="inline-block mt-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
          >
            Lihat Detail
          </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-3xl mx-auto py-20 px-6 text-center"
        >
          <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
            Kontak & Kolaborasi
          </h2>
          <p className="text-gray-700 mb-8 text-lg font-medium">
            Email:{" "}
            <a
              href={`mailto:${contactData.email}`}
              className="text-blue-600 hover:underline"
            >
              {contactData.email}
            </a>
          </p>
          <form
            className="flex flex-col gap-6 bg-gradient-to-r from-blue-50 via-white to-purple-50 p-10 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden"
            action={`mailto:${contactData.email}`}
            method="POST"
            encType="text/plain"
          >
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg
          className="w-full h-full"
          style={{ opacity: 0.08 }}
              >
          <defs>
            <linearGradient id="formLines" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
          <rect x="0" y="20" width="100%" height="2" fill="url(#formLines)" />
          <rect x="0" y="60" width="100%" height="2" fill="url(#formLines)" />
          <rect x="0" y="100" width="100%" height="2" fill="url(#formLines)" />
              </svg>
              <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <input
              type="text"
              name="Nama"
              placeholder="Nama"
              className="p-4 rounded-xl border border-blue-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium text-gray-800 shadow z-10 transition-all duration-200 hover:border-purple-300"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="p-4 rounded-xl border border-blue-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium text-gray-800 shadow z-10 transition-all duration-200 hover:border-blue-300"
              required
            />
            <textarea
              name="Pesan"
              placeholder="Pesan"
              rows={4}
              className="p-4 rounded-xl border border-blue-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-gray-800 shadow z-10 transition-all duration-200 hover:border-purple-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-bold shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 tracking-wide z-10 flex items-center justify-center gap-2"
            >
              <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
              >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 17l4 4 4-4m-4-5v9"
          />
              </svg>
              Kirim Pesan
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
