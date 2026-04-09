// fiyatı formatla
export const formatPrice = (price) => {
  if (!price) return "N/A";

  const absPrice = Math.abs(price);

  if (absPrice < 0.01) return `$${price.toFixed(6)}`;
  if (absPrice < 1) return `$${price.toFixed(4)}`;
  if (absPrice < 100) return `$${price.toFixed(2)}`;

  return `$${price.toLocaleString()}`;
};

// yüzdelik değeri formatla
export const formatPercantage = (value) => {
  if (value === null) return "N/A";

  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  const formatted = Math.abs(value).toFixed(2);

  return `${sign}${formatted}%`;
};

// büyük sayıları formatla
export const formatBigNumber = (value) => {
  if (value === null) return "N/A";

  //todo: parametre olarak gelen değerin basamak sayısına göre böl

  return "işlenmiş";
};
