import { weatherDatabase, getCityIds, fetchWeather } from "./data.js";
import { weatherIcons } from "./icons.js";

/** @type {HTMLElement | null} */
const appEl = document.querySelector(".app");

/** @type {HTMLSelectElement | null} */
const citySelect = document.getElementById("city-select");

/** @type {HTMLButtonElement | null} */
const refreshBtn = document.getElementById("refresh-btn");

/** @type {HTMLElement | null} */
const weatherCard = document.getElementById("weather-card");

/** @type {HTMLElement | null} */
const weatherLoading = document.getElementById("weather-loading");

/** @type {HTMLElement | null} */
const weatherContent = document.getElementById("weather-content");

const elements = {
  cityName: document.getElementById("city-name"),
  conditionText: document.getElementById("condition-text"),
  weatherIcon: document.getElementById("weather-icon"),
  temperature: document.getElementById("temperature"),
  feelsLike: document.getElementById("feels-like"),
  humidity: document.getElementById("humidity"),
  windSpeed: document.getElementById("wind-speed"),
  year: document.getElementById("year"),
};

const STORAGE_KEY = "weather-app:last-city";

let hasLoadedOnce = false;

/**
 * @param {import('./data.js').WeatherRecord} data
 */
function renderWeather(data) {
  if (!elements.cityName || !elements.conditionText || !elements.weatherIcon) {
    return;
  }

  elements.cityName.textContent = data.city;
  elements.conditionText.textContent = data.conditionLabel;

  const iconMarkup = weatherIcons[data.condition] ?? weatherIcons.cloudy;
  elements.weatherIcon.innerHTML = iconMarkup;

  if (elements.temperature) {
    elements.temperature.textContent = String(data.temperature);
  }
  if (elements.feelsLike) {
    elements.feelsLike.textContent = `${data.feelsLike}°C`;
  }
  if (elements.humidity) {
    elements.humidity.textContent = `%${data.humidity}`;
  }
  if (elements.windSpeed) {
    elements.windSpeed.textContent = `${data.windSpeed} km/s`;
  }

  if (appEl) {
    appEl.dataset.theme = data.condition;
  }
}

function populateCitySelect() {
  if (!citySelect) return;

  const fragment = document.createDocumentFragment();

  for (const id of getCityIds()) {
    const record = weatherDatabase[id];
    const option = document.createElement("option");
    option.value = id;
    option.textContent = record.city;
    fragment.appendChild(option);
  }

  citySelect.appendChild(fragment);

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && weatherDatabase[saved]) {
    citySelect.value = saved;
  }
}

/**
 * @param {boolean} isLoading
 */
function setLoadingState(isLoading) {
  if (weatherLoading) weatherLoading.hidden = !isLoading;
  if (weatherContent) weatherContent.hidden = isLoading;
}

/**
 * @param {string} cityId
 * @param {{ simulateVariance?: boolean }} [options]
 */
async function loadWeather(cityId, options = {}) {
  const isSoftRefresh = hasLoadedOnce && options.simulateVariance;

  if (isSoftRefresh) {
    weatherCard?.classList.add("is-updating");
  } else {
    setLoadingState(true);
  }

  try {
    const data = await fetchWeather(cityId, options);
    renderWeather(data);
    localStorage.setItem(STORAGE_KEY, cityId);
    hasLoadedOnce = true;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Veri yüklenemedi.";
    if (elements.conditionText) {
      elements.conditionText.textContent = message;
    }
  } finally {
    setLoadingState(false);
    weatherCard?.classList.remove("is-updating");
  }
}

function handleCityChange() {
  if (!citySelect) return;
  loadWeather(citySelect.value);
}

function handleRefresh() {
  if (!citySelect || !refreshBtn) return;

  refreshBtn.classList.add("is-spinning");
  refreshBtn.disabled = true;

  loadWeather(citySelect.value, { simulateVariance: true }).finally(() => {
    refreshBtn.disabled = false;
    setTimeout(() => refreshBtn.classList.remove("is-spinning"), 600);
  });
}

function init() {
  if (elements.year) {
    elements.year.textContent = String(new Date().getFullYear());
  }

  populateCitySelect();

  citySelect?.addEventListener("change", handleCityChange);
  refreshBtn?.addEventListener("click", handleRefresh);

  const initialCity = citySelect?.value ?? getCityIds()[0];
  if (initialCity) {
    loadWeather(initialCity);
  }
}

init();
