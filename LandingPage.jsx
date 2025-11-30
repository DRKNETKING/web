import React from "react";

export default function LandingPage() {
  return (
<div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Jasa Pembuatan Website Profesional</h1>
            <p className="mt-4 text-lg opacity-95">Website modern • responsif • cepat • SEO dasar — Cocok untuk UMKM, toko online, portofolio & layanan.</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:dullbibb@gmail.com"
                className="inline-block px-5 py-3 rounded-xl bg-white text-indigo-600 font-semibold shadow-md hover:shadow-lg"
                aria-label="Kontak via email"
              >
                Hubungi via Email
              </a>

              <a
                href="https://wa.me/6281123456789?text=Halo%20saya%20ingin%20pesan%20jasa%20website"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 rounded-xl bg-indigo-800/80 text-white font-semibold shadow-md hover:shadow-lg"
                aria-label="Kontak via WhatsApp"
              >
                Chat via WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm opacity-80">Lokasi: Tangerang • Melayani seluruh Indonesia</p>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-3">Paket Populer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Basic — Rp 500.000</div>
                    <div className="text-sm opacity-80">Landing page + kontak + optimisasi dasar</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Standard — Rp 1.200.000</div>
                    <div className="text-sm opacity-80">Website 4 halaman, form, integrasi WA, SEO dasar</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2" />
                  <div>
                    <div className="font-medium">Premium — Rp 2.500.000</div>
                    <div className="text-sm opacity-80">Toko online, payment, kontrol stok, pelatihan singkat</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <a
                  href="mailto:dullbibb@gmail.com?subject=Pesanan%20Website%20-%20Paket%20Standard"
                  className="block text-center px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:opacity-95"
                >
                  Pesan Sekarang
                </a>
                <p className="mt-3 text-xs opacity-70 text-center">Tanya dulu? Balas via WhatsApp untuk respons cepat.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold">Desain Modern</h4>
            <p className="mt-2 text-sm opacity-80">Tampilan elegan yang sesuai brand Anda — pilihan tema & warna bebas request.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold">Responsif & Cepat</h4>
            <p className="mt-2 text-sm opacity-80">Optimal untuk mobile dan desktop, loading cepat agar pelanggan tidak cabut.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold">SEO Dasar</h4>
            <p className="mt-2 text-sm opacity-80">Setup meta tag, struktur heading, dan optimisasi gambar untuk performa awal.</p>
          </div>
        </div>
      </section>

      {/* Portfolio & Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Contoh Hasil Kerja</h3>
              <p className="mt-2 text-sm opacity-80">Lihat portofolio lengkap di link berikut.</p>
              <a
                href="https://drknetking.github.io/my-portofolioooo/#"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium"
              >
                Lihat Portofolio
              </a>
            </div>

            <div className="flex-1">
              <blockquote className="border-l-4 border-indigo-200 pl-4 italic text-sm">
                "Website kami jadi cepat dan banyak pelanggan baru — Recommended!" <br />
                <span className="font-semibold">— Pelanggan, UMKM Tangerang</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-semibold">Pertanyaan Umum</h3>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li>
              <strong>Berapa lama pengerjaan?</strong> Biasanya 3–7 hari kerja tergantung kompleksitas.
            </li>
            <li>
              <strong>Bagaimana metode pembayaran?</strong> Transfer bank / e-wallet. DP sebelum mulai.
            </li>
            <li>
              <strong>Apakah ada garansi?</strong> Perbaikan bug gratis selama 14 hari setelah serah terima.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Jasa Pembuatan Website — Tangerang</div>
            <div className="text-xs opacity-80">Email: dullbibb@gmail.com</div>
          </div>

          <div className="text-sm opacity-80">© {new Date().getFullYear()} — Dibuat untuk membantu usaha kecil tumbuh</div>
        </div>
      </footer>
    </div>
  );
}