import { MdBakeryDining, MdLocalShipping, MdVolunteerActivism } from "react-icons/md";

const FEATURES = [
  {
    icon: MdBakeryDining,
    title: "Günlük Üretim",
    description: "Taze ve el yapımı",
    blob: "bg-tertiary-container/20",
    chip: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    icon: MdLocalShipping,
    title: "Hızlı Teslimat",
    description: "Özel soğutmalı araçlarla",
    blob: "bg-secondary-container/40",
    chip: "bg-secondary-container text-on-secondary-container",
  },
  {
    icon: MdVolunteerActivism,
    title: "Vegan Seçenekler",
    description: "Herkes için lezzet",
    blob: "bg-primary-container/20",
    chip: "bg-primary-container text-on-primary-container",
  },
];

const Features = () => {
  return (
    <section
      id="hakkimizda"
      className="py-xl px-gutter bg-surface-container-lowest border-y border-outline-variant/20"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-xl">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center group"
          >
            <div className="relative mb-6">
              <div
                className={`absolute inset-0 ${feature.blob} organic-blob transform group-hover:scale-110 transition-transform duration-500`}
              ></div>
              <div className={`relative ${feature.chip} p-6 rounded-full shadow-sm`}>
                <feature.icon size={32} />
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
              {feature.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
