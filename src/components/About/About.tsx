'use client';

const stats = [
  { value: '20+', label: 'Yıllık Deneyim' },
  { value: '1500+', label: 'Proje' },
  { value: '500+', label: 'Müşteri' },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16">
          {/* Left column - Main content */}
          <div className="lg:col-span-3">
            <span className="text-[#c41e3a] font-medium text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Danışmanlık ve teknoloji ile yangın güvenliğini yeniden tanımlıyoruz
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Redwall olarak, 20 yılı aşkın saha deneyimimizi modern yazılım çözümleriyle
                birleştirerek yangın güvenliği sektörünü dönüştürüyoruz.
              </p>
              <p>
                Danışmanlık, mühendislik ve uygulama hizmetlerimizin yanı sıra, geliştirdiğimiz
                Redwall Pro platformu ile müşterilerimize dijital bir deneyim sunuyoruz.
              </p>
              <p>
                Misyonumuz, yangın güvenliği süreçlerini daha şeffaf, ölçülebilir ve verimli
                hale getirmek.
              </p>
            </div>

            {/* Stats - inline */}
            <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Values & Certifications */}
          <div className="lg:col-span-2 mt-12 lg:mt-0">
            {/* Approach */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Yaklaşımımız</h3>
              <ul className="space-y-3">
                {[
                  'Mevzuata tam uyumluluk',
                  'Şeffaf iletişim ve raporlama',
                  'Teknoloji odaklı çözümler',
                  'Uzman mühendis kadrosu',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-[#c41e3a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Belgeler</h3>
              <div className="flex flex-wrap gap-2">
                {['TSE', 'ISO 9001', 'ISO 14001', 'OHSAS 18001', 'CE'].map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Sectors served */}
            <div className="mt-6 p-6 bg-slate-900 rounded-xl text-white">
              <h3 className="font-semibold mb-4">Hizmet Verdiğimiz Sektörler</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <div>• AVM & Perakende</div>
                <div>• Sağlık Tesisleri</div>
                <div>• Otel & Konaklama</div>
                <div>• Endüstriyel</div>
                <div>• Konut Projeleri</div>
                <div>• Eğitim Kurumları</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
