// Resimleri daha optimize ekrana basan bileşen
import Image from "next/image";

// local image
import localImage from "../../assets/mountain.jpg";

// remote url
const remoteUrl =
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Gallery = () => {
  return (
    <div>
      <div>
        <h1>Local Resim - Optimizasyon Yok</h1>

        <Image src={localImage} alt="dağ" unoptimized />
      </div>

      <div className="relative">
        <h1>Local Resim - Optimizasyon Var</h1>

        <Image src={localImage} alt="dağ" quality={99} priority placeholder="blur" />
      </div>

      <div>
        <h1>Remote Resim - Optimizasyon Yok</h1>

        <Image src={remoteUrl} alt="ağaçlar" width={800} height={400} unoptimized />
      </div>

      <div>
        <h1>Remote Resim - Optimizasyon Var</h1>

        <Image src={remoteUrl} alt="ağaçlar" width={800} height={400} />
      </div>
    </div>
  );
};

export default Gallery;
