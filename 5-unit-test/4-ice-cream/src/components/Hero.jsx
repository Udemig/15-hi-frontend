import { MdAutoAwesome, MdArrowForward, MdEco } from "react-icons/md";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=800&fit=crop";

const Hero = () => {
  return (
    <section className="relative pt-lg pb-xl px-gutter overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[60%] h-[80%] bg-surface-container rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-[10%] -mb-[10%] w-[40%] h-[60%] bg-secondary-container rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
        {/* Text content */}
        <div className="flex flex-col space-y-md">
          <div className="inline-flex items-center space-x-2 bg-surface-container-high text-primary px-4 py-2 rounded-full w-max">
            <MdAutoAwesome size={16} />
            <span className="font-label-sm text-label-sm tracking-wider uppercase">
              Yeni Sezon Tatları
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
            Doğallığın ve Lezzetin <br />
            <span className="text-primary italic">Renkli Buluşması</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[28rem]">
            El yapımı dondurmalarımızı doğal içerikler ve benzersiz tatlarla
            keşfedin. Her kaşıkta tazelik, her siparişte mutluluk.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#urunler"
              className="bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-on-primary-fixed-variant transition-all hover:scale-[1.02] active:scale-95 shadow-[0_8px_16px_rgba(157,61,44,0.15)] flex items-center space-x-2"
            >
              <span>Lezzetleri Keşfet</span>
              <MdArrowForward size={20} />
            </a>
            <button className="bg-surface-container-high text-on-surface font-label-lg text-label-lg px-8 py-4 rounded-full hover:bg-surface-dim transition-all hover:scale-[1.02] active:scale-95 border border-outline-variant/50">
              Hemen Sipariş Ver
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-square flex justify-center items-center">
          <div className="absolute inset-0 bg-secondary-container/30 organic-blob transform scale-105 z-0"></div>
          <img
            alt="Gurme artizan dondurma kasesi"
            className="w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 relative border-4 border-surface border-opacity-50"
            src={HERO_IMAGE}
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-surface-bright p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-4 border border-outline-variant/20">
            <div className="bg-primary-container text-on-primary-container p-3 rounded-full">
              <MdEco size={24} />
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">%100 Doğal</p>
              <p className="font-body-md text-body-md font-semibold text-on-surface">
                Katkısız İçerik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
