const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Crypto Tracker. Eğitim amaçlı proje</p>
          </div>

          <div className="text-sm text-gray-500">
            <span>API: CoinGecko •</span>
            <span>React + TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
