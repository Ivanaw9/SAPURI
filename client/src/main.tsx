import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "wouter";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router base={import.meta.env.BASE_URL}>
      <App />
    </Router>
  </React.StrictMode>
);
