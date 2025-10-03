// API Keys
const weatherApiKey = "ec6133454d4097e3c4f6d404696cf17f";  // OpenWeatherMap
const newsApiKey = "9e9880345f5b42bf8bf7e091f5febadc";      // News API

// Weather with Geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  document.getElementById("city").innerText = "Geolocation not supported.";
}

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const geoWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`;

  fetch(geoWeatherUrl)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(() => fallbackWeather());
}

function error(err) {
  console.warn("Geolocation error:", err);
  fallbackWeather();
}

// Fallback Weather (Troy, NY)
function fallbackWeather() {
  const fallbackUrl = `https://api.openweathermap.org/data/2.5/weather?q=Troy,US&appid=${weatherApiKey}&units=imperial`;
  fetch(fallbackUrl)
    .then(res => res.json())
    .then(data => displayWeather(data))
    .catch(err => {
      console.error("Weather fetch failed:", err);
      document.getElementById("city").innerText = "Unable to load weather.";
    });
}

// Display Weather Data
function displayWeather(data) {
  document.getElementById("city").innerText = data.name;
  document.getElementById("desc").innerText = data.weather[0].description;
  document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°F`;
  document.getElementById("details").innerText = `Feels like ${Math.round(data.main.feels_like)}°F | Humidity: ${data.main.humidity}%`;

  // Weather icon with glow
  const iconCode = data.weather[0].icon; 
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const iconElement = document.getElementById("icon");
  iconElement.src = iconUrl;
  iconElement.style.filter = "drop-shadow(0 0 6px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 12px rgba(0, 229, 255, 0.6))";
}

// News API
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${newsApiKey}`;

fetch(newsUrl)
  .then(res => res.json())
  .then(data => {
    if (data.articles && data.articles.length > 0) {
      let newsHTML = "<ul>";
      data.articles.forEach(article => {
        newsHTML += `
          <li class="news-item">
            <a href="${article.url}" target="_blank" class="news-link">
              <h5>${article.title}</h5>
              <small>${article.source.name}</small>
            </a>
          </li>
        `;
      });
      newsHTML += "</ul>";
      document.getElementById("other-api").innerHTML = newsHTML;
    } else {
      document.getElementById("other-api").innerText = "No news found.";
    }
  })
  .catch(err => {
    console.error("News fetch failed:", err);
    document.getElementById("other-api").innerText = "Unable to load news.";
  });
