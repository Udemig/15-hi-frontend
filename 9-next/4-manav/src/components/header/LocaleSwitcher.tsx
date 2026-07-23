"use client";

import { routing } from "@/i18n/routing";
import { Locale, useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChangeEvent, FC, useTransition } from "react";
import { TbWorld } from "react-icons/tb";

const LocaleSwitcher: FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LocaleSwitcher");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // yeni seçilen dili al
    const selectedLang = event.target.value as Locale;

    // aktif yolu koruyarak dil değiştirir
    startTransition(() => {
      router.replace(pathname, { locale: selectedLang });
    });
  };

  return (
    <label className="header-link cursor-pointer">
      <TbWorld className="text-2xl" />

      <select
        value={locale}
        disabled={isPending}
        onChange={handleChange}
        className="bg-transparent outline-none cursor-pointer"
      >
        {routing.locales.map((lang) => (
          <option key={lang} value={lang}>
            {t(lang)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
