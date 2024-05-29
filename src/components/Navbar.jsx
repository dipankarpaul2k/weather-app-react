import {
  IconTemperatureCelsius as CelsiusIcon,
  IconTemperatureFahrenheit as FahrenheitIcon,
} from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const Navbar = () => {
  const { unit, toggleUnit } = useWeatherContext();

  return (
    <header className="border-b ">
      <nav className="flex items-center justify-between p-4">
        <h1 className="text-3xl max-sm:text-xl max-md:text-2xl font-bold">
          Weather Dashboard
        </h1>
        <div className="flex items-center">
          <button className="btn btn-sm btn-circle" onClick={toggleUnit}>
            {unit === "metric" ? (
              <CelsiusIcon stroke={2} height={`20px`} />
            ) : (
              <FahrenheitIcon stroke={2} height={`20px`} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
