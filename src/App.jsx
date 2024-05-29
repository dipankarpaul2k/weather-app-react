// import FetchWeather from "./components/FetchWeather";
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";

export default function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* <FetchWeather /> */}
        <main className="flex-1">
          <WeatherDisplay />
        </main>
        <footer className="p-4 text-center">footer</footer>
      </div>
    </WeatherProvider>
  );
}
