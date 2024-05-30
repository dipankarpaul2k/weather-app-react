import {
  IconSunrise,
  IconSunset,
  IconTemperature,
  IconWind,
  IconMist,
  IconDroplets,
  IconCompass,
} from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";
import LoadingSkeleton from "./LoadingSkeleton";

const WeatherDisplay = () => {
  const { currentWeather, forecast, airPollution, loading, error, unit } =
    useWeatherContext();

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!currentWeather || !forecast || !airPollution) {
    return (
      <>
        <p className="text-center">
          Enter a city to get the weather information.
        </p>
      </>
    );
  }

  const { sunrise, sunset } = currentWeather.sys;
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  const currentTime = new Date().toLocaleTimeString();

  const AQI_DES = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="container mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-0 sm:gap-4">
        <div className="flex flex-col gap-4">
          <div className="stats stats-vertical shadow border w-full grow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <img
                  src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  title={`${currentWeather.weather[0].description} icon`}
                />
              </div>
              <div className="stat-title">
                <span className="text-2xl font-bold">
                  {currentWeather.name}
                </span>
                , {currentTime}
              </div>
              <div className="stat-value">
                {currentWeather.main.temp}
                <sapn>{temperatureUnit}</sapn>
              </div>
              <div className="stat-desc">
                Conditions: {currentWeather.weather[0].description}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <IconTemperature stroke={2} />
              </div>
              <div className="stat-title">Temperature Feels Like</div>
              <div className="stat-value">
                {currentWeather.main.feels_like}
                <sapn>{temperatureUnit}</sapn>
              </div>
              <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>

          <div className="stats stats-vertical shadow border w-full grow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <IconSunrise stroke={2} />
              </div>
              <div className="stat-title">Sunrise</div>
              <div className="stat-value">{sunriseTime}</div>
              <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <IconSunset stroke={2} />
              </div>
              <div className="stat-title">Sunset</div>
              <div className="stat-value">{sunsetTime}</div>
              <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Max & Min Temperature */}
            <div className="w-full">
              <div className="stats max-sm:stats-vertical lg:stats-vertical shadow border w-full">
                <div className="stat">
                  <div className="stat-title">Minimum Temperature</div>
                  <div className="stat-value">
                    {currentWeather.main.temp_min}
                    <sapn>{temperatureUnit}</sapn>
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Maximum Temperature</div>
                  <div className="stat-value">
                    {currentWeather.main.temp_max}
                    <sapn>{temperatureUnit}</sapn>
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>

            {/* Humidity & Visibility */}
            <div className="w-full">
              <div className="stats max-sm:stats-vertical lg:stats-vertical shadow border w-full">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <IconDroplets stroke={2} />
                  </div>
                  <div className="stat-title">Humidity</div>
                  <div className="stat-value">
                    {currentWeather.main.humidity}%
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <IconMist stroke={2} />
                  </div>
                  <div className="stat-title">Visibility</div>
                  <div className="stat-value">
                    {currentWeather.visibility / 1000} km
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>

            {/* Pressure */}
            <div className="w-full">
              <div className="stats max-sm:stats-vertical lg:stats-vertical shadow border w-full">
                <div className="stat">
                  <div className="stat-title">Sea Level Pressure</div>
                  <div className="stat-value">
                    {currentWeather.main.sea_level} hPa
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Ground Level Pressure</div>
                  <div className="stat-value">
                    {currentWeather.main.grnd_level} hPa
                  </div>
                  <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wind Status */}
          <div>
            <h2 className="text-xl font-semibold pl-2 py-2">Wind Status</h2>
            <div className="stats shadow border w-full">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <IconWind stroke={2} />
                </div>
                <div className="stat-title">Wind Speed</div>
                <div className="stat-value">
                  {currentWeather.wind.speed} m/s
                </div>
                <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <IconCompass stroke={2} />
                </div>
                <div className="stat-title">Wind Direction</div>
                <div className="stat-value">{currentWeather.wind.deg}°</div>
                <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
              </div>

              <div className="stat">
                <div className="stat-title">Wind Gust</div>
                <div className="stat-value">{currentWeather.wind.gust} m/s</div>
                <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>

          {/* Air Polution */}
          <div>
            <h2 className="text-xl font-semibold pl-2 py-2">Air Polution</h2>
            <div className="stats shadow border w-full">
              <div className="stat">
                <div className="stat-title">Air Quality Index</div>
                <div className="stat-value">
                  {airPollution.list[0].main.aqi}
                </div>
                <div className="stat-desc">
                  Condition: {AQI_DES[airPollution.list[0].main.aqi - 1]}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">PM2.5</div>
                <div className="stat-value">
                  {airPollution.list[0].components.pm2_5}
                </div>
                <div className="stat-desc">Lorem ipsum dolor sit amet.</div>
              </div>

              <div className="stat">
                <div className="stat-title">PM10</div>
                <div className="stat-value">
                  {airPollution.list[0].components.pm10}
                </div>
                <div className="stat-desc">Lorem, ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
