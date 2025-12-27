'use client';

import Link from 'next/link';

const features = [
  {
    title: 'Bina Analizi',
    description: 'Mevzuata uygunluk kontrolü ve risk değerlendirmesi',
  },
  {
    title: 'Otomatik Hesaplamalar',
    description: 'Sprinkler, algılama ve söndürme sistem hesaplamaları',
  },
  {
    title: 'Proje Yönetimi',
    description: 'Tüm yangın güvenliği projelerinizi tek platformda yönetin',
  },
  {
    title: 'Raporlama',
    description: 'Detaylı PDF raporları ve resmi başvuru dokümanları',
  },
  {
    title: 'Kurum Yönetimi',
    description: 'Çoklu kurum ve kullanıcı desteği',
  },
  {
    title: 'Bulut Tabanlı',
    description: 'Her yerden erişim, otomatik yedekleme',
  },
];

export default function Software() {
  return (
    <section id="yazilim" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#c41e3a] bg-[#c41e3a]/10 rounded-full uppercase mb-4">
              Yazılım Ürünü
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Redwall Pro
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Yangın güvenliği süreçlerinizi dijitalleştiren, mevzuat uyumluluğunu
              otomatik kontrol eden ve projelerinizi uçtan uca yöneten bulut tabanlı platform.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg className="w-5 h-5 text-[#c41e3a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://redwallpro.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c41e3a] text-white rounded-lg font-medium hover:bg-[#a01830] transition-colors"
              >
                Demo Talep Et
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="https://app.redwall.tr"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Platformu İncele
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c41e3a]/5 to-[#2c3e50]/5 rounded-3xl blur-2xl"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                {/* Browser dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Mock dashboard content */}
                <div className="space-y-4">
                  {/* Header bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#c41e3a] rounded-lg"></div>
                      <span className="text-white font-medium">Redwall Pro</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-20 h-6 bg-white/10 rounded"></div>
                      <div className="w-20 h-6 bg-white/10 rounded"></div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">24</div>
                      <div className="text-xs text-gray-400">Aktif Proje</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-[#c41e3a]">98%</div>
                      <div className="text-xs text-gray-400">Uyumluluk</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">12</div>
                      <div className="text-xs text-gray-400">Tamamlanan</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#c41e3a] to-[#c41e3a]/50 rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 mt-2">Aylık Analiz Raporu</div>
                  </div>

                  {/* List items */}
                  <div className="space-y-2">
                    {['Bina A - Sprinkler Hesabı', 'Bina B - Risk Analizi', 'Bina C - Mevzuat Kontrolü'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2">
                        <span className="text-sm text-gray-300">{item}</span>
                        <div className="w-16 h-1.5 bg-[#c41e3a]/30 rounded-full overflow-hidden">
                          <div className="h-full bg-[#c41e3a] rounded-full" style={{ width: `${70 + i * 10}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
