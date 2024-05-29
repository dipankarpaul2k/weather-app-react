import { Toaster } from "react-hot-toast";

import FetchWeather from "./components/FetchWeather";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";

export default function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-3 sm:p-4">
          <FetchWeather />
          <WeatherDisplay />
        </main>
        <Footer />
      </div>
      <Toaster />
    </WeatherProvider>
  );
}
