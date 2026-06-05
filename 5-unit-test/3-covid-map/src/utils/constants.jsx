export const mockStatisticsData = {
  data: {
    date: "2023-03-09",
    last_update: "2023-03-10 04:21:03",
    confirmed: 658544789,
    confirmed_diff: 194101,
    deaths: 6381737,
    deaths_diff: 1854,
    recovered: 0,
    recovered_diff: 0,
    active: 669663032,
    active_diff: 192247,
    fatality_rate: 0.0102,
  },
};

export const mapStyles = {
  default: {
    fill: "white",
    stroke: "#9f9fa9",
    strokeWidth: 0.8,
    outline: "none",
    transition: "all 0.3s ease",
  },
  hover: {
    fill: "#DB2777",
    stroke: "#BE185D",
    strokeWidth: 0.1,
    outline: "none",
    cursor: "pointer",
  },
  pressed: {
    fill: "#9D174D",
    outline: "none",
  },
};

export const mockDetailData = {
  fatality_rate: 0.0127,
  confirmed: 160433,
  active: 158390,
  deaths: 2043,
  country: "Brazil",
  continent: "Americas",
  population: 213421037,
  capital: "Brasília",
  flag: {
    png: "https://flagcdn.com/w320/br.png",
    svg: "https://flagcdn.com/br.svg",
    alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center.",
  },
  currency: "Brazilian real",
};
