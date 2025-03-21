import { useDarkMode } from "../contexts/ThemeContext";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <button
        className="
          rounded-md
          pl-4 pr-4
          transition-all duration-300 ease-in-out
          cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙" : "🌞"}
      </button>
    </>
  );
};

export default DarkModeToggler;
