/**
 * Sample weather dataset — simulates API responses without network calls.
 */

/** @typedef {'sunny' | 'cloudy' | 'partly-cloudy' | 'rainy' | 'snowy' | 'stormy'} WeatherCondition */

/**
 * @typedef {Object} WeatherRecord
 * @property {string} city
 * @property {number} temperature
 * @property {number} feelsLike
 * @property {number} humidity
 * @property {number} windSpeed
 * @property {WeatherCondition} condition
 * @property {string} conditionLabel
 */

/** @type {Record<string, WeatherRecord>} */
export const weatherDatabase = {
  istanbul: {
    city: "İstanbul",
    temperature: 22,
    feelsLike: 24,
    humidity: 68,
    windSpeed: 14,
    condition: "partly-cloudy",
    conditionLabel: "Parçalı Bulutlu",
  },
  ankara: {
    city: "Ankara",
    temperature: 18,
    feelsLike: 16,
    humidity: 42,
    windSpeed: 22,
    condition: "cloudy",
    conditionLabel: "Bulutlu",
  },
  izmir: {
    city: "İzmir",
    temperature: 26,
    feelsLike: 27,
    humidity: 55,
    windSpeed: 11,
    condition: "sunny",
    conditionLabel: "Güneşli",
  },
  antalya: {
    city: "Antalya",
    temperature: 29,
    feelsLike: 31,
    humidity: 58,
    windSpeed: 9,
    condition: "sunny",
    conditionLabel: "Güneşli",
  },
  trabzon: {
    city: "Trabzon",
    temperature: 16,
    feelsLike: 15,
    humidity: 82,
    windSpeed: 18,
    condition: "rainy",
    conditionLabel: "Yağmurlu",
  },
  erzurum: {
    city: "Erzurum",
    temperature: 4,
    feelsLike: -1,
    humidity: 71,
    windSpeed: 28,
    condition: "snowy",
    conditionLabel: "Karlı",
  },
  bursa: {
    city: "Bursa",
    temperature: 20,
    feelsLike: 19,
    humidity: 61,
    windSpeed: 12,
    condition: "partly-cloudy",
    conditionLabel: "Parçalı Bulutlu",
  },
  diyarbakir: {
    city: "Diyarbakır",
    temperature: 24,
    feelsLike: 25,
    humidity: 35,
    windSpeed: 16,
    condition: "sunny",
    conditionLabel: "Güneşli",
  },
  rize: {
    city: "Rize",
    temperature: 14,
    feelsLike: 13,
    humidity: 88,
    windSpeed: 20,
    condition: "stormy",
    conditionLabel: "Fırtınalı",
  },
};

/** @returns {string[]} */
export function getCityIds() {
  return Object.keys(weatherDatabase);
}

/**
 * Simulates fetching weather for a city with optional variance on refresh.
 * @param {string} cityId
 * @param {{ simulateVariance?: boolean }} [options]
 * @returns {Promise<WeatherRecord>}
 */
export function fetchWeather(cityId, options = {}) {
  const { simulateVariance = false } = options;
  const base = weatherDatabase[cityId];

  if (!base) {
    return Promise.reject(new Error(`Şehir bulunamadı: ${cityId}`));
  }

  return new Promise((resolve) => {
    const delay = 350 + Math.random() * 250;

    setTimeout(() => {
      if (!simulateVariance) {
        resolve({ ...base });
        return;
      }

      const variance = () => Math.round((Math.random() - 0.5) * 2);
      resolve({
        ...base,
        temperature: base.temperature + variance(),
        feelsLike: base.feelsLike + variance(),
        humidity: Math.min(100, Math.max(0, base.humidity + variance())),
        windSpeed: Math.max(0, base.windSpeed + variance()),
      });
    }, delay);
  });
}
