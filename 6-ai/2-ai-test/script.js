// Mock Data for specific cities
const weatherData = {
    "istanbul": {
        temp: 24,
        feelsLike: 26,
        humidity: 45,
        windSpeed: 12,
        condition: "Güneşli",
        type: "clear"
    },
    "ankara": {
        temp: 15,
        feelsLike: 13,
        humidity: 60,
        windSpeed: 8,
        condition: "Parçalı Bulutlu",
        type: "clouds"
    },
    "izmir": {
        temp: 28,
        feelsLike: 30,
        humidity: 40,
        windSpeed: 15,
        condition: "Açık",
        type: "clear"
    },
    "london": {
        temp: 12,
        feelsLike: 10,
        humidity: 80,
        windSpeed: 20,
        condition: "Yağmurlu",
        type: "rain"
    },
    "new york": {
        temp: 18,
        feelsLike: 17,
        humidity: 55,
        windSpeed: 10,
        condition: "Bulutlu",
        type: "clouds"
    }
};

// Weather Icons (SVG)
const weatherIcons = {
    clear: `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`,
    clouds: `<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>`,
    rain: `<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path><line x1="16" y1="20" x2="14" y2="22"></line><line x1="8" y1="20" x2="6" y2="22"></line><line x1="12" y1="20" x2="10" y2="22"></line>`,
    snow: `<line x1="12" y1="2" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"></line>`,
    storm: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>`
};

// Background Gradients based on weather type
const backgrounds = {
    clear: { start: "#3a7bd5", end: "#3a6073" },
    clouds: { start: "#757F9A", end: "#D7DDE8" },
    rain: { start: "#2c3e50", end: "#3498db" },
    snow: { start: "#E0EAFC", end: "#CFDEF3" },
    storm: { start: "#141E30", end: "#243B55" },
    default: { start: "#8E2DE2", end: "#4A00E0" }
};

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameEl = document.getElementById('city-name');
const tempValueEl = document.getElementById('temp-value');
const conditionEl = document.getElementById('condition');
const feelsLikeEl = document.getElementById('feels-like');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const weatherIconSvg = document.getElementById('weather-icon-svg');

// Generate random data for unknown cities
function generateRandomWeather() {
    const types = ['clear', 'clouds', 'rain', 'snow', 'storm'];
    const conditions = {
        clear: ['Güneşli', 'Açık'],
        clouds: ['Bulutlu', 'Parçalı Bulutlu', 'Kapalı'],
        rain: ['Yağmurlu', 'Hafif Yağmurlu', 'Sağanak'],
        snow: ['Karlı', 'Sulu Kar'],
        storm: ['Fırtınalı', 'Gök Gürültülü']
    };
    
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomConditionList = conditions[randomType];
    const randomCondition = randomConditionList[Math.floor(Math.random() * randomConditionList.length)];
    
    const temp = Math.floor(Math.random() * 40) - 5; // -5 to 35
    const feelsLike = temp + (Math.floor(Math.random() * 6) - 3);
    const humidity = Math.floor(Math.random() * 70) + 20; // 20% to 90%
    const windSpeed = Math.floor(Math.random() * 30) + 1; // 1 to 30 km/h
    
    return {
        temp,
        feelsLike,
        humidity,
        windSpeed,
        condition: randomCondition,
        type: randomType
    };
}

// Function to update the UI
function updateWeatherUI(city, data) {
    // Add fade-out effect for smooth transition
    const elementsToAnimate = [cityNameEl, tempValueEl, conditionEl, ...document.querySelectorAll('.detail-value')];
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(10px)';
        el.style.transition = 'all 0.3s ease';
    });
    
    weatherIconSvg.style.opacity = '0';
    weatherIconSvg.style.transform = 'scale(0.8)';
    weatherIconSvg.style.transition = 'all 0.3s ease';

    setTimeout(() => {
        // Format city name
        const formattedCity = city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        
        // Update DOM
        cityNameEl.textContent = formattedCity;
        tempValueEl.textContent = data.temp;
        conditionEl.textContent = data.condition;
        feelsLikeEl.textContent = `${data.feelsLike}°C`;
        humidityEl.textContent = `%${data.humidity}`;
        windSpeedEl.textContent = `${data.windSpeed} km/s`;
        
        // Update Icon
        weatherIconSvg.innerHTML = weatherIcons[data.type];
        
        // Update Background
        const bgColors = backgrounds[data.type] || backgrounds.default;
        document.documentElement.style.setProperty('--bg-gradient-start', bgColors.start);
        document.documentElement.style.setProperty('--bg-gradient-end', bgColors.end);

        // Remove fade-out styles to let CSS animations or transitions take over
        elementsToAnimate.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
        
        weatherIconSvg.style.opacity = '1';
        weatherIconSvg.style.transform = 'scale(1)';
        
    }, 300);
}

// Search functionality
function handleSearch() {
    const city = cityInput.value.trim().toLowerCase();
    
    if (!city) return;
    
    // Show a loading state conceptually (fast enough here)
    let data;
    
    if (weatherData[city]) {
        data = weatherData[city];
    } else {
        data = generateRandomWeather();
        // optionally cache it for this session so it stays consistent
        weatherData[city] = data; 
    }
    
    updateWeatherUI(city, data);
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Initialize with a default city to show animations and starting state
window.addEventListener('DOMContentLoaded', () => {
    // İstanbul is already hardcoded in HTML, but we can call update to sync background and SVG
    updateWeatherUI('istanbul', weatherData['istanbul']);
});
