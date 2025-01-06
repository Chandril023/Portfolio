import { CgDarkMode } from "react-icons/cg";
import { useState, useEffect } from "react";

function ToggleTheme({ switchTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect if dark mode is enabled on page load and set the initial state
  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    setIsDarkMode(darkMode);
  }, []);

  // Handle the theme toggle and update state
  const handleThemeSwitch = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light"); // Store theme preference
      switchTheme();
      return newTheme;
    });
  };

  return (
    <div className="relative">
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          onClick={handleThemeSwitch}
          className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5"
          aria-label={isDarkMode ? "Light Mode Button" : "Dark Mode Button"}
        >
          <CgDarkMode />
          {/* =========== TOOLTIP TEXT =========== */}
          <span
            className={`hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm ${isDarkMode ? "visible" : "invisible"}`}
            role="tooltip"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ToggleTheme;
