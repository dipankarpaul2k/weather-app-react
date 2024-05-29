// import useWeatherContext from "../contexts/useWeatherContext";

const WeatherDisplay = () => {
  // const { currentWeather, forecast, airPollution, loading, error } =
  //   useWeatherContext();

  // if (loading) {
  //   return <p className="text-center">Loading...</p>;
  // }

  // if (error) {
  //   return <p className="text-center text-red-500">{error}</p>;
  // }

  // if (!currentWeather || !forecast || !airPollution) {
  //   return (
  //     <p className="text-center">
  //       Enter a city to get the weather information.
  //     </p>
  //   );
  // }

  // const { sunrise, sunset } = currentWeather.sys;
  // const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  // const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  // const currentTime = new Date().toLocaleTimeString();

  // const AQI_DES = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

  return (
    <div className="container mx-auto h-full px-1">
      {/* <h2 className="text-2xl font-bold mb-2">{currentWeather.name}</h2> */}
      {/* Weather conditions */}
      {/* <div>
        <div className="flex justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt="weather icon"
            title={`${currentWeather.weather[0].description} icon`}
          />
        </div>
        <p className="text-xl">Temperature: {currentWeather.main.temp}°C</p>
        <p className="text-xl">
          Conditions: {currentWeather.weather[0].description}
        </p>
        <p className="text-xl">
          Temperature Feels Like: {currentWeather.main.feels_like}°C
        </p>
        <p className="text-xl">
          Minimum Temperature: {currentWeather.main.temp_min}°C
        </p>
        <p className="text-xl">
          Maximum Temperature: {currentWeather.main.temp_max}°C
        </p>
        <p className="text-xl">Humidity: {currentWeather.main.humidity}%</p>
        <p className="text-xl">
          Sea Level Pressure: {currentWeather.main.sea_level}hPa
        </p>
        <p className="text-xl">
          Ground Level Pressure: {currentWeather.main.grnd_level}hPa
        </p>
        <p className="text-xl">
          Visibility: {currentWeather.visibility / 1000} km
        </p>
        <p className="text-xl">Wind Speed: {currentWeather.wind.speed} m/s</p>
        <p className="text-xl">
          Wind Direction: {currentWeather.wind.deg} degrees{" "}
        </p>
        <p className="text-xl">Wind Gust: {currentWeather.wind.gust} m/s</p>
        <p className="text-xl">Sunrise: {sunriseTime}</p>
        <p className="text-xl">Sunset: {sunsetTime}</p>
        <p className="text-xl">Current Time: {currentTime}</p>
      </div> */}

      {/* Air quality */}
      {/* <div>
        <h3 className="text-xl font-bold mt-4">Air Pollution</h3>
        <p className="text-xl">AQI: {airPollution.list[0].main.aqi}</p>
        <p className="text-xl">
          Condition: {AQI_DES[airPollution.list[0].main.aqi - 1]}
        </p>
        <p className="text-xl">
          PM2.5: {airPollution.list[0].components.pm2_5}
        </p>
        <p className="text-xl">PM10: {airPollution.list[0].components.pm10}</p>
      </div> */}

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-0 gap-y-2 sm:gap-2 h-full">
        <div className="border h-full">
          <div className="flex flex-col flex-grow gap-2 h-full">
            <div className="bg-red-500 flex-grow">jsnajsn</div>
            <div className="bg-blue-500 flex-grow max-sm:hidden">saxanxas</div>
          </div>
        </div>
        <div className="col-span-2 border h-full">
          <div className="flex items-center justify-between py-3 px-1">
            <h2>{`Today's Highlights`}</h2>
            <button className="btn btn-xs">toggle unit</button>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-2">
            <div className="">
              <p>Sunrise & Sunset</p>
            </div>
            <div className="">
              <p>Wind status</p>
            </div>
            <div className="">
              <p>Humidity</p>
            </div>
            <div className="">
              <p>Visibility</p>
            </div>
            <div className="">
              <p>Air quality</p>
            </div>
            <div className="">
              <p>Pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
