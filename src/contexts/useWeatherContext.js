import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const useWeatherContext = () => useContext(WeatherContext);

export default useWeatherContext;
