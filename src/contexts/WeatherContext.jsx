import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import toast from "react-hot-toast";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = String(import.meta.env.VITE_OPENWEATHERMAP_API_KEY);

  const fetchWeatherData = async (city) => {
    if (!city.trim()) {
      return toast.error("Please enter a city name!");
    }

    setLoading(true);
    setError(null);
    try {
      const currentWeatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      const { lat, lon } = currentWeatherResponse.data.coord;

      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
      );

      const airPollutionResponse = await axios.get(
        `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      setCurrentWeather(currentWeatherResponse.data);
      setForecast(forecastResponse.data);
      setAirPollution(airPollutionResponse.data);
    } catch (err) {
      setError("City not found");
      toast.error("City not found!");
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    if (unit === "metric") {
      setUnit("imperial");
    } else {
      setUnit("metric");
    }
  };

  const value = {
    currentWeather,
    forecast,
    airPollution,
    unit,
    loading,
    error,
    toggleUnit,
    fetchWeatherData,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.element,
};
