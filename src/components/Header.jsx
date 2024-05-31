import { useEffect } from "react";
import { themeChange } from "theme-change";
import {
  IconTemperatureCelsius as CelsiusIcon,
  IconTemperatureFahrenheit as FahrenheitIcon,
} from "@tabler/icons-react";

import useWeatherContext from "../contexts/useWeatherContext";

const Header = () => {
  const { unit, toggleUnit, currentWeather } = useWeatherContext();

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <header className="border-b ">
      <nav className="navbar bg-base-100 p-3 sm:p-4">
        <div className="flex-1">
          <h1 className="text-3xl max-sm:text-xl max-md:text-2xl font-bold">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {/* toggle unit */}
            {currentWeather && (
              <li>
                <button className="btn btn-sm btn-ghost" onClick={toggleUnit}>
                  {unit === "metric" ? (
                    <>
                      <FahrenheitIcon stroke={2} height={`20px`} />
                    </>
                  ) : (
                    <>
                      <CelsiusIcon stroke={2} height={`20px`} />
                    </>
                  )}
                </button>
              </li>
            )}

            {/* toggle theme */}
            <li>
              <details>
                <summary>Theme</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <button data-set-theme="light" className="btn btn-sm">
                      Light
                    </button>
                  </li>
                  <li>
                    <button data-set-theme="dark" className="btn btn-sm">
                      Dark
                    </button>
                  </li>
                  <li>
                    <button data-set-theme="corporate" className="btn btn-sm">
                      Corporate
                    </button>
                  </li>
                  <li>
                    <button data-set-theme="retro" className="btn btn-sm">
                      Retro
                    </button>
                  </li>
                  <li>
                    <button data-set-theme="forest" className="btn btn-sm">
                      Forest
                    </button>
                  </li>
                  <li>
                    <button data-set-theme="dracula" className="btn btn-sm">
                      Dracula
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
