import { useDarkMode } from "../contexts/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className={`flex items-center pl-2 pr-2 gap-1 bg-gray-300 rounded-full dark:bg-gray-700 transition-all`}
    >
      <button
        className="
          rounded-full
          transition-all duration-300 ease-in-out p-1 dark:bg-gray-400
          cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {"🌞"}
      </button>
      <button
        className={`rounded-full transition-all p-1 duration-300 ease-in-out cursor-pointer bg-gray-400 dark:bg-gray-700`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {"🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggler;
