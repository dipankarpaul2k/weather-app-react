import useWeatherContext from "../contexts/useWeatherContext";

const HourlyForecastData = () => {
  const { hourlyForecast, unit } = useWeatherContext();
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  if (!hourlyForecast) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-bold my-4">Hourly Forecast</h3>
      <div className="overflow-x-auto border rounded-xl">
        <table className="table table-zebra table-pin-rows max-sm:table-sm max-lg:hidden">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Feels Like</th>
              <th>Humidity</th>
              <th>Precipitation</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            {hourlyForecast.hourly.time.slice(0, 24).map((date, index) => (
              <tr key={index}>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>
                  {hourlyForecast.hourly.temperature_2m[index]}
                  {temperatureUnit}
                </td>
                <td>
                  {hourlyForecast.hourly.apparent_temperature[index]}
                  {temperatureUnit}
                </td>
                <td>{hourlyForecast.hourly.relative_humidity_2m[index]}%</td>
                <td>{hourlyForecast.hourly.precipitation[index]} mm</td>
                <td>{hourlyForecast.hourly.visibility[index] / 1000} Km</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table table-zebra table-pin-rows max-sm:table-sm lg:hidden">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Feels Like</th>
              <th>Humidity</th>
              <th>Visibility</th>
              <th>Precipitation</th>
            </tr>
          </thead>
          <tbody>
            {hourlyForecast.hourly.time.slice(0, 24).map((date, index) => (
              <tr key={index}>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>
                  {hourlyForecast.hourly.temperature_2m[index]}
                  {temperatureUnit}
                </td>
                <td>
                  {hourlyForecast.hourly.apparent_temperature[index]}
                  {temperatureUnit}
                </td>
                <td>{hourlyForecast.hourly.relative_humidity_2m[index]}%</td>
                <td>{hourlyForecast.hourly.visibility[index] / 1000} Km</td>
                <td>{hourlyForecast.hourly.precipitation[index]} mm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HourlyForecastData;
