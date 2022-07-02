import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { lightTheme, darkTheme } from "./style/Theme";
import useTheme from "./hooks/useTheme";
import GlobalStyled from "./style/GlobalStyled";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
function App() {
  const [theme, themeToggler] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header themeToggler={themeToggler} theme={theme} />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/history" element = {<History/>}/>
        <Route path = "/statistics" element = {<Statistics/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
