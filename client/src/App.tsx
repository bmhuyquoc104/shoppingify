import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import { lightTheme, darkTheme } from "./style/Theme";
import useTheme from "./hooks/useTheme";
import GlobalStyled from "./style/GlobalStyled";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Form from "./components/Form/Form";
import { ToggleEditContext } from "./hooks/useToggleContext";

function App() {
  const [theme, themeToggler] = useTheme();
  const [isToggleEdit, setIsToggleEdit] = useState(false);
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header themeToggler={themeToggler} theme={theme} />
      <ToggleEditContext.Provider value = {{isToggleEdit,setIsToggleEdit}}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<ItemDetail />} />
            <Route path="" element={<ShoppingCart />} />
            <Route path="add" element={<Form />} />
          </Route>
          <Route path="history" element={<History />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToggleEditContext.Provider>
    </ThemeProvider>
  );
}

export default App;
