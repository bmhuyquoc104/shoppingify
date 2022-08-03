import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import HistoryDetail from "./pages/HistoryDetail";
import { useSelector } from "react-redux";
import Warning from "./components/PopUp/Warning/Warning";

function App() {
  // Get theme and themeToggler prop from custom useTheme hook
  const [theme, themeToggler] = useTheme();
  // Declare state for checking status of buttons
  const [isToggleEdit, setIsToggleEdit] = useState(false);
  const [isToggleCancel, setIsToggleCancel] = useState(false);
  const [isToggleWarning, setIsToggleWarning] = useState(false);

  // Conditionally declare and assign value for theme mode
  const themeMode = theme === "lightTheme" ? lightTheme : darkTheme;
  // Get the shopping detail from shopping detail feature
  const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  // Declare location
  const location = useLocation();
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
          setIsToggleWarning,
          isToggleWarning,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}>
              <Route path=":id" element={<ItemDetail />} />
              <Route path="" element={<ShoppingCart />} />
              <Route path="add" element={<Form />} />
            </Route>
            <Route path="history" element={<History />}>
              <Route path="" element={<ShoppingCart />} />
              <Route path="add" element={<Form />} />
            </Route>

            <Route
              path="history/history-detail/:id"
              element={<HistoryDetail />}
            >
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
        </AnimatePresence>

        {isToggleCancel && (
          <AbsoluteFlexContainerStyled>
            <Cancel />
          </AbsoluteFlexContainerStyled>
        )}
        {isToggleWarning && shoppingDetail.name !== "" && (
          <AbsoluteFlexContainerStyled>
            <Warning type="isEmptyName" />
          </AbsoluteFlexContainerStyled>
        )}
        {isToggleWarning && shoppingDetail.items.length <= 0 && (
          <AbsoluteFlexContainerStyled>
            <Warning />
          </AbsoluteFlexContainerStyled>
        )}
      </ToggleContext.Provider>
    </ThemeProvider>
  );
}

export default App;
