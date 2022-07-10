import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { lightTheme, darkTheme } from "./style/Theme";
import useTheme from "./hooks/useTheme";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Header from "./components/Header/Header";
import GlobalStyled from "./style/GlobalStyled";
import Form from "./components/Form/Form";
import { ToggleContext } from "./hooks/useToggleContext";
import Cancel from "./components/PopUp/Cancel";
import { AbsoluteFlexContainerStyled } from "./components/Container/AbsoluteFlexContainer";

function App() {
  const [theme, themeToggler] = useTheme();
  const [isToggleEdit, setIsToggleEdit] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyled />
      <Header themeToggler={themeToggler} theme={theme} />
      <ToggleContext.Provider
        value={{
          isToggleEdit,
          setIsToggleEdit,
          isToggleCancel,
          setIsToggleCancel,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<ItemDetail />} />
            <Route path="" element={<ShoppingCart />} />
            <Route path="add" element={<Form />} />
          </Route>
          <Route path="history" element={<History />}>
            <Route path=":id" element={<ItemDetail />} />
            <Route path="" element={<ShoppingCart />} />
            <Route path="add" element={<Form />} />
          </Route>
          <Route path="statistics" element={<Statistics />}>
            <Route path=":id" element={<ItemDetail />} />
            <Route path="" element={<ShoppingCart />} />
            <Route path="add" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isToggleCancel && (
          <AbsoluteFlexContainerStyled>
            <Cancel />
          </AbsoluteFlexContainerStyled>
        )}
      </ToggleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
