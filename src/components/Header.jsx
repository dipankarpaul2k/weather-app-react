import {
  IconTemperatureCelsius as CelsiusIcon,
  IconTemperatureFahrenheit as FahrenheitIcon,
} from "@tabler/icons-react";
import { useHeadroom } from "@mantine/hooks";

import useWeatherContext from "../contexts/useWeatherContext";
import ThemeDropdown from "./ThemeDropdown";

const Header = () => {
  const { unit, toggleUnit, currentWeather } = useWeatherContext();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <header
      className="border-b"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000000,
        transform: `translate3d(0, ${pinned ? 0 : `-110px`}, 0)`,
        transition: "transform 400ms ease",
      }}
    >
      <nav className="navbar bg-base-100 px-3 sm:px-4">
        <div className="flex-1">
          <h1 className="text-3xl max-sm:text-xl max-md:text-2xl font-bold">
            Weather Dashboard
          </h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
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
              <ThemeDropdown />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
