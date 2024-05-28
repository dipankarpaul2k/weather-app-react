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
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          name="city"
          className="grow"
          placeholder="Enter city name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button type="submit" className="btn btn-info">
        {loading ? (
          <>
            <span className="loading loading-spinner"></span> Loading
          </>
        ) : (
          <span>Get Weather</span>
        )}
      </button>
    </form>
  );
};

export default FetchWeather;
