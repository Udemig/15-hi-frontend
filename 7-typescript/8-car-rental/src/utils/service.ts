import type { ICarResponse } from "../types";

export const fetchCars = async (
  make: string,
  model: string,
  year: string,
): Promise<ICarResponse> => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records/?lang=en&limit=30&order_by=-year`;

  if (make) {
    url += `&where=make:"${make}"`;
  }

  if (model) {
    url += `&where=model:"${model}"`;
  }

  if (year) {
    url += `&refine=year:"${year}"`;
  }

  const res = await fetch(url);

  return await res.json();
};
