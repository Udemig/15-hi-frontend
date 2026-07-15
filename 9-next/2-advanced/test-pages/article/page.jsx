const Article = () => {
  return (
    <div className="p-10 text-2xl">
      <h1 className="text-4xl mb-2 font-singsong">Next.js Nedir?</h1>
      <p className="font-oswald">
        Next.js, modern web siteleri ve uygulamaları oluşturmak için kullanılan popüler bir React
        framework'üdür. Geliştiricilerin sıfırdan kurması gereken yönlendirme (routing), performans
        optimizasyonları ve sunucu taraflı oluşturma (SSR) gibi temel özellikleri hazır olarak sunar
      </p>

      <h1 className="text-4xl mb-2 mt-10 font-singsong">Tanstack Query Nedir?</h1>
      <p className="font-oswald">
        TanStack Query (eski adıyla React Query), modern web uygulamalarında sunucu verilerini
        (API'ler, veritabanları) çekme, önbelleğe alma (caching), senkronize etme ve güncelleme
        süreçlerini otomatikleştiren güçlü bir veri yönetimi kütüphanesidir. Veri akışını çok daha
        hızlı ve ölçeklenebilir hale getirir
      </p>
    </div>
  );
};

export default Article;
