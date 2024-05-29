import {
  IconTemperatureCelsius as CelsiusIcon,
  IconTemperatureFahrenheit as FahrenheitIcon,
} from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const Header = () => {
  const { setUnit } = useWeatherContext();

  return (
    <header className="border-b ">
      {/* <nav className="flex items-center justify-between p-4">
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
      </nav> */}
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <h1 className="text-3xl max-sm:text-xl max-md:text-2xl font-bold">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a>Theme</a>
            </li> */}
            <li>
              <details>
                <summary>Unit</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <button onClick={() => setUnit("metric")}>
                      <CelsiusIcon stroke={2} height={`20px`} />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setUnit("imperial")}>
                      <FahrenheitIcon stroke={2} height={`20px`} />
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
