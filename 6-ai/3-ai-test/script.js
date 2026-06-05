"use strict";

/**
 * Örnek hava durumu verisi.
 * Gerçek bir projede bu veri bir API'den (ör. OpenWeatherMap) gelir.
 * Anahtarlar normalize edilmiş (küçük harf) şehir adlarıdır.
 */
const WEATHER_DATA = {
  istanbul: {
    city: "İstanbul",
    description: "Parçalı bulutlu",
    icon: "⛅",
    temp: 22,
    feelsLike: 24,
    humidity: 68,
    wind: 14,
  },
  ankara: {
    city: "Ankara",
    description: "Açık",
    icon: "☀️",
    temp: 27,
    feelsLike: 26,
    humidity: 35,
    wind: 9,
  },
  izmir: {
    city: "İzmir",
    description: "Güneşli",
    icon: "☀️",
    temp: 31,
    feelsLike: 33,
    humidity: 45,
    wind: 18,
  },
  bursa: {
    city: "Bursa",
    description: "Yağmurlu",
    icon: "🌧️",
    temp: 19,
    feelsLike: 18,
    humidity: 82,
    wind: 11,
  },
  antalya: {
    city: "Antalya",
    description: "Açık",
    icon: "🌤️",
    temp: 33,
    feelsLike: 36,
    humidity: 52,
    wind: 7,
  },
  trabzon: {
    city: "Trabzon",
    description: "Sağanak yağışlı",
    icon: "🌦️",
    temp: 17,
    feelsLike: 17,
    humidity: 88,
    wind: 13,
  },
  erzurum: {
    city: "Erzurum",
    description: "Karlı",
    icon: "🌨️",
    temp: -3,
    feelsLike: -7,
    humidity: 75,
    wind: 22,
  },
};

/** Hızlı seçim çipleri için gösterilecek şehirler. */
const QUICK_CITIES = ["istanbul", "ankara", "izmir", "antalya", "erzurum"];

/** DOM referansları tek noktada toplanır. */
const dom = {
  form: document.getElementById("search-form"),
  input: document.getElementById("city-input"),
  error: document.getElementById("error"),
  current: document.getElementById("current"),
  details: document.getElementById("details"),
  chips: document.getElementById("chips"),
  city: document.getElementById("city"),
  date: document.getElementById("date"),
  icon: document.getElementById("icon"),
  temp: document.getElementById("temp"),
  description: document.getElementById("description"),
  feels: document.getElementById("feels"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
};

/**
 * Şehir adını arama anahtarına çevirir.
 * Türkçe karakterleri sadeleştirir ve boşlukları kırpar.
 */
function normalize(name) {
  return name
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/\s+/g, "");
}

/** Bugünün tarihini Türkçe ve okunabilir biçimde döndürür. */
function formatToday() {
  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());
}

/** Hata mesajını gösterir. */
function showError(message) {
  dom.error.textContent = message;
  dom.error.hidden = false;
}

/** Hata mesajını gizler. */
function clearError() {
  dom.error.hidden = true;
  dom.error.textContent = "";
}

/**
 * Verilen hava durumu nesnesini ekrana basar.
 * Kısa bir yükleniyor durumuyla API çağrısını taklit eder.
 */
function renderWeather(data) {
  dom.current.classList.add("is-loading");
  dom.details.classList.add("is-loading");

  // Gerçekçi his vermek için küçük gecikme (API gecikmesi simülasyonu).
  window.setTimeout(() => {
    dom.city.textContent = data.city;
    dom.date.textContent = formatToday();
    dom.icon.textContent = data.icon;
    dom.temp.textContent = Math.round(data.temp);
    dom.description.textContent = data.description;
    dom.feels.textContent = Math.round(data.feelsLike);
    dom.humidity.textContent = data.humidity;
    dom.wind.textContent = data.wind;

    document.title = `${data.city} ${Math.round(data.temp)}°C — Hava Durumu`;

    dom.current.classList.remove("is-loading");
    dom.details.classList.remove("is-loading");
  }, 250);
}

/** Çipin basılı (aktif) durumunu günceller. */
function setActiveChip(key) {
  const chips = dom.chips.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.setAttribute("aria-pressed", String(chip.dataset.key === key));
  });
}

/**
 * Bir şehri yükler. Veri yoksa hata gösterir.
 * @returns {boolean} başarılı olup olmadığı
 */
function loadCity(rawName) {
  const key = normalize(rawName);

  if (!key) {
    showError("Lütfen bir şehir adı girin.");
    return false;
  }

  const data = WEATHER_DATA[key];
  if (!data) {
    showError(`"${rawName}" için veri bulunamadı. Örn: İstanbul, Ankara, İzmir.`);
    return false;
  }

  clearError();
  renderWeather(data);
  setActiveChip(key);
  return true;
}

/** Hızlı seçim çiplerini oluşturur. */
function buildChips() {
  const fragment = document.createDocumentFragment();

  QUICK_CITIES.forEach((key) => {
    const data = WEATHER_DATA[key];
    if (!data) return;

    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = data.city;
    chip.dataset.key = key;
    chip.setAttribute("aria-pressed", "false");

    chip.addEventListener("click", () => {
      dom.input.value = data.city;
      loadCity(data.city);
    });

    fragment.appendChild(chip);
  });

  dom.chips.appendChild(fragment);
}

/** Form gönderimini yönetir. */
function handleSubmit(event) {
  event.preventDefault();
  loadCity(dom.input.value);
}

/** Uygulamayı başlatır. */
function init() {
  buildChips();
  dom.form.addEventListener("submit", handleSubmit);

  // Açılışta varsayılan şehri göster.
  loadCity("İstanbul");
}

document.addEventListener("DOMContentLoaded", init);
