import {
  IconTemperatureCelsius as CelsiusIcon,
  IconTemperatureFahrenheit as FahrenheitIcon,
} from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const Header = () => {
  const { unit, toggleUnit } = useWeatherContext();

  return (
    <header className="border-b ">
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-3xl max-sm:text-xl max-md:text-2xl font-bold">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {/* <button className="btn btn-sm btn-ghost" onClick={toggleUnit}>
                {unit === "metric" ? (
                  <CelsiusIcon stroke={2} height={`20px`} />
                ) : (
                  <FahrenheitIcon stroke={2} height={`20px`} />
                )}
              </button> */}
            </li>
            <li>
              <button className="btn btn-sm btn-ghost" onClick={toggleUnit}>
                {unit === "metric" ? (
                  <CelsiusIcon stroke={2} height={`20px`} />
                ) : (
                  <FahrenheitIcon stroke={2} height={`20px`} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
