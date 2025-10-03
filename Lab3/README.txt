Eric Gutierrez
Lab 3

I made a Weather & News Dashboard web application built with HTML, CSS, JavaScript, and AJAX. 
This fetches live weather data using the OpenWeatherMap API, and displays the user’s current location weather via the HTML5 Geolocation API.
Also fetches top U.S. news headlines from the News API.

-----------------------
Features:

Weather Section
- Detects user’s location with HTML5 Geolocation API.
- Fallback to Troy, NY if location access is denied.
- Shows city name, weather description, temperature, feels like temperature, and humidity.
- Displays weather icons from OpenWeatherMap with a neon glow effect for visibility in dark mode.

News Section
- Retrieves the latest U.S. headlines (5 articles) using News API.
- Each headline is clickable, opening the full article in a new tab.
- Styled with hover effects and a glowing dark mode card design.

Dark Mode Design
- Dark background.
- Glowing cards for weather and news.
- Neon highlights for icons and text.

Bonus Implementation
- Integrated HTML5 Geolocation API to dynamically load weather based on the user’s current position.

--------------------------
Technologies Used:

- HTML5 / CSS3 for structure and styling
- Bootstrap 5 and Bootstrap Icons for responsive design and UI components
- JavaScript (ES6) for AJAX and DOM manipulation
- OpenWeatherMap API for real-time weather data
- News API for top U.S. headlines
- HTML5 Geolocation API for detecting the user’s current location

-------------------------
APIs Used:

1. OpenWeatherMap API – https://openweathermap.org/api
   - Used to fetch current weather data (temperature, humidity, conditions, icons).
   - Endpoint used: /data/2.5/weather with lat/lon parameters from geolocation.

2. News API – https://newsapi.org/
   - Used to fetch latest U.S. news headlines.
   - Endpoint used: /v2/top-headlines?country=us&pageSize=5.

-------------------------
Sources / Citations

- OpenWeatherMap API Documentation: https://openweathermap.org/current
- News API Documentation: https://newsapi.org/docs
- Bootstrap 5 Documentation: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- Bootstrap Icons: https://icons.getbootstrap.com/
- MDN Web Docs – Geolocation API: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
- MDN Web Docs – Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

----------------------------
File Structure

Lab3/
  ├── index.html      # Main HTML file
  ├── style.css       # Dark mode styling
  ├── script.js       # JavaScript with AJAX & API calls
  ├── README.txt      # Documentation (this file)
