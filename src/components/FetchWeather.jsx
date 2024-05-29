import { IconSearch } from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const FetchWeather = () => {
  const { fetchWeatherData, loading } = useWeatherContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    const target = event.currentTarget;
    const formData = new FormData(target);
    const city = formData.get("city");

    fetchWeatherData(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex items-center gap-2 max-sm:w-full"
    >
      <label className="input input-md input-bordered flex items-center gap-2 max-sm:flex-1">
        <input
          type="text"
          name="city"
          className="grow"
          placeholder="Enter city name"
          autoComplete="off"
        />
        <IconSearch stroke={2} height={"20px"} className="max-sm:hidden" />
      </label>

      <button type="submit" className="btn btn-info btn-md">
        {loading ? (
          <>
            <span className="loading loading-spinner"></span>{" "}
            <span className="max-sm:hidden">Loading</span>
          </>
        ) : (
          <>
            <IconSearch stroke={2} height={"20px"} className="sm:hidden" />
            <span className="max-sm:hidden">Get Weather</span>
          </>
        )}
      </button>
    </form>
  );
};

export default FetchWeather;
