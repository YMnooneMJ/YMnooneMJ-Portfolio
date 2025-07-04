import { CgDarkMode } from "react-icons/cg";
import { MdOutlineFlashlightOn } from "react-icons/md";

interface ThemeToggleProps {
    darkmode: boolean;
    toggleDarkMode: () => void;
}

const ThemeToggle = ({ darkmode, toggleDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={`
        p-2 rounded-full
        bg-white/80 dark:bg-gray-800/80
        text-gray-800 dark:text-gray-200
        shadow-md ring-1 ring-gray-300 dark:ring-gray-700
        hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700
      `}
    >
      {darkmode ? (
        <MdOutlineFlashlightOn className="w-6 h-6 text-gray-600 transition-colors duration-300" />
      ) : (
        <CgDarkMode className="w-6 h-6 text-gray-900 dark:text-gray-300 transition-colors duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;