import { createContext, useState, useEffect } from "react";
import { useToggle } from "@mantine/hooks";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

// create weather context
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unit, toggleUnit] = useToggle(["metric", "imperial"]);

  const BASE_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = String(import.meta.env.VITE_OPENWEATHERMAP_API_KEY);

  useEffect(() => {
    if (currentWeather) {
      fetchWeatherDataByCity(currentWeather.name);
    }
  }, [unit]);

  const fetchWeatherDataByCity = async (city) => {
    if (!city.trim()) {
      return toast.error("Please enter a city name!");
    }

    setLoading(true);
    setError(null);
    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${city.trim()}&appid=${API_KEY}&units=${unit}`
      );
      const { lat, lon } = currentWeatherResponse.data.coord;

      const hourlyForecastResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      );

      const dailyForecastResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max&timezone=Asia%2FKolkata&temperature_unit=${
          unit === "metric" ? "celsius" : "fahrenheit"
        }`
      );

      const airPollutionResponse = await axios.get(
        `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      setCurrentWeather(currentWeatherResponse.data);
      setHourlyForecast(hourlyForecastResponse.data);
      setDailyForecast(dailyForecastResponse.data);
      setAirPollution(airPollutionResponse.data);
    } catch (err) {
      setError("City not found");
      toast.error("City not found!");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherForCurrentLocation = async () => {
    if (!("geolocation" in navigator)) {
      return toast.error("Geolocation is not supported by your browser.");
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          console.log(
            "geolocation api works better with devices that has GPS support like mobile and tablet."
          );

          const currentWeatherResponse = await axios.get(
            `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`
          );

          const hourlyForecastResponse = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility&timezone=Asia%2FKolkata&temperature_unit=${
              unit === "metric" ? "celsius" : "fahrenheit"
            }`
          );

          const dailyForecastResponse = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max&timezone=Asia%2FKolkata&temperature_unit=${
              unit === "metric" ? "celsius" : "fahrenheit"
            }`
          );

          const airPollutionResponse = await axios.get(
            `${BASE_URL}/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
          );

          setCurrentWeather(currentWeatherResponse.data);
          setHourlyForecast(hourlyForecastResponse.data);
          setDailyForecast(dailyForecastResponse.data);
          setAirPollution(airPollutionResponse.data);
        } catch (err) {
          setError("Unable to retrieve weather data for current location.");
          toast.error("Unable to retrieve weather data for current location.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.log("fetchWeatherForCurrentLocation error", error);
        setLoading(false);
        setError("Permission denied or unable to retrieve location.");
        toast.error("Permission denied or unable to retrieve location.");
      }
    );
  };

  const value = {
    currentWeather,
    hourlyForecast,
    dailyForecast,
    airPollution,
    unit,
    loading,
    error,
    fetchWeatherDataByCity,
    toggleUnit,
    fetchWeatherForCurrentLocation,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node,
};
