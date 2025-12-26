'use client';

import Image from 'next/image';

const stats = [
  { value: '20+', label: 'Yıllık Deneyim' },
  { value: '1500+', label: 'Tamamlanan Proje' },
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '50+', label: 'Uzman Kadro' },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Güvenilirlik',
    description: 'TSE ve ISO belgeli, sektörde güvenilir bir marka olarak hizmet veriyoruz.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Hız',
    description: 'Projelerinizi zamanında ve bütçe dahilinde tamamlıyoruz.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'İnovasyon',
    description: 'En güncel teknolojileri ve yöntemleri kullanarak çözümler sunuyoruz.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Uzman Ekip',
    description: 'Deneyimli mühendisler ve teknisyenlerden oluşan profesyonel kadromuz.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
              Hakkımızda
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Yangın Güvenliğinde{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                20 Yılı Aşkın
              </span>{' '}
              Tecrübe
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Redwall Yangın Danışmanlık, Mühendislik ve Uygulama olarak 2004 yılından bu yana
              Türkiye&apos;nin dört bir yanında binlerce projeye imza attık. Yangın güvenliği konusunda
              A&apos;dan Z&apos;ye tüm süreçlerde müşterilerimizin yanında yer alıyoruz.
            </p>
            <p className="text-gray-600 mb-8">
              Misyonumuz, can ve mal güvenliğini en üst düzeyde sağlamak için en güncel teknolojileri
              ve mühendislik çözümlerini kullanarak, standartlara uygun ve kaliteli hizmet sunmaktır.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats & Image */}
          <div className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Belgelerimiz & Sertifikalarımız</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  TSE Belgeli
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  ISO 9001
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  ISO 14001
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  OHSAS 18001
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  CE Belgeli
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
                  TÜRKAK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Referans Projelerimiz
            </h3>
            <p className="text-gray-600">
              AVM, hastane, otel, fabrika ve birçok farklı sektörde başarıyla tamamladığımız projeler.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { type: 'AVM & Alışveriş Merkezleri', count: '150+' },
              { type: 'Hastane & Sağlık Tesisleri', count: '80+' },
              { type: 'Otel & Konaklama', count: '120+' },
              { type: 'Endüstriyel Tesisler', count: '200+' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-red-50 transition-colors group"
              >
                <div className="text-3xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">
                  {item.count}
                </div>
                <div className="text-sm text-gray-600">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
