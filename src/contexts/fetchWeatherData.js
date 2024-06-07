import axios from "axios";

const fetchWeatherData = async (city, unit, API_KEY, BASE_URL) => {
  try {
    // Get city details first to extract coordinates
    const cityDetailsResponse = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city.trim()}&count=1&language=en&format=json`
    );

    const { latitude: lat, longitude: lon } =
      cityDetailsResponse.data.results[0];

    // Run all requests concurrently
    const [
      currentWeatherResponse,
      airPollutionResponse,
      hourlyForecastResponse,
      dailyForecastResponse,
    ] = await Promise.all([
      // current weather response
      axios.get(
        `${BASE_URL}/weather?q=${city.trim()}&appid=${API_KEY}&units=${unit}`
      ),
      //   air pollution response
      axios.get(
        `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      ),
      //   hourly forecast response
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      ),
      //   daily forecast response
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      ),
    ]);

    return {
      cityDetails: cityDetailsResponse.data.results[0],
      currentWeather: currentWeatherResponse.data,
      airPollution: airPollutionResponse.data,
      hourlyForecast: hourlyForecastResponse.data,
      dailyForecast: dailyForecastResponse.data,
    };
  } catch (err) {
    throw new Error("City not found");
  }
};

export default fetchWeatherData;
