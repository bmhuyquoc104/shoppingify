import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("lightTheme");
  const setMode = (mode: string) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("lightTheme");
  }, []);
  const themeToggler = () => {
    theme === "lightTheme" ? setMode("darkTheme") : setMode("lightTheme");
  };
  return [themeToggler, theme];
}

export default useTheme;
