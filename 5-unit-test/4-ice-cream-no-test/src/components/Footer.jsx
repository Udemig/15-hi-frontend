import { FaInstagram, FaFacebook } from "react-icons/fa";

const FOOTER_LINKS = [
  "Gizlilik Politikası",
  "Kullanım Koşulları",
  "Yardım",
  "İletişim",
];

const SOCIALS = [
  { label: "Instagram", icon: FaInstagram },
  { label: "Facebook", icon: FaFacebook },
];

const Footer = () => {
  return (
    <footer
      id="iletisim"
      className="bg-surface-container border-t border-outline-variant/20 mt-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-gutter py-lg max-w-container-max mx-auto gap-md">
        {/* Brand & copyright */}
        <div className="flex flex-col space-y-4 max-w-[20rem]">
          <span className="font-headline-md text-headline-md text-primary font-bold">
            The Artisanal Scoop
          </span>
          <p className="font-body-md text-body-md text-on-secondary-container text-sm opacity-80">
            Özenle seçilmiş malzemelerle, sevgiyle hazırlanan el yapımı
            dondurmalar.
          </p>
          <p className="font-label-sm text-label-sm text-on-secondary-container mt-4 opacity-60">
            © 2024 The Artisanal Scoop. Tüm hakları saklıdır.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm hover:translate-x-1 transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none rounded-sm active:text-primary"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex space-x-4">
          {SOCIALS.map((social) => (
            <button
              key={social.label}
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-surface text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all border border-outline-variant/30 active:scale-90 active:shadow-none"
            >
              <social.icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
