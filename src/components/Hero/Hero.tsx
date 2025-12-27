'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto pt-12 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-[#c41e3a] text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Danışmanlık + Yazılım
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Yangın güvenliğini
            <br />
            <span className="text-[#c41e3a]">dijitalleştiriyoruz</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Uzman danışmanlık hizmetleri ve Redwall Pro yazılımı ile binalarınızın
            yangın güvenliği uyumluluğunu yönetin, analiz edin ve raporlayın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#iletisim"
              className="px-8 py-4 bg-[#c41e3a] text-white font-semibold rounded-lg hover:bg-[#a01830] transition-colors"
            >
              Demo Talep Et
            </Link>
            <Link
              href="#yazilim"
              className="px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Yazılımı İncele
            </Link>
          </div>
        </div>

        {/* Two column features */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
          {/* Consulting */}
          <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-[#2c3e50] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Danışmanlık Hizmetleri</h3>
            <p className="text-gray-600 mb-4">
              Yangın güvenliği mevzuatına uygunluk analizi, risk değerlendirmesi ve
              proje danışmanlığı ile güvende olun.
            </p>
            <Link href="#cozumler" className="text-[#c41e3a] font-medium hover:underline inline-flex items-center gap-1">
              Detaylı bilgi
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Software */}
          <div className="p-8 rounded-2xl bg-[#c41e3a]/5 hover:bg-[#c41e3a]/10 transition-colors border border-[#c41e3a]/10">
            <div className="w-12 h-12 bg-[#c41e3a] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-900">Redwall Pro</h3>
              <span className="px-2 py-0.5 bg-[#c41e3a] text-white text-xs font-medium rounded">Yazılım</span>
            </div>
            <p className="text-gray-600 mb-4">
              Bulut tabanlı yangın güvenliği yönetim platformu. Binalarınızın uygunluğunu
              analiz edin, raporlayın ve takip edin.
            </p>
            <Link href="#yazilim" className="text-[#c41e3a] font-medium hover:underline inline-flex items-center gap-1">
              Platformu keşfet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 pt-16 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium">TSE Belgeli</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-medium">500+ Bina</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-medium">200+ Kurumsal Müşteri</span>
          </div>
        </div>
      </div>
    </section>
  );
}
