import { createContext, useState, useEffect } from "react";
import { useToggle } from "@mantine/hooks";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

// import fetch functions
import fetchWeatherData from "./fetchWeatherData";
import fetchWeatherDataByCoords from "./fetchWeatherDataByCoords";

// create weather context
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityDetails, setCityDetails] = useState(null);
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
      const weatherData = await fetchWeatherData(city, unit, API_KEY, BASE_URL);

      setCityDetails(weatherData.cityDetails);
      setCurrentWeather(weatherData.currentWeather);
      setAirPollution(weatherData.airPollution);
      setHourlyForecast(weatherData.hourlyForecast);
      setDailyForecast(weatherData.dailyForecast);
    } catch (error) {
      // setError("City not found");
      // toast.error("City not found!");
      setError(error.message);
      toast.error(error.message);
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
            "Geolocation API works better with devices that have GPS support like mobile and tablet."
          );

          const weatherData = await fetchWeatherDataByCoords(
            latitude,
            longitude,
            unit,
            API_KEY,
            BASE_URL
          );

          setCityDetails(weatherData.cityDetails);
          setCurrentWeather(weatherData.currentWeather);
          setHourlyForecast(weatherData.hourlyForecast);
          setDailyForecast(weatherData.dailyForecast);
          setAirPollution(weatherData.airPollution);
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
    cityDetails,
    currentWeather,
    hourlyForecast,
    dailyForecast,
    airPollution,
    unit,
    loading,
    error,
    toggleUnit,
    fetchWeatherDataByCity,
    fetchWeatherForCurrentLocation,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node,
};
