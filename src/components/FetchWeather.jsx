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
    target.reset();
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="mb-4 w-full max-w-[500px]">
        <div className="join w-full">
          <input
            type="text"
            name="city"
            className="input input-bordered join-item rounded-l-full w-full"
            placeholder="Search"
            autoComplete="off"
          />
          <button className="btn join-item rounded-r-full btn-info">
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
        </div>
      </form>
    </div>
  );
};

export default FetchWeather;
