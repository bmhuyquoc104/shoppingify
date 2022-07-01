import Header from "./components/Header/Header";
import { lightTheme, darkTheme } from "./style/Theme";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import GlobalStyled from "./style/GlobalStyled";
function App() {
  const [ theme, themeToggler ] = useTheme();
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
      <ThemeProvider theme = {themeMode}>
        <GlobalStyled />
        <Header themeToggler = {themeToggler} theme = {theme}/>
        <h1>Hello world</h1>
      </ThemeProvider>
  );
}

export default App;
