import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// app.js'de yazdığımız kodların html dosyası içerisinde hangi noktada ekrana basılacağını belirler
const root = ReactDOM.createRoot(document.getElementById("root"));

// app bileşenini id'si root olan divin içerisinde ekrana bas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
