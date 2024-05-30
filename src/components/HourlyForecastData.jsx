import { useState } from "react";
import useWeatherContext from "../contexts/useWeatherContext";
import { convertToIST, convertToISTDate } from "../utils";

const HourlyForecastData = () => {
  const { hourlyForecast, unit } = useWeatherContext();
  // console.log("hourlyForecast: ", hourlyForecast);

  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  const [hourRange, setHourRange] = useState(7);

  if (!hourlyForecast) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <h3 className="text-xl font-bold">Hourly Forecast</h3>

        <ul className="menu menu-sm menu-horizontal bg-base-200 rounded-box p-0">
          <li>
            <button className="rounded-full" onClick={() => setHourRange(7)}>
              7 hrs
            </button>
          </li>
          <li>
            <button className="rounded-full" onClick={() => setHourRange(15)}>
              15 hrs
            </button>
          </li>
          <li>
            <button className="rounded-full" onClick={() => setHourRange(24)}>
              24 hrs
            </button>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto border rounded-xl">
        <table className="table table-zebra table-pin-rows max-sm:table-sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Temperature</th>
              <th>Feels Like</th>
              <th>Humidity</th>
              <th>Visibility</th>
              <th>Precipitation</th>
            </tr>
          </thead>
          <tbody>
            {hourlyForecast.hourly.time
              .slice(0, hourRange)
              .map((date, index) => (
                <tr key={index}>
                  <td>{convertToISTDate(date)}</td>
                  <td>{convertToIST(date)}</td>
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
