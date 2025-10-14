document.addEventListener("DOMContentLoaded", function() {

    // API Keys
    const weatherApiKey = "ec6133454d4097e3c4f6d404696cf17f"; // OpenWeatherMap

    fetchWeather();
    fetchRandomImage();

    // Weather (Troy, NY)
    async function fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Troy,US&appid=${weatherApiKey}&units=imperial`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error("Weather fetch failed:", error);
            document.getElementById("city").innerText = "Unable to load weather.";
        }
    }

    // Display Weather Data
    function displayWeather(data) {
        if (data.cod !== 200) {
            console.error("Invalid weather data received:", data.message);
            document.getElementById("city").innerText = "Invalid location data.";
            return;
        }

        document.getElementById("city").innerText = data.name;
        document.getElementById("desc").innerText = data.weather[0].description;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°F`;
        document.getElementById("details").innerText = `Feels like ${Math.round(data.main.feels_like)}°F | Humidity: ${data.main.humidity}%`;

        const iconCode = data.weather[0].icon;
        const iconElement = document.getElementById("icon");
        iconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }

    // --- Random Cat Image API ---
    async function fetchRandomImage() {
        const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
        try {
            const response = await fetch(catApiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            document.getElementById('random-image').src = data[0].url;
        } catch (error) {
            console.error("Error fetching random image:", error);
            document.querySelector(".extra-card").innerHTML = '<h2>Could not load image.</h2>';
        }
    }
});