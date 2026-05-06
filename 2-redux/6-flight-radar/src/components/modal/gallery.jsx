import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Gallery = ({ images }) => {
  const arr = images?.large ? images.large : images?.medium ? images.medium : images?.thumbnails || [];

  return (
    <div className="rounded-2xl overflow-hidden">
      {arr.length === 0 ? (
        <div className="h-45 bg-zinc-200/10 grid place-items-center rounded-2xl text-zinc-300">
          <span>Fotoğraf içeriği bulunmuyor</span>
        </div>
      ) : (
        <Splide>
          {arr.map((item, key) => (
            <SplideSlide key={key}>
              <img src={item.src} alt={item.copyright} className="hover:scale-105 transition" />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Gallery;
