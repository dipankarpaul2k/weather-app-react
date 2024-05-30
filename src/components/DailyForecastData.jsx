import useWeatherContext from "../contexts/useWeatherContext";

const DailyForecastData = () => {
  const { dailyForecast, unit } = useWeatherContext();
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  if (!dailyForecast) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-bold my-4">7 Day Forecast</h3>
      <div className="overflow-x-auto border rounded-xl max-lg:hidden">
        <table className="table table-zebra table-pin-rows max-sm:table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Max Temp</th>
              <th>Min Temp</th>
              <th>UV Index</th>
              <th>Precipitation</th>
            </tr>
          </thead>
          <tbody>
            {dailyForecast.daily.time.map((date, index) => (
              <tr key={index}>
                <td>{new Date(date).toLocaleDateString()}</td>
                <td>
                  {dailyForecast.daily.temperature_2m_max[index]}
                  {temperatureUnit}
                </td>
                <td>
                  {dailyForecast.daily.temperature_2m_min[index]}
                  {temperatureUnit}
                </td>
                <td>{dailyForecast.daily.uv_index_max[index]}</td>
                <td>{dailyForecast.daily.precipitation_sum[index]} mm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto border rounded-xl lg:hidden">
        <div className="stats stats-horizontal shadow w-full">
          {dailyForecast.daily.time.map((date, index) => (
            <div key={index} className="stat">
              <div className="stat-title">
                {new Date(date).toLocaleDateString()}
              </div>
              <div className="stat-value">
                <div className="flex items-center justify-between">
                  <span>
                    {dailyForecast.daily.temperature_2m_max[index]}
                    {temperatureUnit}
                  </span>
                  <span>/</span>
                  <span>
                    {dailyForecast.daily.temperature_2m_min[index]}
                    {temperatureUnit}
                  </span>
                </div>
              </div>
              <div className="stat-desc">
                <div className="flex items-center justify-between">
                  <span>
                    UV Index: {dailyForecast.daily.uv_index_max[index]}
                  </span>
                  <span>
                    Precipitation:{" "}
                    {dailyForecast.daily.precipitation_sum[index]} mm
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyForecastData;
