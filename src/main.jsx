import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import PhotosProvider from "./contexts/PhotoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotosProvider>
  </React.StrictMode>
);
