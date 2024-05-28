import useWeatherContext from "../contexts/useWeatherContext";

const WeatherDisplay = () => {
  const { currentWeather, forecast, airPollution, loading, error } =
    useWeatherContext();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!currentWeather || !forecast || !airPollution) {
    return (
      <p className="text-center">
        Enter a city to get the weather information.
      </p>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{currentWeather.name}</h2>
      <p className="text-xl">Temperature: {currentWeather.main.temp}°C</p>
      <p className="text-xl">Humidity: {currentWeather.main.humidity}%</p>
      <p className="text-xl">
        Conditions: {currentWeather.weather[0].description}
      </p>

      <h3 className="text-xl font-bold mt-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 gap-4 mt-2">
        {forecast.list.slice(0, 5).map((item, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p>Temp: {item.main.temp}°C</p>
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-4">Air Pollution</h3>
      <p className="text-xl">AQI: {airPollution.list[0].main.aqi}</p>
      <p className="text-xl">PM2.5: {airPollution.list[0].components.pm2_5}</p>
      <p className="text-xl">PM10: {airPollution.list[0].components.pm10}</p>
    </div>
  );
};

export default WeatherDisplay;
