import { Toaster } from "react-hot-toast";

import { WeatherProvider } from "./contexts/WeatherContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchWeather from "./components/FetchWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import DailyForecastData from "./components/DailyForecastData";
import HourlyForecastData from "./components/HourlyForecastData";
import MapComponent from "./components/MapComponent";

export default function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-3 sm:p-4 pt-[85px] sm:pt-[85px]">
          <div className="container mx-auto h-full">
            <FetchWeather />
            <WeatherDisplay />
            <DailyForecastData />
            <HourlyForecastData />
            <MapComponent />
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </WeatherProvider>
  );
}
