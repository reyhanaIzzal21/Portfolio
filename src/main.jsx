import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import SplashCursor from "./SplashCursor";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <SplashCursor />
  </React.StrictMode>
);
