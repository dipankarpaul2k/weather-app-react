import { Toaster } from "react-hot-toast";

import FetchWeather from "./components/FetchWeather";
import Navbar from "./components/Navbar";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./contexts/WeatherContext";
import Footer from "./components/Footer";

export default function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">
          <div className="flex justify-center">
            <FetchWeather />
          </div>
          <WeatherDisplay />
        </main>
        {/* <footer className="p-4 text-center">footer</footer> */}
        <Footer/>
      </div>
      <Toaster />
    </WeatherProvider>
  );
}
