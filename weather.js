document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const url =' https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert('Unable to fetch weather data');
    }
}

function displayWeather(data) {
    if (data.cod === '404') {
        document.getElementById('weatherInfo').innerHTML = 'City not found';
        return;
    }

    const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}