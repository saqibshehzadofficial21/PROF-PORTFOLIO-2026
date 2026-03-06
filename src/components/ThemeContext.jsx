// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "system";

    const saved = localStorage.getItem("theme");
    if (saved && ["dark", "light", "system"].includes(saved)) {
      return saved;
    }
    return "system";
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {

    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const darkMode =
        theme === "dark" || (theme === "system" && mq.matches);

      setIsDark(darkMode);

      root.classList.toggle("dark", darkMode);
      root.classList.toggle("light", !darkMode);

      root.style.colorScheme = darkMode ? "dark" : "light";

      localStorage.setItem("theme", theme);
    };

    applyTheme();

    const listener = () => {
      if (theme === "system") applyTheme();
    };

    mq.addEventListener("change", listener);

    return () => mq.removeEventListener("change", listener);

  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const value = {
    theme,
    setMode: setTheme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}