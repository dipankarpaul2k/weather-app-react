import axios from "axios";

const fetchWeatherDataByCoords = async (
  latitude,
  longitude,
  unit,
  API_KEY,
  BASE_URL
) => {
  try {
    // Run all requests concurrently
    const [
      currentWeatherResponse,
      airPollutionResponse,
      hourlyForecastResponse,
      dailyForecastResponse,
    ] = await Promise.all([
      axios.get(
        `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`
      ),
      axios.get(
        `${BASE_URL}/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      ),
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      ),
      axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      ),
    ]);

    const cityName = currentWeatherResponse.data.name;

    // Get city details
    const cityDetailsResponse = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName.trim()}&count=1&language=en&format=json`
    );

    return {
      cityDetails: cityDetailsResponse.data.results[0],
      currentWeather: currentWeatherResponse.data,
      airPollution: airPollutionResponse.data,
      hourlyForecast: hourlyForecastResponse.data,
      dailyForecast: dailyForecastResponse.data,
    };
  } catch (err) {
    throw new Error("Unable to retrieve weather data for current location.");
  }
};

export default fetchWeatherDataByCoords;
