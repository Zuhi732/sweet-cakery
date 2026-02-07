import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext"; // <-- Context Import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* <-- পুরো App কে CartProvider দিয়ে র‍্যাপ করা হলো */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
