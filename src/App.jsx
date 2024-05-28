import FetchWeather from "./components/FetchWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";

export default function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8">Weather Dashboard</h1>
        <FetchWeather />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}
