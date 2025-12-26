'use client';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Yangın Güvenliği Danışmanlığı',
    description: 'Binalarınızın yangın yönetmeliklerine uygunluğunu değerlendiriyor, eksiklikleri tespit edip çözüm önerileri sunuyoruz.',
    features: ['Mevzuat uygunluk analizi', 'Risk değerlendirmesi', 'Yangın güvenliği raporları', 'Resmi başvuru desteği'],
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Mühendislik Hizmetleri',
    description: 'Yangın algılama, söndürme ve tahliye sistemlerinin projelendirmesi ve mühendislik hesaplarını yapıyoruz.',
    features: ['Sprinkler sistem projeleri', 'Yangın algılama sistemleri', 'Duman tahliye projeleri', 'Mekanik tesisat projeleri'],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Uygulama & Taahhüt',
    description: 'Yangın güvenliği sistemlerinin kurulumu, montajı ve devreye alınmasını anahtar teslim olarak gerçekleştiriyoruz.',
    features: ['Sprinkler montajı', 'Yangın dolabı kurulumu', 'Alarm sistemi montajı', 'Yangın merdiveni yapımı'],
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Periyodik Bakım & Kontrol',
    description: 'Mevcut yangın güvenliği sistemlerinizin düzenli bakım ve kontrollerini yaparak sürekli çalışır durumda tutuyoruz.',
    features: ['Yıllık kontroller', 'Bakım sözleşmeleri', '7/24 teknik destek', 'Arıza müdahale'],
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Yangın Söndürme Sistemleri',
    description: 'Su bazlı, gazlı ve köpüklü söndürme sistemlerinin projelendirmesi, temini ve montajını yapıyoruz.',
    features: ['Sprinkler sistemleri', 'FM200 / Novec gazlı sistemler', 'Köpüklü söndürme', 'Yangın dolapları'],
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Eğitim & Tatbikat',
    description: 'Personel yangın güvenliği eğitimleri ve tahliye tatbikatları ile hazırlık seviyenizi artırıyoruz.',
    features: ['Yangın eğitimleri', 'Tahliye tatbikatları', 'İlk müdahale eğitimi', 'Yangın söndürücü kullanımı'],
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Yazılım Çözümleri',
    description: 'Yangın güvenliği yönetim yazılımları ile binalarınızın uygunluğunu dijital ortamda analiz edin ve raporlayın.',
    features: ['Redwall Pro platformu', 'Uygunluk analizi yazılımı', 'Dijital raporlama', 'Bulut tabanlı yönetim'],
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500/10',
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Yangın Güvenliğinde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Kapsamlı Çözümler
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Danışmanlıktan uygulamaya, projeden bakıma kadar tüm yangın güvenliği ihtiyaçlarınız için tek adres.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">İhtiyacınıza uygun çözümü birlikte belirleyelim</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all"
          >
            Ücretsiz Keşif Talep Et
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
