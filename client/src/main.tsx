import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import itemChoiceReducer from "./features/ItemSelected";
import shoppingDetailReducer from "./features/ShoppingDetail";
import App from "./App";

const client = new QueryClient();
const store = configureStore({
  reducer: {
    itemSelected: itemChoiceReducer,
    shoppingDetail: shoppingDetailReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </React.StrictMode>
  </QueryClientProvider>
);
