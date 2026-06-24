import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { ICar } from "../../types";
import Loading from "../loading";
import Error from "../error";
import Container from "../container";
import Card from "../card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  // url'deki parametrelere eriş
  const make: string = searchParams.get("make") || "";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";

  useEffect(() => {
    setIsLoading(true);

    fetchCars(make, model, year)
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [make, model, year]);

  if (isLoading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <div className="padding-x max-width mb-10">
      <div className="home-cars-wrapper">
        {!cars || cars?.length === 0 ? (
          <Container>Aradığınız araç bulunamadı</Container>
        ) : (
          cars?.map((car) => <Card key={car.id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default List;
