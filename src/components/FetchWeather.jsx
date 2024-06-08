import { IconSearch } from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const FetchWeather = () => {
  const { fetchWeatherDataByCity, loading } = useWeatherContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    const target = event.currentTarget;
    const formData = new FormData(target);
    const city = formData.get("city");

    fetchWeatherDataByCity(city);
    target.reset();

    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="mb-4 w-full md:max-w-[500px]">
        <div className="join w-full">
          <input
            type="text"
            name="city"
            className="input input-bordered join-item rounded-l-full w-full focus:outline-none"
            placeholder="Search Any City"
            autoComplete="off"
          />
          <button
            className="btn join-item rounded-r-full btn-secondary"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>{" "}
                <span className="max-sm:hidden">Fetching</span>
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
