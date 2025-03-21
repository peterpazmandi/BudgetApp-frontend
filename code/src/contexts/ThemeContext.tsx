import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface ThemeContext {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const initState: ThemeContext = {
  darkMode: false,
  setDarkMode: () => {},
}

const themeContext = createContext<ThemeContext>(initState);

export const ThemeProvider = (props: { children: ReactNode}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <themeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useDarkMode = () => useContext(themeContext);