import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";

import { ProductsProvider } from "./contexts/product.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    <ProductsProvider>
      <App />
    </ProductsProvider>
    </Router>
  </StrictMode>
);
