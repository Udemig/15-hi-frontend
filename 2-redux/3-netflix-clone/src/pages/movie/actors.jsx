import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BASE_IMG_URL } from "../../utils/constants";

const Actors = ({ cast }) => {
  // TODO: Aktör'ün fotosu yüklenmezse default ayarla

  return (
    <div className="mb-15">
      <h2 className="font-semibold text-lg md:text-xl my-5">Oyuncular</h2>

      <Splide options={{ pagination: false, autoWidth: true, gap: "20px", type: "loop" }}>
        {cast.map((actor) => (
          <SplideSlide>
            <div className="w-40 h-full flex flex-col">
              <img
                src={BASE_IMG_URL + actor.profile_path}
                alt={actor.name}
                className="size-full rounded object-cover shadow"
              />

              <h2 className="text-center font-semibold mt-2 line-clamp-1">{actor.name}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Actors;
