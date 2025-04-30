import { useDarkMode } from "../contexts/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className={`flex items-center px-2 py-2 gap-1 color-container rounded-full transition-all`}
    >
      <button
        className="
          rounded-full
          transition-all duration-300 ease-in-out dark:bg-gray-400
          cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {"🌞"}
      </button>
      <button
        className={`rounded-full transition-all duration-300 ease-in-out cursor-pointer bg-gray-400 dark:bg-gray-700`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {"🌙"}
      </button>
    </div>
  );
};

export default DarkModeToggler;
