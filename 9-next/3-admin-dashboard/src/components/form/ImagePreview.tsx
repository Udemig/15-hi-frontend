"use client";

import { FC, useEffect, useState } from "react";
import Field from "./Field";
import Image from "next/image";

const ImagePreview: FC = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // resim url'inin girildiği input'un değerini al
    const imageInput = document.getElementById("image_url") as HTMLInputElement;

    // inputa girdi olayında çalışır
    const handleInput = () => {
      const url = imageInput.value.trim();
      setImageUrl(url);

      if (url) {
        setIsLoading(true);
        // sanal bir resim elementi oluştur
        const testImg = new globalThis.Image();

        // resmin yüklenme durumunu izle
        testImg.onload = () => {
          setIsLoading(false);
          setIsValid(true);
        };

        // resmin hata durumunu izle
        testImg.onerror = () => {
          setIsLoading(false);
          setIsValid(false);
        };

        // test resminin kaynağını ayarla
        testImg.src = url;
      }
    };

    // inputa olay izleyicisi ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleInput);
    }

    // sayfadan ayrılınca olay izleyicisini durdur
    return () => imageInput.removeEventListener("input", handleInput);
  }, []);

  return (
    <Field label="Resim Önizleme" htmlFor="">
      <div className="relative h-48 w-full bg-zinc-50 rounded-lg overflow-hidden border border-dashed border-zinc-300">
        {isLoading ? (
          <div className="grid place-items-center size-full text-sm text-zinc-400 animate-pulse">
            Resim Yükleniyor..
          </div>
        ) : isValid && imageUrl ? (
          <Image src={imageUrl} alt="Önizleme" fill unoptimized className="object-contain p-2" />
        ) : (
          <div className="grid place-items-center size-full text-sm text-zinc-400">
            {imageUrl === "" ? "Henüz resim yok" : "Geçersiz URL"}
          </div>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
