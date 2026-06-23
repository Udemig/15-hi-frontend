//TODO: return tipi tanımla
export const fetchCars = async () => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records/?lang=en&limit=30`;

  const res = await fetch(url);

  return await res.json();
};
