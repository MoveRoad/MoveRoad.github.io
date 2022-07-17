import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Theme/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
