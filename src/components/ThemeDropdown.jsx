import { useEffect } from "react";
import { themeChange } from "theme-change";

import { themes } from "../utils/constants";

const ThemeDropdown = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <details>
      <summary>Theme</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        {themes.map((theme) => (
          <li key={theme.id} className="py-1">
            <button data-set-theme={theme.type} className="btn btn-sm">
              {theme.label}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ThemeDropdown;
