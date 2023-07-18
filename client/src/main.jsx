import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ProductosContextProvider } from "./context/ProductosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductosContextProvider>
      <App />
    </ProductosContextProvider>
  </React.StrictMode>
);
