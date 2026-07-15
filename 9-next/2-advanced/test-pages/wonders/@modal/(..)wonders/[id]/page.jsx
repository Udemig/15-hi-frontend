"use client";

// relative import
// import { data } from "../../../../../utils/constants";

// absolute import
import { data } from "@/utils/constants";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const DetailModal = () => {
  const router = useRouter();
  const { id } = useParams();
  const wonder = data.find((item) => item.id === id);

  // x butonuna tıklanınca önceki sayfaya yönlendir
  const handleClose = () => {
    // 1 sayfa geriye yönlendirir
    router.back();
    // 1 sayfa ileriye yönlendirir
    router.forward();
    // belirli sayfaya yönlendirir
    router.push("/adres");
    // belirli sayfaya yönlendirir (geçmiş olmasın)
    router.replace("/adres");
    // sayfayı yeniden renderşa
    router.refresh();
  };

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center backdrop-blur-xs z-999 p-10">
      <div className="bg-white text-black px-10 pb-10 rounded-md max-w-lg">
        <div className="flex justify-end my-5 text-2xl">
          <button onClick={handleClose}>X</button>
        </div>

        <h1 className="text-center font-bold text-3xl">{wonder.name}</h1>

        <Image
          src={wonder.src}
          alt={wonder.name}
          className="max-h-75 my-5 text-3xl object-cover rounded-md aspect-square"
        />

        <h3 className="my-6">{wonder.photographer}</h3>

        <h3>Lokasyon: {wonder.photographer}</h3>
      </div>
    </div>
  );
};

export default DetailModal;
